"use client";

import { useEffect, useState } from "react";
import { Newspaper, ArrowUpRight } from "lucide-react";

type NewsItem = { title: string; link: string; source: string; date: string };

export function NewsFeed() {
  const [items, setItems] = useState<NewsItem[] | null>(null);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((d) => setItems(d.items ?? []))
      .catch(() => setItems([]));
  }, []);

  return (
    <div className="rounded-xl border border-brand-border bg-brand-surface/20 px-4 py-3">
      <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-brand-muted">
        <Newspaper className="h-3.5 w-3.5 text-brand-accent" />
        Latest in AI / ML / Data
      </div>
      <div className="space-y-1.5">
        {!items && (
          <>
            <div className="h-3.5 w-full animate-pulse rounded bg-brand-border/50" />
            <div className="h-3.5 w-4/5 animate-pulse rounded bg-brand-border/50" />
          </>
        )}
        {items?.length === 0 && <p className="text-xs text-brand-muted">Feed unavailable right now.</p>}
        {items?.slice(0, 3).map((item) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-1.5 text-xs leading-snug text-brand-text/90 hover:text-brand-accent"
          >
            <span className="line-clamp-1">{item.title}</span>
            <ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  );
}
