import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Band Seating Chart Generator | Orchestra & Ensemble Layouts",
  description:
    "Free band seating chart generator for directors. Create semicircle, orchestra, and ensemble seating arrangements by instrument section. Drag-and-drop with PDF export.",
  keywords: [
    "band seating chart generator",
    "orchestra seating chart",
    "band seating arrangement",
    "ensemble seating chart",
    "music classroom seating chart",
  ],
  alternates: {
    canonical: "https://classroomseatingchartmaker.com/band-seating-chart",
  },
};

const faqItems = [
  {
    q: "How do you arrange seating for a concert band?",
    a: "Concert bands typically seat woodwinds (flutes, clarinets, oboes) front-left, brass (trumpets, trombones, tubas) center-right, and percussion in the back row. First-chair players sit at the front of each section. The director stands center-front with clear sightlines to every section leader.",
  },
  {
    q: "What is the standard orchestra seating arrangement?",
    a: "The standard orchestra layout places first violins to the conductor's left, second violins to the right (or behind firsts), violas center-left, cellos center-right, and double basses behind cellos. Woodwinds sit behind strings, brass behind woodwinds, and percussion in the back.",
  },
  {
    q: "How often should band directors change seating charts?",
    a: "Most directors update seating after chair auditions, typically once per quarter or semester. Some rearrange for specific concert pieces that require different balance. Keep separate charts for concert formation, rehearsal seating, and sectionals so you can switch quickly.",
  },
  {
    q: "Can I use this for marching band formations?",
    a: "Our editor works best for indoor concert seating. For marching band drill charts, you can use the free-form desk placement to map approximate positions, but dedicated drill design software is better for precise field formations.",
  },
];

function JsonLd() {
  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Band Seating Chart Generator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: "https://classroomseatingchartmaker.com/band-seating-chart",
    description:
      "Free band and orchestra seating chart generator for music directors. Create section-based seating arrangements.",
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
      { "@type": "ListItem", position: 2, name: "Band Seating Chart Generator", item: "https://classroomseatingchartmaker.com/band-seating-chart" },
    ],
  };
  const faq = {
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

const sections = [
  {
    title: "Concert Band",
    desc: "Arrange woodwinds, brass, and percussion in traditional concert arc formation. Place sections by instrument family with principal players in front.",
  },
  {
    title: "Orchestra",
    desc: "Set up strings (first violins, second violins, violas, cellos, basses) in standard orchestral layout with winds and percussion behind.",
  },
  {
    title: "Jazz Ensemble",
    desc: "Seat rhythm section (piano, bass, drums) in back, horns in front. Small group format with clear sightlines to the director.",
  },
  {
    title: "Choir & Vocal",
    desc: "Arrange sopranos, altos, tenors, and basses in rows or semicircle. Balance voice parts across the stage for optimal blend.",
  },
];

const directorNeeds = [
  {
    title: "Section Grouping",
    desc: "Keep instrument families together. First chairs sit at section fronts. The visual layout matches how your ensemble actually performs.",
  },
  {
    title: "Quick Rearrangement",
    desc: "Swap students between seats for audition seating, concert formation, or rehearsal configurations. Drag-and-drop makes changes instant.",
  },
  {
    title: "Print for the Music Stand",
    desc: "Print a clean chart to post on the board or place on every music stand. Substitutes and guest conductors can see who sits where at a glance.",
  },
  {
    title: "Multiple Ensembles",
    desc: "Manage concert band, jazz band, marching band, and pit orchestra — each with their own seating chart. Switch between them instantly.",
  },
];

export default function BandSeatingChart() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <JsonLd />
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">Classroom Seating Chart Maker</Link>
          <Link href="/editor" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Open Editor</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Band Seating Chart Generator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Create seating charts for concert band, orchestra, jazz ensemble, and choir. Arrange musicians by section with our drag-and-drop editor built for music directors.
          </p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700">
              Create Band Seating Chart
            </Link>
          </div>
          <p className="mt-3 text-sm text-zinc-500">Free to use. No signup required.</p>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Ensemble Types</h2>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">
            Different ensembles need different layouts. Our editor adapts to how your group actually performs.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {sections.map((s) => (
              <div key={s.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Built for Music Directors</h2>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">
            Band directors face unique seating challenges that generic chart makers don&apos;t address.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {directorNeeds.map((n) => (
              <div key={n.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{n.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Band vs. Classroom Seating</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Band seating charts differ fundamentally from regular classroom charts. In a classroom, you place students at desks in rows or clusters. In band, the arrangement follows instrument families in curved formations — woodwinds front-left, brass center-right, percussion in back.
            </p>
            <p>
              Chair placement matters for sound balance. First-chair players sit at section fronts, carrying the melody. The director needs clear sightlines to every section leader. Our editor gives you flexible desk placement so you can create the exact curved layout your ensemble uses — not just rigid rows.
            </p>
            <p>
              Many directors maintain multiple charts: one for concert formation, one for rehearsal, one for marching warmups, and sometimes individual section charts for sectionals. With our tool, each configuration saves separately so you can switch between them in seconds. Browse our{" "}
              <Link
                href="/seating-chart-templates"
                className="text-blue-600 underline hover:text-blue-700 dark:text-blue-400"
              >
                seating chart templates
              </Link>{" "}
              for ready-made layouts you can customize.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Pro Features for Directors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: "Orchestra layout", desc: "Semicircle template designed for traditional orchestral and concert band formations." },
              { title: "Unlimited ensembles", desc: "Concert band, jazz band, marching band, pit orchestra — manage them all." },
              { title: "Student notes", desc: "Track instrument, chair number, and notes per musician. Know who plays what at a glance." },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/editor?upgrade=true" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Learn about Pro &rarr;
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-zinc-200 dark:border-zinc-800"
              >
                <summary className="cursor-pointer px-6 py-4 font-medium text-zinc-900 dark:text-white">
                  {item.q}
                </summary>
                <p className="px-6 pb-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Ready to seat your ensemble?</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Create a band seating chart in minutes. Free for directors — no signup needed.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700">
            Create Band Seating Chart
          </Link>
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <p className="text-sm text-zinc-500">Classroom Seating Chart Maker — Free for teachers.</p>
          <p className="mt-1 text-xs text-zinc-400">From the makers of <a href="https://nametracingmaker.com" className="underline hover:text-zinc-600 dark:hover:text-zinc-300">Tracing Worksheet Maker</a></p>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">Home</Link>
            <Link href="/seating-chart-templates" className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">Seating Chart Templates</Link>
            <Link href="/classroom-seating-arrangement" className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">Seating Arrangements</Link>
            <Link href="/privacy-policy" className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
