"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (

    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <section id="home" className="scroll-mt-24"></section>
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[180px] opacity-20 animate-pulse"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-20 animate-pulse"></div>
      {/* Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500 blur-[160px] opacity-20 rounded-full" />
<div className="glass p-6 hover:scale-105 transition duration-300"></div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {t.hero.title}
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10">
          {t.hero.desc}
        </p>

        <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">
  {t.hero.button}
</button>
      </motion.div>
    </section>
  );
}