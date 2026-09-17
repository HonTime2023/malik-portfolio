"use client";

import { motion } from "framer-motion";
import { Award, Download, GraduationCap, HandHeart, Users } from "lucide-react";
import {
  experience,
  education,
  certifications,
  communities,
  volunteering,
  kaggleBadges,
  siteConfig,
  type CarouselItem,
} from "@/config/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";

const educationItems: CarouselItem[] = education.map((e) => ({
  title: e.degree,
  subtitle: `${e.org} · ${e.period}`,
  icon: "book",
}));

const certificationItems: CarouselItem[] = certifications.map((c) => ({
  title: c.title,
  subtitle: `${c.issuer}${c.date ? ` · ${c.date}` : ""}`,
  icon: "star",
  url: c.url,
}));

const communityItems: CarouselItem[] = communities.map((c) => ({
  title: c.title,
  subtitle: c.issuer,
  icon: "shield",
  url: c.url,
}));

const volunteeringItems: CarouselItem[] = volunteering.map((v) => ({
  title: v.role,
  subtitle: `${v.org} · ${v.period}`,
  icon: "footprints",
}));

export function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionHeading
          eyebrow="Career Trajectory"
          title="Experience & Impact"
          description="From biology first-class honours to fintech AI — a path built on statistics, research rigor and production engineering."
        />
        <a
          href={siteConfig.cvUrl}
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-md border border-brand-accent px-4 py-2 text-xs font-bold text-brand-accent hover:bg-brand-accent hover:text-brand-bg"
        >
          <Download className="h-3.5 w-3.5" />
          Download Full CV
        </a>
      </div>

      <div className="relative space-y-8 border-l border-brand-border pl-8">
        {experience.map((item, idx) => (
          <motion.div
            key={item.role + item.period}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative"
          >
            <span
              className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                item.current ? "bg-brand-accent" : "bg-brand-border"
              }`}
            />
            <p className="font-mono text-xs uppercase tracking-wider text-brand-accent">{item.period}</p>
            <h3 className="mt-1 font-heading text-lg font-bold">{item.role}</h3>
            <p className="text-sm font-medium text-brand-text/80">
              {item.org} · <span className="text-brand-muted">{item.location}</span>
            </p>
            <ul className="mt-3 space-y-1.5">
              {item.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm leading-relaxed text-brand-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-border" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-text/90">
          <GraduationCap className="h-4 w-4 text-brand-accent" /> Education
        </h3>
        <Carousel items={educationItems} icon={GraduationCap} />
      </div>

      <div className="space-y-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-text/90">
          <Award className="h-4 w-4 text-brand-accent" /> Certifications
        </h3>
        <Carousel items={certificationItems} icon={Award} />
        <p className="text-xs text-brand-muted">Kaggle badges: {kaggleBadges.join(" · ")}</p>
      </div>

      <div className="space-y-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-text/90">
          <Users className="h-4 w-4 text-brand-accent" /> Communities
        </h3>
        <Carousel items={communityItems} icon={Users} />
      </div>

      <div className="space-y-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-brand-text/90">
          <HandHeart className="h-4 w-4 text-brand-accent" /> Volunteering & Leadership
        </h3>
        <Carousel items={volunteeringItems} icon={HandHeart} />
      </div>
    </section>
  );
}
