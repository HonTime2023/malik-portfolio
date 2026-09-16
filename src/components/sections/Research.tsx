"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, GraduationCap, Mic2 } from "lucide-react";
import { publications, teaching, siteConfig } from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Research() {
  return (
    <section id="research" className="space-y-10">
      <SectionHeading
        eyebrow="Research & Scholarship"
        title="Published work, and the discipline behind the models."
        description="Peer-reviewed research and conference work in learning science and social research — the same rigor applied to every model shipped."
      />

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          {publications.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex gap-4 rounded-2xl border border-brand-border bg-brand-surface/20 p-5"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                {p.type === "Conference Presentation" ? (
                  <Mic2 className="h-4.5 w-4.5 text-brand-accent" />
                ) : (
                  <BookOpen className="h-4.5 w-4.5 text-brand-accent" />
                )}
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-brand-accent">
                  {p.type} · {p.year}
                </p>
                <h3 className="mt-1 text-sm font-semibold leading-snug text-brand-text">{p.title}</h3>
                <p className="mt-1 text-xs text-brand-muted">{p.venue}</p>
              </div>
            </motion.div>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={siteConfig.socials.orcid}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-border px-4 py-2 text-xs font-semibold text-brand-text hover:border-brand-accent"
            >
              ORCID Profile <ArrowUpRight className="h-3.5 w-3.5 text-brand-accent" />
            </a>
            <a
              href={siteConfig.socials.researchgate}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-border px-4 py-2 text-xs font-semibold text-brand-text hover:border-brand-accent"
            >
              ResearchGate <ArrowUpRight className="h-3.5 w-3.5 text-brand-accent" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-brand-border bg-brand-surface/20 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10">
            <GraduationCap className="h-5 w-5 text-brand-accent" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-bold">Teaching & Mentorship</h3>
          <p className="mt-1 text-sm font-medium text-brand-text/80">
            {teaching.role} · <span className="text-brand-accent">{teaching.org}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">{teaching.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {teaching.topics.map((t) => (
              <span
                key={t}
                className="rounded border border-brand-border bg-brand-bg-soft px-2.5 py-1 text-[11px] text-brand-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={teaching.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:underline"
          >
            Visit Baskenky <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
