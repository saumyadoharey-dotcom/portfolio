
"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text?: string;
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  color?: string;
  cursorColor?: string;
  fontSize?: number;
  alignment?: "left" | "center" | "right";
}

export default function ClassicTypewriterName({
  text = "Saumya Doharey",
  typingSpeed = 120,
  deleteSpeed = 70,
  pauseDuration = 1300,
  loop = true,
  color = "#FFFFFF",
  cursorColor = "#FFFFFF",
  fontSize = 53,
  alignment = "left",
}: TypewriterProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!text) return;

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (visibleCount < text.length) {
        timer = setTimeout(() => {
          setVisibleCount((count) => count + 1);
        }, Math.max(typingSpeed, 16));
      } else if (loop) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (visibleCount > 0) {
        timer = setTimeout(() => {
          setVisibleCount((count) => count - 1);
        }, Math.max(deleteSpeed, 16));
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [
    text,
    visibleCount,
    isDeleting,
    typingSpeed,
    deleteSpeed,
    pauseDuration,
    loop,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 520);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="text"
      aria-label={text}
      style={{
        width: "100%",
        display: "flex",
        justifyContent:
          alignment === "center"
            ? "center"
            : alignment === "right"
            ? "flex-end"
            : "flex-start",
      }}
    >
      <span
        style={{
          color,
          fontSize: `clamp(28px, 5vw, ${fontSize}px)`,
          fontFamily:
            '"Intel One Mono", "SFMono-Regular", Menlo, Monaco, Consolas, monospace',
          whiteSpace: "nowrap",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        {text.slice(0, visibleCount)}
        <span
          aria-hidden="true"
          style={{
            color: cursorColor,
            opacity: cursorVisible ? 0.92 : 0.22,
            marginLeft: 2,
          }}
        >
          █
        </span>
      </span>
    </div>
  );
}
