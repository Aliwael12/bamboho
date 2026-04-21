"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealWords } from "./Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[110vh] min-h-[720px] overflow-hidden"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2400&q=80"
          alt="Warm earthy interior with bohemian textures"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/20 via-transparent to-bark/45" />
      </motion.div>

      {/* Top micro-label */}
      <motion.div
        style={{ opacity }}
        className="absolute top-28 md:top-32 left-0 right-0 z-10 px-6 md:px-10 flex items-center justify-between text-cream"
      >
        <span className="kicker">Est. Cairo · MMXXIV</span>
        <span className="hidden md:inline kicker">Handmade · Slow · Warm</span>
      </motion.div>

      {/* Hero text */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 text-cream"
      >
        <p className="kicker mb-6 opacity-90">Slow living objects</p>
        <h1 className="font-display italic text-hero leading-[0.9] max-w-[14ch]">
          <span className="block overflow-hidden">
            <RevealWords text="Handwoven" stagger={0.08} />
          </span>
          <span className="block overflow-hidden">
            <RevealWords text="warmth for" delay={0.15} stagger={0.08} />
          </span>
          <span className="block overflow-hidden">
            <RevealWords text="the bohemian" delay={0.3} stagger={0.08} />
          </span>
          <span className="block overflow-hidden text-clay">
            <RevealWords text="home." delay={0.5} stagger={0.08} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <Link href="/lookbook" className="btn-pill filled border-terracotta">
            <span>View the Lookbook</span>
          </Link>
          <Link
            href="/about"
            className="text-xs uppercase tracking-[0.22em] inline-flex items-center gap-3 group"
          >
            <span className="hover-underline">Our story</span>
            <span className="w-10 h-10 rounded-full border border-cream flex items-center justify-center transition-all duration-500 ease-out-expo group-hover:bg-cream group-hover:text-ink">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 11L11 3M11 3H4M11 3V10"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream flex flex-col items-center gap-3"
      >
        <span className="kicker opacity-80">Scroll</span>
        <motion.span
          className="w-px bg-cream/60"
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </section>
  );
}
