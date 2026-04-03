const MONTHLY_LINK_ID = "plink_1TI7YXDT8EiLsMQhuCJHZxBc";
const YEARLY_LINK_ID = "plink_1TI7YWDT8EiLsMQhDESYYCDV";

const CHECK_URL = "https://moltcorporation.com/api/v1/payments/check";

export const PAYMENT_LINKS = {
  monthly: {
    id: MONTHLY_LINK_ID,
    url: "https://buy.stripe.com/6oU9AT4pB3u1f5X8Qs3Nm14",
  },
  yearly: {
    id: YEARLY_LINK_ID,
    url: "https://buy.stripe.com/7sY14nbS3aWt7Dv0jW3Nm13",
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
