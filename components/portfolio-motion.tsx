'use client';

import { useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PortfolioMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const small = window.matchMedia('(max-width: 700px)').matches;
      // Animate content inside sections so anchor positions and document flow stay stable.
      const sections = gsap.utils.toArray<HTMLElement>(
        '.archive-masthead, .archive-credits, .quick-facts, .brand-strip, .profile-grid, .work, .home-main > footer, .detail-hero, .detail-story > section, .detail-pagination, .detail-footer, .work-page-section'
      );
      sections.forEach(section => {
        const targets = section.matches('.work')
          ? section.querySelectorAll('.section-heading, .toolbar')
          : section.matches('.studio-hero')
            ? section.querySelectorAll('.studio-image, .studio-intro > *')
            : Array.from(section.children);
        gsap.from(targets, {
          opacity: 0, y: small ? 16 : 28, duration: .8, stagger: .075,
          ease: 'power2.out', clearProps: 'opacity,transform',
          scrollTrigger: { trigger: section, start: 'top 92%', once: true },
        });
      });
      if (!small && document.querySelector('.studio-hero')) {
        gsap.fromTo('.studio-image img', { scale: 1.08, yPercent: -2 }, {
          scale: 1.02, yPercent: 2, ease: 'none',
          scrollTrigger: { trigger: '.studio-hero', start: 'top top', end: 'bottom top', scrub: .8 },
        });
      }
    });
    // Filtering, font loading and view switches can move downstream sections.
    let frame = 0;
    const refresh = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => ScrollTrigger.refresh()); };
    const observer = new ResizeObserver(refresh);
    document.querySelectorAll('main').forEach(main => observer.observe(main));
    return () => { observer.disconnect(); cancelAnimationFrame(frame); media.revert(); };
  }, [pathname]);
  return <MotionConfig reducedMotion="user" transition={{ duration: .35, ease: [.22, 1, .36, 1] }}>{children}</MotionConfig>;
}
