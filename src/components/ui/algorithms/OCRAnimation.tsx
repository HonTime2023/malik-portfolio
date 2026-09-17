"use client";

import { FileImage } from "lucide-react";

const LINE_WIDTHS = [80, 55, 70, 40, 65, 50];

export function OCRAnimation() {
  return (
    <div className="flex h-56 items-center justify-center gap-4 rounded-xl bg-brand-bg-soft p-4">
      <div className="relative flex h-40 w-24 flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-brand-border bg-brand-bg p-3">
        <FileImage className="mb-1 h-5 w-5 text-brand-muted" />
        {LINE_WIDTHS.map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-brand-border" style={{ width: `${w}%` }} />
        ))}
        <div
          className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-brand-accent/40 to-transparent"
          style={{ animation: "ocr-scan 2.4s ease-in-out infinite" }}
        />
      </div>

      <div className="flex flex-col gap-1.5 font-mono text-[10px] text-brand-text">
        {LINE_WIDTHS.map((w, i) => (
          <div
            key={i}
            className="h-2 rounded bg-brand-accent/70"
            style={{ width: `${w}px`, animation: `ocr-reveal 2.4s ease-in-out ${i * 0.15}s infinite` }}
          />
        ))}
      </div>

      <style>{`
        @keyframes ocr-scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes ocr-reveal {
          0%, 20% { opacity: 0.15; }
          50%, 100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
