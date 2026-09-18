"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { projects, projectsNote, type Project } from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const categories: Array<Project["category"] | "All"> = [
  "All",
  "AI Engineering",
  "ML & Data Science",
  "Analytics",
  "Research",
];

function ProjectDetail({ p }: { p: Project }) {
  return (
    <>
      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-brand-accent">
          {p.category} · {p.year}
        </span>
        <h3 className="mt-1 font-heading text-lg font-bold leading-snug">{p.name}</h3>
      </div>

      <p className="text-sm leading-relaxed text-brand-muted">{p.description}</p>

      <div className="flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="rounded border border-brand-border bg-brand-bg-soft px-2.5 py-1 text-[11px] text-brand-muted">
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
    </>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const [activeIdx, setActiveIdx] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  blockRefs.current = [];

  useEffect(() => {
    setActiveIdx(0);
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered.length, active]);

  return (
    <section id="projects" className="space-y-10">
      <SectionHeading
        eyebrow="Featured Systems"
        title="Projects, grouped by the kind of problem they solve."
        description="Shipped systems and research builds — each with the stack, the reasoning, and where to see it work."
      />

      <p className="rounded-lg border border-dashed border-brand-border bg-brand-surface/10 px-4 py-3 text-xs leading-relaxed text-brand-muted">
        {projectsNote}
      </p>

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

      {/* Desktop: cards pinned on the left, detail scrolls on the right — same pattern as launchfar's step-through sections */}
      <div className="hidden lg:grid lg:grid-cols-[300px_1fr] lg:items-start lg:gap-8">
        <div className="sticky top-28 space-y-2">
          {filtered.map((p, idx) => (
            <button
              key={p.name}
              onClick={() =>
                blockRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              className={cn(
                "block w-full rounded-xl border px-4 py-3 text-left transition-all duration-300",
                idx === activeIdx
                  ? "border-brand-accent bg-brand-accent/[0.07] opacity-100"
                  : "border-brand-border bg-transparent opacity-40 hover:opacity-70"
              )}
            >
              <span className="font-mono text-[10px] text-brand-accent">{String(idx + 1).padStart(2, "0")}</span>
              <h4 className="mt-0.5 font-heading text-sm font-bold leading-snug">{p.name}</h4>
              <p className="mt-0.5 text-[11px] text-brand-muted">{p.category}</p>
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {filtered.map((p, idx) => (
            <div
              key={p.name}
              ref={(el) => {
                blockRefs.current[idx] = el;
              }}
              data-idx={idx}
              className={cn(
                "flex min-h-[42vh] flex-col justify-center gap-4 rounded-2xl border p-8 transition-colors duration-300",
                p.featured ? "border-brand-accent/40 bg-brand-accent/[0.06]" : "border-brand-border bg-brand-surface/20"
              )}
            >
              <ProjectDetail p={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/tablet: plain stacked grid */}
      <div className="grid gap-5 lg:hidden md:grid-cols-2">
        {filtered.map((p, idx) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
            className={cn(
              "flex flex-col gap-4 rounded-2xl border p-6",
              p.featured ? "border-brand-accent/40 bg-brand-accent/[0.06]" : "border-brand-border bg-brand-surface/20"
            )}
          >
            <ProjectDetail p={p} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
