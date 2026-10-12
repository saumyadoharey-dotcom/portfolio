"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mail, ArrowUpRight } from "lucide-react";

const footerConfig = {
  email: "mailto:saumyadoharey014@gmail.com",
  calendar: "https://calendar.google.com/calendar/u/1?cid=c2F1bXlhZG9oYXJleTAxNEBnbWFpbC5jb20",
  linkedin: "https://www.linkedin.com/in/saumya-doharey-0b3109312",
  instagram: "https://www.instagram.com/saumya.04/",
};

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Contact and social links">
      <div className="site-footer-cta">
        <p className="site-footer-eyebrow">A NOTE BEFORE YOU GO</p>
        <div className="site-footer-cta-row">
          <h2>Have something in mind? <span>Let’s connect.</span></h2>
          <div className="site-footer-actions">
            <motion.a
              className="site-footer-action"
              href={footerConfig.email}
              whileHover={{ y: -2 }}
              whileFocus={{ y: -2 }}
            >
              <Mail size={15} strokeWidth={1.7} aria-hidden="true" />
              EMAIL ME
              <ArrowUpRight size={13} aria-hidden="true" />
            </motion.a>
            <motion.a
              className="site-footer-action"
              href={footerConfig.calendar}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileFocus={{ y: -2 }}
            >
              <CalendarDays size={15} strokeWidth={1.7} aria-hidden="true" />
              BOOK A TIME
              <ArrowUpRight size={13} aria-hidden="true" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <nav className="site-footer-socials" aria-label="Social media">
          <a href={footerConfig.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="site-footer-social-glyph" aria-hidden="true">in</span>
            LINKEDIN
          </a>
          <a href={footerConfig.instagram} target="_blank" rel="noopener noreferrer">
            <span className="site-footer-social-glyph site-footer-instagram-glyph" aria-hidden="true">◎</span>
            INSTAGRAM
          </a>
        </nav>
        <span className="site-footer-credit">© {new Date().getFullYear()} SAUMYA DOHAREY</span>
        <a className="site-footer-backtop" href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
