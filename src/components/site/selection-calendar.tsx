import { Reveal } from "./reveal";

/**
 * The Selection Calendar — the operational rhythm of the annual cycle.
 *
 * Marks the committee's selection days across the closing quarter of the
 * annual cycle (October–December), mirroring the cadence of one to two
 * selections advanced into the residency each month.
 */

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

type MonthSpec = {
  name: string;
  year: number;
  days: number;
  /** empty cells before day 1 (Monday-first grid) */
  offset: number;
  /** committee selection days */
  selectionDays: number[];
};

const MONTHS: MonthSpec[] = [
  { name: "October", year: 2026, days: 31, offset: 3, selectionDays: [7, 22] },
  { name: "November", year: 2026, days: 30, offset: 6, selectionDays: [11] },
  { name: "December", year: 2026, days: 31, offset: 1, selectionDays: [4, 18] },
];

/** Build a Monday-first 5-week cell matrix; null = empty slot. */
function buildCells(spec: MonthSpec): (number | null)[] {
  const total = Math.ceil((spec.offset + spec.days) / 7) * 7;
  const cells: (number | null)[] = [];
  for (let i = 0; i < total; i++) {
    const day = i - spec.offset + 1;
    cells.push(day >= 1 && day <= spec.days ? day : null);
  }
  return cells;
}

export function SelectionCalendar() {
  return (
    <div className="mt-16 sm:mt-20">
      {/* header row — eyebrow + legend */}
      <Reveal>
        <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
              The Selection Calendar — Q4 2026
            </p>
            <p className="mt-3 max-w-lg text-[14px] font-light leading-relaxed text-cream/60">
              The closing quarter of the annual cycle, marked by the
              committee&rsquo;s cadence — one to two selections advanced into
              the residency each month.
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Calendar legend">
            <li className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3 items-center justify-center" aria-hidden="true">
                <span className="absolute h-3 w-3 rounded-full bg-gold" />
                <span className="pulse-dot absolute h-3 w-3 rounded-full bg-gold" />
              </span>
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-cream/65">
                Selection Day
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span
                className="h-3 w-3 rounded-full border border-fog/70"
                aria-hidden="true"
              />
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-cream/65">
                Open Learning Day
              </span>
            </li>
          </ul>
        </div>
      </Reveal>

      {/* month cards */}
      <div className="mt-10 grid grid-cols-1 gap-px border border-line-soft bg-line lg:grid-cols-3">
        {MONTHS.map((spec, m) => {
          const cells = buildCells(spec);
          const picks = spec.selectionDays.length;
          return (
            <Reveal key={spec.name} delay={0.08 * m} className="h-full">
              <article className="group h-full bg-ink-2 p-6 transition-colors duration-700 hover:bg-ink-3 sm:p-8">
                {/* month header */}
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-display text-2xl font-medium text-cream">
                    {spec.name}
                    <span className="ml-2 font-mono-tech text-[10px] font-normal uppercase tracking-[0.22em] text-fog">
                      {spec.year}
                    </span>
                  </h4>
                  <p className="shrink-0 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-gold-light">
                    {picks} {picks === 1 ? "selection" : "selections"}
                  </p>
                </div>

                {/* weekday header */}
                <div className="mt-6 grid grid-cols-7 gap-1" aria-hidden="true">
                  {WEEKDAYS.map((d) => (
                    <span
                      key={d}
                      className="pb-2 text-center font-mono-tech text-[9px] uppercase tracking-[0.14em] text-fog/60"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* day grid */}
                <ol className="grid grid-cols-7 gap-1" aria-label={`${spec.name} ${spec.year} selection calendar`}>
                  {cells.map((day, i) => {
                    if (day === null) {
                      return <li key={i} className="aspect-square" aria-hidden="true" />;
                    }
                    const isSelection = spec.selectionDays.includes(day);
                    return (
                      <li key={i}>
                        <span
                          className={
                            isSelection
                              ? "relative flex aspect-square items-center justify-center bg-gold font-mono-tech text-[11px] font-semibold tabular-nums text-ink"
                              : "flex aspect-square items-center justify-center border border-line/70 font-mono-tech text-[11px] font-normal tabular-nums text-cream/45 transition-colors duration-500 group-hover:border-line"
                          }
                          {...(isSelection ? { "aria-label": `${spec.name} ${day} — selection day` } : {})}
                        >
                          {day}
                          {isSelection && (
                            <span
                              className="pulse-dot absolute inset-0 bg-gold/50"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* footnote */}
      <Reveal delay={0.15}>
        <p className="mt-6 font-mono-tech text-[9.5px] uppercase leading-relaxed tracking-[0.22em] text-fog">
          Five committee selections close the cycle — each one enters a
          twelve-month managed experience.
        </p>
      </Reveal>
    </div>
  );
}
