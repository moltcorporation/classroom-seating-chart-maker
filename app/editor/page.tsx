"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Student {
  id: string;
  classId: string;
  name: string;
}

interface Seat {
  row: number;
  col: number;
  studentId: string | null;
}

interface ClassData {
  id: string;
  name: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const DESK_W = 100;
const DESK_H = 60;
const GAP_X = 20;
const GAP_Y = 20;
const PADDING = 40;

// ─── Editor Page ─────────────────────────────────────────────────────────────

export default function EditorPage() {
  const [currentClass, setCurrentClass] = useState<ClassData | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newStudentName, setNewStudentName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [dragStudentId, setDragStudentId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [className, setClassName] = useState("");
  const svgRef = useRef<SVGSVGElement>(null);

  // ─── Pro tier state ─────────────────────────────────────────────────────────

  const [tier, setTier] = useState<"free" | "pro">("free");
  const [proEmail, setProEmail] = useState<string | null>(null);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [upgradeEmail, setUpgradeEmail] = useState("");
  const [upgradePlan, setUpgradePlan] = useState<"monthly" | "yearly">("yearly");
  const checkoutLoading = false;

  const isPro = tier === "pro";

  // ─── Check license on mount ─────────────────────────────────────────────────

  useEffect(() => {
    const stored = localStorage.getItem("proEmail");
    if (stored) {
      setProEmail(stored);
      setUpgradeEmail(stored);
      fetch(`/api/license?email=${encodeURIComponent(stored)}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.tier === "pro") setTier("pro");
        })
        .catch(() => {});
    }

    // Check for upgrade query param from landing page
    const params = new URLSearchParams(window.location.search);
    if (params.get("upgrade") === "true") {
      setShowUpgrade(true);
      window.history.replaceState({}, "", "/editor");
    }

    // Check for post-checkout redirect
    if (params.get("upgraded") === "true") {
      const email = localStorage.getItem("proEmail");
      if (email) {
        fetch(`/api/license?email=${encodeURIComponent(email)}`)
          .then((r) => r.json())
          .then((data) => {
            if (data.tier === "pro") setTier("pro");
          })
          .catch(() => {});
      } else {
        // No stored email — prompt user to verify their purchase
        setShowUpgrade(true);
      }
      window.history.replaceState({}, "", "/editor");
    }
  }, []);

  // ─── Payment link URLs ─────────────────────────────────────────────────────

  const PAYMENT_URLS = {
    monthly: "https://buy.stripe.com/3cI28rg8jc0x3nfaYA3Nm0n",
    yearly: "https://buy.stripe.com/00wcN55tF2pX0b32s43Nm0o",
  };

  function handleCheckout() {
    if (!upgradeEmail.trim()) return;
    const email = upgradeEmail.toLowerCase().trim();
    localStorage.setItem("proEmail", email);
    setProEmail(email);
    const url = `${PAYMENT_URLS[upgradePlan]}?prefilled_email=${encodeURIComponent(email)}`;
    window.location.href = url;
  }

  function handleVerifyAccess() {
    if (!upgradeEmail.trim()) return;
    const email = upgradeEmail.toLowerCase().trim();
    localStorage.setItem("proEmail", email);
    setProEmail(email);
    fetch(`/api/license?email=${encodeURIComponent(email)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.tier === "pro") {
          setTier("pro");
          setShowUpgrade(false);
        } else {
          setError("No active Pro subscription found for this email. If you just purchased, it may take a moment to process.");
        }
      })
      .catch(() => setError("Failed to verify access. Please try again."));
  }

  // ─── Load class on mount ───────────────────────────────────────────────────

  useEffect(() => {
    async function loadClassOnMount() {
      setLoading(true);
      try {
        const res = await fetch("/api/classes");
        const classList: ClassData[] = await res.json();
        if (classList.length > 0) {
          setCurrentClass(classList[0]);
          const [studRes, seatRes] = await Promise.all([
            fetch(`/api/students?classId=${classList[0].id}`),
            fetch(`/api/seating?classId=${classList[0].id}`),
          ]);
          const studList: Student[] = await studRes.json();
          setStudents(studList);
          const seatData = await seatRes.json();
          if (seatData) {
            setSeats(seatData.seats as Seat[]);
            setRows(seatData.rows);
            setCols(seatData.cols);
          }
        }
      } catch {
        setError("Failed to load class data");
      }
      setLoading(false);
    }
    loadClassOnMount();
  }, []);

  // ─── Class CRUD ────────────────────────────────────────────────────────────

  async function createClass() {
    if (!className.trim()) return;
    const res = await fetch("/api/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: className.trim(), email: proEmail }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error);
      return;
    }
    const created: ClassData = await res.json();
    setCurrentClass(created);
    setClassName("");
    setSeats([]);
    setStudents([]);
  }

  // ─── Student CRUD ──────────────────────────────────────────────────────────

  async function addStudent() {
    if (!currentClass || !newStudentName.trim()) return;
    const res = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        classId: currentClass.id,
        name: newStudentName.trim(),
        email: proEmail,
      }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error);
      return;
    }
    const created: Student = await res.json();
    setStudents((prev) => [...prev, created]);
    setNewStudentName("");
  }

