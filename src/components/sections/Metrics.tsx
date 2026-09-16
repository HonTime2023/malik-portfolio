import { metrics } from "@/config/siteData";

export function Metrics() {
  return (
    <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-border bg-brand-border md:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-brand-bg-soft p-5 sm:p-6">
          <div className="font-heading text-2xl font-extrabold text-brand-accent sm:text-3xl">{m.value}</div>
          <div className="mt-1 text-[11px] uppercase tracking-wider text-brand-muted sm:text-xs">{m.label}</div>
        </div>
      ))}
    </section>
  );
}
