"use client";

import ReactMarkdown from "react-markdown";

export function ChatMarkdown({ content, small }: { content: string; small?: boolean }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <p className="[&:not(:last-child)]:mb-2">{children}</p>,
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand-accent underline decoration-brand-accent/40 underline-offset-2 hover:decoration-brand-accent"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => <strong className="font-bold text-brand-text">{children}</strong>,
        ul: ({ children }) => <ul className={`list-disc space-y-1 pl-4 ${small ? "" : ""}`}>{children}</ul>,
        li: ({ children }) => <li>{children}</li>,
        code: ({ children }) => (
          <code className="rounded bg-brand-bg px-1 py-0.5 font-mono text-[0.85em]">{children}</code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
