"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mail, ArrowUpRight } from "lucide-react";

const footerConfig = {
  email: {
    href: "mailto:saumyadoharey014@gmail.com",
    label: "EMAIL",
    preview: "saumyadoharey014@gmail.com",
  },
  calendar: {
    href: "https://calendar.google.com/calendar/u/1?cid=c2F1bXlhZG9oYXJleTAxNEBnbWFpbC5jb20",
    label: "CALENDAR",
    preview: "Find a time to connect",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/saumya-doharey-0b3109312",
    instagram: "https://www.instagram.com/saumya.04/",
  },
};

const quickLinkMotion = {
  rest: { y: 0 },
  hover: { y: -3 },
};

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Contact and quick links">
      <div className="site-footer-top">
        <a className="site-footer-mark" href="#" aria-label="Back to top">
          s✳
        </a>

        <div className="site-footer-quicklinks">
          <motion.a
            className="site-footer-quicklink"
            href={footerConfig.email.href}
            variants={quickLinkMotion}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
          >
            <span className="site-footer-link-heading">
              <Mail size={15} strokeWidth={1.7} aria-hidden="true" />
              {footerConfig.email.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </span>
            <span className="site-footer-preview">{footerConfig.email.preview}</span>
          </motion.a>

          <motion.a
            className="site-footer-quicklink"
            href={footerConfig.calendar.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={quickLinkMotion}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
          >
            <span className="site-footer-link-heading">
              <CalendarDays size={15} strokeWidth={1.7} aria-hidden="true" />
              {footerConfig.calendar.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </span>
            <span className="site-footer-preview">{footerConfig.calendar.preview}</span>
          </motion.a>
        </div>

        <a className="site-footer-note" href={footerConfig.email.href}>
          <span className="site-footer-note-dot" aria-hidden="true" />
          OPEN TO A GOOD STORY
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      <div className="site-footer-bottom">
        <nav className="site-footer-socials" aria-label="Social media">
          <a href={footerConfig.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="site-footer-social-glyph" aria-hidden="true">in</span>
            LINKEDIN
          </a>
          <a href={footerConfig.socials.instagram} target="_blank" rel="noopener noreferrer">
            <span className="site-footer-social-glyph site-footer-instagram-glyph" aria-hidden="true">◎</span>
            INSTAGRAM
          </a>
        </nav>
        <span className="site-footer-credit">SAUMYA DOHAREY · FILM / STRATEGY / DESIGN</span>
        <a className="site-footer-backtop" href="#" aria-label="Back to top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
