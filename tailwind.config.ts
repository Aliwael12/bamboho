import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // BamBoho earthy palette
        cream: "#F5EEE1",
        sand: "#E8D9BE",
        clay: "#D6B591",
        terracotta: "#B8543A",
        rust: "#8E3A22",
        olive: "#6A6A3E",
        moss: "#4A4B2C",
        bark: "#3A2A1E",
        ink: "#1C140E",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial oversized type
        "hero": ["clamp(3.5rem, 12vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "section": ["clamp(2rem, 4vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        "kicker": "0.22em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
      animation: {
        "marquee": "marquee 38s linear infinite",
        "shimmer": "shimmer 2.2s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
