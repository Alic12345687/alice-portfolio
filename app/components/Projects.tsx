"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Restaurant Web App",
    tag: "Academic / Personal Project",
    color: "from-slate-500/12 to-slate-500/4",
    note: "Built a restaurant management web app with backend logic and tooling support.",
  },
  {
    title: "Smart Door Lock",
    tag: "IoT / Embedded Systems",
    color: "from-slate-500/12 to-slate-500/4",
    note: "An access-control project using Arduino and RFID for secure door interaction.",
  },
  {
    title: "Smartphone RC Car",
    tag: "IoT / Robotics",
    color: "from-slate-500/12 to-slate-500/4",
    note: "A remote-controlled vehicle project with Bluetooth communication and mobile control.",
  },
  {
    title: "AI-Assisted Workflow",
    tag: "Productivity",
    color: "from-slate-500/12 to-slate-500/4",
    note: "Used Gemini and Claude to speed up debugging, structure, and problem solving.",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl border-t border-black/5 px-6 py-20 dark:border-white/10 md:px-10"
    >
      <h2 className="mb-10 text-sm uppercase tracking-[0.3em] opacity-60">
        Selected Work
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
