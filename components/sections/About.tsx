"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-black text-white">
      <section id="about" className="scroll-mt-24"></section>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass p-6 hover:scale-105 transition duration-300"></div>

          <h2 className="text-4xl font-bold mb-6">{t.about.title}</h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">{t.about.desc}</p>

          <p className="text-gray-400">{t.about.mission}</p>
        </motion.div>

        {/* Right Side (Stats Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400">{t.about.stats.projects}</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
            <p className="text-gray-400">{t.about.stats.clients}</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
            <p className="text-gray-400">{t.about.stats.years}</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
            <p className="text-gray-400">{t.about.stats.support}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

