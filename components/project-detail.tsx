"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import type { Project } from "@/lib/data";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";
import { ProjectThumb } from "./ui/thumbnails";
import { Spotlight } from "./ui/spotlight";
import { BrandIcon } from "./ui/brand-icon";

export function ProjectDetail({ project }: { project: Project }) {
  const titleWords = project.title.split(" ");

  return (
    <article className="relative">
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <Spotlight variant="top" />
        <div aria-hidden className="grid-fine absolute inset-0 -z-10" />
        <div className="noise" />

        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#work"
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[12px] text-foreground/70 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-foreground"
            >
              <ArrowLeft
                size={13}
                strokeWidth={1.8}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              Back to work
            </Link>
          </motion.div>

          <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-12">
            <div className="max-w-3xl">
            
              <h1 className="font-display mt-5 text-balance text-[40px] font-medium leading-[0.95] sm:text-5xl md:mt-6 md:text-7xl">
                {titleWords.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden align-bottom">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        delay: 0.1 + i * 0.08,
                        duration: 0.7,
                        ease: [0.2, 0.7, 0.2, 1],
                      }}
                      className="inline-block"
                    >
                      {word}
                      {i < titleWords.length - 1 && <span>&nbsp;</span>}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {project.tagline && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-6 max-w-2xl text-pretty text-[15px] italic font-light text-foreground/70 md:text-xl"
                >
                  {project.tagline}
                </motion.p>
              )}
            </div>

           
          </div>
        </div>
      </section>

      {/* ---- Hero visual ---- */}
      <section className="relative mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015]">
            <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
              {project.screenshots && project.screenshots[0] ? (
                <Image
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  fill
                  unoptimized
                  priority
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  className="object-contain object-center p-4 md:p-8"
                />
              ) : (
                <div className="absolute inset-0 p-4 md:p-8">
                  <div className="h-full w-full">
                    <ProjectThumb kind={project.kind} workflow={project.workflow} />
                  </div>
                </div>
              )}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent"
              />
            </div>
            {project.screenshots?.[0]?.caption && (
              <div className="flex flex-col items-start gap-1.5 border-t border-white/[0.06] px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-4 md:px-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                  {project.screenshots[0].caption}
                </span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-foreground/30">
                  01 / {String(project.screenshots.length).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </section>


      {/* ---- Description + Features ---- */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex">
          {project.description && (
            <div className="md:col-span-7">
              <Reveal>
                <SectionLabel>Overview</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display mt-5 text-balance text-[26px] font-medium leading-tight md:mt-6 md:text-4xl">
                  {project.blurb}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-4 text-[15px] text-foreground/70 md:mt-8 md:space-y-5 md:text-[17px]">
                  {project.description.map((para, i) => (
                    <p key={i} className="text-pretty leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

        </div>
      </section>

      {/* ---- Stack ---- */}
      {project.stack && project.stack.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
          <Reveal>
            <SectionLabel>Stack</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
              {project.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[12px] text-foreground/70 md:text-[13px]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      )}

      {/* ---- Links CTA ---- */}
      {(project.github || project.url) && (
        <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6 md:pb-36">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-10">
              <div aria-hidden className="spotlight-cta absolute inset-0 opacity-70" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                
                  <h3 className="font-display mt-3 text-balance text-2xl font-medium leading-tight md:text-4xl">
                    Explore the code, or take it for a spin.
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-foreground transition-colors hover:border-white/25 hover:bg-white/[0.07]"
                    >
                      <BrandIcon slug="github" size={15} />
                      View repo
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
                    >
                      <Globe size={15} strokeWidth={1.8} />
                      Open live
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.2}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}
    </article>
  );
}
