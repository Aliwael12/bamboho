"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import clsx from "clsx";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  amount?: number; // px of parallax drift
  priority?: boolean;
  sizes?: string;
};

/**
 * Image that drifts upward as the user scrolls past — creates a slow, editorial
 * feeling. Pair with `aspect-[xx]` container for fixed ratio.
 */
export default function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  amount = 80,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  return (
    <div
      ref={ref}
      className={clsx("relative overflow-hidden", className)}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={clsx("object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );
}
