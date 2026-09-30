"use client";

import { motion, useSpring } from "framer-motion";
import { Download, Pause, Play } from "lucide-react";
import Image from "next/image";
import type { PointerEvent } from "react";
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

export default function Hero() {
  const { language } = useLanguage();
  const { motionEnabled, shouldAnimate, toggleMotion } = useMotionPreferences();
  const moveX = useSpring(0, { stiffness: 90, damping: 22 });
  const moveY = useSpring(0, { stiffness: 90, damping: 22 });

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (!shouldAnimate || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    moveX.set(((event.clientX - rect.left) / rect.width - 0.5) * 16);
    moveY.set(((event.clientY - rect.top) / rect.height - 0.5) * 12);
  }

  function resetPointer() {
    moveX.set(0);
    moveY.set(0);
  }

  return (
    <section
      className="hero-section"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div className="hero-ambient" style={{ x: moveX, y: moveY }} />
      <div className="section-shell hero-grid">
        <div className="hero-copy">
          <p className="availability-pill">
            <span />
            {language === "lo"
              ? "ພ້ອມຮັບຝຶກງານ ແລະ ວຽກ junior"
              : "Open to internships & junior roles"}
          </p>

          <h1 className="hero-title">
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
          </h1>

          <div className="hero-intro">
            <h2>
              {language === "lo" ? "ສະບາຍດີ, ຂ້ອຍແມ່ນ Alic." : "Hi, I'm Alic."}
            </h2>
            <p>
              {language === "lo"
                ? "Sikunya Phommavanh — ນັກສຶກສາ Computer Science ທີ່ສົນໃຈ backend ແລະລະບົບ web ຢູ່ວຽງຈັນ, ລາວ."
                : "Sikunya Phommavanh — a Computer Science student interested in backend development and web systems in Vientiane, Laos."}
            </p>
          </div>

          <div className="hero-actions">
            <a href="#work" className="button-primary">
              {language === "lo" ? "ເບິ່ງຜົນງານ" : "Explore my work"}
            </a>
            <a href="#contact" className="button-secondary">
              {language === "lo" ? "ຕິດຕໍ່" : "Let's talk"}
            </a>
            <a href="/cv.jpeg" download className="button-secondary">
              <Download size={18} />
              {language === "lo" ? "ດາວໂຫຼດ CV" : "Download CV"}
            </a>
          </div>

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
                : "Resume background motion"}
          </button>
        </div>

        <motion.div
          className="profile-stage"
          initial={false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75 }}
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
            {stack.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className={`tech-badge ${item.className}`}>
                  <span>
                    <Icon color={item.color} />
                  </span>
                  {item.name}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
