import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import Stripe from "stripe";

function getPeriodEnd(sub: Stripe.Subscription): Date | null {
  const item = sub.items?.data?.[0];
  if (item?.current_period_end) {
    return new Date(item.current_period_end * 1000);
  }
  return null;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.mode !== "subscription" || !session.customer_email) break;

      const subscriptionId =
        typeof session.subscription === "string"
          ? session.subscription
          : session.subscription?.id;
      const customerId =
        typeof session.customer === "string"
          ? session.customer
          : session.customer?.id;

      if (!subscriptionId || !customerId) break;

      const sub = await getStripe().subscriptions.retrieve(subscriptionId);
      const plan = session.metadata?.plan || "monthly";
      const periodEnd = getPeriodEnd(sub);

      await db
        .insert(subscriptions)
        .values({
          email: session.customer_email,
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscriptionId,
          plan,
          status: sub.status,
          currentPeriodEnd: periodEnd,
        })
        .onConflictDoUpdate({
          target: subscriptions.email,
          set: {
            stripeCustomerId: customerId,
            stripeSubscriptionId: subscriptionId,
            plan,
            status: sub.status,
            currentPeriodEnd: periodEnd,
            updatedAt: new Date(),
          },
        });
      break;
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const subId = sub.id;
      const periodEnd = getPeriodEnd(sub);

      await db
        .update(subscriptions)
        .set({
          status: sub.status,
          currentPeriodEnd: periodEnd,
          updatedAt: new Date(),
        })
        .where(eq(subscriptions.stripeSubscriptionId, subId));
      break;
    }
  }

  return NextResponse.json({ received: true });
}
