"use client";

import React, { createContext, useContext, useState } from "react";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";


type Language = "en" | "ar";

type LanguageContextValue = {
  t: typeof import("@/messages/en.json");
  toggleLang: () => void;
  lang: Language;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const t = lang === "en" ? en : ar;

  const toggleLang = () => {
    setLang((p) => (p === "en" ? "ar" : "en"));
  };

  // Apply RTL/LTR to the whole app
  React.useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang]);


  return (
    <LanguageContext.Provider value={{ t, toggleLang, lang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
