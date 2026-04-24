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

export type WorkflowNode = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
};

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
  workflow?: {
    nodes: WorkflowNode[];
    edges: Array<[string, string]>;
  };
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
      "RedScrape is a native-feeling desktop app for grabbing Reddit posts filtered by an exact flair, the sort of task that's tedious in a browser and overkill for a full PRAW setup. The UI stays responsive while a headless Chromium, driven by Playwright, walks old.reddit.com and streams rows into the results table as they land.",
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
        alt: "RedScrape desktop UI showing a scrape of r/n8n",
        caption: "Live scrape of r/n8n",
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
    id: "ai-outreach-agent",
    slug: "ai-outreach-agent",
    kind: "agent",
    title: "AI Lead Qualification & Outreach",
    tagline:
      "An n8n agent that scores every inbound lead, drafts a tailored cold email, and ships it, before your SDR refreshes their inbox.",
    blurb:
      "I built an n8n workflow that takes a raw inbound lead, reads the company website, scores ICP fit with a GPT-5-mini agent, and either sends a personalized cold email + Slack ping, or logs the lead as skipped, all in a single POST.",
    description: [
      "The workflow exposes a single webhook endpoint. POST a lead firstName, lastName, email, company, website, notes, and the pipeline normalizes the payload, fetches and cleans the company's homepage, and hands a clean context block to a GPT-5-mini agent that scores ICP fit on a 0–10 scale and drafts a fully personalized cold email in one structured-JSON pass.",
      "A strict output parser enforces the response schema (score, reasoning, subject, body) so downstream nodes never have to guess. An If node branches on the score: at 7 or above the lead is routed to Gmail for delivery, pinged into Slack for the team, and logged to a Leads data table as sent; below 7 it's logged as skipped so nothing is silently dropped.",
      "The webhook responds to the caller immediately with the analysis, so the submitter gets instant feedback while the send + notify + log steps finish asynchronously on the qualified branch. OpenAI, Gmail OAuth2, Slack OAuth2, and the n8n Data Table node are wired in once through the credentials layer, no secrets in the workflow itself.",
    ],
    stack: ["n8n", "OpenAI (GPT-5-mini)", "Gmail OAuth2", "Slack OAuth2", "n8n Data Tables", "Webhook"],
    role: "Sole designer & builder",
    status: "Shipped",
    tags: ["n8n", "OpenAI", "Gmail", "Slack"],
    year: "2026",
    github: "https://github.com/nvssim950/n8n-projects/blob/main/AiPersonalizedOutreach.json",
    screenshots: [
      {
        src: "/projects/ai-outreach-agent-screenshot.png",
        alt: "n8n workflow graph for AI Lead Qualification & Outreach, webhook intake, website fetch, GPT-5-mini scoring agent, conditional email + Slack delivery",
        caption: "Webhook → normalize → fetch site → GPT-5-mini agent → qualified branch: email + Slack + log",
      },
    ],
    workflow: {
      nodes: [
        { id: "webhook", x: 20,  y: 110, label: "Webhook",    sub: "New lead" },
        { id: "fetch",   x: 165, y: 50,  label: "Fetch Site", sub: "Context" },
        { id: "gpt",     x: 310, y: 110, label: "GPT-5",      sub: "Score + draft" },
        { id: "gmail",   x: 430, y: 40,  label: "Gmail",      sub: "Send email" },
        { id: "slack",   x: 430, y: 170, label: "Slack",      sub: "Notify team" },
      ],
      edges: [
        ["webhook", "fetch"],
        ["fetch",   "gpt"],
        ["gpt",     "gmail"],
        ["gpt",     "slack"],
      ],
    },
  },
  {
    id: "content-repurposing-agent",
    slug: "content-repurposing-agent",
    kind: "agent",
    title: "AI Content Repurposing Agent",
    tagline:
      "One long-form asset in. Five platform-native drafts and five title variants out, reviewed in Notion, announced in Slack.",
    blurb:
      "I built an n8n agent that takes a creator's transcript, blog, or podcast notes plus their voice and audience, and in a single Claude Sonnet 4.5 call returns 5 platform-native drafts (LinkedIn, X, Newsletter, YouTube Short, Instagram) + 5 title variants, saved to Notion for review and pinged to Slack.",
    description: [
      "The workflow starts with a content intake form that creators can embed directly on a portfolio or landing page, they submit one long-form asset (transcript, blog body, or podcast notes) along with their voice, audience, and CTA. A Prepare Context step packages those inputs into a single prompt the agent can reason over.",
      "The core is a single Claude Sonnet 4.5 call behind a strict JSON output parser: one request returns all five platform-native drafts and five title variants at once. Doing the whole job in one pass is reliable, fast, cheap, and trivially retryable, no orchestration of five separate model calls, no partial-failure states to clean up.",
      "On the delivery side, a Flatten step unpacks the structured assets and each draft lands in a Notion review database (Title, Status, Content Type, Source URL, Audience, Summary, LinkedIn Post, X Thread, Newsletter, YouTube Short, Instagram Caption, Title Variants). A Slack notification then pings the review channel with the page link so whoever owns the voice can approve, tweak, or publish, no inbox hunting.",
    ],
    stack: ["n8n", "Anthropic (Claude Sonnet 4.5)", "Notion API", "Slack OAuth2", "Form Trigger"],
    role: "Sole designer & builder",
    status: "Shipped",
    tags: ["n8n", "Anthropic", "Notion", "Slack"],
    year: "2026",
    github: "https://github.com/nvssim950/n8n-projects/blob/main/ContentRepurposingAgent.json",
    screenshots: [
      {
        src: "/projects/content-repurposing-agent-screenshot.png",
        alt: "n8n workflow graph for AI Content Repurposing Agent, intake form, Claude Sonnet 4.5 repurposing, Notion save, Slack notification",
        caption: "Intake form → Claude Sonnet 4.5 (5 drafts + 5 titles) → Notion review DB → Slack review ping",
      },
    ],
    workflow: {
      nodes: [
        { id: "form",   x: 40,  y: 110, label: "Form",       sub: "Intake" },
        { id: "claude", x: 220, y: 110, label: "Claude 4.5", sub: "Repurpose" },
        { id: "notion", x: 410, y: 50,  label: "Notion",     sub: "Save drafts" },
        { id: "slack",  x: 410, y: 170, label: "Slack",      sub: "Review ping" },
      ],
      edges: [
        ["form",   "claude"],
        ["claude", "notion"],
        ["claude", "slack"],
      ],
    },
  },
];
