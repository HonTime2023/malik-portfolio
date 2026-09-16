"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { projects, type Project } from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const categories: Array<Project["category"] | "All"> = [
  "All",
  "AI Engineering",
  "ML & Data Science",
  "Analytics",
  "Research",
];

export function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="space-y-10">
      <SectionHeading
        eyebrow="Featured Systems"
        title="Projects, grouped by the kind of problem they solve."
        description="Shipped systems and research builds — each with the stack, the reasoning, and where to see it work."
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
              active === c
                ? "border-brand-accent bg-brand-accent text-brand-bg"
                : "border-brand-border text-brand-muted hover:border-brand-accent/60 hover:text-brand-text"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((p, idx) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
            className={cn(
              "flex flex-col gap-4 rounded-2xl border p-6",
              p.featured
                ? "border-brand-accent/40 bg-brand-accent/[0.06]"
                : "border-brand-border bg-brand-surface/20"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-brand-accent">
                  {p.category} · {p.year}
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold leading-snug">{p.name}</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-brand-muted">{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded border border-brand-border bg-brand-bg-soft px-2.5 py-1 text-[11px] text-brand-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
              {p.status && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-accent">
                  <Clock className="h-3.5 w-3.5" />
                  {p.status}
                </span>
              )}
              {p.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-text hover:text-brand-accent"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
