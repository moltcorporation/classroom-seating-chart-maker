import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Classroom Seating Chart Maker | Create Seating Charts Online",
  description:
    "Free classroom seating chart maker for teachers. Drag-and-drop seating chart generator with random shuffle, CSV import, and PDF export. Create classroom seating arrangements in minutes.",
  keywords: [
    "classroom seating chart maker",
    "seating chart generator classroom",
    "random seating chart generator",
    "classroom seating arrangement",
    "seating chart for teachers",
    "band seating chart generator",
  ],
  alternates: {
    canonical: "https://classroomseatingchartmaker.com",
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Classroom Seating Chart Maker",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: "https://classroomseatingchartmaker.com",
    description:
      "Free online seating chart maker for K-12 teachers. Drag-and-drop editor, random shuffle, CSV import, PDF export.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "29.99",
      priceCurrency: "USD",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const faqItems = [
  {
    q: "How do I create a seating chart?",
    a: "Click \"Create Your Seating Chart\" to open the editor. Name your class, add students by typing names or importing a CSV, then drag students onto desks. You can also click \"Shuffle\" to randomly assign seats. Print or export as PDF when you're done.",
  },
  {
    q: "Is the classroom seating chart maker free?",
    a: "Yes! The free tier includes 1 class with up to 25 students, a row desk layout, drag-and-drop editing, random shuffle, CSV import, and PDF export with a small watermark. No signup or credit card required.",
  },
  {
    q: "Can I import student names from a CSV file?",
    a: "Yes. In the editor, click the CSV import button and upload a file with one student name per row. Names are added to your roster instantly — no need to type each one manually.",
  },
  {
    q: "How do I randomly shuffle seats?",
    a: "Open your class in the editor and click the \"Shuffle\" button. Students are randomly reassigned to available desks. You can shuffle as many times as you like until you get an arrangement you're happy with.",
  },
  {
    q: "Can I export my seating chart as a PDF?",
    a: "Yes. Click the print/export button in the editor to generate a PDF of your seating chart. Free users get a watermarked PDF. Pro users ($3.99/mo) get clean, unwatermarked exports ready to post on the classroom wall or share with substitutes.",
  },
  {
    q: "Does it work on tablets and Chromebooks?",
    a: "Yes. The seating chart generator runs entirely in your browser and works on any device — desktops, laptops, tablets, and Chromebooks. No software to install.",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const features = [
  { title: "Drag & Drop Editor", desc: "Drag students from the roster to any desk. Rearrange your classroom seating arrangement with intuitive drag-and-drop.", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30" },
  { title: "Random Seating Chart Generator", desc: "Randomly assign students to seats with one click. Perfect for new semesters and mixing up classroom dynamics.", color: "bg-green-100 text-green-600 dark:bg-green-900/30" },
  { title: "Print & PDF Export", desc: "Print your seating chart or save as PDF. Post it on the classroom wall or share with substitute teachers.", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30" },
  { title: "CSV Import", desc: "Import your student roster from a CSV file. No need to type every name — paste from your gradebook.", color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30" },
  { title: "Configurable Layout", desc: "Adjust rows and columns to match your actual classroom. Works for any room size.", color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30" },
  { title: "Cloud Save", desc: "Your seating arrangements save automatically. Come back later and pick up where you left off.", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30" },
];

const freeFeatures = ["1 class, up to 25 students", "Row layout", "Drag-and-drop editor", "Random shuffle", "CSV import", "PDF export (watermarked)"];
const proFeatures = ["Unlimited classes", "All layouts: groups, U-shape, horseshoe, lab, orchestra", "Shuffle with separation constraints", "Clean PDF (no watermark)", "Share links for subs & admins", "Student notes & multiple periods"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <JsonLd />
      <FaqJsonLd />
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Classroom Seating Chart Maker</h1>
          <Link href="/editor" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Open Editor</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">Free Classroom Seating Chart Maker</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">The easiest seating chart generator for teachers. Add your students, drag them to desks, shuffle for random seating arrangements, and print beautiful classroom seating charts.</p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700">Create Your Seating Chart</Link>
          </div>
          <p className="mt-3 text-sm text-zinc-500">Free forever: 1 class, 25 students. No signup required.</p>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Everything You Need to Arrange Your Classroom</h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${f.color}`}>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{f.title}</h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">How to Make a Classroom Seating Chart</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {[
              { step: "1", title: "Create a class", desc: "Name your class to get started" },
              { step: "2", title: "Add students", desc: "Type names or import from CSV" },
              { step: "3", title: "Arrange seats", desc: "Drag students to desks or shuffle" },
              { step: "4", title: "Print", desc: "Print or save as PDF" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{item.step}</div>
                <h4 className="mt-3 font-semibold text-zinc-900 dark:text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Why Teachers Love This Tool</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Instant Setup", desc: "Create your seating chart in minutes, not hours.", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30" },
              { icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z", title: "Flexible Layouts", desc: "Row, group, or U-shape arrangements for any classroom.", color: "bg-green-100 text-green-600 dark:bg-green-900/30" },
              { icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4", title: "Easy Updates", desc: "Drag and drop to rearrange when students move.", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30" },
              { icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7", title: "Free for Teachers", desc: "Core features always free, no credit card required.", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                </div>
                <h4 className="mt-3 font-semibold text-zinc-900 dark:text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20" id="pricing">
          <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Simple Pricing for Teachers</h3>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">Start free. Upgrade when you need more.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">Free</h4>
              <p className="mt-1 text-3xl font-bold text-zinc-900 dark:text-white">$0</p>
              <p className="text-sm text-zinc-500">Forever free</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                {freeFeatures.map((f) => (<li key={f} className="flex items-start gap-2"><span className="mt-0.5 text-green-500">&#10003;</span>{f}</li>))}
              </ul>
              <Link href="/editor" className="mt-6 block rounded-lg border border-zinc-300 py-2 text-center text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300">Get Started Free</Link>
            </div>
            <div className="rounded-xl border-2 border-blue-600 p-6 relative">
              <span className="absolute -top-3 left-4 rounded-full bg-blue-600 px-3 py-0.5 text-xs font-medium text-white">Most Popular</span>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">Pro</h4>
              <p className="mt-1"><span className="text-3xl font-bold text-zinc-900 dark:text-white">$3.99</span><span className="text-sm text-zinc-500">/month</span></p>
              <p className="text-sm text-zinc-500">or $29.99/year (save 37%)</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                {proFeatures.map((f) => (<li key={f} className="flex items-start gap-2"><span className="mt-0.5 text-blue-500">&#10003;</span>{f}</li>))}
              </ul>
              <Link href="/editor?upgrade=true" className="mt-6 block rounded-lg bg-blue-600 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">Start Free, Upgrade Later</Link>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Built for Every Classroom</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Elementary Teachers", desc: "Arrange desks for reading groups, centers, and whole-class instruction." },
              { title: "Band & Orchestra Directors", desc: "Seat musicians by section. Rearrange for concerts, rehearsals, and auditions." },
              { title: "School Admins", desc: "Help teachers set up classrooms. Share seating charts with substitutes and staff." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h4 className="font-semibold text-zinc-900 dark:text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Ready to organize your classroom?</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Create your first classroom seating chart in under 2 minutes. No signup, no credit card.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700">Create Your Seating Chart</Link>
        </section>
        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Frequently Asked Questions</h3>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-zinc-200 dark:divide-zinc-800">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-zinc-900 dark:text-white">
                  {item.q}
                  <span className="ml-4 shrink-0 text-zinc-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">More Free Teacher Tools</h3>
          <div className="mt-6 mx-auto max-w-xl">
            <a
              href="https://nametracingmaker.com"
              className="block rounded-xl border border-zinc-200 p-6 hover:border-blue-300 hover:shadow-sm transition dark:border-zinc-800 dark:hover:border-blue-700"
            >
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">Tracing Worksheet Maker</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Generate printable name, letter, and number tracing worksheets. Perfect for preschool and kindergarten classrooms.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-600 dark:text-blue-400">Try it free &rarr;</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            <Link href="/random-seating-chart-generator" className="hover:text-zinc-600 dark:hover:text-zinc-300">Random Seating Chart Generator</Link>
            <Link href="/band-seating-chart" className="hover:text-zinc-600 dark:hover:text-zinc-300">Band Seating Chart</Link>
            <Link href="/classroom-seating-arrangement" className="hover:text-zinc-600 dark:hover:text-zinc-300">Classroom Seating Arrangements</Link>
            <Link href="/seating-chart-templates" className="hover:text-zinc-600 dark:hover:text-zinc-300">Seating Chart Templates</Link>
            <Link href="/privacy-policy" className="hover:text-zinc-600 dark:hover:text-zinc-300">Privacy Policy</Link>
          </div>
          <p className="mt-4 text-sm text-zinc-500">Classroom Seating Chart Maker — Free for teachers.</p>
          <p className="mt-1 text-xs text-zinc-400">From the makers of <a href="https://nametracingmaker.com" className="underline hover:text-zinc-600 dark:hover:text-zinc-300">Tracing Worksheet Maker</a></p>
        </div>
      </footer>
    </div>
  );
}
