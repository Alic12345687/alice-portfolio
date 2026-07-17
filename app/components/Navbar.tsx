"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const links = [
    { id: "about", label: language === "lo" ? "ກ່ຽວກັບ" : "About" },
    { id: "experience", label: language === "lo" ? "ປະສົບການ" : "Experience" },
    { id: "work", label: language === "lo" ? "ຜົນງານ" : "Work" },
    { id: "contact", label: language === "lo" ? "ຕິດຕໍ່" : "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-black/6 bg-[#f5f1ea]/78 backdrop-blur-md dark:border-white/10 dark:bg-[#0f1216]/78">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Sikunya<span className="opacity-40">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm opacity-70 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}

function LanguageToggle({
  language,
  toggleLanguage,
}: {
  language: "en" | "lo";
  toggleLanguage: () => void;
}) {
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="relative flex h-8 items-center rounded-full border border-black/10 bg-black/5 px-1 text-[11px] font-semibold uppercase tracking-[0.2em] dark:border-white/10 dark:bg-white/10"
    >
      <span
        className={`rounded-full px-2.5 py-1 transition-colors ${
          language === "en"
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "opacity-55"
        }`}
      >
        EN
      </span>
      <span
        className={`rounded-full px-2.5 py-1 transition-colors ${
          language === "lo"
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "opacity-55"
        }`}
      >
        ລາວ
      </span>
    </button>
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
      type="button"
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
