import { Search, Compass, Terminal, Rocket, type LucideIcon } from "lucide-react";
import { PROCESS } from "@/lib/data";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";

const ICONS: LucideIcon[] = [Search, Compass, Terminal, Rocket];

export function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-36">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>How I work</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-balance text-[28px] font-medium leading-tight md:mt-6 md:text-5xl">
              A pipeline, not a meeting schedule.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-14 md:mt-20">
        {/* Horizontal connector (desktop) */}
        <div
          aria-hidden
          className="absolute left-6 right-6 top-6 hidden h-px bg-white/10 md:block"
        />
        {/* Vertical connector (mobile) */}
        <div
          aria-hidden
          className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:hidden"
        />

        <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
          {PROCESS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.n} delay={0.06 * i}>
                <li className="relative flex gap-5 md:block">
                  <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-background transition-colors duration-300 hover:border-white/40">
                    <Icon size={18} strokeWidth={1.5} className="text-foreground/85" />
                  </div>

                  <div className="md:mt-7">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/40">
                      {p.n}
                    </div>
                    <h3 className="font-display mt-2 text-xl font-medium md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-foreground/60 md:text-[15px]">
                      {p.blurb}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
