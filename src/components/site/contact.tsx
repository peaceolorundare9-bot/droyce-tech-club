"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Loader2, Mail } from "lucide-react";
import { SectionHeader, Reveal, RevealLine } from "./section-header";

// Contact info — unchanged per owner's instruction.
const CONTACT_EMAIL = "drpeace.droycetechclub@gmail.com";
const CONTACT_NAME = "Dr. Tomiwa Johnson";

// Baked in at build time by scripts/build-static.sh. On static hosting there is
// no API backend, so the form goes straight to the prefilled mailto flow.
const IS_STATIC_BUILD = process.env.NEXT_PUBLIC_STATIC_BUILD === "1";

const CATEGORIES = [
  "Web & Mobile Apps",
  "AI & Machine Learning",
  "Data & Analytics",
  "Cybersecurity",
  "Hardware & IoT",
  "Game Development",
  "Open Source",
  "Other",
];

const inputClass =
  "mt-3 w-full border-b border-line-soft bg-transparent pb-3 text-[15px] font-light text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [mailtoUrl, setMailtoUrl] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const title = String(data.get("title") ?? "").trim();
    const category = String(data.get("category") ?? "").trim();
    const synopsis = String(data.get("synopsis") ?? "").trim();
    const why = String(data.get("why") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();

    if (!name || !email || !title || !category || !synopsis || !why) {
      setStatus("error");
      setErrorMessage("Please complete every required field before submitting.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Prepare the mailto fallback (functional email delivery)
    const subject = `Committee Consideration — ${title}`;
    const body = [
      `Full Name: ${name}`,
      `Email: ${email}`,
      `Project Title: ${title}`,
      `Category: ${category}`,
      "",
      "Brief Overview:",
      synopsis,
      "",
      "Why this project belongs in Droyce Tech Club:",
      why,
      ...(notes ? ["", "Anything else we should know:", notes] : []),
    ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoUrl(mailto);

    // Static hosting (Cloudflare Pages): no API backend, use the mailto flow.
    if (IS_STATIC_BUILD) {
      setStatus("success");
      form.reset();
      window.location.href = mailto;
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, title, category, synopsis, why, notes }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }
      setStatus("success");
      form.reset();
      // Functional mailto fallback — open the email client prefilled to the
      // correct address so the submission reaches the committee.
      window.location.href = mailto;
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="Contact Droyce Tech Club"
    >
      {/* ambient background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/contact.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/88 to-ink"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        {/* Left — invitation */}
        <div className="lg:col-span-5">
          <SectionHeader
            index="09"
            eyebrow="Contact"
            title={
              <>
                <RevealLine>Submit your project</RevealLine>
                <RevealLine>
                  for committee <em className="italic">consideration</em>.
                </RevealLine>
              </>
            }
          />
          <Reveal delay={0.15} className="mt-10">
            <p className="text-[15px] font-light leading-[1.85] text-cream/70 sm:text-base">
              To keep our learning circles high-signal, we only open{" "}
              <strong className="font-semibold text-cream">
                fifteen creator slots
              </strong>{" "}
              each year. If your work aligns with our mission of uncovering
              meaningful projects in overlooked places, fill out the form
              below. {CONTACT_NAME} reads every submission personally and
              replies within four weeks.
            </p>
          </Reveal>

          <Reveal delay={0.22} className="mt-10">
            <div className="border-t border-line pt-8">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.26em] text-fog">
                Or email {CONTACT_NAME} directly at
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group mt-3 inline-flex items-center gap-3 text-[15px] text-cream transition-colors duration-300 hover:text-gold-light sm:text-base"
              >
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                {CONTACT_EMAIL}
                <ArrowUpRight
                  className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-6 text-[13px] font-light leading-relaxed text-cream/50">
                We review every submission personally. Expect a reply within
                four weeks.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — the form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.2} y={44}>
            <div className="border border-line-soft bg-ink-2/80 p-8 backdrop-blur-sm sm:p-12">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <span className="flex h-14 w-14 items-center justify-center border border-gold bg-gold/10 text-gold">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-medium text-cream">
                    Submission received.
                  </h3>
                  <p className="mt-4 max-w-md text-[14.5px] font-light leading-relaxed text-cream/65">
                    Thank you. Your email client should have opened with all
                    your submission details prefilled and addressed to{" "}
                    {CONTACT_NAME} at {CONTACT_EMAIL}. Just hit send and he
                    will read your submission in full and reply personally
                    within four weeks.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={mailtoUrl || `mailto:${CONTACT_EMAIL}`}
                      className="btn-luxe-solid"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      Open Email Client
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn-luxe-outline"
                    >
                      Submit Another Entry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.24em] text-gold"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.24em] text-gold"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Where should the committee reach you?"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="title"
                        className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.24em] text-gold"
                      >
                        Project Title *
                      </label>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        placeholder="The name of your project"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.24em] text-gold"
                      >
                        Category *
                      </label>
                      <div className="relative">
                        <select
                          id="category"
                          name="category"
                          required
                          defaultValue=""
                          className={`${inputClass} appearance-none pr-8 [&>option]:bg-ink-2 [&>option]:text-cream`}
                        >
                          <option value="" disabled>
                            Select a category
                          </option>
                          {CATEGORIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute bottom-3.5 right-1 h-4 w-4 text-fog"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="synopsis"
                        className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.24em] text-gold"
                      >
                        Brief Overview *
                      </label>
                      <textarea
                        id="synopsis"
                        name="synopsis"
                        required
                        rows={3}
                        placeholder="A short synopsis of the work — what it is, and what it does"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="why"
                        className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.24em] text-gold"
                      >
                        Why this project belongs in Droyce Tech Club *
                      </label>
                      <textarea
                        id="why"
                        name="why"
                        required
                        rows={3}
                        placeholder="Make the case to the committee"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="notes"
                        className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.24em] text-gold"
                      >
                        Anything else we should know
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={2}
                        placeholder="Optional — links, context, or anything worth adding"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="mt-6 border-l-2 border-red-400/70 bg-red-400/5 px-4 py-3 text-[13.5px] text-red-200" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <p className="max-w-[16rem] font-mono-tech text-[9.5px] uppercase leading-relaxed tracking-[0.2em] text-fog">
                      We review every submission personally. Expect a reply
                      within four weeks.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[linear-gradient(135deg,#c5a059_0%,#a37f3a_100%)] px-9 py-3.5 font-mono-tech text-[11px] font-semibold uppercase tracking-[0.22em] text-ink shadow-glow transition-all duration-500 hover:bg-[linear-gradient(135deg,#e6ca65_0%,#c5a059_100%)] hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Submitting
                        </>
                      ) : (
                        <>
                          Submit Your Project
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
