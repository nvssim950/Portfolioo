"use client";

import { forwardRef, useEffect, useRef, useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

const WA_DIGITS = PROFILE.whatsapp.replace(/\D/g, "");
const WA_PRESET = encodeURIComponent("Hi I'd like to discuss a project.");
const WA_URL = `https://wa.me/${WA_DIGITS}?text=${WA_PRESET}`;

export function ContactButton({
  label = "Get in Touch",
  variant = "filled",
}: {
  label?: string;
  variant?: "filled" | "outline";
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <Magnetic>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
            variant === "filled"
              ? "bg-foreground text-background hover:bg-accent"
              : "border border-white/15 bg-white/[0.03] text-foreground hover:border-white/25 hover:bg-white/[0.07]",
          )}
        >
          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
            <span
              aria-hidden
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/80 opacity-60"
            />
            <span aria-hidden className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          {label}
          <ArrowUpRight
            size={14}
            strokeWidth={2.2}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </button>
      </Magnetic>

      <ContactModal open={open} onClose={close} />
    </>
  );
}

type SendState = "idle" | "sending" | "sent" | "error";

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SendState>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstInputRef.current?.focus(), 120);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setErrorMsg(null);
    }
  }, [open]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("sent");
      setName("");
      setContact("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="contact-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          onClick={onClose}
          data-lenis-prevent
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0a0a] p-5 shadow-[0_20px_80px_-12px_rgba(0,0,0,0.8)] sm:rounded-3xl sm:p-6 md:p-8"
          >
            <div aria-hidden className="noise" />

            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-foreground/60 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-foreground"
              aria-label="Close contact form"
            >
              <X size={14} strokeWidth={1.8} />
            </button>

            <div className="relative">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                Contact
              </span>
              <h3
                id="contact-title"
                className="font-display mt-3 pr-10 text-[26px] font-medium leading-tight sm:text-3xl md:text-4xl"
              >
                Let&apos;s <span className="italic font-light">talk.</span>
              </h3>
              <p className="mt-3 max-w-md text-sm text-foreground/60">
                Tell me what you&apos;re working on. I reply within a day.
              </p>
            </div>

            <form onSubmit={submit} className="relative mt-7 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field
                  ref={firstInputRef}
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
                <Field
                  name="contact"
                  placeholder="Email or phone"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <TextArea
                name="message"
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />

              <div className="flex flex-col-reverse items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                <span className="text-xs text-foreground/50">
                  {status === "sent" ? (
                    <span className="text-success">Message sent. I&apos;ll reply within a day.</span>
                  ) : status === "error" ? (
                    <span className="text-red-400">{errorMsg}</span>
                  ) : (
                    <>
                      Or message me on{" "}
                      <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success underline-offset-4 hover:underline"
                      >
                        WhatsApp
                      </a>
                    </>
                  )}
                </span>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Sending…"
                    : status === "sent"
                    ? "Sent"
                    : "Send inquiry"}
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

type FieldProps = InputHTMLAttributes<HTMLInputElement>;
const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(props, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 transition-colors",
        "focus:border-white/30 focus:bg-white/[0.05] focus:outline-none focus:ring-0",
        props.className,
      )}
    />
  );
});

function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 transition-colors",
        "focus:border-white/30 focus:bg-white/[0.05] focus:outline-none focus:ring-0",
        props.className,
      )}
    />
  );
}
