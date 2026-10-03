import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./reveal";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Selection Committee", href: "#committee" },
  { label: "How We Operate", href: "#operate" },
  { label: "Voices", href: "#voices" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-[#08090b]">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Reveal>
              <a href="#home" className="group inline-flex items-center gap-4" aria-label="Droyce Tech Club — back to top">
                <span
                  className="flex h-12 w-12 items-center justify-center border border-gold/60 bg-gold/10 font-display text-xl text-cream transition-colors duration-500 group-hover:bg-gold group-hover:text-ink"
                  aria-hidden="true"
                >
                  D
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-xl font-semibold tracking-[0.08em] text-cream">
                    DROYCE
                  </span>
                  <span className="mt-1 font-mono-tech text-[10px] font-medium uppercase tracking-[0.42em] text-gold">
                    Tech Club
                  </span>
                </span>
              </a>
              <p className="mt-7 max-w-sm text-[14.5px] font-light leading-relaxed text-cream/55">
                A premium technology, learning and digital community —
                connecting independent creators with an engaged global network
                of deeply invested minds.
              </p>
              <a
                href="mailto:drpeace.droycetechclub@gmail.com"
                className="group mt-7 inline-flex items-center gap-3 border-b border-gold/40 pb-1 text-[14px] text-cream/80 transition-colors duration-300 hover:border-gold hover:text-gold-light"
              >
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                drpeace.droycetechclub@gmail.com
              </a>
            </Reveal>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-fog">
                Navigate
              </p>
              <nav aria-label="Footer navigation">
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-[14.5px] font-light text-cream/65 transition-colors duration-300 hover:text-gold-light"
                      >
                        {link.label}
                        <ArrowUpRight
                          className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          </div>

          {/* Statement */}
          <div className="lg:col-span-3">
            <Reveal delay={0.18}>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-fog">
                The Standard
              </p>
              <p className="mt-6 font-display text-2xl font-light italic leading-snug text-cream/80">
                &ldquo;Depth, at scale, still wins.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3" aria-hidden="true">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                <span className="h-px w-16 bg-gold/40" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="pointer-events-none mt-20 select-none overflow-hidden" aria-hidden="true">
          <p className="whitespace-nowrap text-center font-display text-[clamp(3rem,10.5vw,10rem)] font-semibold leading-none tracking-[0.06em] text-cream/[0.05]">
            DROYCE TECH CLUB
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="font-mono-tech text-[10.5px] uppercase tracking-[0.2em] text-fog">
            © 2026 Droyce Tech Club. All Rights Reserved.
          </p>
          <p className="font-mono-tech text-[10.5px] uppercase tracking-[0.2em] text-fog">
            A Private Technology Society &amp; Managed Digital Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
