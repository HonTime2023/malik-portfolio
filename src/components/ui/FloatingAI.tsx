"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, CornerDownLeft, Sparkles, User, X } from "lucide-react";
import { useChat } from "@/context/ChatContext";
import { siteConfig } from "@/config/siteData";
import { cn } from "@/lib/utils";

export function FloatingAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, loading, send } = useChat();
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (open && el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex h-[460px] w-[88vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between border-b border-brand-border bg-brand-surface/30 px-4 py-3">
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-muted">
                <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
                Ask {siteConfig.aiName}
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-brand-muted hover:text-brand-text">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex gap-2", m.role === "user" && "flex-row-reverse")}>
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                      m.role === "user" ? "bg-brand-border" : "bg-brand-accent/15"
                    )}
                  >
                    {m.role === "user" ? (
                      <User className="h-3 w-3 text-brand-text" />
                    ) : (
                      <Bot className="h-3 w-3 text-brand-accent" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-xs leading-relaxed",
                      m.role === "user" ? "bg-brand-accent text-brand-bg" : "bg-brand-bg-soft text-brand-text/90"
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-1.5 pl-8">
                  <span className="h-1 w-1 animate-bounce rounded-full bg-brand-accent [animation-delay:-0.2s]" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-brand-accent" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-brand-accent [animation-delay:0.2s]" />
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
                setInput("");
              }}
              className="flex items-center gap-2 border-t border-brand-border px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent text-xs text-brand-text placeholder:text-brand-muted focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex items-center gap-1 rounded-md bg-brand-accent px-3 py-1.5 text-[11px] font-bold text-brand-bg disabled:opacity-40"
              >
                <CornerDownLeft className="h-3 w-3" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close AI chat" : "Ask Time, the AI on this site"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-brand-bg shadow-lg shadow-black/30"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <Sparkles className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
