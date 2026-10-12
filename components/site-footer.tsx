"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const footerConfig = {
  email: {
    href: "mailto:you@example.com",
    label: "EMAIL",
    preview: "Inbox · 3 unread",
  },
  calendar: {
    href: "https://calendar.google.com/",
    label: "CALENDAR",
    preview: "Today · 2 events",
  },
  socials: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
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
          sk
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
            rel="noreferrer"
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
          <a href={footerConfig.socials.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={15} strokeWidth={1.7} aria-hidden="true" />
            LINKEDIN
          </a>
          <a href={footerConfig.socials.instagram} target="_blank" rel="noreferrer">
            <Instagram size={15} strokeWidth={1.7} aria-hidden="true" />
            INSTAGRAM
          </a>
        </nav>
        <span className="site-footer-credit">SAUMYA DOHAREY · FILM / STRATEGY / DESIGN</span>
        <a className="site-footer-backtop" href="#" aria-label="Back to top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
