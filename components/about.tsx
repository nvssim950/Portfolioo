import Image from "next/image";
import { PROFILE } from "@/lib/data";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-36">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative aspect-[700/900] overflow-hidden rounded-2xl border border-white/[0.08] bg-background md:mr-7">
              <Image
                src="/nassim.jpg"
                alt={`${PROFILE.name}, ${PROFILE.location}`}
                fill
                unoptimized
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover "
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/85 via-background/30 to-transparent"
              />
              <div className="absolute bottom-4 left-4 flex flex-col gap-1 font-mono text-[11px] uppercase tracking-widest text-foreground/75">
                <span>{PROFILE.name}</span>
                <span className="text-foreground/55">{PROFILE.location}</span>
              </div>
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-background/60 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/70 backdrop-blur">
                  <span className="dot-pulse relative h-1.5 w-1.5 rounded-full bg-success" />
                  online
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:pt-6">
          <Reveal>
            <SectionLabel>About</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-balance text-[28px] font-medium leading-tight md:mt-6 md:text-5xl">
              I design what I build.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[15px] text-foreground/70 md:mt-8 md:space-y-5 md:text-lg">
              <p>
                I&apos;m Nassim, a third-year CS student at {PROFILE.school},
                freelancing on automations, agents, and web products.
              </p>
              <p>
                I work fast and write clean code. I care about typography, motion,
                and the small details that decide whether a product feels considered
                or assembled.
              </p>
              <p>
                I take on a small handful of projects per quarter, usually one big
                build and a couple of focused sprints. If yours is a fit, I reply
                within a day.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
