import React from 'react';
import {
  Code2,
  Search,
  Target,
  Rocket,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import whyChooseUsImg from '../assets/images/why_choose_us_illustration_1788119021359.jpg';

interface WhyChooseUsSectionProps {
  onNavigate?: (path: string) => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onNavigate }) => {
  const leftFeatures = [
    {
      number: '01',
      title: 'Bespoke Website Development',
      description:
        'As a dedicated web development company in Lahore, every project is planned around your business requirements with custom website design Lahore standards.',
      icon: Code2,
      badge: 'Tailored Solutions',
      gradient: 'from-blue-600 to-indigo-600',
      bgLight: 'bg-blue-50/80',
      textAccent: 'text-blue-600',
    },
    {
      number: '02',
      title: 'Built-In SEO Foundation',
      description:
        'Engineered with on-page SEO services in Lahore, clean semantic code, fast loading speeds, and responsive website design for superior search engine performance.',
      icon: Search,
      badge: 'High Visibility',
      gradient: 'from-indigo-600 to-purple-600',
      bgLight: 'bg-indigo-50/80',
      textAccent: 'text-indigo-600',
    },
  ];

  const rightFeatures = [
    {
      number: '03',
      title: 'Conversion-Focused UX',
      description:
        'We design user journeys and intuitive navigation that guide visitors toward consultations, helping your business generate qualified leads.',
      icon: Target,
      badge: 'ROI & Leads',
      gradient: 'from-blue-600 to-cyan-600',
      bgLight: 'bg-cyan-50/80',
      textAccent: 'text-blue-600',
    },
    {
      number: '04',
      title: 'Built for Sustainable Growth',
      description:
        'From single-page corporate sites to full-scale e-commerce stores and local SEO campaigns, Webwizia Lahore builds scalable digital assets.',
      icon: Rocket,
      badge: 'Scalable Architecture',
      gradient: 'from-purple-600 to-pink-600',
      bgLight: 'bg-purple-50/80',
      textAccent: 'text-purple-600',
    },
  ];

  return (
    <section
      id="why-choose-us-edge"
      className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100"
    >
      {/* Subtle Background Glow Rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-100/30 via-indigo-50/40 to-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-50/60 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-50/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-blue-600 text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1b4b] tracking-tight leading-[1.15] md:whitespace-nowrap">
            What Makes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Webwizia
            </span>{' '}
            Different
          </h2>

          <p className="text-[#1e1b4b] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            As a reputable web design company and digital marketing agency in Lahore, we build high-performing websites and strategic SEO campaigns tailored to your commercial goals.
          </p>
        </div>

        {/* 3-Column Layout: Left (01, 02) | Center Illustration | Right (03, 04) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
          
          {/* ========================================================
              LEFT COLUMN: Feature 01 & Feature 02
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 sm:gap-8 order-1">
            {leftFeatures.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.number}
                  className="group relative bg-white hover:bg-slate-50/90 rounded-3xl p-6 sm:p-7 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-1 text-left flex-1 flex flex-col justify-center"
                >
                  <div className="flex items-start justify-between mb-4">
                    {/* Big Stylized Number */}
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight font-mono">
                        {item.number}
                      </span>
                      <div className="h-4 w-px bg-slate-200" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Feature
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div
                      className={`w-11 h-11 rounded-2xl ${item.bgLight} ${item.textAccent} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#1e1b4b] group-hover:text-blue-600 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-[#1e1b4b] text-sm sm:text-[15px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ========================================================
              CENTER COLUMN: Central Visual Focal Point Illustration
              ======================================================== */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center order-2 my-4 lg:my-0 h-full">
            {/* Ambient Multi-layer Background Aura */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-blue-200/50 via-indigo-100/60 to-purple-200/50 rounded-[40px] blur-xl -z-10 opacity-70" />
            
            {/* Illustration Card Container (Equal height on desktop) */}
            <div className="relative w-full h-full min-h-[380px] lg:min-h-full mx-auto bg-white rounded-3xl p-3 sm:p-4 shadow-2xl shadow-indigo-950/10 border border-slate-100 overflow-hidden flex flex-col group">
              <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                <img
                  src={whyChooseUsImg}
                  alt="Webwizia web design, SEO and digital marketing agency in Lahore"
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge Bottom Left: Growth & Results */}
              <div className="absolute -bottom-2 -left-2 sm:-left-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-2.5 z-20">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#1e1b4b]">+180% Growth</div>
                  <div className="text-[9px] font-semibold text-slate-400">Search & Conversion</div>
                </div>
              </div>

              {/* Floating Badge Top Right: 100% Custom */}
              <div className="absolute -top-2 -right-2 sm:-right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-2 z-20">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span className="text-[11px] font-bold text-[#1e1b4b]">
                  100% Bespoke
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Feature 03 & Feature 04
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 sm:gap-8 order-3">
            {rightFeatures.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.number}
                  className="group relative bg-white hover:bg-slate-50/90 rounded-3xl p-6 sm:p-7 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-1 text-left flex-1 flex flex-col justify-center"
                >
                  <div className="flex items-start justify-between mb-4">
                    {/* Big Stylized Number */}
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight font-mono">
                        {item.number}
                      </span>
                      <div className="h-4 w-px bg-slate-200" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Feature
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div
                      className={`w-11 h-11 rounded-2xl ${item.bgLight} ${item.textAccent} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#1e1b4b] group-hover:text-blue-600 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-[#1e1b4b] text-sm sm:text-[15px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
