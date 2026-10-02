"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Counter } from "./counter";

const HERO_STATS = [
  { target: 18, suffix: "", label: "Standout participants per annual cycle" },
  { target: 150, suffix: "+", label: "High-quality engagement clusters" },
  { target: 12, suffix: "", label: "Months of managed experience" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
      aria-label="Droyce Tech Club introduction"
    >
      {/* Cinematic background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={reduce ? undefined : { y: bgY }}
        aria-hidden="true"
      >
        <div className={reduce ? "absolute inset-0" : "absolute inset-0 ken-burns"}>
          <Image
            src="/images/hero.jpg"
            alt="Dark futuristic technology lab with holographic data screens glowing in warm amber light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* layered overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </motion.div>

      {/* vertical side label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-4 lg:flex"
        aria-hidden="true"
      >
        <span className="writing-vertical font-mono-tech text-[10px] uppercase tracking-[0.5em] text-cream/40">
          Private · Technology · Society
        </span>
        <span className="h-16 w-px bg-cream/20" />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 pt-32 pb-16 sm:px-8 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-14 bg-bronze" aria-hidden="true" />
          <p className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.32em] text-bronze sm:text-[11px]">
            A Private Technology Society &amp; Managed Digital Experience
          </p>
        </motion.div>

        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.7rem,7.4vw,6.4rem)] font-medium leading-[1.04] tracking-[-0.015em] text-cream">
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.7, ease }}
            >
              Where Technological
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.84, ease }}
            >
              <em className="italic text-bronze-light">Curiosity</em> Meets
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.98, ease }}
            >
              Collective <em className="italic text-bronze-light">Craft</em>.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="mt-8 max-w-xl text-[15px] font-light leading-relaxed text-cream/75 sm:text-base"
        >
          Uncovering meaningful innovation in overlooked places. We connect
          brilliant independent creators with an elite global technology and
          learning community for a structured, year-long journey of deep
          digital engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.38, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#about"
            className="group inline-flex min-h-12 items-center justify-center gap-3 bg-cream px-8 py-3.5 font-mono-tech text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-all duration-500 hover:bg-bronze"
          >
            Explore Droyce Tech Club
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 border border-cream/60 bg-ink/30 px-8 py-3.5 font-mono-tech text-[11px] font-medium uppercase tracking-[0.22em] text-cream backdrop-blur-sm transition-all duration-500 hover:border-bronze hover:bg-bronze/15 hover:text-bronze-light"
          >
            Join the Community
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1.7, ease }}
        className="relative z-10 border-t border-cream/12 bg-ink/40 backdrop-blur-md"
      >
        {/* cycle label */}
        <div className="mx-auto max-w-[1440px] px-5 pt-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-bronze" aria-hidden="true" />
            <p className="font-mono-tech text-[9.5px] font-medium uppercase tracking-[0.3em] text-cream/55">
              Selection Cycle — 2026 Annual Residency
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-cream/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline gap-4 px-5 py-6 sm:px-8 sm:py-7 lg:px-10"
            >
              <span className="font-display text-4xl font-medium tabular-nums text-cream sm:text-5xl">
                <Counter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="max-w-[14rem] font-mono-tech text-[10px] uppercase leading-relaxed tracking-[0.16em] text-cream/55">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* scroll cue */}
        <div className="pointer-events-none absolute -top-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden="true">
          <span className="font-mono-tech text-[9px] uppercase tracking-[0.4em] text-cream/40">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-bronze to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
