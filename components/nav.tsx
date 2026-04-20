"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV, PROFILE } from "@/lib/data";
import { ContactButton } from "./ui/contact";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
          <div
            className={cn(
              "flex w-full items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 md:gap-6",
              scrolled
                ? "border-white/10 bg-background/70 backdrop-blur-xl"
                : "border-transparent bg-transparent",
            )}
          >
            <Link
              href="#top"
              onClick={closeMenu}
              className="flex items-center gap-2 pl-1 md:pl-2"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background font-display text-[13px] font-semibold">
                {PROFILE.initials}
              </span>
              <span className="hidden text-sm font-medium md:inline">
                {PROFILE.name}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <ContactButton />
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-foreground/80 transition-colors hover:border-white/25 hover:bg-white/[0.07] hover:text-foreground md:hidden"
              >
                {menuOpen ? (
                  <X size={16} strokeWidth={1.8} />
                ) : (
                  <Menu size={16} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background/95 px-6 pb-10 pt-24 backdrop-blur-xl md:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                data-lenis-prevent
              >
                <div aria-hidden className="spotlight-cta absolute inset-0 -z-10 opacity-60" />

                <nav className="flex flex-1 flex-col">
                  {NAV.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.05,
                        duration: 0.45,
                        ease: [0.2, 0.7, 0.2, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="font-display block border-b border-white/[0.06] py-5 text-4xl font-light tracking-tight text-foreground/85 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.45 }}
                  className="mt-10 flex flex-col gap-6"
                >
                  <div onClick={closeMenu}>
                    <ContactButton />
                  </div>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="font-mono text-[11px] uppercase tracking-widest text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {PROFILE.email}
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
