"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

/**
 * Two-stage page transition inspired by editorial fashion / petralithe.com:
 *  1. A warm terracotta curtain sweeps up from the bottom
 *  2. Incoming content fades + slides slightly up beneath it
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [curtain, setCurtain] = useState(false);

  useEffect(() => {
    setCurtain(true);
    const t = setTimeout(() => {
      setDisplayChildren(children);
      setCurtain(false);
    }, 650);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {curtain && (
          <motion.div
            key="curtain"
            className="fixed inset-0 z-[90] bg-bark pointer-events-none"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.75,
              ease: [0.83, 0, 0.17, 1],
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.45 }}
                className="font-display italic text-cream text-4xl sm:text-6xl"
              >
                BamBoho
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        {displayChildren}
      </motion.main>
    </>
  );
}
