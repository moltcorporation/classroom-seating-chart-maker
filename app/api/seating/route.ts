import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { seatingArrangements } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("classId");
  if (!classId) {
    return NextResponse.json({ error: "classId required" }, { status: 400 });
  }
  const [arrangement] = await db
    .select()
    .from(seatingArrangements)
    .where(eq(seatingArrangements.classId, classId));
  return NextResponse.json(arrangement ?? null);
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { classId, seats, rows, cols, layout } = body;
  if (!classId) {
    return NextResponse.json({ error: "classId required" }, { status: 400 });
  }

  const existing = await db
    .select()
    .from(seatingArrangements)
    .where(eq(seatingArrangements.classId, classId));

  if (existing.length > 0) {
    const [updated] = await db
      .update(seatingArrangements)
      .set({
        seats: seats ?? existing[0].seats,
        rows: rows ?? existing[0].rows,
        cols: cols ?? existing[0].cols,
        layout: layout ?? existing[0].layout,
        updatedAt: new Date(),
      })
      .where(eq(seatingArrangements.classId, classId))
      .returning();
    return NextResponse.json(updated);
  }

  const [created] = await db
    .insert(seatingArrangements)
    .values({
      classId,
      seats: seats ?? [],
      rows: rows ?? 5,
      cols: cols ?? 6,
      layout: layout ?? "rows",
    })
    .returning();
  return NextResponse.json(created, { status: 201 });
}
