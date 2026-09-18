"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/BrandIcons";
import { useChat } from "@/context/ChatContext";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: siteConfig.socials.github, Icon: GithubIcon },
  { label: "YouTube", href: siteConfig.socials.youtube, Icon: YoutubeIcon },
];

const otherLinks = [
  { label: "Kaggle", href: siteConfig.socials.kaggle },
  { label: "Medium (Blog)", href: siteConfig.socials.medium },
  { label: "Google Scholar", href: siteConfig.socials.scholar },
  { label: "ResearchGate", href: siteConfig.socials.researchgate },
  { label: "ORCID", href: siteConfig.socials.orcid },
  { label: "All Links (Linktree)", href: siteConfig.socials.linktree },
];

export function Connect() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [draftError, setDraftError] = useState("");
  const { send, loading } = useChat();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  async function draftWithTime() {
    setDraftError("");
    const note = form.message.trim();
    if (!note) {
      setDraftError("Jot a quick note above first — what you're building or want to talk about — then let Time turn it into a proper email.");
      return;
    }
    const reply = await send(
      `Draft an email to Malik from me, the visitor. Here's what I want to say, in my own rough words: "${note}". Turn it into a clear, well-organized email in my voice.`
    );
    if (reply) setForm((f) => ({ ...f, message: reply }));
  }

  return (
    <section id="connect" className="space-y-10">
      <SectionHeading
        eyebrow="Let's Talk"
        title="Have a problem worth solving with data?"
        description="Whether it's a production ML system, a GenAI pipeline, or a research collaboration — reach out directly."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="space-y-4 rounded-2xl border border-brand-border bg-brand-surface/20 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-lg border border-brand-border bg-brand-bg-soft px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-accent focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border border-brand-border bg-brand-bg-soft px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-accent focus:outline-none"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="What are you building, or what would you like to talk about?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-brand-border bg-brand-bg-soft px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-accent focus:outline-none"
          />
          {draftError && <p className="text-xs text-brand-accent">{draftError}</p>}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-6 py-3 text-sm font-bold text-brand-bg hover:bg-brand-accent-hover"
            >
              <Mail className="h-4 w-4" />
              Send via Email
            </button>
            <button
              type="button"
              onClick={draftWithTime}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-md border border-brand-accent px-4 py-3 text-sm font-bold text-brand-accent hover:bg-brand-accent hover:text-brand-bg disabled:opacity-50"
            >
              <Sparkles className="h-4 w-4" />
              {loading ? "Drafting…" : `Draft with ${siteConfig.aiName}`}
            </button>
          </div>
          <p className="text-[11px] text-brand-muted">
            Jot a rough note above, then let {siteConfig.aiName} — grounded in Malik&apos;s work — turn it into a clear email before you send it.
          </p>
        </motion.form>

        <div className="space-y-4">
          <div className="rounded-2xl border border-brand-border bg-brand-surface/20 p-6">
            <p className="text-xs uppercase tracking-wider text-brand-muted">Direct</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 block font-heading text-lg font-bold text-brand-accent hover:underline"
            >
              {siteConfig.email}
            </a>
            <p className="mt-1 text-sm text-brand-muted">{siteConfig.location}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-brand-border px-4 py-2 text-xs font-semibold text-brand-text hover:border-brand-accent hover:text-brand-accent"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-surface/20 p-6">
            <p className="text-xs uppercase tracking-wider text-brand-muted">More</p>
            <div className="mt-3 flex flex-col gap-2.5">
              {otherLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-text/90 hover:text-brand-accent"
                >
                  {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
