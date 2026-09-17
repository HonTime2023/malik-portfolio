"use client";

import dynamic from "next/dynamic";

const BrainGraph = dynamic(() => import("./BrainGraph").then((m) => m.BrainGraph), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] items-center justify-center rounded-2xl border border-brand-border bg-brand-bg-soft text-sm text-brand-muted">
      Loading the brain…
    </div>
  ),
});

export function BrainGraphClient() {
  return <BrainGraph />;
}
