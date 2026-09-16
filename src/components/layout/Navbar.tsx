"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/siteData";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#ask-ai", label: "Ask My AI" },
  { href: "#connect", label: "Connect" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-brand-border bg-brand-bg/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-accent" />
          </span>
          <span className="font-heading text-xs font-bold tracking-[0.2em] text-brand-text uppercase">
            {siteConfig.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-7 text-xs font-medium tracking-wide text-brand-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="uppercase transition-colors hover:text-brand-accent">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${siteConfig.email}`}
          className="hidden rounded-full border border-brand-accent px-4 py-2 text-xs font-bold text-brand-accent transition-all hover:bg-brand-accent hover:text-brand-bg md:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          className="text-brand-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-border bg-brand-bg px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4 text-sm text-brand-muted">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="uppercase tracking-wide hover:text-brand-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 w-fit rounded-full border border-brand-accent px-4 py-2 text-xs font-bold text-brand-accent"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
