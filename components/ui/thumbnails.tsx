"use client";

/** Mock visual thumbnails for project cards. Pure CSS/SVG, no real assets. */

import { WorkflowViz } from "./workflow-viz";

export function AgentThumb() {
  return (
    <div className="flex h-full w-full flex-col justify-end gap-2 p-6">
      <div className="flex justify-end">
        <div className="max-w-[70%] rounded-2xl rounded-br-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-foreground/80">
          Summarize today&apos;s deal flow
        </div>
      </div>
      <div className="flex">
        <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-white/10 bg-foreground/95 px-3 py-2 text-xs text-background">
          Pulled 14 new filings, 6 match thesis. Drafting memo
          <span className="ml-1 inline-flex gap-0.5 align-middle">
            <span className="dot-1 inline-block h-1 w-1 rounded-full bg-background" />
            <span className="dot-2 inline-block h-1 w-1 rounded-full bg-background" />
            <span className="dot-3 inline-block h-1 w-1 rounded-full bg-background" />
          </span>
        </div>
      </div>
      <div className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        <span className="h-1 w-1 rounded-full bg-success" />
        agent · streaming
      </div>
    </div>
  );
}

export function WebThumb() {
  return (
    <div className="flex h-full w-full flex-col p-4">
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-white/10 bg-white/[0.04] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="rounded-md bg-black/40 px-2 py-0.5 font-mono text-[10px] text-foreground/50">
          operator.app/dashboard
        </div>
        <span />
      </div>
      <div className="flex-1 rounded-b-lg border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-3">
        <div className="grid h-full grid-cols-3 gap-2">
          <div className="col-span-1 space-y-1.5">
            <div className="h-2 rounded bg-white/15" />
            <div className="h-2 rounded bg-white/8" />
            <div className="h-2 rounded bg-white/8" />
            <div className="mt-3 h-2 rounded bg-white/15" />
            <div className="h-2 rounded bg-white/8" />
          </div>
          <div className="col-span-2 space-y-1.5">
            <div className="flex gap-1.5">
              <div className="h-8 flex-1 rounded bg-white/10" />
              <div className="h-8 flex-1 rounded bg-white/5" />
              <div className="h-8 flex-1 rounded bg-white/5" />
            </div>
            <div className="h-16 rounded bg-white/5" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-6 rounded bg-white/8" />
              <div className="h-6 rounded bg-white/8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesignThumb() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-3 p-5">
      <div className="space-y-2">
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-2">
          <div className="mb-1.5 h-1.5 w-12 rounded bg-white/30" />
          <div className="h-1 w-20 rounded bg-white/15" />
          <div className="mt-2 h-6 rounded bg-foreground" />
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-2 font-mono text-[9px] leading-tight text-foreground/50">
          <div>--color-bg #0a0a0a</div>
          <div>--color-fg #fafafa</div>
          <div>--radius-pill 999px</div>
        </div>
      </div>
      <div className="rounded-md border border-white/10 bg-white/[0.04] p-2">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-sm bg-white/8" />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="col-span-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        figma · 64 components
      </div>
    </div>
  );
}

/* ---------- RedScrape ---------- */

const SCRAPER_ROWS = [
  "Free n8n workflow — Crypto price alert to Telegram",
  "n8n workflow: Facebook Messenger + AI Agent",
  "How to set up document classification in n8n",
  "My first n8n automation workflow is live",
];

export function ScraperThumb() {
  return (
    <div className="flex h-full w-full flex-col p-4 md:p-6">
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-foreground/40 md:text-[10px]">
        <span className="inline-flex items-center gap-1.5">
          <span className="dot-pulse relative h-1 w-1 rounded-full bg-success" />
          r/n8n · scraping
        </span>
        <span className="tabular-nums text-foreground/30">04 / 04</span>
      </div>

      <ul className="mt-3 flex flex-col md:mt-4">
        {SCRAPER_ROWS.map((title, i) => (
          <li
            key={i}
            className="scrape-row flex items-center gap-2 border-b border-white/[0.05] py-1.5 last:border-b-0 md:gap-3 md:py-2"
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            <span className="font-mono text-[9px] tabular-nums text-foreground/35 md:text-[10px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="truncate text-[11px] text-foreground/80 md:text-[12px]">
              {title}
            </span>
            <span className="ml-auto hidden shrink-0 rounded-full border border-white/10 bg-white/[0.02] px-1.5 py-[1px] font-mono text-[8px] uppercase tracking-widest text-foreground/50 sm:inline-block">
              flair
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- MedAide ---------- */

export function HealthThumb() {
  const path =
    "M0,30 L40,30 L52,30 L60,8 L68,52 L78,30 L120,30 L132,30 L140,12 L148,50 L158,30 L200,30 L212,30 L220,16 L228,48 L240,30";
  return (
    <div className="flex h-full w-full flex-col p-4 md:p-6">
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-foreground/40 md:text-[10px]">
        <span className="inline-flex items-center gap-1.5">
          <span className="dot-pulse relative h-1 w-1 rounded-full bg-success" />
          consultation · active
        </span>
        <span className="text-foreground/30">pt-0421</span>
      </div>

      <div className="flex flex-1 items-center py-2">
        <svg
          viewBox="0 0 240 60"
          className="h-full w-full"
          preserveAspectRatio="none"
          role="img"
          aria-label="ECG trace"
        >
          <defs>
            <linearGradient id="ecgFade" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(250,250,250,0)" />
              <stop offset="50%" stopColor="rgba(250,250,250,0.95)" />
              <stop offset="100%" stopColor="rgba(250,250,250,0)" />
            </linearGradient>
          </defs>
          <path
            d={path}
            fill="none"
            stroke="rgba(250,250,250,0.08)"
            strokeWidth="1"
          />
          <path
            d={path}
            fill="none"
            stroke="url(#ecgFade)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-line"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-foreground/40 md:text-[10px]">
        <span>72 bpm · stable</span>
        <span className="text-foreground/30">lead II</span>
      </div>
    </div>
  );
}

export function ProjectThumb({
  kind,
}: {
  kind: "automation" | "agent" | "web" | "design" | "scraper" | "health";
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent">
      <div className="noise" />
      {kind === "automation" && <WorkflowViz />}
      {kind === "agent" && <AgentThumb />}
      {kind === "web" && <WebThumb />}
      {kind === "design" && <DesignThumb />}
      {kind === "scraper" && <ScraperThumb />}
      {kind === "health" && <HealthThumb />}
    </div>
  );
}
