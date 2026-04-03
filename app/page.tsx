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
    a: 'Click "Create Your Seating Chart" to open the editor. Name your class, add students by typing names or importing a CSV, then drag students onto desks. You can also click "Shuffle" to randomly assign seats. Print or export as PDF when you\'re done.',
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
    a: 'Open your class in the editor and click the "Shuffle" button. Students are randomly reassigned to available desks. You can shuffle as many times as you like until you get an arrangement you\'re happy with.',
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

function ClassroomIllustration() {
  const desks = [
    { x: 30, y: 50, name: "Emma" },
    { x: 145, y: 50, name: "Liam" },
    { x: 260, y: 50, name: "Olivia" },
    { x: 375, y: 50, name: "Noah" },
    { x: 30, y: 125, name: "Ava" },
    { x: 145, y: 125, name: "James" },
    { x: 260, y: 125, name: "Sophia" },
    { x: 375, y: 125, name: "" },
    { x: 30, y: 200, name: "Mia" },
    { x: 145, y: 200, name: "Lucas" },
    { x: 260, y: 200, name: "Ella" },
    { x: 375, y: 200, name: "Ben" },
  ];

  return (
    <svg
      viewBox="0 0 480 280"
      className="w-full max-w-lg mx-auto"
      aria-label="Preview of a classroom seating chart with student names on desks"
    >
      <rect width="480" height="280" rx="16" fill="#fef9f0" stroke="#e8dcc8" strokeWidth="2" />
      <rect x="120" y="8" width="240" height="28" rx="4" fill="#4a6741" />
      <text x="240" y="27" textAnchor="middle" fill="#c8dcc0" fontSize="12" fontWeight="500">
        FRONT OF ROOM
      </text>
      {desks.map((d, i) => (
        <g key={i}>
          <rect
            x={d.x} y={d.y} width="95" height="55" rx="8"
            fill={d.name ? "#e8f4f0" : "#f5f0e8"}
            stroke={d.name ? "#7fb8a4" : "#d4cbb8"}
            strokeWidth="1.5"
            strokeDasharray={d.name ? "none" : "4 3"}
          />
          <rect x={d.x + 30} y={d.y + 48} width="35" height="12" rx="6" fill={d.name ? "#c8e8dc" : "#ece5d8"} />
          {d.name ? (
            <text x={d.x + 47} y={d.y + 32} textAnchor="middle" fill="#2d5a47" fontSize="13" fontWeight="500">
              {d.name}
            </text>
          ) : (
            <text x={d.x + 47} y={d.y + 32} textAnchor="middle" fill="#b8a88c" fontSize="11">
              Empty
            </text>
          )}
        </g>
      ))}
      <g opacity="0.7">
        <path d="M 430 90 Q 450 105 430 120" fill="none" stroke="#e67e5a" strokeWidth="2" strokeLinecap="round" />
        <polygon points="428,118 434,124 436,116" fill="#e67e5a" />
        <text x="442" y="110" fill="#e67e5a" fontSize="9" fontWeight="600">drag &amp;</text>
        <text x="445" y="121" fill="#e67e5a" fontSize="9" fontWeight="600">drop</text>
      </g>
    </svg>
  );
}

