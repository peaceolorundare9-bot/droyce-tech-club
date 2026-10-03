import Image from "next/image";
import { SectionHeader, Reveal } from "./section-header";

const ROLES = [
  "Technology Specialists",
  "Academic Minds",
  "Cultural Curators",
];

export function Committee() {
  return (
    <section
      id="committee"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="The selection committee"
    >
      {/* faint oversized watermark */}
      <span
        className="pointer-events-none absolute -right-8 top-16 hidden select-none font-display text-[11rem] font-semibold italic leading-none text-cream/[0.03] lg:block"
        aria-hidden="true"
      >
        Curate
      </span>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        {/* Portrait */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Reveal y={48}>
            <figure className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -right-4 -top-4 h-full w-full border border-gold/40 sm:-right-6 sm:-top-6"
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-2">
                <Image
                  src="/images/committee.jpg"
                  alt="Portrait of Prof. Waheed Heritage, Selection Committee Chair of Droyce Tech Club"
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-7 pb-8">
                  <p className="font-display text-2xl font-medium text-cream">
                    Prof. Waheed Heritage
                  </p>
                  <p className="mt-1.5 font-mono-tech text-[10px] uppercase tracking-[0.26em] text-gold-light">
                    Selection Committee Chair
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-8">
          <SectionHeader
            index="05"
            eyebrow="The Curators"
            title={
              <>
                The Selection
                <br />
                <em className="italic">Committee</em>.
              </>
            }
          />

          <Reveal delay={0.15} className="mt-10 max-w-2xl">
            <p className="text-[15.5px] font-light leading-[1.85] text-cream/70 sm:text-[17px]">
              Our curation process is steered by{" "}
              <strong className="font-semibold text-cream">
                Prof. Waheed Heritage
              </strong>
              , Selection Committee Chair, alongside a dedicated team of
              technology specialists, academic minds, and cultural curators.
              With deep roots in narrative structure and community building,
              the committee reviews hundreds of independent projects annually
              to discover the rare few that match our community&apos;s standard
              for intellectual depth.
            </p>
          </Reveal>

          <Reveal delay={0.22} className="mt-10">
            <ul className="flex flex-wrap gap-3" aria-label="Committee roles">
              {ROLES.map((role) => (
                <li
                  key={role}
                  className="border border-line-soft bg-ink-2 px-5 py-2.5 font-mono-tech text-[10.5px] font-medium uppercase tracking-[0.18em] text-cream/75 transition-colors duration-300 hover:border-gold/60 hover:text-gold-light"
                >
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3} className="mt-12">
            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
              <div className="bg-ink-2 p-7">
                <p className="font-display text-4xl font-semibold tabular-nums text-cream">
                  100<span className="text-gold">s</span>
                </p>
                <p className="mt-3 font-mono-tech text-[10px] uppercase leading-relaxed tracking-[0.2em] text-fog">
                  Independent projects reviewed every year
                </p>
              </div>
              <div className="bg-ink-2 p-7">
                <p className="font-display text-4xl font-semibold text-cream">
                  <span className="text-gold">1</span>–2
                </p>
                <p className="mt-3 font-mono-tech text-[10px] uppercase leading-relaxed tracking-[0.2em] text-fog">
                  Advanced monthly into the residency
                </p>
              </div>
            </div>
            <p className="mt-6 border-l-2 border-gold pl-5 text-[14px] font-light italic leading-relaxed text-cream/60">
              Narrative structure &amp; community building — the twin
              disciplines behind every selection decision.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
