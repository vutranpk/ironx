"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ClassesSection() {
  const containerRef = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Marquee effect for background text
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const classes: Array<{ title: string, time: string, trainer: string, image: string, id?: string, intensity?: string }> = t("classes_list");

  return (
    <section id="classes" ref={containerRef} className="relative bg-transparent text-white py-32 overflow-hidden scroll-mt-24">
      
      {/* Background Marquee Text */}
      <motion.div 
        style={{ x: marqueeX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none -z-10 opacity-5"
      >
        <h2 className="text-[15rem] font-display font-black uppercase">
          Elite Classes Elite Classes Elite Classes
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Giant Outline Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-black leading-none uppercase flex flex-col">
            <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] opacity-60">{t("classes_subtitle")}</span>
            <span className="text-white">{t("classes_title_1")} {t("classes_title_2")}</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, idx) => (
            <Link href="#contact" key={idx} className="block group cursor-pointer">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="relative h-[350px] lg:h-[450px] bg-black/40 lg:bg-white/[0.03] lg:backdrop-blur-sm overflow-hidden rounded-sm lg:cursor-none transition-colors duration-500"
              >
                {/* Hover Image Background (Always visible on mobile, hover on desktop) */}
                <div className="absolute inset-0 z-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <Image 
                    src={cls.image} 
                    alt={cls.title} 
                    fill 
                    unoptimized
                    className="object-cover scale-100 lg:scale-110 lg:group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 lg:bg-black/60 lg:group-hover:bg-black/40 transition-colors duration-500" />
                </div>

                {/* Number Watermark */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="text-5xl font-display font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)] lg:[-webkit-text-stroke:1px_rgba(255,255,255,0.2)] lg:group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.8)] transition-all duration-500">
                    {cls.id}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white lg:text-gray-300 lg:group-hover:text-white transition-colors">
                    {cls.title}
                  </h3>
                  <div className="flex flex-col text-xs font-bold uppercase tracking-widest transition-colors">
                    {/* Using time/intensity or time/trainer depending on the data structure we settled on. In our VN/EN dict we provided time and trainer */}
                    <span className="block text-accent font-bold mb-1">{cls.time}</span>
                    <span className="text-gray-400">{cls.trainer || cls.intensity}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
