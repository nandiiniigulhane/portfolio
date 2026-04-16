import Socials from "./Socials";

export default function Contact() {
  return (
    <section
      style={{ padding: "64px 24px 80px" }}
      className="opacity-0 animate-fade-up"
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            04 — Contact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-text)",
              marginBottom: "12px",
            }}
          >
            Let's get in touch
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              fontWeight: 300,
              maxWidth: "460px",
            }}
          >
            Have a project in mind or want to collaborate? Send me a message —
            I'd love to hear from you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Form */}
          <div className="card" style={{ padding: "32px" }}>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="section-label"
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "0.65rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    className="input-field"
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="section-label"
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "0.65rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    className="input-field"
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="section-label"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "0.65rem",
                  }}
                >
                  Subject
                </label>
                <input
                  className="input-field"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="section-label"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "0.65rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  className="input-field"
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or idea..."
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
              >
                Send Message
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div className="card" style={{ padding: "24px" }}>
              <p
                className="section-label"
                style={{ marginBottom: "16px", fontSize: "0.65rem" }}
              >
                Find me online
              </p>
              <Socials />
            </div>

            <div className="card" style={{ padding: "20px 24px" }}>
              <p
                className="section-label"
                style={{
                  fontSize: "0.62rem",
                  color: "var(--color-text-dim)",
                  marginBottom: "6px",
                }}
              >
                Or email directly
              </p>
              <a
                href="mailto:nandinigulhane8@gmail.com"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent-bright)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
              >
                nandinigulhane8@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
