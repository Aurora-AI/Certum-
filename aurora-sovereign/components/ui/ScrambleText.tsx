import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
  delay?: number;
  trigger?: boolean;
}

export function ScrambleText({
  text,
  className = "",
  scrambleSpeed = 50,
  revealSpeed = 100,
  delay = 0,
  trigger = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    let iterations = 0;
    const maxIterations = text.length * 3; // Ensure enough scrambling before settling

    const startScramble = () => {
      intervalRef.current = window.setInterval(() => {
        setDisplayText((prev) => {
          let result = "";
          for (let i = 0; i < text.length; i++) {
            if (i < iterations / 3) {
              result += text[i];
            } else {
              result += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          return result;
        });

        iterations++;

        if (iterations / 3 > text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(text);
        }
      }, scrambleSpeed);
    };

    if (delay > 0) {
      timeoutRef.current = window.setTimeout(startScramble, delay);
    } else {
      startScramble();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, trigger, scrambleSpeed, revealSpeed, delay]);

  return <span className={className}>{displayText}</span>;
}
