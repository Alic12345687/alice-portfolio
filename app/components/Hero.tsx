"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm uppercase tracking-[0.35em] opacity-55"
          >
            {language === "lo" ? "ນັກຝຶກງານ Backend" : "Backend Developer Intern"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-7 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            {language === "lo" ? (
              <>
                ຄິດແບບ backend,
                <br />
                ແຕ່ງຫນ້າຕາໃຫ້ສະອາດ.
              </>
            ) : (
              <>
                Backend-minded,
                <br />
                clean interfaces.
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-xl text-base leading-7 opacity-75 md:text-lg"
          >
            {language === "lo"
              ? "ຂ້ອຍແມ່ນ Sikunya Phommavanh, ນັກຝຶກງານ backend ແລະນັກສຶກສາ Computer Science ຈາກວຽງຈັນ. ຂ້ອຍມັກປ່ຽນໄອເດຍທີ່ມີໂຄງສ້າງໃຫ້ເປັນ web experience ທີ່ງ່າຍ, ໃຊ້ງານໄດ້ຈິງ, ແລະເບິ່ງມືອາຊີບ."
              : "I&apos;m Sikunya Phommavanh, a backend developer intern and Computer Science student from Vientiane. I like turning structured ideas into simple, practical, and professional web experiences."}
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
                label: language === "lo" ? "ສະໄຕລ໌" : "Style",
                value:
                  language === "lo" ? "ເອີ້ນງ່າຍ, ມືອາຊີບ" : "Minimal, professional",
              },
              {
                label: language === "lo" ? "ເຄື່ອງມື" : "Tools",
                value:
                  language === "lo"
                    ? "Python, React, GitHub"
                    : "Python, React, GitHub",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-black/8 bg-white/35 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5"
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
              className="rounded-full bg-[#1d1a17] px-6 py-3 text-sm font-medium text-[#f4f0e8] transition-opacity hover:opacity-85 dark:bg-[#f4efe6] dark:text-[#0f1115]"
            >
              {language === "lo" ? "ເບິ່ງຜົນງານ" : "View my work"}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            >
              {language === "lo" ? "ຕິດຕໍ່ຂ້ອຍ" : "Get in touch"}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-[2rem] border border-black/5 bg-black/4 dark:border-white/10 dark:bg-white/5" />
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/45 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <Image
              src="/alic.png"
              alt="CV image of Alic"
              width={900}
              height={1100}
              priority
              className="h-[420px] w-full object-cover object-center md:h-[520px]"
            />
          </div>

          <div className="mt-4 flex items-center justify-between rounded-full border border-black/10 bg-white/45 px-4 py-3 text-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <span className="opacity-70">
              {language === "lo" ? "ນັກຝຶກງານ Backend" : "Backend Developer Intern"}
            </span>
            <span className="opacity-70">Soutsaka Institute</span>
          </div>

          <p className="mx-auto mt-5 max-w-sm text-center text-sm italic opacity-60">
            {language === "lo"
              ? "“ດີໄຊນ໌ທີ່ດີຄວນເບິ່ງສະຫງົບ ແຕ່ບໍ່ຄວນຖືກລືມ.”"
              : "&quot;Good design should feel quiet, but never forgettable.&quot;"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
