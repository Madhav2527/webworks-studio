export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  type: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  color: string;
  accentColor: string;
  imageAlt: string;
  featured: boolean;
  isConceptProject: boolean;
}

export const projects: Project[] = [
  {
    id: "velocity",
    slug: "velocity",
    name: "VELOCITY",
    tagline: "Automotive digital experience.",
    type: "Digital Experience",
    year: "2024",
    description:
      "A premium automotive digital experience built around high-performance vehicles, vehicle inventory and enquiry flows. Designed to communicate performance, precision and exclusivity.",
    longDescription:
      "Velocity is an independent concept project exploring how a premium automotive dealership or brand could present its vehicles digitally. The experience prioritises photography, performance data, and friction-free enquiry — reflecting how high-end automotive brands communicate with discerning buyers.",
    tags: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
    color: "#0A0A0A",
    accentColor: "#C8A96E",
    imageAlt: "Velocity automotive digital experience concept",
    featured: true,
    isConceptProject: true,
  },
  {
    id: "noir",
    slug: "noir",
    name: "NOIR",
    tagline: "Premium hospitality website.",
    type: "Hospitality Website",
    year: "2024",
    description:
      "A refined hospitality concept for a premium restaurant — combining atmosphere, menu presentation and reservation enquiry into a single editorial digital experience.",
    longDescription:
      "Noir is an independent concept project exploring how a premium restaurant could create a digital identity that matches the quality of its physical experience. The design prioritises atmosphere over information density — using typography, restraint and considered layout to communicate quality without overstatement.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    color: "#0D0B08",
    accentColor: "#C4A882",
    imageAlt: "Noir premium hospitality website concept",
    featured: true,
    isConceptProject: true,
  },
  {
    id: "nexus",
    slug: "nexus",
    name: "NEXUS",
    tagline: "SaaS dashboard and web application.",
    type: "Web Application",
    year: "2024",
    description:
      "A modern SaaS dashboard concept demonstrating complex data visualisation, multi-section navigation, responsive application layouts and settings interfaces.",
    longDescription:
      "Nexus is an independent concept project exploring the design and development of a modern SaaS dashboard. The focus is on information architecture, data visualisation clarity, and building application interfaces that remain usable and visually coherent as complexity increases.",
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    color: "#080B10",
    accentColor: "#4A8FFF",
    imageAlt: "Nexus SaaS dashboard web application concept",
    featured: true,
    isConceptProject: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
