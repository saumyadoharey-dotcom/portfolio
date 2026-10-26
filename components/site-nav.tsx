"use client";

import type { MouseEvent } from "react";

type SiteNavProps = {
  active?: "home" | "work";
  projectCount: number;
};

function followDestination(path: string, event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();
  window.location.assign(path);
}

export default function SiteNav({
  active = "home",
  projectCount,
}: SiteNavProps) {
  const note =
    active === "work"
      ? `ALL WORK / ${projectCount} PROJECTS`
      : "FILM / STRATEGY / DESIGN";

  return (
    <header className="nav">
      <a
        href="/"
        className="wordmark"
        aria-label="Saumya home"
        onClick={(event) => followDestination("/", event)}
      >
        saumya<span>✳</span>
      </a>
      <nav>
        <a
          href="/work"
          aria-current={active === "work" ? "page" : undefined}
          onClick={(event) => followDestination("/work", event)}
        >
          Index <sup>{projectCount}</sup>
        </a>
        <a
          href="/#about"
          onClick={(event) => followDestination("/#about", event)}
        >
          About
        </a>
        <a
          href="/#tools"
          onClick={(event) => followDestination("/#tools", event)}
        >
          Tools
        </a>
      </nav>
      <span className="nav-note">{note}</span>
    </header>
  );
}
