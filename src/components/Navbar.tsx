"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] px-6 lg:px-16 py-4 flex justify-between items-center text-white transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href="/" className="text-2xl font-display font-black tracking-tighter flex items-center gap-1 z-[110]">
          IronX
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          <Link href="#about" className="hover:text-gray-300 transition-colors">{t("nav_about")}</Link>
          <Link href="#classes" className="hover:text-gray-300 transition-colors">{t("nav_classes")}</Link>
          <Link href="#coaches" className="hover:text-gray-300 transition-colors">{t("nav_coaches")}</Link>
          <Link href="#contact" className="hover:text-gray-300 transition-colors">{t("nav_contact")}</Link>
          
          <div className="flex items-center bg-white/5 p-1 rounded-md border border-white/10 ml-4">
            <button 
              onClick={() => language !== "en" && toggleLanguage()} 
              className={`px-3 py-1.5 text-xs font-bold transition-all rounded ${language === "en" ? "bg-accent text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
            >
              EN
            </button>
            <button 
              onClick={() => language !== "vn" && toggleLanguage()} 
              className={`px-3 py-1.5 text-xs font-bold transition-all rounded ${language === "vn" ? "bg-accent text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
            >
              VN
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <MagneticButton>
            <Link href="#contact" className="inline-block">
              <button className="border border-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-white transition-colors">
                {t("nav_get_in_touch")}
              </button>
            </Link>
          </MagneticButton>
        </div>

        <button 
          className="lg:hidden text-white z-[110]"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center text-white lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-xl font-display font-bold uppercase tracking-widest">
              <Link href="#about" onClick={toggleMenu} className="hover:text-accent transition-colors">{t("nav_about")}</Link>
              <Link href="#classes" onClick={toggleMenu} className="hover:text-accent transition-colors">{t("nav_classes")}</Link>
              <Link href="#coaches" onClick={toggleMenu} className="hover:text-accent transition-colors">{t("nav_coaches")}</Link>
              <Link href="#contact" onClick={toggleMenu} className="hover:text-accent transition-colors">{t("nav_contact")}</Link>
              
              <div className="flex items-center gap-2 bg-white/5 p-1 rounded-md border border-white/10 mt-2">
                <button 
                  onClick={() => { if(language !== "en") toggleLanguage(); toggleMenu(); }} 
                  className={`px-4 py-1.5 text-sm font-bold transition-all rounded ${language === "en" ? "bg-accent text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => { if(language !== "vn") toggleLanguage(); toggleMenu(); }} 
                  className={`px-4 py-1.5 text-sm font-bold transition-all rounded ${language === "vn" ? "bg-accent text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
                >
                  VN
                </button>
              </div>

              <Link href="#contact" onClick={toggleMenu} className="mt-4 inline-block">
                <button className="border border-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-white transition-colors w-full text-center">
                  {t("nav_get_in_touch")}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
