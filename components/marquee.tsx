import { STACK } from "@/lib/data";
import { BrandIcon } from "./ui/brand-icon";

export function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <section
      aria-label="Tools and stack"
      className="relative overflow-hidden border-y border-white/[0.01] py-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-background to-transparent"
      />

      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap px-6 md:gap-14 md:px-8">
        {items.map((item, i) => (
          <div
            key={`${item.slug}-${i}`}
            className="group inline-flex shrink-0 items-center gap-2.5 text-foreground/20 transition-all duration-500 hover:text-foreground/60 md:gap-3"
          >
            <BrandIcon
              slug={item.slug}
              size={18}
              title={item.name}
              className="shrink-0 transition-transform duration-500 group-hover:scale-110 md:h-[22px] md:w-[22px]"
            />
            <span className="font-display text-[18px] font-light leading-none tracking-tight md:text-[22px]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
