const WORDS = [
  "Technology",
  "Learning",
  "Community",
  "Growth",
  "Innovation",
  "Knowledge",
  "Long-Term Impact",
];

/**
 * Slow editorial marquee — alternating serif / mono brand values.
 */
export function Marquee() {
  const sequence = [...WORDS, ...WORDS];
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-ink-2 py-6"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap pr-10">
        {[...sequence, ...sequence].map((word, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={
                i % 2 === 0
                  ? "font-display text-2xl italic text-cream/80 sm:text-3xl"
                  : "font-mono-tech text-xs uppercase tracking-[0.34em] text-bronze/80"
              }
            >
              {word}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-bronze/50" />
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-2 to-transparent" />
    </div>
  );
}
