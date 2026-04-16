import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { name: "GitHub",   url: "https://github.com/nandiiniigulhane",        Icon: FaGithub,   color: "#E2EEF9", isExternal: true  },
  { name: "LinkedIn", url: "https://linkedin.com/in/nandinigulhane",     Icon: FaLinkedin, color: "#0A66C2", isExternal: true  },
  { name: "LeetCode", url: "https://leetcode.com/u/nandinigulhane",      Icon: SiLeetcode, color: "#FFA116", isExternal: true  },
  { name: "Email",    url: "mailto:nandinigulhane8@gmail.com",            Icon: FaEnvelope, color: "#0EA5E9", isExternal: false },
];

function SocialItem({ name, url, Icon, color, isExternal }) {
  const [bouncing, setBouncing] = useState(false);

  return (
    <a
      href={url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 14px",
        borderRadius: "10px",
        border: "1px solid var(--color-border)",
        background: "transparent",
        textDecoration: "none",
        transition: "border-color 0.2s ease, background 0.2s ease",
        color: "var(--color-text-muted)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}44`;
        e.currentTarget.style.background = `${color}0D`;
        e.currentTarget.style.color = "var(--color-text)";
        setBouncing(true);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--color-text-muted)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          className={bouncing ? "icon-bounce" : ""}
          onAnimationEnd={() => setBouncing(false)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Icon size={16} color={color} />
        </div>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", fontWeight: 500, color: "inherit" }}>
          {name}
        </span>
      </div>
      <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.4 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}

export default function Socials() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {socialLinks.map((link) => (
        <SocialItem key={link.name} {...link} />
      ))}
    </div>
  );
}
