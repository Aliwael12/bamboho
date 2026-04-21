import Image from "next/image";
import Link from "next/link";
import Reveal, { RevealWords } from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import Marquee from "@/components/Marquee";
import { values } from "@/lib/data";

export const metadata = {
  title: "About — BamBoho",
  description:
    "BamBoho is a slow-living home studio based in Cairo, shaping earthy, handmade objects from rattan, linen, clay and oak.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="pt-40 md:pt-56 pb-24 md:pb-32 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="kicker text-ink/60 mb-5">About the studio</p>
          </Reveal>
          <h1 className="font-display italic text-hero leading-[0.92] max-w-[16ch]">
            <span className="block overflow-hidden">
              <RevealWords text="A home" />
            </span>
            <span className="block overflow-hidden">
              <RevealWords text="made of" delay={0.12} />
            </span>
            <span className="block overflow-hidden text-terracotta">
              <RevealWords text="hands." delay={0.26} />
            </span>
          </h1>
        </div>
      </section>

      {/* Two-column intro with large image */}
      <section className="px-6 md:px-10 pb-28 md:pb-40">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-7">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=80"
              alt="Interior styled with earthy textures"
              className="aspect-[4/5] w-full"
              amount={80}
              priority
            />
          </Reveal>

          <div className="md:col-span-5 md:pt-20 space-y-8">
            <Reveal>
              <p className="kicker text-ink/60">Est. 2024 · Cairo, Egypt</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display italic text-3xl md:text-4xl leading-[1.12]">
                BamBoho began as a quiet protest against the glossy, the
                disposable, the perfectly symmetrical.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ink/75 leading-relaxed">
                We set out with a single question: what would a home feel like
                if every object in it was made slowly, by hand, from the earth?
                Five collections later, we are still answering it — one
                basket, one bowl, one bolt of linen at a time.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-ink/75 leading-relaxed">
                Our studio sits between the Nile and the desert, and both show
                up in the work: the moisture of the river in our clay, the
                sunburn of the dunes in our palette.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee of materials */}
      <Marquee
        items={["Rattan", "Linen", "Clay", "Oak", "Olive wood", "Palm weave", "Lime wash"]}
        className="bg-sand/50 text-ink border-y border-bark/15"
      />

      {/* The people */}
      <section className="py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="kicker text-ink/60 mb-5">The people</p>
            <h2 className="font-display italic text-display leading-[1]">
              Makers
              <br />
              <em className="text-terracotta">first.</em>
            </h2>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7 space-y-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink/80">
                We partner with 23 artisans across Egypt — weavers in Siwa,
                ceramicists in Fayoum, carpenters in Damietta, linen-dyers in
                Rosetta. Every collection begins with their hands and finishes
                in our Cairo atelier.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink/80">
                We price fairly and pay up front. We credit makers by name on
                every piece. We believe design without craft is decoration.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="pt-4 grid grid-cols-3 gap-4">
                <Stat n="23" label="Artisan partners" />
                <Stat n="5" label="Collections" />
                <Stat n="100%" label="Made in Egypt" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES indexed list (reused) */}
      <section className="bg-sand/40 py-28 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="kicker text-ink/60 mb-5">Principles</p>
            <h2 className="font-display italic text-display leading-[1] max-w-[16ch] mb-16 md:mb-24">
              Everything we make passes through four quiet rules.
            </h2>
          </Reveal>
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

      {/* CTA */}
      <section className="py-28 md:py-40 px-6 md:px-10 text-center">
        <Reveal>
          <p className="kicker text-ink/60 mb-5">Come closer</p>
        </Reveal>
        <h2 className="font-display italic text-display leading-[1] mb-10">
          <RevealWords text="Let's make something together." />
        </h2>
        <Reveal delay={0.3}>
          <Link href="/contact" className="btn-pill filled">
            <span>Start a conversation</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display italic text-4xl md:text-5xl text-terracotta leading-none">
        {n}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-ink/70">{label}</p>
    </div>
  );
}
