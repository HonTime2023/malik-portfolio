"use client";

import { useEffect, useState } from "react";

const WORDS = ["weather", "today?", "5 hours", "left."];

export function VoiceWaveAnimation() {
  const [wordIdx, setWordIdx] = useState(0);
  const [heights, setHeights] = useState<number[]>(Array(20).fill(10));

  useEffect(() => {
    const id = setInterval(() => setWordIdx((w) => (w + 1) % WORDS.length), 1400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setHeights(Array.from({ length: 20 }, () => 6 + Math.random() * 34));
    }, 260);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-28 w-full flex-col justify-center gap-3 overflow-hidden rounded-xl bg-brand-bg-soft px-5">
      <div className="flex h-10 items-center justify-center gap-[3px]">
        {heights.map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-brand-accent transition-all duration-200"
            style={{ height: `${h}px`, opacity: 0.5 + (h / 40) * 0.5 }}
          />
        ))}
      </div>
      <p className="text-center font-mono text-[11px] text-brand-muted">
        &ldquo;{WORDS[wordIdx]}&rdquo;
      </p>
    </div>
  );
}
