"use client";

import { useEffect, useState } from "react";
import { Mic } from "lucide-react";

const PHRASE = "hey maya, what's the weather?";
const BARS = 28;

export function ASRAnimation() {
  const [heights, setHeights] = useState<number[]>(Array(BARS).fill(20));
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const waveId = setInterval(() => {
      setHeights(Array.from({ length: BARS }, () => 15 + Math.random() * 85));
    }, 140);

    const typeId = setInterval(() => {
      i++;
      if (i > PHRASE.length) {
        i = 0;
      }
      setTyped(PHRASE.slice(0, i));
    }, 110);

    return () => {
      clearInterval(waveId);
      clearInterval(typeId);
    };
  }, []);

  return (
    <div className="flex h-56 flex-col items-center justify-center gap-5 rounded-xl bg-brand-bg-soft p-4">
      <div className="flex h-16 items-center justify-center rounded-full bg-brand-accent/10 px-4">
        <Mic className="h-5 w-5 text-brand-accent" />
      </div>
      <div className="flex h-14 items-end gap-[3px]">
        {heights.map((h, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-brand-accent transition-all duration-150"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="min-h-[20px] rounded-lg border border-brand-border bg-brand-bg px-3 py-1.5 font-mono text-xs text-brand-text">
        {typed}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
}
