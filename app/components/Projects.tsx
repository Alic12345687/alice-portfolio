"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const projects = [
    {
      title: "Restaurant Web App",
      tag:
        language === "lo"
          ? "ວຽກວິຊາການ / ສ່ວນຕົວ"
          : "Academic / Personal Project",
      color: "from-slate-500/12 to-slate-500/4",
      note:
        language === "lo"
          ? "ສ້າງ web app ບໍລິຫານຮ້ານອາຫານພ້ອມ logic ດ້ານ backend ແລະເຄື່ອງມືຊ່ວຍພັດທະນາ."
          : "Built a restaurant management web app with backend logic and tooling support.",
    },
    {
      title: "Smart Door Lock",
      tag: language === "lo" ? "IoT / ລະບົບຝັງຕົວ" : "IoT / Embedded Systems",
      color: "from-slate-500/12 to-slate-500/4",
      note:
        language === "lo"
          ? "ໂຄງການຄວບຄຸມການເຂົ້າອອກດ້ວຍ Arduino ແລະ RFID ເພື່ອຄວາມປອດໄພ."
          : "An access-control project using Arduino and RFID for secure door interaction.",
    },
    {
      title: "Smartphone RC Car",
      tag: language === "lo" ? "IoT / ຫຸ່ນຍົນ" : "IoT / Robotics",
      color: "from-slate-500/12 to-slate-500/4",
      note:
        language === "lo"
          ? "ລົດຄວບຄຸມຈາກໂທລະສັບພ້ອມ Bluetooth communication ແລະ mobile control."
          : "A remote-controlled vehicle project with Bluetooth communication and mobile control.",
    },
    {
      title: "AI-Assisted Workflow",
      tag: language === "lo" ? "ຜະລິດຕະພາບ" : "Productivity",
      color: "from-slate-500/12 to-slate-500/4",
      note:
        language === "lo"
          ? "ໃຊ້ Gemini ແລະ Claude ເພື່ອຊ່ວຍເລັ່ງການ debug, ຈັດໂຄງສ້າງ, ແລະແກ້ໄຂບັນຫາ."
          : "Used Gemini and Claude to speed up debugging, structure, and problem solving.",
    },
  ];
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl border-t border-black/5 px-6 py-20 dark:border-white/10 md:px-10"
    >
      <h2 className="mb-10 text-sm uppercase tracking-[0.3em] opacity-60">
        {language === "lo" ? "ຜົນງານເລືອກ" : "Selected Work"}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
            className={`flex h-56 cursor-pointer flex-col justify-end rounded-2xl border border-black/8 bg-gradient-to-br p-8 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 ${project.color}`}
          >
            <p className="mb-1 text-xs opacity-60">{project.tag}</p>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 opacity-70">
              {project.note}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
