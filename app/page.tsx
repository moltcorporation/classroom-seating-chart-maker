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

/* ─── Custom classroom-themed SVG illustrations ─── */

function ClassroomDeskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      {/* Desk surface */}
      <rect x="6" y="18" width="36" height="6" rx="2" fill="#8b6914" opacity="0.9" />
      <rect x="6" y="18" width="36" height="2" rx="1" fill="#a07818" opacity="0.6" />
      {/* Desk legs */}
      <rect x="10" y="24" width="3" height="14" rx="1" fill="#7a5c12" opacity="0.8" />
      <rect x="35" y="24" width="3" height="14" rx="1" fill="#7a5c12" opacity="0.8" />
      {/* Chair */}
      <rect x="16" y="8" width="16" height="10" rx="3" fill="#2d5a27" opacity="0.7" />
      <rect x="19" y="11" width="10" height="4" rx="1.5" fill="#3a7a35" opacity="0.5" />
    </svg>
  );
}

/* Chalk-style hand-drawn student figure */
function StudentFigure({ className, color = "#f4d03f" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 40" fill="none">
      {/* Head */}
      <circle cx="16" cy="10" r="6" fill={color} opacity="0.85" />
      {/* Body */}
      <path d="M8 22c0-4.4 3.6-8 8-8s8 3.6 8 8v6c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2v-6z"
        fill={color} opacity="0.65" />
      {/* Face dots */}
      <circle cx="13.5" cy="9" r="1" fill="#2c2416" opacity="0.5" />
      <circle cx="18.5" cy="9" r="1" fill="#2c2416" opacity="0.5" />
      <path d="M14 13c.5.8 1.3 1 2 1s1.5-.2 2-1" stroke="#2c2416" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/* Decorative chalk doodles */
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

function ChalkBook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      <path d="M6 8c0-1.1.9-2 2-2h8l2 2 2-2h8c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8z"
        stroke="#f0ede8" strokeWidth="1.2" opacity="0.4" />
      <line x1="18" y1="8" x2="18" y2="28" stroke="#f0ede8" strokeWidth="0.8" opacity="0.3" />
      <line x1="10" y1="13" x2="16" y2="13" stroke="#f0ede8" strokeWidth="0.8" opacity="0.25" />
      <line x1="10" y1="17" x2="15" y2="17" stroke="#f0ede8" strokeWidth="0.8" opacity="0.25" />
      <line x1="20" y1="13" x2="26" y2="13" stroke="#f0ede8" strokeWidth="0.8" opacity="0.25" />
      <line x1="20" y1="17" x2="25" y2="17" stroke="#f0ede8" strokeWidth="0.8" opacity="0.25" />
    </svg>
  );
}

function ChalkRuler({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="4" y="16" width="32" height="8" rx="1" transform="rotate(-8 20 20)"
        stroke="#f4d03f" strokeWidth="1" opacity="0.35" />
      {[0,1,2,3,4,5,6].map(i => (
        <line key={i} x1={8 + i * 4} y1="17" x2={8 + i * 4} y2={i % 2 === 0 ? "21" : "19.5"}
          stroke="#f4d03f" strokeWidth="0.7" opacity="0.3" transform="rotate(-8 20 20)" />
      ))}
    </svg>
  );
}

