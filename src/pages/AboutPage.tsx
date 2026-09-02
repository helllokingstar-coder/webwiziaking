import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  Award, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Code2,
  HeartHandshake
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteConfig';
import aboutWomanDeskImg from '../assets/images/about_woman_desk_1787866890918.jpg';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <>
      <SeoHead
        title="Digital Marketing Agency in Lahore | About Webwizia"
        description="Webwizia is a full-service digital marketing agency in Lahore, Pakistan. We deliver custom web design, web development, and SEO services to help businesses grow."
        keywords={[
          'Digital Marketing Agency in Lahore',
          'Web Design Agency Lahore',
          'Web Development Company Lahore',
          'SEO Company Lahore',
          'Digital Marketing Company Lahore',
          'Webwizia Lahore',
          'Professional Digital Agency Lahore'
        ]}
        canonicalPath="/about"
      />

      {/* Page Header Banner (Royal Blue Grid Matching Template) */}
      <section className="bg-gradient-to-r from-[#0b51da] via-[#155DFC] to-[#0d47a1] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumb
            items={[{ label: 'About Us' }]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            About Webwizia
          </h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
            A dedicated digital marketing agency in Lahore helping businesses build modern websites, expand their online presence, and achieve measurable organic search growth.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Stats */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
                <img
                  src={aboutWomanDeskImg}
                  alt="Webwizia digital marketing and web design agency team in Lahore"
                  className="w-full h-80 sm:h-[460px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="text-3xl font-black mb-1">100+</div>
                <div className="text-xs font-semibold text-blue-100">
                  Web Design, Development & SEO Deployments
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight leading-tight">
                Digital Marketing & Web Design Agency in Lahore
              </h2>

              <p className="text-[#1e1b4b] text-base leading-relaxed font-normal">
                Webwizia is a professional digital agency and web development company based on Hall Road in Lahore, Pakistan. We specialise in crafting responsive business websites, e-commerce stores, custom WordPress solutions, and organic search engine optimisation campaigns tailored to the needs of growing companies.
              </p>

              <p className="text-[#1e1b4b] text-base leading-relaxed font-normal">
                As a client-focused digital marketing company in Lahore, our mission is to deliver dependable digital assets that serve as functional business tools. From responsive interface design to technical SEO audits, we combine clean design with practical marketing strategies to help businesses establish a credible and sustainable online presence.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-blue-600">80+</div>
                  <div className="text-xs font-bold text-[#1e1b4b] mt-1">Clients Served</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-blue-600">95%</div>
                  <div className="text-xs font-bold text-[#1e1b4b] mt-1">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-left group hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#1e1b4b]">
                Our Mission
              </h3>
              <p className="text-[#1e1b4b] text-base leading-relaxed font-normal">
                To deliver practical, transparent, and high-quality web design and digital marketing services that help businesses increase their search visibility, attract targeted customer inquiries, and build lasting digital authority.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-[#1e1b4b]">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Build user-centred, mobile-friendly websites with clear structure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Develop secure, fast-loading, and maintainable web applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Implement ethical, white-hat SEO strategies that support organic visibility</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-left group hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#1e1b4b]">
                Our Vision
              </h3>
              <p className="text-[#1e1b4b] text-base leading-relaxed font-normal">
                To be recognized as a dependable web development company and SEO agency in Lahore, trusted by organizations for technical precision, honest advice, and consistent long-term results.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-[#1e1b4b]">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Maintain high benchmarks for web standards and search compliance in Pakistan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Build collaborative, transparent partnerships with every business client</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Continuously adapt our strategies to evolving search algorithms and modern web tech</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <span>Our Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight">
              Our Approach to Web & Digital Services
            </h2>
            <p className="text-[#1e1b4b] text-base font-normal">
              Every design project, development sprint, and search campaign at Webwizia is guided by four fundamental principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                icon: ShieldCheck,
                title: 'Integrity & Transparency',
                desc: 'Clear project scopes, realistic deliverables, and straightforward communication with full ownership of your assets.'
              },
              {
                icon: TrendingUp,
                title: 'Data-Informed Decisions',
                desc: 'We structure site navigation, page speed, and content strategies around user intent and search engine best practices.'
              },
              {
                icon: Code2,
                title: 'Clean Code Standards',
                desc: 'We focus on semantic HTML, accessible UI components, and lightweight code to ensure speed and longevity.'
              },
              {
                icon: HeartHandshake,
                title: 'Dedicated Client Support',
                desc: 'We provide ongoing technical assistance, security reviews, and website guidance following deployment.'
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white text-blue-600 shadow-sm flex items-center justify-center">
                  <val.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1e1b4b]">{val.title}</h4>
                <p className="text-[#1e1b4b] text-sm leading-relaxed font-normal">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Page CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Discuss Your Web Project With Webwizia
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Contact our Lahore web design and digital marketing team to discuss your website or SEO goals today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider"
            >
              CONTACT US
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="px-8 py-3.5 bg-blue-800 hover:bg-blue-900 border border-blue-400 text-white font-bold rounded-xl transition-all text-sm uppercase tracking-wider"
            >
              OUR SERVICES
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
