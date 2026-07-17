"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const links = ["About", "Experience", "Work", "Contact"];

  return (
    <nav className="sticky top-0 z-50 border-b border-black/6 bg-[#f5f1ea]/78 backdrop-blur-md dark:border-white/10 dark:bg-[#0f1216]/78">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Sikunya<span className="opacity-40">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm opacity-70 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-opacity hover:opacity-100"
            >
              {link}
            </a>
          ))}
        </div>

        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

function ThemeToggle({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`relative flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300 ${
        isDark ? "bg-white/20" : "bg-black/10"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs shadow-md ${
          isDark ? "ml-auto bg-white text-black" : "bg-black text-white"
        }`}
      >
        {isDark ? "Moon" : "Sun"}
      </motion.div>
    </button>
  );
}
