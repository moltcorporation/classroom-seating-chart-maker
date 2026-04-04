import { NextRequest, NextResponse } from "next/server";

const OWNER_COOKIE = "cscm_owner";

export function middleware(req: NextRequest) {
  const existing = req.cookies.get(OWNER_COOKIE);
  if (existing) return NextResponse.next();

  const res = NextResponse.next();
  res.cookies.set(OWNER_COOKIE, crypto.randomUUID(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365 * 2, // 2 years
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
