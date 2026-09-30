"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import type { PointerEvent } from "react";
import { useRef } from "react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";
import { useMotionPreferences } from "../context/MotionContext";

const stack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", className: "tech-next" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", className: "tech-ts" },
  { name: "React", icon: SiReact, color: "#18b6f6", className: "tech-react" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", className: "tech-node" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", className: "tech-pg" },
];

const revealItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function Hero({ introReady = true }: { introReady?: boolean }) {
  const { language } = useLanguage();
  const { motionEnabled, shouldAnimate, toggleMotion } = useMotionPreferences();
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const motionAllowed = shouldAnimate && !prefersReducedMotion;

  function applyPointerGlow() {
    frameRef.current = null;
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--hero-glow-x", `${targetRef.current.x}px`);
    hero.style.setProperty("--hero-glow-y", `${targetRef.current.y}px`);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (!shouldAnimate || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    targetRef.current = {
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 34,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 24,
    };
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(applyPointerGlow);
    }
  }

  function resetPointer() {
    targetRef.current = { x: 0, y: 0 };
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(applyPointerGlow);
    }
  }

  return (
    <section
      ref={heroRef}
      className="hero-section"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-ambient" aria-hidden="true" />
      <div className="section-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={motionAllowed ? "hidden" : false}
          animate={introReady ? "show" : "hidden"}
          transition={{ staggerChildren: motionAllowed ? 0.1 : 0 }}
        >
          <motion.p
            className="availability-pill"
            variants={revealItem}
            transition={{ duration: motionAllowed ? 0.45 : 0, ease: "easeOut" }}
          >
            <span />
            {language === "lo"
              ? "ພ້ອມຮັບຝຶກງານ ແລະ ວຽກ junior"
              : "Open to internships & junior roles"}
          </motion.p>

          <motion.h1
            id="portfolio-title"
            tabIndex={-1}
            className="hero-title"
            variants={revealItem}
            transition={{ duration: motionAllowed ? 0.48 : 0, ease: "easeOut" }}
          >
            {language === "lo" ? (
              <>
                ຄິດເປັນລະບົບ.
                <span>ສ້າງໃຫ້ໃຊ້ງານງ່າຍ.</span>
              </>
            ) : (
              <>
                Thoughtful code.
                <span>Practical systems.</span>
              </>
            )}
          </motion.h1>

          <motion.div
            className="hero-intro"
            variants={revealItem}
            transition={{ duration: motionAllowed ? 0.46 : 0, ease: "easeOut" }}
          >
            <h2>{language === "lo" ? "ສະບາຍດີ, ຂ້ອຍແມ່ນ Alic." : "Hi, I'm Alic."}</h2>
            <p>
              {language === "lo"
                ? "Sikunya Phommavanh — ນັກສຶກສາ Computer Science ທີ່ສົນໃຈ backend ແລະລະບົບ web ຢູ່ວຽງຈັນ, ລາວ."
                : "Sikunya Phommavanh — a Computer Science student interested in backend development and web systems in Vientiane, Laos."}
            </p>
          </motion.div>

          <motion.div
            className="hero-actions"
            variants={revealItem}
            transition={{ duration: motionAllowed ? 0.46 : 0, ease: "easeOut" }}
          >
            <a href="#work" className="button-primary">
              {language === "lo" ? "ເບິ່ງຜົນງານ" : "Explore my work"}
            </a>
            <a href="#contact" className="button-secondary">
              {language === "lo" ? "ຕິດຕໍ່" : "Let's talk"}
            </a>
          </motion.div>

          <button
            type="button"
            className="motion-toggle"
            onClick={toggleMotion}
            aria-pressed={!motionEnabled}
          >
            {motionEnabled ? <Pause size={15} /> : <Play size={15} />}
            {motionEnabled
              ? language === "lo"
                ? "ຢຸດການເຄື່ອນໄຫວ"
                : "Pause background motion"
              : language === "lo"
                ? "ເປີດການເຄື່ອນໄຫວ"
                : "Start background motion"}
          </button>
        </motion.div>

        <motion.div
          className="profile-stage"
          initial={motionAllowed ? { opacity: 0, y: 28 } : false}
          animate={{ opacity: introReady ? 1 : 0, y: introReady ? 0 : 28 }}
          transition={{
            duration: motionAllowed ? 0.52 : 0,
            delay: motionAllowed ? 0.42 : 0,
            ease: "easeOut",
          }}
        >
          <div className="profile-card">
            <div className="profile-card-top">
              <span>Sikunya Phommavanh</span>
              <span>VTE / Lao</span>
            </div>
            <Image
              src="/alic.png"
              alt="Portrait of Sikunya Phommavanh"
              width={900}
              height={1100}
              priority
              className="profile-photo"
            />
            <div className="profile-card-bottom">
              <span>
                {language === "lo" ? "ນັກສຶກສາ Computer Science" : "Computer Science Student"}
              </span>
              <strong>SP.</strong>
            </div>
          </div>

          <div className="floating-tech" aria-label="Technology stack">
            {stack.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  className={`tech-reveal ${item.className}`}
                  initial={motionAllowed ? { opacity: 0, y: 24 } : false}
                  animate={{
                    opacity: introReady ? 1 : 0,
                    y: introReady ? 0 : 24,
                  }}
                  transition={{
                    duration: motionAllowed ? 0.42 : 0,
                    delay: motionAllowed ? 0.72 + index * 0.1 : 0,
                    ease: "easeOut",
                  }}
                >
                  <div className="tech-badge">
                    <span>
                      <Icon color={item.color} />
                    </span>
                    {item.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
