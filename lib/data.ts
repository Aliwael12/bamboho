import type { Collection } from "@/components/CollectionSlider";

/**
 * Placeholder content — swap with real BamBoho copy + imagery.
 * All images are free-to-use Unsplash photos matching the bohemian
 * earthy home-decor brief. Replace the `image` URLs with your own assets.
 */

export const collections: Collection[] = [
  {
    name: "Arish",
    subtitle: "Woven rattan · natural light",
    palette: "Sand / Cream",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Terramoré",
    subtitle: "Hand-thrown clay · warm earth",
    palette: "Terracotta / Rust",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Siwa Linen",
    subtitle: "Stone-washed linen · slow texture",
    palette: "Clay / Bark",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=80",
  },
  {
    name: "Olea",
    subtitle: "Oiled oak · olive bloom",
    palette: "Olive / Moss",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=80",
  },
];

export const lookbookImages = [
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
    alt: "Living room with earthy tones and woven accents",
    span: "large",
    caption: "Chapter I — The Quiet Room",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    alt: "Clay vase detail in soft daylight",
    span: "small",
    caption: "Clay studies",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    alt: "Bedroom with linen bedding",
    span: "medium",
    caption: "Slow mornings",
  },
  {
    src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80",
    alt: "Rattan chair and natural wall texture",
    span: "large",
    caption: "Chapter II — The Sun Terrace",
  },
  {
    src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
    alt: "Oak stool on tiled floor",
    span: "small",
    caption: "Oak + clay",
  },
  {
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=80",
    alt: "Dining nook with warm lighting",
    span: "medium",
    caption: "After sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
    alt: "Textile close-up with natural fibres",
    span: "small",
    caption: "Siwa linen · swatch 03",
  },
  {
    src: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1400&q=80",
    alt: "Corner with plants and warm wood",
    span: "large",
    caption: "Chapter III — The Oasis",
  },
];

export const values = [
  {
    n: "01",
    title: "Hand over machine",
    body: "Every piece is shaped, woven or fired by hand in small batches. The rhythm of the maker leaves its signature — slight asymmetries, warm imperfections, soul.",
  },
  {
    n: "02",
    title: "Materials that breathe",
    body: "Linen, oak, rattan, clay, olive wood. We work only with fibres and surfaces that grow softer, darker and more beautiful with time.",
  },
  {
    n: "03",
    title: "Rooted in place",
    body: "BamBoho is born in Egypt. Each collection borrows from oases, old courtyards and the palette of the desert at dusk.",
  },
  {
    n: "04",
    title: "Slow by design",
    body: "We don't chase seasons. Collections arrive when they're ready, and stay as long as they serve the home they're made for.",
  },
];

export const testimonials = [
  {
    quote:
      "BamBoho pieces don't decorate the room — they quiet it. Everything I bring home from them settles in like it has always belonged.",
    author: "Yasmine H.",
    meta: "Interior stylist · Cairo",
  },
  {
    quote:
      "There's a softness to the linen and a weight to the clay that you rarely find at this price point. This is the new wave of Egyptian craft.",
    author: "Leila M.",
    meta: "Founder, Dar Studio",
  },
  {
    quote:
      "The Terramoré collection completely reset the mood of my living room. Warm, intentional, and impossible to photograph without it looking luxurious.",
    author: "Omar A.",
    meta: "Architect",
  },
];

export const faqs = [
  {
    q: "Where is everything made?",
    a: "Every BamBoho piece is produced in our Cairo atelier and in partner workshops across Egypt. We work directly with artisans in Fayoum (clay), Rosetta (linen) and Siwa (palm weaving).",
  },
  {
    q: "How do I care for natural fibres?",
    a: "Rattan and palm want indirect light and occasional dusting. Linen softens with every wash — cold water, mild soap, line dry. Clay is food-safe unless stated otherwise; avoid dishwashers so the finish stays warm.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship worldwide from Cairo, with custom carton crating for larger pieces. Lead times are 3–5 days for in-stock and 2–6 weeks for made-to-order.",
  },
  {
    q: "Can I commission a custom piece?",
    a: "Absolutely. Send us your brief through the contact page — dimensions, room, mood — and we'll reply within three working days with a proposal.",
  },
  {
    q: "Do you offer trade pricing?",
    a: "We partner with a small circle of architects, stylists and hospitality projects. Email studio@bamboho.co for the trade catalogue.",
  },
];
