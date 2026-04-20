import { Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { ContactButton } from "./ui/contact";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative mx-4 mt-12 mb-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-background px-4 py-16 text-center md:mx-auto md:mb-20 md:max-w-6xl md:px-6 md:py-24"
    >
      <div aria-hidden className="spotlight-cta absolute inset-0 -z-10" />
      <div aria-hidden className="noise" />

      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40">
        Let&apos;s talk
      </span>

      <h2 className="font-display mx-auto mt-5 max-w-3xl text-balance text-[36px] font-medium leading-[0.95] sm:text-5xl md:mt-6 md:text-7xl">
        Got something <span className="italic font-light">to build?</span>
      </h2>

      <p className="mx-auto mt-5 max-w-md text-[15px] text-foreground/60 md:mt-6 md:text-base">
        I take a small handful of projects per quarter. Tell me what you&apos;re
        working on. I reply within a day.
      </p>

      <div className="mt-8 flex items-center justify-center md:mt-10">
        <ContactButton />
      </div>

      <a
        href={`mailto:${PROFILE.email}`}
        className="group mx-auto mt-8 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-foreground/70 transition-colors hover:text-foreground md:mt-14"
      >
        <Mail
          size={13}
          strokeWidth={1.8}
          className="text-foreground/60 transition-colors group-hover:text-foreground"
        />
        <span className="break-all">{PROFILE.email}</span>
      </a>
    </section>
  );
}
