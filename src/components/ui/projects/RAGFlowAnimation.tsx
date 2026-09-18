"use client";

import { motion } from "framer-motion";

const docs = [0, 1, 2];

export function RAGFlowAnimation() {
  return (
    <div className="relative flex h-28 w-full items-center justify-between overflow-hidden rounded-xl bg-brand-bg-soft px-5">
      <div className="flex flex-col gap-1.5">
        {docs.map((i) => (
          <motion.div
            key={i}
            className="h-3 w-8 rounded-sm border border-brand-border bg-brand-bg"
            animate={{ x: [0, 46, 46], opacity: [1, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5, times: [0, 0.6, 1] }}
          />
        ))}
      </div>

      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-brand-accent/50 bg-brand-accent/10">
        <motion.div
          className="absolute h-full w-full rounded-full border border-brand-accent"
          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="font-mono text-[9px] uppercase tracking-wider text-brand-accent">Index</span>
      </div>

      <motion.div
        className="h-8 w-16 rounded-lg border border-brand-accent/50 bg-brand-accent/10 px-2 py-1.5"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <div className="h-1 w-full rounded-full bg-brand-accent/40" />
        <div className="mt-1 h-1 w-3/4 rounded-full bg-brand-accent/40" />
        <div className="mt-1 h-1 w-1/2 rounded-full bg-brand-accent/40" />
      </motion.div>
    </div>
  );
}
