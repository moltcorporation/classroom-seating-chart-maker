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

      {/* Header — wood-toned warm bar */}
      <header className="border-b border-wood-light/30 bg-wood-warm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <DeskIcon className="h-6 w-6 text-chalk-green" />
            <h1 className="font-heading text-xl font-bold text-chalkboard">
              Classroom Seating Chart Maker
            </h1>
          </div>
          <Link
            href="/editor"
            className="rounded-lg bg-chalk-green px-4 py-2 text-sm font-semibold text-white hover:bg-chalkboard transition-colors"
          >
            Open Editor
          </Link>
        </div>
      </header>

      <main>
        {/* Hero — chalkboard-style */}
        <section className="bg-chalkboard text-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <div className="grid gap-10 sm:grid-cols-2 items-center">
              <div>
                <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
                  Free Classroom Seating Chart Maker
                </h2>
                <p className="mt-4 text-lg text-chalk-white/80 leading-relaxed">
                  The easiest seating chart generator for teachers. Add your
                  students, drag them to desks, shuffle for random seating
                  arrangements, and print beautiful classroom seating charts.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/editor"
                    className="rounded-lg bg-pencil-yellow px-6 py-3 text-base font-bold text-chalkboard hover:bg-pencil-yellow/90 transition-colors"
                  >
                    Create Your Seating Chart
                  </Link>
                  <a
                    href="#pricing"
                    className="rounded-lg border-2 border-chalk-white/30 px-6 py-3 text-base font-semibold text-white hover:border-chalk-white/60 transition-colors"
                  >
                    View Pricing
                  </a>
                </div>
                <p className="mt-4 text-sm text-chalk-white/60">
                  Free forever: 1 class, 25 students. No signup required.
                </p>
              </div>

              {/* Visual classroom layout demo */}
              <div className="hidden sm:block">
                <div className="rounded-xl bg-chalkboard-light/50 border border-chalk-white/10 p-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-chalkboard-light border border-chalk-white/10 p-3">
                      <p className="mb-2 text-center text-xs font-medium text-chalk-white/60">Rows</p>
                      <RowLayout />
                    </div>
                    <div className="rounded-lg bg-chalkboard-light border border-chalk-white/10 p-3">
                      <p className="mb-2 text-center text-xs font-medium text-chalk-white/60">Groups</p>
                      <GroupLayout />
                    </div>
                    <div className="rounded-lg bg-chalkboard-light border border-chalk-white/10 p-3">
                      <p className="mb-2 text-center text-xs font-medium text-chalk-white/60">U-Shape</p>
                      <UShapeLayout />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs text-chalk-white/40">
                    Drag & drop students into any layout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features — on warm paper background */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h3 className="font-heading text-center text-2xl font-bold text-chalkboard sm:text-3xl">
            Everything You Need to Arrange Your Classroom
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-wood-light/20 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:bg-chalkboard dark:border-chalk-white/10"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${f.accent}`}
                >
                  {f.icon}
                </div>
                <h4 className="mt-4 font-heading text-lg font-semibold text-chalkboard dark:text-white">
                  {f.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works — numbered steps with wood accents */}
        <section className="bg-wood-warm dark:bg-chalkboard/50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h3 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white sm:text-3xl">
              How to Make a Classroom Seating Chart
            </h3>
            <div className="mt-10 grid gap-8 sm:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Create a class",
                  desc: "Name your class to get started",
                },
                {
                  step: "2",
                  title: "Add students",
                  desc: "Type names or import from CSV",
                },
                {
                  step: "3",
                  title: "Arrange seats",
                  desc: "Drag students to desks or shuffle",
                },
                {
                  step: "4",
                  title: "Print",
                  desc: "Print or save as PDF",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-chalk-green font-heading text-lg font-bold text-white shadow-md">
                    {item.step}
                  </div>
                  <h4 className="mt-4 font-heading font-semibold text-chalkboard dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why teachers love it */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h3 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white sm:text-3xl">
            Why Teachers Love This Tool
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                title: "Instant Setup",
                desc: "Create your seating chart in minutes, not hours.",
                bg: "bg-pencil-yellow/20",
                iconColor: "text-wood",
              },
              {
                icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6z",
                title: "Flexible Layouts",
                desc: "Row, group, or U-shape arrangements for any classroom.",
                bg: "bg-chalk-green-light",
                iconColor: "text-chalk-green",
              },
              {
                icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
                title: "Easy Updates",
                desc: "Drag and drop to rearrange when students move.",
                bg: "bg-pencil-yellow/20",
                iconColor: "text-wood",
              },
              {
                icon: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
                title: "Free for Teachers",
                desc: "Core features always free, no credit card required.",
                bg: "bg-chalk-green-light",
                iconColor: "text-chalk-green",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <svg
                    className={`h-7 w-7 ${item.iconColor}`}
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
                <h4 className="mt-4 font-heading font-semibold text-chalkboard dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-wood-warm dark:bg-chalkboard/50" id="pricing">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h3 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white sm:text-3xl">
              Simple Pricing for Teachers
            </h3>
            <p className="mt-2 text-center text-foreground/60">
              Start free. Upgrade when you need more.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {/* Free tier */}
              <div className="rounded-2xl border border-wood-light/20 bg-white p-7 dark:bg-chalkboard dark:border-chalk-white/10">
                <h4 className="font-heading text-lg font-semibold text-chalkboard dark:text-white">
                  Free
                </h4>
                <p className="mt-1 text-3xl font-bold text-chalkboard dark:text-white">
                  $0
                </p>
                <p className="text-sm text-foreground/50">Forever free</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {freeFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-foreground/70"
                    >
                      <span className="mt-0.5 text-chalk-green font-bold">
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/editor"
                  className="mt-6 block rounded-lg border-2 border-chalk-green/20 py-2.5 text-center text-sm font-semibold text-chalk-green hover:bg-chalk-green-light transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
              {/* Pro tier */}
              <div className="relative rounded-2xl border-2 border-chalk-green bg-white p-7 shadow-lg dark:bg-chalkboard">
                <span className="absolute -top-3 left-4 rounded-full bg-chalk-green px-3 py-0.5 text-xs font-bold text-white shadow-sm">
                  Most Popular
                </span>
                <h4 className="font-heading text-lg font-semibold text-chalkboard dark:text-white">
                  Pro
                </h4>
                <p className="mt-1">
                  <span className="text-3xl font-bold text-chalkboard dark:text-white">
                    $3.99
                  </span>
                  <span className="text-sm text-foreground/50">/month</span>
                </p>
                <p className="text-sm text-foreground/50">
                  or $29.99/year (save 37%)
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {proFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-foreground/70"
                    >
                      <span className="mt-0.5 text-chalk-green font-bold">
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={PAYMENT_LINKS.yearly.url}
                  className="mt-6 block rounded-lg bg-chalk-green py-2.5 text-center text-sm font-bold text-white hover:bg-chalkboard transition-colors"
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

        {/* Audience */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h3 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white sm:text-3xl">
            Built for Every Classroom
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Elementary Teachers",
                desc: "Arrange desks for reading groups, centers, and whole-class instruction.",
                icon: (
                  <svg className="h-8 w-8 text-chalk-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
              {
                title: "Band & Orchestra Directors",
                desc: "Seat musicians by section. Rearrange for concerts, rehearsals, and auditions.",
                icon: (
                  <svg className="h-8 w-8 text-wood" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                  </svg>
                ),
              },
              {
                title: "School Admins",
                desc: "Help teachers set up classrooms. Share seating charts with substitutes and staff.",
                icon: (
                  <svg className="h-8 w-8 text-chalk-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-wood-light/20 bg-white p-6 text-center shadow-sm dark:bg-chalkboard dark:border-chalk-white/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-chalk-green-light dark:bg-chalk-green/20">
                  {item.icon}
                </div>
                <h4 className="mt-4 font-heading font-semibold text-chalkboard dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="rounded-2xl bg-chalkboard p-10 text-center shadow-lg">
            <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Ready to organize your classroom?
            </h3>
            <p className="mt-3 text-chalk-white/70">
              Create your first classroom seating chart in under 2 minutes. No
              signup, no credit card.
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-block rounded-lg bg-pencil-yellow px-8 py-3 text-base font-bold text-chalkboard hover:bg-pencil-yellow/90 transition-colors"
            >
              Create Your Seating Chart
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <h3 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white sm:text-3xl">
            Frequently Asked Questions
          </h3>
          <div className="mt-8 divide-y divide-wood-light/20 dark:divide-chalk-white/10">
            {faqItems.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-left text-base font-medium text-chalkboard dark:text-white">
                  {item.q}
                  <span className="ml-4 shrink-0 text-chalk-green group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* More tools */}
        <section className="mx-auto max-w-xl px-6 pb-16">
          <h3 className="font-heading text-center text-2xl font-bold text-chalkboard dark:text-white">
            More Free Teacher Tools
          </h3>
          <div className="mt-6">
            <a
              href="https://nametracingmaker.com"
              className="block rounded-2xl border border-wood-light/20 bg-white p-6 hover:border-chalk-green/30 hover:shadow-md transition dark:bg-chalkboard dark:border-chalk-white/10"
            >
              <h4 className="font-heading text-lg font-semibold text-chalkboard dark:text-white">
                Tracing Worksheet Maker
              </h4>
              <p className="mt-2 text-sm text-foreground/60">
                Generate printable name, letter, and number tracing worksheets.
                Perfect for preschool and kindergarten classrooms.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-chalk-green">
                Try it free &rarr;
              </span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-wood-light/20 bg-wood-warm dark:bg-chalkboard dark:border-chalk-white/10">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/40">
            <Link
              href="/random-seating-chart-generator"
              className="hover:text-chalk-green transition-colors"
            >
              Random Seating Chart Generator
            </Link>
            <Link
              href="/band-seating-chart"
              className="hover:text-chalk-green transition-colors"
            >
              Band Seating Chart
            </Link>
            <Link
              href="/classroom-seating-arrangement"
              className="hover:text-chalk-green transition-colors"
            >
              Classroom Seating Arrangements
            </Link>
            <Link
              href="/seating-chart-templates"
              className="hover:text-chalk-green transition-colors"
            >
              Seating Chart Templates
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-chalk-green transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="mt-4 text-sm text-foreground/40">
            Classroom Seating Chart Maker — Free for teachers.
          </p>
          <p className="mt-1 text-xs text-foreground/30">
            From the makers of{" "}
            <a
              href="https://nametracingmaker.com"
              className="underline hover:text-chalk-green transition-colors"
            >
              Tracing Worksheet Maker
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
