import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrainGraphClient } from "@/components/ui/brain/BrainGraphClient";
import { siteConfig } from "@/config/siteData";

export function Brain() {
  return (
    <section id="brain" className="space-y-8">
      <SectionHeading
        eyebrow="Query the Brain, Visually"
        title="What's actually in my head."
        description={`An interactive map of everything ${siteConfig.aiName} knows about me — experience, projects, research, skills, hobbies, philosophy — as a living graph instead of a list. Same data ${siteConfig.aiName} answers from, just easier to explore with your eyes.`}
      />
      <BrainGraphClient />
    </section>
  );
}
