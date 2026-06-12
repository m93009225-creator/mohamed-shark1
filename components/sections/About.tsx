"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-black text-white">
      <section id="about" className="scroll-mt-24"></section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <motion.div
        className="w-full md:w-1/2" // <--- اضفنا تقسيم المساحة هنا          whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2> {/* <--- جعلنا الخط متجاوب */}
         <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">{t.about.desc}</p>
          <p className="text-gray-400 text-sm md:text-base">{t.about.mission}</p>
        </motion.div>

        {/* Right Side (Stats Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
         className="w-full md:w-1/2 grid grid-cols-2 gap-4 sm:gap-6"
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

