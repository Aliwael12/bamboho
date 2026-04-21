"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export type Collection = {
  name: string;
  subtitle: string;
  image: string;
  palette: string;
};

/**
 * Horizontal scroll-driven slider (pin + translate).
 * As the user scrolls down, the inner row translates left.
 * Inspired by Petralithe's Óros slider.
 */
export default function CollectionSlider({
  collections,
}: {
  collections: Collection[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Translate the row the full negative width minus viewport
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(collections.length - 1) * 72}%`]
  );

  return (
    <section
      ref={ref}
      className="relative bg-cream"
      style={{ height: `${collections.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-10 md:top-14 left-0 right-0 px-6 md:px-10 flex items-start justify-between z-10">
          <div>
            <p className="kicker text-ink/60 mb-3">Collections</p>
            <h2 className="font-display italic text-section max-w-[14ch]">
              Woven worlds, one room at a time.
            </h2>
          </div>
          <div className="hidden md:block text-xs tracking-[0.22em] uppercase text-ink/60 mt-2">
            Scroll →
          </div>
        </div>

        <motion.div
          style={{ x }}
          className="h-full flex items-center gap-8 md:gap-16 pl-[8vw] pr-[8vw] pt-24"
        >
          {collections.map((c, i) => (
            <div
              key={c.name}
              className="relative shrink-0 w-[78vw] md:w-[64vw] lg:w-[56vw] h-[72vh] group"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="80vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent" />

                <div className="absolute top-6 left-6 right-6 flex items-start justify-between text-cream">
                  <span className="kicker">
                    {String(i + 1).padStart(2, "0")} / {String(collections.length).padStart(2, "0")}
                  </span>
                  <span className="kicker">{c.palette}</span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-cream">
                  <div>
                    <p className="kicker opacity-80 mb-3">{c.subtitle}</p>
                    <h3 className="font-display italic text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95]">
                      {c.name}
                    </h3>
                  </div>
                  <button className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.22em] group/btn">
                    View
                    <span className="w-12 h-12 rounded-full border border-cream flex items-center justify-center transition-all duration-500 ease-out-expo group-hover/btn:bg-cream group-hover/btn:text-ink">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 11L11 3M11 3H4M11 3V10"
                          stroke="currentColor"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
