import { SectionHeader, Reveal, RevealLine } from "./section-header";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    perspective: "Creator Perspective",
    quote:
      "The depth of discussion generated around my project was staggering. Droyce Tech Club did not just give me an audience — they gave my work a legacy, treating it with a level of consideration that is incredibly rare in the modern digital landscape.",
    attribution: "Residency Alumnus · Creator, 2024 Cycle",
    initials: "RA",
  },
  {
    perspective: "Member Perspective",
    quote:
      "In a sea of surface-level internet commentary, this community is a sanctuary. The discussions are consistently high-signal, challenging, and deeply rewarding. I have thought more carefully this year than I have in the last decade.",
    attribution: "Core Community Member · London Circle",
    initials: "CB",
  },
  {
    perspective: "Creator Perspective",
    quote:
      "What sets this community apart is the patience. My project was given a full year of serious engagement, and the reviews that came out of it still surface in conversations eighteen months later. That kind of long-tail momentum is impossible to manufacture.",
    attribution: "Independent Creator · Residency, 2023 Cycle",
    initials: "IA",
  },
];

export function Voices() {
  return (
    <section
      id="community"
      className="relative bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="What creators and members say about us"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            index="07"
            eyebrow="Community"
            title={
              <>
                <RevealLine>What creators and</RevealLine>
                <RevealLine>
                  members <em className="italic">say</em> about us.
                </RevealLine>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="max-w-xs pb-2 font-mono-tech text-[10.5px] uppercase leading-relaxed tracking-[0.22em] text-fog">
              4.9 average from 2,000+ active members
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line-soft bg-line lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.attribution} delay={i * 0.12} className="h-full">
              <figure className="group relative flex h-full flex-col justify-between bg-ink-2 p-8 transition-colors duration-700 hover:bg-ink-3 sm:p-10 lg:p-11">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.26em] text-gold">
                      <Quote className="h-3.5 w-3.5" aria-hidden="true" />
                      {t.perspective}
                    </span>
                    <span
                      className="font-mono-tech text-[10px] tracking-[0.2em] text-fog/50"
                      aria-hidden="true"
                    >
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <blockquote className="mt-7">
                    <p className="font-display text-[clamp(1.15rem,1.8vw,1.5rem)] font-light italic leading-[1.6] text-cream">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
                <figcaption className="mt-9 flex items-center gap-4 border-t border-line pt-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 font-mono-tech text-[11px] tracking-[0.12em] text-gold"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] leading-relaxed text-cream/70">
                    {t.attribution}
                  </span>
                </figcaption>
                <span
                  className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
