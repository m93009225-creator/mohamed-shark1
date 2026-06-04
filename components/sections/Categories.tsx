"use client";

import { motion } from 'framer-motion';
import { categories } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';


const Categories = () => {
  const { t } = useLanguage();

  return (
    <section id="categories" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t.categories.title}
          </motion.h2>
          <p className="text-gray-400">{t.categories.description}</p>
        </div>

        {/* شبكة التصنيفات */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 group-hover:border-cyan-500/50">
                {/* الدائرة الخلفية للأيقونة */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} p-4 mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="text-white w-8 h-8" />
                </div>
                
                <h3 className="text-white font-semibold mb-1">{(t as any).categoryItems?.[category.titleKey] || category.titleKey}</h3>
                <span className="text-xs text-gray-500">{(t as any).categoryCounts?.[category.countKey] || category.countKey}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;