"use client";

import ReactMarkdown from "react-markdown";

// Only allow safe link/image protocols through — blocks javascript: etc,
// while still letting inline base64 chart images (data:image/...) render.
function sanitizeUrl(url: string) {
  if (url.startsWith("data:image/")) return url;
  if (/^https?:\/\//.test(url) || url.startsWith("mailto:")) return url;
  return "";
}

export function ChatMarkdown({ content, small }: { content: string; small?: boolean }) {
  return (
    <ReactMarkdown
      urlTransform={sanitizeUrl}
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
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={typeof src === "string" ? src : undefined}
            alt={alt ?? "chart"}
            className="my-1 max-w-full rounded-lg border border-brand-border"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
