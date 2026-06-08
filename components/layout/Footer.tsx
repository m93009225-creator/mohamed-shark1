"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';





export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* شبكة القوائم الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* العمود الأول: براند الشركة */}
          <div className="md:col-span-1">
            <span className="text-2xl font-bold text-white tracking-tight">
              Novyra<span className="text-cyan-500">.</span>
            </span>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              {t.footer.brand_desc}
            </p>
          </div>

          {/* العمود الثاني: الخدمات التقنية للشركة */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              {t.footer.col_services}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  {t.footer.services.webDevelopment}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  {t.footer.services.aiSolutions}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  {t.footer.services.mobileApps}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">
                  {t.footer.services.uiuxDesign}
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: الروابط المؤسسية */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              {t.footer.col_company}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  {t.footer.company.aboutNovyra}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">
                  {t.footer.company.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  {t.footer.company.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  {t.footer.company.termsAndConditions}
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: النشرة البريدية المتطورة */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              {t.footer.col_newsletter}
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              {t.footer.newsletter_desc}
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder={t.footer.input_placeholder} 
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 w-full"
              />
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm py-2.5 px-4 font-medium transition-colors w-full">
                {t.footer.subscribe_btn}
              </button>
            </div>
          </div>

        </div>
        {/* السطر السفلي وحقوق الملكية لعام 2026 */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>{t.footer.rights}</p>
          <p>{t.footer.team_status}</p>
        </div>

      </div>
    </footer>
  );
}