import React from 'react';
import {
  CheckCircle2,
  Zap,
} from 'lucide-react';
import seoFriendlyImg from '../assets/images/seo_friendly_showcase_1788113502855.jpg';

interface SeoReadySectionProps {
  onNavigate?: (path: string) => void;
}

export const SeoReadySection: React.FC<SeoReadySectionProps> = ({ onNavigate }) => {
  const checklistItems = [
    { text: 'SEO-Friendly Page Structure', accent: 'navy' },
    { text: 'Proper Heading Structure (H1, H2, H3)', accent: 'blue' },
    { text: 'Meta Title & Meta Description Setup', accent: 'rose' },
    { text: 'Mobile Responsive Design', accent: 'navy' },
  ];

  return (
    <section
      id="seo-ready-section"
      className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================
              LEFT COLUMN: SEO-Ready Image Showcase (45%)
              ======================================================== */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            {/* Curved Abstract Decorative Background Shape */}
            <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-blue-100/70 via-indigo-50/50 to-rose-100/60 rounded-[32px] sm:rounded-[40px] -rotate-1 transform scale-95 sm:scale-100 -z-10 shadow-lg shadow-blue-900/5" />

            {/* Image Container Card */}
            <div className="relative bg-white rounded-3xl p-2 sm:p-3 shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden">
              <img
                src={seoFriendlyImg}
                alt="WebWizia SEO-Friendly Website Architecture and High Performance Growth"
                className="w-full h-auto rounded-2xl object-cover shadow-xs"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Content & Checklist (55%)
              ======================================================== */}
          <div className="lg:col-span-7 text-left space-y-6 order-1 lg:order-2">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-[#F43F5E] text-xs font-black uppercase tracking-wider shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>SEO-READY WEBSITES</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#1e1b4b] tracking-tight leading-[1.18]">
              We Build Every Website Ready For{' '}
              <span className="text-[#F43F5E] underline decoration-[#F43F5E]/20 underline-offset-8">
                Basic SEO
              </span>
            </h2>

            {/* Primary Description */}
            <p className="text-[#1e1b4b] text-base sm:text-lg leading-relaxed font-normal">
              Building a beautiful website isn't enough on its own. We build every website with essential on-page SEO best practices so search engines can easily discover, understand, and crawl your content from day one.
            </p>

            {/* 4-Point SEO Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {checklistItems.map((item, idx) => {
                // Style icon badge background depending on item accent
                const badgeColor =
                  item.accent === 'rose'
                    ? 'bg-rose-50 text-[#F43F5E]'
                    : item.accent === 'navy'
                    ? 'bg-indigo-50 text-[#1e1b4b]'
                    : 'bg-blue-50 text-blue-600';

                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-100 transition-colors"
                  >
                    <div
                      className={`w-7 h-7 rounded-full ${badgeColor} flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#1e1b4b] leading-tight">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

