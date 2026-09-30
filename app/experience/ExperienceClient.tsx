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
    <section id="experience" className="section-band experience-band">
      <div className="section-shell experience-grid">
        <div className="section-heading sticky-heading">
          <p className="section-kicker">
            03 - {language === "lo" ? "ເສັ້ນທາງຈົນເຖິງຕອນນີ້" : "The Journey So Far"}
          </p>
          <h2>
            {language === "lo" ? (
              <>
                ຮຽນຮູ້ສະເໝີ.
                <br />
                ສ້າງສະເໝີ.
              </>
            ) : (
              <>
                Always learning.
                <br />
                Always building.
              </>
            )}
          </h2>
        </div>

        <div className="timeline-list">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
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
    <motion.article
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="timeline-card"
    >
      <div className="timeline-meta">
        <span>{exp.period}</span>
        {index === 0 && <strong>Ongoing</strong>}
      </div>
      <h3>{exp.title}</h3>
      <h4>{exp.company}</h4>
      <p>{exp.description}</p>
    </motion.article>
  );
}
