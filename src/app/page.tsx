const S = {
  display: "var(--font-display, Oswald, sans-serif)",
  mono: "var(--font-mono, 'IBM Plex Mono', monospace)",
} as const;

export default function Home() {
  return (
    <main
      style={{
        background: "#fffcf0",
        color: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: S.display,
      }}
    >
      {/* Yellow cap */}
      <div style={{ height: "5px", background: "#ffe600" }} />

      {/* Nav */}
      <header style={{ borderBottom: "3px solid #0a0a0a" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1.4rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: S.display,
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
            }}
          >
            JNANA
          </span>
          <span
            style={{
              fontFamily: S.mono,
              fontWeight: 500,
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(10,10,10,0.45)",
              border: "2px solid rgba(10,10,10,0.2)",
              padding: "0.35rem 0.85rem",
            }}
          >
            Private Beta
          </span>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          flex: 1,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "4rem 2.5rem 3.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Coming soon badge */}
        <div style={{ marginBottom: "2.5rem" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: S.mono,
              fontWeight: 500,
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              background: "#0a0a0a",
              color: "#ffe600",
              padding: "0.5rem 1rem",
              boxShadow: "4px 4px 0 #ffe600",
            }}
          >
            Coming Soon
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: S.display,
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
            fontSize: "clamp(3.8rem, 7.5vw, 8rem)",
            marginBottom: "2.75rem",
          }}
        >
          <span style={{ display: "block" }}>Know</span>
          <span style={{ display: "block" }}>every</span>
          <span style={{ display: "block" }}>
            <span
              style={{
                background: "#ffe600",
                padding: "0.02em 0.1em 0.06em",
                display: "inline-block",
              }}
            >
              thing.
            </span>
          </span>
        </h1>

        {/* Divider */}
        <div
          style={{
            width: "56px",
            height: "3px",
            background: "#0a0a0a",
            marginBottom: "2rem",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: S.mono,
            fontWeight: 400,
            fontSize: "clamp(0.88rem, 1.2vw, 1.05rem)",
            letterSpacing: "0.01em",
            color: "rgba(10,10,10,0.6)",
            maxWidth: "480px",
            lineHeight: 1.8,
          }}
        >
          The operating system for institutional knowledge —
          retrieval, decision memory, and AI-grounded answers.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "3px solid #0a0a0a", background: "#0a0a0a" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1.5rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: S.mono,
              fontWeight: 400,
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Enterprise knowledge, retrieval, and decision memory.
          </span>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a
              href="mailto:soorajsatheesan4321@gmail.com"
              style={{
                fontFamily: S.mono,
                fontWeight: 500,
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                color: "#ffe600",
              }}
            >
              soorajsatheesan4321@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
