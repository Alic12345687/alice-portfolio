"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer id="contact" className="contact-section">
      <div className="section-shell contact-grid">
        <div>
          <p className="section-kicker">04 - {language === "lo" ? "ຕິດຕໍ່" : "Let's Connect"}</p>
          <h2>
            {language === "lo"
              ? "ເລື່ອງດີໆ ເລີ່ມຈາກການສົນທະນາ."
              : "Good things start with a conversation."}
          </h2>
          <p>
            {language === "lo"
              ? "ຖ້າມີວຽກຝຶກງານ ຫຼືບົດບາດ junior backend ທີ່ເໝາະສົມ, ຂ້ອຍຍິນດີຮັບຟັງ."
              : "Have an internship or junior backend role in mind? I'd love to hear about it."}
          </p>
        </div>

        <address>
          <span>Vientiane, Laos</span>
          <a href="mailto:sikunyaphommavanh@gmail.com">
            sikunyaphommavanh@gmail.com
          </a>
          <a href="tel:+8562097570974">+856 20 97 570 974</a>
        </address>
      </div>

      <div className="section-shell footer-bottom">
        <a href="#portfolio" className="brand-mark" aria-label="Back to top">
          alic<span>®</span>
        </a>
        <p>(c) {new Date().getFullYear()} Sikunya Phommavanh</p>
        <a href="#portfolio">{language === "lo" ? "ກັບຂຶ້ນເທິງ" : "Back to top"}</a>
      </div>
    </footer>
  );
}
