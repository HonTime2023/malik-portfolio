"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, CornerDownLeft, Sparkles, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What is Malik's tech stack?",
  "Tell me about AIDER.",
  "How do I reach Malik?",
  "What does he research?",
];

export function AskAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm trained on Malik's portfolio, projects and research. Ask me anything about his work, how he thinks, or how to reach him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "Something went wrong." }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Network hiccup — try again, or email belloayopelumi@gmail.com." },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }

  return (
    <section id="ask-ai" className="space-y-8">
      <SectionHeading
        eyebrow="Query the Brain"
        title="Ask my AI about me."
        description="A small language model, grounded only in what's on this page — my work, my thinking, and how to reach me."
      />

      <div className="rounded-2xl border border-brand-border bg-brand-surface/20">
        <div className="flex items-center gap-2 border-b border-brand-border px-5 py-3.5">
          <Sparkles className="h-4 w-4 text-brand-accent" />
          <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">
            malik-ai · grounded assistant
          </span>
        </div>

        <div className="max-h-[420px] space-y-4 overflow-y-auto px-5 py-5">
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
                  m.role === "user"
                    ? "bg-brand-accent text-brand-bg"
                    : "bg-brand-bg-soft text-brand-text/90"
                )}
              >
                {m.content}
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
          <div ref={endRef} />
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
          }}
          className="flex items-center gap-3 border-t border-brand-border px-5 py-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about his projects, stack, research, or how to reach him…"
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
