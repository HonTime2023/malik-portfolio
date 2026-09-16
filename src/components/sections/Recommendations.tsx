"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import { recommendations, siteConfig } from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Recommendations() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Endorsements"
        title="What colleagues and collaborators say."
      />

      {recommendations.length === 0 ? (
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-brand-border bg-brand-surface/10 p-8">
          <p className="max-w-md text-sm leading-relaxed text-brand-muted">
            Recommendations are being collected on LinkedIn and will appear here as they come in.
          </p>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-accent px-4 py-2 text-xs font-bold text-brand-accent hover:bg-brand-accent hover:text-brand-bg"
          >
            View / Leave a Recommendation <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {recommendations.map((r) => (
            <div key={r.name} className="space-y-3 rounded-2xl border border-brand-border bg-brand-surface/20 p-6">
              <Quote className="h-5 w-5 text-brand-accent" />
              <p className="text-sm leading-relaxed text-brand-text/90">&ldquo;{r.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-brand-muted">
                  {r.title} · {r.relationship}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
