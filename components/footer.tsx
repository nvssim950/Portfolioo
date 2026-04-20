import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/data";

const SOCIALS = [
  { label: "GitHub", href: PROFILE.socials.github },
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
  { label: "X / Twitter", href: PROFILE.socials.x },
  { label: "Reddit", href: PROFILE.socials.reddit },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08]">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-12">
          <span className="font-display text-base text-foreground/70 md:text-lg">
            Let&apos;s <span className="italic font-light">talk.</span>
          </span>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-x-7">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {s.label}
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.8}
                    className="opacity-0 transition-all duration-200 group-hover:rotate-45 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
