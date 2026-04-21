"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out-expo",
          scrolled
            ? "py-4 bg-cream/80 backdrop-blur-md border-b border-bark/10"
            : "py-7 bg-transparent"
        )}
      >
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 flex items-center justify-between">
          <Link
            href="/"
            className="font-display italic text-2xl md:text-[1.75rem] leading-none tracking-tight text-ink"
          >
            Bam<span className="text-terracotta">B</span>oho
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[0.78rem] tracking-[0.18em] uppercase font-medium text-ink"
              >
                <span className="hover-underline">{item.label}</span>
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-terracotta"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <span
              className={clsx(
                "absolute w-6 h-[1.5px] bg-ink transition-all duration-500 ease-out-expo",
                open ? "rotate-45" : "-translate-y-[5px]"
              )}
            />
            <span
              className={clsx(
                "absolute w-6 h-[1.5px] bg-ink transition-all duration-500 ease-out-expo",
                open ? "-rotate-45" : "translate-y-[5px]"
              )}
            />
          </button>

          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/contact"
              className="text-[0.78rem] tracking-[0.18em] uppercase font-medium"
            >
              <span className="hover-underline">Enquire</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bark text-cream md:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.07,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="font-display italic text-6xl leading-none"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-10 text-xs tracking-[0.22em] uppercase opacity-60">
              BamBoho © {new Date().getFullYear()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
