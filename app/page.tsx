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

// Classroom-specific SVG illustrations
const ClassroomIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 3h16v2H4zm0 3h16v12H4zm2 2v8h2V8zm4 0v8h2V8zm4 0v8h2V8zm4 0v8h2V8z" />
  </svg>
);

const DesksIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="3" width="5" height="5" rx="1" />
    <rect x="9" y="3" width="5" height="5" rx="1" />
    <rect x="16" y="3" width="5" height="5" rx="1" />
    <rect x="2" y="10" width="5" height="5" rx="1" />
    <rect x="9" y="10" width="5" height="5" rx="1" />
    <rect x="16" y="10" width="5" height="5" rx="1" />
    <line x1="2" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <line x1="2" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

const ShuffleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 1 23 7 17 7"></polyline>
    <polyline points="1 23 1 17 7 17"></polyline>
    <path d="M20.362 4.431l-5.106 5.106M3.172 20.172l5.364-5.364"></path>
  </svg>
);

const PrintIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 6 2 18 2 18 9"></polyline>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
    <rect x="6" y="14" width="12" height="8"></rect>
  </svg>
);

const StudentIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="7" r="3" />
    <path d="M18 21H6c-1.1 0-2-1.12-2-2.5v-3.5C4 13.9 5 13 6.5 13h11C18 13 19 13.9 19 14.5v3.5c0 1.38-.9 2.5-2 2.5z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <JsonLd />
      <FaqJsonLd />
      <header className="border-b-2 border-green-200 dark:border-green-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold font-[--font-fredoka-one] text-green-700 dark:text-green-300">Classroom Seating Chart Maker</h1>
          <Link href="/editor" className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors">Open Editor</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Hero section with visual emphasis */}
        <section className="text-center pb-8">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-100 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-zinc-950 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-sm font-medium text-green-700 dark:text-green-300">Interactive Desk Arrangement</p>
              </div>
            </div>
          </div>
          <h2 className="text-5xl font-bold font-[--font-fredoka-one] tracking-tight text-green-900 dark:text-green-100 sm:text-6xl">Organize Your Classroom</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">Drag students to desks, shuffle for new seating, and print beautiful charts in minutes. Perfect for elementary, band, orchestra, and every classroom.</p>
          <div className="mt-8">
            <Link href="/editor" className="inline-block rounded-lg bg-green-600 px-8 py-3 text-base font-bold text-white hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">Create Your Seating Chart Free</Link>
          </div>
          <p className="mt-3 text-sm text-zinc-500">✓ No signup  ✓ No credit card  ✓ 1 class, 25 students free forever</p>
        </section>

        {/* Key features with classroom colors */}
        <section className="mt-24">
          <h3 className="text-center text-3xl font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Everything You Need to Arrange Your Classroom</h3>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800 p-6 bg-green-50 dark:bg-green-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                <DesksIcon />
              </div>
              <h4 className="mt-4 text-lg font-semibold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Drag & Drop Editor</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Drag students from the roster directly onto desks. Rearrange in real-time with an intuitive interface.</p>
            </div>
            <div className="rounded-xl border-2 border-amber-200 dark:border-amber-800 p-6 bg-amber-50 dark:bg-amber-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600 text-white">
                <ShuffleIcon />
              </div>
              <h4 className="mt-4 text-lg font-semibold font-[--font-fredoka-one] text-amber-900 dark:text-amber-100">Random Shuffle</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Randomly assign students to desks with one click. Perfect for breaking up friend groups and mixing classroom dynamics.</p>
            </div>
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800 p-6 bg-orange-50 dark:bg-orange-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 text-white">
                <PrintIcon />
              </div>
              <h4 className="mt-4 text-lg font-semibold font-[--font-fredoka-one] text-orange-900 dark:text-orange-100">Print & Export</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Export as PDF and post on the classroom wall, email to substitutes, or save for future classes.</p>
            </div>
          </div>
        </section>

        {/* How it works - simple steps */}
        <section className="mt-24">
          <h3 className="text-center text-3xl font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">4 Steps to Your Perfect Seating Chart</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            {[
              { step: "1", title: "Create a class", desc: "Name your classroom", icon: "📝" },
              { step: "2", title: "Add students", desc: "Type names or import CSV", icon: "👥" },
              { step: "3", title: "Arrange seats", desc: "Drag or shuffle desks", icon: "🪑" },
              { step: "4", title: "Print & share", desc: "Export as PDF", icon: "🖨️" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">{item.step}</div>
                <h4 className="mt-3 font-semibold font-[--font-fredoka-one] text-zinc-900 dark:text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why teachers love this */}
        <section className="mt-24">
          <h3 className="text-center text-3xl font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Why Teachers Love This Tool</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center bg-green-50 dark:bg-green-950 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold font-[--font-fredoka-one] text-zinc-900 dark:text-white">Instant Setup</h4>
              <p className="mt-1 text-sm text-zinc-500">Create a seating chart in minutes, not hours.</p>
            </div>
            <div className="text-center bg-amber-50 dark:bg-amber-950 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold font-[--font-fredoka-one] text-zinc-900 dark:text-white">Flexible Layouts</h4>
              <p className="mt-1 text-sm text-zinc-500">Rows, groups, U-shapes, labs, and more for any classroom.</p>
            </div>
            <div className="text-center bg-orange-50 dark:bg-orange-950 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="font-semibold font-[--font-fredoka-one] text-zinc-900 dark:text-white">Easy Updates</h4>
              <p className="mt-1 text-sm text-zinc-500">Drag, drop, and rearrange when students move seats.</p>
            </div>
            <div className="text-center bg-red-50 dark:bg-red-950 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <div className="text-3xl mb-3">🎉</div>
              <h4 className="font-semibold font-[--font-fredoka-one] text-zinc-900 dark:text-white">Free Forever</h4>
              <p className="mt-1 text-sm text-zinc-500">Core features always free. No credit card ever.</p>
            </div>
          </div>
        </section>

        {/* Pricing section with classroom colors */}
        <section className="mt-24" id="pricing">
          <h3 className="text-center text-3xl font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Simple Pricing for Teachers</h3>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">Start free. Upgrade when you're ready.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800 p-6 bg-green-50 dark:bg-green-950">
              <h4 className="text-lg font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Free</h4>
              <p className="mt-1 text-3xl font-bold text-zinc-900 dark:text-white">$0</p>
              <p className="text-sm text-zinc-500">Forever free, no credit card</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                {freeFeatures.map((f) => (<li key={f} className="flex items-start gap-2"><span className="mt-0.5 text-green-600">✓</span>{f}</li>))}
              </ul>
              <Link href="/editor" className="mt-6 block rounded-lg border-2 border-green-600 py-2 text-center text-sm font-semibold text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900 transition-colors">Get Started Free</Link>
            </div>
            <div className="rounded-xl border-2 border-green-600 dark:border-green-500 p-6 bg-gradient-to-br from-green-50 to-white dark:from-green-900 dark:to-zinc-950 relative shadow-lg">
              <span className="absolute -top-3 left-4 rounded-full bg-green-600 dark:bg-green-500 px-3 py-0.5 text-xs font-bold text-white font-[--font-fredoka-one]">Most Popular</span>
              <h4 className="text-lg font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Pro</h4>
              <p className="mt-1"><span className="text-3xl font-bold text-zinc-900 dark:text-white">$3.99</span><span className="text-sm text-zinc-500">/month</span></p>
              <p className="text-sm text-zinc-500">or <span className="font-bold text-green-700">$29.99/year</span> (save 37%)</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                {proFeatures.map((f) => (<li key={f} className="flex items-start gap-2"><span className="mt-0.5 text-green-600">✓</span>{f}</li>))}
              </ul>
              <a href="https://buy.stripe.com/00wcN55tF2pX0b32s43Nm0o" className="mt-6 block rounded-lg bg-green-600 hover:bg-green-700 py-2 text-center text-sm font-bold text-white transition-colors">Upgrade to Pro — $29.99/yr</a>
              <a href="https://buy.stripe.com/3cI28rg8jc0x3nfaYA3Nm0n" className="mt-2 block text-center text-xs text-zinc-500 hover:text-green-700 dark:hover:text-green-400">or $3.99/month</a>
              <Link href="/editor?upgrade=true" className="mt-2 block text-center text-xs text-zinc-400 hover:text-green-700 dark:hover:text-green-400">Already Pro? Verify access</Link>
            </div>
          </div>
        </section>

        {/* Layout examples - visual seating arrangements */}
        <section className="mt-24">
          <h3 className="text-center text-3xl font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Choose Your Seating Layout</h3>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">Arrange desks to match your teaching style</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {/* Rows layout */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800 p-6 bg-green-50 dark:bg-green-950">
              <div className="mb-4 flex justify-center">
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-6 w-6 rounded bg-green-600"></div>
                  <div className="h-6 w-6 rounded bg-green-600"></div>
                  <div className="h-6 w-6 rounded bg-green-600"></div>
                  <div className="h-6 w-6 rounded bg-green-600"></div>
                  <div className="h-6 w-6 rounded bg-green-600"></div>
                  <div className="h-6 w-6 rounded bg-green-600"></div>
                  <div className="h-6 w-6 rounded bg-green-600"></div>
                  <div className="h-6 w-6 rounded bg-green-600"></div>
                </div>
              </div>
              <h4 className="text-center font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Rows</h4>
              <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">Traditional classroom rows. Perfect for lectures and testing.</p>
            </div>

            {/* Groups layout */}
            <div className="rounded-xl border-2 border-amber-200 dark:border-amber-800 p-6 bg-amber-50 dark:bg-amber-950">
              <div className="mb-4 flex justify-center">
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-5 w-5 rounded bg-amber-600"></div>
                  <div className="h-5 w-5 rounded bg-amber-600"></div>
                  <div className="h-5 w-5 rounded bg-amber-600"></div>
                  <div className="h-5 w-5 rounded bg-amber-600"></div>
                  <div className="h-5 w-5 rounded bg-amber-600"></div>
                  <div className="h-5 w-5 rounded bg-amber-600"></div>
                  <div className="h-5 w-5 rounded bg-amber-600"></div>
                  <div className="h-5 w-5 rounded bg-amber-600"></div>
                </div>
              </div>
              <h4 className="text-center font-bold font-[--font-fredoka-one] text-amber-900 dark:text-amber-100">Groups</h4>
              <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">Cluster desks together. Great for collaborative work and discussions.</p>
            </div>

            {/* U-shape layout */}
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800 p-6 bg-orange-50 dark:bg-orange-950">
              <div className="mb-4 flex justify-center">
                <div className="grid grid-cols-4 gap-1 w-16">
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded"></div>
                  <div className="h-4 w-4 rounded"></div>
                  <div className="h-4 w-4 rounded"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded"></div>
                  <div className="h-4 w-4 rounded"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <div className="h-4 w-4 rounded"></div>
                </div>
              </div>
              <h4 className="text-center font-bold font-[--font-fredoka-one] text-orange-900 dark:text-orange-100">U-Shape</h4>
              <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">U-shaped arrangement. Ideal for class discussions and teacher visibility.</p>
            </div>
          </div>
        </section>

        {/* Perfect for every teacher */}
        <section className="mt-24">
          <h3 className="text-center text-3xl font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Perfect for Every Classroom</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800 p-6 bg-green-50 dark:bg-green-950">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Elementary Teachers</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Arrange desks for reading groups, learning centers, and whole-class instruction.</p>
            </div>
            <div className="rounded-xl border-2 border-amber-200 dark:border-amber-800 p-6 bg-amber-50 dark:bg-amber-950">
              <div className="text-3xl mb-3">🎵</div>
              <h4 className="font-bold font-[--font-fredoka-one] text-amber-900 dark:text-amber-100">Band & Orchestra</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Seat musicians by section and easily rearrange for concerts and rehearsals.</p>
            </div>
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800 p-6 bg-orange-50 dark:bg-orange-950">
              <div className="text-3xl mb-3">🏫</div>
              <h4 className="font-bold font-[--font-fredoka-one] text-orange-900 dark:text-orange-100">School Admins</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Help teachers and share seating charts with substitutes and staff.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-24 rounded-xl border-2 border-green-300 dark:border-green-700 bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900 dark:to-zinc-950 p-8 text-center">
          <h3 className="text-3xl font-bold font-[--font-fredoka-one] text-green-900 dark:text-green-100">Ready to Organize Your Classroom?</h3>
          <p className="mt-3 text-zinc-700 dark:text-zinc-400">Create your first seating chart in under 2 minutes. No signup. No credit card.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-lg bg-green-600 hover:bg-green-700 px-8 py-3 text-base font-bold text-white transition-colors shadow-lg">Create Your Seating Chart Free</Link>
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

      {/* Footer */}
      <footer className="mt-16 border-t-2 border-green-200 dark:border-green-900 bg-green-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="/random-seating-chart-generator" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Random Seating Chart Generator</Link>
            <Link href="/band-seating-chart" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Band Seating Chart</Link>
            <Link href="/classroom-seating-arrangement" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Classroom Seating Arrangements</Link>
            <Link href="/seating-chart-templates" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Seating Chart Templates</Link>
            <Link href="/privacy-policy" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">Privacy Policy</Link>
          </div>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Classroom Seating Chart Maker — Free for teachers</p>
          <p className="mt-1 text-xs text-zinc-500">From the makers of <a href="https://nametracingmaker.com" className="underline hover:text-green-700 dark:hover:text-green-400 transition-colors">Tracing Worksheet Maker</a></p>
        </div>
      </footer>
    </div>
  );
}