const features = [
  {
    title: "Drag & Drop Editor",
    desc: "Drag students from the roster onto any desk. Rearrange your classroom seating with intuitive drag-and-drop.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeDasharray="3 2" opacity="0.4" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <path d="M10 7h4m-2-2v4" opacity="0.6" />
      </svg>
    ),
    accent: "bg-teal-50 text-teal-700 border-teal-100",
  },
  {
    title: "Random Shuffle",
    desc: "Randomly assign students to seats with one click. Perfect for new terms and mixing up dynamics.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.6-8.6c.8-1.1 2-1.7 3.3-1.7H20" />
        <path d="M2 6h1.4c1.3 0 2.5.6 3.3 1.7l6.6 8.6c.8 1.1 2 1.7 3.3 1.7H20" />
        <path d="M18 4l2 2-2 2M18 16l2 2-2 2" />
      </svg>
    ),
    accent: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    title: "Print & PDF Export",
    desc: "Print your seating chart or save as PDF. Post it on the wall or share with substitute teachers.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V2h12v7" />
        <rect x="6" y="14" width="12" height="8" rx="1" />
        <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
      </svg>
    ),
    accent: "bg-purple-50 text-purple-700 border-purple-100",
  },
  {
    title: "CSV Import",
    desc: "Import your student roster from a CSV file. No retyping every name — paste from your gradebook.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 12 15 15" />
      </svg>
    ),
    accent: "bg-rose-50 text-rose-700 border-rose-100",
  },
  {
    title: "Flexible Layouts",
    desc: "Adjust rows and columns to match your actual room. Works for any classroom size or configuration.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    accent: "bg-sky-50 text-sky-700 border-sky-100",
  },
  {
    title: "Cloud Save",
    desc: "Arrangements save automatically. Come back tomorrow and pick up where you left off.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10a6.83 6.83 0 00-1.35-1.13A5 5 0 006.34 10 3.5 3.5 0 007 17h11a3 3 0 001-5.83" />
        <polyline points="12 12 12 15" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
    accent: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
];

