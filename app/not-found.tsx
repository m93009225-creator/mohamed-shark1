"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/ui/Button'; // استدعاء زرار علي المحترف

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-black">
      
      {/* 1. الحاوية المتحركة للرمز والرقم */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2"
      >
        {/* أيقونة تعبيرية تدل على البحث أو الفقدان */}
        <span className="text-6xl md:text-7xl mb-2">🔍</span>
        
        {/* رقم الخطأ الكبير بتأثير لوني متدرج خلفي (Gradient) */}
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          404
        </h1>
      </motion.div>

      {/* 2. نص رسالة الخطأ المتوافقة مع هوية مشروع "شارك" */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-md"
      >
        <h2 className="text-white text-xl md:text-2xl font-bold mb-3">
          {t.errors.notFound.title}
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          {t.errors.notFound.description}
        </p>

        {/* 3. زر العودة إلى الصفحة الرئيسية باستخدام مكون علي */}
        <div className="flex justify-center">
          <Link href="/">
            <Button variant="primary" size="lg" className="px-8 shadow-lg shadow-blue-500/20">
              {t.errors.notFound.button}
            </Button>
          </Link>
        </div>
      </motion.div>

    </div>
  );
}