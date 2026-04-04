const STORAGE_KEY = "cscm_exports";

export const FREE_LIMITS = {
  maxExportsPerDay: 2,
};

interface ExportTracker {
  count: number;
  date: string;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

export function getExportCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const data: ExportTracker = JSON.parse(raw);
    if (data.date !== getToday()) return 0;
    return data.count;
  } catch {
    return 0;
  }
}

export function incrementExport(): void {
  if (typeof window === "undefined") return;
  const count = getExportCount();
  const data: ExportTracker = { count: count + 1, date: getToday() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function canExport(): boolean {
  return getExportCount() < FREE_LIMITS.maxExportsPerDay;
}
