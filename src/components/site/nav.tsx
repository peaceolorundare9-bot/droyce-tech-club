"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Community", href: "#community" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#home"
      className="group flex items-center gap-3"
      aria-label="Droyce Tech Club — back to top"
    >
      <span
        className={cn(
          "flex items-center justify-center border border-gold/60 bg-gold/10 font-display text-cream transition-colors duration-500 group-hover:bg-gold group-hover:text-ink",
          compact ? "h-9 w-9 text-base" : "h-10 w-10 text-lg"
        )}
        aria-hidden="true"
      >
        D
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-semibold tracking-[0.08em] text-cream">
          DROYCE
        </span>
        <span className="mt-1 font-mono-tech text-[9px] font-medium uppercase tracking-[0.42em] text-gold">
          Tech Club
        </span>
      </span>
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled
            ? "border-b border-line-soft bg-[rgba(11,12,14,0.85)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
          aria-label="Primary navigation"
        >
          <Wordmark compact={scrolled} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 xl:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative font-mono-tech text-[10.5px] font-medium uppercase tracking-[0.18em] text-cream/70 transition-colors duration-300 hover:text-cream"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-2 bg-[linear-gradient(135deg,#c5a059_0%,#a37f3a_100%)] px-6 py-2.5 font-mono-tech text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink shadow-glow transition-all duration-500 hover:bg-[linear-gradient(135deg,#e6ca65_0%,#c5a059_100%)] hover:shadow-glow-lg sm:inline-flex"
            >
              Join Droyce Tech Club
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors duration-300 hover:border-gold hover:text-gold xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex h-20 items-center justify-between px-5 sm:px-8">
              <Wordmark compact />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-line py-4"
                    >
                      <span className="font-mono-tech text-[10px] tracking-[0.3em] text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl font-medium text-cream transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-luxe-solid mt-10"
              >
                Join Droyce Tech Club
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
            </nav>

            <div className="px-8 pb-10">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-fog">
                A Private Technology Society
              </p>
              <a
                href="mailto:drpeace.droycetechclub@gmail.com"
                className="mt-3 block text-sm text-cream/80 transition-colors hover:text-gold"
              >
                drpeace.droycetechclub@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
