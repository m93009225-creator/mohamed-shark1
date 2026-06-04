import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Button from '@/components/ui/Button';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        
        {/* الجزء العلوي: تقسيم القوائم */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo and Tagline */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl font-bold tracking-tight">
              Sharek<span className="text-blue-600">.</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              {(t as any).footer.tagline}
            </p>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{(t as any).footer.popularSections}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/photography" className="hover:text-white transition-colors">{(t as any).footer.links.photography}</Link></li>
              <li><Link href="/categories/tools" className="hover:text-white transition-colors">{(t as any).footer.links.tools}</Link></li>
              <li><Link href="/categories/events" className="hover:text-white transition-colors">{(t as any).footer.links.events}</Link></li>
              <li><Link href="/cities" className="hover:text-white transition-colors">{(t as any).footer.links.cities}</Link></li>
            </ul>
          </div>

          {/* Security & Privacy */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{(t as any).footer.security}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/trust" className="hover:text-white transition-colors">{(t as any).footer.links.trust}</Link></li>
              <li><Link href="/kyc" className="hover:text-white transition-colors">{(t as any).footer.links.kyc}</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">{(t as any).footer.links.terms}</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">{(t as any).footer.links.support}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{(t as any).footer.newsletter}</h3>
            <p className="text-sm text-gray-400">{(t as any).footer.newsletterDesc}</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder={`${(t as any).footer.emailPlaceholder}`} 
                className="bg-gray-900 text-white placeholder-gray-500 px-4 py-2 rounded-md text-sm border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                required
              />
              <Button variant="primary" size="sm" type="submit" className="whitespace-nowrap">
                {(t as any).footer.subscribe}
              </Button>
            </form>
          </div>

        </div>

        {/* Footer Bottom: Rights and Contact */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{(t as any).footer.copyright.replace('{year}', currentYear)}</p>
          <div className="flex gap-4 text-gray-500">
            <span className="text-gray-400">Internal Development Team • QA Passed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;