"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, CornerDownLeft, Sparkles, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChatMarkdown } from "@/components/ui/ChatMarkdown";
import { useChat } from "@/context/ChatContext";
import { siteConfig } from "@/config/siteData";
import { cn } from "@/lib/utils";

const suggestions = [
  "What's your tech stack?",
  "Tell me about AIDER.",
  "How do I reach you?",
  "What do you research?",
];

export function AskAI() {
  const { messages, loading, send } = useChat();
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  return (
    <section id="ask-ai" className="space-y-8">
      <SectionHeading
        eyebrow="Query the Brain"
        title={`Talk to ${siteConfig.aiName}.`}
        description={`${siteConfig.aiName} is trained on a slice of my brain — my work, my thinking, my way of answering — and replies as me, in first person. It's not the full me, honestly probably not even 10% of me, but it tries hard with what it's got. Find it again anytime via the floating icon.`}
      />

      <div className="rounded-2xl border border-brand-border bg-brand-surface/20">
        <div className="flex items-center gap-2 border-b border-brand-border px-5 py-3.5">
          <Sparkles className="h-4 w-4 text-brand-accent" />
          <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">
            {siteConfig.aiName.toLowerCase()} · a partial replica of me, doing its best
          </span>
        </div>

        <div ref={listRef} className="max-h-[420px] space-y-4 overflow-y-auto px-5 py-5">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex gap-3", m.role === "user" && "flex-row-reverse")}
            >
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                  m.role === "user" ? "bg-brand-border" : "bg-brand-accent/15"
                )}
              >
                {m.role === "user" ? (
                  <User className="h-3.5 w-3.5 text-brand-text" />
                ) : (
                  <Bot className="h-3.5 w-3.5 text-brand-accent" />
                )}
              </div>
              <div
                className={cn(
                  "max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed",
                  m.role === "user" ? "bg-brand-accent text-brand-bg" : "bg-brand-bg-soft text-brand-text/90"
                )}
              >
                {m.role === "assistant" ? <ChatMarkdown content={m.content} /> : m.content}
              </div>
            </motion.div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 pl-10 text-xs text-brand-muted">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-accent [animation-delay:-0.2s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-accent" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-accent [animation-delay:0.2s]" />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 px-5 pb-3">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="rounded-full border border-brand-border px-3 py-1.5 text-[11px] text-brand-muted transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              {s}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
            setInput("");
          }}
          className="flex items-center gap-3 border-t border-brand-border px-5 py-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my projects, stack, research, or how to reach me…"
            className="flex-1 bg-transparent text-sm text-brand-text placeholder:text-brand-muted focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="flex items-center gap-1.5 rounded-md bg-brand-accent px-4 py-2 text-xs font-bold text-brand-bg disabled:opacity-40"
          >
            Ask <CornerDownLeft className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
