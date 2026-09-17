"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SIZE = 22;

function randomArray() {
  return Array.from({ length: SIZE }, () => Math.round(8 + Math.random() * 92));
}

export function SortVisualizer() {
  const [bars, setBars] = useState<{ id: number; value: number }[]>([]);
  const [active, setActive] = useState<[number, number] | null>(null);
  const idsRef = useRef(0);

  useEffect(() => {
    idsRef.current = 0;
    setBars(randomArray().map((value) => ({ id: idsRef.current++, value })));
  }, []);

  useEffect(() => {
    if (bars.length === 0) return;
    let cancelled = false;

    async function bubbleSortLoop() {
      while (!cancelled) {
        // Fresh shuffle to sort
        const arr = randomArray().map((value) => ({ id: idsRef.current++, value }));
        setBars(arr);
        await sleep(500);

        const working = [...arr];
        for (let i = 0; i < working.length - 1 && !cancelled; i++) {
          for (let j = 0; j < working.length - i - 1 && !cancelled; j++) {
            setActive([j, j + 1]);
            await sleep(55);
            if (working[j].value > working[j + 1].value) {
              [working[j], working[j + 1]] = [working[j + 1], working[j]];
              setBars([...working]);
            }
          }
        }
        setActive(null);
        await sleep(1400); // pause on the sorted result
      }
    }

    bubbleSortLoop();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bars.length > 0]);

  return (
    <div className="flex h-56 items-end justify-center gap-1.5 rounded-xl bg-brand-bg-soft p-4">
      {bars.map((bar, idx) => {
        const isActive = active && (idx === active[0] || idx === active[1]);
        return (
          <motion.div
            key={bar.id}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="w-3 rounded-t"
            style={{
              height: `${bar.value}%`,
              backgroundColor: isActive ? "var(--color-brand-accent)" : "var(--color-brand-border)",
            }}
          />
        );
      })}
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
