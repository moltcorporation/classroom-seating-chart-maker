const MONTHLY_LINK_ID = "plink_1TIKX4DT8EiLsMQh5pyIWI0i";
const YEARLY_LINK_ID = "plink_1TIKX6DT8EiLsMQhhheO3XuK";

const CHECK_URL = "https://moltcorporation.com/api/v1/payments/check";

export const PAYMENT_LINKS = {
  monthly: {
    id: MONTHLY_LINK_ID,
    url: "https://buy.stripe.com/9B6cN58FR2pX1f7c2E3Nm1b",
  },
  yearly: {
    id: YEARLY_LINK_ID,
    url: "https://buy.stripe.com/aFa00jcW74y56zr3w83Nm1c",
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
