"use client";

import { useState, useEffect } from "react";


import { useRouter } from "next/navigation";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const router = useRouter();
  const { t, toggleLang } = useLanguage();
  const [active, setActive] = useState("home");

  const links = [
    { label: t.nav.home, href: "#home", id: "home" },
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.services, href: "#services", id: "services" },
    
    { label: t.nav.contact, href: "#contact", id: "contact" },
    { label: t.nav.portfolio, href: "/portfolio", id: "portfolio" },
  ];
  const handleClick = (link: { label: string; href: string; id: string }) => {
    setActive(link.id);

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
  }, []);


  return (

    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LEFT - LOGO */}
        <h1 className="font-bold text-white">
          TechCompany
        </h1>

        {/* CENTER - LINKS */}
        <div className="flex gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l)}
              className={`transition ${active === l.id
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* RIGHT - LANGUAGE */}
        <button
          onClick={toggleLang}
          className="text-cyan-400 hover:text-white transition"
          dir="ltr"
        >
          EN / AR
        </button>

      </div>
    </nav>
  );
}