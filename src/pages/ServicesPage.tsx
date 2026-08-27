import React from 'react';
import { 
  ArrowRight, 
  Layout, 
  TrendingUp, 
  Code, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';
import { servicesData } from '../data/servicesData';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const getServiceIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Layout className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />;
      case '02':
        return <TrendingUp className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />;
      case '03':
        return <Code className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />;
      case '04':
        return <ShoppingBag className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />;
      default:
        return <Sparkles className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <>
      <SeoHead
        title="Our Services | Web Design, SEO & Web Development in Lahore | Webwizia"
        description="Explore Webwizia's core digital solutions: Web Designing, Search Engine Optimization (SEO), Custom Website Development, and E-Commerce store engineering in Lahore."
        keywords={[
          'Web Design Lahore',
          'SEO Services Lahore',
          'Website Development Lahore',
          'E-Commerce Development Pakistan',
          'Digital Marketing Solutions'
        ]}
        canonicalPath="/services"
      />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-800 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center sm:text-left">
          <Breadcrumb
            items={[{ label: 'Our Services' }]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Services
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            High-impact digital marketing, web engineering, and search optimization solutions engineered to grow your revenue and market reach.
          </p>
        </div>
      </section>

      {/* Core Services 2x2 Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Designed For End-to-End Digital Transformation
            </h2>
            <p className="text-slate-600 text-base">
              Each of our service offerings is built on proven development frameworks, modern UI principles, and aggressive organic search strategies.
            </p>
          </div>

          {/* 2x2 Desktop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate(`/services/${service.slug}`)}
                className="group relative bg-white hover:bg-[#0a4dad] rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-md shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/30 border border-slate-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Circular Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#e8f1fd] text-[#0d6efd] group-hover:bg-white group-hover:text-[#0a4dad] flex items-center justify-center transition-all duration-300 shadow-sm mb-6">
                    {getServiceIcon(service.number)}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 group-hover:text-blue-50 text-sm sm:text-base leading-relaxed mb-6 transition-colors duration-300">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {service.keyOfferings.slice(0, 3).map((offering, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-slate-700 group-hover:text-blue-100 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white shrink-0" />
                        <span>{offering.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(`/services/${service.slug}`);
                    }}
                    className="px-7 py-3 bg-[#0a3871] group-hover:bg-white text-white group-hover:text-[#0a3871] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>READ MORE</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuote(service.title);
                    }}
                    className="px-4 py-2 bg-blue-50 group-hover:bg-white/20 text-blue-600 group-hover:text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Get Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology & Process */}
      <section className="py-20 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              How We Deliver High-Impact Results
            </h2>
            <p className="text-slate-600 text-base">
              A structured 4-phase agile methodology ensuring on-time delivery and zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                step: '01',
                title: 'Discovery & Research',
                desc: 'We analyze your target market in Lahore, competitor strengths, and primary conversion funnels.'
              },
              {
                step: '02',
                title: 'Architecture & Design',
                desc: 'We create intuitive wireframes, responsive UI components, and search engine content outlines.'
              },
              {
                step: '03',
                title: 'Engineering & Testing',
                desc: 'Clean code development, Core Web Vitals optimization, and multi-device QA verification.'
              },
              {
                step: '04',
                title: 'Launch & Growth',
                desc: 'Smooth go-live deployment, search indexing pings, analytics tracking, and continuous scaling.'
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-3">
                <span className="text-2xl font-black text-blue-600">{p.step}</span>
                <h4 className="text-lg font-bold text-slate-900">{p.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA Section Required */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Need A Custom Digital Solution?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a unique web application, multi-vendor marketplace, or enterprise SEO project? Let’s structure a tailor-made roadmap for your business.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuote()}
              className="px-9 py-4 bg-white text-blue-700 hover:bg-blue-50 active:scale-95 font-extrabold rounded-xl shadow-xl transition-all text-sm uppercase tracking-wider"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
