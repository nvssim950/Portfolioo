import { Reveal } from "./ui/reveal";
import { SectionLabel } from "./ui/section-label";

const CODE = `// app/api/qualify/route.ts
import { NextRequest } from "next/server";
import { agent } from "@/lib/agent";

export async function POST(req: NextRequest) {
  const lead = await req.json();
  const score = await agent.score(lead);

  if (score >= 0.75) await notifySlack(lead, score);
  return Response.json({ ok: true, score });
}`;


export function Craft() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-36">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal><SectionLabel>Craft</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-balance text-[28px] font-medium leading-tight md:mt-6 md:text-[42px]">
              Clean code. Reusable building blocks.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[15px] text-foreground/65 md:mt-6 md:text-base">
              I write code that other developers (and your future hires) can read at a
              glance. Strong conventions, small surface area, no clever tricks.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                <div className="flex items-center gap-2 font-mono text-[11px] text-foreground/50">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="ml-3">app/api/qualify/route.ts</span>
                </div>
                <span className="font-mono text-[11px] text-foreground/40">TS</span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-foreground/80 md:p-5 md:text-[13px]">
                <code>{CODE}</code>
              </pre>
            </div>
          </Reveal>

        
        </div>
      </div>
    </section>
  );
}
