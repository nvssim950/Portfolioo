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

export function ProjectThumb({ kind }: { kind: "automation" | "agent" | "web" | "design" }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent">
      <div className="noise" />
      {kind === "automation" && <WorkflowViz />}
      {kind === "agent" && <AgentThumb />}
      {kind === "web" && <WebThumb />}
      {kind === "design" && <DesignThumb />}
    </div>
  );
}
