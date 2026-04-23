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

export type ProjectKind =
  | "automation"
  | "agent"
  | "web"
  | "design"
  | "scraper"
  | "health";

export type Project = {
  id: string;
  slug: string;
  kind: ProjectKind;
  title: string;
  tagline?: string;
  blurb: string;
  description?: string[];
  features?: string[];
  stack?: string[];
  role?: string;
  status?: string;
  tags: string[];
  year: string;
  github?: string;
  url?: string;
  screenshots?: { src: string; alt: string; caption?: string }[];
  video?: string;
};

export const PROJECTS: ReadonlyArray<Project> = [
  {
    id: "redscrape",
    slug: "redscrape",
    kind: "scraper",
    title: "RedScrape",
    tagline: "A clean, professional desktop app to scrape Reddit subreddits by flair.",
    blurb:
      "I built a cross-platform desktop scraper that pulls Reddit posts by flair, streams them live into a results table, and exports clean JSON or CSV no Python setup required.",
    description: [
      "RedScrape is a native-feeling desktop app for grabbing Reddit posts filtered by an exact flair — the sort of task that's tedious in a browser and overkill for a full PRAW setup. The UI stays responsive while a headless Chromium, driven by Playwright, walks old.reddit.com and streams rows into the results table as they land.",
      "Every knob is exposed in the form: subreddit, flair, sort, time range, limit, and the exact set of fields to extract (title, author, score, body, GitHub links pulled from post bodies, and more). Results stream live with a progress bar, a log tab, and a Stop button that preserves whatever was scraped so far.",
      "I packaged it with PyInstaller and wired a GitHub Actions workflow that builds standalone binaries for Windows, macOS, and Linux on every version tag, users download and run, no Python install needed.",
    ],
    
    stack: ["Python", "PySide6 (Qt)", "Playwright", "asyncio", "PyInstaller", "GitHub Actions"],
    role: "Sole designer & engineer",
    status: "Shipped · v0.1.0",
    tags: ["Python", "PySide6", "Playwright", "Desktop"],
    year: "2026",
    github: "https://github.com/nvssim950/redscrape",
    screenshots: [
      {
        src: "/projects/redscrape-screenshot.png",
        alt: "RedScrape desktop UI showing a scrape of r/n8n filtered by the 'Workflow - Github Included' flair",
        caption: "Live scrape of r/n8n · flair-filtered · GitHub links extracted from post bodies",
      },
    ],
  },
  {
    id: "medaide",
    slug: "medaide",
    kind: "health",
    title: "MedAide",
    tagline: "An intelligent medical management & prescription-support system for private practices.",
    blurb:
      "I built a full-stack Electron + React desktop suite for doctors, patient records, appointments, consultations, statistics, and AI-assisted prescription support, all in one offline-first app.",
    description: [
      "MedAide is a practice-management suite I built end-to-end for solo practitioners and small clinics. It runs as a single Electron desktop app so doctors can work offline between visits, with patient data, appointment calendars, consultation notes, and statistics sitting behind one authenticated shell.",
      "The care workflow links everything together: a patient's history, current appointments, active prescriptions, and consultation notes all roll up into a single view. PDF export for prescriptions and reports is built in, and the statistics module gives practice-wide and per-patient views of activity.",
      "The codebase is a React 19 renderer driven by React Router v7, Tailwind v4, and a clean API-service layer. Auth is context-scoped with a protected layout, and the whole thing packages to installers for Windows, macOS, and Linux via electron-builder.",
    ],
   
    stack: [
      "Electron",
      "React 19",
      "React Router v7",
      "Tailwind v4",
      "Vite",
      "Axios",
      "html2pdf.js",
      "electron-builder",
    ],
    role: "Frontend lead, architecture, UI/UX, and full renderer build",
    status: "In development · 2CP project",
    tags: ["Electron", "React", "Tailwind", "Healthcare"],
    year: "2026",
  },
  {
    id: "lead-qualifier",
    slug: "lead-qualifier",
    kind: "automation",
    title: "Lead Qualification Engine",
    blurb:
      "I built an n8n pipeline that scrapes inbound leads, enriches them via Apollo, scores them with GPT-4, and routes them to Slack. Cuts SDR triage time by 80%.",
    tags: ["n8n", "OpenAI", "Apollo", "Slack"],
    year: "2026",
  },
  {
    id: "research-agent",
    slug: "research-agent",
    kind: "agent",
    title: "Research Agent for a VC Firm",
    blurb:
      "I built a multi-tool agent that monitors deal flow, pulls SEC filings and news, and drafts a daily memo. Built on LangChain, Claude, and Postgres.",
    tags: ["LangChain", "Claude", "Postgres"],
    year: "2026",
  },
];
