"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function CTASection() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Scale down from 2 to 1
  const bgTextScaleRaw = useTransform(scrollYProgress, [0, 1], [2, 1]);
  // Add some spring bounce to the scale
  const bgTextScale = useSpring(bgTextScaleRaw, { stiffness: 100, damping: 20 });
  const bgTextOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.05]);

  return (
    <section ref={containerRef} className="bg-black text-white py-24 lg:py-40 relative flex items-center justify-center overflow-hidden cursor-none">
      
      {/* Zoom-out Text Background */}
      <motion.div 
        style={{ scale: bgTextScale, opacity: bgTextOpacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[8rem] md:text-[20rem] font-display font-black tracking-tighter uppercase whitespace-nowrap">
          {t("cta_title_1")}
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display font-black leading-none uppercase flex flex-col items-center mb-8 lg:mb-12"
        >
          <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] opacity-60">{t("cta_title_1")}</span>
          <span className="text-white">{t("cta_title_2")}</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 lg:mb-16 leading-relaxed px-4"
        >
          {t("cta_desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 w-full max-w-md mx-auto"
        >
          <input 
            type="text" 
            placeholder={t("cta_input_placeholder") || "Your Phone or Email..."} 
            className="w-full bg-white/5 border border-white/10 px-6 py-4 md:py-6 text-sm md:text-base text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500"
          />
          <MagneticButton>
            <Link href="#contact" className="inline-block shrink-0 w-full">
              <button className="group flex items-center justify-center gap-4 bg-accent text-white px-6 py-4 md:px-10 md:py-6 text-sm md:text-base font-semibold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors w-full">
                {t("cta_btn")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
