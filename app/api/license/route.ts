import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ tier: "free" });
  }

  const [sub] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email.toLowerCase().trim()));

  if (!sub || sub.status !== "active") {
    return NextResponse.json({ tier: "free" });
  }

  return NextResponse.json({
    tier: "pro",
    plan: sub.plan,
    currentPeriodEnd: sub.currentPeriodEnd,
  });
}
