const TICKER_ITEMS = [
  "Retrieval",
  "Decision Memory",
  "Knowledge Graph",
  "Source Trust",
  "AI Synthesis",
  "Governance",
  "Audit Trail",
  "Live Context",
  "Policy Tracking",
  "Zero Hallucinations",
];

const PAIN_POINTS = [
  "Slack messages get buried within 3 days — context is gone forever",
  "Decisions are made but the reasoning is never recorded anywhere",
  "New hires spend weeks hunting for answers that already exist",
  "The same question gets answered a hundred times across teams",
  "Outdated SOPs circulate for months before anyone notices",
  "Institutional knowledge walks out the door when employees leave",
];

const STEPS = [
  {
    num: "01",
    title: "Connect your sources",
    desc: "Link Notion, Confluence, Google Drive, Slack, email threads, and internal wikis. Jnana indexes everything without disrupting workflows.",
    bg: "bg-[#ffe500]",
    border: "border-[#000]",
    shadow: "shadow-[6px_6px_0_#000]",
    text: "text-black",
    muted: "text-black/50",
    tag: "text-black/40",
  },
  {
    num: "02",
    title: "Ask in plain English",
    desc: "Type a question the way you'd ask a colleague. Jnana retrieves, synthesizes, and cites every source behind the answer.",
    bg: "bg-[#0047ff]",
    border: "border-white",
    shadow: "shadow-[6px_6px_0_rgba(255,255,255,0.3)]",
    text: "text-white",
    muted: "text-white/55",
    tag: "text-white/40",
  },
  {
    num: "03",
    title: "Trust the answer",
    desc: "Every response is grounded in verified internal sources. Outdated content is flagged. Permissions are enforced at every layer.",
    bg: "bg-white",
    border: "border-[#000]",
    shadow: "shadow-[6px_6px_0_#000]",
    text: "text-black",
    muted: "text-black/50",
    tag: "text-black/40",
  },
];

const STATS = [
  { stat: "10×", label: "Faster answer retrieval vs manual search" },
  { stat: "100%", label: "Source-grounded — no hallucinations" },
  { stat: "0", label: "Knowledge silos tolerated by design" },
  { stat: "∞", label: "Organizational memory retained" },
];

const MODULES = [
  {
    tag: "Core module",
    title: "Decision memory",
    desc: "Every decision recorded with full context — who made it, why, what changed after rollout. Stop reinventing the wheel.",
    bg: "bg-white",
    tagBg: "bg-[#ffe500] border-black text-black",
    titleColor: "text-black",
    textColor: "text-black/55",
    shadow: "shadow-[6px_6px_0_#000]",
    border: "border-black",
  },
  {
    tag: "Core module",
    title: "Knowledge graph",
    desc: "Connect teams, topics, files, and workflows into a living system of record. Everything is linked, nothing is isolated.",
    bg: "bg-black",
    tagBg: "border-[#ffe500] text-[#ffe500]",
    titleColor: "text-white",
    textColor: "text-white/50",
    shadow: "shadow-[6px_6px_0_#ffe500]",
    border: "border-black",
  },
  {
    tag: "Core module",
    title: "Policy tracker",
    desc: "Monitor changes to SOPs, compliance rules, and operational guidelines. Automatically surface what's outdated or in conflict.",
    bg: "bg-[#0047ff]",
    tagBg: "border-white text-white",
    titleColor: "text-white",
    textColor: "text-white/55",
    shadow: "shadow-[6px_6px_0_#000]",
    border: "border-black",
  },
  {
    tag: "Core module",
    title: "Expert finder",
    desc: "Know who knows what. Map internal expertise across projects, past decisions, and documents so the right person is always one query away.",
    bg: "bg-[#ffe500]",
    tagBg: "bg-black border-black text-[#ffe500]",
    titleColor: "text-black",
    textColor: "text-black/55",
    shadow: "shadow-[6px_6px_0_#000]",
    border: "border-black",
  },
];

