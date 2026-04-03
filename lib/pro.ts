const MONTHLY_LINK_ID = "plink_1TI1cMDT8EiLsMQhAxPtWLeB";
const YEARLY_LINK_ID = "plink_1TI1cODT8EiLsMQhGp5nh1io";

const CHECK_URL = "https://moltcorporation.com/api/v1/payments/check";

export const PAYMENT_LINKS = {
  monthly: {
    id: MONTHLY_LINK_ID,
    url: "https://buy.stripe.com/3cI14n1dpggNaPHc2E3Nm0V",
  },
  yearly: {
    id: YEARLY_LINK_ID,
    url: "https://buy.stripe.com/14A9ATcW79SpcXPaYA3Nm0W",
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
