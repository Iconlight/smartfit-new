import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const services = [
  { 
    name: "3D Interior Design", 
    offset: -40 
  },
  { 
    name: "Modern Ceilings", 
    offset: 60 
  },
  { 
    name: "Electrical Installation", 
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
    offset: -20 
  },
  { 
    name: "Solar Installation", 
    offset: 50 
  },
  { 
    name: "Premium Flooring", 
    offset: -30 
  },
  { 
    name: "Professional Paintwork", 
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
    offset: 35 
  },
  { 
    name: "Landscaping", 
    offset: 40 
  },
  { 
    name: "Complete Renovations", 
    offset: -15 
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      id="what-we-do"
      ref={containerRef}
      className="relative min-h-[100vh] bg-[#F5F2ED] py-4"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-ink/40"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-light tracking-tight text-brand-ink"
          >
            What we do
          </motion.h2>
        </div>

        {/* Content Matrix - Adjusted padding and gap to fit screen better */}
        <div className="relative flex flex-col items-center gap-1 md:gap-2 w-full px-6 -mt-8">
          {services.map((service, index) => (
             <ServiceItem 
               key={service.name} 
               service={service} 
               index={index} 
               scrollYProgress={scrollYProgress} 
             />
          ))}
        </div>

        {/* Sub-label */}
        <div className="mt-12 pb-8 flex justify-between w-full px-12 md:px-24">
           <div className="text-[10px] font-mono opacity-30">02</div>
           <div className="text-right">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">What we do</span>
           </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ service, index, scrollYProgress }: { 
  service: typeof services[0] & { img?: string }, 
  index: number, 
  scrollYProgress: any 
}) {
  // Parallax for the text
  const xTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    [index % 2 === 0 ? -100 : 100, index % 2 === 0 ? 100 : -100]
  );

  // Parallax for the floating image
  const yImageTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [service.offset * 2, -service.offset * 2]
  );

  return (
    <motion.div 
      className="relative flex items-center justify-center group"
    >
      {/* Floating Image (Embedded Style) */}
      {service.img && (
        <motion.div 
          style={{ y: yImageTransform }}
          className={`absolute hidden md:block w-32 md:w-48 aspect-[3/2] overflow-hidden rounded-2xl z-10 shadow-xl border border-white/20
            ${index % 2 === 0 ? '-right-48' : '-left-48'}`}
        >
          <img 
            src={service.img} 
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      )}

      {/* Main Typography */}
      <motion.h3 
        style={{ x: xTransform }}
        className="title-service text-center cursor-default hover:text-brand-ink transition-colors duration-500 whitespace-nowrap"
      >
        {service.name}
      </motion.h3>
    </motion.div>
  );
}
