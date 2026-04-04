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
  },
  {
    title: "Substitute Teachers",
    desc: "Generate a quick random arrangement when a sub needs to shake things up. Print the chart so they can take attendance and manage the room easily.",
  },
  {
    title: "Group Rotation",
    desc: "Randomize seats weekly or monthly to keep students engaged. Changing perspectives prevents cliques from forming and encourages collaboration across the class.",
  },
  {
    title: "Lab Partners",
    desc: "Pair students randomly for science labs, group projects, or peer review sessions. Fair, unbiased partner assignments every time.",
  },
];

export default function RandomSeatingChartGenerator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <JsonLd />
      <header className="border-b border-emerald-200/30 dark:border-slate-700/30 backdrop-blur-sm bg-white/40 dark:bg-slate-900/40">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-emerald-950 dark:text-emerald-50">Classroom Seating Chart Maker</Link>
          <Link href="/editor" className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg transform hover:scale-105">Open Editor</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 sm:text-5xl">
            Random Seating Chart Generator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            Shuffle your students into new seats with one click. Our random seating chart generator assigns seats fairly and instantly — no more counting heads or drawing names from a hat.
          </p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transform hover:scale-105">
              Randomize Your Seating Chart
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-600">Free to use. No signup required.</p>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">How Random Shuffle Works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { step: "1", title: "Add your students", desc: "Type student names or import a class roster from CSV. Your list stays saved for next time." },
              { step: "2", title: "Click shuffle", desc: "One click randomly assigns every student to a seat. The algorithm ensures even distribution across all available desks." },
              { step: "3", title: "Print or adjust", desc: "Happy with the arrangement? Print it. Want changes? Drag individual students or shuffle again." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{item.step}</div>
                <h3 className="mt-3 font-semibold text-emerald-950 dark:text-emerald-50">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">When to Use Random Seating</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="text-lg font-semibold text-emerald-950 dark:text-emerald-50">{uc.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">Why Teachers Use Random Seating Charts</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-slate-700 dark:text-slate-300">
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

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-emerald-950 dark:text-emerald-50">Pro: Shuffle with Constraints</h2>
          <p className="mt-4 text-center text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Need to keep certain students apart? Pro users can set separation constraints before shuffling. The random generator respects your rules while still randomizing the rest of the class.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: "Keep apart", desc: "Mark students who shouldn't sit next to each other. The shuffle algorithm guarantees separation." },
              { title: "All layouts", desc: "Randomize into rows, groups, U-shape, horseshoe, lab benches, or orchestra semicircle." },
              { title: "Unlimited classes", desc: "Manage every period and every class. Shuffle each one independently." },
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

        <section className="mt-20 rounded-3xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 p-12 text-center">
          <h2 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Ready to shuffle?</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Generate a random seating chart for your class in under a minute. Free, no signup.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transform hover:scale-105">
            Create Random Seating Chart
          </Link>
        </section>
      </main>

      <footer className="mt-16 border-t border-emerald-200/30 dark:border-slate-700/30 bg-white dark:bg-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <p className="text-sm text-slate-600">Classroom Seating Chart Maker — Free for teachers.</p>
          <p className="mt-1 text-xs text-slate-400">From the makers of <a href="https://nametracingmaker.com" className="underline hover:text-slate-700 dark:hover:text-zinc-300">Tracing Worksheet Maker</a></p>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-slate-400 hover:text-slate-700 dark:hover:text-zinc-300">Home</Link>
            <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-slate-700 dark:hover:text-zinc-300">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
