"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader, Reveal, RevealLine } from "./section-header";

const FAQS = [
  {
    question: "How does Droyce Tech Club select projects for the residency?",
    answer:
      "Every submission is read in full by at least two members of the selection committee. Projects are evaluated on intellectual depth, craft, and the lasting cultural contribution they could make. We do not weigh marketing budgets, social media following, or commercial trends. Roughly fifteen works are accepted into each annual cycle from hundreds of submissions.",
  },
  {
    question: "Is this a paid service for creators?",
    answer:
      "No. There is no pay-to-play model anywhere in our process. Creators do not pay to be considered, and they do not pay to participate in the residency. Our infrastructure is funded through our private network of patrons, which keeps the selection criteria focused entirely on merit.",
  },
  {
    question: "What does the twelve-month residency actually include?",
    answer:
      "Selected creators receive a structured year-long engagement program. That includes weekly discussions around your work, private digital channels for analytical commentary, hosted creator Q&A sessions, direct access to the selection committee, and the long-tail review momentum that comes from a community treating your project as a permanent cultural contribution rather than a one-time release.",
  },
  {
    question: "Can anyone join as a member?",
    answer:
      "Membership is by application. We keep the community intentionally small to protect the quality of conversation. Prospective members complete a short application that helps us understand their learning habits and what they hope to gain from the club. Most applicants hear back within two weeks of submitting.",
  },
  {
    question: "How is this different from a regular tech community?",
    answer:
      "A typical community meets around a stream of passing topics and moves on. Our residency treats one project as the focus of a full year of structured engagement, with weekly discussions, analytical commentary, and a permanent archive of conversation. The point is not to consume more content. It is to give the right work the lasting attention it deserves.",
  },
  {
    question: "Who funds the community infrastructure?",
    answer:
      "Our distribution, community infrastructure, and engagement programs are funded through our private network of patrons and Hub Patron memberships. This independence is intentional. It allows our selection criteria to remain purely focused on merit and narrative impact, without any commercial pressure on the committee.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40"
      aria-label="Frequently asked questions"
    >
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Intro column */}
          <div className="lg:col-span-5">
            <SectionHeader
              index="08"
              eyebrow="Common Questions"
              title={
                <>
                  <RevealLine>Everything you need</RevealLine>
                  <RevealLine>
                    to know before <em className="italic">applying</em>.
                  </RevealLine>
                </>
              }
            />
            <Reveal delay={0.15} className="mt-10 max-w-md">
              <p className="text-[15px] font-light leading-[1.85] text-cream/70 sm:text-base">
                Whether you are a member considering renewal or a creator
                considering submission, here are the questions we hear most
                often. If something is not covered here, the contact form
                below reaches the committee directly.
              </p>
            </Reveal>
          </div>

          {/* Accordion column */}
          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {FAQS.map((faq, i) => {
                const open = openIndex === i;
                return (
                  <Reveal key={faq.question} delay={Math.min(i * 0.05, 0.2)}>
                    <div className="border-b border-line">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? null : i)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${i}`}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:bg-ink-2/50 sm:py-7"
                      >
                        <span className="flex items-baseline gap-5">
                          <span
                            className="font-mono-tech text-[10px] tracking-[0.24em] text-gold/70"
                            aria-hidden="true"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`font-display text-[clamp(1.05rem,1.7vw,1.35rem)] font-medium leading-snug transition-colors duration-300 ${
                              open ? "text-gold-light" : "text-cream group-hover:text-gold-light"
                            }`}
                          >
                            {faq.question}
                          </span>
                        </span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-500 ${
                            open
                              ? "rotate-45 border-gold bg-gold/10 text-gold"
                              : "border-line-soft text-fog group-hover:border-gold/50 group-hover:text-gold"
                          }`}
                          aria-hidden="true"
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            id={`faq-panel-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-7 pl-0 pr-10 text-[14px] font-light leading-[1.8] text-cream/60 sm:pl-[3.4rem] sm:text-[15px]">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
