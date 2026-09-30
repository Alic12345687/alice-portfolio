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
  const education = experiences.slice(0, 2);

  return (
    <section id="experience" className="section-band experience-band">
      <div className="section-shell experience-grid">
        <div className="section-heading sticky-heading">
          <p className="section-kicker">
            03 - {language === "lo" ? "ການສຶກສາ ແລະ ເສັ້ນທາງ" : "Education & Path"}
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
          <div className="timeline-group-label">Education</div>
          {education.map((exp, index) => (
            <TimelineCard key={exp.id} exp={exp} index={index} />
          ))}

          <div className="experience-confirmation-card">
            <span>Experience</span>
            <h3>
              {language === "lo"
                ? "ລາຍລະອຽດການຝຶກງານຍັງຕ້ອງຢືນຢັນ"
                : "Internship details need confirmation"}
            </h3>
            <p>
              {language === "lo"
                ? "ໃນໄຟລ໌ຂໍ້ມູນມີຄຳວ່າ Backend Developer Intern ຢູ່ຮ່ວມກັບ Soutsaka Institute of Technology, ແຕ່ບໍ່ພົບຊື່ບໍລິສັດ ຫຼືຊ່ວງເວລາຝຶກງານທີ່ຢືນຢັນໄດ້. ເວັບຈຶ່ງສະແດງຂໍ້ມູນນັກສຶກສາທີ່ມີຢູ່ກ່ອນ."
                : "The source file mentions Backend Developer Intern alongside Soutsaka Institute of Technology, but it does not include a confirmed company name or internship period. This site therefore shows the verified student information first."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="timeline-card"
    >
      <div className="timeline-meta">
        <span>{exp.period}</span>
        {index === 0 && <strong>Ongoing</strong>}
      </div>
      <h3>{exp.title.replace(" / Backend Developer Intern", "")}</h3>
      <h4>{exp.company}</h4>
      <p>{exp.description}</p>
    </motion.article>
  );
}
