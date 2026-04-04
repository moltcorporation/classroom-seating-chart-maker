import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Seating Chart Templates for Classroom | Row, Grid, U-Shape & Groups",
  description:
    "Free seating chart templates for classroom use. Choose from row, grid, U-shape, and group templates. Customize layouts, add students, and print. No signup required.",
  keywords: [
    "seating chart template classroom",
    "template for classroom seating chart",
    "free seating chart template for classroom",
    "seating chart template classroom free",
    "classroom seating chart template",
  ],
  alternates: {
    canonical: "https://classroomseatingchartmaker.com/seating-chart-templates",
  },
};

function JsonLd() {
  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Classroom Seating Chart Templates",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: "https://classroomseatingchartmaker.com/seating-chart-templates",
    description:
      "Free seating chart templates for classroom use. Row, grid, U-shape, and group layouts ready to customize.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Classroom Seating Chart Maker", item: "https://classroomseatingchartmaker.com" },
      { "@type": "ListItem", position: 2, name: "Seating Chart Templates", item: "https://classroomseatingchartmaker.com/seating-chart-templates" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

const faqItems = [
  {
    q: "What seating chart templates are available?",
    a: "We offer four classroom seating chart templates: traditional rows, grid layout, U-shape (horseshoe), and small groups (clusters). Each template is fully customizable — adjust the number of rows, columns, and seats to match your classroom.",
  },
  {
    q: "Are these seating chart templates free?",
    a: "Yes! The row template is completely free with up to 25 students. Grid, U-shape, and group templates are available with Pro ($3.99/month). All templates include drag-and-drop editing and PDF export.",
  },
  {
    q: "Can I customize the templates after choosing one?",
    a: "Absolutely. Every template is a starting point. After selecting a layout, you can adjust rows and columns, drag students between seats, add or remove desks, and save multiple configurations for different class periods.",
  },
  {
    q: "Can I print my seating chart from a template?",
    a: "Yes. Once you've arranged students on your template, click the print/export button to generate a PDF. Free users get a watermarked PDF. Pro users get clean exports ready to post on the classroom wall or share with substitutes.",
  },
];

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const templates = [
  {
    title: "Traditional Rows",
    desc: "Classic front-facing rows. Best for lectures, tests, and direct instruction. Students face the board with clear sightlines to the teacher.",
    tag: "Free",
  },
  {
    title: "Grid Layout",
    desc: "Evenly spaced desks in a grid pattern. Works well for independent work and standardized testing. Easy to monitor all students.",
    tag: "Pro",
  },
  {
    title: "U-Shape / Horseshoe",
    desc: "Desks arranged in a U facing inward. Ideal for class discussions, Socratic seminars, and presentations where students need to see each other.",
    tag: "Pro",
  },
  {
    title: "Small Groups / Clusters",
    desc: "Desks grouped in clusters of 4–6. Perfect for collaborative projects, group work, and cooperative learning activities.",
    tag: "Pro",
  },
];

const benefits = [
  {
    title: "Save Hours of Planning",
    desc: "Pick a template, add your students, and your seating chart is ready. No more drawing layouts by hand or fiddling with spreadsheets.",
  },
  {
    title: "Switch Layouts Instantly",
    desc: "Moving from lecture to group work? Swap templates without re-entering student names. Your roster stays the same across all layouts.",
  },
  {
    title: "Customize Everything",
    desc: "Adjust rows, columns, and desk count to match your actual room. Every template adapts to your space — not the other way around.",
  },
  {
    title: "Print-Ready Output",
    desc: "Export any template as a clean PDF. Post it on the wall, hand it to a substitute, or share with your admin — all in one click.",
  },
];

export default function SeatingChartTemplates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <JsonLd />
      <FaqJsonLd />
      <header className="border-b border-emerald-200/30 dark:border-slate-700/30 backdrop-blur-sm bg-white/40 dark:bg-slate-900/40">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-emerald-950 dark:text-emerald-50">Classroom Seating Chart Maker</Link>
          <Link href="/editor" className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg transform hover:scale-105">Open Editor</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 sm:text-5xl">
            Free Seating Chart Templates for Classroom
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            Start with a ready-made classroom seating chart template. Choose rows, grid, U-shape, or group layouts — then customize with drag-and-drop to fit your room.
          </p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transform hover:scale-105">
              Browse Templates
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-600">Free to use. No signup required.</p>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">Classroom Seating Chart Templates</h2>
          <p className="mt-2 text-center text-slate-700 dark:text-slate-300">
            Four layout templates designed for real classrooms. Pick one and make it yours.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {templates.map((t) => (
              <div key={t.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-emerald-950 dark:text-emerald-50">{t.title}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${t.tag === "Free" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-emerald-400"}`}>
                    {t.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">Why Use a Template?</h2>
          <p className="mt-2 text-center text-slate-700 dark:text-slate-300">
            Templates give you a starting point so you spend less time setting up and more time teaching.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="text-lg font-semibold text-emerald-950 dark:text-emerald-50">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">Choosing the Right Template</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-slate-700 dark:text-slate-300">
            <p>
              The best seating chart template depends on how you teach. Traditional rows work well for direct instruction and testing — students face forward with minimal distractions. Grid layouts offer similar structure with more even spacing, making it easier to walk between desks during independent work.
            </p>
            <p>
              If your classroom relies on discussion, the U-shape template puts every student face-to-face. Socratic seminars, read-alouds, and class debates all benefit from this arrangement. Students can see who&apos;s speaking, which encourages participation and accountability.
            </p>
            <p>
              Group templates cluster desks for collaborative learning. Place 4–6 students together for projects, peer review, or lab work. Many teachers use groups early in the week for teamwork and switch to rows for Friday assessments — our editor lets you save both configurations and switch between them in seconds.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">Pro Features for Templates</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: "All layout templates", desc: "Access grid, U-shape, and group templates beyond the free row layout." },
              { title: "Multiple classes", desc: "Save different templates for each class period. Switch between them instantly." },
              { title: "Clean PDF export", desc: "Print any template as a clean, unwatermarked PDF ready for the classroom wall." },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <h3 className="font-semibold text-emerald-950 dark:text-emerald-50">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/editor?upgrade=true" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 text-sm font-medium">
              Learn about Pro &rarr;
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">Frequently Asked Questions</h2>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-zinc-200 dark:divide-zinc-800">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-emerald-950 dark:text-emerald-50">
                  {item.q}
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">More Seating Chart Tools</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <Link href="/random-seating-chart-generator" className="rounded-xl border border-zinc-200 p-4 hover:border-blue-300 hover:shadow-sm transition dark:border-zinc-800 dark:hover:border-blue-700">
              <h3 className="font-semibold text-emerald-950 dark:text-emerald-50">Random Seating Chart Generator</h3>
              <p className="mt-1 text-sm text-slate-600">Shuffle students into new seats instantly.</p>
            </Link>
            <Link href="/band-seating-chart" className="rounded-xl border border-zinc-200 p-4 hover:border-blue-300 hover:shadow-sm transition dark:border-zinc-800 dark:hover:border-blue-700">
              <h3 className="font-semibold text-emerald-950 dark:text-emerald-50">Band Seating Chart</h3>
              <p className="mt-1 text-sm text-slate-600">Arrange musicians by instrument section.</p>
            </Link>
            <Link href="/classroom-seating-arrangement" className="rounded-xl border border-zinc-200 p-4 hover:border-blue-300 hover:shadow-sm transition dark:border-zinc-800 dark:hover:border-blue-700">
              <h3 className="font-semibold text-emerald-950 dark:text-emerald-50">Seating Arrangements</h3>
              <p className="mt-1 text-sm text-slate-600">Explore arrangement strategies for any classroom.</p>
            </Link>
          </div>
        </section>

        <section className="mt-20 rounded-3xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 p-12 text-center">
          <h2 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Ready to set up your classroom?</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Pick a seating chart template and customize it in minutes. Free for teachers — no signup needed.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started with a Template
          </Link>
        </section>
      </main>

      <footer className="mt-16 border-t border-emerald-200/30 dark:border-slate-700/30 bg-white dark:bg-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-slate-700 dark:hover:text-zinc-300">Home</Link>
            <Link href="/random-seating-chart-generator" className="hover:text-slate-700 dark:hover:text-zinc-300">Random Seating Chart Generator</Link>
            <Link href="/band-seating-chart" className="hover:text-slate-700 dark:hover:text-zinc-300">Band Seating Chart</Link>
            <Link href="/classroom-seating-arrangement" className="hover:text-slate-700 dark:hover:text-zinc-300">Classroom Seating Arrangements</Link>
            <Link href="/privacy-policy" className="hover:text-slate-700 dark:hover:text-zinc-300">Privacy Policy</Link>
          </div>
          <p className="mt-4 text-sm text-slate-600">Classroom Seating Chart Maker — Free for teachers.</p>
          <p className="mt-1 text-xs text-slate-400">From the makers of <a href="https://nametracingmaker.com" className="underline hover:text-slate-700 dark:hover:text-zinc-300">Tracing Worksheet Maker</a></p>
        </div>
      </footer>
    </div>
  );
}
