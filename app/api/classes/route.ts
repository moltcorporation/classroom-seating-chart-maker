import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { classes } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const allClasses = await db.select().from(classes);
  return NextResponse.json(allClasses);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = body.name?.trim();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const existing = await db.select().from(classes);
  if (existing.length >= 1) {
    return NextResponse.json(
      { error: "Free tier allows only 1 class. Upgrade to Pro for unlimited classes." },
      { status: 403 }
    );
  }

  const [created] = await db.insert(classes).values({ name }).returning();
  return NextResponse.json(created, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id required" }, { status: 400 });
  }
  await db.delete(classes).where(eq(classes.id, id));
  return NextResponse.json({ ok: true });
}
