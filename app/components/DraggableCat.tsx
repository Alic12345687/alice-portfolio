"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useMotionPreferences } from "../context/MotionContext";

interface DragBounds {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export default function DraggableCat() {
  const { language } = useLanguage();
  const { shouldAnimate } = useMotionPreferences();
  const catRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [bounds, setBounds] = useState<DragBounds>({
    top: -420,
    right: 0,
    bottom: 0,
    left: -420,
  });

  useEffect(() => {
    function updateBounds() {
      const rect = catRef.current?.getBoundingClientRect();
      const width = rect?.width ?? 96;
      const height = rect?.height ?? 118;
      setBounds({
        top: Math.min(0, -window.innerHeight + height + 24),
        right: 0,
        bottom: 0,
        left: Math.min(0, -window.innerWidth + width + 24),
      });
    }

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [visible]);

  if (!visible) {
    return (
      <button
        type="button"
        className="cat-visibility-toggle cat-visibility-toggle-hidden"
        onClick={() => setVisible(true)}
        aria-label={language === "lo" ? "ສະແດງແມວ" : "Show cat"}
      >
        <Eye size={16} />
        <span>{language === "lo" ? "ສະແດງແມວ" : "Show cat"}</span>
      </button>
    );
  }

  return (
    <div className="cat-widget">
      <button
        type="button"
        className="cat-visibility-toggle"
        onClick={() => setVisible(false)}
        aria-label={language === "lo" ? "ເຊື່ອງແມວ" : "Hide cat"}
      >
        <EyeOff size={15} />
        <span>{language === "lo" ? "ເຊື່ອງແມວ" : "Hide cat"}</span>
      </button>
      <motion.div
        ref={catRef}
        className="cat-companion"
        drag
        dragConstraints={bounds}
        dragMomentum={false}
        dragElastic={0.04}
        whileDrag={{ scale: 1.04, cursor: "grabbing" }}
        animate={shouldAnimate ? { y: [0, -7, 0] } : { y: 0 }}
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
    </div>
  );
}
