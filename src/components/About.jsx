export default function About() {
  return (
    <section
      style={{ padding: "64px 24px 80px" }}
      className="opacity-0 animate-fade-up"
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            01 — About me
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-text)",
            }}
          >
            Get to know me a little better
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              <p>
                Hello! I'm{" "}
                <span style={{ color: "var(--color-accent)", fontWeight: 500 }}>
                  Nandini
                </span>
                , a software engineer who enjoys turning ideas into practical
                solutions. I'm drawn to the intersection of logic and creativity
                — where problem-solving meets innovation.
              </p>
              <p>
                I began my engineering journey with curiosity and passion, and
                over time discovered that engineering isn't just about
                theoretical knowledge — it's about understanding how systems
                work in the real world. This sparked my interest in technology,
                the internet, and building software from the ground up.
              </p>
              <p>
                I approach every project with a sense of ownership. Each
                challenge — whether a tricky bug or a new feature — is an
                opportunity to learn and grow. I strive to improve my skills
                continuously and stay curious.
              </p>
            </div>

            <blockquote
              style={{
                marginTop: "32px",
                padding: "20px 24px",
                borderLeft: "3px solid var(--color-accent)",
                background: "var(--color-accent-tint2)",
                borderRadius: "0 10px 10px 0",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "var(--color-text)",
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              "I am always eager to collaborate with like-minded individuals and
              contribute to projects that create real impact."
            </blockquote>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div className="card card-accent" style={{ padding: "24px" }}>
              <div
                className="section-label"
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5"
                  />
                </svg>
                Education
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--color-text)",
                  marginBottom: "8px",
                }}
              >
                Vishwakarma Institute of Technology
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "12px",
                }}
              >
                B.Tech — Information Technology
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "var(--color-accent-tint)",
                  border: "1px solid var(--color-accent-tint)",
                  borderRadius: "100px",
                  padding: "5px 12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--color-accent-bright)",
                    fontWeight: 500,
                  }}
                >
                  CGPA 9.01 / 10
                </span>
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--color-accent-tint)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "var(--color-accent)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: "var(--color-text)",
                  }}
                >
                  Pune, Maharashtra
                </div>
                <div
                  className="section-label"
                  style={{
                    color: "var(--color-text-dim)",
                    marginTop: "2px",
                    fontSize: "0.65rem",
                  }}
                >
                  India
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(74,222,128,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    boxShadow: "0 0 8px rgba(74,222,128,0.9)",
                    display: "inline-block",
                    animation: "glow-pulse 2s ease-in-out infinite",
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: "var(--color-text)",
                  }}
                >
                  Open to Opportunities
                </div>
                <div
                  className="section-label"
                  style={{
                    color: "var(--color-text-dim)",
                    marginTop: "2px",
                    fontSize: "0.65rem",
                  }}
                >
                  Full-time & Internships
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
