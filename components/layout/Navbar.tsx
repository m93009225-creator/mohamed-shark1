"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const router = useRouter();
  const { t, toggleLang } = useLanguage();
  const [active, setActive] = useState("home");
  
  // 1. إضافة الـ State الخاصة بفتح وقفل قائمة الموبايل
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home", id: "home" },
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.services, href: "#services", id: "services" },
    { label: t.nav.faq, href: "#faq", id: "faq" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
    { label: t.nav.portfolio, href: "/portfolio", id: "portfolio" },
    { label: t.nav.team, href: "/team", id: "team" },
  ];

  const handleClick = (link: { label: string; href: string; id: string }) => {
    setActive(link.id);
    
    // عند الضغط على أي لينك في الموبايل، نقفل القائمة تلقائياً
    setIsMenuOpen(false);

    if (link.href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        router.push(`/${link.href}`);
        return;
      }

      const el = document.getElementById(link.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(link.href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      links.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]); // إضافة لضمان التحديث المستقر

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-4 sm:px-6">

        {/* LEFT - LOGO */}
        <h1 className="font-bold text-white text-lg md:text-xl">
          TechCompany
        </h1>

        {/* CENTER - LINKS (Desktop Only) */}
        {/* التعديل: اضفنا hidden md:flex عشان تختفي في الموبايل وتظهر من أول شاشات اللابتوب والتابلت */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l)}
              className={`transition text-sm font-medium ${
                active === l.id
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* RIGHT - LANGUAGE (Desktop Only) & HAMBURGER BUTTON (Mobile Only) */}
        <div className="flex items-center gap-4">
          
          {/* زر تغيير اللغة يظهر فقط في الكمبيوتر هنا وسنقوم بنسخه للموبايل بالأسفل */}
          <button
            onClick={toggleLang}
            className="hidden md:block text-cyan-400 hover:text-white transition text-sm font-medium"
            dir="ltr"
          >
            EN / AR
          </button>

          {/* زرار همبرجر للموبايل فقط يظهر في الشاشات الصغيرة ويختفي في md:hidden */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden text-gray-300 hover:text-white focus:outline-none p-1"
          >
            {isMenuOpen ? (
              // أيقونة قفل (X) عند فتح القائمة
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // أيقونة ثلاث شرط (☰) في الوضع العادي
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* --- القائمة المنسدلة للموبايل (Mobile Menu Panel) --- */}
      {/* تظهر فقط لو كانت الـ State تساوي true وتختفي تلقائياً في الشاشات الكبيرة */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 px-4 pt-2 pb-6 space-y-4 flex flex-col absolute w-full left-0 top-[100%] backdrop-blur-xl animate-fade-in">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l)}
              className={`text-left w-full py-2 transition text-base font-medium border-b border-white/[0.03] last:border-none ${
                active === l.id
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
          
          {/* زر اللغة مخصص للموبايل في أسفل القائمة */}
          <div className="pt-2">
            <button
              onClick={() => {
                toggleLang();
                setIsMenuOpen(false);
              }}
              className="w-full text-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 py-2.5 rounded-xl text-sm font-medium transition active:bg-cyan-500/20"
              dir="ltr"
            >
              🌐 EN / AR
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}