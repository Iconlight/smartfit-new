import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

const items = [
  {
    id: "01",
    label: "Featured",
    title: "Onda chair",
    subtitle: "New item",
    about: "A refined dining chair crafted from solid European oak, created to blend effortlessly into daily life. Gentle lines, balanced proportions, and a smooth hand-oiled finish emphasize the character of the wood and the clarity of the design.",
    specs: [
      { label: "Dimensions", value: "H 76 cm × W 52 cm × D 49 cm" },
      { label: "Weight", value: "4.2 kg" }
    ],
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "02",
    label: "Limited Edition",
    title: "Lumi Pendant",
    subtitle: "Atmosphere",
    about: "Inspired by the soft glow of the midnight sun, the Lumi pendant features a hand-blown opal glass shade. It casts a warm, diffused luminescence that softens architectural edges and creates a focal point of calm in any living space.",
    specs: [
      { label: "Diameter", value: "45 cm" },
      { label: "Cable Length", value: "300 cm" }
    ],
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "03",
    label: "Best Seller",
    title: "Nordic Sofa",
    subtitle: "Comfort",
    about: "A modular masterpiece of comfort. The Nordic sofa features a deep seat and low profile, upholstered in premium Italian linen. Its flexible design allows you to reconfigure the space as your life evolves, always maintaining its timeless elegance.",
    specs: [
      { label: "Width", value: "280 cm" },
      { label: "Depth", value: "105 cm" }
    ],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "04",
    label: "Exclusive",
    title: "Slate Table",
    subtitle: "Structural",
    about: "Carved from a single block of anthracite slate, this dining table is a statement of permanence. The raw, textured surface contrasts with the perfectly honed edges, celebrating the dialogue between nature and craftsmanship.",
    specs: [
      { label: "Material", value: "Natural Slate" },
      { label: "Seating", value: "8 - 10 Persons" }
    ],
    image: "https://images.unsplash.com/photo-1530018607912-eff2df114f11?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function FeaturedItems() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white text-brand-ink">
      {/* Sticky Image Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side: Scrolling Content */}
        <div className="w-full md:w-1/2 h-full relative z-10 bg-white">
          {items.map((item, index) => (
            <ItemContent key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Right Side: Sticky Visuals */}
        <div className="hidden md:block w-1/2 h-full bg-[#E5E1DA] relative">
          <div className="absolute inset-0 p-12 lg:p-24 flex items-center justify-center">
             <motion.div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {items.map((item, index) => (
                  <FeaturedImage
                    key={item.id}
                    item={item}
                    index={index}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedImage({ item, index, scrollYProgress }: { item: typeof items[0], index: number, scrollYProgress: any }) {
  const start = index * 0.25;
  const end = (index + 1) * 0.25;

  // Use strictly increasing thresholds within [0, 1]
  const p1 = Math.max(0, start);
  const p2 = Math.min(p1 + 0.05, 1);
  const p3 = Math.max(p2, end - 0.05);
  const p4 = Math.min(end, 1);

  const opacity = useTransform(
    scrollYProgress,
    [p1, p2, p3, p4],
    [0, 1, 1, index === 3 ? 1 : 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [p1, p4],
    [1.05, 1]
  );

  return (
    <motion.img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover"
      referrerPolicy="no-referrer"
      style={{ opacity, scale }}
    />
  );
}

function ItemContent({ item, index }: { item: typeof items[0], index: number }) {
  return (
    <div className="h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-2 block">
          {item.label}
        </span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-16">
          {item.subtitle}
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="font-display text-3xl md:text-4xl mb-6">{item.title}</h3>
            <div className="text-[11px] uppercase tracking-widest font-bold opacity-30 mb-3">about:</div>
            <p className="text-base md:text-lg font-light leading-relaxed opacity-70">
              {item.about}
            </p>
          </div>

          <div className="space-y-4 border-t border-black/10 pt-8">
            {item.specs.map(spec => (
              <div key={spec.label} className="flex justify-between items-center text-sm">
                <span className="font-bold opacity-40">{spec.label}:</span>
                <span className="opacity-80 font-mono">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