/* Hero classroom scene — top-down view with diverse students */
function ClassroomScene() {
  const studentColors = ["#f4d03f", "#e67e22", "#e74c3c", "#9b59b6", "#3498db", "#1abc9c", "#2ecc71", "#f39c12", "#e84393", "#00b894", "#fd79a8", "#6c5ce7"];

  return (
    <svg viewBox="0 0 320 240" className="w-full h-full drop-shadow-lg">
      {/* Classroom floor */}
      <rect x="0" y="0" width="320" height="240" rx="16" fill="#faf8f4" />
      {/* Floor tile pattern */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={`h${i}`} x1="0" y1={30 * i} x2="320" y2={30 * i} stroke="#e8d5c4" strokeWidth="0.5" opacity="0.4" />
      ))}
      {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
        <line key={`v${i}`} x1={32 * i} y1="0" x2={32 * i} y2="240" stroke="#e8d5c4" strokeWidth="0.5" opacity="0.4" />
      ))}

      {/* Teacher desk at front */}
      <rect x="110" y="12" width="100" height="32" rx="4" fill="#8b6914" />
      <rect x="110" y="12" width="100" height="8" rx="4" fill="#a07818" opacity="0.6" />
      <text x="160" y="33" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold" fontFamily="sans-serif">Teacher</text>
      {/* Apple on teacher desk */}
      <circle cx="128" cy="24" r="5" fill="#c0392b" opacity="0.8" />
      <path d="M128 19c0-2 1.5-3 2.5-3" stroke="#2d5a27" strokeWidth="1" strokeLinecap="round" />

      {/* Student desks — 3 rows of 4 with diverse student avatars */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = 30 + col * 72;
          const y = 65 + row * 60;
          const colorIdx = row * 4 + col;
          const color = studentColors[colorIdx % studentColors.length];
          return (
            <g key={`${row}-${col}`}>
              {/* Desk */}
              <rect x={x} y={y + 16} width="56" height="24" rx="3" fill="#d4a853" opacity="0.8" />
              <rect x={x} y={y + 16} width="56" height="6" rx="3" fill="#8b6914" opacity="0.3" />
              {/* Desk legs */}
              <rect x={x + 4} y={y + 40} width="2" height="6" rx="1" fill="#7a5c12" opacity="0.4" />
              <rect x={x + 50} y={y + 40} width="2" height="6" rx="1" fill="#7a5c12" opacity="0.4" />
              {/* Student (head + shoulders from above) */}
              <circle cx={x + 28} cy={y + 8} r="8" fill={color} opacity="0.85" />
              <ellipse cx={x + 28} cy={y + 18} rx="10" ry="4" fill={color} opacity="0.5" />
              {/* Tiny face */}
              <circle cx={x + 25.5} cy={y + 7} r="1.2" fill="#2c2416" opacity="0.4" />
              <circle cx={x + 30.5} cy={y + 7} r="1.2" fill="#2c2416" opacity="0.4" />
              {/* Book/paper on desk */}
              <rect x={x + 8} y={y + 22} width="12" height="8" rx="1" fill="white" opacity="0.6" />
              <line x1={x + 10} y1={y + 25} x2={x + 18} y2={y + 25} stroke="#ccc" strokeWidth="0.5" />
              <line x1={x + 10} y1={y + 27} x2={x + 16} y2={y + 27} stroke="#ccc" strokeWidth="0.5" />
            </g>
          );
        })
      )}

      {/* Decorative elements */}
      {/* Bookshelf on right wall */}
      <rect x="296" y="60" width="16" height="160" rx="2" fill="#8b6914" opacity="0.3" />
      <rect x="298" y="70" width="12" height="3" rx="1" fill="#c0392b" opacity="0.3" />
      <rect x="298" y="80" width="12" height="3" rx="1" fill="#3498db" opacity="0.3" />
      <rect x="298" y="90" width="12" height="3" rx="1" fill="#2ecc71" opacity="0.3" />

      {/* Classroom label */}
      <text x="160" y="234" textAnchor="middle" fontSize="8" fill="#8b6914" opacity="0.5" fontFamily="sans-serif">
        Drag & drop to arrange your classroom
      </text>
    </svg>
  );
}

/* Mini layout thumbnails */
function RowLayout() {
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      <rect x="42" y="4" width="36" height="12" rx="2" fill="#8b6914" opacity="0.8" />
      <text x="60" y="13" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">Teacher</text>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g key={`${row}-${col}`}>
            <rect x={12 + col * 27} y={28 + row * 20} width="22" height="14" rx="2" fill="#d4a853" opacity="0.7" />
            <circle cx={23 + col * 27} cy={32 + row * 20} r="4" fill={["#f4d03f","#e67e22","#3498db","#e74c3c","#9b59b6","#1abc9c","#2ecc71","#f39c12","#e84393","#00b894","#fd79a8","#6c5ce7"][row*4+col]} opacity="0.8" />
          </g>
        ))
      )}
    </svg>
  );
}

