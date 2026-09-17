"use client";

import { useEffect, useRef, useState } from "react";
import { Newspaper, ArrowUpRight } from "lucide-react";

type NewsItem = { title: string; link: string; source: string; date: string };

const REFRESH_MS = 5 * 60 * 1000;

export function NewsFeed() {
  const [items, setItems] = useState<NewsItem[] | null>(null);
  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);

  useEffect(() => {
    function load() {
      fetch("/api/news")
        .then((r) => r.json())
        .then((d) => setItems(d.items ?? []));
    }
    load();

    const id = setInterval(() => {
      load(); // re-fetch (picks up genuinely new stories as they publish)
      idxRef.current += 1; // and rotate which headline is shown
      setIdx(idxRef.current);
    }, REFRESH_MS);
    return () => clearInterval(id);
  }, []);

  const item = items && items.length > 0 ? items[idx % items.length] : items?.[0];

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
        <p className="font-heading text-[11px] font-medium tracking-wide text-brand-muted">
          AI Trends I&apos;m Currently Reading
        </p>
        {items === null && <div className="mt-1 h-3.5 w-4/5 animate-pulse rounded bg-brand-border/50" />}
        {items?.length === 0 && <p className="mt-0.5 text-xs text-brand-muted">Feed unavailable right now.</p>}
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
