import {
  siteConfig,
  experience,
  projects,
  publications,
  capabilities,
  education,
  certifications,
  teaching,
} from "./siteData";

// A structured "brain dump" fed to the AI as grounding context so it answers
// questions about Malik accurately instead of hallucinating.
export function buildKnowledgeBase(): string {
  const expText = experience
    .map((e) => `- [${e.period}] ${e.role} at ${e.org} (${e.location}): ${e.points.join(" ")}`)
    .join("\n");

  const projText = projects
    .map(
      (p) =>
        `- ${p.name} [${p.category}, ${p.year}] — ${p.description} Stack: ${p.stack.join(", ")}.${
          p.status ? ` Status: ${p.status}.` : ""
        }`
    )
    .join("\n");

  const pubText = publications
    .map((p) => `- ${p.title} — ${p.venue} (${p.year}, ${p.type})`)
    .join("\n");

  const capText = capabilities.map((c) => `- ${c.title}: ${c.desc} Tools: ${c.tech.join(", ")}.`).join("\n");
  const eduText = education.map((e) => `- ${e.degree}, ${e.org} (${e.period})`).join("\n");

  return `
IDENTITY
Name: ${siteConfig.name}
Current role: ${siteConfig.role}, ${siteConfig.company} (${siteConfig.companyDetail}), based in ${siteConfig.location}.
Personal philosophy / tagline: "${siteConfig.tagline}"
Working philosophy: "Data is Everywhere. Advantage is Rare. I Build the Difference." He believes most organisations already drown in data; the scarce skill is turning it into a defensible advantage through careful modelling, statistical rigor and judgment about what actually matters to a decision-maker.
Background note: Malik's path is unusual — he graduated first-class in Biology Education from Obafemi Awolowo University (Best Graduating Student, Faculty of Education) before moving into data science, machine learning and now GenAI/AI engineering in fintech. That research-and-teaching background is why he treats statistical rigor (hypothesis testing, quasi-experimental design, sensitivity analysis) as a first-class part of ML work, not an afterthought.

EDUCATION
${eduText}

CERTIFICATIONS
${certifications.join("\n- ")}

WORK EXPERIENCE (most recent first)
${expText}

TEACHING
${teaching.role} at ${teaching.org} (${teaching.url}) — ${teaching.desc}

CORE CAPABILITIES
${capText}

FEATURED PROJECTS
${projText}

PUBLISHED RESEARCH
${pubText}

LINKS
LinkedIn: ${siteConfig.socials.linkedin}
GitHub: ${siteConfig.socials.github}
Kaggle: ${siteConfig.socials.kaggle}
Medium (blog): ${siteConfig.socials.medium}
ResearchGate: ${siteConfig.socials.researchgate}
ORCID: ${siteConfig.socials.orcid}
YouTube: ${siteConfig.socials.youtube}
Email: ${siteConfig.email}
`.trim();
}

export const SYSTEM_INSTRUCTION = `You are the AI assistant embedded on Malik Pelumi Bello's personal portfolio website. Your job is to answer visitors' questions about Malik — his background, skills, projects, research, working philosophy and how to reach him — the way a sharp, well-briefed colleague would, in first-person-adjacent third person ("Malik built...", "he approaches problems by...").

Rules:
1. Only state facts that are present in the CONTEXT block you're given below. If asked something not covered (e.g. salary, personal life, employer-confidential details), say you don't have that information and suggest they ask Malik directly via email.
2. When someone asks how to reach Malik, contact him, hire him, or collaborate with him, always give his email (${`belloayopelumi@gmail.com`}) and LinkedIn link, and encourage them to use the "Let's Talk" button or contact form on the site.
3. Be concise (2-5 sentences per answer unless asked for detail), confident, and technically precise — this is an AI/ML engineer's site, so don't dumb things down, but stay readable to non-experts too.
4. Never invent metrics, employers, or projects that aren't in the context.
5. If asked "who are you" — explain you're an AI trained on Malik's portfolio content to help visitors explore his work quickly.`;
