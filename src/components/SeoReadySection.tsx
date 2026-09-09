import React from 'react';
import {
  Check,
  Zap,
  Search,
  Gauge,
} from 'lucide-react';
import seoFriendlyImg from '../assets/images/seo_friendly_showcase_1788113502855.jpg';

interface SeoReadySectionProps {
  onNavigate?: (path: string) => void;
}

export const SeoReadySection: React.FC<SeoReadySectionProps> = ({ onNavigate }) => {
  const checklistItems = [
    { text: 'Structured Heading Hierarchy (H1, H2, H3)', accent: 'navy' },
    { text: 'Accurate Meta Title & Description Setup', accent: 'purple' },
    { text: 'Fast, Mobile-First Responsive Design', accent: 'rose' },
    { text: 'Search-Engine Friendly Site Architecture', accent: 'navy' },
    { text: 'Schema Structured Data & Rich Snippets', accent: 'purple' },
    { text: 'XML Sitemap & Robots.txt Optimization', accent: 'navy' },
    { text: 'Optimized Core Web Vitals & PageSpeed', accent: 'rose' },
    { text: 'Image Compression & Semantic Alt Tags', accent: 'purple' },
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================
              LEFT COLUMN: SEO-Ready Image Showcase (Equal 50% / col-span-6)
              ======================================================== */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Soft decorative ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/60 via-purple-50/40 to-rose-100/50 rounded-[36px] -rotate-1 transform scale-98 -z-10 blur-sm" />

              {/* Main Image Container Card */}
              <div className="relative bg-white rounded-3xl p-2.5 sm:p-3 shadow-2xl shadow-slate-900/8 border border-slate-100/80 overflow-hidden">
                <img
                  src={seoFriendlyImg}
                  alt="Webwizia website architecture and search engine optimisation structure"
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/3] sm:aspect-[1.3/1] shadow-xs"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Floating Top Badge: PageSpeed Score */}
                <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-lg shadow-slate-300/40 border border-slate-100/90 flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xs sm:text-sm shrink-0">
                    <Gauge className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black text-[#1c1248] leading-none">99 / 100</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">PageSpeed Score</div>
                  </div>
                </div>

                {/* Floating Bottom Badge: 100% SEO Ready */}
                <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-lg shadow-slate-300/40 border border-slate-100/90 flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#6534ff]/10 text-[#6534ff] flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4 text-[#6534ff]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black text-[#1c1248] leading-none">100% SEO Ready</div>
                    <div className="text-[10px] font-black text-emerald-600 uppercase tracking-wider mt-0.5">Rank & Index Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Content & 8-Point Checklist (Equal 50% / col-span-6)
              ======================================================== */}
          <div className="lg:col-span-6 text-left space-y-5 order-1 lg:order-2">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-current text-blue-600" />
              <span>SEARCH-READY WEBSITES</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1c1248] tracking-tight leading-[1.18]">
              Every Website Built Ready For{' '}
              <span className="text-[#ff5268]">
                Search Engines
              </span>
            </h2>

            {/* Primary Description */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              At Webwizia Web Design and Webwizia SEO Services, every business website is built with search engine discovery in mind. We implement structured on-page optimization, clean coding standards, and responsive website design so search engines can index and rank your pages effectively.
            </p>

            {/* 8-Point SEO Feature Checklist Grid (Equal 4 rows x 2 columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {checklistItems.map((item, idx) => {
                const badgeColor =
                  item.accent === 'rose'
                    ? 'bg-[#ff5268] text-white'
                    : item.accent === 'purple'
                    ? 'bg-[#6534ff] text-white'
                    : 'bg-[#1c1248] text-white';

                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100/90 border border-slate-100 transition-all duration-200 min-h-[54px]"
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${badgeColor} flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1c1248] leading-snug">
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

