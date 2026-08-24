"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import type { PointerEvent } from "react";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function IntroHero() {
  const { language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const lookX = useSpring(0, { stiffness: 120, damping: 18 });
  const lookY = useSpring(0, { stiffness: 120, damping: 18 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 420], [1, 0]);
  const scale = useTransform(scrollY, [0, 420], [1, 0.94]);
  const y = useTransform(scrollY, [0, 420], [0, -70]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    lookX.set((event.clientX / window.innerWidth - 0.5) * 10);
    lookY.set((event.clientY / window.innerHeight - 0.5) * -7);
  }

  function resetLook() {
    lookX.set(0);
    lookY.set(0);
  }

  return (
    <section ref={heroRef} className="intro-hero" aria-label="Portfolio introduction" onPointerMove={handlePointerMove} onPointerLeave={resetLook}>
      <motion.div style={{ opacity, scale, y }} className="intro-hero-inner">
        <motion.div
          className="intro-orbit intro-orbit-one"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="intro-orbit intro-orbit-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.p
          className="eyebrow mb-7"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {language === "lo" ? "ສະບາຍດີ, ຂ້ອຍແມ່ນ" : "Hello, I’m"}
        </motion.p>

        <motion.h1
          className="intro-title"
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          Sikunya
          <span>Phommavanh</span>
        </motion.h1>

        <motion.p
          className="intro-subtitle"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          {language === "lo"
            ? "Backend-minded developer · Computer Science student"
            : "Backend-minded developer · Computer Science student"}
        </motion.p>

        <motion.a
          href="#portfolio"
          className="intro-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.97 }}
        >
          {language === "lo" ? "ເຂົ້າເບິ່ງ portfolio" : "Explore portfolio"}
          <span aria-hidden="true"><ArrowDownRight size={16} strokeWidth={2.5} /></span>
        </motion.a>
      </motion.div>

      <motion.div
        className="cat-mascot"
        style={{ rotateY: lookX, rotateX: lookY }}
        drag
        dragConstraints={heroRef}
        dragElastic={0.08}
        dragMomentum={false}
        whileDrag={{ scale: 1.06, cursor: "grabbing" }}
        animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        role="img"
        aria-label="Draggable cat mascot"
      >
        <Image
          src="/cat-mascot.png"
          alt=""
          width={520}
          height={520}
          priority
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
        />
      </motion.div>

      <motion.a
        href="#portfolio"
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Scroll to portfolio"
      >
        <span>{language === "lo" ? "ເລື່ອນລົງ" : "Scroll to discover"}</span>
        <motion.i
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
}
