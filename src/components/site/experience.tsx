"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SectionHeader, Reveal } from "./section-header";

const STAGES = [
  {
    number: "01",
    title: "Structured Learning Journey",
    description:
      "When your project is selected, it enters a twelve-month ecosystem of guided deep engagement with an elite member base. Every month brings new discussion prompts, hosted learning groups, and structured pathways that turn a single project into a year-long conversation.",
    meta: "Guided deep engagement",
  },
  {
    number: "02",
    title: "High-Signal Discussions",
    description:
      "Our private channels and active discussions generate consistent analytical commentary that reflects the true depth of your work. Members meet weekly in small groups to examine design, structure, and the questions your project raises.",
    meta: "Analytical commentary",
  },
  {
    number: "03",
    title: "Sustainable Review Velocity",
    description:
      "We cultivate long-tail momentum for your work by guiding an elite member base through structured engagement — ensuring sustainable review velocity and permanent intellectual recognition, rather than a one-week spike.",
    meta: "Long-tail momentum",
  },
  {
    number: "04",
    title: "Selection Committee Access",
    description:
      "Selected creators work directly with our committee of technology specialists and cultural curators. You get honest editorial feedback, network introductions, and a partner invested in the long life of your work.",
    meta: "Direct committee access",
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
              eyebrow="The Experience"
              title={
                <>
                  A <em className="italic">year-long</em> immersion
                  <br />
                  for the work that earns it.
                </>
              }
            />
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-[15px] font-light leading-[1.85] text-cream/70 sm:text-base">
                The residency is not a passive community selection. It is an
                active, twelve-month immersion program that treats each
                selected project as a permanent cultural contribution worth a
                sustained conversation between you and a serious global
                membership.
              </p>
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
              <span className="hidden h-px w-16 bg-gold sm:block" aria-hidden="true" />
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
                  <span className="text-outline font-display text-[clamp(4.5rem,9vw,8rem)] font-semibold leading-[0.9] transition-all duration-700 group-hover:text-gold group-hover:[-webkit-text-stroke:0px]">
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
                  <p className="font-mono-tech text-[9.5px] uppercase leading-relaxed tracking-[0.24em] text-gold/80 sm:text-right">
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
