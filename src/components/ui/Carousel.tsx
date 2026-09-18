"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, ChevronLeft, ChevronRight, Film, Footprints, Mic2, Shield, Star, type LucideIcon } from "lucide-react";
import type { CarouselIcon, CarouselItem } from "@/config/siteData";

const ICONS: Record<CarouselIcon, LucideIcon> = {
  film: Film,
  book: BookOpen,
  mic: Mic2,
  shield: Shield,
  star: Star,
  footprints: Footprints,
};

export function Carousel({ items, icon: fallbackIcon }: { items: CarouselItem[]; icon: LucideIcon }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  }

  return (
    <div className="group/carousel relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 pt-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const Icon = (item.icon && ICONS[item.icon]) || fallbackIcon;
          const content = (
            <motion.div
              whileHover={{ scale: 1.06, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex h-full w-[220px] shrink-0 snap-start flex-col gap-4 rounded-2xl border border-brand-border bg-brand-surface/20 p-5 hover:border-brand-accent/60 hover:shadow-[0_12px_30px_-8px_rgba(241,196,15,0.35)]"
            >
              <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-xl bg-brand-accent/10">
                {item.image ? (
                  <Image src={item.image} alt={item.title} fill sizes="220px" className="object-cover" />
                ) : (
                  <Icon className="h-10 w-10 text-brand-accent" strokeWidth={1.5} />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-brand-text">{item.title}</p>
                {item.subtitle && <p className="mt-0.5 text-xs text-brand-muted">{item.subtitle}</p>}
              </div>
              {item.url && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-accent">
                  View <ArrowUpRight className="h-3 w-3" />
                </span>
              )}
            </motion.div>
          );

          return item.url ? (
            <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="shrink-0">
              {content}
            </a>
          ) : (
            <div key={item.title} className="shrink-0">
              {content}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute -left-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-brand-bg text-brand-muted opacity-0 transition-opacity hover:text-brand-accent group-hover/carousel:opacity-100 sm:flex"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="absolute -right-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-brand-bg text-brand-muted opacity-0 transition-opacity hover:text-brand-accent group-hover/carousel:opacity-100 sm:flex"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
