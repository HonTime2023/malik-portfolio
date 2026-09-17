"use client";

import { useEffect, useState } from "react";
import { Newspaper, ArrowUpRight } from "lucide-react";

type NewsItem = { title: string; link: string; source: string; date: string };

const REFRESH_MS = 5 * 60 * 1000;

export function NewsFeed() {
  const [item, setItem] = useState<NewsItem | null | undefined>(undefined);

  useEffect(() => {
    function load() {
      fetch("/api/news")
        .then((r) => r.json())
        .then((d) => setItem(d.items?.[0] ?? null))
        .catch(() => setItem(null));
    }
    load();
    const id = setInterval(load, REFRESH_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <a
      href={item?.link ?? "#"}
      target={item ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-surface/20 px-4 py-3 transition-colors hover:border-brand-accent/50"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
        <Newspaper className="h-4 w-4 text-brand-accent" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-wider text-brand-muted">AI Trends I&apos;m Currently Reading</p>
        {item === undefined && <div className="mt-1 h-3.5 w-4/5 animate-pulse rounded bg-brand-border/50" />}
        {item === null && <p className="mt-0.5 text-xs text-brand-muted">Feed unavailable right now.</p>}
        {item && (
          <div className="group flex items-center gap-1">
            <p className="truncate text-xs font-medium text-brand-text">{item.title}</p>
            <ArrowUpRight className="h-3 w-3 shrink-0 text-brand-muted group-hover:text-brand-accent" />
          </div>
        )}
      </div>
    </a>
  );
}
