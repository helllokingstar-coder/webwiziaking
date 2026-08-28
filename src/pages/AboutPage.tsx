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
        title="About Us | Webwizia Digital Marketing & Web Agency Lahore"
        description="Learn about Webwizia, a leading digital marketing, web design, and SEO agency in Lahore, Pakistan. Discover our mission, vision, team, and client-first values."
        keywords={[
          'About Webwizia',
          'Digital Marketing Agency Lahore',
          'Web Design Company in Lahore',
          'SEO Experts Lahore',
          'IT Company Hall Road Lahore'
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
            About Us
          </h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
            Empowering businesses in Lahore and across the globe with transformative web designs, robust technical development, and high-impact SEO growth.
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
                  alt="Webwizia digital strategy and web design specialists at work"
                  className="w-full h-80 sm:h-[460px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="text-3xl font-black mb-1">100+</div>
                <div className="text-xs font-semibold text-blue-100">
                  Successful Web & Digital Marketing Deployments
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Your Strategic Digital Growth Partner in Lahore
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Webwizia was founded with a singular purpose: to bridge the gap between creative visual artistry and measurable digital business outcomes. Based in Hall Road, Lahore, we have evolved into a full-scale digital agency serving retail brands, healthcare specialists, logistics firms, real estate giants, and fast-growing tech startups.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We believe that a website should never be an idle digital brochure. It must be an active 24/7 revenue engine that drives customer inquiries, dominates local search rankings, and reinforces customer trust.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-blue-600">80+</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Happy Clients</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-blue-600">95%</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Satisfaction Rate</div>
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
              <h3 className="text-2xl font-black text-slate-900">
                Our Mission
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To empower businesses with innovative, reliable, and result-focused digital solutions that maximize visibility, streamline customer acquisition, and yield measurable revenue growth.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Deliver human-centered UI/UX with modern conversion science</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Engineer lightning-fast, secure, and maintainable web applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Execute ethical, white-hat SEO that builds lasting organic authority</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-left group hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Our Vision
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To become the most trusted digital technology partner for businesses in Pakistan and internationally, recognized for uncompromising engineering quality, transparent reporting, and transformative client growth.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-slate-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Set new benchmarks for digital marketing excellence in Lahore</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Foster long-term, compounding partnerships with every client</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Stay at the vanguard of web architecture and search engine algorithms</span>
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
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The Principles Behind Webwizia
            </h2>
            <p className="text-slate-600 text-base">
              Every design decision and line of code we write is guided by four foundational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                icon: ShieldCheck,
                title: 'Integrity & Transparency',
                desc: 'No hidden fees, no smoke-and-mirrors metrics. You receive clear timelines, direct communication, and 100% code ownership.'
              },
              {
                icon: TrendingUp,
                title: 'Data-Driven Execution',
                desc: 'We make decisions backed by user heatmaps, Google analytics data, competitor research, and proven conversion science.'
              },
              {
                icon: Code2,
                title: 'Modern Craftsmanship',
                desc: 'We refuse to use bloated templates. We write clean, semantic, accessible code that runs smoothly for years.'
              },
              {
                icon: HeartHandshake,
                title: 'Continuous Partnership',
                desc: 'Our relationship does not end at deployment. We provide ongoing support, security audits, and continuous optimization.'
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white text-blue-600 shadow-sm flex items-center justify-center">
                  <val.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{val.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Page CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Let’s Build Something Remarkable Together
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Discuss your upcoming project with our Lahore web design and marketing experts today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider"
            >
              GET A QUOTE
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-blue-800 hover:bg-blue-900 border border-blue-400 text-white font-bold rounded-xl transition-all text-sm uppercase tracking-wider"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
