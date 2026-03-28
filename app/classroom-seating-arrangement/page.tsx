import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom Seating Arrangement Ideas & Templates | Free for Teachers",
  description:
    "Explore classroom seating arrangement ideas: rows, clusters, U-shape, horseshoe, pairs, and lab layouts. Find the best seating arrangement for your classroom and create it with our free generator.",
  keywords: [
    "classroom seating arrangement templates",
    "classroom seating arrangement generator",
    "seating arrangement in classroom",
    "best seating arrangement for classroom",
    "seating arrangement ideas classroom",
    "classroom seating arrangement",
  ],
  alternates: {
    canonical: "https://classroomseatingchartmaker.com/classroom-seating-arrangement",
  },
};

function JsonLd() {
  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Classroom Seating Arrangement Generator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: "https://classroomseatingchartmaker.com/classroom-seating-arrangement",
    description:
      "Free classroom seating arrangement tool for teachers. Choose from rows, clusters, U-shape, horseshoe, and more layouts.",
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
      { "@type": "ListItem", position: 2, name: "Classroom Seating Arrangements", item: "https://classroomseatingchartmaker.com/classroom-seating-arrangement" },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best seating arrangement for a classroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best seating arrangement depends on your teaching style. Traditional rows work best for lectures and testing. Cluster groups are ideal for collaborative projects. U-shape or horseshoe layouts promote class discussions. Most teachers switch between arrangements depending on the activity.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I change my classroom seating arrangement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most teachers change seating every 4-6 weeks. Regular rotation helps students build new relationships, prevents cliques from forming, and gives everyone a chance at different spots in the room. Some teachers also switch layouts for different activities within the same week.",
        },
      },
      {
        "@type": "Question",
        name: "What seating arrangement works best for group work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cluster groups of 4-6 desks pushed together are the best arrangement for group work. Students face each other, making discussion and collaboration natural. Pairs (two desks side by side) work well for partner activities and think-pair-share exercises.",
        },
      },
      {
        "@type": "Question",
        name: "How do I create a seating arrangement for my classroom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use our free Classroom Seating Chart Maker to create your arrangement. Choose a layout (rows, clusters, U-shape, or custom), add your students, and drag desks into position. You can save multiple arrangements for the same class and export to PDF.",
        },
      },
      {
        "@type": "Question",
        name: "What seating arrangement is best for classroom management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional rows are generally best for classroom management because students face forward with limited peer interaction. For classes that need moderate collaboration with good sight lines, the U-shape gives the teacher access to every student while maintaining structure.",
        },
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

const arrangements = [
  {
    title: "Traditional Rows",
    bestFor: "Lectures, individual work, testing",
    pros: ["Clear sightlines to the board", "Easy for test proctoring", "Familiar to students"],
    cons: ["Limited group interaction", "Back rows feel distant", "Hard to monitor side conversations"],
    desc: "The classic row arrangement faces all students toward the front. Rows work best when instruction is teacher-directed — lectures, presentations, and standardized testing. Students have clear views of the board and fewer distractions from peers.",
  },
  {
    title: "Cluster Groups",
    bestFor: "Group projects, collaborative learning, STEM activities",
    pros: ["Promotes collaboration", "Easy group discussions", "Builds teamwork skills"],
    cons: ["More off-task conversation", "Some students face away from board", "Harder to maintain quiet"],
    desc: "Desks pushed together in groups of 4-6 create natural collaboration zones. Cluster seating encourages discussion, peer tutoring, and group problem-solving. Ideal for project-based learning and cooperative activities.",
  },
  {
    title: "U-Shape / Horseshoe",
    bestFor: "Discussions, Socratic seminars, presentations",
    pros: ["Students see each other", "Teacher can reach every desk", "Great for whole-class discussion"],
    cons: ["Takes more space", "Hard with large classes", "Students in the curve may feel crowded"],
    desc: "Desks arranged in a U or horseshoe create an open center with students facing each other. This arrangement promotes class discussion because every student can see who is speaking. Teachers can walk into the center to engage with any student directly.",
  },
  {
    title: "Pairs / Partner Desks",
    bestFor: "Think-pair-share, peer tutoring, partner reading",
    pros: ["Built-in partner for activities", "Easier to manage than large groups", "Good balance of focus and collaboration"],
    cons: ["Limited to one partner", "Can create dependency on one peer", "Odd-numbered classes leave someone out"],
    desc: "Two desks pushed together create natural partnerships throughout the room. Pairs strike a balance between individual focus and collaboration — students have a built-in partner for think-pair-share, peer editing, and practice activities without the distraction of a full group. Especially effective for younger students who need structure in their collaboration.",
  },
  {
    title: "Lab / Workstation",
    bestFor: "Science labs, computer rooms, art studios, makerspaces",
    pros: ["Designed for hands-on work", "Shared resources at each station", "Easy cleanup zones"],
    cons: ["Fixed positions limit flexibility", "Some stations far from teacher", "Can feel crowded"],
    desc: "Lab-style seating places students at shared workstations or benches. Each station has its own equipment, materials, or computer. This layout is standard for science labs, art rooms, and computer labs where the work happens at the station, not at individual desks.",
  },
];

