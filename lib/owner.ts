import { cookies } from "next/headers";

const OWNER_COOKIE = "cscm_owner";

export async function getOwnerId(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(OWNER_COOKIE)?.value ?? null;
}
