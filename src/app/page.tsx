export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fff7e8_0%,#f6efe4_38%,#efe5d5_100%)] text-stone-950">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-stone-900/10 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">
              Jnana
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Enterprise knowledge, retrieval, and decision memory.
            </p>
          </div>
          <a
            href="#platform"
            className="rounded-full border border-stone-900/15 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
          >
            Explore platform
          </a>
        </header>

        <div className="grid flex-1 gap-14 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
          <section className="max-w-3xl">
            <span className="inline-flex rounded-full border border-amber-950/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-900 shadow-[0_10px_30px_rgba(120,53,15,0.08)] backdrop-blur">
              Search less. Know more.
            </span>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance text-stone-950 sm:text-6xl lg:text-7xl">
              The operating system for institutional knowledge.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              Jnana gives teams a single place to capture documents, connect
              fragmented expertise, and surface trusted answers instantly.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#platform"
                className="rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
              >
                View product vision
              </a>
              <a
                href="#modules"
                className="rounded-full border border-stone-900/15 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-900 hover:bg-white"
              >
                See platform modules
              </a>
            </div>

            <dl className="mt-14 grid gap-5 sm:grid-cols-3">
              <div className="rounded-3xl border border-stone-900/10 bg-white/65 p-5 shadow-[0_18px_60px_rgba(41,37,36,0.08)] backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Retrieval
                </dt>
                <dd className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-stone-950">
                  Unified search
                </dd>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Documents, SOPs, wikis, and tribal knowledge in one query
                  layer.
                </p>
              </div>
              <div className="rounded-3xl border border-stone-900/10 bg-white/65 p-5 shadow-[0_18px_60px_rgba(41,37,36,0.08)] backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Governance
                </dt>
                <dd className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-stone-950">
                  Source trust
                </dd>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Permissions, freshness, and auditability built into answers.
                </p>
              </div>
              <div className="rounded-3xl border border-stone-900/10 bg-white/65 p-5 shadow-[0_18px_60px_rgba(41,37,36,0.08)] backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Intelligence
                </dt>
                <dd className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-stone-950">
                  AI answers
                </dd>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Fast synthesis grounded in the material your company already
                  trusts.
                </p>
              </div>
            </dl>
          </section>

          <section
            id="platform"
            className="relative rounded-[2rem] border border-stone-900/10 bg-stone-950 p-6 text-stone-50 shadow-[0_30px_90px_rgba(28,25,23,0.24)]"
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                  Knowledge cockpit
                </p>
                <p className="mt-2 text-lg font-medium">Jnana workspace</p>
              </div>
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-stone-300">
                Live context graph
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-white/6 p-5 ring-1 ring-white/10">
                <p className="text-sm text-stone-300">
                  Ask anything across policies, meeting notes, product docs,
                  and support decisions.
                </p>
                <div className="mt-4 rounded-2xl bg-[#18120f] p-4 text-sm text-stone-200 ring-1 ring-white/8">
                  What changed in our onboarding policy after the February audit?
                </div>
                <div className="mt-4 rounded-2xl bg-[#f6efe4] p-4 text-sm leading-6 text-stone-800">
                  Jnana identified three updates, linked each answer to source
                  documents, and flagged one outdated SOP still used by support.
                </div>
              </div>

              <div id="modules" className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/6 p-5 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                    Core module
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">Decision memory</h2>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    Preserve why a decision was made, who approved it, and what
                    changed after rollout.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/6 p-5 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                    Core module
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">Knowledge graph</h2>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    Connect teams, topics, files, and workflows into a navigable
                    system of record.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
