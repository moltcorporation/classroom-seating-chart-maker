import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Classroom Seating Chart Maker",
  description:
    "Simple, transparent pricing for the Classroom Seating Chart Maker. Free forever option or Pro plan with unlimited classes and advanced features.",
};

const freeFeatures = [
  "1 class, up to 25 students",
  "Row layout",
  "Drag-and-drop editor",
  "Random shuffle",
  "CSV import",
  "PDF export (watermarked)",
];

const proFeatures = [
  "Unlimited classes",
  "All layouts: groups, U-shape, horseshoe, lab, orchestra",
  "Shuffle with separation constraints",
  "Clean PDF (no watermark)",
  "Share links for subs & admins",
  "Student notes & multiple periods",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-wood-warm relative">
        <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-chalkboard dark:text-white">
            ✏️ Classroom Seating Chart Maker
          </Link>
          <div className="flex gap-4">
            <Link
              href="/editor"
              className="rounded-lg px-4 py-2 text-sm font-medium text-chalk-green hover:bg-chalk-green/10 transition-colors"
            >
              Open Editor
            </Link>
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </div>
        </nav>
        <div className="wood-edge h-2" />
      </header>

      {/* Pricing Section */}
      <main className="mx-auto max-w-5xl px-6 py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <span className="text-4xl mb-4 inline-block">🍎</span>
          <h1 className="font-heading text-4xl font-bold text-chalkboard dark:text-white">
            Simple Pricing for Teachers
          </h1>
          <p className="mt-4 text-lg text-foreground/60">
            Start free. Upgrade when you need more. No credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-2 mb-16">
          {/* Free tier */}
          <div className="card-lift rounded-2xl border border-wood-light/20 bg-white p-8 dark:bg-chalkboard dark:border-chalk-white/10">
            <h2 className="font-heading text-2xl font-semibold text-chalkboard dark:text-white">
              Free
            </h2>
            <p className="mt-2 text-4xl font-bold text-chalkboard dark:text-white">
              $0
            </p>
            <p className="text-sm text-foreground/50 font-medium">Forever free</p>
            <p className="mt-4 text-sm text-foreground/60">
              Perfect for trying it out. No setup or credit card required.
            </p>
            <ul className="mt-8 space-y-3">
              {freeFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground/70"
                >
                  <span className="mt-0.5 text-chalk-green font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/editor"
              className="mt-8 block rounded-lg border-2 border-chalk-green/20 py-3 text-center text-sm font-semibold text-chalk-green hover:bg-chalk-green/5 transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Pro tier */}
          <div className="card-lift relative rounded-2xl border-2 border-chalk-green bg-white p-8 shadow-lg dark:bg-chalkboard">
            <span className="absolute -top-4 left-6 rounded-full bg-chalk-green px-4 py-1 text-xs font-bold text-white shadow-sm">
              Most Popular
            </span>
            <h2 className="font-heading text-2xl font-semibold text-chalkboard dark:text-white">
              Pro
            </h2>
            <div className="mt-2">
              <span className="text-4xl font-bold text-chalkboard dark:text-white">
                $3.99
              </span>
              <span className="text-sm text-foreground/50 font-medium">/month</span>
            </div>
            <p className="mt-2 text-sm text-foreground/50">
              or <span className="font-semibold text-chalkboard dark:text-white">$29.99/year</span> (save 37%)
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              Ideal for teachers managing multiple classes or needing advanced features.
            </p>
            <ul className="mt-8 space-y-3">
              {proFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground/70"
                >
                  <span className="mt-0.5 text-chalk-green font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2">
              <a
                href="https://buy.stripe.com/00wcN55tF2pX0b32s43Nm0o"
                className="block rounded-lg bg-chalk-green py-3 text-center text-sm font-bold text-white hover:bg-chalkboard transition-colors"
              >
                Upgrade to Pro — $29.99/year
              </a>
              <a
                href="https://buy.stripe.com/3cI28rg8jc0x3nfaYA3Nm0n"
                className="block text-center text-xs text-foreground/40 hover:text-chalk-green transition-colors py-2"
              >
                or $3.99/month
              </a>
              <Link
                href="/editor?upgrade=true"
                className="block text-center text-xs text-foreground/30 hover:text-chalk-green transition-colors py-2"
              >
                Already Pro? Verify access
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-20 border-t border-chalk-white/10 pt-16">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-chalkboard dark:text-white mb-2">
                Can I upgrade anytime?
              </h3>
              <p className="text-sm text-foreground/60">
                Yes! Start free with the Free tier and upgrade to Pro whenever you're ready. Your seating charts are saved and available immediately after upgrade.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-chalkboard dark:text-white mb-2">
                What happens if I don't pay?
              </h3>
              <p className="text-sm text-foreground/60">
                Nothing! The Free tier is genuinely free forever. You can keep using it with its features. No trial period, no credit card required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-chalkboard dark:text-white mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-sm text-foreground/60">
                Yes. You can cancel your Pro subscription anytime through your Stripe account. You'll keep access to your seating charts even after cancellation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-chalkboard dark:text-white mb-2">
                Do you offer school or district discounts?
              </h3>
              <p className="text-sm text-foreground/60">
                Not yet, but reach out if you're interested. We're open to discussing bulk pricing for schools and districts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 chalkboard-bg rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #f0ede8 1px, transparent 1px)', backgroundSize: '16px 16px'}} />
          <div className="relative">
            <h2 className="font-heading chalk-text text-2xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-chalk-white/70 mb-6">
              Create your first seating chart for free. No signup or credit card needed.
            </p>
            <Link
              href="/editor"
              className="cta-pulse inline-block rounded-lg bg-pencil-yellow px-8 py-3.5 text-sm font-bold text-chalkboard hover:bg-pencil-yellow/90 transition-colors shadow-lg"
            >
              Open the Editor →
            </Link>
          </div>
          <div className="chalk-tray mt-8 -mx-12 -mb-12 h-5 rounded-b-2xl" />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-wood-light/20 bg-wood-warm dark:bg-chalkboard dark:border-chalk-white/10">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-foreground/50">
          <p>
            <Link href="/" className="hover:text-chalk-green transition-colors">
              Home
            </Link>
            {" · "}
            <Link href="/privacy-policy" className="hover:text-chalk-green transition-colors">
              Privacy
            </Link>
          </p>
          <p className="mt-2 text-xs text-foreground/30">Classroom Seating Chart Maker — Free for teachers.</p>
        </div>
      </footer>
    </div>
  );
}
