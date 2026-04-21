"use client";

import Link from "next/link";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative bg-bark text-cream mt-24 pt-24 overflow-hidden">
      <Marquee
        items={[
          "Slow living",
          "Hand crafted",
          "Natural fibres",
          "Earthy tones",
          "Since 2024",
          "Made with soul",
        ]}
        className="border-y border-cream/15 text-cream/90"
      />

      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-6">
          <p className="kicker opacity-70 mb-6">Newsletter</p>
          <h3 className="font-display text-section italic leading-[1.02]">
            Let the <span className="text-terracotta">warmth</span> arrive
            <br />
            in your inbox.
          </h3>

          <form
            className="mt-10 flex items-center gap-4 border-b border-cream/30 pb-3 max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none placeholder-cream/40 text-cream text-sm py-2"
            />
            <button className="group text-xs uppercase tracking-[0.22em] flex items-center gap-2">
              Subscribe
              <svg
                className="arrow-icon"
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
            </button>
          </form>
        </Reveal>

        <Reveal className="md:col-span-2">
          <p className="kicker opacity-70 mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover-underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover-underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/lookbook" className="hover-underline">
                Lookbook
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover-underline">
                Contact
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal className="md:col-span-2">
          <p className="kicker opacity-70 mb-5">Social</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.instagram.com/bambohoegy/"
                target="_blank"
                rel="noreferrer"
                className="hover-underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover-underline">
                Pinterest
              </a>
            </li>
            <li>
              <a href="#" className="hover-underline">
                TikTok
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="md:col-span-2">
          <p className="kicker opacity-70 mb-5">Studio</p>
          <address className="not-italic text-sm opacity-80 leading-relaxed">
            Cairo, Egypt
            <br />
            hello@bamboho.co
            <br />
            +20 · · · · · ·
          </address>
        </Reveal>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 py-6 flex items-center justify-between text-[11px] tracking-[0.22em] uppercase opacity-60">
          <span>© {new Date().getFullYear()} BamBoho</span>
          <span>Crafted slowly · Worn warmly</span>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="pointer-events-none select-none px-6 md:px-10">
        <p className="font-display italic leading-[0.82] text-[clamp(6rem,22vw,22rem)] text-cream/10 -mb-[2vw]">
          BamBoho
        </p>
      </div>
    </footer>
  );
}
