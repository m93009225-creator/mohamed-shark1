"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type Service = {
  key: "webDevelopment" | "aiSolutions" | "cybersecurity" | "uiuxDesign";
};

const services: Service[] = [
  { key: "webDevelopment" },
  { key: "aiSolutions" },
  { key: "cybersecurity" },
  { key: "uiuxDesign" },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    // التعديل: py-16 للموبايل وتكبر لـ py-24 في الشاشات الكبيرة مع أمان الـ px
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative" id="services">
      <div className="scroll-mt-24"></div>
{/* الرأسية المتجاوبة (Header) */}
<div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
    {t.services?.title || "Our Services"}
  </h2>
  <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
    {t.services?.subtitle || "We deliver premium digital solutions tailored to your business growth."}
  </p>
</div>

      {/* الـ Grid المتجاوب الذكي */}
      {/* التعديل: grid-cols-1 (كارت واحد مالي الشاشة في الموبايل) -> sm:grid-cols-2 (كارتين في التابلت) -> lg:grid-cols-4 (4 كروت في الشاشة الكبيرة) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // الأنميشن يشتغل مرة واحدة لراحة العين
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {t.services?.items?.[service.key]?.title || service.key}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {t.services?.items?.[service.key]?.description || ""}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}