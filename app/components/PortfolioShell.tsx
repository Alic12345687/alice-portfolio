"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useMotionPreferences } from "../context/MotionContext";
import About from "./About";
import DraggableCat from "./DraggableCat";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import ExperienceClient from "../experience/ExperienceClient";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

interface PortfolioShellProps {
  experiences: ExperienceItem[];
}

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function PortfolioShell({ experiences }: PortfolioShellProps) {
  const { shouldAnimate } = useMotionPreferences();
  const prefersReducedMotion = useReducedMotion();
  const [introChecked, setIntroChecked] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const portfolioRef = useRef<HTMLElement>(null);
  const enterTimerRef = useRef<number | null>(null);

  const motionAllowed = shouldAnimate && !prefersReducedMotion;
  const showPortfolio = skipIntro || hasEntered;
  const showIntro = introChecked && !skipIntro && !hasEntered && !isEntering;

  useEffect(() => {
    const initialTimer = window.setTimeout(() => {
      setSkipIntro(Boolean(window.location.hash));
      setIntroChecked(true);
    }, 0);

    return () => {
      window.clearTimeout(initialTimer);
      if (enterTimerRef.current !== null) {
        window.clearTimeout(enterTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!showPortfolio) return;

    const hash = window.location.hash;
    const target = hash
      ? document.querySelector<HTMLElement>(hash)
      : portfolioRef.current;

    window.requestAnimationFrame(() => {
      target?.scrollIntoView({
        block: "start",
        behavior: motionAllowed ? "smooth" : "auto",
      });

      const heading = document.getElementById("portfolio-title");
      if (!hash && heading) {
        heading.focus({ preventScroll: true });
      } else if (hash && target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  }, [showPortfolio, motionAllowed]);

  function enterPortfolio() {
    if (isEntering || hasEntered) return;
    setIsEntering(true);
    if (!motionAllowed) {
      setHasEntered(true);
      return;
    }

    enterTimerRef.current = window.setTimeout(() => {
      setHasEntered(true);
    }, 450);
  }

  if (!introChecked) {
    return <div className="intro-loading" aria-hidden="true" />;
  }

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroScreen
            disabled={isEntering}
            motionAllowed={motionAllowed}
            onEnter={enterPortfolio}
          />
        )}
      </AnimatePresence>

      {showPortfolio && (
        <>
          <main id="portfolio" ref={portfolioRef} className="portfolio-main">
            <Navbar introReady />
            <Hero introReady />
            <RevealSection>
              <Projects />
            </RevealSection>
            <RevealSection>
              <About />
            </RevealSection>
            <RevealSection>
              <ExperienceClient experiences={experiences.slice(0, 2)} />
            </RevealSection>
            <RevealSection>
              <Footer />
            </RevealSection>
          </main>
          <DraggableCat />
        </>
      )}
    </>
  );
}

function IntroScreen({
  disabled,
  motionAllowed,
  onEnter,
}: {
  disabled: boolean;
  motionAllowed: boolean;
  onEnter: () => void;
}) {
  const { language } = useLanguage();

  return (
    <motion.section
      className="intro-screen"
      aria-labelledby="intro-title"
      initial={motionAllowed ? { opacity: 1, y: 0 } : false}
      exit={motionAllowed ? { opacity: 0, y: -32 } : { opacity: 0 }}
      transition={{ duration: motionAllowed ? 0.45 : 0.01, ease: "easeInOut" }}
    >
      <div className="intro-glow intro-glow-one" aria-hidden="true" />
      <div className="intro-glow intro-glow-two" aria-hidden="true" />
      <motion.div
        className="intro-card"
        initial={motionAllowed ? { opacity: 0, y: 28 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.58, ease: "easeOut" }}
      >
        <p className="intro-eyebrow">
          {language === "lo" ? "Portfolio ຂອງ" : "Portfolio of"}
        </p>
        <h1 id="intro-title">
          Sikunya Phommavanh
          <span>Alic</span>
        </h1>
        <p>
          {language === "lo"
            ? "ນັກສຶກສາ Computer Science ທີ່ສົນໃຈ backend development ແລະ web systems ຢູ່ວຽງຈັນ, ລາວ."
            : "A Computer Science student interested in backend development and web systems in Vientiane, Laos."}
        </p>
        <button
          type="button"
          className="intro-enter-button"
          onClick={onEnter}
          disabled={disabled}
          aria-label={
            language === "lo"
              ? "ເຂົ້າເບິ່ງ Portfolio"
              : "Explore Portfolio"
          }
        >
          {language === "lo" ? "ເຂົ້າເບິ່ງ Portfolio" : "Explore Portfolio"}
          <ArrowDownRight size={18} aria-hidden="true" />
        </button>
      </motion.div>
    </motion.section>
  );
}

function RevealSection({ children }: { children: React.ReactNode }) {
  const { shouldAnimate } = useMotionPreferences();
  const prefersReducedMotion = useReducedMotion();
  const motionAllowed = shouldAnimate && !prefersReducedMotion;

  return (
    <motion.div
      className="section-reveal"
      initial={motionAllowed ? "hidden" : false}
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={sectionReveal}
      transition={{ duration: motionAllowed ? 0.52 : 0, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
