import { Reveal, TextReveal, RevealLine } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Editorial section header — mono eyebrow with index, large serif headline.
 * Obsidian canvas + champagne gold accents throughout.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="font-mono-tech text-[11px] tracking-[0.3em] text-gold">
            {index}
          </span>
          <span className="h-px w-12 bg-gold/50" aria-hidden="true" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-fog">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <TextReveal className="mt-6">
        <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.01em] text-cream">
          {title}
        </h2>
      </TextReveal>
    </div>
  );
}

export { Reveal, TextReveal, RevealLine };