  async function updateStudent(id: string, name: string) {
    const res = await fetch("/api/students", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name }),
    });
    if (res.ok) {
      setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, name } : s)));
    }
    setEditingId(null);
  }

  async function deleteStudent(id: string) {
    if (!currentClass) return;
    await fetch(`/api/students?id=${id}&classId=${currentClass.id}`, {
      method: "DELETE",
    });
    setStudents((prev) => prev.filter((s) => s.id !== id));
    setSeats((prev) =>
      prev.map((s) => (s.studentId === id ? { ...s, studentId: null } : s))
    );
  }

  async function importCSV() {
    if (!currentClass) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv,.txt";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const text = await file.text();
      const names = text
        .split(/[\n,]/)
        .map((n) => n.trim())
        .filter((n) => n.length > 0);
      if (names.length === 0) return;

      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classId: currentClass.id, names, email: proEmail }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error);
        return;
      }
      const created: Student[] = await res.json();
      setStudents((prev) => [...prev, ...created]);
    };
    input.click();
  }

  // ─── Seating logic ─────────────────────────────────────────────────────────

  function generateRowSeats(r: number, c: number): Seat[] {
    const newSeats: Seat[] = [];
    for (let row = 0; row < r; row++) {
      for (let col = 0; col < c; col++) {
        newSeats.push({ row, col, studentId: null });
      }
    }
    return newSeats;
  }

  function applyGridSize(newRows: number, newCols: number) {
    setRows(newRows);
    setCols(newCols);
    const newSeats = generateRowSeats(newRows, newCols);
    // Preserve existing assignments
    for (const oldSeat of seats) {
      if (oldSeat.studentId) {
        const match = newSeats.find(
          (s) => s.row === oldSeat.row && s.col === oldSeat.col
        );
        if (match) match.studentId = oldSeat.studentId;
      }
    }
    setSeats(newSeats);
  }

  useEffect(() => {
    if (currentClass && seats.length === 0) {
      setSeats(generateRowSeats(rows, cols));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentClass]);

  function shuffleStudents() {
    const studentIds = students.map((s) => s.id);
    // Fisher-Yates shuffle
    for (let i = studentIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [studentIds[i], studentIds[j]] = [studentIds[j], studentIds[i]];
    }
    const newSeats = seats.map((s, i) => ({
      ...s,
      studentId: i < studentIds.length ? studentIds[i] : null,
    }));
    setSeats(newSeats);
  }

  const saveSeating = useCallback(async () => {
    if (!currentClass) return;
    setSaving(true);
    await fetch("/api/seating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ classId: currentClass.id, seats, rows, cols }),
    });
    setSaving(false);
  }, [currentClass, seats, rows, cols]);

  // ─── Drag and drop ─────────────────────────────────────────────────────────

  function handleDragStart(studentId: string) {
    setDragStudentId(studentId);
  }

  function handleDeskDrop(row: number, col: number) {
    if (!dragStudentId) return;
    setSeats((prev) =>
      prev.map((s) => {
        // Remove student from old seat
        if (s.studentId === dragStudentId) return { ...s, studentId: null };
        // Place in new seat
        if (s.row === row && s.col === col) return { ...s, studentId: dragStudentId };
        return s;
      })
    );
    setDragStudentId(null);
  }

  function handleUnseat(studentId: string) {
    setSeats((prev) =>
      prev.map((s) => (s.studentId === studentId ? { ...s, studentId: null } : s))
    );
  }

  // ─── Print ─────────────────────────────────────────────────────────────────

  function handlePrint() {
    window.print();
  }

  // ─── Derived ───────────────────────────────────────────────────────────────

  const seatedIds = new Set(seats.filter((s) => s.studentId).map((s) => s.studentId));
  const unseatedStudents = students.filter((s) => !seatedIds.has(s.id));
  const studentMap = Object.fromEntries(students.map((s) => [s.id, s]));

  const svgW = PADDING * 2 + cols * DESK_W + (cols - 1) * GAP_X;
  const svgH = PADDING * 2 + rows * DESK_H + (rows - 1) * GAP_Y + 30;

  // ─── Render ────────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-foreground/60">Loading...</p>
      </div>
    );
  }

  // ─── Upgrade Modal ─────────────────────────────────────────────────────────

  const upgradeModal = showUpgrade && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl bg-chalk-white p-6 dark:bg-chalkboard/40">
        <h2 className="text-xl font-bold text-chalkboard dark:text-chalk-white">
          Upgrade to Pro
        </h2>
        <p className="mt-2 text-sm text-foreground/60">
          Unlimited classes, all layouts, clean PDF, student notes, and more.
        </p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-foreground dark:text-wood/30">
            Email address
          </label>
          <input
            type="email"
            value={upgradeEmail}
            onChange={(e) => setUpgradeEmail(e.target.value)}
            placeholder="you@school.edu"
            className="mt-1 w-full rounded-lg border border-wood/20 px-3 py-2 text-sm dark:border-chalk-green/40 dark:bg-chalkboard/30 dark:text-chalk-white"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => setUpgradePlan("yearly")}
            className={`flex-1 rounded-lg border-2 p-3 text-left text-sm ${
              upgradePlan === "yearly"
                ? "border-blue-600 bg-pencil-yellow/10 dark:bg-chalkboard/20"
                : "border-wood/10 dark:border-chalk-green/40"
            }`}
          >
            <div className="font-semibold text-chalkboard dark:text-chalk-white">
              $29.99/year
            </div>
            <div className="text-xs text-foreground/60">Save 37%</div>
          </button>
          <button
            onClick={() => setUpgradePlan("monthly")}
            className={`flex-1 rounded-lg border-2 p-3 text-left text-sm ${
              upgradePlan === "monthly"
                ? "border-blue-600 bg-pencil-yellow/10 dark:bg-chalkboard/20"
                : "border-wood/10 dark:border-chalk-green/40"
            }`}
          >
            <div className="font-semibold text-chalkboard dark:text-chalk-white">
              $3.99/month
            </div>
            <div className="text-xs text-foreground/60">Flexible</div>
          </button>
        </div>

        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setShowUpgrade(false)}
            className="flex-1 rounded-lg border border-wood/20 py-2 text-sm font-medium text-foreground hover:bg-chalk-green-light dark:border-chalk-green/40 dark:text-wood/30"
          >
            Cancel
          </button>
          <button
            onClick={handleCheckout}
            disabled={checkoutLoading || !upgradeEmail.trim()}
            className="flex-1 rounded-lg bg-chalk-green py-2 text-sm font-medium text-white hover:bg-chalkboard disabled:opacity-50"
          >
            {checkoutLoading ? "Redirecting..." : "Continue to Payment"}
          </button>
        </div>

        <button
          onClick={handleVerifyAccess}
          disabled={!upgradeEmail.trim()}
          className="mt-3 w-full text-center text-sm text-chalk-green hover:underline disabled:opacity-50 disabled:no-underline"
        >
          Already purchased? Verify access
        </button>
      </div>
    </div>
  );

  if (!currentClass) {
    return (
      <div className="flex h-screen items-center justify-center">
        {upgradeModal}
        <div className="w-full max-w-md rounded-xl border border-wood/10 bg-chalk-white p-8 dark:border-chalk-green/30 dark:bg-chalkboard/40">
          <h1 className="text-2xl font-bold text-chalkboard dark:text-chalk-white">
            Create Your Class
          </h1>
          <p className="mt-2 text-sm text-foreground/60">
            {isPro ? "Pro: Unlimited classes" : "Free tier: 1 class, up to 25 students"}
          </p>
          {error && (
            <p className="mt-3 text-sm text-red-500">{error}</p>
          )}
          <div className="mt-6 flex gap-2">
            <input
              type="text"
              placeholder="e.g. Mrs. Smith's 3rd Grade"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && createClass()}
              className="flex-1 rounded-lg border border-wood/20 px-3 py-2 text-sm dark:border-chalk-green/40 dark:bg-chalkboard/30 dark:text-chalk-white"
            />
            <button
              onClick={createClass}
              className="rounded-lg bg-chalk-green px-4 py-2 text-sm font-medium text-white hover:bg-chalkboard"
            >
              Create
            </button>
          </div>
          {!isPro && (
            <button
              onClick={() => setShowUpgrade(true)}
              className="mt-4 w-full text-center text-sm text-chalk-green hover:underline"
            >
              Upgrade to Pro for unlimited classes
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      {upgradeModal}

      {/* Header */}
      <header className="flex items-center justify-between border-b border-wood/10 px-4 py-3 dark:border-chalk-green/30 print:hidden">
        <div>
          <h1 className="text-lg font-bold text-chalkboard dark:text-chalk-white">
            {currentClass.name}
          </h1>
          <p className="text-xs text-foreground/60">
            {students.length}{isPro ? "" : "/25"} students &middot; {seatedIds.size} seated
            {isPro && (
              <span className="ml-2 rounded-full bg-pencil-yellow/20 px-2 py-0.5 text-xs font-medium text-wood dark:bg-chalkboard/30 dark:text-pencil-yellow">
                Pro
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {!isPro && (
            <button
              onClick={() => setShowUpgrade(true)}
              className="rounded-lg border border-chalk-green/20 bg-pencil-yellow/10 px-3 py-1.5 text-sm font-medium text-chalk-green hover:bg-pencil-yellow/20 dark:border-chalk-green/40 dark:bg-chalkboard/20 dark:text-pencil-yellow"
            >
              Upgrade
            </button>
          )}
          <button
            onClick={shuffleStudents}
            className="rounded-lg border border-wood/20 px-3 py-1.5 text-sm font-medium text-foreground hover:bg-chalk-green-light/70 dark:border-chalk-green/40 dark:text-wood/30 dark:hover:bg-chalkboard/50"
          >
            Shuffle
          </button>
          <button
            onClick={saveSeating}
            disabled={saving}
            className="rounded-lg bg-chalk-green px-3 py-1.5 text-sm font-medium text-white hover:bg-chalkboard disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save"}
          </button>
          <button
            onClick={handlePrint}
            className="rounded-lg border border-wood/20 px-3 py-1.5 text-sm font-medium text-foreground hover:bg-chalk-green-light/70 dark:border-chalk-green/40 dark:text-wood/30 dark:hover:bg-chalkboard/50"
          >
            Print / PDF
          </button>
        </div>
      </header>

      {error && (
        <div className="border-b border-red-200 bg-red-50 px-4 py-2 print:hidden">
          <p className="text-sm text-red-600">{error}</p>
          <button
            onClick={() => setError(null)}
            className="text-xs text-red-400 underline"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — Student Roster */}
        <aside className="flex w-72 flex-col border-r border-wood/10 dark:border-chalk-green/30 print:hidden">
          <div className="border-b border-wood/10 p-3 dark:border-chalk-green/30">
            <h2 className="text-sm font-semibold text-foreground dark:text-wood/30">
              Student Roster
            </h2>
            <div className="mt-2 flex gap-1">
              <input
                type="text"
                placeholder="Add student..."
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addStudent()}
                className="flex-1 rounded border border-wood/20 px-2 py-1 text-sm dark:border-chalk-green/40 dark:bg-chalkboard/30 dark:text-chalk-white"
              />
              <button
                onClick={addStudent}
                className="rounded bg-chalk-green px-2 py-1 text-sm text-white hover:bg-chalkboard"
              >
                +
              </button>
            </div>
            <button
              onClick={importCSV}
              className="mt-2 w-full rounded border border-dashed border-wood/20 py-1 text-xs text-foreground/60 hover:border-chalk-green/60 hover:text-foreground/70 dark:border-chalk-green/40"
            >
              Import CSV
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {students.length === 0 && (
              <p className="mt-4 text-center text-xs text-foreground/60">
                No students yet. Add students above or import a CSV.
              </p>
            )}
            {students.map((student) => (
              <div
                key={student.id}
                draggable
                onDragStart={() => handleDragStart(student.id)}
                className={`mb-1 flex items-center justify-between rounded px-2 py-1.5 text-sm cursor-grab active:cursor-grabbing ${
                  seatedIds.has(student.id)
                    ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    : "bg-chalk-green-light text-foreground dark:bg-chalkboard/30 dark:text-wood/30"
                }`}
              >
                {editingId === student.id ? (
                  <input
                    autoFocus
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    onBlur={() => updateStudent(student.id, editName)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") updateStudent(student.id, editName);
                      if (e.key === "Escape") setEditingId(null);
                    }}
                    className="flex-1 rounded border border-wood/20 px-1 py-0.5 text-xs dark:bg-chalkboard/30 dark:border-chalk-green/40"
                  />
                ) : (
                  <span
                    onDoubleClick={() => {
                      setEditingId(student.id);
                      setEditName(student.name);
                    }}
                    className="flex-1 truncate"
                    title="Double-click to edit"
                  >
                    {student.name}
                  </span>
                )}
                <div className="ml-1 flex items-center gap-1">
                  {seatedIds.has(student.id) && (
                    <button
                      onClick={() => handleUnseat(student.id)}
                      className="text-xs text-foreground/50 hover:text-orange-500"
                      title="Remove from seat"
                    >
                      &times;
                    </button>
                  )}
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="text-xs text-foreground/50 hover:text-red-500"
                    title="Delete student"
                  >
                    &minus;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 overflow-auto bg-chalk-green-light dark:bg-zinc-950 relative">
          {/* Grid size controls */}
          <div className="absolute top-3 right-3 flex items-center gap-2 text-xs text-foreground/60 print:hidden z-10">
            <label>
              Rows:
              <input
                type="number"
                min={1}
                max={10}
                value={rows}
                onChange={(e) => applyGridSize(Number(e.target.value), cols)}
                className="ml-1 w-12 rounded border px-1 py-0.5 text-center dark:border-chalk-green/40 dark:bg-chalkboard/30"
              />
            </label>
            <label>
              Cols:
              <input
                type="number"
                min={1}
                max={10}
                value={cols}
                onChange={(e) => applyGridSize(rows, Number(e.target.value))}
                className="ml-1 w-12 rounded border px-1 py-0.5 text-center dark:border-chalk-green/40 dark:bg-chalkboard/30"
              />
            </label>
          </div>

          {/* SVG Room Canvas */}
          <div className="flex items-center justify-center p-8 min-h-full">
            <svg
              ref={svgRef}
              width={svgW}
              height={svgH}
              viewBox={`0 0 ${svgW} ${svgH}`}
              className="bg-white rounded-xl border border-wood/10 shadow-sm dark:bg-chalkboard/40 dark:border-chalk-green/30"
            >
              {/* "Front of room" label */}
              <text
                x={svgW / 2}
                y={20}
                textAnchor="middle"
                className="fill-zinc-400 text-xs"
                fontSize={12}
              >
                FRONT OF ROOM
              </text>
              <line
                x1={PADDING}
                y1={28}
                x2={svgW - PADDING}
                y2={28}
                stroke="#d4d4d8"
                strokeWidth={1}
              />

              {/* Desks */}
              {seats.map((seat) => {
                const x = PADDING + seat.col * (DESK_W + GAP_X);
                const y = 40 + seat.row * (DESK_H + GAP_Y);
                const student = seat.studentId
                  ? studentMap[seat.studentId]
                  : null;

                return (
                  <g
                    key={`${seat.row}-${seat.col}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDeskDrop(seat.row, seat.col)}
                  >
                    <rect
                      x={x}
                      y={y}
                      width={DESK_W}
                      height={DESK_H}
                      rx={6}
                      className={
                        student
                          ? "fill-blue-50 stroke-blue-300 dark:fill-blue-900/30 dark:stroke-blue-600"
                          : "fill-zinc-100 stroke-zinc-300 stroke-dashed dark:fill-zinc-800 dark:stroke-zinc-600"
                      }
                      strokeWidth={1.5}
                    />
                    {student ? (
                      <text
                        x={x + DESK_W / 2}
                        y={y + DESK_H / 2 + 4}
                        textAnchor="middle"
                        fontSize={12}
                        className="fill-zinc-800 dark:fill-zinc-200 select-none"
                        style={{ pointerEvents: "none" }}
                      >
                        {student.name.length > 12
                          ? student.name.slice(0, 11) + "..."
                          : student.name}
                      </text>
                    ) : (
                      <text
                        x={x + DESK_W / 2}
                        y={y + DESK_H / 2 + 3}
                        textAnchor="middle"
                        fontSize={10}
                        className="fill-zinc-400 select-none"
                        style={{ pointerEvents: "none" }}
                      >
                        Empty
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Watermark — only shown for free tier */}
              {!isPro && (
                <text
                  x={svgW / 2}
                  y={svgH - 10}
                  textAnchor="middle"
                  fontSize={10}
                  className="fill-zinc-300 dark:fill-zinc-700 print:fill-zinc-400"
                >
                  Made with Classroom Seating Chart Maker (Free)
                </text>
              )}
            </svg>
          </div>

          {/* Unseated students indicator */}
          {unseatedStudents.length > 0 && (
            <div className="absolute bottom-3 left-3 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-700 print:hidden">
              {unseatedStudents.length} student{unseatedStudents.length !== 1 ? "s" : ""} not
              seated. Drag them to a desk or click Shuffle.
            </div>
          )}
        </main>
      </div>

      {/* Print-only styles */}
      <style jsx global>{`
        @media print {
          header,
          aside,
          .print\\:hidden {
            display: none !important;
          }
          main {
            overflow: visible !important;
          }
          body {
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
}
