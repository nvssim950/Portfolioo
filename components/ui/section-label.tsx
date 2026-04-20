import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50",
        className,
      )}
    >
      {children}
    </div>
  );
}
