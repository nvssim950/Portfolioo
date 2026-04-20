export const PROFILE = {
  name: "Nassim Baheddi",
  short: "Nassim",
  initials: "nb",
  role: "Automation · Agents · Web · UI/UX",
  tagline: "Building automations & AI agents that actually ship.",
  subhead:
    "I build n8n flows, agents, and full-stack web apps end-to-end, for founders who want output, not opinions.",
  location: "Algiers, Algeria",
  timezone: "Africa/Algiers",
  school: "École Nationale Supérieure d'Informatique (ESI), Algiers",
  schoolShort: "ESI Algiers, 3rd year",
  email: "nassimbaheddi@gmail.com",
  whatsapp: "+21356156564150",
  socials: {
    github: "https://github.com/nvssim950",
    linkedin: "https://www.linkedin.com/in/nassim-baheddi-079143335",
    x: "https://x.com/BaheddiN52174",
    reddit: "https://www.reddit.com/user/Rayziro/",
  },
} as const;

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type StackItem = { name: string; slug: string };

export const STACK: ReadonlyArray<StackItem> = [
  { name: "n8n", slug: "n8n" },
  { name: "OpenAI", slug: "openai" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "LangChain", slug: "langchain" },
  { name: "Make", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Figma", slug: "figma" },
  { name: "Postgres", slug: "postgresql" },
  { name: "Supabase", slug: "supabase" },
  { name: "Python", slug: "python" },
  { name: "Vercel", slug: "vercel" },
];

export const SERVICES = [
  {
    id: "automation",
    title: "Agents & Automation",
    blurb:
      "I build custom workflows that move data, qualify leads, and run ops while you sleep. End-to-end in n8n, Make, or a custom agent."
  },
  {
    id: "web",
    title: "Web Development",
    blurb:
      "I build production-grade web apps and marketing sites with Next.js. Fast, accessible, and easy for your team to keep updated."
  },
  {
    id: "design",
    title: "UI / UX Design",
    blurb:
      "I design interfaces with hierarchy, restraint, and a point of view, from a single landing page to a full product design system."
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Discover",
    blurb: "30-min call. I map the bottleneck, the goal, and what success looks like in numbers.",
  },
  {
    n: "02",
    title: "Design",
    blurb: "I scope a clear plan: stack, architecture, screens, milestones, and a fixed price.",
  },
  {
    n: "03",
    title: "Build",
    blurb: "I send async updates every few days. Working previews from week one. No black box.",
  },
  {
    n: "04",
    title: "Launch",
    blurb: "I deploy, document, and hand it off. Two weeks of free tweaks afterward.",
  },
] as const;

export type ProjectKind = "automation" | "agent" | "web" | "design";

export const PROJECTS: ReadonlyArray<{
  id: string;
  kind: ProjectKind;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  href: string;
}> = [
  {
    id: "lead-qualifier",
    kind: "automation",
    title: "Lead Qualification Engine",
    blurb:
      "I built an n8n pipeline that scrapes inbound leads, enriches them via Apollo, scores them with GPT-4, and routes them to Slack. Cuts SDR triage time by 80%.",
    tags: ["n8n", "OpenAI", "Apollo", "Slack"],
    year: "2026",
    href: "#",
  },
  {
    id: "research-agent",
    kind: "agent",
    title: "Research Agent for a VC Firm",
    blurb:
      "I built a multi-tool agent that monitors deal flow, pulls SEC filings and news, and drafts a daily memo. Built on LangChain, Claude, and Postgres.",
    tags: ["LangChain", "Claude", "Postgres"],
    year: "2026",
    href: "#",
  },
  {
    id: "saas-dashboard",
    kind: "web",
    title: "Operator",
    blurb:
      "I built a full-stack ops console for a logistics startup. Next.js 15, Supabase, real-time tables, and a design system, delivered in four weeks.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    year: "2025",
    href: "#",
  },
  {
    id: "design-system",
    kind: "design",
    title: "Halo",
    blurb:
      "I designed the identity, web, and a 60-component Figma library for a fintech rebrand. Tokens piped into Tailwind via Style Dictionary.",
    tags: ["Figma", "Tokens", "Brand"],
    year: "2025",
    href: "#",
  },
];
