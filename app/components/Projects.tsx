"use client";

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const projects = [
    {
      title: "Restaurant Web App",
      tag: "Web Application",
      note:
        language === "lo"
          ? "ພັດທະນາ web app ສຳລັບການຈັດການຮ້ານອາຫານ ໂດຍເນັ້ນ backend logic ແລະ workflow ທີ່ນຳໄປໃຊ້ງານໄດ້ຈິງ."
          : "A restaurant management web app focused on clear backend logic and practical management workflows.",
      chips: ["Node.js", "PostgreSQL", "GitHub"],
    },
    {
      title: "Smart Door Lock",
      tag: "IoT / Embedded Systems",
      note:
        language === "lo"
          ? "ລະບົບລົງທະບຽນ ແລະກວດສອບ RFID card ເພື່ອປົດລັອກປະຕູຜ່ານ Arduino."
          : "RFID card registration and verification connected to secure door-unlocking logic on Arduino.",
      chips: ["Arduino", "RFID", "Access control"],
    },
    {
      title: "Smartphone RC Car",
      tag: "IoT / Robotics",
      note:
        language === "lo"
          ? "ລົດຄວບຄຸມຜ່ານ mobile app ດ້ວຍ Bluetooth ສຳລັບທິດທາງ ແລະຄວາມໄວແບບ real time."
          : "A mobile-controlled vehicle with real-time direction and speed control over Bluetooth.",
      chips: ["Arduino", "Bluetooth", "Mobile control"],
    },
  ];

  return (
    <section id="work" className="section-band work-band">
      <div className="section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">
              01 - {language === "lo" ? "ຜົນງານທີ່ເລືອກ" : "Selected Work"}
            </p>
            <h2>
              {language === "lo"
                ? "ຈາກໄອເດຍ ສູ່ສິ່ງທີ່ໃຊ້ງານໄດ້."
                : "From an idea to something useful."}
            </h2>
          </div>
          <p>
            {language === "lo"
              ? "ຜົນງານດ້ານ web development, IoT ແລະລະບົບທີ່ເນັ້ນການໃຊ້ງານຈິງ."
              : "A selection of academic and personal projects across web development and connected devices."}
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={index === 0 ? "project-card featured" : "project-card"}
            >
              <div className="project-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.tag}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.note}</p>
              </div>
              <div className="chip-row">
                {project.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="project-data-note">
          {language === "lo"
            ? "ຍັງບໍ່ມີຮູບຜົນງານ ຫຼື URL ຂອງ Live Demo / GitHub / ວິດີໂອ ໃນໂປຣເຈັກນີ້, ຈຶ່ງບໍ່ໄດ້ໃສ່ປຸ່ມຫຼືຮູບປອມ."
            : "No real project screenshots or Live Demo / GitHub / video URLs were found in this project, so these cards avoid fake media and placeholder buttons."}
        </div>

        <div className="ai-note">
          <div className="ai-icon">
            <Sparkle size={24} />
          </div>
          <h3>
            {language === "lo"
              ? "ມີ AI ຊ່ວຍຄິດ. ມີການ iterate ຢ່າງຕັ້ງໃຈ."
              : "A little help from AI. A lot of thoughtful iteration."}
          </h3>
          <p>
            {language === "lo"
              ? "ຂ້ອຍໃຊ້ Gemini ແລະ Claude ໃນ workflow ເພື່ອ debug, ສຳຫຼວດໂຄງສ້າງ, ແລະມອງບັນຫາຈາກອີກມຸມ."
              : "I use Gemini and Claude in my workflow to work through bugs, explore structure, and approach problems from a different angle."}
          </p>
        </div>
      </div>
    </section>
  );
}
