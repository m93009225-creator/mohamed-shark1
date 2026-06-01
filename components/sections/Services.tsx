"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type Service = {
  titleKey: "Web Development" | "AI Solutions" | "Cybersecurity" | "UI/UX Design";
  descKey: "Web Development" | "AI Solutions" | "Cybersecurity" | "UI/UX Design";
};

const services: Service[] = [
  {
    titleKey: "Web Development",
    descKey: "Web Development",
  },
  {
    titleKey: "AI Solutions",
    descKey: "AI Solutions",
  },
  {
    titleKey: "Cybersecurity",
    descKey: "Cybersecurity",
  },
  {
    titleKey: "UI/UX Design",
    descKey: "UI/UX Design",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-black text-white">
      <section id="services" className="scroll-mt-24"></section>
      <div className="glass p-6 hover:scale-105 transition duration-300"></div>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
        <p className="text-gray-400">{t.services.title}</p>


      </div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.titleKey}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">{service.titleKey}</h3>
            <p className="text-gray-400">{service.descKey}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

