"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import MaskReveal from "./MaskReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const targetRef = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Since we now have 5 cards, the horizontal scroll needs to travel further.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const features: Array<{ id: string, title: string, desc: string, image: string }> = t("about_features");

  return (
    // Increased height to 400vh to give the user enough scroll time to view all 5 cards comfortably
    <section id="about" ref={targetRef} className="relative h-[400vh] bg-transparent text-white scroll-mt-24">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-16 lg:py-24">
        
        <div className="container mx-auto px-6 lg:px-16 mb-8 lg:mb-12 shrink-0">
          <MaskReveal>
            <p className="text-[10px] lg:text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2 lg:mb-4">
              <span className="text-accent font-black mr-2">•</span>{t("about_subtitle")}
            </p>
          </MaskReveal>
          <MaskReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-tight">
              {t("about_title_1")} <br className="hidden md:block" />
              {t("about_title_2")}
            </h2>
          </MaskReveal>
          <MaskReveal delay={0.4}>
            <p className="text-gray-400 max-w-xl text-xs sm:text-sm lg:text-base leading-relaxed mt-4 lg:mt-6">
              {t("about_desc")}
            </p>
          </MaskReveal>
        </div>

        {/* Increased width to accommodate 5 cards (approx 450vw on mobile, 380vw on desktop) */}
        <motion.div style={{ x }} className="flex gap-4 lg:gap-8 px-6 lg:px-16 w-[450vw] lg:w-[380vw]">
          {features.map((feature) => (
            <div key={feature.id} className="relative w-[85vw] lg:w-[70vw] h-[45vh] lg:h-[60vh] flex-shrink-0 group overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              
              <div className="relative z-10 p-6 lg:p-16 h-full flex flex-col justify-between max-w-xl pointer-events-none">
                <span className="text-3xl lg:text-6xl font-display font-bold text-white/30 drop-shadow-md">{feature.id}</span>
                
                <div>
                  <h3 className="text-2xl lg:text-4xl font-display font-bold mb-2 lg:mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-0 leading-relaxed text-xs lg:text-base font-medium drop-shadow">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
