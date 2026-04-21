"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";

type Item = { quote: string; author: string; meta: string };

export default function Testimonials({ items }: { items: Item[] }) {
  const [i, setI] = useState(0);
  const active = items[i];
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  return (
    <section className="bg-bark text-cream py-28 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-3">
          <p className="kicker opacity-70 mb-5">Voices</p>
          <h2 className="font-display italic text-4xl md:text-5xl leading-[1]">
            Words from our rooms.
          </h2>
        </Reveal>

        <div className="md:col-span-8 md:col-start-5 relative min-h-[260px] md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.quote}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <p className="font-display italic text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.15] max-w-[24ch]">
                “{active.quote}”
              </p>
              <footer className="mt-10 flex items-baseline gap-4 text-sm">
                <span className="text-terracotta font-medium">— {active.author}</span>
                <span className="opacity-60">{active.meta}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="absolute -bottom-4 right-0 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-cream/40 flex items-center justify-center transition-colors hover:bg-cream hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 3L3 11M3 11H10M3 11V4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <span className="text-xs opacity-70 tabular-nums w-12 text-center">
              {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-cream/40 flex items-center justify-center transition-colors hover:bg-cream hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
