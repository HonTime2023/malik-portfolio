"use client";

import { Film, Laugh, BookOpen } from "lucide-react";
import { hobbies } from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";

export function Hobbies() {
  return (
    <section id="hobbies" className="space-y-10">
      <SectionHeading eyebrow="Beyond Work" title="Get to Know Me Through My Hobbies" description={hobbies.intro} />

      <div className="space-y-8">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-brand-text/90">Movies I Love</h3>
          <Carousel items={hobbies.movies} icon={Film} />
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-brand-text/90">What I Do to Relax</h3>
          <Carousel items={hobbies.relax} icon={Laugh} />
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-brand-text/90">Books I Love</h3>
          <Carousel items={hobbies.books} icon={BookOpen} />
        </div>
      </div>
    </section>
  );
}
