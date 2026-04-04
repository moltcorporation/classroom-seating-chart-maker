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
    <div className="min-h-screen bg-background">
      <JsonLd />
      <FaqJsonLd />
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
            Free Seating Chart Templates for Classroom
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-chalk-white/70">
            Start with a ready-made classroom seating chart template. Choose rows, grid, U-shape, or group layouts — then customize with drag-and-drop to fit your room.
          </p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
              Browse Templates
            </Link>
          </div>
          <p className="mt-3 text-sm text-chalk-white/50">Free to use. No signup required.</p>
          <div className="wood-strip" />
        </section>

        <section className="mt-20 bg-wood-warm/30 dark:bg-chalkboard/20 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Classroom Seating Chart Templates</h2>
          <p className="mt-2 text-center text-foreground/60">
            Four layout templates designed for real classrooms. Pick one and make it yours.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {templates.map((t) => (
              <div key={t.title} className="rounded-2xl border border-wood-light/15 p-6 dark:border-chalk-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-chalkboard dark:text-white">{t.title}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${t.tag === "Free" ? "bg-chalk-green-light text-chalk-green dark:bg-chalk-green/20 dark:text-chalk-green" : "bg-chalk-green-light text-chalk-green dark:bg-chalk-green/20 dark:text-chalk-green"}`}>
                    {t.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground/60">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Why Use a Template?</h2>
          <p className="mt-2 text-center text-foreground/60">
            Templates give you a starting point so you spend less time setting up and more time teaching.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-wood-light/15 p-6 dark:border-chalk-white/10">
                <h3 className="text-lg font-semibold text-chalkboard dark:text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-chalk-green-light/20 dark:bg-chalk-green/5 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Choosing the Right Template</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-foreground/60">
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
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Pro Features for Templates</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: "All layout templates", desc: "Access grid, U-shape, and group templates beyond the free row layout." },
              { title: "Multiple classes", desc: "Save different templates for each class period. Switch between them instantly." },
              { title: "Clean PDF export", desc: "Print any template as a clean, unwatermarked PDF ready for the classroom wall." },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <h3 className="font-semibold text-chalkboard dark:text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-foreground/50">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/editor?upgrade=true" className="text-chalk-green hover:text-chalkboard text-sm font-medium">
              Learn about Pro &rarr;
            </Link>
          </div>
        </section>

        <section className="mt-20 bg-wood-warm/30 dark:bg-chalkboard/20 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Frequently Asked Questions</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-xl bg-white border border-wood-light/15 p-5 shadow-sm dark:bg-chalkboard dark:border-chalk-white/10">
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-chalkboard dark:text-white">
                  {item.q}
                  <span className="ml-4 shrink-0 text-foreground/40 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">More Seating Chart Tools</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <Link href="/random-seating-chart-generator" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">Random Seating Chart Generator</h3>
              <p className="mt-1 text-sm text-foreground/50">Shuffle students into new seats instantly.</p>
            </Link>
            <Link href="/band-seating-chart" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">Band Seating Chart</h3>
              <p className="mt-1 text-sm text-foreground/50">Arrange musicians by instrument section.</p>
            </Link>
            <Link href="/classroom-seating-arrangement" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">Seating Arrangements</h3>
              <p className="mt-1 text-sm text-foreground/50">Explore arrangement strategies for any classroom.</p>
            </Link>
          </div>
        </section>

        <section className="mt-20 chalkboard-texture rounded-3xl bg-chalkboard p-12 text-center shadow-2xl relative overflow-hidden">
          <h2 className="font-heading text-2xl font-bold text-white">Ready to set up your classroom?</h2>
          <p className="mt-2 text-chalk-white/70">Pick a seating chart template and customize it in minutes. Free for teachers — no signup needed.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
            Get Started with a Template
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