export default function ClassroomSeatingArrangement() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <JsonLd />
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">Classroom Seating Chart Maker</Link>
          <Link href="/editor" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Open Editor</Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Classroom Seating Arrangement Ideas & Templates
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The right seating arrangement transforms classroom behavior and engagement. Explore layouts for every teaching style, then build your arrangement with our free drag-and-drop tool.
          </p>
          <div className="mt-8">
            <Link href="/editor" className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700">
              Build Your Arrangement
            </Link>
          </div>
          <p className="mt-3 text-sm text-zinc-500">Free to use. No signup required.</p>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Choose Your Layout</h2>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">
            Each arrangement has trade-offs. The best choice depends on your teaching goals, class size, and room shape.
          </p>
          <div className="mt-8 space-y-8">
            {arrangements.map((a) => (
              <div key={a.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{a.title}</h3>
                  <span className="mt-1 text-sm text-blue-600 dark:text-blue-400 sm:mt-0">Best for: {a.bestFor}</span>
                </div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{a.desc}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium text-green-600 dark:text-green-400">Advantages</h4>
                    <ul className="mt-1 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {a.pros.map((p) => <li key={p} className="flex items-start gap-2"><span className="mt-0.5 text-green-500">+</span>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-amber-600 dark:text-amber-400">Trade-offs</h4>
                    <ul className="mt-1 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {a.cons.map((c) => <li key={c} className="flex items-start gap-2"><span className="mt-0.5 text-amber-500">-</span>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">How to Choose the Right Arrangement</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Start with your primary teaching method. If most instruction is teacher-led with lectures and demonstrations, rows give every student a clear view and minimize distractions. If you run a discussion-heavy class with Socratic seminars or debates, the U-shape lets students see and respond to each other directly.
            </p>
            <p>
              Consider your room. Narrow rooms work better with rows. Square rooms open up options for clusters and U-shapes. Rooms with fixed furniture (lab benches, computer desks) dictate the layout — focus on optimizing student placement within the constraints you have.
            </p>
            <p>
              Think about the mix. Many teachers use different arrangements for different activities — rows for testing days, clusters for project work, U-shape for Friday discussions. Our editor lets you save multiple arrangements for the same class so you can switch layouts without rebuilding from scratch. Browse our{" "}
              <Link href="/seating-chart-templates" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline">seating chart templates</Link>{" "}
              for ready-made layouts you can customize.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Tips for Better Seating Arrangements</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {[
              { title: "Rotate regularly", desc: "Change seating every 4-6 weeks. Students build new relationships and avoid the rut of permanent spots." },
              { title: "Consider student needs", desc: "Place students with visual or hearing needs near the front. Keep students who need quiet away from high-traffic areas." },
              { title: "Plan traffic flow", desc: "Leave clear paths between desks. Students should reach the door, pencil sharpener, and materials without climbing over each other." },
              { title: "Use data", desc: "Track which arrangements lead to better participation and fewer disruptions. Let results guide your layout choices." },
            ].map((tip) => (
              <div key={tip.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{tip.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">All Layouts with Pro</h2>
          <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Free users get the row layout. Pro unlocks every arrangement — clusters, U-shape, horseshoe, lab, and orchestra — plus unlimited classes and clean PDF export.
          </p>
          <div className="mt-6 text-center">
            <Link href="/#pricing" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              See pricing &rarr;
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-3xl mx-auto space-y-6">
            {[
              { q: "What is the best seating arrangement for a classroom?", a: "The best seating arrangement depends on your teaching style. Traditional rows work best for lectures and testing. Cluster groups are ideal for collaborative projects. U-shape or horseshoe layouts promote class discussions. Most teachers switch between arrangements depending on the activity." },
              { q: "How often should I change my classroom seating arrangement?", a: "Most teachers change seating every 4-6 weeks. Regular rotation helps students build new relationships, prevents cliques from forming, and gives everyone a chance at different spots in the room." },
              { q: "What seating arrangement works best for group work?", a: "Cluster groups of 4-6 desks pushed together are the best arrangement for group work. Pairs (two desks side by side) work well for partner activities and think-pair-share exercises." },
              { q: "How do I create a seating arrangement for my classroom?", a: "Use our free Classroom Seating Chart Maker to create your arrangement. Choose a layout, add your students, and drag desks into position. You can save multiple arrangements and export to PDF." },
              { q: "What seating arrangement is best for classroom management?", a: "Traditional rows are generally best for classroom management because students face forward with limited peer interaction. The U-shape gives the teacher access to every student while maintaining structure." },
            ].map((item) => (
              <details key={item.q} className="group rounded-xl border border-zinc-200 dark:border-zinc-800">
                <summary className="cursor-pointer px-6 py-4 font-medium text-zinc-900 dark:text-white">
                  {item.q}
                </summary>
                <p className="px-6 pb-4 text-sm text-zinc-600 dark:text-zinc-400">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Build your classroom arrangement</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Pick a layout, add your students, and arrange desks with drag-and-drop. Free, no signup.</p>
          <Link href="/editor" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700">
            Create Your Arrangement
          </Link>
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <p className="text-sm text-zinc-500">Classroom Seating Chart Maker — Free for teachers.</p>
          <p className="mt-1 text-xs text-zinc-400">From the makers of <a href="https://nametracingmaker.com" className="underline hover:text-zinc-600 dark:hover:text-zinc-300">Tracing Worksheet Maker</a></p>
          <div className="flex gap-4">
            <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">Home</Link>
            <Link href="/privacy-policy" className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
