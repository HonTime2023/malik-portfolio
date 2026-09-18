import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrainGraphClient } from "@/components/ui/brain/BrainGraphClient";
import { siteConfig } from "@/config/siteData";

export function Brain() {
  return (
    <section id="brain" className="space-y-8">
      <SectionHeading
        eyebrow="Query the Brain, Visually"
        title="A slice of what's in my head."
        description={`This is the actual map ${siteConfig.aiName} — the AI trained on part of me, below — answers from: experience, projects, research, skills, hobbies, philosophy, wired together as a living graph instead of a list. It's a fraction of what's actually in my head, but it's real, and it's what ${siteConfig.aiName} draws on when it talks to you.`}
      />
      <BrainGraphClient />
    </section>
  );
}
