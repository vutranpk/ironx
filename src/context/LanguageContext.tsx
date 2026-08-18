"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en";
import vn from "../locales/vn";

type Language = "vn" | "en";
type Translations = typeof vn;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof Translations) => string | any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("vn");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "vn" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "vn" ? "en" : "vn";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: keyof Translations) => {
    const dict = language === "vn" ? vn : en;
    return dict[key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
