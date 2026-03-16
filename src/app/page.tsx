export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] font-sans text-black">
      {/* Nav */}
      <header className="border-b-[3px] border-black bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="border-[3px] border-black bg-[#ffe500] px-4 py-2 shadow-[4px_4px_0_#000]">
            <span className="text-base font-black uppercase tracking-tight">JNANA</span>
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#platform" className="text-sm font-black uppercase hover:underline">
              Platform
            </a>
            <a href="#modules" className="text-sm font-black uppercase hover:underline">
              Modules
            </a>
            <a href="#" className="text-sm font-black uppercase hover:underline">
              Docs
            </a>
          </nav>

          <a
            href="#platform"
            className="border-[3px] border-black bg-[#ffe500] px-5 py-2.5 text-sm font-black uppercase shadow-[4px_4px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
          >
            Get Access →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b-[3px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_440px]">
            {/* Left: headline */}
            <div>
              <div className="mb-8 inline-block border-[3px] border-black bg-[#ffe500] px-4 py-2 shadow-[4px_4px_0_#000]">
                <span className="text-xs font-black uppercase tracking-[0.22em]">
                  Search less. Know more.
                </span>
              </div>

              <h1 className="text-[4.5rem] font-black uppercase leading-[0.88] tracking-tight sm:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
                The OS<br />
                for<br />
                <span className="inline bg-[#ffe500] px-2 pb-1">
                  institutional
                </span>
                <br />
                knowledge.
              </h1>

              <p className="mt-8 max-w-lg text-lg font-medium leading-8 text-black/55">
                Jnana gives teams a single place to capture documents, connect
                fragmented expertise, and surface trusted answers instantly.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#platform"
                  className="border-[3px] border-black bg-black px-8 py-4 text-sm font-black uppercase text-[#ffe500] shadow-[5px_5px_0_#ffe500] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#ffe500]"
                >
                  View product vision
                </a>
                <a
                  href="#modules"
                  className="border-[3px] border-black bg-white px-8 py-4 text-sm font-black uppercase shadow-[5px_5px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#000]"
                >
                  See platform modules
                </a>
              </div>
            </div>

            {/* Right: workspace demo */}
            <div className="border-[3px] border-black bg-white shadow-[7px_7px_0_#000]">
              <div className="border-b-[3px] border-black bg-black px-5 py-3">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffe500]">
                  Jnana workspace
                </p>
              </div>

              <div className="p-5">
                <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-black/40">
                  Query
                </p>
                <div className="border-[2px] border-black bg-[#fffde0] p-3 font-mono text-sm text-black">
                  What changed in our onboarding policy after the February
                  audit?
                </div>

                <p className="mb-2 mt-5 text-[10px] font-black uppercase tracking-widest text-black/40">
                  Response
                </p>
                <div className="border-[2px] border-[#0047ff] bg-[#eef2ff] p-3 text-sm leading-6 text-black">
                  <span className="font-black">Jnana</span> identified 3
                  updates, linked each to source documents, and flagged one
                  outdated SOP still in use by support.
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="border-[2px] border-black p-3 text-center">
                    <p className="text-[10px] font-black uppercase text-black/40">
                      Sources
                    </p>
                    <p className="mt-1 text-2xl font-black">12</p>
                  </div>
                  <div className="border-[2px] border-black bg-[#ffe500] p-3 text-center">
                    <p className="text-[10px] font-black uppercase text-black/50">
                      Flagged
                    </p>
                    <p className="mt-1 text-2xl font-black">1</p>
                  </div>
                  <div className="border-[2px] border-black bg-black p-3 text-center">
                    <p className="text-[10px] font-black uppercase text-white/40">
                      Live
                    </p>
                    <p className="mt-1 text-2xl font-black text-[#ffe500]">●</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section id="platform" className="border-b-[3px] border-black bg-[#ffe500]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="border-[3px] border-black bg-white p-6 shadow-[5px_5px_0_#000]">
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
                01 — Retrieval
              </p>
              <h2 className="mt-4 text-2xl font-black uppercase">
                Unified search
              </h2>
              <p className="mt-3 text-sm leading-6 text-black/60">
                Documents, SOPs, wikis, and tribal knowledge in one query layer.
              </p>
            </div>

            <div className="border-[3px] border-black bg-[#0047ff] p-6 shadow-[5px_5px_0_#000]">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
                02 — Governance
              </p>
              <h2 className="mt-4 text-2xl font-black uppercase text-white">
                Source trust
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Permissions, freshness, and auditability built into every answer.
              </p>
            </div>

            <div className="border-[3px] border-black bg-black p-6 shadow-[5px_5px_0_#000]">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
                03 — Intelligence
              </p>
              <h2 className="mt-4 text-2xl font-black uppercase text-[#ffe500]">
                AI answers
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Fast synthesis grounded in the material your company already
                trusts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core modules */}
      <section id="modules" className="border-b-[3px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-5xl font-black uppercase leading-tight sm:text-6xl">
              Core<br />modules.
            </h2>
            <p className="max-w-xs text-sm font-medium leading-6 text-black/50 sm:text-right">
              The foundational building blocks of enterprise knowledge
              infrastructure.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border-[3px] border-black p-8 shadow-[6px_6px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#000]">
              <span className="inline-block border-[2px] border-black bg-[#ffe500] px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                Core module
              </span>
              <h3 className="mt-5 text-3xl font-black uppercase">
                Decision memory
              </h3>
              <p className="mt-4 text-sm leading-7 text-black/55">
                Preserve why a decision was made, who approved it, and what
                changed after rollout. Never lose context again.
              </p>
            </div>

            <div className="border-[3px] border-black bg-black p-8 shadow-[6px_6px_0_#ffe500] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#ffe500]">
              <span className="inline-block border-[2px] border-[#ffe500] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#ffe500]">
                Core module
              </span>
              <h3 className="mt-5 text-3xl font-black uppercase text-white">
                Knowledge graph
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Connect teams, topics, files, and workflows into a navigable
                system of record. Everything is linked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.35em] text-[#ffe500]">
            Enterprise knowledge, retrieval, and decision memory.
          </p>
          <h2 className="text-5xl font-black uppercase text-white sm:text-6xl lg:text-7xl">
            Ready to<br />
            <span className="text-[#ffe500]">know more?</span>
          </h2>
          <a
            href="#"
            className="mt-12 inline-block border-[3px] border-[#ffe500] bg-[#ffe500] px-12 py-4 text-sm font-black uppercase text-black shadow-[5px_5px_0_rgba(255,229,0,0.35)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_rgba(255,229,0,0.35)]"
          >
            Request access →
          </a>
        </div>
      </section>
    </main>
  );
}
