"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Counter } from "./counter";

const HERO_STATS = [
  { target: 21000, suffix: "+", label: "Global Hub Members" },
  { target: 2000, suffix: "+", label: "Active Community Members" },
  { target: 150, suffix: "+", label: "Reviews per Selection" },
  { target: 15, suffix: "", label: "Creators per Annual Cycle" },
  { target: 2017, suffix: "", label: "Year founded", static: true },
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
        <span className="writing-vertical font-mono-tech text-[10px] uppercase tracking-[0.5em] text-cream/60">
          Private · Technology · Society
        </span>
        <span className="h-16 w-px bg-cream/30" />
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
          <span className="h-px w-14 bg-gold" aria-hidden="true" />
          <p className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.32em] text-gold sm:text-[11px]">
            A Private Technology Society for Creators
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
              Where your project earns
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.84, ease }}
            >
              a <em className="italic">year-long</em> conversation
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.98, ease }}
            >
              with <em className="italic">serious minds</em>.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease }}
          className="mt-8 max-w-xl text-[15px] font-light leading-relaxed text-cream/75 sm:text-base"
        >
          Droyce Tech Club is a private technology society that gives
          independent creators a structured twelve-month residency with an
          elite global learning community. No noise. No trends. Just work
          worth keeping, and minds who treat it that way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.38, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#about"
            className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[linear-gradient(135deg,#c5a059_0%,#a37f3a_100%)] px-8 py-3.5 font-mono-tech text-[11px] font-semibold uppercase tracking-[0.22em] text-ink shadow-glow transition-all duration-500 hover:bg-[linear-gradient(135deg,#e6ca65_0%,#c5a059_100%)] hover:shadow-glow-lg"
          >
            Explore Droyce Tech Club
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 border border-gold/40 bg-transparent px-8 py-3.5 font-mono-tech text-[11px] font-medium uppercase tracking-[0.22em] text-cream backdrop-blur-sm transition-all duration-500 hover:border-gold/70 hover:bg-gold/10 hover:text-gold"
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
        className="relative z-10 border-t border-line-soft bg-ink/40 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-line-soft sm:grid-cols-3 lg:grid-cols-5">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline gap-4 bg-ink/95 px-5 py-6 sm:px-7 sm:py-7"
            >
              <span className="font-display text-3xl font-medium tabular-nums text-cream sm:text-4xl">
                {stat.static ? (
                  stat.target
                ) : (
                  <Counter target={stat.target} suffix={stat.suffix} />
                )}
              </span>
              <span className="max-w-[10rem] font-mono-tech text-[9.5px] uppercase leading-relaxed tracking-[0.16em] text-cream/55">
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
            className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
