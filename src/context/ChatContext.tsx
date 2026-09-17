"use client";

import { createContext, useContext, useRef, useState } from "react";
import { siteConfig } from "@/config/siteData";

export type ChatMessage = { role: "user" | "assistant"; content: string };

type ChatContextValue = {
  messages: ChatMessage[];
  loading: boolean;
  send: (text: string) => Promise<void>;
};

const ChatContext = createContext<ChatContextValue | null>(null);

const WELCOME: ChatMessage = {
  role: "assistant",
  content: `Hi — I'm ${siteConfig.aiName}, trained on Malik's portfolio, projects and research. Ask me anything about his work, how he thinks, or how to reach him.`,
};

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messagesRef.current, { role: "user" as const, content }];
    setMessages(next);
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
        { role: "assistant", content: `Network hiccup — try again, or email ${siteConfig.email}.` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return <ChatContext.Provider value={{ messages, loading, send }}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within a ChatProvider");
  return ctx;
}
