import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Palette, 
  Layout, 
  Target, 
  Building, 
  Layers, 
  Search, 
  FileText, 
  Cpu, 
  Key, 
  MapPin, 
  Link as LinkIcon, 
  Code, 
  Server, 
  Gauge, 
  LifeBuoy, 
  ShoppingBag, 
  Grid, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  Smartphone,
  HelpCircle
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';
import { ServiceDetail } from '../types';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
  onOpenQuote
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getOfferingIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-blue-600" />;
      case 'Building':
        return <Building className="w-6 h-6 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-blue-600" />;
      case 'Search':
        return <Search className="w-6 h-6 text-blue-600" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'Key':
        return <Key className="w-6 h-6 text-blue-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-blue-600" />;
      case 'Link':
        return <LinkIcon className="w-6 h-6 text-blue-600" />;
      case 'Code':
        return <Code className="w-6 h-6 text-blue-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-blue-600" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-6 h-6 text-blue-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-blue-600" />;
      case 'Grid':
        return <Grid className="w-6 h-6 text-blue-600" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-blue-600" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-blue-600" />;
      case 'Package':
        return <Package className="w-6 h-6 text-blue-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <>
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonicalPath={`/services/${service.slug}`}
        schemaType="Service"
        schemaData={{
          name: service.title,
          offers: service.keyOfferings.map(o => ({
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': o.title,
              'description': o.description
            }
          }))
        }}
        ogImage={service.heroImage}
      />

      {/* Top Banner (Midnight Navy & Cyan Grid Matching Template) */}
      <section className="bg-gradient-to-r from-[#031b4e] via-[#046BD2] to-[#15ace6] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumb
            items={[
              { label: 'Our Services', href: '/services' },
              { label: service.title }
            ]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 text-sky-100 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <span>Service {service.number}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {service.fullTitle}
          </h1>
          <p className="text-sky-100 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Overview & Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#046BD2] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#15ace6]" />
                <span>Service Overview</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#031b4e] tracking-tight leading-tight">
                {service.fullTitle}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {service.overview}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#046BD2] to-[#15ace6] hover:from-[#0353a4] hover:to-[#0d99d1] active:scale-95 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 transition-all inline-flex items-center space-x-2"
                >
                  <span>CONTACT US FOR {service.title.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 relative aspect-[4/3]">
                <img
                  src={service.heroImage}
                  alt={`${service.title} services by Webwizia in Lahore`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings Grid */}
      <section className="py-20 bg-[#f2f9fd]/50 border-y border-sky-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#046BD2] text-xs font-bold uppercase tracking-wider">
              <span>What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#031b4e] tracking-tight">
              Comprehensive Capabilities
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Everything required to deliver an exceptional digital result from strategy to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {service.keyOfferings.map((offering, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md hover:border-[#046BD2] transition-all space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-50 group-hover:bg-[#046BD2] group-hover:text-white text-[#046BD2] flex items-center justify-center transition-colors shadow-xs">
                  {getOfferingIcon(offering.icon)}
                </div>
                <h3 className="text-xl font-bold text-[#031b4e] group-hover:text-[#046BD2] transition-colors">
                  {offering.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Deep-Dive Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {service.detailedSections.map((sec, idx) => (
            <div key={idx} className="bg-[#f2f9fd] rounded-3xl p-8 sm:p-12 border border-sky-100 text-left space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-[#031b4e] tracking-tight">
                {sec.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {sec.content}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {sec.points.map((pt, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#046BD2] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#031b4e]">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f2f9fd]/50 border-t border-sky-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#046BD2] text-xs font-bold uppercase tracking-wider">
              <span>Why It Matters</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#031b4e] tracking-tight">
              Tangible Benefits For Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-sky-100 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#046BD2] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-[#031b4e]">{benefit.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#046BD2] text-xs font-bold uppercase tracking-wider">
              <span>Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#031b4e] tracking-tight">
              Our {service.title} Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
            {service.process.map((step) => (
              <div key={step.step} className="bg-[#f2f9fd] p-6 rounded-3xl border border-sky-100 space-y-3 relative">
                <span className="text-3xl font-black text-[#046BD2]">{step.step}</span>
                <h4 className="text-base font-bold text-[#031b4e]">{step.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Badges */}
      <section className="py-12 bg-[#f2f9fd]/50 border-y border-sky-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Core Technologies & Standards
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white text-[#031b4e] font-semibold text-xs rounded-xl border border-sky-100 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#046BD2] border border-sky-200/80 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#031b4e] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-sky-100 rounded-2xl overflow-hidden transition-all bg-[#f2f9fd]/30"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-[#031b4e] hover:text-[#046BD2] transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaqIndex === idx ? 'rotate-180 text-[#046BD2]' : ''
                    }`}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-sky-100 bg-white font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Page CTA */}
      <section className="py-16 bg-[#031b4e] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Start Your {service.title} Project?
          </h2>
          <p className="text-sky-100 text-base max-w-xl mx-auto">
            Get a tailored proposal and timeline from our Lahore team.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-gradient-to-r from-[#046BD2] to-[#15ace6] hover:from-[#0353a4] hover:to-[#0d99d1] font-bold rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider text-white"
            >
              CONTACT US
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all text-sm uppercase tracking-wider"
            >
              EXPLORE ALL SERVICES
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
