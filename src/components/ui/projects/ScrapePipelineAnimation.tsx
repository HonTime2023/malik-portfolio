"use client";

import { motion } from "framer-motion";

const rows = [0, 1, 2];

export function ScrapePipelineAnimation() {
  return (
    <div className="flex h-28 w-full items-center justify-between overflow-hidden rounded-xl bg-brand-bg-soft px-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border bg-brand-bg font-mono text-[9px] text-brand-muted">
        WEB
      </div>

      <div className="relative h-px flex-1 mx-3 bg-brand-border">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute -top-[3px] h-1.5 w-1.5 rounded-full bg-brand-accent"
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
          />
        ))}
      </div>

      <div className="flex w-24 flex-col gap-1 rounded-lg border border-brand-border bg-brand-bg p-2">
        {rows.map((i) => (
          <motion.div
            key={i}
            className="h-1.5 rounded-full bg-brand-accent/50"
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6 + 0.6, times: [0, 0.4, 1] }}
          />
        ))}
      </div>
    </div>
  );
}
