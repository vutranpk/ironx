"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import MagneticButton from "./MagneticButton";
import { Play } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  
  // Parallax and Scale effects for the video background
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const { t } = useLanguage();
  
  // Video scales up from 1 to 1.2 when scrolling down
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Typography Parallax Effects (splitting the text in different directions)
  const powerX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const powerY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  const strengthX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const strengthY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  
  const cardioX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const cardioY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Intro Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.8,
      }
    }
  };

  const textRevealVariants: any = {
    hidden: { y: "120%", opacity: 0 },
    visible: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={container} className="relative h-[100dvh] lg:h-screen lg:min-h-[800px] bg-black text-white overflow-hidden">
      
      {/* Intro Overlay Curtain */}
      <motion.div 
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 bg-black z-50 pointer-events-none"
      />

      {/* Zooming Video Background (Intro + Scroll Parallax) */}
      <motion.div 
        initial={{ scale: 2.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute inset-0 z-0 origin-center"
      >
        <motion.div style={{ scale: videoScale }} className="w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            src="/hero.mp4"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      
      <Navbar />

      <div className="relative z-10 w-full px-6 lg:px-16 h-full flex flex-col pt-24 pb-8 lg:pt-36 lg:pb-12">
        
        {/* Top Area: Intro Text */}
        <div className="flex flex-col lg:flex-row justify-end lg:items-center w-full gap-4 lg:gap-0 mt-4">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="max-w-xs text-right hidden lg:block"
          >
            <p className="text-sm text-gray-300 font-medium leading-relaxed">
              We are not just a gym. We are a community of dedicated individuals pushing beyond our limits.
            </p>
          </motion.div>
        </div>

        {/* Main Content Area: Typography + CTAs */}
        <div className="w-full mt-auto mb-4 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between pointer-events-none">
          
          <div className="flex flex-col gap-4 lg:gap-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{ y: textY }}
              className="hidden md:block text-gray-300 max-w-sm text-sm lg:text-base leading-relaxed"
            >
              {t("hero_subtitle")}
            </motion.p>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              style={{ opacity: textOpacity }}
              className="font-display font-black tracking-tighter leading-none uppercase flex flex-col"
            >
              <motion.div style={{ x: powerX, y: powerY }} className="overflow-hidden">
                <motion.span variants={textRevealVariants} className="text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] block text-white drop-shadow-2xl pb-1 md:pb-2 pt-2 lg:pt-4">
                  <span className="block mb-[-2%]">{t("hero_title_1")}</span>
                </motion.span>
              </motion.div>
              
              <motion.div style={{ x: strengthX, y: strengthY }} className="overflow-hidden">
                <motion.span variants={textRevealVariants} className="text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] block text-white drop-shadow-2xl pb-1 md:pb-2">
                  <span className="block mb-[-2%] text-transparent bg-clip-text" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>{t("hero_title_2")}</span>
                </motion.span>
              </motion.div>
              
              <motion.div style={{ x: cardioX, y: cardioY }} className="overflow-hidden">
                <motion.span variants={textRevealVariants} className="text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] block text-white drop-shadow-2xl pb-1 md:pb-2">
                  <span className="block">{t("hero_title_3")}</span>
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center w-full lg:w-auto mt-6 lg:mt-0 gap-6 lg:gap-12 pointer-events-auto"
          >
            <div>
              <p className="text-[10px] lg:text-xs text-gray-500 font-semibold mb-1 uppercase tracking-widest">Call Us</p>
              <p className="font-display font-bold text-white text-lg lg:text-xl">+1 (800) 123-4567</p>
            </div>

            <MagneticButton>
              <Link href="#classes" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-accent border border-accent text-white px-6 py-4 lg:px-8 lg:py-4 text-xs font-semibold uppercase tracking-widest hover:bg-transparent hover:text-accent transition-colors text-center">
                  {t("hero_btn_explore")}
                </button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
