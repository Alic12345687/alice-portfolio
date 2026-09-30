"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const skills = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "React",
    "GitHub",
    "Arduino / IoT",
    "HTML / CSS / JavaScript",
  ];

  const facts = [
    {
      label: language === "lo" ? "ທີ່ຢູ່" : "Location",
      value: "Khamhoung Village, Laos",
    },
    {
      label: language === "lo" ? "ການສຶກສາ" : "Education",
      value:
        language === "lo"
          ? "Computer Science, Soutsaka Institute of Technology"
          : "Computer Science, Soutsaka Institute of Technology",
    },
    {
      label: language === "lo" ? "ຈຸດແຂງ" : "Strengths",
      value: language === "lo" ? "Backend logic ແລະ teamwork" : "Backend logic & teamwork",
    },
    {
      label: language === "lo" ? "ພ້ອມຮັບ" : "Open to",
      value: language === "lo" ? "ຝຶກງານ ແລະ ວຽກ junior" : "Internships & junior roles",
    },
  ];

  return (
    <section id="about" className="section-band about-band">
      <div className="section-shell about-grid">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="about-copy"
        >
          <p className="section-kicker">02 - {language === "lo" ? "ກ່ຽວກັບຂ້ອຍ" : "A Little About Me"}</p>
          <h2>
            {language === "lo" ? (
              <>
                ຢາກຮູ້ໂດຍທຳມະຊາດ.
                <br />
                ເລືອກ backend ເປັນທາງ.
              </>
            ) : (
              <>
                Curious by nature.
                <br />
                Backend by choice.
              </>
            )}
          </h2>
          <p className="lead">
            {language === "lo"
              ? "ຂ້ອຍມັກເຂົ້າໃຈວ່າຂ້າງຫຼັງ interface ເຮັດວຽກແນວໃດ ແລະສ້າງໃຫ້ມັນໃຊ້ງານໄດ້ດີ."
              : "I like understanding what happens behind the interface and making it work well."}
          </p>
          <p>
            {language === "lo"
              ? "ຂ້ອຍກຳລັງຮຽນ Computer Science ຢູ່ Soutsaka Institute of Technology. ຈຸດສຸມຂອງຂ້ອຍຄື software ທີ່ໃຊ້ງານໄດ້ຈິງ: ໂຄງສ້າງຊັດເຈນ, code ອ່ານງ່າຍ, logic ພຶ່ງພາໄດ້, ແລະ experience ທີ່ໃຊ້ແລ້ວສະບາຍ."
              : "I'm studying Computer Science at Soutsaka Institute of Technology. My focus is practical software: clear structure, readable code, dependable logic, and an experience that feels easy to use."}
          </p>
          <div className="chip-row about-skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="about-card"
        >
          <div className="about-card-head">
            <strong>SP.</strong>
            <span>{language === "lo" ? "ຢູ່ລາວ" : "Based in Laos"}</span>
          </div>
          <div className="fact-list">
            {facts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
          <p className="quote">
            {language === "lo"
              ? "“ດີໄຊນ໌ທີ່ດີຄວນສະຫງົບ, ແຕ່ບໍ່ຄວນຖືກລືມ.”"
              : "“Good design should feel quiet, but never forgettable.”"}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
