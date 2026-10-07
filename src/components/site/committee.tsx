import Image from "next/image";
import { Award, BookOpen, Feather } from "lucide-react";
import { SectionHeader, Reveal, RevealLine } from "./section-header";

const PRINCIPLES = [
  {
    icon: BookOpen,
    title: "Merit First",
    description:
      "Every project is reviewed in full and judged on its craft, intellectual depth, and lasting cultural contribution. No marketing budgets, no social metrics, no shortcuts.",
  },
  {
    icon: Feather,
    title: "Independent Voice",
    description:
      "The club operates without commercial pressure. Selection criteria stay focused on the work itself, funded entirely by our private patron network.",
  },
  {
    icon: Award,
    title: "Permanent Recognition",
    description:
      "Selected projects receive a full year of structured engagement that builds lasting review momentum and cultural recognition long after the cycle closes.",
  },
];

export function Committee() {
  return (
    <section
      id="committee"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="The founder"
    >
      {/* faint oversized watermark */}
      <span
        className="pointer-events-none absolute -right-8 top-16 hidden select-none font-display text-[11rem] font-semibold italic leading-none text-cream/[0.03] lg:block"
        aria-hidden="true"
      >
        Founder
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
                  alt="Portrait of Dr. Tomiwa Johnson, Co-Founder and Selection Committee Chair of Droyce Tech Club"
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
                    Dr. Tomiwa Johnson
                  </p>
                  <p className="mt-1.5 font-mono-tech text-[10px] uppercase tracking-[0.26em] text-gold-light">
                    Co-Founder &amp; Selection Committee Chair
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-8">
          <SectionHeader
            index="06"
            eyebrow="The Founder"
            title={
              <>
                <RevealLine>Dr. Tomiwa</RevealLine>
                <RevealLine>
                  <em className="italic">Johnson</em>.
                </RevealLine>
              </>
            }
          />

          <Reveal delay={0.15} className="mt-10 max-w-2xl">
            <p className="text-[15.5px] font-light leading-[1.85] text-cream/70 sm:text-[17px]">
              Dr. Tomiwa Johnson founded Droyce Tech Club in 2017 with a
              simple conviction — that the best independent work deserves a
              longer, more serious conversation. With roots in narrative
              structure and community building, he leads the selection
              committee, steers the annual residency cycle, and personally
              reads every submission that reaches the shortlist. There is no
              committee bureaucracy. Every decision comes down to one curator
              who cares about the lasting life of a project.
            </p>
          </Reveal>

          {/* Principles */}
          <div className="mt-12 grid grid-cols-1 gap-px border border-line-soft bg-line sm:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.07} className="h-full">
                <article className="group h-full bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink-3">
                  <p.icon
                    className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-lg font-medium leading-snug text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13px] font-light leading-relaxed text-cream/55">
                    {p.description}
                  </p>
                  <span
                    className="mt-5 block h-px w-8 bg-gold/60 transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.28} className="mt-10">
            <p className="border-l-2 border-gold pl-5 text-[14px] font-light italic leading-relaxed text-cream/60">
              Every submission is read in full and answered personally by Dr.
              Tomiwa Johnson.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
