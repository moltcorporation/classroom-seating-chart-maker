import Link from "next/link";
import type { Metadata } from "next";
import { PAYMENT_LINKS } from "@/lib/pro";

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

/* SVG desk icon for feature cards */
function DeskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 16v4M17 16v4M5 20h14" />
    </svg>
  );
}

/* Decorative chalk doodles for visual personality */
function ChalkStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path d="M20 4l4.5 11.5L36 18l-9 7 2.5 11L20 30l-9.5 6L13 25l-9-7 11.5-2.5z"
        stroke="#f4d03f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}

function ChalkApple({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M16 6c-1-3-4-3-4-3s1 2 0 3c-4 0-7 4-7 9s4 11 8 14c1.5 1 2.5 1 3 0 4-3 8-9 8-14s-3-9-7-9c-1-1 0-3 0-3s-3 0-4 3z"
        stroke="#c0392b" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M16 6c0-2 2-4 4-4" stroke="#2d5a27" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function ChalkPencil({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="8" y="5" width="6" height="28" rx="1" transform="rotate(-15 11 19)"
        stroke="#f4d03f" strokeWidth="1.2" opacity="0.5" />
      <polygon points="8,33 11,38 14,33" transform="rotate(-15 11 19)"
        stroke="#f4d03f" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

/* Mini classroom layout SVGs for the hero */
function RowLayout() {
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      {/* Teacher desk */}
      <rect x="42" y="4" width="36" height="12" rx="2" fill="#8b6914" opacity="0.8" />
      <text x="60" y="13" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">Teacher</text>
      {/* Student desks - 3 rows of 4 */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}-${col}`}>
            <rect x={12 + col * 27} y={28 + row * 20} width="22" height="14" rx="2" fill="#2d5a27" opacity="0.7" />
            <circle cx={23 + col * 27} cy={35 + row * 20} r="3" fill="#f4d03f" opacity="0.8" />
          </g>
        ))
      )}
    </svg>
  );
}

function GroupLayout() {
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      {/* Teacher desk */}
      <rect x="42" y="4" width="36" height="12" rx="2" fill="#8b6914" opacity="0.8" />
      <text x="60" y="13" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">Teacher</text>
      {/* Group clusters - 2x2 desks */}
      {[
        { x: 8, y: 28 },
        { x: 64, y: 28 },
        { x: 8, y: 58 },
        { x: 64, y: 58 },
      ].map((g, i) => (
        <g key={i}>
          <rect x={g.x} y={g.y} width="20" height="12" rx="1.5" fill="#2d5a27" opacity="0.7" />
          <rect x={g.x + 22} y={g.y} width="20" height="12" rx="1.5" fill="#2d5a27" opacity="0.7" />
          <rect x={g.x} y={g.y + 14} width="20" height="12" rx="1.5" fill="#2d5a27" opacity="0.7" />
          <rect x={g.x + 22} y={g.y + 14} width="20" height="12" rx="1.5" fill="#2d5a27" opacity="0.7" />
          <circle cx={g.x + 10} cy={g.y + 6} r="2.5" fill="#f4d03f" opacity="0.8" />
          <circle cx={g.x + 32} cy={g.y + 6} r="2.5" fill="#f4d03f" opacity="0.8" />
          <circle cx={g.x + 10} cy={g.y + 20} r="2.5" fill="#f4d03f" opacity="0.8" />
          <circle cx={g.x + 32} cy={g.y + 20} r="2.5" fill="#f4d03f" opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

function UShapeLayout() {
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      {/* Teacher desk */}
      <rect x="42" y="4" width="36" height="12" rx="2" fill="#8b6914" opacity="0.8" />
      <text x="60" y="13" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">Teacher</text>
      {/* Left side */}
      {[0, 1, 2].map((i) => (
        <g key={`l${i}`}>
          <rect x="8" y={28 + i * 18} width="22" height="12" rx="1.5" fill="#2d5a27" opacity="0.7" />
          <circle cx="19" cy={34 + i * 18} r="2.5" fill="#f4d03f" opacity="0.8" />
        </g>
      ))}
      {/* Right side */}
      {[0, 1, 2].map((i) => (
        <g key={`r${i}`}>
          <rect x="90" y={28 + i * 18} width="22" height="12" rx="1.5" fill="#2d5a27" opacity="0.7" />
          <circle cx="101" cy={34 + i * 18} r="2.5" fill="#f4d03f" opacity="0.8" />
        </g>
      ))}
      {/* Bottom */}
      {[0, 1, 2].map((i) => (
        <g key={`b${i}`}>
          <rect x={22 + i * 27} y="72" width="22" height="12" rx="1.5" fill="#2d5a27" opacity="0.7" />
          <circle cx={33 + i * 27} cy="78" r="2.5" fill="#f4d03f" opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

const features = [
  {
    title: "Drag & Drop Editor",
    desc: "Drag students from the roster to any desk. Rearrange your classroom seating arrangement with intuitive drag-and-drop.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    accent: "bg-chalk-green-light text-chalk-green",
  },
  {
    title: "Random Shuffle",
    desc: "Randomly assign students to seats with one click. Perfect for new semesters and mixing up classroom dynamics.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    accent: "bg-pencil-yellow/20 text-wood",
  },
  {
    title: "Print & PDF Export",
    desc: "Print your seating chart or save as PDF. Post it on the classroom wall or share with substitute teachers.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
      </svg>
    ),
    accent: "bg-chalk-green-light text-chalk-green",
  },
  {
    title: "CSV Import",
    desc: "Import your student roster from a CSV file. No need to type every name — paste from your gradebook.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    accent: "bg-pencil-yellow/20 text-wood",
  },
  {
    title: "Multiple Layouts",
    desc: "Rows, groups, U-shape, horseshoe, lab benches, and orchestra seating. Match your actual classroom.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
    accent: "bg-chalk-green-light text-chalk-green",
  },
  {
    title: "Cloud Save",
    desc: "Your seating arrangements save automatically. Come back later and pick up where you left off.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    accent: "bg-pencil-yellow/20 text-wood",
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
  "Unlimited classes",
  "All layouts: groups, U-shape, horseshoe, lab, orchestra",
  "Shuffle with separation constraints",
  "Clean PDF (no watermark)",
  "Share links for subs & admins",
  "Student notes & multiple periods",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd />
      <FaqJsonLd />

      {/* Header — wood shelf with chalk accents */}
      <header className="relative bg-wood-warm border-b-4 border-wood/60">
        <div className="wood-strip" />
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-chalkboard shadow-md">
              <DeskIcon className="h-5 w-5 text-pencil-yellow" />
            </div>
            <h1 className="font-heading text-xl font-bold text-chalkboard tracking-tight">
              Classroom Seating Chart Maker
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline text-sm font-medium text-wood hover:text-chalkboard transition-colors">
              Pricing
            </a>
            <Link
              href="/editor"
              className="rounded-lg bg-chalk-green px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-chalkboard hover:shadow-lg transition-all"
            >
              Open Editor
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — chalkboard with chalk texture and floating doodles */}
        <section className="chalkboard-texture bg-chalkboard text-white overflow-hidden relative">
          {/* Floating chalk doodles */}
          <div className="absolute top-8 right-8 doodle-float opacity-40 hidden lg:block">
            <ChalkStar className="w-10 h-10" />
          </div>
          <div className="absolute bottom-12 left-12 doodle-float-delay opacity-30 hidden lg:block">
            <ChalkApple className="w-8 h-8" />
          </div>
          <div className="absolute top-1/2 right-[5%] doodle-float-slow opacity-20 hidden lg:block">
            <ChalkPencil className="w-9 h-9" />
          </div>

          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 relative z-10">
            <div className="grid gap-12 sm:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-chalk-green/20 border border-chalk-green/30 px-4 py-1.5 mb-6">
                  <span className="h-2 w-2 rounded-full bg-pencil-yellow animate-pulse" />
                  <span className="text-xs font-semibold text-chalk-white/70 tracking-wide uppercase">Free for teachers</span>
                </div>
                <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
                  Seating charts,{" "}
                  <span className="chalk-underline text-pencil-yellow">sorted</span>
                </h2>
                <p className="mt-5 text-lg text-chalk-white/70 leading-relaxed max-w-lg">
                  Add students, drag them to desks, shuffle for random seating
                  arrangements, and print beautiful charts. Takes 2 minutes, not 2 hours.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/editor"
                    className="group rounded-xl bg-pencil-yellow px-7 py-3.5 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:shadow-pencil-yellow/30 hover:scale-[1.02] transition-all"
                  >
                    Create Your Seating Chart
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                  <a
                    href="#pricing"
                    className="rounded-xl border-2 border-chalk-white/20 px-6 py-3.5 text-base font-semibold text-white hover:border-chalk-white/50 hover:bg-chalk-white/5 transition-all"
                  >
                    View Pricing
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm text-chalk-white/50">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-chalk-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    No signup
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-chalk-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    No credit card
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-chalk-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Free forever
                  </span>
                </div>
              </div>

              {/* Visual classroom layout demo — framed like a chalkboard */}
              <div className="hidden sm:block">
                <div className="rounded-2xl bg-chalkboard-light/60 border-2 border-wood/40 p-5 shadow-2xl relative">
                  {/* Chalk tray at bottom */}
                  <div className="absolute -bottom-2 left-4 right-4 h-3 bg-wood/80 rounded-b-lg shadow-md" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-chalkboard border border-chalk-white/10 p-3 hover:border-pencil-yellow/30 transition-colors">
                      <p className="mb-2 text-center text-xs font-bold text-pencil-yellow/70 tracking-wide uppercase">Rows</p>
                      <RowLayout />
                    </div>
                    <div className="rounded-lg bg-chalkboard border border-chalk-white/10 p-3 hover:border-pencil-yellow/30 transition-colors">
                      <p className="mb-2 text-center text-xs font-bold text-pencil-yellow/70 tracking-wide uppercase">Groups</p>
                      <GroupLayout />
                    </div>
                    <div className="rounded-lg bg-chalkboard border border-chalk-white/10 p-3 hover:border-pencil-yellow/30 transition-colors">
                      <p className="mb-2 text-center text-xs font-bold text-pencil-yellow/70 tracking-wide uppercase">U-Shape</p>
                      <UShapeLayout />
                    </div>
                  </div>
                  <p className="mt-4 text-center text-xs text-chalk-white/40 font-medium">
                    Drag &amp; drop students into any layout
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom edge — wood strip transition */}
          <div className="wood-strip" />
        </section>

        {/* Features — notebook-style paper background */}
        <section className="relative mx-auto max-w-5xl px-6 py-20">
          <h3 className="font-heading text-center text-3xl font-bold text-chalkboard sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-chalk-green">Arrange Your Classroom</span>
          </h3>
          <p className="mt-3 text-center text-foreground/50 max-w-lg mx-auto">
            Built specifically for teachers — not a generic chart tool with classroom features bolted on.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-2xl border-2 border-wood-light/15 bg-white p-6 shadow-sm hover:shadow-lg hover:border-chalk-green/30 hover:-translate-y-1 transition-all duration-200 dark:bg-chalkboard dark:border-chalk-white/10"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.accent} shadow-sm group-hover:scale-110 transition-transform`}
                >
                  {f.icon}
                </div>
                <h4 className="mt-4 font-heading text-lg font-bold text-chalkboard dark:text-white">
                  {f.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works — chalkboard steps with connecting line */}
        <section className="bg-chalkboard chalkboard-texture text-white relative overflow-hidden">
          <div className="wood-strip" />
          <div className="mx-auto max-w-5xl px-6 py-20 relative z-10">
            <h3 className="font-heading text-center text-3xl font-bold sm:text-4xl">
              Set Up in <span className="text-pencil-yellow">4 Easy Steps</span>
            </h3>
            <div className="mt-14 grid gap-8 sm:grid-cols-4 relative">
              {/* Connecting line between steps */}
              <div className="hidden sm:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-chalk-white/15" />
              {[
                {
                  step: "1",
                  title: "Create a class",
                  desc: "Name your class to get started",
                  emoji: "📝",
                },
                {
                  step: "2",
                  title: "Add students",
                  desc: "Type names or import from CSV",
                  emoji: "👩‍🎓",
                },
                {
                  step: "3",
                  title: "Arrange seats",
                  desc: "Drag students to desks or shuffle",
                  emoji: "🪑",
                },
                {
                  step: "4",
                  title: "Print",
                  desc: "Print or save as PDF",
                  emoji: "🖨️",
                },
              ].map((item) => (
                <div key={item.step} className="text-center relative">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-chalk-green border-2 border-pencil-yellow/30 font-heading text-lg font-bold text-white shadow-lg relative z-10">
                    {item.step}
                  </div>
                  <div className="mt-1 text-2xl">{item.emoji}</div>
                  <h4 className="mt-2 font-heading text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-chalk-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="wood-strip" />
        </section>

        {/* Why teachers love it — warm paper section with colored accent cards */}
        <section className="bg-wood-warm/50 dark:bg-chalkboard/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h3 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white sm:text-4xl">
              Why <span className="text-apple-red">Teachers</span> Love This Tool
            </h3>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                  title: "Instant Setup",
                  desc: "Create your seating chart in minutes, not hours.",
                  border: "border-l-pencil-yellow",
                  bg: "bg-pencil-yellow/10",
                  iconColor: "text-wood",
                },
                {
                  icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z",
                  title: "Flexible Layouts",
                  desc: "Rows, groups, U-shape — match your actual classroom.",
                  border: "border-l-chalk-green",
                  bg: "bg-chalk-green-light",
                  iconColor: "text-chalk-green",
                },
                {
                  icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
                  title: "Easy Updates",
                  desc: "Drag and drop to rearrange when students move.",
                  border: "border-l-apple-red",
                  bg: "bg-apple-red/10",
                  iconColor: "text-apple-red",
                },
                {
                  icon: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
                  title: "Free for Teachers",
                  desc: "Core features always free, no credit card required.",
                  border: "border-l-pencil-yellow",
                  bg: "bg-pencil-yellow/10",
                  iconColor: "text-wood",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border-l-4 ${item.border} bg-white p-5 shadow-sm dark:bg-chalkboard dark:border-chalk-white/10`}>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                  >
                    <svg
                      className={`h-6 w-6 ${item.iconColor}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h4 className="mt-3 font-heading font-bold text-chalkboard dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing — distinctive cards with personality */}
        <section className="relative" id="pricing">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h3 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white sm:text-4xl">
              Simple Pricing for Teachers
            </h3>
            <p className="mt-3 text-center text-foreground/50">
              Start free. Upgrade when you need more.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {/* Free tier */}
              <div className="rounded-2xl border-2 border-wood-light/20 bg-white p-8 dark:bg-chalkboard dark:border-chalk-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chalk-green-light">
                    <span className="text-lg">✏️</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-chalkboard dark:text-white">
                    Free
                  </h4>
                </div>
                <p className="mt-4 text-4xl font-bold text-chalkboard dark:text-white">
                  $0
                </p>
                <p className="text-sm text-foreground/50">Forever free — no catches</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {freeFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-foreground/70"
                    >
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-chalk-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/editor"
                  className="mt-8 block rounded-xl border-2 border-chalk-green/20 py-3 text-center text-sm font-bold text-chalk-green hover:bg-chalk-green-light transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
              {/* Pro tier */}
              <div className="relative rounded-2xl border-2 border-chalk-green bg-gradient-to-b from-chalk-green-light/30 to-white p-8 shadow-xl dark:from-chalk-green/10 dark:to-chalkboard dark:bg-chalkboard">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-pencil-yellow px-4 py-1 text-xs font-bold text-chalkboard shadow-md">
                  Best Value
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chalk-green">
                    <span className="text-lg">⭐</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-chalkboard dark:text-white">
                    Pro
                  </h4>
                </div>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-chalkboard dark:text-white">
                    $3.99
                  </span>
                  <span className="text-sm text-foreground/50">/month</span>
                </p>
                <p className="text-sm text-foreground/50">
                  or <strong>$29.99/year</strong> (save 37%)
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {proFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-foreground/70"
                    >
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-chalk-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={PAYMENT_LINKS.yearly.url}
                  className="mt-8 block rounded-xl bg-chalk-green py-3 text-center text-sm font-bold text-white shadow-lg shadow-chalk-green/20 hover:bg-chalkboard hover:shadow-xl transition-all"
                >
                  Upgrade to Pro — $29.99/yr
                </a>
                <a
                  href={PAYMENT_LINKS.monthly.url}
                  className="mt-2 block text-center text-xs text-foreground/40 hover:text-chalk-green transition-colors"
                >
                  or $3.99/month
                </a>
                <Link
                  href="/editor?upgrade=true"
                  className="mt-2 block text-center text-xs text-foreground/30 hover:text-chalk-green transition-colors"
                >
                  Already Pro? Verify access
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Audience — with themed emoji badges */}
        <section className="bg-wood-warm/30 dark:bg-chalkboard/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h3 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white sm:text-4xl">
              Built for <span className="text-chalk-green">Every</span> Classroom
            </h3>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Elementary Teachers",
                  desc: "Arrange desks for reading groups, centers, and whole-class instruction.",
                  emoji: "📚",
                  gradient: "from-chalk-green-light to-white dark:from-chalk-green/10 dark:to-chalkboard",
                },
                {
                  title: "Band & Orchestra",
                  desc: "Seat musicians by section. Rearrange for concerts, rehearsals, and auditions.",
                  emoji: "🎵",
                  gradient: "from-pencil-yellow/20 to-white dark:from-pencil-yellow/5 dark:to-chalkboard",
                },
                {
                  title: "School Admins",
                  desc: "Help teachers set up classrooms. Share seating charts with substitutes and staff.",
                  emoji: "🏫",
                  gradient: "from-apple-red/10 to-white dark:from-apple-red/5 dark:to-chalkboard",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl bg-gradient-to-b ${item.gradient} border-2 border-wood-light/15 p-8 text-center shadow-sm hover:shadow-md transition-shadow dark:border-chalk-white/10`}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-chalkboard-light">
                    <span className="text-3xl">{item.emoji}</span>
                  </div>
                  <h4 className="mt-5 font-heading text-lg font-bold text-chalkboard dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — chalkboard with texture */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="chalkboard-texture rounded-3xl bg-chalkboard p-12 sm:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-8 doodle-float opacity-30 hidden sm:block">
              <ChalkStar className="w-8 h-8" />
            </div>
            <div className="absolute bottom-6 left-8 doodle-float-delay opacity-20 hidden sm:block">
              <ChalkApple className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl relative z-10">
              Ready to organize your classroom?
            </h3>
            <p className="mt-4 text-lg text-chalk-white/60 max-w-md mx-auto relative z-10">
              Create your first seating chart in under 2 minutes. No
              signup, no credit card.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-block rounded-xl bg-pencil-yellow px-10 py-4 text-lg font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:scale-[1.02] transition-all relative z-10"
            >
              Create Your Seating Chart &rarr;
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-wood-warm/30 dark:bg-chalkboard/20">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h3 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h3>
            <div className="mt-10 space-y-3">
              {faqItems.map((item) => (
                <details key={item.q} className="group rounded-xl bg-white border border-wood-light/15 p-5 shadow-sm dark:bg-chalkboard dark:border-chalk-white/10">
                  <summary className="flex cursor-pointer items-center justify-between text-left text-base font-semibold text-chalkboard dark:text-white">
                    {item.q}
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chalk-green-light text-chalk-green group-open:rotate-45 transition-transform text-sm font-bold dark:bg-chalk-green/20">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60 border-t border-wood-light/10 pt-3 dark:border-chalk-white/5">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* More tools */}
        <section className="mx-auto max-w-xl px-6 py-16">
          <h3 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">
            More Free Teacher Tools
          </h3>
          <div className="mt-6">
            <a
              href="https://nametracingmaker.com"
              className="group block rounded-2xl border-2 border-wood-light/20 bg-white p-6 hover:border-chalk-green/40 hover:shadow-lg transition-all dark:bg-chalkboard dark:border-chalk-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pencil-yellow/20">
                  <span className="text-xl">✍️</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-chalkboard dark:text-white">
                  Tracing Worksheet Maker
                </h4>
              </div>
              <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                Generate printable name, letter, and number tracing worksheets.
                Perfect for preschool and kindergarten classrooms.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-chalk-green group-hover:gap-2 transition-all">
                Try it free <span>&rarr;</span>
              </span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-wood/40 bg-chalkboard dark:bg-chalkboard text-chalk-white/50">
        <div className="wood-strip" />
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-chalk-green/20">
              <DeskIcon className="h-4 w-4 text-pencil-yellow" />
            </div>
            <span className="font-heading text-sm font-bold text-chalk-white/70">Classroom Seating Chart Maker</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/random-seating-chart-generator"
              className="hover:text-pencil-yellow transition-colors"
            >
              Random Generator
            </Link>
            <Link
              href="/band-seating-chart"
              className="hover:text-pencil-yellow transition-colors"
            >
              Band Seating Chart
            </Link>
            <Link
              href="/classroom-seating-arrangement"
              className="hover:text-pencil-yellow transition-colors"
            >
              Arrangements
            </Link>
            <Link
              href="/seating-chart-templates"
              className="hover:text-pencil-yellow transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/seating-chart-template"
              className="hover:text-pencil-yellow transition-colors"
            >
              Seating Chart Template
            </Link>
            <Link
              href="/seating-chart-generator"
              className="hover:text-pencil-yellow transition-colors"
            >
              Seating Chart Generator
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-pencil-yellow transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-chalk-white/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-chalk-white/30">
              Free for teachers. Built with care.
            </p>
            <p className="text-xs text-chalk-white/30">
              From the makers of{" "}
              <a
                href="https://nametracingmaker.com"
                className="underline hover:text-pencil-yellow transition-colors"
              >
                Tracing Worksheet Maker
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
