import Link from "next/link";
import Reveal, { RevealWords } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import { lookbookImages } from "@/lib/data";
import clsx from "clsx";

export const metadata = {
  title: "Lookbook — BamBoho",
  description:
    "An intimate look at BamBoho objects in the homes they were made for.",
};

const SPAN: Record<string, string> = {
  large: "col-span-12 md:col-span-8 aspect-[4/3]",
  medium: "col-span-12 md:col-span-6 aspect-[4/5]",
  small: "col-span-6 md:col-span-4 aspect-[3/4]",
};

export default function LookbookPage() {
  return (
    <>
      <section className="pt-40 md:pt-56 pb-20 md:pb-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <Reveal>
              <p className="kicker text-ink/60 mb-5">Lookbook · Vol. I</p>
            </Reveal>
            <h1 className="font-display italic text-hero leading-[0.9] max-w-[15ch]">
              <span className="block overflow-hidden">
                <RevealWords text="Rooms that" />
              </span>
              <span className="block overflow-hidden text-terracotta">
                <RevealWords text="breathe." delay={0.15} />
              </span>
            </h1>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-ink/75 leading-relaxed">
              A slow-moving journal of BamBoho objects in the homes they were
              made for. Photographed in natural light, between the hours when
              the city begins to soften.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Asymmetric gallery */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-4 md:gap-6">
          {lookbookImages.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.06}
              className={clsx(SPAN[img.span] || SPAN.medium, "group")}
            >
              <figure className="relative w-full h-full">
                <ParallaxImage
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full"
                  amount={40}
                />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-expo">
                  <span className="kicker drop-shadow-md">{img.caption}</span>
                  <span className="kicker opacity-80 drop-shadow-md">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial split */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-5">
            <p className="kicker text-ink/60 mb-5">A note from the studio</p>
            <p className="font-display italic text-3xl md:text-4xl leading-[1.12]">
              “We don't style our rooms — we wait for them to settle, and then
              we photograph what remains.”
            </p>
            <p className="mt-6 text-ink/70">— Nour, Creative Director</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=80"
              alt="A textile swatch photographed on a warm wooden surface"
              className="aspect-[4/3] w-full"
              amount={70}
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-10 text-center border-t border-bark/15">
        <Reveal>
          <p className="kicker text-ink/60 mb-5">Commissions</p>
          <h2 className="font-display italic text-display leading-[1] mb-10 max-w-[18ch] mx-auto">
            Want a room like one of these?
          </h2>
          <Link href="/contact" className="btn-pill filled">
            <span>Brief us</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
