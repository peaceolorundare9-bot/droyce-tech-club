import Image from "next/image";
import { SectionHeader, Reveal, RevealLine } from "./section-header";

const MILESTONES = [
  {
    year: "2017",
    title: "The First Learning Circle",
    description:
      "A handful of builders gathered in a borrowed study to examine an overlooked debut project. That single evening became the model for everything that followed: small rooms, serious questions, and work that deserved more attention than it had received.",
  },
  {
    year: "2020",
    title: "Five Thousand Members",
    description:
      "Through quiet recommendations and word of mouth, the community crossed five thousand engaged minds. We formalized the weekly discussion format and opened our first private digital channels for international members.",
  },
  {
    year: "2023",
    title: "First Annual Residency",
    description:
      "We launched the structured twelve-month residency program with our inaugural cohort of fifteen creators. Each project received sustained, high-signal engagement that translated into lasting review velocity and cultural recognition.",
  },
  {
    year: "2025",
    title: "A Global Hub",
    description:
      "Droyce Tech Club now spans continents, with active learning circles in nine cities and a digital hub of more than twenty-one thousand engaged members. The selection committee reviews hundreds of independent projects each year to find the rare few that match our standard.",
  },
];

export function Stories() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="Our story"
    >
      {/* ambient champagne glow */}
      <div
        className="ambient-glow pointer-events-none absolute -right-48 top-1/3 h-[520px] w-[520px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Sticky intro column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                index="05"
                eyebrow="Stories"
                title={
                  <>
                    <RevealLine>Built on mutual respect</RevealLine>
                    <RevealLine>
                      and intellectual <em className="italic">rigor</em>.
                    </RevealLine>
                  </>
                }
              />
              <Reveal delay={0.15} className="mt-10 max-w-md">
                <p className="text-[15px] font-light leading-[1.85] text-cream/70 sm:text-base">
                  Droyce Tech Club operates strictly as an independent private
                  technology society and curated cultural hub. We are entirely
                  transparent about our structure. Our community is built on
                  mutual respect and intellectual rigor — not commercial
                  pay-to-play marketing models. We fund our distribution,
                  community infrastructure, and engagement programs through
                  our private network, so that our selection criteria remain
                  focused on merit and narrative impact.
                </p>
              </Reveal>
              <Reveal delay={0.22} className="mt-10">
                <figure className="relative hidden aspect-[4/3] overflow-hidden bg-ink lg:block">
                  <Image
                    src="/images/operate.jpg"
                    alt="Modern geometric building facade at night with warm amber light lines"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
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
            </div>
          </div>

          {/* Timeline column */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* gold spine */}
              <span
                className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line sm:left-[11px]"
                aria-hidden="true"
              />
              {MILESTONES.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.08} className="relative">
                  <article className="group relative pb-14 pl-10 sm:pl-16">
                    {/* node */}
                    <span
                      className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center border border-gold/60 bg-ink transition-colors duration-500 group-hover:bg-gold sm:h-[23px] sm:w-[23px]"
                      aria-hidden="true"
                    >
                      <span className="h-[5px] w-[5px] rotate-45 bg-gold transition-colors duration-500 group-hover:bg-ink" />
                    </span>
                    <p className="font-display text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-none tabular-nums text-outline transition-all duration-500 group-hover:text-gold group-hover:[-webkit-text-stroke:0px]">
                      {m.year}
                    </p>
                    <h3 className="mt-4 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug text-cream">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[14.5px] font-light leading-[1.8] text-cream/60 sm:text-[15.5px]">
                      {m.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
