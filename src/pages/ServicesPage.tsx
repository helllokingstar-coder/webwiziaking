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
  Cpu,
  Globe2,
  Search
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
        return <ShoppingBag className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />;
      case '03':
        return <Globe2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />;
      case '04':
        return <Search className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />;
      default:
        return <Sparkles className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <>
      <SeoHead
        title="Digital Marketing Services in Lahore | Webwizia"
        description="Explore professional digital marketing services in Lahore by Webwizia. Custom web design, WordPress development, e-commerce stores, and local SEO services."
        keywords={[
          'Digital Marketing Services in Lahore',
          'Web Design Services Lahore',
          'SEO Services Lahore',
          'Website Development Lahore',
          'E-Commerce Development Lahore',
          'WordPress Website Design Lahore',
          'Digital Marketing Services'
        ]}
        canonicalPath="/services"
      />

      {/* Page Header Banner (Royal Blue Grid Matching Template) */}
      <section className="bg-gradient-to-r from-[#0b51da] via-[#155DFC] to-[#0d47a1] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumb
            items={[{ label: 'Our Services' }]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Digital Marketing Services in Lahore
          </h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
            Professional web design services, website development, custom WordPress solutions, e-commerce development, and search engine optimisation tailored for growing businesses.
          </p>
        </div>
      </section>

      {/* Core Services 3-Card Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight">
              Comprehensive Web & Digital Marketing Services
            </h2>
            <p className="text-[#1e1b4b] text-base font-normal">
              From bespoke website design to organic search engine optimisation, each service is engineered to help your business establish authority and reach potential customers.
            </p>
          </div>

          {/* 4-Card 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate(`/services/${service.slug}`)}
                className="group relative bg-white hover:bg-[#0a4dad] rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-md shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/30 border border-slate-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Circular Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#e8f1fd] text-[#0d6efd] group-hover:bg-white group-hover:text-[#0a4dad] flex items-center justify-center transition-all duration-300 shadow-sm mb-6">
                    {getServiceIcon(service.number)}
                  </div>

                  <h3 className="text-2xl font-bold text-[#1e1b4b] group-hover:text-white transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[#1e1b4b] group-hover:text-blue-50 text-sm sm:text-base leading-relaxed mb-6 transition-colors duration-300 font-normal">
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
                    <span>Learn More</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('/contact');
                    }}
                    className="px-4 py-2 bg-blue-50 group-hover:bg-white/20 text-blue-600 group-hover:text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Contact Us →
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
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight">
              Our Web Development & Marketing Process
            </h2>
            <p className="text-[#1e1b4b] text-base font-normal">
              A structured four-phase workflow ensuring clear project milestones, quality design, and dependable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                desc: 'We review your business goals, target audience in Lahore or abroad, and functional requirements.'
              },
              {
                step: '02',
                title: 'Design & Wireframing',
                desc: 'We map out intuitive user journeys, responsive website layouts, and clear content hierarchies.'
              },
              {
                step: '03',
                title: 'Development & Testing',
                desc: 'Clean code implementation, mobile responsiveness testing, and performance optimization across devices.'
              },
              {
                step: '04',
                title: 'Launch & Optimization',
                desc: 'Secure deployment, search console setup, basic on-page verification, and client handover.'
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-3">
                <span className="text-2xl font-black text-blue-600">{p.step}</span>
                <h4 className="text-lg font-bold text-[#1e1b4b]">{p.title}</h4>
                <p className="text-[#1e1b4b] text-sm leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA Section Required */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Discuss Your Website or Digital Marketing Project
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Whether you require a custom business website, a WordPress redesign, an e-commerce store, or ongoing SEO services in Lahore, we are ready to assist.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-9 py-4 bg-white text-blue-700 hover:bg-blue-50 active:scale-95 font-extrabold rounded-xl shadow-xl transition-all text-sm uppercase tracking-wider"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
