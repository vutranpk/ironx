"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedNumber from "./AnimatedNumber";
import { useLanguage } from "@/context/LanguageContext";

export default function CoachesSection() {
  const containerRef = useRef(null);
  const { t } = useLanguage();
  
  // Helper to parse numbers like "150+" into { num: 150, suffix: "+" }
  const parseStat = (str: string) => {
    const num = parseInt(str.replace(/[^0-9]/g, ''), 10);
    const suffix = str.replace(/[0-9]/g, '');
    return { num: isNaN(num) ? 0 : num, suffix };
  };
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const coaches: Array<{ name: string, role: string, image: string }> = t("coaches_list");

  return (
    <section id="coaches" ref={containerRef} className="bg-transparent text-white py-32 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Giant Outline Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-black leading-none uppercase flex flex-col">
            <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] opacity-60">{t("coaches_subtitle")}</span>
            <span className="text-white">{t("coaches_title")}</span>
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {t("coaches_desc")}
          </p>
        </motion.div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <Link href="#contact" key={idx} className="block group cursor-pointer">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden aspect-[3/4] bg-[#111]"
              >
                {/* Image Scale on Hover */}
                <Image 
                  src={coach.image} 
                  alt={coach.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-1 group-hover:text-accent transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    {coach.role}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
          <div className="flex items-center gap-4">
            <AnimatedNumber 
              value={parseStat(t("coaches_stat_1_num")).num} 
              suffix={parseStat(t("coaches_stat_1_num")).suffix} 
              className="text-6xl md:text-8xl font-display font-bold text-gray-500" 
            />
            <span className="text-xs font-semibold uppercase tracking-widest leading-relaxed">{t("coaches_stat_1_text")[0]}<br />{t("coaches_stat_1_text")[1]}</span>
          </div>
          <div className="flex items-center gap-4">
            <AnimatedNumber 
              value={parseStat(t("coaches_stat_2_num")).num} 
              suffix={parseStat(t("coaches_stat_2_num")).suffix} 
              className="text-6xl md:text-8xl font-display font-bold text-gray-500" 
            />
            <span className="text-xs font-semibold uppercase tracking-widest leading-relaxed">{t("coaches_stat_2_text")[0]}<br />{t("coaches_stat_2_text")[1]}</span>
          </div>
          <div className="flex items-center gap-4">
            <AnimatedNumber 
              value={parseStat(t("coaches_stat_3_num")).num} 
              suffix={parseStat(t("coaches_stat_3_num")).suffix} 
              className="text-6xl md:text-8xl font-display font-bold text-gray-500" 
            />
            <span className="text-xs font-semibold uppercase tracking-widest leading-relaxed">{t("coaches_stat_3_text")[0]}<br />{t("coaches_stat_3_text")[1]}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
