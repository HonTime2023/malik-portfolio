import { siteConfig } from "@/config/siteData";

export function Footer() {
  return (
    <footer className="border-t border-brand-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-brand-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built with precision and purpose.</p>
        <p className="font-mono">Next.js · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