const USE_CASES = [
  {
    role: "Operations",
    headline: "Runbooks that answer back.",
    body: "Teams stop re-reading 80-page PDFs. Jnana surfaces the exact paragraph, flags the outdated version, and logs the query for audit.",
    accent: "bg-[#ffe500]",
  },
  {
    role: "Engineering",
    headline: "Architecture decisions, not forgotten.",
    body: "Why did we pick Postgres over Mongo? Jnana knows. Every RFC, every Slack thread, every post-mortem is a query away.",
    accent: "bg-[#0047ff]",
  },
  {
    role: "Legal & Compliance",
    headline: "Policy drift, caught instantly.",
    body: "When regulations change, Jnana flags every internal document in conflict — before the audit finds it first.",
    accent: "bg-black",
  },
  {
    role: "People & HR",
    headline: "Onboarding at 10× speed.",
    body: "New hires get instant answers to the questions that normally take three Slack messages and two days to resolve.",
    accent: "bg-[#ffe500]",
  },
];

const FAQS = [
  {
    q: "How does Jnana keep answers accurate?",
    a: "Every response is grounded in your verified internal sources. Jnana never fabricates — if the answer isn't in your knowledge base, it says so and suggests where to look.",
  },
  {
    q: "What sources can Jnana connect to?",
    a: "Notion, Confluence, Google Workspace, Slack, Microsoft Teams, SharePoint, Jira, GitHub wikis, email, and any custom data source via our API.",
  },
  {
    q: "How does Jnana handle permissions?",
    a: "Access control is enforced at the query level. Jnana only surfaces documents the querying user is authorized to see — inherited from your existing SSO and role system.",
  },
  {
    q: "Is our data used to train models?",
    a: "Never. Your knowledge base is private. Jnana runs inference on your data; it does not feed it back into any model training pipeline.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most teams are live within 48 hours. Connecting sources takes minutes. Indexing is automatic. No professional services engagement required.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] font-sans text-black">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 border-b-[3px] border-black bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="border-[3px] border-black bg-[#ffe500] px-4 py-2 shadow-[4px_4px_0_#000]">
            <span className="text-base font-black uppercase tracking-tight">JNANA</span>
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            {["Platform", "Modules", "Use Cases", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-black uppercase hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="border-[3px] border-black bg-[#ffe500] px-5 py-2.5 text-sm font-black uppercase shadow-[4px_4px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
          >
            Get Access →
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="border-b-[3px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_440px]">
            <div>
              <div className="mb-8 inline-block border-[3px] border-black bg-[#ffe500] px-4 py-2 shadow-[4px_4px_0_#000]">
                <span className="text-xs font-black uppercase tracking-[0.22em]">
                  Search less. Know more.
                </span>
              </div>

              <h1 className="text-[4.5rem] font-black uppercase leading-[0.88] tracking-tight sm:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
                The OS
                <br />
                for
                <br />
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

              {/* mini stat row */}
              <div className="mt-14 flex flex-wrap gap-6 border-t-[3px] border-black pt-8">
                {[
                  ["500+", "enterprise teams"],
                  ["40M+", "documents indexed"],
                  ["<200ms", "avg. query time"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="text-3xl font-black">{n}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-black/40">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Workspace demo */}
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

                {/* source list */}
                <div className="mt-5 border-t-[2px] border-black pt-4 space-y-2">
                  {[
                    "HR-Policy-v4.2.pdf",
                    "Feb-Audit-Report.docx",
                    "Support-SOP-2024.notion",
                  ].map((file) => (
                    <div
                      key={file}
                      className="flex items-center gap-3 border-[1px] border-black/20 p-2"
                    >
                      <span className="border-[2px] border-black bg-[#ffe500] px-1.5 py-0.5 text-[9px] font-black uppercase">
                        src
                      </span>
                      <span className="font-mono text-xs text-black/60">
                        {file}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="overflow-hidden border-b-[3px] border-black bg-[#ffe500] py-3">
        <div className="animate-marquee flex gap-0 whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="px-8 text-sm font-black uppercase tracking-widest"
            >
              {item}
              <span className="ml-8 text-black/30">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── The Problem ── */}
      <section className="border-b-[3px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-8 inline-block border-[3px] border-black bg-[#ff2d2d] px-4 py-2 shadow-[4px_4px_0_#000]">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-white">
                  The problem
                </span>
              </div>
              <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
                Knowledge
                <br />
                is{" "}
                <span className="inline bg-[#ff2d2d] px-2 text-white">
                  everywhere.
                </span>
                <br />
                Findable
                <br />
                nowhere.
              </h2>
              <p className="mt-8 max-w-md text-base font-medium leading-7 text-black/50">
                Organizations generate thousands of documents, decisions, and
                discussions every week. Almost none of it is retrievable when it
                matters.
              </p>
            </div>

            <div className="space-y-4">
              {PAIN_POINTS.map((pain, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border-[3px] border-black p-5 shadow-[4px_4px_0_#000]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-[2px] border-[#ff2d2d] bg-[#ff2d2d] text-xs font-black text-white">
                    ✕
                  </span>
                  <p className="text-sm font-semibold leading-6 text-black/70">
                    {pain}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="platform" className="border-b-[3px] border-black bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-14">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#ffe500]">
              How it works
            </p>
            <h2 className="text-5xl font-black uppercase text-white sm:text-6xl lg:text-7xl">
              Three steps
              <br />
              to clarity.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className={`border-[3px] ${step.border} ${step.bg} ${step.shadow} p-8`}
              >
                <p
                  className={`text-7xl font-black leading-none ${step.text} opacity-15`}
                >
                  {step.num}
                </p>
                <h3
                  className={`mt-6 text-2xl font-black uppercase ${step.text}`}
                >
                  {step.title}
                </h3>
                <p className={`mt-4 text-sm leading-6 ${step.muted}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Strip ── */}
      <section className="border-b-[3px] border-black bg-[#ffe500]">
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
                Permissions, freshness, and auditability built into every
                answer.
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

      {/* ── Stats ── */}
      <section className="border-b-[3px] border-black bg-[#0047ff]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((item, i) => (
              <div
                key={i}
                className="border-b-[3px] border-white p-10 text-white last:border-b-0 sm:border-b-0 sm:border-r-[3px] sm:last:border-r-0"
              >
                <p className="text-7xl font-black leading-none xl:text-8xl">
                  {item.stat}
                </p>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-white/55">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Modules ── */}
      <section id="modules" className="border-b-[3px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-5xl font-black uppercase leading-tight sm:text-6xl">
              Core
              <br />
              modules.
            </h2>
            <p className="max-w-xs text-sm font-medium leading-6 text-black/50 sm:text-right">
              Every module works independently or as an integrated system. You
              choose the depth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {MODULES.map((mod) => (
              <div
                key={mod.title}
                className={`border-[3px] ${mod.border} ${mod.bg} ${mod.shadow} p-8 transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#000]`}
              >
                <span
                  className={`inline-block border-[2px] px-3 py-1 text-[10px] font-black uppercase tracking-widest ${mod.tagBg}`}
                >
                  {mod.tag}
                </span>
                <h3
                  className={`mt-5 text-3xl font-black uppercase ${mod.titleColor}`}
                >
                  {mod.title}
                </h3>
                <p className={`mt-4 text-sm leading-7 ${mod.textColor}`}>
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section id="use-cases" className="border-b-[3px] border-black bg-[#ffe500]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-14">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-black/50">
              Who it&apos;s for
            </p>
            <h2 className="text-5xl font-black uppercase leading-tight sm:text-6xl lg:text-7xl">
              Built for
              <br />
              every team.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {USE_CASES.map((uc, i) => (
              <div
                key={uc.role}
                className={`border-[3px] border-black p-8 shadow-[5px_5px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#000] ${
                  i % 2 === 0 ? "bg-white" : "bg-black"
                }`}
              >
                <span
                  className={`inline-block border-[2px] border-black px-3 py-1 text-[10px] font-black uppercase tracking-widest ${
                    i % 2 === 0
                      ? "bg-[#ffe500] text-black"
                      : "border-[#ffe500] text-[#ffe500]"
                  }`}
                >
                  {uc.role}
                </span>
                <h3
                  className={`mt-5 text-2xl font-black uppercase leading-tight ${
                    i % 2 === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {uc.headline}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    i % 2 === 0 ? "text-black/55" : "text-white/50"
                  }`}
                >
                  {uc.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto quote ── */}
      <section className="border-b-[3px] border-black bg-black py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="mb-8 text-[10px] font-black uppercase tracking-[0.35em] text-[#ffe500]">
            The Jnana principle
          </p>
          <blockquote className="text-4xl font-black uppercase leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            &ldquo;The best companies
            <br />
            don&apos;t just make decisions.
            <br />
            <span className="inline bg-[#ffe500] px-3 text-black">
              They remember why.
            </span>
            &rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── Integration logos / trust strip ── */}
      <section className="border-b-[3px] border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <p className="mb-10 text-center text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
            Connects to the tools your team already uses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "Notion",
              "Confluence",
              "Google Drive",
              "Slack",
              "Microsoft Teams",
              "Jira",
              "SharePoint",
              "GitHub",
            ].map((tool) => (
              <div
                key={tool}
                className="border-[3px] border-black px-5 py-3 text-sm font-black uppercase shadow-[3px_3px_0_#000]"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="border-b-[3px] border-black bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-5xl font-black uppercase leading-tight sm:text-6xl">
              Frequently
              <br />
              asked.
            </h2>
            <p className="max-w-xs text-sm font-medium leading-6 text-black/50 sm:text-right">
              Still have questions? Talk to the team — we respond in under an
              hour.
            </p>
          </div>

          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="grid border-[3px] border-black border-b-0 last:border-b-[3px] sm:grid-cols-[1fr_1.4fr]"
              >
                <div className="border-b-[3px] border-black bg-[#ffe500] p-6 sm:border-b-0 sm:border-r-[3px]">
                  <p className="text-sm font-black uppercase leading-6">
                    {faq.q}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium leading-7 text-black/60">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="bg-black py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.35em] text-[#ffe500]">
                Enterprise knowledge platform
              </p>
              <h2 className="text-5xl font-black uppercase text-white sm:text-6xl lg:text-7xl">
                Ready to
                <br />
                <span className="text-[#ffe500]">know more?</span>
              </h2>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row lg:justify-end">
              <a
                href="#"
                className="border-[3px] border-[#ffe500] bg-[#ffe500] px-10 py-5 text-center text-sm font-black uppercase text-black shadow-[5px_5px_0_rgba(255,229,0,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_rgba(255,229,0,0.3)]"
              >
                Request access →
              </a>
              <a
                href="#"
                className="border-[3px] border-white px-10 py-5 text-center text-sm font-black uppercase text-white shadow-[5px_5px_0_rgba(255,255,255,0.15)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_rgba(255,255,255,0.15)]"
              >
                Book a demo
              </a>
            </div>
          </div>

          {/* footer strip */}
          <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t-[3px] border-white/10 pt-8 sm:flex-row sm:items-center">
            <div className="border-[3px] border-[#ffe500] bg-[#ffe500] px-4 py-2">
              <span className="text-base font-black uppercase tracking-tight text-black">
                JNANA
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30">
              Enterprise knowledge, retrieval, and decision memory.
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-white/20">
              © {new Date().getFullYear()} Jnana
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
