import { useRef, useState, useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function ScrambleNavLink({ to, label, end }) {
  const [display, setDisplay] = useState(label);
  const timerRef = useRef(null);

  const scramble = () => {
    let iter = 0;
    const steps = 10;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDisplay(
        label
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (iter / steps > idx / label.length) return label[idx];
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join(""),
      );
      iter++;
      if (iter > steps + label.length) {
        setDisplay(label);
        clearInterval(timerRef.current);
      }
    }, 38);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  return (
    <NavLink
      to={to}
      end={end}
      onMouseEnter={scramble}
      style={({ isActive }) => ({
        fontFamily: "var(--font-mono)",
        fontSize: "0.85rem",
        fontWeight: isActive ? 600 : 400,
        color: isActive ? "var(--color-accent)" : "var(--color-text-muted)",
        textDecoration: "none",
        padding: "6px 14px",
        borderRadius: "8px",
        background: isActive ? "var(--color-accent-tint)" : "transparent",
        transition: "color 0.2s ease, background 0.2s ease",
        letterSpacing: "0.08em",
        minWidth: "60px",
        display: "inline-block",
        textAlign: "center",
      })}
    >
      {display}
    </NavLink>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    setSpinning(true);
    toggle();
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
        background: scrolled
          ? "color-mix(in srgb, var(--color-bg) 92%, transparent)"
          : "color-mix(in srgb, var(--color-bg) 60%, transparent)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavLink
          to="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "var(--color-text)",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <span style={{ color: "var(--color-accent)" }}>&lt;</span>
          <span>NG</span>
          <span style={{ color: "var(--color-accent)" }}>/&gt;</span>
        </NavLink>

        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {navLinks.map(({ to, label }) => (
            <ScrambleNavLink key={to} to={to} label={label} end={to === "/"} />
          ))}

          <button
            onClick={handleToggle}
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className={spinning ? "icon-spin" : ""}
            onAnimationEnd={() => setSpinning(false)}
            style={{
              marginLeft: "8px",
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              border: "1px solid var(--color-border-light)",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text-muted)",
              transition:
                "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.background = "var(--color-accent-tint2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border-light)";
              e.currentTarget.style.color = "var(--color-text-muted)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {theme === "dark" ? (
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" strokeWidth={2} />
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                />
              </svg>
            ) : (
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
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default function NavBar() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main style={{ minHeight: "calc(100vh - 64px - 52px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
