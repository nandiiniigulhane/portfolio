import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";

function CountUp({ target, suffix = "", decimals = 0, duration = 1500 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const elRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    if (elRef.current) observer.observe(elRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const num = parseFloat(target);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(eased * num);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return (
    <span ref={elRef}>
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
}

const stats = [
  { target: "3", suffix: "+", decimals: 0, label: "Years coding" },
  { target: "13", suffix: "+", decimals: 0, label: "Technologies" },
];

export default function Home() {
  const profileRef = useRef(null);

  return (
    <section
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "48px 24px 80px",
      }}
    >
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      <div
        className="orb-drift-1"
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, var(--color-accent-tint2) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="orb-drift-2"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "2%",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1160px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "64px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            className="opacity-0 animate-fade-up stagger-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--color-accent-tint2)",
              border: "1px solid var(--color-accent-tint)",
              borderRadius: "100px",
              padding: "6px 14px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 8px rgba(74,222,128,0.9)",
                animation: "glow-pulse 2s ease-in-out infinite",
                display: "inline-block",
              }}
            />
            <span
              className="section-label"
              style={{ color: "var(--color-text-muted)" }}
            >
              Available for opportunities
            </span>
          </div>

          <h1
            className="opacity-0 animate-fade-up stagger-2"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
              marginBottom: "14px",
            }}
          >
            Hi, I'm <span className="gradient-text">Nandini Gulhane</span>
          </h1>

          <div
            className="opacity-0 animate-fade-up stagger-3"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
              fontFamily: "var(--font-mono)",
              fontSize: "1.05rem",
            }}
          >
            <span style={{ color: "var(--color-text-dim)" }}>&gt;</span>
            <span style={{ color: "var(--color-accent)" }}>
              <ReactTyped
                strings={[
                  'git commit -m "another day, another feature"',
                  "while (alive) { code(); learn(); eat(); repeat(); }",
                  "building the web, one commit at a time",
                  "const developer = new Girl({ passion: Infinity })",
                ]}
                typeSpeed={55}
                loop
                backSpeed={28}
                backDelay={2200}
                cursorChar="_"
                showCursor
              />
            </span>
          </div>

          <p
            className="opacity-0 animate-fade-up stagger-4"
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.75,
              maxWidth: "460px",
              marginBottom: "36px",
              fontWeight: 300,
            }}
          >
            Turning ideas into code and problems into scalable solutions.
            Passionate about building software that creates real-world impact.
          </p>

          <div
            className="opacity-0 animate-fade-up stagger-5"
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            <button className="btn-primary">
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Nandini's Assistant
            </button>

            <a
              className="btn-secondary"
              href="src/assets/Nandini_Gulhane_Resume.pdf"
              download
            >
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Resume
            </a>
          </div>

          <div
            className="opacity-0 animate-fade-up stagger-6"
            style={{
              display: "flex",
              gap: "36px",
              marginTop: "52px",
              paddingTop: "32px",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {stats.map(({ target, suffix, decimals, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.8rem",
                    color: "var(--color-accent)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  <CountUp
                    target={target}
                    suffix={suffix}
                    decimals={decimals}
                  />
                </div>
                <div
                  className="section-label"
                  style={{ color: "var(--color-text-dim)", marginTop: "4px" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="opacity-0 animate-fade-up stagger-3"
          style={{ flexShrink: 0, position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-28px",
              borderRadius: "50%",
              border: "1px dashed var(--color-border-light)",
              animation: "spin-slow 20s linear infinite",
              opacity: 0.4,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--color-accent)",
                boxShadow: "0 0 10px var(--color-accent)",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: "-52px",
              borderRadius: "50%",
              border: "1px solid var(--color-accent-tint2)",
            }}
          />

          <div style={{ animation: "float 5s ease-in-out infinite" }}>
            <div
              ref={profileRef}
              style={{
                width: "270px",
                height: "270px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--gradient-text-from) 0%, var(--gradient-text-to) 100%)",
                padding: "3px",
                boxShadow:
                  "0 0 60px var(--color-accent-tint), 0 0 120px var(--color-accent-tint2)",
                transition: "box-shadow 0.4s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 80px var(--color-accent-tint), 0 0 160px var(--color-accent-tint), 0 0 30px var(--color-accent-tint2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 60px var(--color-accent-tint), 0 0 120px var(--color-accent-tint2)";
              }}
            >
              <img
                src="src/assets/profile.png"
                alt="Nandini Gulhane"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  background: "var(--color-surface-2)",
                  transition: "filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter =
                    "brightness(1.08) saturate(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "";
                }}
              />
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "18px",
              right: "-24px",
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border-light)",
              borderRadius: "100px",
              padding: "7px 14px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px rgba(74,222,128,0.8)",
                display: "inline-block",
              }}
            />
            <span
              className="section-label"
              style={{ color: "var(--color-text-muted)", fontSize: "0.65rem" }}
            >
              Active now
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "-36px",
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: "100px",
              padding: "7px 14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg
              width="11"
              height="11"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ color: "var(--color-accent)", flexShrink: 0 }}
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="section-label"
              style={{ color: "var(--color-text-muted)", fontSize: "0.65rem" }}
            >
              Pune, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
