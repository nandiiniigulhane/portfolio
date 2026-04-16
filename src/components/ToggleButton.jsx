import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export const ToggleButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="p-2.5 rounded-full bg-cream dark:bg-dark-surface text-gold dark:text-gold-light hover:bg-cream-dark dark:hover:bg-dark-border border border-cream-dark dark:border-dark-border hover:border-gold/50 dark:hover:border-gold/40 shadow-[0_0_10px_rgba(212,168,83,0.1)] hover:shadow-[0_0_20px_rgba(212,168,83,0.3)] transition-all duration-300 flex items-center justify-center focus:outline-none"
    >
      {theme === "light" ? (
        <MdDarkMode size={22} className="animate-[spin_0.3s_ease-in-out_1]" />
      ) : (
        <MdOutlineLightMode
          size={22}
          className="animate-[spin_0.3s_ease-in-out_1]"
        />
      )}
    </button>
  );
};
