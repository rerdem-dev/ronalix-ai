"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { en, Translations } from "@/locales/en";
import { tr } from "@/locales/tr";

type LanguageContextType = {
  t: Translations;
  lang: string;
  setLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  t: en,
  lang: "en",
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState("en");
  const [t, setT] = useState<Translations>(en);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check browser language
    const browserLang = navigator.language || navigator.languages?.[0] || "en";
    const detectedLang = browserLang.toLowerCase().startsWith("tr") ? "tr" : "en";
    setLangState(detectedLang);
    setT(detectedLang === "tr" ? tr : en);
  }, []);

  const setLang = (newLang: string) => {
    setLangState(newLang);
    setT(newLang === "tr" ? tr : en);
  };

  // Prevent hydration mismatch by returning empty/default initially if needed, 
  // but since we want static export to work perfectly, we just let it render English first,
  // then hydrate to Turkish if needed on the client.
  
  return (
    <LanguageContext.Provider value={{ t: isClient ? t : en, lang: isClient ? lang : "en", setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
