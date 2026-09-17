"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window` at import time, so it can only ever run in the browser.
const TSPMap = dynamic(() => import("./TSPMap").then((m) => m.TSPMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-[480px] items-center justify-center rounded-2xl border border-brand-border bg-brand-bg-soft text-sm text-brand-muted">
      Loading map…
    </div>
  ),
});

export function TSPMapClient() {
  return <TSPMap />;
}
