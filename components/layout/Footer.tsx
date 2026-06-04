import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button'; // استدعاء الزرار المحترف اللي عملته!

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        
        {/* الجزء العلوي: تقسيم القوائم */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* العمود الأول: الهوية والشعار */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl font-bold tracking-tight">
              شَارِك<span className="text-blue-600">.</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              أي حاجة ممكن تتأجر - شارك. أول منصة تشاركية موثوقة في مصر لتأجير واستئجار الأغراض اليومية بكل أمان.
            </p>
          </div>

          {/* العمود الثاني: أقسام التأجير الشائعة (مستوحاة من دراسة الجدوى) */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">أقسام شائعة</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/photography" className="hover:text-white transition-colors">معدات التصوير والرحلات</Link></li>
              <li><Link href="/categories/tools" className="hover:text-white transition-colors">أدوات المنزل والحدائق</Link></li>
              <li><Link href="/categories/events" className="hover:text-white transition-colors">مستلزمات المناسبات</Link></li>
              <li><Link href="/cities" className="hover:text-white transition-colors">مناطق التغطية (الإسكندرية • القاهرة • الجيزة)</Link></li>
            </ul>
          </div>

          {/* العمود الثالث: الأمان والدعم (طبقة الثقة) */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">الأمان والخصوصية</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/trust" className="hover:text-white transition-colors">نظام الحجز الآمن (Escrow)</Link></li>
              <li><Link href="/kyc" className="hover:text-white transition-colors">التحقق من الهوية (KYC)</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">مركز حل النزاعات والدعم</Link></li>
            </ul>
          </div>

          {/* العمود الرابع: القائمة البريدية (استخدام الزرار بتاع علي) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">النشرة البريدية</h3>
            <p className="text-sm text-gray-400">اشترك لتصلك أحدث الأغراض المتاحة للتأجير بالقرب منك.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-gray-900 text-white placeholder-gray-500 px-4 py-2 rounded-md text-sm border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                required
              />
              {/* هنا استخدمنا المكون بتاعك وباسلوب الـ sm للحجم والـ primary للون */}
              <Button variant="primary" size="sm" type="submit" className="whitespace-nowrap">
                اشترك الآن
              </Button>
            </form>
          </div>

        </div>

        {/* الجزء السفلي: الحقوق وقنوات التواصل */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} منصة شارك (Sharek Marketplace). جميع الحقوق محفوظة.</p>
          <div className="flex gap-4 text-gray-500">
            <span className="text-gray-400">فريق عمل التطوير الداخلي • QA Passed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;