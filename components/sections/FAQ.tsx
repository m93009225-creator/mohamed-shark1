"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui/Accordion';
import { useLanguage } from '@/context/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* رأس القسم */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t.faq.title}
          </motion.h2>
        </div>

        {/* قائمة الأسئلة المتكررة */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          {Object.entries(t.faq.items).map(([id, item]) => (
            <Accordion
              key={id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;