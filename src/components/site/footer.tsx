import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./reveal";

const EXPLORE_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Community", href: "#community" },
  { label: "Stories", href: "#stories" },
];

const MORE_LINKS = [
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
  { label: "Committee", href: "#committee" },
  { label: "Why Choose Us", href: "#why" },
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
                An independent private technology society connecting brilliant
                independent creators with an elite global learning community
                for a year-long journey of deep digital engagement.
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
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-fog">
                Explore
              </p>
              <nav aria-label="Footer navigation">
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3">
                  {EXPLORE_LINKS.map((link) => (
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

          <div className="lg:col-span-2">
            <Reveal delay={0.14}>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-fog">
                More
              </p>
              <nav aria-label="Footer supplementary navigation">
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3">
                  {MORE_LINKS.map((link) => (
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

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <Reveal delay={0.18}>
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-fog">
                The Lab Dispatch
              </p>
              <p className="mt-6 text-[14px] font-light leading-relaxed text-cream/65">
                A short monthly letter from the committee. New selections,
                project notes, and one essay worth your weekend.
              </p>
              <a
                href="mailto:drpeace.droycetechclub@gmail.com?subject=Subscribe%20to%20The%20Lab%20Dispatch"
                className="group mt-6 inline-flex items-center gap-3 border border-gold/40 px-6 py-3 font-mono-tech text-[10px] font-semibold uppercase tracking-[0.22em] text-cream transition-all duration-500 hover:border-gold/70 hover:bg-gold/10 hover:text-gold"
              >
                <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                Subscribe
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
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
            © 2017 Droyce Tech Club. All Rights Reserved. Co-Founded by Dr.
            Tomiwa Johnson.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="font-mono-tech text-[10.5px] uppercase tracking-[0.2em] text-fog transition-colors duration-300 hover:text-gold-light"
            >
              Privacy
            </a>
            <a
              href="#home"
              className="font-mono-tech text-[10.5px] uppercase tracking-[0.2em] text-fog transition-colors duration-300 hover:text-gold-light"
            >
              Terms
            </a>
            <a
              href="#home"
              className="font-mono-tech text-[10.5px] uppercase tracking-[0.2em] text-fog transition-colors duration-300 hover:text-gold-light"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
