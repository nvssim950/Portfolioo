import { SERVICES } from "@/lib/data";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { ServiceViz, ServiceIcon } from "./ui/service-viz";

type ServiceKind = "automation" | "web" | "design";

const KINDS: Record<string, ServiceKind> = {
  automation: "automation",
  web: "web",
  design: "design",
};

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-36">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Services</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-balance text-[28px] font-medium leading-tight md:mt-6 md:text-5xl">
              Three things I do, all the way to production.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:mt-16 md:grid-cols-3">
        {SERVICES.map((s, i) => {
          const kind = KINDS[s.id] ?? "web";
          return (
            <Reveal key={s.id} delay={0.05 * i}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                <div className="relative h-36 border-b border-white/[0.06] md:h-40">
                  <ServiceViz kind={kind} />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground/40">
                      <span>0{i + 1}</span>
                      <span aria-hidden className="h-px w-4 bg-white/15" />
                      <span>{s.id}</span>
                    </div>
                    <ServiceIcon kind={kind} />
                  </div>

                  <h3 className="font-display mt-5 text-2xl font-medium leading-snug md:text-[28px]">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-foreground/65">{s.blurb}</p>

                 
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

