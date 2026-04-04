import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { students, classes } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { checkProAccess } from "@/lib/pro";
import { getOwnerId } from "@/lib/owner";

const FREE_STUDENT_LIMIT = 25;

async function verifyClassOwnership(classId: string, ownerId: string): Promise<boolean> {
  const [cls] = await db
    .select({ id: classes.id })
    .from(classes)
    .where(and(eq(classes.id, classId), eq(classes.ownerId, ownerId)));
  return !!cls;
}

export async function GET(req: NextRequest) {
  const ownerId = await getOwnerId();
  if (!ownerId) {
    return NextResponse.json({ error: "Session required" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("classId");
  if (!classId) {
    return NextResponse.json({ error: "classId required" }, { status: 400 });
  }

  if (!(await verifyClassOwnership(classId, ownerId))) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const list = await db
    .select()
    .from(students)
    .where(eq(students.classId, classId));
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const ownerId = await getOwnerId();
  if (!ownerId) {
    return NextResponse.json({ error: "Session required" }, { status: 401 });
  }

  const body = await req.json();
  const { classId, name, names, email } = body;

  if (!classId) {
    return NextResponse.json({ error: "classId required" }, { status: 400 });
  }

  if (!(await verifyClassOwnership(classId, ownerId))) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const pro = email ? await checkProAccess(email) : false;

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
  const ownerId = await getOwnerId();
  if (!ownerId) {
    return NextResponse.json({ error: "Session required" }, { status: 401 });
  }

  const body = await req.json();
  const { id, name } = body;
  if (!id || !name?.trim()) {
    return NextResponse.json({ error: "id and name required" }, { status: 400 });
  }

  // Verify the student belongs to a class owned by this user
  const [student] = await db
    .select({ classId: students.classId })
    .from(students)
    .where(eq(students.id, id));
  if (!student || !(await verifyClassOwnership(student.classId, ownerId))) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const [updated] = await db
    .update(students)
    .set({ name: name.trim() })
    .where(eq(students.id, id))
    .returning();
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const ownerId = await getOwnerId();
  if (!ownerId) {
    return NextResponse.json({ error: "Session required" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const classId = searchParams.get("classId");
  if (!id || !classId) {
    return NextResponse.json({ error: "id and classId required" }, { status: 400 });
  }

  if (!(await verifyClassOwnership(classId, ownerId))) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await db
    .delete(students)
    .where(and(eq(students.id, id), eq(students.classId, classId)));
  return NextResponse.json({ ok: true });
}
