"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "-_~=+*!@#%&^";

interface ScrambleTextProps {
  text: string;       // Initial EN text
  scrambleTo: string; // Target PT-BR text
  delay?: number;     // Delay before scrambling starts (ms)
  className?: string; // CSS classes
}

export function ScrambleText({ text, scrambleTo, delay = 500, className = "" }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    // Start with initial text
    setDisplay(text);

    // Wait for delay
    timeout = setTimeout(() => {
      let iteration = 0;
      const maxIterations = 15; // Duration of scramble effect

      interval = setInterval(() => {
        setDisplay((prev) => {
          return scrambleTo
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return scrambleTo[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });

        if (iteration >= scrambleTo.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2; // Speed of reveal
      }, 30); // Speed of scramble updates

    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, scrambleTo, delay]);

  return (
    <span ref={elementRef} className={className}>
      {display}
    </span>
  );
}
