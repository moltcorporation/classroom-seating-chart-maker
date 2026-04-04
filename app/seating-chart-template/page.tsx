import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Classroom Seating Chart Template | Customizable Layouts",
  description:
    "Download free classroom seating chart templates. Rows, grid, U-shape, and group layouts. Customize, add students, and print in minutes. No signup required.",
  keywords: [
    "classroom seating chart template",
    "seating chart template classroom",
    "free seating chart template",
    "printable seating chart template",
    "classroom seating template",
  ],
  alternates: {
    canonical: "https://classroomseatingchartmaker.com/seating-chart-template",
  },
};

function JsonLd() {
  const app = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Classroom Seating Chart Template",
    description:
      "Free customizable classroom seating chart template with multiple layout options. Drag-and-drop editing and PDF export.",
    url: "https://classroomseatingchartmaker.com/seating-chart-template",
    creator: {
      "@type": "Organization",
      name: "Classroom Seating Chart Maker",
    },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classroomseatingchartmaker.com" },
      { "@type": "ListItem", position: 2, name: "Seating Chart Template", item: "https://classroomseatingchartmaker.com/seating-chart-template" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function SeatingChartTemplate() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd />
      <header className="relative bg-wood-warm border-b-4 border-wood/60">
        <div className="wood-strip" />
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-heading text-xl font-bold text-chalkboard">Classroom Seating Chart Maker</Link>
          <Link href="/editor" className="rounded-lg bg-chalk-green px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-chalkboard transition-all">Open Editor</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="chalkboard-texture bg-chalkboard text-white rounded-2xl p-12 text-center -mx-6 -mt-16 mb-16">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Free Classroom Seating Chart Template
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-chalk-white/70">
            Use our free seating chart template to organize your classroom in minutes. Choose from multiple layout styles, customize for your space, and print instantly.
          </p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
              Use Template Now
            </Link>
          </div>
          <p className="mt-3 text-sm text-chalk-white/50">Free to use. No signup required.</p>
          <div className="wood-strip" />
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Template Layout Options</h2>
          <p className="mt-2 text-center text-foreground/60">
            Our template supports four classroom layouts. Start with one and customize to match your room.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {[
              { title: "Rows", desc: "Traditional front-facing rows. Perfect for lectures, tests, and direct instruction." },
              { title: "Grid", desc: "Evenly spaced desks in a grid. Ideal for independent work and monitoring all students." },
              { title: "U-Shape", desc: "Desks in a U formation for discussion-based learning where students see each other." },
              { title: "Groups", desc: "Desks clustered in groups of 4–6 for collaborative projects and teamwork." },
            ].map((layout) => (
              <div key={layout.title} className="rounded-2xl border border-wood-light/15 p-6 dark:border-chalk-white/10">
                <h3 className="text-lg font-semibold text-chalkboard dark:text-white">{layout.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{layout.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-wood-warm/30 dark:bg-chalkboard/20 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">How to Use This Template</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-foreground/60">
            <div className="flex gap-4">
              <div className="text-xl font-bold text-chalk-green shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-chalkboard dark:text-white">Choose a Layout</h3>
                <p>Select rows, grid, U-shape, or groups based on how you teach.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-xl font-bold text-chalk-green shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-chalkboard dark:text-white">Add Student Names</h3>
                <p>Drag students into seats or type names directly. Our template adapts to any class size.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-xl font-bold text-chalk-green shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-chalkboard dark:text-white">Customize as Needed</h3>
                <p>Adjust rows, columns, and desk positions to match your actual classroom dimensions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-xl font-bold text-chalk-green shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-chalkboard dark:text-white">Print or Export</h3>
                <p>Export as a PDF and print for your classroom wall, or share with substitutes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Why Teachers Choose This Template</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {[
              { title: "Save Time Planning", desc: "Stop hand-drawing seating charts. Build a professional layout in minutes." },
              { title: "Flexible & Customizable", desc: "Every aspect adjusts to your room size and teaching style." },
              { title: "Easy Adjustments", desc: "Move students around with drag-and-drop. Save multiple versions for different classes." },
              { title: "Print-Ready", desc: "Crisp PDFs ready for the wall, clipboard, or to share with admin." },
            ].map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-wood-light/15 p-6 dark:border-chalk-white/10">
                <h3 className="text-lg font-semibold text-chalkboard dark:text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-chalk-green-light/20 dark:bg-chalk-green/5 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Template Best Practices</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-foreground/60">
            <p>
              <strong className="text-chalkboard dark:text-white">Plan for Movement:</strong> Leave space around your seating chart for students to move between rows. Our template accounts for realistic classroom traffic flow.
            </p>
            <p>
              <strong className="text-chalkboard dark:text-white">Update Regularly:</strong> Save your template and update it as students move seats or classes change. You can manage multiple versions for each period.
            </p>
            <p>
              <strong className="text-chalkboard dark:text-white">Test Before Printing:</strong> Preview your template before printing to ensure the layout matches your actual room setup.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Related Tools</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <Link href="/seating-chart-generator" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">Seating Chart Generator</h3>
              <p className="mt-1 text-sm text-foreground/50">Auto-generate charts with AI assistance.</p>
            </Link>
            <Link href="/seating-chart-templates" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">All Templates</h3>
              <p className="mt-1 text-sm text-foreground/50">Browse our full template collection.</p>
            </Link>
            <Link href="/random-seating-chart-generator" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">Random Generator</h3>
              <p className="mt-1 text-sm text-foreground/50">Shuffle students into new seats.</p>
            </Link>
          </div>
        </section>

        <section className="mt-20 chalkboard-texture rounded-3xl bg-chalkboard p-12 text-center shadow-2xl relative overflow-hidden">
          <h2 className="font-heading text-2xl font-bold text-white">Ready to Use This Template?</h2>
          <p className="mt-2 text-chalk-white/70">Start customizing your classroom seating chart template now. It's free and takes just a few minutes.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
            Open Template Editor
          </Link>
        </section>
      </main>

      <footer className="border-t-4 border-wood/40 bg-chalkboard text-chalk-white/50">
        <div className="wood-strip" />
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm">Classroom Seating Chart Maker — Free for teachers.</p>
          <div className="flex gap-4 text-sm">
            <Link href="/" className="hover:text-pencil-yellow transition-colors">Home</Link>
            <Link href="/privacy-policy" className="hover:text-pencil-yellow transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
