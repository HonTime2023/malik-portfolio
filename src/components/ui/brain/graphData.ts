import {
  siteConfig,
  experience,
  projects,
  capabilities,
  researchInterests,
  publications,
  education,
  hobbies,
  volunteering,
} from "@/config/siteData";

export type GraphNode = {
  id: string;
  label: string;
  group: "root" | "category" | "leaf";
  category: string;
  detail?: string;
  val: number;
};

export type GraphLink = { source: string; target: string };

const CATEGORY_COLORS: Record<string, string> = {
  Experience: "#7fb99a",
  Projects: "#f1c40f",
  Research: "#c77dff",
  Skills: "#81b1d5",
  Hobbies: "#f4a259",
  Education: "#e07a5f",
  Philosophy: "#f7dc6f",
  Volunteering: "#9adbb0",
};

export function categoryColor(category: string) {
  return CATEGORY_COLORS[category] ?? "#f1c40f";
}

export function buildGraphData(): { nodes: GraphNode[]; links: GraphLink[] } {
  const nodes: GraphNode[] = [
    { id: "root", label: siteConfig.shortName, group: "root", category: "root", val: 22 },
  ];
  const links: GraphLink[] = [];

  const categories = ["Experience", "Projects", "Research", "Skills", "Hobbies", "Education", "Philosophy", "Volunteering"];
  categories.forEach((cat) => {
    nodes.push({ id: `cat-${cat}`, label: cat, group: "category", category: cat, val: 10 });
    links.push({ source: "root", target: `cat-${cat}` });
  });

  experience.slice(0, 6).forEach((e, i) => {
    const id = `exp-${i}`;
    nodes.push({ id, label: e.role, group: "leaf", category: "Experience", detail: e.org, val: 4 });
    links.push({ source: "cat-Experience", target: id });
  });

  projects.forEach((p, i) => {
    const id = `proj-${i}`;
    nodes.push({ id, label: p.name.split("—")[0].trim(), group: "leaf", category: "Projects", detail: p.category, val: 5 });
    links.push({ source: "cat-Projects", target: id });
  });

  researchInterests.forEach((r, i) => {
    const id = `res-${i}`;
    nodes.push({ id, label: r.title, group: "leaf", category: "Research", detail: "Research interest", val: 4 });
    links.push({ source: "cat-Research", target: id });
  });
  publications.forEach((p, i) => {
    const id = `pub-${i}`;
    nodes.push({ id, label: p.title.split(":")[0].slice(0, 40), group: "leaf", category: "Research", detail: p.venue, val: 3 });
    links.push({ source: "cat-Research", target: id });
  });

  capabilities.forEach((c, i) => {
    const id = `skill-${i}`;
    nodes.push({ id, label: c.title, group: "leaf", category: "Skills", detail: c.tech.join(", "), val: 5 });
    links.push({ source: "cat-Skills", target: id });
  });

  [...hobbies.movies.slice(0, 4), ...hobbies.relax, ...hobbies.books.slice(0, 4)].forEach((h, i) => {
    const id = `hobby-${i}`;
    nodes.push({ id, label: h.title, group: "leaf", category: "Hobbies", detail: h.subtitle, val: 3 });
    links.push({ source: "cat-Hobbies", target: id });
  });

  education.forEach((e, i) => {
    const id = `edu-${i}`;
    nodes.push({ id, label: e.degree.split(",")[0], group: "leaf", category: "Education", detail: e.org, val: 4 });
    links.push({ source: "cat-Education", target: id });
  });

  siteConfig.philosophy.forEach((p, i) => {
    const id = `phil-${i}`;
    nodes.push({ id, label: `${p.text} ${p.highlight}`, group: "leaf", category: "Philosophy", detail: "Working philosophy", val: 4 });
    links.push({ source: "cat-Philosophy", target: id });
  });

  volunteering.forEach((v, i) => {
    const id = `vol-${i}`;
    nodes.push({ id, label: v.role, group: "leaf", category: "Volunteering", detail: v.org, val: 3 });
    links.push({ source: "cat-Volunteering", target: id });
  });

  return { nodes, links };
}
