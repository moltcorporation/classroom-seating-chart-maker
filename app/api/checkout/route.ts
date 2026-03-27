import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, plan } = body;

  if (!email || !plan) {
    return NextResponse.json(
      { error: "email and plan are required" },
      { status: 400 }
    );
  }

  if (plan !== "monthly" && plan !== "yearly") {
    return NextResponse.json(
      { error: "plan must be 'monthly' or 'yearly'" },
      { status: 400 }
    );
  }

  const priceId =
    plan === "monthly"
      ? process.env.STRIPE_MONTHLY_PRICE_ID!
      : process.env.STRIPE_YEARLY_PRICE_ID!;

  const origin = req.headers.get("origin") || "http://localhost:3000";

  const session = await getStripe().checkout.sessions.create({
    mode: "subscription",
    customer_email: email,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/editor?upgraded=true`,
    cancel_url: `${origin}/editor`,
    metadata: { email, plan },
  });

  return NextResponse.json({ url: session.url });
}
