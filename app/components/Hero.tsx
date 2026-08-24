"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const stack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", className: "tech-next" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", className: "tech-ts" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", className: "tech-pg" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", className: "tech-node" },
  { name: "GitHub", icon: SiGithub, color: "#f0f6fc", className: "tech-github" },
  { name: "React", icon: SiReact, color: "#61dafb", className: "tech-react" },
];

export default function Hero() {
  const { language } = useLanguage();
  return (
    <section className="hero-section mx-auto max-w-7xl px-6 pb-24 pt-14 md:px-10 md:pb-32 md:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            {language === "lo" ? "ນັກຝຶກງານ backend" : "Backend Developer Intern"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-8xl"
          >
            {language === "lo" ? (
              <>
                ຄິດແບບ backend,
                <br />
                ແຕ່ຈັດຮູບລັກໃຫ້ສະອາດ.
              </>
            ) : (
              <>Systems that feel<br /><span className="text-accent">simple.</span></>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg"
          >
            {language === "lo"
              ? "ຂ້ອຍແມ່ນ Sikunya Phommavanh ນັກຝຶກງານ backend ແລະນັກສຶກສາ Computer Science ຈາກວຽງຈັນ. ຂ້ອຍສົນໃຈການນຳໄອເດຍທີ່ຈັດຮູບແລ້ວມາຕໍ່ຍອດໃຫ້ເປັນ web experience ທີ່ເຂົ້າໃຈງ່າຍ ໃຊ້ງານໄດ້ຈິງ ແລະດູເປັນມືອາຊີບ."
              : "I’m Sikunya Phommavanh, a backend-minded developer and Computer Science student from Vientiane. I build thoughtful digital products with dependable systems behind them."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-8 grid gap-3 sm:grid-cols-3"
          >
            {[
              {
                label: language === "lo" ? "ຈຸດສຸມ" : "Focus",
                value:
                  language === "lo"
                    ? "Backend + ລະບົບ Web"
                    : "Backend + Web systems",
              },
              {
                label: language === "lo" ? "ສະຕາຍ" : "Style",
                value:
                  language === "lo" ? "ສະອາດ ແລະ ມືອາຊີບ" : "Minimal, professional",
              },
              {
                label: language === "lo" ? "ເຄື່ອງມື" : "Tools",
                value:
                  language === "lo"
                    ? "Next.js, Node.js, PostgreSQL"
                    : "Next.js, Node.js, PostgreSQL",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="stat-card rounded-2xl p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] opacity-50">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="button-primary rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              {language === "lo" ? "ເບິ່ງຜົນງານ" : "View my work"}
            </a>
            <a
              href="#contact"
              className="button-secondary rounded-full px-6 py-3 text-sm font-medium transition-colors"
            >
              {language === "lo" ? "ຕິດຕໍ່ຂ້ອຍ" : "Get in touch"}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-visual relative mx-auto w-full max-w-lg"
        >
          <div className="hero-frame absolute inset-[9%_5%_15%] rounded-[2rem]" />
          <div className="hero-image overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900 shadow-2xl">
            <Image
              src="/alic.png"
              alt="CV image of Alic"
              width={900}
              height={1100}
              priority
              className="h-[440px] w-full object-cover object-center opacity-90 grayscale-[.15] md:h-[580px]"
            />
          </div>

          <div className="mt-4 flex items-center justify-between rounded-full border border-black/10 bg-white/60 px-4 py-3 text-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <span className="opacity-70">
              {language === "lo" ? "ນັກຝຶກງານ backend" : "Backend Developer Intern"}
            </span>
            <span className="opacity-70">Soutsaka Institute</span>
          </div>

          <p className="mx-auto mt-5 max-w-sm text-center text-sm italic opacity-60">
            {language === "lo"
              ? "ງານທີ່ດີຄວນດູສະຫງົບ ແຕ່ຈື່ງໄດ້ງ່າຍ."
              : "&quot;Good design should feel quiet, but never forgettable.&quot;"}
          </p>

          <div className="floating-tech" aria-label="Technology stack">
            {stack.map((item) => {
              const Icon = item.icon;
              return <div key={item.name} className={`tech-badge ${item.className}`}><span><Icon color={item.color} /></span>{item.name}</div>;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
