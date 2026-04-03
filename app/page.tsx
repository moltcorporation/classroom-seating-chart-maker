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
  { title: "Drag & Drop Editor", desc: "Drag students from the roster to any desk. Rearrange your classroom seating arrangement with intuitive drag-and-drop.", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3 10H9v3H6v-3H3v-3h3V7h3v3h3v3z", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30" },
  { title: "Random Seating Chart Generator", desc: "Randomly assign students to seats with one click. Perfect for new semesters and mixing up classroom dynamics.", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1", color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30" },
  { title: "Print & PDF Export", desc: "Print your seating chart or save as PDF. Post it on the classroom wall or share with substitute teachers.", icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30" },
  { title: "CSV Import", desc: "Import your student roster from a CSV file. No need to type every name — paste from your gradebook.", icon: "M9 12h6m-6 4h6m2-5a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30" },
  { title: "Configurable Layout", desc: "Adjust rows and columns to match your actual classroom. Works for any room size.", icon: "M4 5a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1h6v4H7V6zm0 6h6v2H7v-2z", color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30" },
  { title: "Cloud Save", desc: "Your seating arrangements save automatically. Come back later and pick up where you left off.", icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 13l3 3m0 0l3-3m-3 3V8", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30" },
];

const freeFeatures = ["1 class, up to 25 students", "Row layout", "Drag-and-drop editor", "Random shuffle", "CSV import", "PDF export (watermarked)"];
const proFeatures = ["Unlimited classes", "All layouts: groups, U-shape, horseshoe, lab, orchestra", "Shuffle with separation constraints", "Clean PDF (no watermark)", "Share links for subs & admins", "Student notes & multiple periods"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <JsonLd />
      <FaqJsonLd />
      <header className="border-b border-emerald-100 dark:border-slate-800 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Classroom Seating Chart Maker</h1>
          <Link href="/editor" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Open Editor</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <div className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-6">
            ✓ Used by hundreds of teachers
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Organize Your Classroom in Minutes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">Beautiful, drag-and-drop seating charts. Shuffle automatically, import from CSV, export to PDF. Free for teachers—no signup needed.</p>

          {/* Hero Visual */}
          <div className="mt-12 rounded-xl border border-emerald-200 dark:border-slate-700 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 overflow-hidden">
            <div className="inline-block bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({length: 8}).map((_, i) => (
                  <div key={i} className={`w-12 h-12 rounded border-2 flex items-center justify-center text-xs font-bold ${
                    i < 4 ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : 'border-blue-400 bg-blue-50 text-blue-700'
                  }`}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500 font-medium">Drag students • Shuffle anytime • Print or PDF</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/editor" className="rounded-lg bg-emerald-600 px-6 py-3 text-base font-medium text-white hover:bg-emerald-700">Create Your Seating Chart</Link>
          </div>
          <p className="mt-3 text-sm text-slate-500">Free forever: 1 class, 25 students. No signup required.</p>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Everything You Need to Arrange Your Classroom</h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-slate-200 p-6 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${f.color}`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">How to Make a Classroom Seating Chart</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {[
              { step: "1", title: "Create a class", desc: "Name your class to get started" },
              { step: "2", title: "Add students", desc: "Type names or import from CSV" },
              { step: "3", title: "Arrange seats", desc: "Drag students to desks or shuffle" },
              { step: "4", title: "Print", desc: "Print or save as PDF" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 text-sm font-bold text-white">{item.step}</div>
                <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Teachers Love It</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { quote: "Saves me 30 minutes every semester. My 3rd graders actually sit where I want them to.", author: "Sarah M., Elementary Teacher", role: "Grade 3" },
              { quote: "Finally can shuffle without favoritism. The PDF watermark is no big deal for free.", author: "Marcus J., Band Director", role: "Band/Orchestra" },
              { quote: "CSV import from my roster saved hours of typing. Pro tier is definitely worth it for multiple classes.", author: "Jennifer L., Middle School", role: "Science Teacher" },
              { quote: "Works on Chromebooks. My whole class can watch me demo the seating arrangement before I print it.", author: "David K., Computer Lab", role: "K-12 Computer Science" },
            ].map((item) => (
              <div key={item.author} className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-800">
                <div className="flex items-start gap-1">
                  {Array.from({length: 5}).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200 italic">"{item.quote}"</p>
                <p className="mt-3 font-semibold text-slate-900 dark:text-white text-sm">{item.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20" id="pricing">
          <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Simple Pricing for Teachers</h3>
          <p className="mt-2 text-center text-slate-600 dark:text-slate-400">Start free. Upgrade when you need more.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-xl border border-slate-200 p-8 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Free</h4>
              <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">$0</p>
              <p className="text-sm text-slate-500">Perfect for getting started</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                {freeFeatures.map((f) => (<li key={f} className="flex items-start gap-2"><span className="mt-0.5 text-emerald-500 font-bold">✓</span>{f}</li>))}
              </ul>
              <Link href="/editor" className="mt-6 block rounded-lg border-2 border-emerald-300 bg-white dark:bg-slate-700 py-2 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-600">Get Started Free</Link>
            </div>
            <div className="rounded-xl border-2 border-emerald-500 p-8 dark:border-emerald-600 relative bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
              <span className="absolute -top-3 left-6 rounded-full bg-emerald-600 px-4 py-1 text-xs font-bold text-white">MOST POPULAR</span>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Pro</h4>
              <p className="mt-1"><span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">$29.99</span><span className="text-sm text-slate-600 dark:text-slate-300">/year</span></p>
              <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">or $3.99/month</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Save 37% with yearly billing</p>
              <div className="mt-6 rounded-lg bg-white/80 dark:bg-slate-900/50 p-3 border border-emerald-200 dark:border-emerald-800">
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Pro gives you unlimited classes +</p>
                <ul className="space-y-2">
                  <li className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    <span>All classroom layouts (U-shape, groups, lab)</span>
                  </li>
                  <li className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    <span>Clean PDFs without watermark</span>
                  </li>
                  <li className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    <span>Share links for subs & admins</span>
                  </li>
                </ul>
              </div>
              <a href="https://buy.stripe.com/00wcN55tF2pX0b32s43Nm0o" className="mt-6 block rounded-lg bg-emerald-600 py-2 text-center text-sm font-bold text-white hover:bg-emerald-700">Upgrade to Pro</a>
              <a href="https://buy.stripe.com/3cI28rg8jc0x3nfaYA3Nm0n" className="mt-2 block text-center text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600">Prefer monthly? $3.99/month</a>
              <Link href="/editor?upgrade=true" className="mt-2 block text-center text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600">Already Pro? Verify access</Link>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Built for Every Classroom</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { icon: "👧", title: "Elementary Teachers", desc: "Arrange desks for reading groups, centers, and whole-class instruction." },
              { icon: "🎵", title: "Band & Orchestra Directors", desc: "Seat musicians by section. Rearrange for concerts, rehearsals, and auditions." },
              { icon: "👨‍💼", title: "School Admins", desc: "Help teachers set up classrooms. Share seating charts with substitutes and staff." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:border-emerald-300 dark:hover:border-emerald-600 transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ready to organize your classroom?</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Create your first classroom seating chart in under 2 minutes. No signup, no credit card.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-lg bg-emerald-600 px-6 py-3 text-base font-medium text-white hover:bg-emerald-700">Create Your Seating Chart</Link>
        </section>
        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h3>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200 dark:divide-slate-700">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400">
                  {item.q}
                  <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">More Free Teacher Tools</h3>
          <div className="mt-6 mx-auto max-w-xl">
            <a
              href="https://nametracingmaker.com"
              className="block rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Tracing Worksheet Maker</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Generate printable name, letter, and number tracing worksheets. Perfect for preschool and kindergarten classrooms.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400">Try it free &rarr;</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/random-seating-chart-generator" className="hover:text-emerald-600 dark:hover:text-emerald-400">Random Seating Chart Generator</Link>
            <Link href="/band-seating-chart" className="hover:text-emerald-600 dark:hover:text-emerald-400">Band Seating Chart</Link>
            <Link href="/classroom-seating-arrangement" className="hover:text-emerald-600 dark:hover:text-emerald-400">Classroom Seating Arrangements</Link>
            <Link href="/seating-chart-templates" className="hover:text-emerald-600 dark:hover:text-emerald-400">Seating Chart Templates</Link>
            <Link href="/privacy-policy" className="hover:text-emerald-600 dark:hover:text-emerald-400">Privacy Policy</Link>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Classroom Seating Chart Maker — Free for teachers.</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">From the makers of <a href="https://nametracingmaker.com" className="underline hover:text-emerald-600 dark:hover:text-emerald-400">Tracing Worksheet Maker</a></p>
        </div>
      </footer>
    </div>
  );
}
