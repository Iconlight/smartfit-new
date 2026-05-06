import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Tell us about your space and your vision. We discuss your lifestyle, aesthetic preferences, and budget to build a foundation for a truly personalized sanctuary."
  },
  {
    number: "02",
    title: "3D Design & Planning",
    description: "Our designers craft immersive 3D models and curated material boards. You'll experience your future space through photorealistic renderings before a single brush touches the wall."
  },
  {
    number: "03",
    title: "Impeccable Execution",
    description: "Our team of specialists—from master painters to certified electricians—brings the design to life. We manage every detail of the renovation with surgical precision."
  },
  {
    number: "04",
    title: "Final Styling & Handover",
    description: "We add the finishing touches that make a house a home. After a final quality sweep, we hand over the keys to your new flawlessly designed environment."
  }
];

export default function Process() {
  return (
    <section className="bg-brand-sand py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink/90 mb-8 tracking-tighter">
            How we work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Large Image on Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group border border-black/5"
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200"
              alt="Design Workshop"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Steps List on Right */}
          <div className="flex flex-col gap-16 pt-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex gap-8 md:gap-12 group"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-brand-ink/10 flex items-center justify-center text-sm font-mono opacity-40 group-hover:bg-brand-ink group-hover:text-white group-hover:opacity-100 transition-all duration-500">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-brand-ink/90">
                    {step.title}
                  </h3>
                  <p className="text-[15px] md:text-base text-brand-ink/60 font-light leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Bottom Accent */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center justify-between border-t border-brand-ink/5 pt-12"
            >
              <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-30">
                Crafted with precision
              </div>
              <div className="text-[10px] font-mono opacity-20">03</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
