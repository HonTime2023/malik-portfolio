"use client";

import { useRef } from "react";
import { BookOpen, ChevronLeft, ChevronRight, Film, Footprints, Mic2, Shield, Star, type LucideIcon } from "lucide-react";
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
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const Icon = (item.icon && ICONS[item.icon]) || fallbackIcon;
          return (
          <div
            key={item.title}
            className="flex w-[220px] shrink-0 snap-start flex-col gap-4 rounded-2xl border border-brand-border bg-brand-surface/20 p-5"
          >
            <div className="flex h-32 w-full items-center justify-center rounded-xl bg-brand-accent/10">
              <Icon className="h-10 w-10 text-brand-accent" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-text">{item.title}</p>
              {item.subtitle && <p className="mt-0.5 text-xs text-brand-muted">{item.subtitle}</p>}
            </div>
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
