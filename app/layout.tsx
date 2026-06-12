"use client";

import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from '@/components/layout/Navbar';

// Note: LanguageProvider updates <html dir/lang> at runtime.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white overflow-x-hidden" suppressHydrationWarning>
        {/* 1. المظلة الأساسية لكل مكونات التطبيق */}
        <LanguageProvider>
          
          {/* 2. الـ Navbar داخل الـ Provider ليقرأ حالة اللغة بنجاح */}
          <Navbar />
          
          {/* 3. تأثيرات الحركية لصفحات المحتوى المتغيرة فقط */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>


        </LanguageProvider>
      </body>
    </html>
  );
}