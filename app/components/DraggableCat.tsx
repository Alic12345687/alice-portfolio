"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useMotionPreferences } from "../context/MotionContext";

export default function DraggableCat() {
  const { language } = useLanguage();
  const { shouldAnimate } = useMotionPreferences();

  return (
    <motion.div
      className="cat-companion"
      drag
      dragMomentum={false}
      dragElastic={0.06}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      animate={shouldAnimate ? { y: [0, -8, 0] } : { y: 0 }}
      transition={{
        duration: 4.8,
        repeat: shouldAnimate ? Infinity : 0,
        ease: "easeInOut",
      }}
      role="img"
      aria-label="Draggable cat mascot"
    >
      <Image
        src="/cat-mascot.png"
        alt=""
        width={180}
        height={180}
        draggable={false}
        onDragStart={(event) => event.preventDefault()}
      />
      <span>{language === "lo" ? "ລາກໄດ້" : "Drag me"}</span>
    </motion.div>
  );
}
