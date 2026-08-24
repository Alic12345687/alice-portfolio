// app/experience/ExperienceClient.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import type { ExperienceItem } from "./page";

interface ExperienceClientProps {
  experiences: ExperienceItem[];
}

export default function ExperienceClient({
  experiences,
}: ExperienceClientProps) {
  const { language } = useLanguage();
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl border-t border-black/5 px-6 py-20 dark:border-white/10 md:px-10"
    >
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] opacity-60">
            {language === "lo" ? "ປະສົບການ" : "Experience"}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 opacity-65">
            {language === "lo"
              ? "ໄລຍະເວລາສັ້ນໆຂອງບົດບາດທີ່ຊ່ວຍຫຼໍ່ຫຼອມວິທີຄິດຂອງຂ້ອຍໃນເລື່ອງ product, systems, ແລະການເຮັດວຽກຮ່ວມກັນ."
              : "A short timeline of the roles that shaped how I think about product, systems, and collaboration."}
          </p>
        </div>
        <p className="hidden text-sm opacity-50 md:block">
          {language === "lo"
            ? "ສ້າງດ້ວຍໃຈ ແລະສົ່ງມອບດ້ວຍຄວາມຕັ້ງໃຈ"
            : "Built with care, shipped with intent"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: "easeOut" }}
      className="group rounded-2xl border border-black/10 bg-white/35 p-8 transition-colors duration-300 hover:border-black/25 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/25"
    >
      <h2 className="mb-2 text-xl font-semibold md:text-2xl">{exp.title}</h2>

      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="font-bold">{exp.company}</span>
        {exp.period && (
          <>
            <span className="opacity-40">|</span>
            <span className="italic opacity-70">{exp.period}</span>
          </>
        )}
      </div>

      <p className="text-sm leading-relaxed opacity-70 md:text-base">
        {exp.description}
      </p>
    </motion.div>
  );
}
