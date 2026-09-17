"use client";

import { motion } from "framer-motion";
import { metrics } from "@/config/siteData";
import { cn } from "@/lib/utils";

const DRIPS = [0, 0.6, 1.3, 2.1, 2.8];

export function Metrics() {
  return (
    <section className="relative py-4">
      {/* The spine, with drips of light running down it */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-accent/30 to-transparent md:block">
        {DRIPS.map((delay, i) => (
          <span
            key={i}
            className="animate-drip absolute left-1/2 h-3 w-1.5 -translate-x-1/2 rounded-full bg-brand-accent shadow-[0_0_8px_2px_rgba(241,196,15,0.6)]"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <div className="space-y-10 md:space-y-6">
        {metrics.map((m, idx) => {
          const fromRight = idx % 2 === 1;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: fromRight ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "relative flex items-center gap-4 md:w-1/2",
                fromRight ? "md:ml-auto md:flex-row" : "md:flex-row-reverse md:text-right"
              )}
            >
              <span className="hidden h-2 w-2 shrink-0 rounded-full bg-brand-accent shadow-[0_0_10px_3px_rgba(241,196,15,0.5)] md:block" />
              <div className="rounded-2xl border border-brand-border bg-brand-surface/20 px-6 py-4">
                <div className="font-heading text-2xl font-extrabold text-brand-accent sm:text-3xl">{m.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-brand-muted">{m.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
