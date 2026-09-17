"use client";

import { Music2 } from "lucide-react";
import { nowPlaying } from "@/config/siteData";

export function NowPlaying() {
  return (
    <a
      href={nowPlaying.spotifyUrl}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-surface/20 px-4 py-3 transition-colors hover:border-brand-accent/50"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1DB954]/15">
        <Music2 className="h-4 w-4 text-[#1DB954]" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="flex gap-0.5">
            <span className="h-2.5 w-0.5 animate-pulse rounded-full bg-[#1DB954] [animation-delay:-0.3s]" />
            <span className="h-3.5 w-0.5 animate-pulse rounded-full bg-[#1DB954]" />
            <span className="h-2 w-0.5 animate-pulse rounded-full bg-[#1DB954] [animation-delay:-0.15s]" />
          </span>
          <p className="truncate text-xs font-semibold text-brand-text">{nowPlaying.track}</p>
        </div>
        <p className="truncate text-[11px] text-brand-muted">{nowPlaying.artist}</p>
      </div>
    </a>
  );
}
