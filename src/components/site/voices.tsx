import { SectionHeader, Reveal } from "./section-header";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    perspective: "Author Perspective",
    quote:
      "The depth of discussion generated around my book was staggering. Droyce Tech Club didn't just give me readers; they gave my work a legacy — treating the text with a level of consideration that is incredibly rare in the modern digital landscape.",
    attribution: "Residency Alumnus",
    initials: "RA",
  },
  {
    perspective: "Reader Perspective",
    quote:
      "In a sea of surface-level internet commentary, this community is a sanctuary. The discussions are consistently high-signal, challenging, and deeply rewarding — the rarest kind of engagement the web has to offer.",
    attribution: "Core Salon Member",
    initials: "CS",
  },
];

export function Voices() {
  return (
    <section
      id="voices"
      className="relative bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="Voices from the community"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            index="07"
            eyebrow="From the Hub"
            title={
              <>
                Voices from <em className="italic">the hub</em>.
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="max-w-xs pb-2 font-mono-tech text-[10.5px] uppercase leading-relaxed tracking-[0.22em] text-fog">
              First-hand reflections from creators and members inside the
              residency.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line-soft bg-line lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.perspective} delay={i * 0.12}>
              <figure className="group relative flex h-full flex-col justify-between bg-ink-2 p-9 transition-colors duration-700 hover:bg-ink-3 sm:p-12 lg:p-14">
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
                  <blockquote className="mt-8">
                    <p className="font-display text-[clamp(1.3rem,2.3vw,1.9rem)] font-light italic leading-[1.55] text-cream">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
                <figcaption className="mt-10 flex items-center gap-4 border-t border-line pt-6">
                  <span
                    className="flex h-11 w-11 items-center justify-center border border-gold/50 font-mono-tech text-[11px] tracking-[0.12em] text-gold"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span className="font-mono-tech text-[10.5px] uppercase tracking-[0.24em] text-cream/70">
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
