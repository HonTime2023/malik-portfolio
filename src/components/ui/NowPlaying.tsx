"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Music2 } from "lucide-react";
import { nowPlaying as fallback } from "@/config/siteData";

type NowPlayingData = {
  connected: boolean;
  playing?: boolean;
  track?: string;
  artist?: string;
  albumArt?: string | null;
  spotifyUrl?: string;
};

const POLL_MS = 30_000;

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    function load() {
      fetch("/api/now-playing")
        .then((r) => r.json())
        .then(setData)
        .catch(() => setData({ connected: false }));
    }
    load();
    const id = setInterval(load, POLL_MS);
    return () => clearInterval(id);
  }, []);

  const isLive = data?.connected && data.playing && data.track;
  const isIdle = data?.connected && !data.playing;
  const track = isLive ? data!.track! : isIdle ? "Not playing right now" : fallback.track;
  const artist = isLive ? data!.artist! : isIdle ? "Check back when the music's on" : fallback.artist;
  const url = isLive ? data!.spotifyUrl! : fallback.spotifyUrl;
  const art = isLive ? data?.albumArt : null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-surface/20 px-4 py-3 transition-colors hover:border-brand-accent/50"
    >
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#1DB954]/15">
        {art ? (
          <Image src={art} alt={track} fill className="object-cover" />
        ) : (
          <Music2 className="h-4 w-4 text-[#1DB954]" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          {isLive && (
            <span className="flex gap-0.5">
              <span className="h-2.5 w-0.5 animate-pulse rounded-full bg-[#1DB954] [animation-delay:-0.3s]" />
              <span className="h-3.5 w-0.5 animate-pulse rounded-full bg-[#1DB954]" />
              <span className="h-2 w-0.5 animate-pulse rounded-full bg-[#1DB954] [animation-delay:-0.15s]" />
            </span>
          )}
          <p className="truncate text-xs font-semibold text-brand-text">{track}</p>
        </div>
        <p className="truncate text-[11px] text-brand-muted">{artist}</p>
      </div>
    </a>
  );
}
