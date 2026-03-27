import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { students, subscriptions } from "@/db/schema";
import { eq, and } from "drizzle-orm";

async function isPro(email: string | null): Promise<boolean> {
  if (!email) return false;
  const [sub] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email.toLowerCase().trim()));
  return sub?.status === "active";
}

const FREE_STUDENT_LIMIT = 25;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("classId");
  if (!classId) {
    return NextResponse.json({ error: "classId required" }, { status: 400 });
  }
  const list = await db
    .select()
    .from(students)
    .where(eq(students.classId, classId));
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { classId, name, names, email } = body;

  if (!classId) {
    return NextResponse.json({ error: "classId required" }, { status: 400 });
  }

  const pro = await isPro(email || null);

  // Batch import (CSV)
  if (Array.isArray(names)) {
    const existing = await db
      .select()
      .from(students)
      .where(eq(students.classId, classId));

    if (!pro && existing.length + names.length > FREE_STUDENT_LIMIT) {
      return NextResponse.json(
        { error: `Free tier allows max ${FREE_STUDENT_LIMIT} students per class.` },
        { status: 403 }
      );
    }

    const toInsert = names
      .map((n: string) => n.trim())
      .filter((n: string) => n.length > 0)
      .map((n: string) => ({ classId, name: n }));

    if (toInsert.length === 0) {
      return NextResponse.json({ error: "No valid names" }, { status: 400 });
    }

    const created = await db.insert(students).values(toInsert).returning();
    return NextResponse.json(created, { status: 201 });
  }

  // Single add
  const trimmed = name?.trim();
  if (!trimmed) {
    return NextResponse.json({ error: "name required" }, { status: 400 });
  }

  const existing = await db
    .select()
    .from(students)
    .where(eq(students.classId, classId));

  if (!pro && existing.length >= FREE_STUDENT_LIMIT) {
    return NextResponse.json(
      { error: `Free tier allows max ${FREE_STUDENT_LIMIT} students per class.` },
      { status: 403 }
    );
  }

  const [created] = await db
    .insert(students)
    .values({ classId, name: trimmed })
    .returning();
  return NextResponse.json(created, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, name } = body;
  if (!id || !name?.trim()) {
    return NextResponse.json({ error: "id and name required" }, { status: 400 });
  }
  const [updated] = await db
    .update(students)
    .set({ name: name.trim() })
    .where(eq(students.id, id))
    .returning();
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const classId = searchParams.get("classId");
  if (!id || !classId) {
    return NextResponse.json({ error: "id and classId required" }, { status: 400 });
  }
  await db
    .delete(students)
    .where(and(eq(students.id, id), eq(students.classId, classId)));
  return NextResponse.json({ ok: true });
}
