import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/futuristic_3d_vr_digital_landscape_for_hero_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Digital Landscape"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Grid Overlay Effect */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at center, black, transparent 80%)"
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-primary font-mono text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            التطور القادم للواقع
          </h2>
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 leading-tight">
            وجود رقمي <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">موحد</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed">
            عالم موازي يكسر كل الحواجز الجغرافية والاقتصادية والاجتماعية. 
            اختبر التعليم والعمل والترفيه في واقع واحد سلس.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-primary text-black font-display font-bold text-lg uppercase tracking-widest overflow-hidden transition-transform hover:scale-105">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            ادخل العالم
          </button>
          <button className="px-8 py-4 border border-white/20 text-white hover:border-primary hover:text-primary hover:bg-primary/5 font-display font-bold text-lg uppercase tracking-widest transition-all">
            اعرف المزيد
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest">مرر للاستكشاف</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
