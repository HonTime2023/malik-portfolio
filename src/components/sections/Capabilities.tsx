"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Database, LineChart, Route, Sparkles } from "lucide-react";
import { capabilities } from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Brain, Sparkles, Cloud, Database, LineChart, Route];

export function Capabilities() {
  return (
    <section id="capabilities" className="space-y-10">
      <SectionHeading
        eyebrow="Core Capabilities"
        title="Engineered for the full lifecycle — not just the model."
        description="From raw, messy data to a monitored production system, judgment is applied at every step."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
              className="group space-y-4 rounded-2xl border border-brand-border bg-brand-surface/20 p-6 transition-colors hover:border-brand-accent/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10">
                <Icon className="h-5 w-5 text-brand-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">{cap.desc}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {cap.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-brand-border bg-brand-bg-soft px-2.5 py-1 text-[11px] text-brand-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
