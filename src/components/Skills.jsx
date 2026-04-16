import { useRef } from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaPython,
  FaLinux,
  FaGit,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiKubernetes,
} from "react-icons/si";

const skills = [
  { name: "Java", Icon: FaJava, color: "#E76F00", category: "Language" },
  { name: "Python", Icon: FaPython, color: "#3B82F6", category: "Language" },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E",
    category: "Language",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    category: "Language",
  },
  { name: "HTML5", Icon: FaHtml5, color: "#E34F26", category: "Markup" },
  { name: "React", Icon: FaReact, color: "#61DAFB", category: "Framework" },
  {
    name: "Tailwind",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    category: "Framework",
  },
  { name: "Git", Icon: FaGit, color: "#F05032", category: "Tool" },
  { name: "GitHub", Icon: FaGithub, color: "#E2EEF9", category: "Tool" },
  { name: "Linux", Icon: FaLinux, color: "#FCC624", category: "Tool" },
  { name: "Docker", Icon: FaDocker, color: "#2496ED", category: "DevOps" },
  {
    name: "Kubernetes",
    Icon: SiKubernetes,
    color: "#326CE5",
    category: "DevOps",
  },
  { name: "AWS", Icon: FaAws, color: "#FF9900", category: "Cloud" },
];

const categoryBg = {
  Language: "var(--color-accent-tint)",
  Markup: "rgba(251,146,60,0.1)",
  Framework: "rgba(167,139,250,0.12)",
  Tool: "rgba(74,222,128,0.1)",
  DevOps: "rgba(59,130,246,0.12)",
  Cloud: "rgba(255,153,0,0.1)",
};

function SkillCard({ name, Icon, color, category }) {
  const cardRef = useRef(null);

  const onMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(500px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) translateZ(12px)`;
    card.style.boxShadow = `0 16px 40px ${color}22`;
    card.style.borderColor = `${color}44`;
  };

  const onLeave = (e) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(500px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    card.style.boxShadow = "none";
    card.style.borderColor = "var(--color-border)";
  };

  return (
    <div
      ref={cardRef}
      className="card card-accent"
      style={{
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "14px",
        cursor: "default",
        transition:
          "transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          background: categoryBg[category],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.15s ease",
          transform: "translateZ(8px)",
        }}
      >
        <Icon size={22} color={color} />
      </div>
      <div style={{ transform: "translateZ(6px)" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.92rem",
            color: "var(--color-text)",
            marginBottom: "3px",
          }}
        >
          {name}
        </div>
        <div
          className="section-label"
          style={{ fontSize: "0.6rem", color: "var(--color-text-dim)" }}
        >
          {category}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      style={{ padding: "64px 24px 80px" }}
      className="opacity-0 animate-fade-up"
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            02 — Skills &amp; Technologies
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
            Tools I work with
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(165px, 1fr))",
            gap: "14px",
          }}
        >
          {skills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
