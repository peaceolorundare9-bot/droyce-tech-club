import Image from "next/image";
import { SectionHeader, Reveal, TextReveal, RevealLine } from "./section-header";

const PILLARS = [
  {
    title: "Private Channels",
    description: "Discourse spaces reserved for verified members — no noise, no algorithms.",
  },
  {
    title: "Digital Salons",
    description: "Live, moderated gatherings where selected works are examined in depth.",
  },
  {
    title: "Analytical Commentary",
    description: "Structured critique that engages with ideas rather than reactions.",
  },
  {
    title: "Authentic Feedback",
    description: "Rigorous, honest responses that reflect the true depth of the work.",
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="Community and engagement"
    >
      {/* ambient champagne glow */}
      <div
        className="ambient-glow pointer-events-none absolute -left-48 bottom-0 h-[560px] w-[560px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Big statement */}
          <div className="lg:col-span-7">
            <SectionHeader
              index="04"
              eyebrow="High-Signal Engagement"
              title={
                <>
                  <RevealLine>When the right minds</RevealLine>
                  <RevealLine>
                    meet the right ideas,
                  </RevealLine>
                  <RevealLine>
                    impact is <em className="italic">inevitable</em>.
                  </RevealLine>
                </>
              }
            />

            <Reveal delay={0.15} className="mt-10 max-w-xl">
              <p className="text-[15.5px] font-light leading-[1.85] text-cream/70 sm:text-[17px]">
                Our community thrives on rigorous, authentic feedback. Through
                our private channels and active digital salons, we generate
                consistent, analytical commentary that reflects the true depth
                of every selected work. This structured engagement naturally
                translates into a benchmark of high-quality engagement clusters
                across major platforms — proof that depth, at scale, still
                wins.
              </p>
            </Reveal>

            {/* Benchmark */}
            <Reveal delay={0.25} className="mt-12">
              <div className="flex items-end gap-6 border-t border-line pt-8">
                <p className="font-display text-[clamp(4.5rem,9vw,7.5rem)] font-semibold leading-none tabular-nums text-gold">
                  150<span className="text-cream">+</span>
                </p>
                <div className="pb-3">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.26em] text-fog">
                    Engagement clusters
                  </p>
                  <p className="mt-1.5 max-w-[15rem] text-[13.5px] font-light leading-relaxed text-cream/55">
                    The benchmark our structured engagement sustains across
                    major platforms.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={48}>
              <figure className="relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink lg:aspect-[4/4.6]">
                  <Image
                    src="/images/community.jpg"
                    alt="Abstract visualization of a global digital community network with glowing golden nodes"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                    <span className="font-mono-tech text-[9.5px] uppercase tracking-[0.28em] text-cream/85">
                      One global network, many minds
                    </span>
                    <span className="h-px w-10 bg-gold" aria-hidden="true" />
                  </figcaption>
                </div>
                {/* corner detail */}
                <span
                  className="absolute -right-3 -top-3 h-14 w-14 border-r border-t border-gold/50"
                  aria-hidden="true"
                />
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 gap-px border border-line-soft bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="group h-full bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink-3 sm:p-8">
                <span
                  className="font-mono-tech text-[10px] tracking-[0.24em] text-gold"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-cream sm:text-[1.35rem]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[13.5px] font-light leading-relaxed text-cream/55">
                  {pillar.description}
                </p>
                <span
                  className="mt-6 block h-px w-8 bg-gold/60 transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
