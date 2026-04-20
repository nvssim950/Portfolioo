"use client";

import { motion } from "motion/react";
import { PROFILE } from "@/lib/data";
import { Button } from "./ui/button";
import { ContactButton } from "./ui/contact";
import { Spotlight } from "./ui/spotlight";

const HEADLINE = ["Building", "automations", "&", "AI", "agents", "that", "actually", "ship."];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-52 md:pb-36">
      <Spotlight variant="top" />
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      <div className="noise" />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-6">
       

        <h1 className="font-display mt-2 text-balance text-[40px] font-medium leading-[0.95] sm:text-5xl md:mt-7 md:text-7xl lg:text-[88px]">
          {HEADLINE.map((word, i) => {
            const emphasis = ["automations", "&", "AI", "agents"].includes(word);
            return (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                  className={`inline-block ${emphasis ? "italic font-light text-foreground/95" : ""}`}
                >
                  {word}
                  {i < HEADLINE.length - 1 && <span>&nbsp;</span>}
                </motion.span>
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-xl text-pretty text-[15px] text-foreground/60 md:mt-7 md:text-lg"
        >
          {PROFILE.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <ContactButton />
          <Button href="#work" variant="outline">
            View work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
