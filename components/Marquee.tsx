"use client";

import clsx from "clsx";

export default function Marquee({
  items,
  className,
  speed = 38,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const loop = [...items, ...items];

  return (
    <div
      className={clsx("overflow-hidden py-5 whitespace-nowrap", className)}
      aria-hidden
    >
      <div
        className="flex gap-10 animate-marquee"
        style={{ animationDuration: `${speed}s`, width: "max-content" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 font-display italic text-2xl md:text-4xl"
          >
            {item}
            <span className="inline-block w-2 h-2 rounded-full bg-terracotta" />
          </span>
        ))}
      </div>
    </div>
  );
}
