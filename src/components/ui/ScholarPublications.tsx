"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/siteData";

type ScholarPub = { title: string; link: string; year: string; citedBy: string };

export function ScholarPublications() {
  const [data, setData] = useState<{ connected: boolean; items: ScholarPub[] } | null>(null);

  useEffect(() => {
    fetch("/api/scholar")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ connected: false, items: [] }));
  }, []);

  if (!data) return null;

  return (
    <div className="rounded-2xl border border-dashed border-brand-border bg-brand-surface/10 p-6">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-4 w-4 text-brand-accent" />
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-accent">
          Latest from Google Scholar
        </h3>
      </div>

      {!data.connected ? (
        <p className="mt-3 text-sm text-brand-muted">
          Auto-synced publications will appear here once a Google Scholar profile is set up — for now, see the
          confirmed publications above.
        </p>
      ) : data.items.length === 0 ? (
        <p className="mt-3 text-sm text-brand-muted">No publications found on the Scholar profile yet.</p>
      ) : (
        <ul className="mt-3 space-y-3">
          {data.items.map((pub) => (
            <li key={pub.link || pub.title}>
              <a
                href={pub.link || siteConfig.socials.orcid}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-2 text-sm text-brand-text/90 hover:text-brand-accent"
              >
                <span>
                  {pub.title}
                  {pub.year && <span className="text-brand-muted"> · {pub.year}</span>}
                  {pub.citedBy && <span className="text-brand-muted"> · cited by {pub.citedBy}</span>}
                </span>
                <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
