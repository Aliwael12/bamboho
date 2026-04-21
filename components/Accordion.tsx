"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-bark/15 border-y border-bark/15">
      {items.map((item, i) => {
        const active = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(active ? null : i)}
              className="w-full py-7 md:py-8 flex items-start justify-between gap-6 text-left group"
            >
              <span className="font-display italic text-2xl md:text-[2rem] leading-tight">
                {item.q}
              </span>
              <span className="mt-2 shrink-0 w-9 h-9 rounded-full border border-bark/40 flex items-center justify-center transition-transform duration-500 ease-out-expo group-hover:bg-ink group-hover:text-cream"
                style={{ transform: active ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pr-12 md:pr-32 text-ink/75 leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
