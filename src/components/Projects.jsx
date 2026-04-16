import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     number: "01",
//     title: "Nandini's AI Assistant",
//     description:
//       "A conversational AI assistant trained on my professional background, ready to answer questions about my work, skills, and experience.",
//     tags: ["React", "Python", "AI/ML", "FastAPI"],
//     accent: "#0EA5E9",
//     status: "Live",
//   },
//   {
//     number: "02",
//     title: "Portfolio Website",
//     description:
//       "This portfolio — designed and built from scratch with React, Tailwind CSS, and a focus on clean UX and performance.",
//     tags: ["React", "Tailwind CSS", "Vite"],
//     accent: "#a78bfa",
//     status: "Live",
//     link: "#",
//   },
//   {
//     number: "03",
//     title: "Cloud-Native Deployment",
//     description:
//       "Containerised microservices application deployed on Kubernetes with automated CI/CD pipelines and AWS infrastructure.",
//     tags: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
//     accent: "#FB923C",
//     status: "In Progress",
//   },
// ];

export default function Projects() {
  return (
    <section
      style={{ padding: "64px 24px 80px" }}
      className="opacity-0 animate-fade-up"
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            03 — Projects
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
            Things I've built
          </h2>
        </div>

        {/* <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {projects.map((project, i) => (
            <div
              key={project.number}
              className={`card-reveal card-stagger-${i + 1}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div> */}

        <div
          className="card-reveal card-stagger-4"
          style={{
            marginTop: "20px",
            padding: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            borderStyle: "dashed",
            background: "var(--color-surface)",
            border: "1px dashed var(--color-border)",
            borderRadius: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--color-text-dim)",
            }}
          >
            projects coming soon...
          </span>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  number,
  title,
  description,
  tags,
  accent,
  status,
  github,
  link,
}) {
  return (
    <div
      className="card"
      style={{
        padding: "32px",
        display: "grid",
        gridTemplateColumns: "60px 1fr auto",
        gap: "24px",
        alignItems: "start",
        transition: "all 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}44`;
        e.currentTarget.style.boxShadow = `0 12px 40px ${accent}0D`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Number */}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "2rem",
          color: "var(--color-border-light)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {number}
      </div>

      {/* Content */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "10px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              padding: "3px 10px",
              borderRadius: "100px",
              background:
                status === "Live"
                  ? "rgba(74,222,128,0.1)"
                  : "rgba(251,146,60,0.1)",
              color: status === "Live" ? "#4ade80" : "#fb923c",
              border: `1px solid ${status === "Live" ? "rgba(74,222,128,0.2)" : "rgba(251,146,60,0.2)"}`,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {status}
          </span>
        </div>

        <p
          style={{
            fontSize: "0.92rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
            marginBottom: "16px",
            fontWeight: 300,
            maxWidth: "600px",
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "10px", paddingTop: "4px" }}>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-text-dim)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-dim)")
            }
          >
            <FaGithub size={18} />
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--color-text-dim)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-dim)")
            }
          >
            <FaExternalLinkAlt size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
