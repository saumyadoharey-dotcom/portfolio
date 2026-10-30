"use client";

import { useEffect, useState } from "react";

export default function TypewriterIntro() {
  const name = "Saumya Doharey";
  const [visibleCount, setVisibleCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const startTimer = setTimeout(() => {
      typeNext(0);
    }, 700);

    function typeNext(index: number) {
      setVisibleCount(index + 1);

      if (index + 1 < name.length) {
        timers.push(setTimeout(() => typeNext(index + 1), 115));
      } else {
        timers.push(
          setTimeout(() => {
            setLeaving(true);
            timers.push(setTimeout(() => setFinished(true), 950));
          }, 1100),
        );
      }
    }

    return () => {
      clearTimeout(startTimer);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (finished) return null;

  return (
    <div
      className={`typewriter-intro ${leaving ? "typewriter-intro--leaving" : ""}`}
      role="status"
      aria-label="Saumya Doharey"
    >
      <div className="typewriter-intro__name">
        {name.slice(0, visibleCount)}
        <span className="typewriter-intro__cursor" aria-hidden="true">|</span>
      </div>
    </div>
  );
}
