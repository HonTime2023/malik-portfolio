const BEAMS = [0, 1.7]; // staggered light beams travelling down the spine
const DRIPS = [0, 0.6, 1.3, 2.1, 2.8];

/**
 * The vertical gold spine behind the alternating "roadmap" sections
 * (Metrics, Experience). A soft ever-present base glow, drip dots, and a
 * couple of brighter beams sliding down the full length on a loop.
 */
export function GlowSpine() {
  return (
    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
      {/* soft base glow along the whole line */}
      <div className="animate-spine-pulse absolute inset-0 bg-brand-accent/40 blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/50 to-transparent" />

      {/* bright beams sliding the full length */}
      {BEAMS.map((delay, i) => (
        <span
          key={`beam-${i}`}
          className="animate-beam absolute left-1/2 h-24 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-brand-accent to-transparent blur-[1px] shadow-[0_0_16px_4px_rgba(241,196,15,0.55)]"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}

      {/* small drip dots for texture */}
      {DRIPS.map((delay, i) => (
        <span
          key={`drip-${i}`}
          className="animate-drip absolute left-1/2 h-3 w-1.5 -translate-x-1/2 rounded-full bg-brand-accent shadow-[0_0_8px_2px_rgba(241,196,15,0.6)]"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}
