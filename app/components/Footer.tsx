"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer
      id="contact"
      className="mx-auto max-w-6xl border-t border-black/5 px-6 py-20 dark:border-white/10 md:px-10"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-55">
        {language === "lo" ? "ຕິດຕໍ່" : "Contact"}
      </p>
      <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-5xl">
        {language === "lo" ? "ມາຮ່ວມງານກັນ." : "Let&apos;s work together."}
      </h2>

      <a
        href="mailto:sikunyaphommavanh@gmail.com"
        className="mb-10 inline-block text-lg underline underline-offset-4 opacity-80 transition-opacity hover:opacity-100 md:text-xl"
      >
        sikunyaphommavanh@gmail.com
      </a>

      <div className="flex gap-6 text-sm opacity-60">
        <a href="tel:+8562097570974" className="transition-opacity hover:opacity-100">
          +856 20 97 570 974
        </a>
        <a href="mailto:sikunyaphommavanh@gmail.com" className="transition-opacity hover:opacity-100">
        {language === "lo" ? "ອີເມວ" : "Email"}
      </a>
      </div>

      <div className="mt-3 flex gap-6 text-sm opacity-60">
        <a href="#" className="transition-opacity hover:opacity-100">
          LinkedIn
        </a>
        <a href="#" className="transition-opacity hover:opacity-100">
          Instagram
        </a>
        <a href="#" className="transition-opacity hover:opacity-100">
          Twitter
        </a>
      </div>

      <p className="mt-8 max-w-md text-sm leading-6 opacity-70">
        {language === "lo"
          ? "ຂ້ອຍຢູ່ວຽງຈັນ ແລະເປີດຮັບວຽກຝຶກງານ ຫຼື junior backend roles ທີ່ໃຫ້ຂ້ອຍໄດ້ຮຽນຮູ້ຕໍ່ເນື່ອງ ແລະຊ່ວຍງານໃນທີມຈິງ."
          : "I&apos;m based in Vientiane and open to internships or junior backend roles where I can keep learning and contribute to a real team."}
      </p>

      <p className="mt-16 text-xs opacity-40">
        (c) {new Date().getFullYear()} Sikunya Phommavanh. All rights reserved.
      </p>
    </footer>
  );
}
