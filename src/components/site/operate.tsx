import Image from "next/image";
import { SectionHeader, Reveal } from "./section-header";

const PRINCIPLES = [
  {
    number: "01",
    title: "Independent Operation",
    description:
      "Droyce Tech Club operates strictly as an independent private technology society and curated innovation hub — answerable to our community, not to advertisers.",
  },
  {
    number: "02",
    title: "Community & Mutual Respect",
    description:
      "Our community is built on mutual respect and shared standards of discourse. Every salon, channel, and engagement is designed to protect the quality of the conversation.",
  },
  {
    number: "03",
    title: "Radical Transparency",
    description:
      "We are entirely transparent about our structure, our funding, and how selection decisions are made. No hidden mechanics, no fine print.",
  },
  {
    number: "04",
    title: "Intellectual Rigor",
    description:
      "Depth is the price of admission. Discussions, reviews, and engagements are held to an uncompromising standard of analytical quality.",
  },
  {
    number: "05",
    title: "Merit Alone",
    description:
      "Selection is driven purely by merit and narrative impact. We are not a commercial pay-to-play marketing model — and we never will be.",
  },
  {
    number: "06",
    title: "Long-Term Value",
    description:
      "We fund distribution, community infrastructure, and engagement programs through our private network — building for lasting impact, not quarterly returns.",
  },
];

export function Operate() {
  return (
    <section
      id="operate"
      className="relative overflow-hidden bg-paper py-24 text-ink sm:py-32 lg:py-40"
      aria-label="How we operate"
    >
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              index="06"
              eyebrow="Operating Principle"
              tone="light"
              title={
                <>
                  How we <em className="italic text-bronze-dark">operate</em>.
                </>
              }
            />
          </div>
          <div className="flex items-end lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.15}>
              <p className="text-[15px] font-light leading-[1.85] text-ink/70 sm:text-base">
                Structure is what makes depth durable. Six operating
                principles govern everything from how we are funded to how a
                single review gets written — so that quality never depends on
                chance.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Principles — numbered editorial rows */}
        <div className="mt-16 sm:mt-20">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.number} delay={Math.min(i * 0.05, 0.2)}>
              <article className="group grid grid-cols-1 items-start gap-4 border-t border-ink/12 py-8 transition-colors duration-500 hover:bg-cream-2/40 sm:grid-cols-12 sm:gap-8 sm:py-10 lg:px-6">
                <div className="sm:col-span-2">
                  <span className="text-outline-dark font-display text-6xl font-semibold leading-none transition-all duration-500 group-hover:text-bronze-dark group-hover:[-webkit-text-stroke:0px] sm:text-7xl">
                    {principle.number}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] font-medium leading-snug text-ink">
                    {principle.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="max-w-2xl text-[14.5px] font-light leading-[1.8] text-ink/70 sm:text-[15.5px]">
                    {principle.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-ink/12" aria-hidden="true" />
        </div>

        {/* What we are not / How we are funded */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <figure className="relative h-full min-h-[280px] overflow-hidden bg-ink">
              <Image
                src="/images/operate.jpg"
                alt="Modern geometric building facade at night with warm amber light lines"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono-tech text-[9.5px] uppercase tracking-[0.28em] text-cream/85">
                  Infrastructure built to last
                </p>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 lg:col-span-7">
            <Reveal delay={0.1}>
              <article className="h-full border border-ink/12 bg-cream-2/60 p-8 sm:p-10">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.26em] text-bronze-dark">
                  What we are not
                </p>
                <p className="mt-4 font-display text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium leading-snug text-ink">
                  Not a commercial &ldquo;pay-to-play&rdquo; marketing model.
                  Selection is driven by merit alone.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.18}>
              <article className="h-full border border-ink/12 bg-ink p-8 text-cream sm:p-10">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.26em] text-bronze-light">
                  How we are funded
                </p>
                <p className="mt-4 font-display text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium leading-snug text-cream">
                  Through our private network — funding distribution, community
                  infrastructure, and engagement programs.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
