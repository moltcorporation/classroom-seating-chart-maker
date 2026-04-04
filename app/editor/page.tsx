"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { PAYMENT_LINKS } from "@/lib/pro";
import { canExport, incrementExport, getExportCount, FREE_LIMITS } from "@/lib/free-tier";

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

// ─── Student avatar colors ───────────────────────────────────────────────────

const AVATAR_COLORS = [
  "#f4d03f", "#e67e22", "#e74c3c", "#9b59b6", "#3498db",
  "#1abc9c", "#2ecc71", "#f39c12", "#e84393", "#00b894",
  "#fd79a8", "#6c5ce7", "#00cec9", "#fab1a0", "#a29bfe",
  "#ffeaa7", "#dfe6e9", "#b2bec3", "#636e72", "#74b9ff",
];

function getAvatarColor(studentId: string): string {
  let hash = 0;
  for (let i = 0; i < studentId.length; i++) {
    hash = studentId.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

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

    const params = new URLSearchParams(window.location.search);
    if (params.get("upgrade") === "true") {
      setShowUpgrade(true);
      window.history.replaceState({}, "", "/editor");
    }

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
        setShowUpgrade(true);
      }
      window.history.replaceState({}, "", "/editor");
    }
  }, []);

  // ─── Payment link URLs ─────────────────────────────────────────────────────

  const PAYMENT_URLS = {
    monthly: PAYMENT_LINKS.monthly.url,
    yearly: PAYMENT_LINKS.yearly.url,
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

  // ─── Class CRUD ─────────────────────────────────────────���──────────────────

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
        if (s.studentId === dragStudentId) return { ...s, studentId: null };
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
    if (!isPro && !canExport()) {
      setShowUpgrade(true);
      return;
    }
    if (!isPro) {
      incrementExport();
    }
    window.print();
  }

  // ─── Derived ───────────────────────────────────────────────────────────────

  const seatedIds = new Set(seats.filter((s) => s.studentId).map((s) => s.studentId));
  const unseatedStudents = students.filter((s) => !seatedIds.has(s.id));
  const studentMap = Object.fromEntries(students.map((s) => [s.id, s]));
  const remainingExports = FREE_LIMITS.maxExportsPerDay - getExportCount();

  const svgW = PADDING * 2 + cols * DESK_W + (cols - 1) * GAP_X;
  const svgH = PADDING * 2 + rows * DESK_H + (rows - 1) * GAP_Y + 30;

  // ���── Render ────────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-wood-warm/30">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 animate-spin text-chalk-green/40" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="8" />
          </svg>
          <p className="mt-3 text-sm text-foreground/50 font-heading">Loading your classroom...</p>
        </div>
      </div>
    );
  }

  // ─── Upgrade Modal ─────────────────────────────────────────────────────────

  const upgradeModal = showUpgrade && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-chalkboard/40 border border-wood/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chalk-green">
            <svg className="h-5 w-5 text-pencil-yellow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-chalkboard dark:text-chalk-white">
              Upgrade to Pro
            </h2>
            <p className="text-xs text-foreground/50">Unlock unlimited classes and features</p>
          </div>
        </div>
        <p className="text-sm text-foreground/60">
          Unlimited classes, all layouts, unlimited prints, clean PDF, student notes, and more.
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
            className={`flex-1 rounded-xl border-2 p-3 text-left text-sm transition-colors ${
              upgradePlan === "yearly"
                ? "border-chalk-green bg-chalk-green-light/50 dark:bg-chalkboard/20"
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
            className={`flex-1 rounded-xl border-2 p-3 text-left text-sm transition-colors ${
              upgradePlan === "monthly"
                ? "border-chalk-green bg-chalk-green-light/50 dark:bg-chalkboard/20"
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
            className="flex-1 rounded-xl border border-wood/20 py-2.5 text-sm font-medium text-foreground hover:bg-wood-warm transition-colors dark:border-chalk-green/40 dark:text-wood/30"
          >
            Cancel
          </button>
          <button
            onClick={handleCheckout}
            disabled={checkoutLoading || !upgradeEmail.trim()}
            className="flex-1 rounded-xl bg-chalk-green py-2.5 text-sm font-bold text-white hover:bg-chalkboard disabled:opacity-50 transition-colors"
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
      <div className="flex h-screen items-center justify-center bg-wood-warm/30">
        {upgradeModal}
        <div className="w-full max-w-md rounded-2xl border-2 border-wood/15 bg-white p-8 shadow-lg dark:border-chalk-green/30 dark:bg-chalkboard/40">
          {/* Classroom illustration */}
          <div className="mx-auto mb-6 flex items-center justify-center">
            <svg viewBox="0 0 120 60" className="w-32 h-16">
              {/* Mini classroom */}
              <rect x="40" y="2" width="40" height="12" rx="2" fill="#8b6914" opacity="0.6" />
              <text x="60" y="11" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">Teacher</text>
              {[0,1,2].map(col => (
                <g key={col}>
                  <rect x={20 + col * 32} y="24" width="24" height="14" rx="2" fill="#d4a853" opacity="0.5" />
                  <circle cx={32 + col * 32} cy="20" r="5" fill={["#f4d03f","#3498db","#e74c3c"][col]} opacity="0.6" />
                </g>
              ))}
              {[0,1,2].map(col => (
                <g key={`r2-${col}`}>
                  <rect x={20 + col * 32} y="46" width="24" height="14" rx="2" fill="#d4a853" opacity="0.5" />
                  <circle cx={32 + col * 32} cy="42" r="5" fill={["#9b59b6","#2ecc71","#e67e22"][col]} opacity="0.6" />
                </g>
              ))}
            </svg>
          </div>
          <h1 className="text-center text-2xl font-heading font-bold text-chalkboard dark:text-chalk-white">
            Create Your Class
          </h1>
          <p className="mt-2 text-center text-sm text-foreground/60">
            {isPro ? "Pro: Unlimited classes" : "Free tier: 1 class, up to 25 students"}
          </p>
          {error && (
            <p className="mt-3 text-sm text-apple-red text-center">{error}</p>
          )}
          <div className="mt-6 flex gap-2">
            <input
              type="text"
              placeholder="e.g. Mrs. Smith's 3rd Grade"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && createClass()}
              className="flex-1 rounded-xl border-2 border-wood/15 px-4 py-2.5 text-sm focus:border-chalk-green focus:outline-none dark:border-chalk-green/40 dark:bg-chalkboard/30 dark:text-chalk-white"
            />
            <button
              onClick={createClass}
              className="rounded-xl bg-chalk-green px-5 py-2.5 text-sm font-bold text-white hover:bg-chalkboard transition-colors"
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
    <div className="flex h-screen flex-col bg-wood-warm/20">
      {upgradeModal}

      {/* Header — warm classroom header bar */}
      <header className="flex items-center justify-between border-b-2 border-wood/15 bg-white px-4 py-3 shadow-sm print:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-chalkboard">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="10" width="18" height="4" rx="1" fill="#d4a853" />
              <rect x="5" y="14" width="2" height="6" rx="0.5" fill="#8b6914" />
              <rect x="17" y="14" width="2" height="6" rx="0.5" fill="#8b6914" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-heading font-bold text-chalkboard dark:text-chalk-white">
              {currentClass.name}
            </h1>
            <p className="text-xs text-foreground/50">
              {students.length}{isPro ? "" : "/25"} students &middot; {seatedIds.size} seated
              {isPro && (
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-pencil-yellow/20 px-2 py-0.5 text-xs font-bold text-wood dark:bg-chalkboard/30 dark:text-pencil-yellow">
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  Pro
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!isPro && (
            <button
              onClick={() => setShowUpgrade(true)}
              className="rounded-xl border-2 border-pencil-yellow/40 bg-pencil-yellow/10 px-3 py-1.5 text-sm font-bold text-wood hover:bg-pencil-yellow/20 transition-colors"
            >
              <svg className="inline-block h-3.5 w-3.5 mr-1 -mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Upgrade
            </button>
          )}
          <button
            onClick={shuffleStudents}
            className="rounded-xl border-2 border-wood/15 bg-white px-3 py-1.5 text-sm font-medium text-foreground hover:bg-chalk-green-light hover:border-chalk-green/20 transition-colors dark:border-chalk-green/40 dark:text-wood/30 dark:hover:bg-chalkboard/50"
            title="Randomly shuffle all students"
          >
            {/* Bell icon for shuffle */}
            <svg className="inline-block h-4 w-4 mr-1 -mt-0.5 text-wood" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3c-4 0-6 2.5-6 6.5v3.5l-1.5 2.5h15L18 13V9.5C18 5.5 16 3 12 3z" />
              <path d="M10 19c0 1.1.9 2 2 2s2-.9 2-2" />
            </svg>
            Shuffle
          </button>
          <button
            onClick={saveSeating}
            disabled={saving}
            className="rounded-xl bg-chalk-green px-4 py-1.5 text-sm font-bold text-white hover:bg-chalkboard disabled:opacity-50 transition-colors shadow-sm"
          >
            {saving ? "Saving..." : "Save"}
          </button>
          <div className="relative">
            <button
              onClick={handlePrint}
              className="rounded-xl border-2 border-wood/15 bg-white px-3 py-1.5 text-sm font-medium text-foreground hover:bg-chalk-green-light hover:border-chalk-green/20 transition-colors dark:border-chalk-green/40 dark:text-wood/30 dark:hover:bg-chalkboard/50"
            >
              <svg className="inline-block h-4 w-4 mr-1 -mt-0.5 text-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
              </svg>
              Print / PDF
            </button>
            {!isPro && (
              <span className="absolute -top-2 -right-2 bg-chalk-green text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                {remainingExports} left
              </span>
            )}
          </div>
        </div>
      </header>

      {error && (
        <div className="border-b border-apple-red/20 bg-apple-red/5 px-4 py-2 print:hidden">
          <p className="text-sm text-apple-red">{error}</p>
          <button
            onClick={() => setError(null)}
            className="text-xs text-apple-red/60 underline"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — Student Roster */}
        <aside className="flex w-72 flex-col border-r-2 border-wood/15 bg-white print:hidden">
          <div className="border-b border-wood/10 p-3">
            <div className="flex items-center gap-2 mb-2">
              <svg className="h-4 w-4 text-chalk-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
              <h2 className="text-sm font-heading font-bold text-chalkboard">
                Student Roster
              </h2>
            </div>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Add student..."
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addStudent()}
                className="flex-1 rounded-lg border-2 border-wood/12 px-2.5 py-1.5 text-sm focus:border-chalk-green focus:outline-none dark:border-chalk-green/40 dark:bg-chalkboard/30 dark:text-chalk-white"
              />
              <button
                onClick={addStudent}
                className="rounded-lg bg-chalk-green px-3 py-1.5 text-sm font-bold text-white hover:bg-chalkboard transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={importCSV}
              className="mt-2 w-full rounded-lg border-2 border-dashed border-wood/15 py-1.5 text-xs font-medium text-foreground/50 hover:border-chalk-green/30 hover:text-chalk-green hover:bg-chalk-green-light/30 transition-all"
            >
              <svg className="inline-block h-3.5 w-3.5 mr-1 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Import CSV
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {students.length === 0 && (
              <div className="mt-6 text-center px-4">
                {/* Empty classroom illustration */}
                <svg viewBox="0 0 80 60" className="mx-auto w-20 h-15 mb-3">
                  {[0,1,2].map(col => (
                    <g key={col}>
                      <rect x={8 + col * 24} y="20" width="18" height="10" rx="2" fill="#d4a853" opacity="0.3" />
                      <circle cx={17 + col * 24} cy="16" r="5" stroke="#ccc" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                    </g>
                  ))}
                  {[0,1,2].map(col => (
                    <g key={`r2-${col}`}>
                      <rect x={8 + col * 24} y="40" width="18" height="10" rx="2" fill="#d4a853" opacity="0.3" />
                      <circle cx={17 + col * 24} cy="36" r="5" stroke="#ccc" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                    </g>
                  ))}
                </svg>
                <p className="text-xs text-foreground/40 font-medium">
                  Your classroom is empty!
                </p>
                <p className="text-xs text-foreground/30 mt-1">
                  Add students above or import a CSV file.
                </p>
              </div>
            )}
            {students.map((student) => {
              const color = getAvatarColor(student.id);
              const isSeated = seatedIds.has(student.id);
              return (
                <div
                  key={student.id}
                  draggable
                  onDragStart={() => handleDragStart(student.id)}
                  className={`mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm cursor-grab active:cursor-grabbing transition-colors ${
                    isSeated
                      ? "bg-chalk-green-light/60 text-chalk-green dark:bg-green-900/20 dark:text-green-400"
                      : "bg-wood-warm/50 text-foreground hover:bg-wood-warm dark:bg-chalkboard/30 dark:text-wood/30"
                  }`}
                >
                  {/* Student avatar dot */}
                  <div
                    className="h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0 shadow-sm"
                    style={{ backgroundColor: color }}
                  >
                    {student.name.charAt(0).toUpperCase()}
                  </div>
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
                      className="flex-1 rounded border px-1 py-0.5 text-xs dark:bg-zinc-700 dark:border-zinc-600"
                    />
                  ) : (
                    <span
                      onDoubleClick={() => {
                        setEditingId(student.id);
                        setEditName(student.name);
                      }}
                      className="flex-1 truncate text-sm"
                      title="Double-click to edit"
                    >
                      {student.name}
                    </span>
                  )}
                  <div className="ml-auto flex items-center gap-1 shrink-0">
                    {isSeated && (
                      <button
                        onClick={() => handleUnseat(student.id)}
                        className="text-xs text-foreground/30 hover:text-apple-red transition-colors"
                        title="Remove from seat"
                      >
                        &times;
                      </button>
                    )}
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="text-xs text-foreground/30 hover:text-apple-red transition-colors"
                      title="Delete student"
                    >
                      &minus;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 overflow-auto bg-wood-warm/20 dark:bg-zinc-950 relative">
          {/* Grid size controls */}
          <div className="absolute top-3 right-3 flex items-center gap-3 text-xs print:hidden z-10 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-wood/10 shadow-sm">
            <label className="flex items-center gap-1 text-foreground/50">
              <span className="font-medium">Rows</span>
              <input
                type="number"
                min={1}
                max={10}
                value={rows}
                onChange={(e) => applyGridSize(Number(e.target.value), cols)}
                className="w-12 rounded-md border border-wood/15 px-1.5 py-0.5 text-center text-foreground focus:border-chalk-green focus:outline-none dark:border-chalk-green/40 dark:bg-chalkboard/30"
              />
            </label>
            <label className="flex items-center gap-1 text-foreground/50">
              <span className="font-medium">Cols</span>
              <input
                type="number"
                min={1}
                max={10}
                value={cols}
                onChange={(e) => applyGridSize(rows, Number(e.target.value))}
                className="w-12 rounded-md border border-wood/15 px-1.5 py-0.5 text-center text-foreground focus:border-chalk-green focus:outline-none dark:border-chalk-green/40 dark:bg-chalkboard/30"
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
              className="bg-white rounded-2xl border-2 border-wood/10 shadow-md dark:bg-chalkboard/40 dark:border-chalk-green/30"
            >
              {/* Subtle floor pattern */}
              <defs>
                <pattern id="floor" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="transparent" />
                  <line x1="0" y1="40" x2="40" y2="40" stroke="#e8d5c4" strokeWidth="0.5" opacity="0.3" />
                  <line x1="40" y1="0" x2="40" y2="40" stroke="#e8d5c4" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <rect x="0" y="0" width={svgW} height={svgH} fill="url(#floor)" rx="16" />

              {/* "Front of room" — styled like a chalkboard strip */}
              <rect x={PADDING - 10} y={6} width={svgW - PADDING * 2 + 20} height={20} rx={4} fill="#1a3a2a" opacity="0.8" />
              <text
                x={svgW / 2}
                y={20}
                textAnchor="middle"
                fontSize={10}
                fill="#f0ede8"
                fontWeight="bold"
                style={{ letterSpacing: '1px' }}
              >
                FRONT OF ROOM
              </text>

              {/* Desks with student avatars */}
              {seats.map((seat) => {
                const x = PADDING + seat.col * (DESK_W + GAP_X);
                const y = 40 + seat.row * (DESK_H + GAP_Y);
                const student = seat.studentId
                  ? studentMap[seat.studentId]
                  : null;
                const avatarColor = seat.studentId ? getAvatarColor(seat.studentId) : "#ccc";

                return (
                  <g
                    key={`${seat.row}-${seat.col}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDeskDrop(seat.row, seat.col)}
                  >
                    {student ? (
                      <>
                        {/* Student avatar (circle above desk) */}
                        <circle
                          cx={x + DESK_W / 2}
                          cy={y + 6}
                          r={10}
                          fill={avatarColor}
                          opacity={0.85}
                        />
                        <text
                          x={x + DESK_W / 2}
                          y={y + 10}
                          textAnchor="middle"
                          fontSize={9}
                          fill="white"
                          fontWeight="bold"
                          style={{ pointerEvents: "none" }}
                        >
                          {student.name.charAt(0).toUpperCase()}
                        </text>
                        {/* Desk surface */}
                        <rect
                          x={x}
                          y={y + 18}
                          width={DESK_W}
                          height={DESK_H - 18}
                          rx={4}
                          fill="#d4a853"
                          opacity={0.85}
                        />
                        {/* Wood grain highlight */}
                        <rect
                          x={x}
                          y={y + 18}
                          width={DESK_W}
                          height={6}
                          rx={4}
                          fill="#8b6914"
                          opacity={0.2}
                        />
                        {/* Desk legs */}
                        <rect x={x + 6} y={y + DESK_H} width={3} height={6} rx={1} fill="#7a5c12" opacity={0.4} />
                        <rect x={x + DESK_W - 9} y={y + DESK_H} width={3} height={6} rx={1} fill="#7a5c12" opacity={0.4} />
                        {/* Student name on desk */}
                        <text
                          x={x + DESK_W / 2}
                          y={y + 38}
                          textAnchor="middle"
                          fontSize={11}
                          fill="#2c2416"
                          fontWeight="600"
                          style={{ pointerEvents: "none" }}
                        >
                          {student.name.length > 12
                            ? student.name.slice(0, 11) + "..."
                            : student.name}
                        </text>
                      </>
                    ) : (
                      <>
                        {/* Empty desk — dashed outline with placeholder */}
                        <rect
                          x={x}
                          y={y + 18}
                          width={DESK_W}
                          height={DESK_H - 18}
                          rx={4}
                          fill="#f5f0e8"
                          stroke="#d4a853"
                          strokeWidth={1.5}
                          strokeDasharray="6 3"
                          opacity={0.6}
                        />
                        {/* Empty seat circle (dashed) */}
                        <circle
                          cx={x + DESK_W / 2}
                          cy={y + 6}
                          r={8}
                          fill="none"
                          stroke="#ccc"
                          strokeWidth={1}
                          strokeDasharray="3 3"
                          opacity={0.5}
                        />
                        <text
                          x={x + DESK_W / 2}
                          y={y + 38}
                          textAnchor="middle"
                          fontSize={9}
                          fill="#bbb"
                          style={{ pointerEvents: "none" }}
                        >
                          Drag here
                        </text>
                      </>
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
            <div className="absolute bottom-3 left-3 rounded-xl bg-pencil-yellow/10 border-2 border-pencil-yellow/30 px-4 py-2.5 print:hidden shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {unseatedStudents.slice(0, 3).map(s => (
                    <div key={s.id} className="h-5 w-5 rounded-full border-2 border-white text-[7px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: getAvatarColor(s.id) }}>
                      {s.name.charAt(0)}
                    </div>
                  ))}
                  {unseatedStudents.length > 3 && (
                    <div className="h-5 w-5 rounded-full border-2 border-white bg-foreground/20 text-[7px] font-bold text-foreground/60 flex items-center justify-center">
                      +{unseatedStudents.length - 3}
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium text-wood">
                  {unseatedStudents.length} student{unseatedStudents.length !== 1 ? "s" : ""} not
                  seated
                </span>
              </div>
              <p className="text-[10px] text-foreground/40 mt-0.5">Drag them to a desk or click Shuffle</p>
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
