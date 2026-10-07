import Image from "next/image";
import { SectionHeader, Reveal, TextReveal, RevealLine } from "./section-header";

const IDEAS = [
  "Technology",
  "Learning",
  "Community",
  "Growth",
  "Innovation",
  "Knowledge",
  "Long-Term Impact",
];

export function Foundation() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="About Droyce Tech Club"
    >
      {/* ambient champagne glow */}
      <div
        className="ambient-glow pointer-events-none absolute -right-40 top-1/4 h-[560px] w-[560px]"
        aria-hidden="true"
      />
      {/* faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(197,160,89,0.03) 1px, transparent 1px)",
          backgroundSize: "clamp(80px, 12vw, 160px) 100%",
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        {/* Text column */}
        <div className="lg:col-span-7 lg:pr-10">
          <SectionHeader
            index="01"
            eyebrow="About Droyce Tech Club"
            title={
              <>
                <RevealLine>We treat technology as a</RevealLine>
                <RevealLine>
                  cultural <em className="italic">contribution</em> —
                </RevealLine>
                <RevealLine>not a commodity.</RevealLine>
              </>
            }
          />

          <Reveal delay={0.15} className="mt-10 max-w-2xl space-y-6">
            <p className="text-[15.5px] font-light leading-[1.85] text-cream/70 sm:text-[17px]">
              Droyce Tech Club is built on the belief that technology still
              matters as a{" "}
              <strong className="font-semibold text-cream">
                permanent cultural contribution
              </strong>
              , not just a passing release cycle. We scout independently
              built works that deserve a{" "}
              <strong className="font-semibold text-cream">legacy spotlight</strong>{" "}
              and bring them to a community of careful, engaged minds who
              treat each project as a long conversation rather than a quick
              consumption.
            </p>
            <p className="text-[15.5px] font-light leading-[1.85] text-cream/70 sm:text-[17px]">
              Our work bridges technology, human progress, and community. We
              dedicate ourselves to discovering exceptional, independently
              built works that deserve a wider legacy, then introduce those
              creators to a sophisticated network of deeply engaged thinkers
              who foster{" "}
              <strong className="font-semibold text-cream">high-signal discourse</strong>{" "}
              around their work.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <div className="flex items-center gap-5 border-l-2 border-gold/60 pl-6">
              <div>
                <p className="font-display text-xl font-medium text-cream">
                  Dr. Tomiwa Johnson
                </p>
                <p className="mt-1 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-gold">
                  Co-Founder and Selection Committee Chair
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <ul className="flex flex-wrap gap-3" aria-label="Core ideas">
              {IDEAS.map((idea) => (
                <li
                  key={idea}
                  className="border border-line-soft bg-ink-2 px-4 py-2 font-mono-tech text-[10.5px] font-medium uppercase tracking-[0.16em] text-fog transition-colors duration-300 hover:border-gold/50 hover:text-gold"
                >
                  {idea}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32} className="mt-12">
            <div className="flex items-center gap-5 border-t border-line pt-8">
              <span className="font-display text-5xl font-medium text-gold">
                12
              </span>
              <p className="max-w-[20rem] font-mono-tech text-[10.5px] uppercase leading-relaxed tracking-[0.18em] text-fog">
                Months of structured, managed engagement — one full cycle to
                build a lasting legacy.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Image column — editorial collage */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2} y={48}>
            <div className="relative">
              {/* offset gold frame */}
              <div
                className="absolute -left-4 -top-4 h-full w-full border border-gold/40 sm:-left-6 sm:-top-6"
                aria-hidden="true"
              />
              <figure className="relative aspect-[3/4] overflow-hidden bg-ink">
                <Image
                  src="/images/foundation.jpg"
                  alt="A focused young professional writing code on a laptop in a dark studio, lit by warm gold screen glow"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                  <span className="font-mono-tech text-[9.5px] uppercase tracking-[0.28em] text-cream/85">
                    The Craft of Deep Work
                  </span>
                  <span className="h-px w-10 bg-gold" aria-hidden="true" />
                </figcaption>
              </figure>

              {/* floating stat card */}
              <div className="absolute -bottom-8 -left-3 border border-line-soft bg-ink-2 px-7 py-6 shadow-luxe sm:-left-10">
                <p className="font-display text-4xl font-semibold tabular-nums text-cream sm:text-5xl">
                  21,000<span className="text-gold">+</span>
                </p>
                <p className="mt-2 font-mono-tech text-[9.5px] uppercase tracking-[0.24em] text-fog">
                  Global Hub Members
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
