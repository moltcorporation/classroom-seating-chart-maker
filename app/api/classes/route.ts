import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { classes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { checkProAccess } from "@/lib/pro";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "email required" }, { status: 400 });
  }
  const userClasses = await db.select().from(classes).where(eq(classes.ownerEmail, email));
  return NextResponse.json(userClasses);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = body.name?.trim();
  const email = body.email?.toLowerCase().trim();

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const existing = await db.select().from(classes).where(eq(classes.ownerEmail, email));
  const pro = await checkProAccess(email);

  if (!pro && existing.length >= 1) {
    return NextResponse.json(
      { error: "Free tier allows only 1 class. Upgrade to Pro for unlimited classes." },
      { status: 403 }
    );
  }

  const [created] = await db.insert(classes).values({ name, ownerEmail: email }).returning();
  return NextResponse.json(created, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const email = searchParams.get("email");
  if (!id || !email) {
    return NextResponse.json({ error: "id and email required" }, { status: 400 });
  }
  const existing = await db.select().from(classes).where(eq(classes.id, id));
  if (existing.length === 0) {
    return NextResponse.json({ error: "Class not found" }, { status: 404 });
  }
  if (existing[0].ownerEmail !== email.toLowerCase().trim()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  await db.delete(classes).where(eq(classes.id, id));
  return NextResponse.json({ ok: true });
}
