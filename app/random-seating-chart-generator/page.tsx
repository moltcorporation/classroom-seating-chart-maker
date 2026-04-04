import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Seating Chart Generator | Shuffle Students Instantly",
  description:
    "Free random seating chart generator for teachers. Shuffle students into new seats with one click. Perfect for new semesters, group rotations, and mixing up classroom dynamics.",
  keywords: [
    "random seating chart generator",
    "random seat assignment",
    "shuffle seating chart",
    "random classroom seating",
    "student seat randomizer",
  ],
  alternates: {
    canonical: "https://classroomseatingchartmaker.com/random-seating-chart-generator",
  },
};

function JsonLd() {
  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Random Seating Chart Generator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: "https://classroomseatingchartmaker.com/random-seating-chart-generator",
    description:
      "Free random seating chart generator for K-12 teachers. Shuffle students into random seats instantly.",
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
      { "@type": "ListItem", position: 2, name: "Random Seating Chart Generator", item: "https://classroomseatingchartmaker.com/random-seating-chart-generator" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

const useCases = [
  {
    title: "New School Year",
    desc: "Start fresh each semester with randomized seating. Students meet new neighbors and form new connections without any teacher bias in placement.",
    emoji: "🎒",
  },
  {
    title: "Substitute Teachers",
    desc: "Generate a quick random arrangement when a sub needs to shake things up. Print the chart so they can take attendance and manage the room easily.",
    emoji: "👩‍🏫",
  },
  {
    title: "Group Rotation",
    desc: "Randomize seats weekly or monthly to keep students engaged. Changing perspectives prevents cliques from forming and encourages collaboration across the class.",
    emoji: "🔄",
  },
  {
    title: "Lab Partners",
    desc: "Pair students randomly for science labs, group projects, or peer review sessions. Fair, unbiased partner assignments every time.",
    emoji: "🔬",
  },
];

export default function RandomSeatingChartGenerator() {
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

      <main>
        <section className="chalkboard-texture bg-chalkboard text-white relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-pencil-yellow/10 border border-pencil-yellow/20 px-4 py-1.5 mb-6">
              <span className="text-lg">🎲</span>
              <span className="text-xs font-bold text-pencil-yellow/80 tracking-wide uppercase">Random Shuffle</span>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Random Seating Chart Generator
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-chalk-white/70 leading-relaxed">
              Shuffle your students into new seats with one click. Fair, instant, and completely random — no more counting heads or drawing names from a hat.
            </p>
            <div className="mt-8">
              <Link href="/editor" className="inline-block rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
                Randomize Your Seating Chart &rarr;
              </Link>
            </div>
            <p className="mt-4 text-sm text-chalk-white/50">Free to use. No signup required.</p>
          </div>
          <div className="wood-strip" />
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white">How Random Shuffle Works</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Add your students", desc: "Type student names or import a class roster from CSV. Your list stays saved for next time." },
              { step: "2", title: "Click shuffle", desc: "One click randomly assigns every student to a seat. Even distribution across all available desks." },
              { step: "3", title: "Print or adjust", desc: "Happy with the arrangement? Print it. Want changes? Drag individual students or shuffle again." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-chalk-green font-heading text-lg font-bold text-white shadow-lg border-2 border-pencil-yellow/30">{item.step}</div>
                <h3 className="mt-4 font-heading text-lg font-bold text-chalkboard dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-wood-warm/50 dark:bg-chalkboard/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white">When to Use Random Seating</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="rounded-2xl border-2 border-wood-light/15 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-chalkboard dark:border-chalk-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{uc.emoji}</span>
                    <h3 className="font-heading text-lg font-bold text-chalkboard dark:text-white">{uc.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white">Why Teachers Use Random Seating Charts</h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-foreground/60 leading-relaxed">
            <p>
              Research shows that changing seating arrangements improves student engagement and reduces behavioral issues. When students sit next to different classmates, they build a wider social network and are exposed to diverse perspectives.
            </p>
            <p>
              Random assignment also removes the perception of favoritism. Students see that seat placement is fair, which reduces complaints and social friction. Teachers save time they would otherwise spend strategizing about who sits where.
            </p>
            <p>
              With our random seating chart generator, the entire process takes seconds. Add your roster once, then shuffle as often as you like — weekly, monthly, or every semester. Each new arrangement is saved so you can compare or revert.
            </p>
          </div>
        </section>

        <section className="bg-chalk-green-light/30 dark:bg-chalk-green/5">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white">
              Pro: Shuffle with <span className="text-chalk-green">Constraints</span>
            </h2>
            <p className="mt-4 text-center text-foreground/60 max-w-2xl mx-auto">
              Need to keep certain students apart? Pro users can set separation constraints before shuffling. The random generator respects your rules while still randomizing the rest of the class.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              {[
                { title: "Keep apart", desc: "Mark students who shouldn't sit next to each other. The shuffle algorithm guarantees separation.", emoji: "🚫" },
                { title: "All layouts", desc: "Randomize into rows, groups, U-shape, horseshoe, lab benches, or orchestra semicircle.", emoji: "📐" },
                { title: "Unlimited classes", desc: "Manage every period and every class. Shuffle each one independently.", emoji: "♾️" },
              ].map((f) => (
                <div key={f.title} className="text-center rounded-xl bg-white p-5 shadow-sm dark:bg-chalkboard">
                  <span className="text-2xl">{f.emoji}</span>
                  <h3 className="mt-2 font-heading font-bold text-chalkboard dark:text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/editor?upgrade=true" className="text-chalk-green hover:text-chalkboard text-sm font-bold transition-colors">
                Learn about Pro &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="chalkboard-texture rounded-3xl bg-chalkboard p-12 text-center shadow-2xl relative overflow-hidden">
            <h2 className="font-heading text-3xl font-bold text-white relative z-10">Ready to shuffle?</h2>
            <p className="mt-3 text-chalk-white/60 relative z-10">Generate a random seating chart for your class in under a minute. Free, no signup.</p>
            <Link href="/editor" className="mt-8 inline-block rounded-xl bg-pencil-yellow px-10 py-4 text-lg font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all relative z-10">
              Create Random Seating Chart &rarr;
            </Link>
          </div>
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
