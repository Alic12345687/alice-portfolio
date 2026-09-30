"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useMotionPreferences } from "../context/MotionContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ introReady = true }: { introReady?: boolean }) {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { shouldAnimate } = useMotionPreferences();
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const motionAllowed = shouldAnimate && !prefersReducedMotion;
  const links = [
    { id: "work", label: language === "lo" ? "ຜົນງານ" : "Work" },
    { id: "about", label: language === "lo" ? "ກ່ຽວກັບ" : "About" },
    { id: "experience", label: language === "lo" ? "ການສຶກສາ" : "Experience" },
    { id: "contact", label: language === "lo" ? "ຕິດຕໍ່" : "Contact" },
  ];

  return (
    <motion.nav
      className="site-nav"
      initial={motionAllowed ? { opacity: 0, y: -24 } : false}
      animate={{ opacity: introReady ? 1 : 0, y: introReady ? 0 : -24 }}
      transition={{ duration: motionAllowed ? 0.42 : 0, ease: "easeOut" }}
    >
      <div className="nav-shell">
        <a href="#portfolio" className="brand-mark" aria-label="Back to top">
          alic<span>®</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen
                ? language === "lo"
                  ? "ປິດເມນູ"
                  : "Close menu"
                : language === "lo"
                  ? "ເປີດເມນູ"
                  : "Open menu"
            }
            className="icon-button menu-button"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mobile-menu"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
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
      aria-label={language === "lo" ? "ປ່ຽນເປັນພາສາອັງກິດ" : "Switch to Lao"}
      className="language-toggle"
    >
      <span className={language === "en" ? "active" : ""}>EN</span>
      <span>/</span>
      <span className={language === "lo" ? "active" : ""}>ລາວ</span>
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
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="icon-button theme-button"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
