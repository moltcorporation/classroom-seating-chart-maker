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
            Band Seating Chart Generator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-chalk-white/70">
            Create seating charts for concert band, orchestra, jazz ensemble, and choir. Arrange musicians by section with our drag-and-drop editor built for music directors.
          </p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
              Create Band Seating Chart
            </Link>
          </div>
          <p className="mt-3 text-sm text-chalk-white/50">Free to use. No signup required.</p>
          <div className="wood-strip" />
        </section>

        <section className="mt-20 bg-wood-warm/30 dark:bg-chalkboard/20 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Ensemble Types</h2>
          <p className="mt-2 text-center text-foreground/60">
            Different ensembles need different layouts. Our editor adapts to how your group actually performs.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {sections.map((s) => (
              <div key={s.title} className="rounded-2xl border border-wood-light/15 p-6 dark:border-chalk-white/10">
                <h3 className="text-lg font-semibold text-chalkboard dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Built for Music Directors</h2>
          <p className="mt-2 text-center text-foreground/60">
            Band directors face unique seating challenges that generic chart makers don&apos;t address.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {directorNeeds.map((n) => (
              <div key={n.title} className="rounded-2xl border border-wood-light/15 p-6 dark:border-chalk-white/10">
                <h3 className="text-lg font-semibold text-chalkboard dark:text-white">{n.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-chalk-green-light/20 dark:bg-chalk-green/5 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Band vs. Classroom Seating</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-foreground/60">
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
                className="text-chalk-green underline hover:text-chalkboard"
              >
                seating chart templates
              </Link>{" "}
              for ready-made layouts you can customize.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Pro Features for Directors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: "Orchestra layout", desc: "Semicircle template designed for traditional orchestral and concert band formations." },
              { title: "Unlimited ensembles", desc: "Concert band, jazz band, marching band, pit orchestra — manage them all." },
              { title: "Student notes", desc: "Track instrument, chair number, and notes per musician. Know who plays what at a glance." },
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
              <details
                key={item.q}
                className="group rounded-xl bg-white border border-wood-light/15 p-5 shadow-sm dark:bg-chalkboard dark:border-chalk-white/10"
              >
                <summary className="cursor-pointer font-medium text-chalkboard dark:text-white">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-foreground/60">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20 chalkboard-texture rounded-3xl bg-chalkboard p-12 text-center shadow-2xl relative overflow-hidden">
          <h2 className="font-heading text-2xl font-bold text-white">Ready to seat your ensemble?</h2>
          <p className="mt-2 text-chalk-white/70">Create a band seating chart in minutes. Free for directors — no signup needed.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
            Create Band Seating Chart
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
