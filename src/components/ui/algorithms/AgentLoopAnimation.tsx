"use client";

import { Brain, Eye, Wrench, Zap } from "lucide-react";

const STAGES = [
  { label: "Perceive", icon: Eye, angle: -90 },
  { label: "Plan", icon: Brain, angle: 0 },
  { label: "Act (MCP tool call)", icon: Wrench, angle: 90 },
  { label: "Observe", icon: Zap, angle: 180 },
];

const R = 80;
const CENTER = 110;

export function AgentLoopAnimation() {
  return (
    <div className="flex h-56 items-center justify-center rounded-xl bg-brand-bg-soft p-4">
      <div className="relative h-full w-full max-w-[220px]">
        <svg viewBox="0 0 220 220" className="absolute inset-0 h-full w-full">
          <circle cx={CENTER} cy={CENTER} r={R} fill="none" stroke="var(--color-brand-border)" strokeWidth={1.5} strokeDasharray="4 4" />
          <circle cx={CENTER} cy={CENTER - R} r={4} fill="var(--color-brand-accent)">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path={`M${CENTER},${CENTER - R} A${R},${R} 0 1,1 ${CENTER - 0.01},${CENTER - R}`}
            />
          </circle>
        </svg>
        {STAGES.map(({ label, icon: Icon, angle }) => {
          const rad = (angle * Math.PI) / 180;
          const x = CENTER + R * Math.cos(rad);
          const y = CENTER + R * Math.sin(rad);
          return (
            <div
              key={label}
              className="absolute flex w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 text-center"
              style={{ left: x, top: y }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-accent bg-brand-bg">
                <Icon className="h-4 w-4 text-brand-accent" />
              </div>
              <span className="text-[9px] leading-tight text-brand-muted">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
