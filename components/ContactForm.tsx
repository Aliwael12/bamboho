"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SUBJECTS = [
  "General enquiry",
  "Commission a piece",
  "Trade / wholesale",
  "Press",
  "Collaboration",
];

export default function ContactForm() {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div className="flex flex-wrap gap-2">
        {SUBJECTS.map((s) => (
          <button
            type="button"
            key={s}
            onClick={() => setSubject(s)}
            className={`px-4 py-2 rounded-full border text-xs uppercase tracking-[0.18em] transition-all duration-500 ease-out-expo ${
              subject === s
                ? "bg-ink text-cream border-ink"
                : "border-bark/30 hover:border-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <Field label="Your name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone (optional)" name="phone" />
      <FieldTextarea
        label={
          subject === "Commission a piece"
            ? "Brief — room, dimensions, mood, timeline"
            : "Tell us more"
        }
        name="message"
        required
      />

      <div className="flex items-center justify-between gap-6 pt-4">
        <p className="text-xs text-ink/60 max-w-xs">
          We reply within three working days. Nothing automated — you'll hear
          from a human at the studio.
        </p>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          className="btn-pill filled shrink-0"
        >
          <span>{sent ? "Sent — thank you" : "Send message"}</span>
          <svg
            className="arrow-icon relative z-[2]"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 11L11 3M11 3H4M11 3V10"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </svg>
        </motion.button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block group">
      <span className="kicker text-ink/60 block mb-3">
        {label}
        {required && <span className="text-terracotta ml-1">•</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-bark/25 pb-3 text-lg outline-none transition-colors focus:border-ink"
      />
    </label>
  );
}

function FieldTextarea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="kicker text-ink/60 block mb-3">
        {label}
        {required && <span className="text-terracotta ml-1">•</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="w-full bg-transparent border-b border-bark/25 pb-3 text-lg outline-none transition-colors focus:border-ink resize-none"
      />
    </label>
  );
}
