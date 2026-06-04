"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { featuredItems } from '@/data/items';
import Button from '@/components/ui/Button';
import { Star, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const FeaturedItems = () => {
  const { t } = useLanguage();

  // Helper function to get translation by dot notation path
  const getTranslation = (path: string): string => {
    const keys = path.split('.');
    let value: any = t;
    for (const key of keys) {
      value = (value as any)?.[key];
    }
    return value || path;
  };

  return (
    <section id="featured" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{getTranslation("featuredItems.title")}</h2>
            <p className="text-gray-400">{getTranslation("featuredItems.description")}</p>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex">{getTranslation("featuredItems.viewAll")}</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* صورة المنتج */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={getTranslation(item.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
                  {getTranslation(item.categoryKey)}
                </div>
              </div>

              {/* تفاصيل المنتج */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {getTranslation(item.titleKey)}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <MapPin size={14} />
                  <span>{getTranslation(item.ownerKey)}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-2xl font-bold text-white">${item.pricePerDay}</span>
                    <span className="text-gray-500 text-sm">{getTranslation("featuredItems.perDay")}</span>
                  </div>
                  <Button variant="primary" size="sm">{getTranslation("featuredItems.bookNow")}</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;