const freeFeatures = [
  "1 class, up to 25 students",
  "Row layout",
  "Drag-and-drop editor",
  "Random shuffle",
  "CSV import",
  "PDF export (watermarked)",
];
const proFeatures = [
  "Unlimited classes & students",
  "All layouts: groups, U-shape, horseshoe, lab",
  "Shuffle with separation constraints",
  "Clean PDF (no watermark)",
  "Share links for subs & admins",
  "Student notes & multiple periods",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcf7]">
      <JsonLd />
      <FaqJsonLd />

      <header className="border-b border-[#e8dcc8]/60 bg-white/70 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4a6741] text-white text-sm font-bold">S</div>
            <span className="text-base font-bold text-[#2c2c2c] tracking-tight">Seating Chart Maker</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#pricing" className="text-sm text-[#666] hover:text-[#2c2c2c] transition-colors hidden sm:block">Pricing</Link>
            <Link href="/editor" className="rounded-lg bg-[#4a6741] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3d5636] transition-colors shadow-sm">Open Editor</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f4f0] px-3 py-1 text-xs font-medium text-[#3d6b55] mb-5">
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="5" opacity="0.3" />
                  <circle cx="6" cy="6" r="2" />
                </svg>
                Free for teachers — no signup
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.1]">
                The classroom seating chart maker teachers{" "}
                <span className="text-[#4a6741]">actually enjoy using</span>
              </h1>
              <p className="mt-5 text-lg text-[#555] leading-relaxed max-w-xl">
                Add students, drag them to desks, hit shuffle for random arrangements, and print. Beautiful seating charts in under 2 minutes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/editor" className="rounded-xl bg-[#4a6741] px-6 py-3.5 text-base font-semibold text-white hover:bg-[#3d5636] transition-colors shadow-md shadow-[#4a6741]/20">
                  Create Your Seating Chart
                </Link>
                <Link href="#how-it-works" className="rounded-xl border border-[#d4cbb8] px-6 py-3.5 text-base font-medium text-[#555] hover:bg-white hover:border-[#bbb0a0] transition-colors">
                  See How It Works
                </Link>
              </div>
              <p className="mt-4 text-sm text-[#999]">1 class, 25 students, full editor — free forever.</p>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-[#e8dcc8] bg-white p-4 shadow-lg shadow-[#e8dcc8]/30">
                <ClassroomIllustration />
              </div>
              <div className="absolute -bottom-4 -left-3 rounded-xl bg-white border border-[#e8dcc8] px-3 py-2 shadow-md text-xs">
                <span className="font-semibold text-[#4a6741]">30 students</span>
                <span className="text-[#999]"> seated in seconds</span>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof bar */}
        <section className="border-y border-[#e8dcc8]/40 bg-white/50">
          <div className="mx-auto max-w-5xl px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-[#888]">
            <span><strong className="text-[#555]">K-12</strong> classrooms</span>
            <span className="hidden sm:inline text-[#ddd]">|</span>
            <span><strong className="text-[#555]">Band &amp; orchestra</strong> directors</span>
            <span className="hidden sm:inline text-[#ddd]">|</span>
            <span><strong className="text-[#555]">Substitute</strong> teacher friendly</span>
            <span className="hidden sm:inline text-[#ddd]">|</span>
            <span>Works on <strong className="text-[#555]">Chromebooks</strong></span>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">Everything you need, nothing you don&apos;t</h2>
            <p className="mt-3 text-[#777]">Built by teachers who got tired of fighting Excel. Simple tools that actually save you time.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className={`rounded-xl border p-5 transition-shadow hover:shadow-md ${f.accent}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 shadow-sm">{f.icon}</div>
                <h3 className="mt-4 text-base font-bold text-[#1a1a1a]">{f.title}</h3>
                <p className="mt-1.5 text-sm text-[#666] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="bg-white border-y border-[#e8dcc8]/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#1a1a1a]">Four steps. Two minutes.</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-4">
              {[
                { step: "1", title: "Create a class", desc: "Name your class to get started", color: "bg-[#4a6741]" },
                { step: "2", title: "Add students", desc: "Type names or import from CSV", color: "bg-[#5a7a51]" },
                { step: "3", title: "Arrange seats", desc: "Drag students to desks or shuffle", color: "bg-[#6a8a61]" },
                { step: "4", title: "Print", desc: "Print or save as PDF", color: "bg-[#7a9a71]" },
              ].map((item, i) => (
                <div key={item.step} className="relative text-center">
                  {i < 3 && (
                    <div className="hidden sm:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] border-t-2 border-dashed border-[#d4cbb8]" />
                  )}
                  <div className={`relative mx-auto flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-sm font-bold text-white shadow-sm z-10`}>
                    {item.step}
                  </div>
                  <h3 className="mt-3 font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#888]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/editor" className="inline-block rounded-xl bg-[#4a6741] px-6 py-3 text-base font-semibold text-white hover:bg-[#3d5636] transition-colors shadow-sm">
                Try It Now — Free
              </Link>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#1a1a1a]">Built for every classroom</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { title: "Elementary Teachers", desc: "Arrange desks for reading groups, centers, and whole-class instruction. Import your roster and shuffle with one click.", bg: "bg-[#fef9f0]", border: "border-[#e8dcc8]" },
              { title: "Band & Orchestra", desc: "Seat musicians by section. Rearrange for concerts, rehearsals, and auditions without redoing everything.", bg: "bg-[#f0f4fe]", border: "border-[#c8d4e8]" },
              { title: "School Admins", desc: "Help teachers set up classrooms. Share seating charts with substitutes, staff, and parents as clean PDFs.", bg: "bg-[#f4f0fe]", border: "border-[#d4c8e8]" },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl border ${item.border} ${item.bg} p-6`}>
                <h3 className="text-lg font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-white border-y border-[#e8dcc8]/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">Simple, honest pricing</h2>
              <p className="mt-3 text-[#777]">Start free. Upgrade only if you need more classes and features.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-[#e8dcc8] bg-[#fffcf7] p-7">
                <h3 className="text-lg font-bold text-[#1a1a1a]">Free</h3>
                <p className="mt-2"><span className="text-4xl font-extrabold text-[#1a1a1a]">$0</span></p>
                <p className="text-sm text-[#999] mt-1">Forever free</p>
                <ul className="mt-6 space-y-2.5 text-sm text-[#555]">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#7fb8a4]" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 111.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/editor" className="mt-7 block rounded-xl border border-[#d4cbb8] py-2.5 text-center text-sm font-semibold text-[#555] hover:bg-[#f5f0e8] transition-colors">
                  Get Started Free
                </Link>
              </div>
              <div className="rounded-2xl border-2 border-[#4a6741] bg-white p-7 relative shadow-lg shadow-[#4a6741]/10">
                <div className="absolute -top-3.5 left-5 rounded-full bg-[#4a6741] px-3 py-1 text-xs font-bold text-white tracking-wide">MOST POPULAR</div>
                <h3 className="text-lg font-bold text-[#1a1a1a]">Pro</h3>
                <p className="mt-2"><span className="text-4xl font-extrabold text-[#1a1a1a]">$3.99</span><span className="text-sm text-[#999]">/month</span></p>
                <p className="text-sm text-[#999] mt-1">or $29.99/year <span className="text-[#4a6741] font-semibold">(save 37%)</span></p>
                <ul className="mt-6 space-y-2.5 text-sm text-[#555]">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#4a6741]" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 111.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://buy.stripe.com/00wcN55tF2pX0b32s43Nm0o" className="mt-7 block rounded-xl bg-[#4a6741] py-2.5 text-center text-sm font-semibold text-white hover:bg-[#3d5636] transition-colors shadow-sm">
                  Upgrade to Pro — $29.99/yr
                </a>
                <a href="https://buy.stripe.com/3cI28rg8jc0x3nfaYA3Nm0n" className="mt-2 block text-center text-xs text-[#999] hover:text-[#4a6741] transition-colors">
                  or $3.99/month
                </a>
                <Link href="/editor?upgrade=true" className="mt-2 block text-center text-xs text-[#bbb] hover:text-[#4a6741] transition-colors">
                  Already Pro? Verify access
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-2xl bg-[#4a6741] p-10 text-center shadow-lg">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to organize your classroom?</h2>
            <p className="mt-3 text-[#c8dcc0] text-base max-w-lg mx-auto">Create your first seating chart in under 2 minutes. No signup, no credit card, no hassle.</p>
            <Link href="/editor" className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 text-base font-bold text-[#4a6741] hover:bg-[#f5f5f5] transition-colors shadow-sm">
              Create Your Seating Chart
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white border-t border-[#e8dcc8]/40">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#1a1a1a]">Frequently asked questions</h2>
            <div className="mt-10 divide-y divide-[#e8dcc8]">
              {faqItems.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between text-left text-base font-semibold text-[#1a1a1a]">
                    {item.q}
                    <span className="ml-4 shrink-0 text-[#bbb] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#666]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-promotion */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h3 className="text-center text-xl font-bold text-[#1a1a1a]">More Free Teacher Tools</h3>
          <div className="mt-6 mx-auto max-w-xl">
            <a href="https://nametracingmaker.com" className="block rounded-xl border border-[#e8dcc8] bg-white p-5 hover:border-[#7fb8a4] hover:shadow-md transition group">
              <h4 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#4a6741] transition-colors">Tracing Worksheet Maker</h4>
              <p className="mt-1.5 text-sm text-[#888]">Generate printable name, letter, and number tracing worksheets. Perfect for preschool and kindergarten.</p>
              <span className="mt-2.5 inline-block text-sm font-semibold text-[#4a6741]">Try it free &rarr;</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e8dcc8]/60 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#aaa]">
            <Link href="/random-seating-chart-generator" className="hover:text-[#666] transition-colors">Random Seating Chart Generator</Link>
            <Link href="/band-seating-chart" className="hover:text-[#666] transition-colors">Band Seating Chart</Link>
            <Link href="/classroom-seating-arrangement" className="hover:text-[#666] transition-colors">Classroom Seating Arrangements</Link>
            <Link href="/seating-chart-templates" className="hover:text-[#666] transition-colors">Seating Chart Templates</Link>
            <Link href="/privacy-policy" className="hover:text-[#666] transition-colors">Privacy Policy</Link>
          </div>
          <p className="mt-4 text-sm text-[#bbb]">Classroom Seating Chart Maker — Free for teachers.</p>
          <p className="mt-1 text-xs text-[#ccc]">From the makers of{" "}<a href="https://nametracingmaker.com" className="underline hover:text-[#888] transition-colors">Tracing Worksheet Maker</a></p>
        </div>
      </footer>
    </div>
  );
}
