"use client";

import { forwardRef, type ComponentProps } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

type Variant = "filled" | "outline" | "ghost";

type Props = {
  variant?: Variant;
  href?: string;
  external?: boolean;
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<"button">, "ref">;

const styles: Record<Variant, string> = {
  filled:
    "bg-foreground text-background hover:bg-accent",
  outline:
    "bg-white/[0.03] text-foreground border border-white/15 hover:bg-white/[0.07] hover:border-white/25",
  ghost:
    "text-foreground/80 hover:text-foreground",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, variant = "filled", href, external, arrow = true, className, ...rest },
  ref,
) {
  const inner = (
    <span
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
        styles[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowUpRight
          size={14}
          strokeWidth={2.2}
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      )}
    </span>
  );

  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <Magnetic>
        <Link href={href} {...linkProps}>{inner}</Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <button ref={ref} {...rest}>{inner}</button>
    </Magnetic>
  );
});
