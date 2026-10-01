"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionHeader, Reveal } from "./section-header";

const STAGES = [
  {
    number: "01",
    title: "Selection & Onboarding",
    description:
      "A chosen participant enters the residency and is formally introduced to the engaged member base — a deliberate welcome engineered for immediate, high-level visibility.",
    meta: "Entry into the cohort",
  },
  {
    number: "02",
    title: "Structured Deep Dives",
    description:
      "Guided, analytical exploration through private salons and chapter-level discussion — unlocking the full depth of the work, layer by layer.",
    meta: "Analytical immersion",
  },
  {
    number: "03",
    title: "Review & Engagement",
    description:
      "Sustained, high-quality commentary translates into measurable engagement-cluster momentum across major platforms — proof of genuine resonance.",
    meta: "Momentum & velocity",
  },
  {
    number: "04",
    title: "Long-Term Recognition",
    description:
      "Long-tail engagement cements lasting intellectual recognition for the work — a permanent mark, not a fleeting campaign.",
    meta: "A permanent legacy",
  },
];

export function Experience() {
  const imgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="experience"
      className="relative bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="The Droyce Tech Club experience"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header + intro */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeader
              index="03"
              eyebrow="The Droyce Tech Club Experience"
              title={
                <>
                  A twelve-month,
                  <br />
                  <em className="italic text-bronze-light">managed</em> experience.
                </>
              }
            />
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-[15px] font-light leading-[1.85] text-cream/70 sm:text-base">
                Each month the Selection Committee advances one to two projects
                into the residency — eighteen standout participants across the
                annual cycle. This is not a passive membership; it is an
                active, year-long immersion program. We cultivate long-tail
                momentum by guiding an elite community through structured
                deep-dives, ensuring sustainable engagement velocity and
                permanent recognition.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <p className="font-display text-2xl font-medium text-cream">1–2</p>
                  <p className="mt-1 font-mono-tech text-[9.5px] uppercase tracking-[0.22em] text-fog">
                    Selections monthly
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-medium text-cream">18</p>
                  <p className="mt-1 font-mono-tech text-[9.5px] uppercase tracking-[0.22em] text-fog">
                    Participants per cycle
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-medium text-cream">12</p>
                  <p className="mt-1 font-mono-tech text-[9.5px] uppercase tracking-[0.22em] text-fog">
                    Months of structure
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Cinematic image band with parallax */}
        <Reveal delay={0.1} className="mt-16 sm:mt-20">
          <div ref={imgRef} className="relative h-[46vh] overflow-hidden sm:h-[56vh]">
            <motion.div
              className="absolute -inset-y-[14%] inset-x-0"
              style={reduce ? undefined : { y }}
            >
              <Image
                src="/images/experience.jpg"
                alt="Silhouettes of professionals gathered around a glowing screen during a technology learning session"
                fill
                sizes="(min-width: 1024px) 100vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/45"
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-9 sm:left-10 sm:right-10">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-cream/85">
                The Residency — an active immersion, not a spectator seat
              </p>
              <span className="hidden h-px w-16 bg-bronze sm:block" aria-hidden="true" />
            </div>
          </div>
        </Reveal>

        {/* Stage rows */}
        <div className="mt-16 sm:mt-24">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.number} delay={i * 0.06}>
              <article className="group relative grid grid-cols-1 gap-6 border-t border-line py-10 transition-colors duration-700 hover:bg-ink-2/60 sm:grid-cols-12 sm:gap-8 sm:py-12 lg:px-6">
                {/* huge outlined number */}
                <div className="sm:col-span-3">
                  <span className="text-outline font-display text-[clamp(4.5rem,9vw,8rem)] font-semibold leading-[0.9] transition-all duration-700 group-hover:text-bronze group-hover:[-webkit-text-stroke:0px]">
                    {stage.number}
                  </span>
                </div>
                {/* title + description */}
                <div className="sm:col-span-7">
                  <h3 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-medium leading-tight text-cream">
                    {stage.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[14.5px] font-light leading-[1.8] text-cream/60 sm:text-[15.5px]">
                    {stage.description}
                  </p>
                </div>
                {/* meta */}
                <div className="flex items-end sm:col-span-2 sm:justify-end">
                  <p className="font-mono-tech text-[9.5px] uppercase leading-relaxed tracking-[0.24em] text-bronze/80 sm:text-right">
                    {stage.meta}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
