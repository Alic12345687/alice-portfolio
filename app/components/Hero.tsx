"use client";

import { motion, useSpring } from "framer-motion";
import { Pause, Play } from "lucide-react";
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
  { name: "Next.js", icon: SiNextdotjs, color: "#050816", className: "tech-next" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", className: "tech-ts" },
  { name: "React", icon: SiReact, color: "#18b6f6", className: "tech-react" },
  { name: "Node.js", icon: SiNodedotjs, color: "#45a049", className: "tech-node" },
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
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    moveX.set(x * 18);
    moveY.set(y * 14);
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
          <motion.p
            className="availability-pill"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span />
            {language === "lo"
              ? "ພ້ອມຮັບຝຶກງານ ແລະ ວຽກ junior"
              : "Open to internships & junior roles"}
          </motion.p>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="hero-title"
          >
            {language === "lo" ? (
              <>
                ຄິດເປັນລະບົບ.
                <span> ສ້າງໃຫ້ໃຊ້ງານງ່າຍ.</span>
              </>
            ) : (
              <>
                Thoughtful code.
                <span> Practical systems.</span>
              </>
            )}
          </motion.h1>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="hero-intro"
          >
            <h2>
              {language === "lo" ? "ສະບາຍດີ, ຂ້ອຍແມ່ນ Alic." : "Hi, I'm Alic."}
            </h2>
            <p>
              {language === "lo"
                ? "Sikunya Phommavanh — ນັກພັດທະນາທີ່ຖະໜັດ backend ແລະນັກສຶກສາ Computer Science ຢູ່ວຽງຈັນ, ລາວ."
                : "Sikunya Phommavanh — a backend-minded developer and Computer Science student in Vientiane, Laos."}
            </p>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
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
                : "Resume background motion"}
          </button>
        </div>

        <motion.div
          className="profile-stage"
          initial={false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.14 }}
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
                {language === "lo" ? "ນັກຝຶກງານ Backend" : "Backend Developer Intern"}
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
