"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/portfolio';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

const FeaturedProjects = () => {
  const { t } = useLanguage();
  const featured = projects.slice(0, 3);

  return (
    <section id="featured" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        
        {/* رأس القسم */}
        <div className="flex justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* ملاحظة: يمكنك استبدال هذه النصوص بمفاتيح i18n مثل t('featured.title') */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t.featured.title}
            </h2>
            <p className="text-gray-400 max-w-md">
              {t.featured.description}
            </p>
          </motion.div>
        </div>

        {/* شبكة كروت المشاريع (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* حاوية الصورة مع تأثير الزوم الاحترافي عند الـ Hover */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* تفاصيل المشروع */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-2">
                  {project.description}
                </p>

                {/* التقنيات المستخدمة (Tags) المستخرجة ديناميكياً */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-cyan-950/30 text-cyan-400 border border-cyan-500/10 px-3 py-1 rounded-xl text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر التوجيه الذكي لصفحة معرض الأعمال الكاملة المصفاة */}
        <div className="flex justify-center mt-12">
          <Link href="/portfolio">
            <Button variant="primary" className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl px-8 py-3 font-medium transition-all duration-350">
              {t.featured.viewAll}
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;