"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

export function useScramble(
  targetText: string, 
  initialText: string = "", 
  startDelay: number = 0,
  scrambleDuration: number = 1000
) {
  const [text, setText] = useState(initialText || targetText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let frame = 0;
    const totalFrames = scrambleDuration / 30; // approx 30ms per frame
    
    // Start with initial text
    setText(initialText);

    const timeout = setTimeout(() => {
        intervalRef.current = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            
            if (progress >= 1) {
                setText(targetText);
                if (intervalRef.current) clearInterval(intervalRef.current);
                return;
            }

            const scrambled = targetText
                .split("")
                .map((char, index) => {
                    // If visual position is "done", show real char
                    if (index < progress * targetText.length) {
                        return char;
                    }
                    // Otherwise show random char
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setText(scrambled);
        }, 30);
    }, startDelay);

    return () => {
        clearTimeout(timeout);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [targetText, initialText, startDelay, scrambleDuration]);

  return text;
}
