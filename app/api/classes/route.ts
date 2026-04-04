import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { classes } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { checkProAccess } from "@/lib/pro";
import { getOwnerId } from "@/lib/owner";

export async function GET() {
  const ownerId = await getOwnerId();
  if (!ownerId) {
    return NextResponse.json([], { status: 200 });
  }

  const userClasses = await db
    .select()
    .from(classes)
    .where(eq(classes.ownerId, ownerId));
  return NextResponse.json(userClasses);
}

export async function POST(req: NextRequest) {
  const ownerId = await getOwnerId();
  if (!ownerId) {
    return NextResponse.json({ error: "Session required" }, { status: 401 });
  }

  const body = await req.json();
  const name = body.name?.trim();
  const email = body.email || null;

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const existing = await db
    .select()
    .from(classes)
    .where(eq(classes.ownerId, ownerId));
  const pro = email ? await checkProAccess(email) : false;

  if (!pro && existing.length >= 1) {
    return NextResponse.json(
      { error: "Free tier allows only 1 class. Upgrade to Pro for unlimited classes." },
      { status: 403 }
    );
  }

  const [created] = await db
    .insert(classes)
    .values({ name, ownerId })
    .returning();
  return NextResponse.json(created, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const ownerId = await getOwnerId();
  if (!ownerId) {
    return NextResponse.json({ error: "Session required" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id required" }, { status: 400 });
  }

  await db
    .delete(classes)
    .where(and(eq(classes.id, id), eq(classes.ownerId, ownerId)));
  return NextResponse.json({ ok: true });
}