function GroupLayout() {
  const colors = ["#f4d03f","#e67e22","#3498db","#e74c3c","#9b59b6","#1abc9c","#2ecc71","#f39c12","#e84393","#00b894","#fd79a8","#6c5ce7","#6c5ce7","#fd79a8","#00b894","#e84393"];
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      <rect x="42" y="4" width="36" height="12" rx="2" fill="#8b6914" opacity="0.8" />
      <text x="60" y="13" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">Teacher</text>
      {[
        { x: 8, y: 28 },
        { x: 64, y: 28 },
        { x: 8, y: 58 },
        { x: 64, y: 58 },
      ].map((g, i) => (
        <g key={i}>
          <rect x={g.x} y={g.y} width="20" height="12" rx="1.5" fill="#d4a853" opacity="0.7" />
          <rect x={g.x + 22} y={g.y} width="20" height="12" rx="1.5" fill="#d4a853" opacity="0.7" />
          <rect x={g.x} y={g.y + 14} width="20" height="12" rx="1.5" fill="#d4a853" opacity="0.7" />
          <rect x={g.x + 22} y={g.y + 14} width="20" height="12" rx="1.5" fill="#d4a853" opacity="0.7" />
          <circle cx={g.x + 10} cy={g.y + 3} r="3" fill={colors[i*4]} opacity="0.8" />
          <circle cx={g.x + 32} cy={g.y + 3} r="3" fill={colors[i*4+1]} opacity="0.8" />
          <circle cx={g.x + 10} cy={g.y + 17} r="3" fill={colors[i*4+2]} opacity="0.8" />
          <circle cx={g.x + 32} cy={g.y + 17} r="3" fill={colors[i*4+3]} opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

function UShapeLayout() {
  const colors = ["#f4d03f","#e67e22","#3498db","#e74c3c","#9b59b6","#1abc9c","#2ecc71","#f39c12","#e84393"];
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      <rect x="42" y="4" width="36" height="12" rx="2" fill="#8b6914" opacity="0.8" />
      <text x="60" y="13" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">Teacher</text>
      {[0, 1, 2].map((i) => (
        <g key={`l${i}`}>
          <rect x="8" y={28 + i * 18} width="22" height="12" rx="1.5" fill="#d4a853" opacity="0.7" />
          <circle cx="19" cy={31 + i * 18} r="3" fill={colors[i]} opacity="0.8" />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={`r${i}`}>
          <rect x="90" y={28 + i * 18} width="22" height="12" rx="1.5" fill="#d4a853" opacity="0.7" />
          <circle cx="101" cy={31 + i * 18} r="3" fill={colors[3+i]} opacity="0.8" />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={`b${i}`}>
          <rect x={22 + i * 27} y="72" width="22" height="12" rx="1.5" fill="#d4a853" opacity="0.7" />
          <circle cx={33 + i * 27} cy="75" r="3" fill={colors[6+i]} opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

/* ─── Feature icons — classroom-specific hand-drawn style ─── */

function DragDropIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none">
      {/* Hand cursor */}
      <path d="M16 6v14M16 6l-4 4M16 6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Student figure being moved */}
      <circle cx="16" cy="24" r="4" fill="currentColor" opacity="0.3" />
      {/* Motion lines */}
      <path d="M6 14h3M23 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function ShuffleBellIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none">
      {/* Bell */}
      <path d="M16 4c-5 0-8 3-8 8v4l-2 3h20l-2-3v-4c0-5-3-8-8-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 19v1c0 1.7 1.3 3 3 3s3-1.3 3-3v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Shuffle arrows */}
      <path d="M11 7l-2-2M21 7l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function PrintChartIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none">
      {/* Paper with chart */}
      <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.8" />
      {/* Grid lines representing seating chart */}
      <rect x="10" y="10" width="5" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="17" y="10" width="5" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="10" y="16" width="5" height="4" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="17" y="16" width="5" height="4" rx="1" fill="currentColor" opacity="0.3" />
      {/* Print symbol */}
      <circle cx="16" cy="24" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function CSVImportIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none">
      {/* Clipboard */}
      <rect x="8" y="6" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="12" y="3" width="8" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Name rows */}
      <line x1="12" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="12" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="12" y1="22" x2="19" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function LayoutsIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none">
      {/* Four different desk arrangements */}
      <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Different patterns inside each */}
      <line x1="6" y1="9" x2="12" y2="9" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="6" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="23" cy="9" r="3" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M6 22h3v4H6zM9 22h3v4H9z" fill="currentColor" opacity="0.2" />
      <path d="M20 21c0 0 3-1 6 0M20 25c0 0 3-1 6 0" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function CloudSaveIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none">
      {/* Cloud */}
      <path d="M8 22a5 5 0 014-9.9 7 7 0 0113.6 2.5A4 4 0 0124 22H8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Checkmark inside */}
      <path d="M12 17l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

const features = [
  {
    title: "Drag & Drop Editor",
    desc: "Drag students from the roster to any desk. Rearrange your classroom seating arrangement with intuitive drag-and-drop.",
    icon: <DragDropIcon />,
    accent: "bg-chalk-green-light text-chalk-green",
    border: "border-chalk-green/20",
  },
  {
    title: "Random Shuffle",
    desc: "Randomly assign students to seats with one click. Perfect for new semesters and mixing up classroom dynamics.",
    icon: <ShuffleBellIcon />,
    accent: "bg-pencil-yellow/20 text-wood",
    border: "border-pencil-yellow/30",
  },
  {
    title: "Print & PDF Export",
    desc: "Print your seating chart or save as PDF. Post it on the classroom wall or share with substitute teachers.",
    icon: <PrintChartIcon />,
    accent: "bg-apple-red/10 text-apple-red",
    border: "border-apple-red/20",
  },
  {
    title: "CSV Import",
    desc: "Import your student roster from a CSV file. No need to type every name — paste from your gradebook.",
    icon: <CSVImportIcon />,
    accent: "bg-chalk-green-light text-chalk-green",
    border: "border-chalk-green/20",
  },
  {
    title: "Multiple Layouts",
    desc: "Rows, groups, U-shape, horseshoe, lab benches, and orchestra seating. Match your actual classroom.",
    icon: <LayoutsIcon />,
    accent: "bg-pencil-yellow/20 text-wood",
    border: "border-pencil-yellow/30",
  },
  {
    title: "Cloud Save",
    desc: "Your seating arrangements save automatically. Come back later and pick up where you left off.",
    icon: <CloudSaveIcon />,
    accent: "bg-apple-red/10 text-apple-red",
    border: "border-apple-red/20",
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

      {/* Header — warm shelf with classroom accents */}
      <header className="relative bg-wood-warm border-b-4 border-wood/60">
        <div className="wood-strip" />
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chalkboard shadow-md border border-chalk-green/30">
              <ClassroomDeskIcon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-chalkboard tracking-tight">
                Classroom Seating Chart Maker
              </h1>
              <p className="text-[10px] text-wood/60 font-medium tracking-wide uppercase">Free for teachers</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline text-sm font-medium text-wood hover:text-chalkboard transition-colors">
              Pricing
            </a>
            <Link
              href="/editor"
              className="rounded-xl bg-chalk-green px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-chalkboard hover:shadow-lg transition-all hand-drawn-border"
            >
              Open Editor
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — chalkboard with chalk texture, classroom scene, and floating doodles */}
        <section className="chalkboard-texture bg-chalkboard text-white overflow-hidden relative">
          {/* Floating chalk doodles */}
          <div className="absolute top-6 right-[8%] doodle-float opacity-40 hidden lg:block">
            <ChalkStar className="w-12 h-12" />
          </div>
          <div className="absolute bottom-16 left-[5%] doodle-float-delay opacity-30 hidden lg:block">
            <ChalkApple className="w-10 h-10" />
          </div>
          <div className="absolute top-1/3 right-[3%] doodle-float-slow opacity-20 hidden lg:block">
            <ChalkBook className="w-10 h-10" />
          </div>
          <div className="absolute bottom-1/3 left-[3%] doodle-float opacity-15 hidden xl:block">
            <ChalkRuler className="w-12 h-12" />
          </div>

          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-chalk-green/20 border border-chalk-green/30 px-4 py-1.5 mb-6">
                  <span className="h-2 w-2 rounded-full bg-pencil-yellow animate-pulse" />
                  <span className="text-xs font-semibold text-chalk-white/70 tracking-wide uppercase">Free for teachers — no signup needed</span>
                </div>
                <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] leading-[1.1]">
                  Your classroom,{" "}
                  <span className="chalk-underline text-pencil-yellow">organized</span>
                </h2>
                <p className="mt-5 text-lg text-chalk-white/70 leading-relaxed max-w-lg">
                  Add your students, drag them to desks, shuffle for new arrangements, and print beautiful seating charts. Takes 2 minutes, not 2 hours.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/editor"
                    className="group rounded-xl bg-pencil-yellow px-8 py-4 text-base font-bold text-chalkboard shadow-lg shadow-pencil-yellow/20 hover:shadow-xl hover:shadow-pencil-yellow/30 hover:scale-[1.02] transition-all"
                  >
                    Create Your Seating Chart
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                  <a
                    href="#pricing"
                    className="rounded-xl border-2 border-chalk-white/20 px-6 py-4 text-base font-semibold text-white hover:border-chalk-white/50 hover:bg-chalk-white/5 transition-all"
                  >
                    View Plans
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-chalk-white/50">
                  {["No signup required", "No credit card", "Works on Chromebooks"].map(label => (
                    <span key={label} className="flex items-center gap-1.5">
                      <svg className="h-4 w-4 text-chalk-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive classroom scene */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border-2 border-wood/40 p-4 shadow-2xl relative classroom-frame">
                  <div className="absolute -top-3 left-6 bg-chalkboard px-3 py-1 rounded-md border border-wood/40">
                    <span className="text-xs font-bold text-pencil-yellow/80 tracking-wide uppercase">Mrs. Smith&apos;s 3rd Grade</span>
                  </div>
                  <ClassroomScene />
                  {/* Chalk tray at bottom */}
                  <div className="absolute -bottom-2 left-6 right-6 h-3 bg-wood/80 rounded-b-lg shadow-md" />
                </div>
              </div>

              {/* Mobile: show layout thumbnails instead */}
              <div className="block lg:hidden">
                <div className="rounded-2xl bg-chalkboard-light/60 border-2 border-wood/40 p-5 shadow-2xl relative">
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
                </div>
              </div>
            </div>
          </div>
          <div className="wood-strip" />
        </section>

        {/* Social proof — teacher testimonials style */}
        <section className="bg-wood-warm border-b border-wood/10">
          <div className="mx-auto max-w-5xl px-6 py-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-foreground/50">
              <span className="flex items-center gap-2">
                <StudentFigure className="h-5 w-5" color="#2d5a27" />
                Built for K-12 teachers
              </span>
              <span className="hidden sm:inline text-wood/30">|</span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-chalk-green" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Works on any device
              </span>
              <span className="hidden sm:inline text-wood/30">|</span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-pencil-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Set up in 2 minutes
              </span>
            </div>
          </div>
        </section>

        {/* Features — notebook-style with classroom icons */}
        <section className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-12">
            <span className="inline-block font-heading text-sm font-bold text-apple-red uppercase tracking-widest mb-3">Everything you need</span>
            <h3 className="font-heading text-3xl font-bold text-chalkboard sm:text-4xl">
              Built for{" "}
              <span className="text-chalk-green chalk-underline">Teachers</span>,
              Not Spreadsheets
            </h3>
            <p className="mt-4 text-foreground/50 max-w-lg mx-auto">
              Purpose-built for classroom seating arrangements. Not a generic chart tool with education features bolted on.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className={`group rounded-2xl border-2 ${f.border} bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 dark:bg-chalkboard dark:border-chalk-white/10`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${f.accent} shadow-sm group-hover:scale-110 transition-transform`}
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

        {/* How it works — chalkboard steps */}
        <section className="bg-chalkboard chalkboard-texture text-white relative overflow-hidden">
          <div className="wood-strip" />
          <div className="mx-auto max-w-5xl px-6 py-20 relative z-10">
            <h3 className="font-heading text-center text-3xl font-bold sm:text-4xl">
              Set Up in <span className="text-pencil-yellow">4 Easy Steps</span>
            </h3>
            <p className="mt-3 text-center text-chalk-white/50 max-w-md mx-auto">
              From class list to printed chart in under 2 minutes
            </p>
            <div className="mt-14 grid gap-8 sm:grid-cols-4 relative">
              {/* Connecting chalk line */}
              <div className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-chalk-white/10" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(240,237,232,0.15) 0px, rgba(240,237,232,0.15) 8px, transparent 8px, transparent 16px)' }} />
              {[
                {
                  step: "1",
                  title: "Create a class",
                  desc: "Name your class to get started",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  ),
                },
                {
                  step: "2",
                  title: "Add students",
                  desc: "Type names or import from CSV",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  ),
                },
                {
                  step: "3",
                  title: "Arrange seats",
                  desc: "Drag to desks or shuffle randomly",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                },
                {
                  step: "4",
                  title: "Print & share",
                  desc: "Print or save as PDF instantly",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.step} className="text-center relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-chalk-green border-2 border-pencil-yellow/30 text-pencil-yellow shadow-lg relative z-10">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-1 sm:right-auto sm:-top-1 sm:left-[calc(50%+14px)] bg-pencil-yellow text-chalkboard w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-20">
                    {item.step}
                  </div>
                  <h4 className="mt-4 font-heading text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-chalk-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="wood-strip" />
        </section>

        {/* Why teachers love it — warm paper with colored accent cards */}
        <section className="bg-wood-warm/50 dark:bg-chalkboard/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="text-center mb-12">
              <span className="inline-block font-heading text-sm font-bold text-chalk-green uppercase tracking-widest mb-3">Why teachers love it</span>
              <h3 className="font-heading text-3xl font-bold text-chalkboard dark:text-white sm:text-4xl">
                Save Time, Reduce Stress
              </h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "2-Minute Setup",
                  desc: "Import your class list and arrange seats in under 2 minutes. No more hand-drawing charts.",
                  border: "border-l-pencil-yellow",
                  bg: "bg-pencil-yellow/10",
                  iconColor: "text-wood",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Fair Seating",
                  desc: "Random shuffle gives every student a fair chance at any seat. Great for new semesters.",
                  border: "border-l-chalk-green",
                  bg: "bg-chalk-green-light",
                  iconColor: "text-chalk-green",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  ),
                },
                {
                  title: "Sub-Ready",
                  desc: "Print a clean chart for substitutes. They can see who sits where at a glance.",
                  border: "border-l-apple-red",
                  bg: "bg-apple-red/10",
                  iconColor: "text-apple-red",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Always Free",
                  desc: "Core features are free forever. No credit card, no trial expiration, no catches.",
                  border: "border-l-pencil-yellow",
                  bg: "bg-pencil-yellow/10",
                  iconColor: "text-wood",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border-l-4 ${item.border} bg-white p-5 shadow-sm hover:shadow-md transition-shadow dark:bg-chalkboard dark:border-chalk-white/10`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}>
                    <span className={item.iconColor}>{item.icon}</span>
                  </div>
                  <h4 className="mt-3 font-heading font-bold text-chalkboard dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing — distinctive cards */}
        <section className="relative" id="pricing">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="text-center mb-12">
              <span className="inline-block font-heading text-sm font-bold text-wood uppercase tracking-widest mb-3">Simple pricing</span>
              <h3 className="font-heading text-3xl font-bold text-chalkboard dark:text-white sm:text-4xl">
                Plans for Every Teacher
              </h3>
              <p className="mt-3 text-foreground/50">
                Start free. Upgrade when you need more classes and features.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Free tier */}
              <div className="rounded-2xl border-2 border-wood-light/20 bg-white p-8 dark:bg-chalkboard dark:border-chalk-white/10 notebook-card">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-chalk-green-light">
                    <svg className="h-6 w-6 text-chalk-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-chalkboard dark:text-white">
                      Free
                    </h4>
                    <p className="text-xs text-foreground/40">Perfect for one class</p>
                  </div>
                </div>
                <p className="mt-5 text-4xl font-bold text-chalkboard dark:text-white">
                  $0
                </p>
                <p className="text-sm text-foreground/50">Forever free — no catches</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-foreground/70">
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
                  Best for Multiple Classes
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-chalk-green">
                    <svg className="h-6 w-6 text-pencil-yellow" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-chalkboard dark:text-white">
                      Pro
                    </h4>
                    <p className="text-xs text-foreground/40">Unlimited everything</p>
                  </div>
                </div>
                <p className="mt-5">
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
                    <li key={f} className="flex items-start gap-2.5 text-foreground/70">
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

        {/* Audience — themed classroom cards */}
        <section className="bg-wood-warm/30 dark:bg-chalkboard/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h3 className="font-heading text-center text-3xl font-bold text-chalkboard dark:text-white sm:text-4xl">
              Built for <span className="text-chalk-green">Every</span> Classroom
            </h3>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Elementary Teachers",
                  desc: "Arrange desks for reading groups, centers, and whole-class instruction. Visual layouts students can understand.",
                  gradient: "from-chalk-green-light to-white dark:from-chalk-green/10 dark:to-chalkboard",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                      <rect x="6" y="20" width="20" height="4" rx="1" fill="#8b6914" opacity="0.6" />
                      <circle cx="16" cy="12" r="6" fill="#f4d03f" opacity="0.7" />
                      <circle cx="14" cy="11" r="1" fill="#2c2416" opacity="0.4" />
                      <circle cx="18" cy="11" r="1" fill="#2c2416" opacity="0.4" />
                      <path d="M14 14.5c.4.6 1 .8 2 .8s1.6-.2 2-.8" stroke="#2c2416" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
                      <rect x="4" y="14" width="5" height="7" rx="1" fill="#3498db" opacity="0.4" />
                      <rect x="23" y="14" width="5" height="7" rx="1" fill="#e74c3c" opacity="0.4" />
                    </svg>
                  ),
                },
                {
                  title: "Band & Orchestra",
                  desc: "Seat musicians by section. Rearrange for concerts, rehearsals, and auditions with specialized layouts.",
                  gradient: "from-pencil-yellow/20 to-white dark:from-pencil-yellow/5 dark:to-chalkboard",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4v18" stroke="#8b6914" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="22" r="4" fill="#f4d03f" opacity="0.6" />
                      <path d="M16 4c0 0 4 1 4 5v4" stroke="#8b6914" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  title: "School Admins",
                  desc: "Help teachers set up classrooms. Share seating charts with substitutes, staff, and parents.",
                  gradient: "from-apple-red/10 to-white dark:from-apple-red/5 dark:to-chalkboard",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                      <rect x="6" y="6" width="20" height="20" rx="3" stroke="#8b6914" strokeWidth="1.5" />
                      <rect x="6" y="6" width="20" height="6" rx="3" fill="#c0392b" opacity="0.3" />
                      <circle cx="12" cy="20" r="3" fill="#2d5a27" opacity="0.4" />
                      <circle cx="20" cy="20" r="3" fill="#3498db" opacity="0.4" />
                      <path d="M14 9h8" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl bg-gradient-to-b ${item.gradient} border-2 border-wood-light/15 p-8 text-center shadow-sm hover:shadow-md transition-shadow dark:border-chalk-white/10`}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-chalkboard-light">
                    {item.icon}
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

        {/* CTA — chalkboard with classroom illustration */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="chalkboard-texture rounded-3xl bg-chalkboard p-12 sm:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Chalk doodles */}
            <div className="absolute top-6 right-10 doodle-float opacity-30 hidden sm:block">
              <ChalkStar className="w-10 h-10" />
            </div>
            <div className="absolute bottom-8 left-10 doodle-float-delay opacity-20 hidden sm:block">
              <ChalkBook className="w-9 h-9" />
            </div>
            <div className="absolute top-10 left-[15%] doodle-float-slow opacity-15 hidden md:block">
              <ChalkApple className="w-8 h-8" />
            </div>

            {/* Small classroom illustration */}
            <div className="mx-auto mb-6 flex items-center justify-center gap-2 relative z-10">
              {["#f4d03f", "#e67e22", "#3498db", "#e74c3c", "#9b59b6"].map((color, i) => (
                <div key={i} className="flex flex-col items-center gap-1" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full opacity-70" style={{ backgroundColor: color }} />
                  <div className="w-8 h-3 rounded-sm bg-wood/60" />
                </div>
              ))}
            </div>

            <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl relative z-10">
              Ready to organize your classroom?
            </h3>
            <p className="mt-4 text-lg text-chalk-white/60 max-w-md mx-auto relative z-10">
              Join teachers who spend 2 minutes on seating charts instead of 2 hours. No signup, no credit card.
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
                  <svg className="w-5 h-5 text-wood" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
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
              <ClassroomDeskIcon className="h-5 w-5" />
            </div>
            <span className="font-heading text-sm font-bold text-chalk-white/70">Classroom Seating Chart Maker</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/random-seating-chart-generator" className="hover:text-pencil-yellow transition-colors">
              Random Generator
            </Link>
            <Link href="/band-seating-chart" className="hover:text-pencil-yellow transition-colors">
              Band Seating Chart
            </Link>
            <Link href="/classroom-seating-arrangement" className="hover:text-pencil-yellow transition-colors">
              Arrangements
            </Link>
            <Link href="/seating-chart-templates" className="hover:text-pencil-yellow transition-colors">
              Templates
            </Link>
            <Link href="/privacy-policy" className="hover:text-pencil-yellow transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-chalk-white/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-chalk-white/30">
              Free for teachers. Built with care.
            </p>
            <p className="text-xs text-chalk-white/30">
              From the makers of{" "}
              <a href="https://nametracingmaker.com" className="underline hover:text-pencil-yellow transition-colors">
                Tracing Worksheet Maker
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
