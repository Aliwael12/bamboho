import Reveal, { RevealWords } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — BamBoho",
  description:
    "Questions, commissions, trade inquiries — write to BamBoho and we'll reply within three working days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="kicker text-ink/60 mb-5">Write to us</p>
          </Reveal>
          <h1 className="font-display italic text-hero leading-[0.92] max-w-[14ch]">
            <span className="block overflow-hidden">
              <RevealWords text="Slow" />
            </span>
            <span className="block overflow-hidden">
              <RevealWords text="conversations," delay={0.12} />
            </span>
            <span className="block overflow-hidden text-terracotta">
              <RevealWords text="please." delay={0.26} />
            </span>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-28 md:pb-40">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Form */}
          <div className="md:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          {/* Info */}
          <div className="md:col-span-4 md:col-start-9 space-y-12">
            <Reveal>
              <Block
                label="Studio"
                lines={["BamBoho Atelier", "Zamalek, Cairo", "Egypt"]}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Block
                label="General"
                lines={["hello@bamboho.co", "+20 · · · · · · ·"]}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <Block
                label="Trade & press"
                lines={["studio@bamboho.co", "Mon – Fri · 10–18 EET"]}
              />
            </Reveal>
            <Reveal delay={0.24}>
              <Block
                label="Follow"
                lines={[
                  { label: "Instagram", href: "https://www.instagram.com/bambohoegy/" },
                  { label: "Pinterest", href: "#" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

type Line = string | { label: string; href: string };

function Block({ label, lines }: { label: string; lines: Line[] }) {
  return (
    <div className="border-t border-bark/20 pt-6">
      <p className="kicker text-ink/60 mb-4">{label}</p>
      <div className="space-y-1 text-lg">
        {lines.map((l, i) =>
          typeof l === "string" ? (
            <p key={i} className="text-ink/85">
              {l}
            </p>
          ) : (
            <p key={i}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="hover-underline text-ink/85"
              >
                {l.label}
              </a>
            </p>
          )
        )}
      </div>
    </div>
  );
}
