"use client";

import { motion } from "framer-motion";
import { experience, education, certifications } from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <SectionHeading
        eyebrow="Career Trajectory"
        title="Experience & Impact"
        description="From biology first-class honours to fintech AI — a path built on statistics, research rigor and production engineering."
      />

      <div className="relative space-y-8 border-l border-brand-border pl-8">
        {experience.map((item, idx) => (
          <motion.div
            key={item.role + item.period}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative"
          >
            <span
              className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                item.current ? "bg-brand-accent" : "bg-brand-border"
              }`}
            />
            <p className="font-mono text-xs uppercase tracking-wider text-brand-accent">{item.period}</p>
            <h3 className="mt-1 font-heading text-lg font-bold">{item.role}</h3>
            <p className="text-sm font-medium text-brand-text/80">
              {item.org} · <span className="text-brand-muted">{item.location}</span>
            </p>
            <ul className="mt-3 space-y-1.5">
              {item.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm leading-relaxed text-brand-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-border" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-brand-border bg-brand-surface/20 p-6">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-accent">Education</h3>
          <div className="mt-4 space-y-4">
            {education.map((e) => (
              <div key={e.degree}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-brand-muted">{e.period}</p>
                <p className="text-sm font-semibold text-brand-text">{e.degree}</p>
                <p className="text-xs text-brand-muted">{e.org}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-brand-border bg-brand-surface/20 p-6">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-accent">
            Certifications & Registrations
          </h3>
          <ul className="mt-4 space-y-2.5">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-brand-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
