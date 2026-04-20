"use client";

/**
 * Mini themed visuals used as hero artwork in the Services bento cards.
 * Pure SVG + CSS, no real assets. Animate on card hover.
 */

import { Workflow, Bot, Zap, Code2, Globe, Figma, Palette, Eye } from "lucide-react";

export function AutomationViz() {
  return (
    <div className="relative flex h-full w-full items-center justify-center px-6">
      <svg viewBox="0 0 280 120" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="svc-edge-1" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(250,250,250,0.05)" />
            <stop offset="50%" stopColor="rgba(250,250,250,0.55)" />
            <stop offset="100%" stopColor="rgba(250,250,250,0.05)" />
          </linearGradient>
        </defs>
        <path d="M 64,42 C 90,42 100,42 120,42" stroke="rgba(255,255,255,0.1)" strokeWidth={1.4} fill="none" />
        <path d="M 64,42 C 90,42 100,42 120,42" stroke="url(#svc-edge-1)" strokeWidth={1.4} fill="none" className="flow-line" />
        <path d="M 184,42 C 210,42 220,42 240,42" stroke="rgba(255,255,255,0.1)" strokeWidth={1.4} fill="none" />
        <path d="M 184,42 C 210,42 220,42 240,42" stroke="url(#svc-edge-1)" strokeWidth={1.4} fill="none" className="flow-line" style={{ animationDelay: "0.3s" }} />

        <path d="M 64,42 C 90,60 100,78 120,94" stroke="rgba(255,255,255,0.08)" strokeWidth={1.4} fill="none" />
      </svg>

      <div className="pointer-events-none absolute inset-0 flex items-center px-6">
        <Node x="0%"  yPct={22} icon={<Zap size={11} strokeWidth={1.8} />} label="Trigger" />
        <Node x="32%" yPct={22} icon={<Bot size={11} strokeWidth={1.8} />} label="Agent" />
        <Node x="64%" yPct={22} icon={<Workflow size={11} strokeWidth={1.8} />} label="Route" />
        <Node x="32%" yPct={68} icon={<Workflow size={11} strokeWidth={1.8} />} label="Log" muted />
      </div>
    </div>
  );
}

function Node({
  x,
  yPct,
  icon,
  label,
  muted,
}: {
  x: string;
  yPct: number;
  icon: React.ReactNode;
  label: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`absolute flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] backdrop-blur ${
        muted
          ? "border-white/5 bg-white/[0.02] text-foreground/40"
          : "border-white/15 bg-background/80 text-foreground/85"
      }`}
      style={{ left: x, top: `${yPct}%` }}
    >
      <span className={muted ? "text-foreground/40" : "text-foreground/90"}>{icon}</span>
      <span className="font-mono uppercase tracking-wider">{label}</span>
    </div>
  );
}

export function WebViz() {
  return (
    <div className="flex h-full w-full p-4">
      <div className="flex w-full overflow-hidden rounded-lg border border-white/[0.08]">
        <div className="flex-1 bg-black/30 p-3 font-mono text-[10px] leading-relaxed text-foreground/75">
          <div className="flex items-center gap-1.5 pb-2 text-foreground/40">
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="ml-2 text-[9px]">page.tsx</span>
          </div>
          <div><span className="text-foreground/40">export default</span> <span className="text-foreground/85">fn</span> <span>Page</span>() &#123;</div>
          <div className="pl-3"><span className="text-foreground/40">return</span> <span className="text-foreground/60">&lt;Hero /&gt;</span></div>
          <div>&#125;</div>
        </div>
        <div className="w-1 bg-white/[0.06]" />
        <div className="flex-1 bg-gradient-to-br from-white/[0.04] to-transparent p-3">
          <div className="mb-1.5 h-1.5 w-10 rounded-full bg-white/25" />
          <div className="h-1 w-20 rounded-full bg-white/10" />
          <div className="mt-2 h-1 w-16 rounded-full bg-white/10" />
          <div className="mt-3 h-5 w-12 rounded-full bg-foreground" />
          <div className="mt-2 flex gap-1">
            <Globe size={9} className="text-foreground/30" />
            <span className="font-mono text-[8px] text-foreground/30">localhost:3000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesignViz() {
  return (
    <div className="grid h-full w-full grid-cols-5 gap-2 p-4">
      <div className="col-span-3 rounded-lg border border-white/[0.08] bg-black/25 p-2.5 font-mono text-[9px] text-foreground/60">
        <div className="mb-2 flex items-center gap-1 text-foreground/35">
          <Figma size={9} />
          <span className="uppercase tracking-widest text-[8px]">Layers</span>
        </div>
        {["Hero", "Marquee", "Services", "CTA"].map((l, i) => (
          <div
            key={l}
            className={`flex items-center gap-1.5 rounded px-1 py-0.5 ${
              i === 1 ? "bg-white/[0.06] text-foreground/90" : ""
            }`}
          >
            <Eye size={8} className="text-foreground/40" />
            <span>{l}</span>
          </div>
        ))}
      </div>
      <div className="col-span-2 flex flex-col justify-between rounded-lg border border-white/[0.08] bg-black/25 p-2.5">
        <div className="flex items-center gap-1 text-foreground/35">
          <Palette size={9} />
          <span className="font-mono text-[8px] uppercase tracking-widest">Tokens</span>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {["bg-[#0a0a0a]", "bg-[#171717]", "bg-[#2a2a2a]", "bg-[#404040]",
            "bg-[#737373]", "bg-[#a3a3a3]", "bg-[#d4d4d4]", "bg-[#fafafa]"].map((c) => (
            <div key={c} className={`aspect-square rounded ${c} border border-white/5`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServiceViz({ kind }: { kind: "automation" | "web" | "design" }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent">
      <div className="noise" />
      {kind === "automation" && <AutomationViz />}
      {kind === "web" && <WebViz />}
      {kind === "design" && <DesignViz />}
    </div>
  );
}

const ICON_MAP = { automation: Workflow, web: Code2, design: Palette } as const;
export function ServiceIcon({ kind }: { kind: "automation" | "web" | "design" }) {
  const Icon = ICON_MAP[kind];
  return <Icon size={18} strokeWidth={1.5} className="text-foreground/90" />;
}
