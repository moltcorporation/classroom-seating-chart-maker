import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seating Chart Generator for Classroom | Automatic Layout Tool",
  description:
    "Generate classroom seating charts automatically. Add your students, pick a layout style, and create a seating arrangement in seconds. Free to use, no signup required.",
  keywords: [
    "seating chart generator classroom",
    "classroom seating chart generator",
    "free seating chart generator",
    "auto generate seating chart",
    "seating arrangement generator",
  ],
  alternates: {
    canonical: "https://classroomseatingchartmaker.com/seating-chart-generator",
  },
};

function JsonLd() {
  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Seating Chart Generator",
    description:
      "Automatically generate classroom seating charts with custom layouts. Add students and create arrangements in seconds.",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: "https://classroomseatingchartmaker.com/seating-chart-generator",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classroomseatingchartmaker.com" },
      { "@type": "ListItem", position: 2, name: "Seating Chart Generator", item: "https://classroomseatingchartmaker.com/seating-chart-generator" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function SeatingChartGenerator() {
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
            Seating Chart Generator for Classrooms
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-chalk-white/70">
            Generate a seating arrangement in seconds. Add your students, pick a layout style, and our generator creates an organized chart ready to print or adjust.
          </p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
              Start Generating
            </Link>
          </div>
          <p className="mt-3 text-sm text-chalk-white/50">Free to use. No signup required.</p>
          <div className="wood-strip" />
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">How the Generator Works</h2>
          <p className="mt-2 text-center text-foreground/60">
            Our seating chart generator takes the complexity out of classroom arrangement planning.
          </p>
          <div className="mt-8 space-y-6">
            {[
              { num: 1, title: "Add Student Names", desc: "Enter your students' names into the generator. You can add them all at once or one at a time." },
              { num: 2, title: "Choose a Layout", desc: "Select from rows, grid, U-shape, or group arrangements that match your teaching style." },
              { num: 3, title: "Generate Arrangement", desc: "The generator automatically assigns students to seats based on your selected layout." },
              { num: 4, title: "Refine and Print", desc: "Make manual adjustments if needed, then export your finished seating chart as a PDF." },
            ].map((step) => (
              <div key={step.num} className="rounded-2xl bg-wood-warm/20 dark:bg-chalkboard/20 p-6 border-l-4 border-chalk-green">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-chalk-green shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-semibold text-chalkboard dark:text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-foreground/60">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-wood-warm/30 dark:bg-chalkboard/20 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Supported Layout Styles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Traditional Rows", desc: "Front-facing rows are ideal for lectures, direct instruction, and testing." },
              { title: "Grid Layout", desc: "Evenly spaced grid pattern for independent work and student monitoring." },
              { title: "U-Shape Arrangement", desc: "U-shaped seating for discussions, seminars, and interactive lessons." },
              { title: "Group Clusters", desc: "Students grouped in 4–6 clusters for collaborative projects and teamwork." },
            ].map((style) => (
              <div key={style.title} className="rounded-2xl border border-wood-light/15 p-6 dark:border-chalk-white/10">
                <h3 className="text-lg font-semibold text-chalkboard dark:text-white">{style.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{style.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Why Use a Generator?</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {[
              { title: "Save Hours of Planning", desc: "Let the generator handle the arrangement work. No more manual seat-by-seat planning." },
              { title: "Try Multiple Options", desc: "Generate different arrangements and compare them. Find the best layout for your class." },
              { title: "Works for Any Class Size", desc: "Whether you have 15 or 35 students, the generator adapts to your specific needs." },
              { title: "Fully Customizable", desc: "After generation, adjust individual student positions or swap entire groups as needed." },
              { title: "Print-Ready Output", desc: "Export clean, professional PDFs to post on the wall or share with substitutes." },
              { title: "No Signup Required", desc: "Start generating seating charts immediately. No account or sign-up needed." },
            ].map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-wood-light/15 p-6 dark:border-chalk-white/10">
                <h3 className="text-lg font-semibold text-chalkboard dark:text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-chalk-green-light/20 dark:bg-chalk-green/5 rounded-2xl p-8 -mx-6">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Generator Tips for Best Results</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-foreground/60">
            <div>
              <h3 className="font-semibold text-chalkboard dark:text-white mb-2">Pair with Your Room Layout</h3>
              <p>Measure your actual classroom dimensions before generating a chart. Use the generator's grid to match your space.</p>
            </div>
            <div>
              <h3 className="font-semibold text-chalkboard dark:text-white mb-2">Consider Student Needs</h3>
              <p>Some students benefit from specific seating positions (near the board, away from distractions). Adjust the generated chart to accommodate these needs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-chalkboard dark:text-white mb-2">Update Regularly</h3>
              <p>Generate new arrangements periodically to keep classroom dynamics fresh and prevent cliques from forming.</p>
            </div>
            <div>
              <h3 className="font-semibold text-chalkboard dark:text-white mb-2">Use Multiple Versions</h3>
              <p>Generate and save different arrangements for different activities (lectures vs. group work). Switch between them as needed.</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Frequently Asked Questions</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {[
              { q: "How does the generator create seating arrangements?", a: "The generator uses your student list and selected layout style to create a balanced arrangement. You can always adjust seats manually afterward." },
              { q: "Can I edit the generated chart?", a: "Yes! The generator creates a starting point. Use drag-and-drop to move students, swap positions, or completely rearrange as needed." },
              { q: "What if my class has special needs?", a: "Generate a chart, then customize it. Move students who need extra support closer to you, adjust for accessibility, or create a layout that works for your specific class dynamics." },
              { q: "Is the generator free?", a: "Yes, the basic generator is completely free. Use it as many times as you need. Pro features offer additional layout options and export formats." },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl bg-white border border-wood-light/15 p-5 shadow-sm dark:bg-chalkboard dark:border-chalk-white/10">
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-chalkboard dark:text-white">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-foreground/40 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">Related Tools</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <Link href="/seating-chart-template" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">Seating Chart Template</h3>
              <p className="mt-1 text-sm text-foreground/50">Start with a customizable template.</p>
            </Link>
            <Link href="/random-seating-chart-generator" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">Random Generator</h3>
              <p className="mt-1 text-sm text-foreground/50">Shuffle students randomly into seats.</p>
            </Link>
            <Link href="/seating-chart-templates" className="rounded-2xl border border-wood-light/15 p-4 hover:border-chalk-green/30 hover:shadow-sm transition dark:border-chalk-white/10">
              <h3 className="font-semibold text-chalkboard dark:text-white">All Templates</h3>
              <p className="mt-1 text-sm text-foreground/50">Browse our template collection.</p>
            </Link>
          </div>
        </section>

        <section className="mt-20 chalkboard-texture rounded-3xl bg-chalkboard p-12 text-center shadow-2xl relative overflow-hidden">
          <h2 className="font-heading text-2xl font-bold text-white">Generate Your Seating Chart Today</h2>
          <p className="mt-2 text-chalk-white/70">Start with our generator and have a professional seating arrangement ready in minutes. Free for all teachers.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-xl bg-pencil-yellow px-8 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all">
            Start Generating
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
