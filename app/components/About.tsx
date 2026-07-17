"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Python",
    "React",
    "GitHub",
    "SQL",
    "Arduino / IoT",
    "HTML / CSS / JavaScript",
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl border-t border-black/5 px-6 py-20 dark:border-white/10 md:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16"
      >
        <div>
          <h2 className="mb-4 text-sm uppercase tracking-[0.3em] opacity-60">
            About
          </h2>
          <p className="text-xl leading-relaxed opacity-85 md:text-2xl">
            I&apos;m a Computer Science student at Soutsaka Institute of
            Technology, with a backend focus and a strong interest in building
            practical systems that feel clean, reliable, and easy to use.
          </p>

          <div className="mt-8 rounded-2xl border border-black/8 bg-white/40 p-5 text-sm leading-6 opacity-80 backdrop-blur dark:border-white/10 dark:bg-white/5">
            I care about the details that make software feel solid: structure,
            readability, speed, and a calm visual rhythm.
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-black/8 bg-white/40 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-[11px] uppercase tracking-[0.25em] opacity-50">
              Quick facts
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="opacity-60">Location</span>
                <span className="font-medium">Khamhoung Village, Laos</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="opacity-60">Open to</span>
                <span className="font-medium">Internship & junior roles</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="opacity-60">Strength</span>
                <span className="font-medium">Backend logic & teamwork</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/10 bg-white/40 px-4 py-2 text-sm opacity-80 backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
