"use client";

import { FileText, Search, Sparkles } from "lucide-react";

const DOCS = 5;

export function RAGAnimation() {
  return (
    <div className="flex h-56 flex-col items-center justify-center gap-4 rounded-xl bg-brand-bg-soft p-4">
      <div className="flex items-center gap-2">
        {Array.from({ length: DOCS }, (_, i) => (
          <div
            key={i}
            className="relative flex h-9 w-7 items-center justify-center rounded border border-brand-border bg-brand-bg"
          >
            <FileText className="h-3.5 w-3.5 text-brand-muted" />
            <span
              className="absolute inset-0 rounded border-2 border-brand-accent opacity-0"
              style={{ animation: `rag-highlight 3s ease-in-out ${i * 0.5}s infinite` }}
            />
          </div>
        ))}
      </div>

      <div className="relative h-10 w-px bg-gradient-to-b from-brand-border to-brand-accent/60">
        <span
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-accent"
          style={{ animation: "rag-travel-down 3s ease-in-out infinite" }}
        />
      </div>

      <div className="flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-2">
        <Search className="h-4 w-4 text-brand-accent" />
        <span className="text-xs font-medium text-brand-text">Retrieve relevant context</span>
      </div>

      <div className="relative h-10 w-px bg-gradient-to-b from-brand-accent/60 to-brand-accent">
        <span
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-accent"
          style={{ animation: "rag-travel-down 3s ease-in-out 1.5s infinite" }}
        />
      </div>

      <div className="flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-brand-bg">
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-bold">Grounded answer</span>
      </div>

      <style>{`
        @keyframes rag-highlight {
          0%, 70%, 100% { opacity: 0; }
          15%, 45% { opacity: 1; }
        }
        @keyframes rag-travel-down {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
