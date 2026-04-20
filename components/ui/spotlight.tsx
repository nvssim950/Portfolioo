import { cn } from "@/lib/utils";

export function Spotlight({ className, variant = "top" }: { className?: string; variant?: "top" | "bottom" }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        variant === "top" ? "spotlight" : "spotlight-cta",
        className,
      )}
    />
  );
}
