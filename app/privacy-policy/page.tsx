import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Classroom Seating Chart Maker",
  description: "Privacy policy for Classroom Seating Chart Maker.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative bg-wood-warm border-b-4 border-wood/60">
        <div className="wood-strip" />
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-heading text-xl font-bold text-chalkboard">
            Classroom Seating Chart Maker
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-heading text-3xl font-bold text-chalkboard dark:text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm text-foreground/50">Last updated: March 27, 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/60">
          <section>
            <h2 className="font-heading text-lg font-bold text-chalkboard dark:text-white">
              Information We Collect
            </h2>
            <p className="mt-2">
              Classroom Seating Chart Maker collects minimal data necessary to provide the service:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Class names and student names you enter into the editor</li>
              <li>Seating arrangement data (desk positions and assignments)</li>
              <li>If you subscribe to Pro: email address and payment information processed by Stripe</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-chalkboard dark:text-white">How We Use Your Data</h2>
            <p className="mt-2">
              Your data is used solely to save and load your seating charts. We do not sell, share, or
              use your data for advertising. Student names and class data are stored in our database
              to enable the cloud save feature.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-chalkboard dark:text-white">Data Storage</h2>
            <p className="mt-2">
              Data is stored securely on Neon (PostgreSQL) servers. Payment processing is handled by
              Stripe and subject to{" "}
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-chalk-green hover:text-chalkboard dark:hover:text-white">
                Stripe&apos;s privacy policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-chalkboard dark:text-white">Analytics</h2>
            <p className="mt-2">
              We use privacy-friendly analytics (Umami) to understand how the site is used. No
              personal data is collected by our analytics. No cookies are used for tracking.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-chalkboard dark:text-white">Data Deletion</h2>
            <p className="mt-2">
              You can delete your class and all associated student data at any time through the editor.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-chalkboard dark:text-white">Children&apos;s Privacy</h2>
            <p className="mt-2">
              This tool is designed for teachers and school administrators. We do not knowingly collect
              personal information from children under 13. Student names entered by teachers are
              considered educational records under the teacher&apos;s control.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-bold text-chalkboard dark:text-white">Changes to This Policy</h2>
            <p className="mt-2">
              We may update this policy from time to time. Changes will be posted on this page.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t-4 border-wood/40 bg-chalkboard text-chalk-white/50">
        <div className="wood-strip" />
        <div className="mx-auto max-w-3xl px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm">Classroom Seating Chart Maker — Free for teachers.</p>
          <Link href="/" className="text-sm hover:text-pencil-yellow transition-colors">Home</Link>
        </div>
      </footer>
    </div>
  );
}
