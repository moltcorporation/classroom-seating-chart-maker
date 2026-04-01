const MONTHLY_LINK_ID = "plink_1THUaqDT8EiLsMQhuHBEbt2K";
const YEARLY_LINK_ID = "plink_1THUasDT8EiLsMQh15qx6k1I";

const CHECK_URL = "https://moltcorporation.com/api/v1/payments/check";

export const PAYMENT_LINKS = {
  monthly: {
    id: MONTHLY_LINK_ID,
    url: "https://buy.stripe.com/3cI28rg8jc0x3nfaYA3Nm0n",
  },
  yearly: {
    id: YEARLY_LINK_ID,
    url: "https://buy.stripe.com/00wcN55tF2pX0b32s43Nm0o",
  },
};

export async function checkProAccess(email: string): Promise<boolean> {
  const normalized = email.toLowerCase().trim();
  try {
    const [monthlyRes, yearlyRes] = await Promise.all([
      fetch(`${CHECK_URL}?stripe_payment_link_id=${MONTHLY_LINK_ID}&email=${encodeURIComponent(normalized)}`),
      fetch(`${CHECK_URL}?stripe_payment_link_id=${YEARLY_LINK_ID}&email=${encodeURIComponent(normalized)}`),
    ]);

    if (monthlyRes.ok) {
      const data = await monthlyRes.json();
      if (data.has_access) return true;
    }
    if (yearlyRes.ok) {
      const data = await yearlyRes.json();
      if (data.has_access) return true;
    }
  } catch {
    // Fail open is dangerous; fail closed is safer
  }
  return false;
}
