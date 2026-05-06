import { motion } from 'motion/react';
import { ArrowRight, LayoutGrid } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white selection:bg-brand-wood/30 font-sans">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="h-full w-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        {/* Subtle vignette/gradient for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative h-full w-full flex flex-col px-6 py-8 md:px-12 md:py-12 lg:px-24 lg:py-16"
      >
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-medium tracking-tight">SmartFit studio</span>
            <LayoutGrid className="w-5 h-5 opacity-60" />
          </div>

          {/* Address */}
          <div className="md:ml-24 max-w-[200px]">
             <p className="text-[13px] font-light leading-relaxed opacity-80">
              Strada di Montegiano<br />
              42, 60030 Marche, Italia
            </p>
          </div>

          {/* Slogan & CTA */}
          <div className="flex flex-col items-end gap-8 ml-auto max-w-lg text-right">
            <h2 className="font-display text-2xl md:text-3xl font-light leading-[1.3] opacity-90">
              We don't make mass furniture. We make tables where kids will grow up.
            </h2>
            <button className="flex items-center gap-4 border border-white/30 rounded-full pl-6 pr-3 py-3 hover:bg-white hover:text-black transition-all duration-500 group">
              <span className="text-sm font-medium tracking-wide">Get in touch</span>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Middle Line Section */}
        <div className="mt-auto mb-12 flex flex-col gap-6">
          <div className="w-full h-[1px] bg-white/20" />
          <div className="flex justify-between items-end">
             <div className="text-[11px] font-mono opacity-50">01</div>
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="font-display text-2xl md:text-4xl font-light opacity-90"
             >
               Meet our featured work
             </motion.span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative flex flex-col lg:flex-row justify-between items-end gap-12 -mt-4">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pb-24 lg:pb-48"
          >
            <h1 className="title-massive font-sans font-bold tracking-tighter text-white">
              SmartFit
            </h1>
          </motion.div>

          {/* Bottom Right Layout */}
          <div className="flex items-end gap-16 md:gap-24 lg:mr-40">
             {/* Read more & Links */}
             <div className="flex flex-col gap-12 pb-2">
                <div className="flex flex-col gap-3 group cursor-pointer">
                   <span className="text-[13px] font-medium opacity-60 group-hover:opacity-100 transition-opacity">Read more</span>
                   <motion.div 
                     whileHover={{ width: '100%' }}
                     className="w-12 h-[1px] bg-white/40" 
                   />
                </div>
                <nav className="flex gap-10 md:gap-14 text-[13px] font-semibold tracking-wider uppercase opacity-80">
                  <a href="#" className="hover:text-brand-wood transition-colors">Our works</a>
                  <a href="#" className="hover:text-brand-wood transition-colors">Inspiration</a>
                  <a href="#" className="hover:text-brand-wood transition-colors">Team</a>
                </nav>
             </div>

             {/* Image Card */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="relative w-40 md:w-56 aspect-[4/5] bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
             >
                <img 
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=500" 
                  alt="Furniture piece"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-ink/40 backdrop-blur-sm p-1 rounded-full border border-white/20">
                   <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-black" />
                   </div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Footer / Info */}
        <div className="mt-12 flex justify-between items-center text-[10px] tracking-[0.2em] font-bold uppercase opacity-30">
          <a href="#what-we-do" className="hover:opacity-100 transition-opacity">Go to #what-wedo on this page</a>
          <div className="flex items-center gap-1">
             <div className="w-4 h-4 overflow-hidden rounded-sm">
                <img src="/favicon.ico" alt="logo" className="w-full h-full grayscale" />
             </div>
             <span>Made by SmartFit</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
