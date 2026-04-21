import Image from "next/image";
import Link from "next/link";
import Reveal, { RevealWords } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import CollectionSlider from "@/components/CollectionSlider";
import ParallaxImage from "@/components/ParallaxImage";
import Accordion from "@/components/Accordion";
import { collections, values, testimonials, faqs } from "@/lib/data";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Announcement marquee */}
      <Marquee
        items={[
          "New · Terramoré collection",
          "Handmade in Cairo",
          "Shipping worldwide",
          "Rattan · Linen · Clay · Oak",
          "Est. MMXXIV",
        ]}
        className="border-y border-bark/15 text-ink"
      />

      {/* PHILOSOPHY */}
      <section className="relative py-32 md:py-48 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5 md:sticky md:top-32 h-fit">
            <p className="kicker text-ink/60 mb-5">Our inspirations</p>
            <h2 className="font-display italic text-display leading-[1]">
              The texture
              <br />
              of slow
              <br />
              <span className="text-terracotta">living.</span>
            </h2>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7 space-y-10">
            <Reveal>
              <p className="text-lg md:text-xl leading-relaxed text-ink/80 max-w-[60ch]">
                BamBoho gathers earth, fibre and flame into objects made for
                the rooms we actually live in. Each piece begins with a
                material — rattan cut at dawn, clay pulled from the Nile delta,
                linen pressed by hand — and ends with the quiet pleasure of
                something honest settling into your home.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl leading-relaxed text-ink/80 max-w-[60ch]">
                Our work borrows its palette from the desert at golden hour:
                <em className="font-display not-italic ml-2 text-terracotta">
                  terracotta, sand, olive, bark.
                </em>{" "}
                Our rhythm is set by the hands that make it.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/about" className="btn-pill">
                <span>The BamBoho story</span>
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
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HORIZONTAL COLLECTIONS SLIDER */}
      <CollectionSlider collections={collections} />

      {/* LARGE SPLIT IMAGE BLOCK */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <Reveal className="md:col-span-7">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1800&q=80"
              alt="Terracotta clay vessels grouped in warm daylight"
              className="aspect-[4/5] w-full"
              amount={60}
            />
          </Reveal>

          <div className="md:col-span-5 md:pl-10 flex flex-col justify-between">
            <Reveal>
              <p className="kicker text-ink/60 mb-5">Chapter 01</p>
              <h3 className="font-display italic text-section leading-[1]">
                Earth,
                <br />
                fired <em className="text-terracotta">slowly.</em>
              </h3>
              <p className="mt-8 text-ink/75 leading-relaxed max-w-md">
                Our Terramoré vessels are shaped on the wheel, dried in the
                shade, and fired low for days until the clay blushes into rust.
                No two are identical — and that is the point.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1400&q=80"
                alt="Detail of a woven rattan texture"
                className="aspect-[5/4] w-full"
                amount={40}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES — INDEXED LIST LIKE PETRALITHE'S "POSE ET INSTALLATION" */}
      <section className="bg-sand/40 py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24">
            <Reveal className="md:col-span-5">
              <p className="kicker text-ink/60 mb-5">How we work</p>
              <h2 className="font-display italic text-display leading-[1]">
                Four quiet rules.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 self-end">
              <p className="text-ink/70 text-lg leading-relaxed max-w-md">
                These are the principles that keep BamBoho honest. We return to
                them each time a new collection begins.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-bark/20 border-y border-bark/20">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.05}>
                <div className="grid grid-cols-12 gap-6 py-10 md:py-14 items-start">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-display italic text-3xl md:text-4xl text-terracotta">
                      {v.n}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-display italic text-3xl md:text-[2.3rem] leading-[1.05]">
                      {v.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:col-start-8 text-ink/75 leading-relaxed">
                    {v.body}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKBOOK TEASER STRIP */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <Reveal>
              <p className="kicker text-ink/60 mb-4">Lookbook</p>
              <h2 className="font-display italic text-display leading-[1]">
                Rooms, <em className="text-terracotta">breathing.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/lookbook" className="hidden md:inline-block text-xs uppercase tracking-[0.22em]">
                <span className="hover-underline">Open the full book →</span>
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-7">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=80"
                alt="Living room styled with BamBoho pieces"
                className="aspect-[4/3] w-full"
                amount={70}
              />
            </Reveal>
            <Reveal delay={0.1} className="col-span-6 md:col-span-5">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
                alt="Bedroom with linen bedding"
                className="aspect-[3/4] w-full"
                amount={50}
              />
            </Reveal>
            <Reveal delay={0.05} className="col-span-6 md:col-span-5">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80"
                alt="Oak stool on tiled floor"
                className="aspect-[1/1] w-full"
                amount={40}
              />
            </Reveal>
            <Reveal delay={0.15} className="col-span-12 md:col-span-7">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1800&q=80"
                alt="Dining nook at dusk"
                className="aspect-[4/3] w-full"
                amount={70}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials items={testimonials} />

      {/* FAQ */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4 md:sticky md:top-32 h-fit">
            <p className="kicker text-ink/60 mb-5">On your mind</p>
            <h2 className="font-display italic text-display leading-[1]">
              Answers,
              <br />
              simply.
            </h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[85vh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1800&q=80"
          alt="Rattan chair in warm sunlight"
          className="absolute inset-0"
          amount={120}
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-cream text-center px-6">
          <Reveal>
            <p className="kicker mb-5">Commissions open</p>
          </Reveal>
          <h2 className="font-display italic text-hero leading-[0.9] mb-10 max-w-[14ch]">
            <RevealWords text="Bring home the quiet." />
          </h2>
          <Reveal delay={0.3}>
            <Link href="/contact" className="btn-pill text-cream border-cream">
              <span>Start a conversation</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
