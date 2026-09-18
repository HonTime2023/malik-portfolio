"use client";

import { motion } from "framer-motion";

const WIDTH = 300;
const HEIGHT = 112;
const THRESHOLD_Y = 40;

export function FloodRiskAnimation() {
  return (
    <div className="relative h-28 w-full overflow-hidden rounded-xl bg-brand-bg-soft">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-full w-full">
        <line x1={0} y1={THRESHOLD_Y} x2={WIDTH} y2={THRESHOLD_Y} stroke="#e0674f" strokeWidth={1} strokeDasharray="4 4" opacity={0.7} />
        <text x={WIDTH - 4} y={THRESHOLD_Y - 5} textAnchor="end" className="font-mono" fontSize={8} fill="#e0674f">
          risk threshold
        </text>

        <motion.path
          d={`M0,${HEIGHT} L0,90 C40,70 60,95 100,80 C140,65 160,90 200,75 C240,60 260,85 300,70 L300,${HEIGHT} Z`}
          fill="var(--color-brand-accent)"
          fillOpacity={0.25}
          animate={{
            d: [
              `M0,${HEIGHT} L0,90 C40,70 60,95 100,80 C140,65 160,90 200,75 C240,60 260,85 300,70 L300,${HEIGHT} Z`,
              `M0,${HEIGHT} L0,55 C40,35 60,60 100,45 C140,30 160,55 200,40 C240,28 260,50 300,32 L300,${HEIGHT} Z`,
              `M0,${HEIGHT} L0,90 C40,70 60,95 100,80 C140,65 160,90 200,75 C240,60 260,85 300,70 L300,${HEIGHT} Z`,
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d={`M0,90 C40,70 60,95 100,80 C140,65 160,90 200,75 C240,60 260,85 300,70`}
          fill="none"
          stroke="var(--color-brand-accent)"
          strokeWidth={1.5}
          animate={{
            d: [
              `M0,90 C40,70 60,95 100,80 C140,65 160,90 200,75 C240,60 260,85 300,70`,
              `M0,55 C40,35 60,60 100,45 C140,30 160,55 200,40 C240,28 260,50 300,32`,
              `M0,90 C40,70 60,95 100,80 C140,65 160,90 200,75 C240,60 260,85 300,70`,
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
