import { Counter } from "./counter";
import { Reveal } from "./reveal";

const STATS = [
  {
    target: 21000,
    suffix: "+",
    label: "Global Hub Members",
    sub: "An engaged, international technology and learning community.",
  },
  {
    target: 2000,
    suffix: "+",
    label: "Active Digital Salon Members",
    sub: "Members participating in private discourse channels.",
  },
  {
    target: 150,
    suffix: "+",
    label: "High-Quality Engagement Clusters",
    sub: "Consistent engagement velocity across major platforms.",
  },
  {
    target: 18,
    suffix: "",
    label: "Standout Participants Per Cycle",
    sub: "A deliberately limited, high-attention residency cohort.",
  },
];

export function Stats() {
  return (
    <section
      className="relative bg-ink py-24 sm:py-28 lg:py-32"
      aria-label="Droyce Tech Club in numbers"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.2rem)] font-medium leading-tight text-cream">
              The community, <em className="italic">measured</em>.
            </h2>
            <p className="max-w-sm font-mono-tech text-[10.5px] uppercase leading-relaxed tracking-[0.22em] text-fog">
              Numbers that reflect depth — not vanity metrics.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-1 gap-px border border-line-soft bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <article
                key={stat.label}
                className="group relative bg-ink-2 p-8 transition-colors duration-700 hover:bg-ink-3 sm:p-10 lg:p-11"
              >
                <span
                  className="absolute right-6 top-6 font-mono-tech text-[10px] tracking-[0.2em] text-fog/50"
                  aria-hidden="true"
                >
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-[clamp(3rem,5.5vw,4.6rem)] font-semibold leading-none tabular-nums tracking-tight text-cream transition-colors duration-500 group-hover:text-gold-light">
                  <Counter target={stat.target} suffix={stat.suffix} duration={2200} />
                </p>
                <h3 className="mt-6 font-mono-tech text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                  {stat.label}
                </h3>
                <p className="mt-3 text-[13.5px] font-light leading-relaxed text-cream/55">
                  {stat.sub}
                </p>
                <span
                  className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
