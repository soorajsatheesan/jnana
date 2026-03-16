export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fffef5] font-sans text-black">
      {/* Nav */}
      <header className="border-b-[3px] border-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="border-[3px] border-black bg-[#ffe500] px-4 py-2 shadow-[4px_4px_0_#000]">
            <span className="text-base font-black uppercase tracking-tight">JNANA</span>
          </div>
          <span className="border-[2px] border-black px-4 py-2 text-xs font-black uppercase tracking-widest text-black/50">
            Private beta
          </span>
        </div>
      </header>

      {/* Main */}
      <section className="flex flex-1 items-center border-b-[3px] border-black">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">

            {/* Left */}
            <div>
              <div className="mb-8 inline-block border-[3px] border-black bg-black px-4 py-2 shadow-[4px_4px_0_#ffe500]">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-[#ffe500]">
                  Coming soon
                </span>
              </div>

              <h1 className="text-[5rem] font-black uppercase leading-[0.85] tracking-tight sm:text-[7rem] lg:text-[8.5rem] xl:text-[10rem]">
                Know
                <br />
                every
                <br />
                <span className="inline bg-[#ffe500] px-3 pb-1">thing.</span>
              </h1>

              <p className="mt-10 max-w-md text-lg font-medium leading-8 text-black/50">
                Jnana is the operating system for institutional knowledge —
                retrieval, decision memory, and AI-grounded answers for
                enterprise teams.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Unified search", "Decision memory", "Source trust", "AI answers"].map((tag) => (
                  <span
                    key={tag}
                    className="border-[2px] border-black px-3 py-1.5 text-xs font-black uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — waitlist */}
            <div className="border-[3px] border-black bg-white shadow-[8px_8px_0_#000]">
              <div className="border-b-[3px] border-black bg-[#ffe500] px-6 py-4">
                <p className="text-sm font-black uppercase tracking-[0.2em]">
                  Join the waitlist
                </p>
              </div>

              <div className="p-6">
                <p className="text-sm font-medium leading-6 text-black/55">
                  Be first in line when we open access. No spam — one email when
                  we launch.
                </p>

                <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-black/40">
                      Work email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full border-[3px] border-black bg-[#fffef5] px-4 py-3 text-sm font-semibold placeholder:text-black/25 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-black/40">
                      Company size
                    </label>
                    <select className="w-full border-[3px] border-black bg-[#fffef5] px-4 py-3 text-sm font-semibold text-black/60 focus:outline-none">
                      <option value="">Select range</option>
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>201–1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full border-[3px] border-black bg-black py-4 text-sm font-black uppercase tracking-widest text-[#ffe500] shadow-[4px_4px_0_#ffe500] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#ffe500]"
                  >
                    Notify me →
                  </button>
                </form>

                <div className="mt-6 border-t-[2px] border-black pt-5">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[["500+", "on waitlist"], ["Q3 2025", "target launch"], ["Beta", "invite only"]].map(([n, l]) => (
                      <div key={l} className="border-[2px] border-black p-3">
                        <p className="text-lg font-black leading-none">{n}</p>
                        <p className="mt-1.5 text-[9px] font-black uppercase tracking-widest text-black/40">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <footer className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-6 sm:flex-row sm:items-center lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-white/30">
            Enterprise knowledge, retrieval, and decision memory.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@jnana.ai" className="text-xs font-black uppercase tracking-widest text-[#ffe500] hover:underline">
              hello@jnana.ai
            </a>
            <a href="#" className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-white/60">
              Twitter / X
            </a>
            <a href="#" className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-white/60">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
