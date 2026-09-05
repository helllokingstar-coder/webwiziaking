import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Check,
  Sparkles, 
  Star, 
  TrendingUp, 
  Layout, 
  Code, 
  ShoppingBag, 
  ShieldCheck, 
  Layers, 
  Search, 
  Target, 
  Smartphone, 
  Headphones, 
  Zap, 
  ExternalLink,
  ChevronRight,
  BarChart3,
  Globe2,
  Users,
  Award,
  Play
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { testimonialsData } from '../data/testimonialsData';
import { blogPosts } from '../data/blogData';
import { SeoHead } from '../components/SeoHead';
import { SeoReadySection } from '../components/SeoReadySection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { PortfolioItem } from '../types';
import heroWomanLaptopOfficeCutout from '../assets/images/hero_woman_laptop_office_cutout.png';
import aboutWomanDeskImg from '../assets/images/agency_about_workspace_1787944762954.jpg';
import aboutDirectorImg from '../assets/images/about_director_avatar_1787866909107.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] = useState<string>('All');
  const [activePortfolioModal, setActivePortfolioModal] = useState<PortfolioItem | null>(null);

  const filteredPortfolio = selectedPortfolioCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedPortfolioCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case '01':
        return <Layout className="w-8 h-8 transition-colors" />;
      case '02':
        return <ShoppingBag className="w-8 h-8 transition-colors" />;
      case '03':
        return <Globe2 className="w-8 h-8 transition-colors" />;
      case '04':
        return <Search className="w-8 h-8 transition-colors" />;
      default:
        return <Sparkles className="w-8 h-8 transition-colors" />;
    }
  };

  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-blue-600" />;
      default:
        return <Zap className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <>
      <SeoHead
        title="Web Design & SEO Agency in Lahore | Webwizia"
        description="Webwizia is a leading web design company and digital marketing agency in Lahore. We deliver custom website development, WordPress design, e-commerce stores, and SEO services."
        keywords={[
          'Web Design Agency in Lahore',
          'Web Design Company in Lahore',
          'Website Design Lahore',
          'Digital Marketing Agency in Lahore',
          'SEO Services in Lahore',
          'SEO Agency in Lahore',
          'Professional Web Design Lahore',
          'Website Development Lahore',
          'WordPress Website Design Lahore',
          'E-Commerce Website Development Lahore',
          'Local SEO Services Lahore',
          'Responsive Website Design',
          'Professional Website Development',
          'Web Development Company Lahore',
          'Online Marketing Services Lahore',
          'Business Website Design',
          'Custom Website Design Lahore',
          'Affordable Web Design Lahore',
          'Webwizia',
          'Webwizia Lahore',
          'Webwizia Web Design',
          'Webwizia SEO Services'
        ]}
        canonicalPath="/"
      />

      {/* ========================================================
          HERO SECTION (MATCHING REFERENCE TEMPLATE DESIGN)
          ======================================================== */}
      <section className="relative pt-10 sm:pt-14 lg:pt-16 pb-0 overflow-hidden bg-gradient-to-b from-[#f8f9fe] via-[#f1f3fd] to-[#f9f7ff]">
        {/* Floating Geometric Decorative Elements (Matching Template) */}
        <div className="absolute top-10 left-8 sm:left-16 w-8 h-8 sm:w-10 sm:h-10 border-2 sm:border-[2.5px] border-blue-400/40 rounded-[3px] rotate-12 pointer-events-none" />
        <div className="absolute top-44 left-6 sm:left-24 w-4 h-4 rounded-full bg-orange-300/60 pointer-events-none" />
        <div className="absolute top-80 left-8 sm:left-14 w-3.5 h-3.5 bg-cyan-300/60 rotate-45 pointer-events-none" />
        
        {/* Dot matrix accents */}
        <div className="absolute top-12 right-1/4 w-32 h-32 opacity-25 pointer-events-none bg-[radial-gradient(#4338ca_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
        <div className="absolute top-72 right-12 sm:right-24 w-32 h-32 opacity-25 pointer-events-none bg-[radial-gradient(#4338ca_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

        {/* Far-right pastel ring & sparkle */}
        <div className="absolute top-44 right-6 sm:right-10 w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 border-purple-300/50 pointer-events-none" />
        <div className="absolute bottom-56 right-36 w-3 h-3 bg-amber-300/70 rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Consultant with Laptop & Lavender Circular Backdrop */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-end order-2 lg:order-1 pt-4 lg:pt-0">
              <div className="relative w-full max-w-sm sm:max-w-md flex justify-center items-end">
                {/* Lavender circular backdrop (from template) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#ded6f8] -z-10 shadow-sm" />

                {/* Professional Consultant with Laptop (Cutout from uploaded photo) */}
                <img
                  src={heroWomanLaptopOfficeCutout}
                  alt="Professional Web Design Specialist"
                  className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] max-h-[440px] sm:max-h-[500px] lg:max-h-[540px] object-contain drop-shadow-2xl translate-y-3 sm:translate-y-4 lg:translate-y-5 select-none"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.15rem] font-black tracking-tight text-[#1c1248] leading-[1.14]">
                Professional <br className="hidden sm:inline" />
                <span className="text-[#ff5268]">Web Design</span> Company <br className="hidden sm:inline" />
                in Pakistan
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Webwizia is a leading web design company in Pakistan providing professional website development, custom WordPress website design, e-commerce solutions, and results-driven SEO services to help businesses attract qualified inquiries and scale digital revenue.
              </p>

              {/* Action Buttons (Matching Template) */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7">
                <button
                  id="hero-get-started-btn"
                  onClick={() => onNavigate('/contact')}
                  className="px-8 sm:px-9 py-3.5 sm:py-4 bg-[#6534ff] hover:bg-[#5221eb] active:scale-95 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-xl shadow-purple-600/30 hover:shadow-purple-600/40 transition-all duration-200"
                >
                  GET STARTED
                </button>

                <button
                  id="hero-how-we-work-btn"
                  onClick={() => onNavigate('/services')}
                  className="inline-flex items-center space-x-3 group cursor-pointer text-left transition-all duration-200"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#6534ff] group-hover:bg-[#6534ff] group-hover:text-white flex items-center justify-center text-[#6534ff] transition-all duration-200 shadow-sm">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-[#1c1248] group-hover:text-[#6534ff] tracking-wider uppercase transition-colors">
                    HOW WE WORK !
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM DARK CURVED WAVE WITH 3 STATS (FROM TEMPLATE)
            ======================================================== */}
        <div className="relative w-full mt-6 lg:mt-8 z-20">
          {/* Organic Curved Wave Divider */}
          <svg
            className="w-full h-12 sm:h-16 lg:h-20 text-[#1d1246] block preserve-3d"
            viewBox="0 0 1440 90"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C320,95 640,15 1060,45 C1240,58 1360,54 1440,50 L1440,90 L0,90 Z"
              fill="currentColor"
            />
          </svg>

          {/* Deep Navy/Purple Stats Bar */}
          <div className="bg-[#1d1246] pt-1 pb-10 sm:pb-12 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Spacer for woman image alignment on large screens */}
                <div className="hidden lg:block lg:col-span-5" />

                {/* 3 Metrics on Dark Surface (Matching Template) */}
                <div className="lg:col-span-7 flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-14">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#ff5268] tracking-tight">
                      49k+
                    </div>
                    <div className="text-white/80 text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-1">
                      PROJECT DONE
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#ff5268] tracking-tight">
                      38k+
                    </div>
                    <div className="text-white/80 text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-1">
                      HAPPY CLIENTS
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#ff5268] tracking-tight">
                      4.7
                    </div>
                    <div className="text-white/80 text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-1">
                      CLIENT RATING
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ABOUT US SECTION (MATCHING REFERENCE DESIGN)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1b4b] leading-[1.15] tracking-tight">
                Web Design & SEO <br />
                Agency in <span className="text-[#f43f5e]">Lahore</span>
              </h2>

              <div className="space-y-4 text-[#1e1b4b] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                <p>
                  Webwizia is a full-service web design agency in Lahore and digital marketing company specializing in website development Lahore, custom WordPress website design in Lahore, and local SEO services Lahore. We work closely with commercial enterprises, healthcare providers, retail stores, and emerging brands across Pakistan.
                </p>
                <p>
                  Our experienced team creates business website design tailored for high performance and conversions. From affordable web design Lahore solutions to sophisticated custom website design Lahore projects, we combine responsive website design with on-page SEO services in Lahore to turn search visitors into customers.
                </p>
              </div>

              {/* 4 Feature Items with Colored Check Icon Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-2 max-w-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#1e1b4b] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#1e1b4b]">Custom Website Design Lahore</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#6366f1] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#1e1b4b]">Professional Website Development</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#f43f5e] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#1e1b4b]">Responsive Website Design</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#1e293b] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#1e1b4b]">Local SEO Services Lahore</span>
                </div>
              </div>

              {/* Bottom Row: Read More Button + Director Profile */}
              <div className="pt-6 flex flex-wrap items-center gap-8">
                <button
                  id="about-read-more-btn"
                  onClick={() => onNavigate('/about')}
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-400 active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-lg shadow-blue-600/25 transition-all"
                >
                  READ MORE
                </button>

                <div className="flex items-center space-x-3.5">
                  <img
                    src={aboutDirectorImg}
                    alt="Meggie Wilson"
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                  />
                  <div>
                    <h4 className="text-base font-black text-[#1e1b4b] leading-tight">Meggie Wilson</h4>
                    <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">CEO & CREATIVE DIRECTOR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Column with Curved Frame & Floating Stats Badges */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg">
                {/* Main Curved Image Container */}
                <div className="relative z-10 rounded-2xl lg:rounded-l-3xl lg:rounded-tr-[110px] lg:rounded-br-[110px] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white bg-slate-100">
                  <img
                    src={aboutWomanDeskImg}
                    alt="Webwizia web development and strategy team at work in Lahore"
                    className="w-full h-80 sm:h-[420px] object-cover"
                  />
                </div>

                {/* Floating Badge 1: 120% Engagement */}
                <div className="absolute -top-5 sm:-top-7 -left-3 sm:-left-8 z-20 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl shadow-slate-300/60 border border-slate-100 flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#f43f5e] text-white flex items-center justify-center shadow-md shadow-rose-500/30">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-[#1e1b4b] leading-none">120%</div>
                    <div className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mt-1">ENGAGEMENT</div>
                  </div>
                </div>

                {/* Floating Badge 2: Increase Sales Chart */}
                <div className="absolute -bottom-5 sm:-bottom-7 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-300/60 border border-slate-100 w-44 sm:w-52">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1e1b4b]">Increase Sales</span>
                    <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+65,4%</span>
                  </div>
                  {/* Smooth Green SVG Line Chart */}
                  <svg viewBox="0 0 100 35" className="w-full h-10 overflow-visible">
                    <defs>
                      <linearGradient id="salesGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,28 Q15,10 30,22 T60,12 T85,20 T100,5 L100,35 L0,35 Z"
                      fill="url(#salesGrad)"
                    />
                    <path
                      d="M0,28 Q15,10 30,22 T60,12 T85,20 T100,5"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="5" r="3" fill="#10b981" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-[#f5f8fc] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Our Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight">
              Services We Provide
            </h2>
            <p className="text-[#1e1b4b] text-base sm:text-lg">
              Professional web design Lahore, custom WordPress websites, e-commerce development, and search engine marketing for Pakistani businesses.
            </p>
          </div>

          {/* Exactly 4 Services in a 2-Column × 2-Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {servicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.slug}`}
                onClick={() => onNavigate(`/services/${service.slug}`)}
                className="group relative bg-white hover:bg-[#0a4dad] rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-md shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/30 border border-slate-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top-left Rounded Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#e8f1fd] text-[#0d6efd] group-hover:bg-white group-hover:text-[#0a4dad] flex items-center justify-center transition-all duration-300 shadow-sm mb-6">
                    {getServiceIcon(service.number)}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1e1b4b] group-hover:text-white transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#1e1b4b] group-hover:text-blue-50 text-sm sm:text-base leading-relaxed mb-8 transition-colors duration-300 font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(`/services/${service.slug}`);
                    }}
                    className="px-7 py-3 bg-[#0a3871] group-hover:bg-white text-white group-hover:text-[#0a3871] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <button
              id="view-all-services-btn"
              onClick={() => onNavigate('/services')}
              className="px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SEO-READY WEBSITES SECTION (Immediately after Services)
          ======================================================== */}
      <SeoReadySection onNavigate={onNavigate} />

      {/* ========================================================
          PORTFOLIO SECTION
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight">
              Selected Recent Projects
            </h2>
            <p className="text-[#1e1b4b] text-base sm:text-lg font-normal">
              A showcase of custom website design Lahore, online stores, and SEO projects built for growing businesses by Webwizia Lahore.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {['All', 'Web Design', 'E-Commerce', 'SEO'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedPortfolioCategory(cat)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  selectedPortfolioCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-[#1e1b4b] hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-black text-blue-600 shadow-sm">
                    {item.impactMetric} {item.impactLabel}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-[#1e1b4b] group-hover:text-blue-600 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#1e1b4b] text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      Client: {item.client}
                    </span>
                    <button
                      onClick={() => setActivePortfolioModal(item)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE US / OUR EDGE (After Services & Before Blog)
          ======================================================== */}
      <WhyChooseUsSection onNavigate={onNavigate} />

      {/* ========================================================
          TESTIMONIAL SECTION
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-[#1e1b4b] text-base sm:text-lg font-normal">
              Direct feedback from business founders who partner with Webwizia for professional web design Lahore, SEO services in Lahore, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#1e1b4b] text-sm leading-relaxed italic font-normal">
                    "{item.content}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#1e1b4b]">
                      {item.name}
                    </h4>
                    <span className="block text-xs text-[#1e1b4b]/80">
                      {item.role}, {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          BLOG SECTION ON HOME PAGE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <span>Articles & Advice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight">
              Latest Insights & Industry Guides
            </h2>
            <p className="text-[#1e1b4b] text-base sm:text-lg font-normal">
              Practical guides on website design, SEO rankings, and online marketing strategies for Pakistani businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.featuredImage}
                      alt={post.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center space-x-3 text-xs text-[#1e1b4b]/70 mb-3">
                      <span>{post.publishedDate}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1e1b4b] group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>

                    <p className="text-[#1e1b4b] text-sm line-clamp-2 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <button
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                    className="w-full py-2.5 px-4 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>READ MORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <button
              id="view-all-blog-posts-btn"
              onClick={() => onNavigate('/blog')}
              className="px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-lg transition-all inline-flex items-center space-x-2"
            >
              <span>VIEW ALL BLOG POSTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* Portfolio Item Detail Modal */}
      {activePortfolioModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-100">
            <div className="relative aspect-video">
              <img
                src={activePortfolioModal.image}
                alt={activePortfolioModal.altText}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActivePortfolioModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {activePortfolioModal.category}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Location: {activePortfolioModal.location}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1e1b4b]">
                {activePortfolioModal.title}
              </h3>
              <p className="text-[#1e1b4b] text-sm leading-relaxed font-normal">
                {activePortfolioModal.fullDescription}
              </p>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">
                  Key Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activePortfolioModal.deliverables.map((del, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-[#1e1b4b] text-xs font-semibold rounded-lg">
                      {del}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs">
                  <span className="font-bold text-[#1e1b4b]">{activePortfolioModal.impactMetric}</span> <span className="text-[#1e1b4b]/80">{activePortfolioModal.impactLabel}</span>
                </div>
                <button
                  onClick={() => {
                    setActivePortfolioModal(null);
                    onNavigate('/contact');
                  }}
                  className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
