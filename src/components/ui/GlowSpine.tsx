const DRIPS = [0, 0.6, 1.3, 2.1, 2.8];

/**
 * The vertical gold spine behind the alternating "roadmap" sections
 * (Metrics, Experience) — a thin line with drips of light falling down it.
 */
export function GlowSpine() {
  return (
    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-accent/30 to-transparent md:block">
      {DRIPS.map((delay, i) => (
        <span
          key={i}
          className="animate-drip absolute left-1/2 h-3 w-1.5 -translate-x-1/2 rounded-full bg-brand-accent shadow-[0_0_8px_2px_rgba(241,196,15,0.6)]"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}
