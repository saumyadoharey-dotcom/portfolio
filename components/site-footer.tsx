"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Mail } from "lucide-react";

const footerConfig = {
  email: "mailto:saumyadoharey014@gmail.com",
  calendar: "https://calendar.google.com/calendar/u/1?cid=c2F1bXlhZG9oYXJleTAxNEBnbWFpbC5jb20",
  linkedin: "https://www.linkedin.com/in/saumya-doharey-0b3109312",
  instagram: "https://www.instagram.com/saumya.04/",
};

export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Contact and social links">
      <div className="site-footer-hero">
        <h2 className="site-footer-headline">
          Let’s design
          <span>meaningful work together.</span>
        </h2>

        <div className="site-footer-contact-grid">
          <div className="site-footer-contact-item">
            <span className="site-footer-label">Email</span>
            <a className="site-footer-contact-link" href={footerConfig.email}>
              saumya.doharey014@gmail.com
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="site-footer-contact-item">
            <span className="site-footer-label">Call Me / Calendar</span>
            <a className="site-footer-contact-link" href={footerConfig.calendar} target="_blank" rel="noopener noreferrer">
              Book a time
              <CalendarDays size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="site-footer-contact-item">
            <span className="site-footer-label">Social</span>
            <div className="site-footer-social-pills">
              <a href={footerConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in <ArrowUpRight size={11} aria-hidden="true" /></a>
              <a href={footerConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎ <ArrowUpRight size={11} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <nav className="site-footer-socials" aria-label="Social links">
          <a href={footerConfig.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href={footerConfig.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        </nav>
        <span className="site-footer-credit">© {new Date().getFullYear()} SAUMYA DOHAREY</span>
        <a className="site-footer-backtop" href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
