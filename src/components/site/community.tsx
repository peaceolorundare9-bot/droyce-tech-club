import Image from "next/image";
import { SectionHeader, Reveal, TextReveal, RevealLine } from "./section-header";

const PILLARS = [
  {
    title: "Curated for merit alone",
    description:
      "Selection is steered by intellectual depth and craft. We never select based on commercial trends, social media following, or marketing budgets. Every project earns its place.",
  },
  {
    title: "Independent and transparent",
    description:
      "We operate as an independent private technology society. There is no pay-to-play model anywhere in our process. Our funding comes from our private network, so selection criteria stay purely focused on merit.",
  },
  {
    title: "Active immersion, not passive selection",
    description:
      "A residency is twelve months of structured engagement, not a one-time announcement. We guide an elite member base through deep dives that build long-tail momentum and lasting recognition for each creator.",
  },
  {
    title: "Permanent intellectual recognition",
    description:
      "We treat technology as a permanent cultural contribution. Reviews and discussions from our community stay visible and continue to compound long after the residency cycle closes.",
  },
];

export function Community() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="Why choose us"
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
              eyebrow="Why Choose Us"
              title={
                <>
                  <RevealLine>What truly sets us</RevealLine>
                  <RevealLine>
                    <em className="italic">apart</em> from any other
                  </RevealLine>
                  <RevealLine>learning community.</RevealLine>
                </>
              }
            />

            <Reveal delay={0.15} className="mt-10 max-w-xl">
              <p className="text-[15.5px] font-light leading-[1.85] text-cream/70 sm:text-[17px]">
                We do not run a marketing program dressed up as a tech club.
                Our community is built on mutual respect and intellectual
                rigor. Every decision we make is designed to protect the
                quality of the conversations that happen inside our learning
                circles and to give serious work the lasting attention it
                deserves.
              </p>
            </Reveal>

            {/* Why members stay */}
            <Reveal delay={0.25} className="mt-12">
              <div className="flex items-end gap-6 border-t border-line pt-8">
                <p className="font-display text-[clamp(4.5rem,9vw,7.5rem)] font-semibold leading-none tabular-nums text-gold">
                  96<span className="text-cream">%</span>
                </p>
                <div className="pb-3">
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.26em] text-fog">
                    Why members stay
                  </p>
                  <p className="mt-1.5 max-w-[18rem] text-[13.5px] font-light leading-relaxed text-cream/55">
                    Ninety-six percent of members renew their membership every
                    year. We do not chase trends, we do not pad our shelves
                    with quick releases, and we treat every selected project
                    as a year-long conversation worth finishing.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-px border border-line-soft bg-line">
                <div className="bg-ink-2 px-4 py-5 sm:px-6">
                  <p className="font-display text-2xl font-semibold text-cream sm:text-3xl">4.9</p>
                  <p className="mt-1.5 font-mono-tech text-[9px] uppercase tracking-[0.2em] text-fog">
                    Member rating
                  </p>
                </div>
                <div className="bg-ink-2 px-4 py-5 sm:px-6">
                  <p className="font-display text-2xl font-semibold text-cream sm:text-3xl">12</p>
                  <p className="mt-1.5 font-mono-tech text-[9px] uppercase tracking-[0.2em] text-fog">
                    Month residency
                  </p>
                </div>
                <div className="bg-ink-2 px-4 py-5 sm:px-6">
                  <p className="font-display text-2xl font-semibold text-cream sm:text-3xl">
                    100<span className="text-gold">%</span>
                  </p>
                  <p className="mt-1.5 font-mono-tech text-[9px] uppercase tracking-[0.2em] text-fog">
                    Independent
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
