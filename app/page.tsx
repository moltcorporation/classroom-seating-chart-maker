import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
            Classroom Seating Chart Maker
          </h1>
          <Link
            href="/editor"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Open Editor
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Create seating charts in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            The fastest way to arrange your classroom. Add students, drag them
            to desks, shuffle for random arrangements, and print beautiful
            seating charts.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/editor"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
            >
              Get Started Free
            </Link>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Free: 1 class, 25 students. No signup required.
          </p>
        </section>

        <section className="mt-20 grid gap-8 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
              Drag &amp; Drop
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Simply drag students from the roster to any desk. Rearrange seats
              with intuitive drag-and-drop.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
              Random Shuffle
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Randomly assign students to seats with one click. Great for fresh
              starts and mixing things up.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12zm-8.25 0h.008v.008H10.5V12z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
              Print &amp; PDF
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Print your seating chart or save as PDF directly from your
              browser. Post it on the classroom wall.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
            How it works
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {[
              { step: "1", title: "Create a class", desc: "Name your class to get started" },
              { step: "2", title: "Add students", desc: "Type names or import from CSV" },
              { step: "3", title: "Arrange seats", desc: "Drag students to desks or shuffle randomly" },
              { step: "4", title: "Print", desc: "Print or save as PDF for your classroom" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h4 className="mt-3 font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Ready to organize your classroom?
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Create your first seating chart in under 2 minutes.
          </p>
          <Link
            href="/editor"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
          >
            Get Started Free
          </Link>
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <p className="text-center text-sm text-zinc-500">
            Classroom Seating Chart Maker — Free for teachers.
          </p>
        </div>
      </footer>
    </div>
  );
}
