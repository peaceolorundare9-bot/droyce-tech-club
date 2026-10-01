import { Reveal, TextReveal, RevealLine } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}

/**
 * Editorial section header — mono eyebrow with index, large serif headline.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  tone = "dark",
  align = "left",
  className,
}: SectionHeaderProps) {
  const isDark = tone === "dark";
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <span
            className={cn(
              "font-mono-tech text-[11px] tracking-[0.3em]",
              isDark ? "text-bronze" : "text-bronze-dark"
            )}
          >
            {index}
          </span>
          <span
            className={cn(
              "h-px w-12",
              isDark ? "bg-bronze/50" : "bg-bronze-dark/50"
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "font-mono-tech text-[11px] uppercase tracking-[0.3em]",
              isDark ? "text-fog" : "text-fog-dark"
            )}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <TextReveal className="mt-6">
        <h2
          className={cn(
            "font-display text-[clamp(2.2rem,5.2vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.01em]",
            isDark ? "text-cream" : "text-ink"
          )}
        >
          {title}
        </h2>
      </TextReveal>
    </div>
  );
}

export { Reveal, TextReveal, RevealLine };
