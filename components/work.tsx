import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { ProjectThumb } from "./ui/thumbnails";

const LABELS: Record<string, string> = {
  automation: "Automation",
  agent: "Agent",
  web: "Web App",
  design: "Design",
};

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-36">
      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-6">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Selected Work</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-balance text-[28px] font-medium leading-tight md:mt-6 md:text-5xl">
              Things I&apos;ve built that earned their keep.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-white/[0.05] hover:text-foreground"
          >
            See more
            <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={0.05 * i}>
            <Link
              href={p.href}
              className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.04] md:p-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-background/60">
                <ProjectThumb kind={p.kind} />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground/40">
                    <span>{LABELS[p.kind]}</span>
                    <span aria-hidden>·</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="font-display mt-3 text-xl font-medium leading-snug md:text-[26px]">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-foreground/50 transition-all duration-300 group-hover:rotate-45 group-hover:text-foreground"
                />
              </div>

              <p className="mt-3 text-pretty text-sm text-foreground/65 md:text-base">
                {p.blurb}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-foreground/60"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
