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
  Award
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { testimonialsData } from '../data/testimonialsData';
import { blogPosts } from '../data/blogData';
import { SeoHead } from '../components/SeoHead';
import { PortfolioItem } from '../types';
import heroWomanImg from '../assets/images/hero_woman_laptop_1787864217779.jpg';
import aboutWomanDeskImg from '../assets/images/about_woman_desk_1787866890918.jpg';
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
        return <Search className="w-8 h-8 transition-colors" />;
      case '03':
        return <Code className="w-8 h-8 transition-colors" />;
      case '04':
        return <ShoppingBag className="w-8 h-8 transition-colors" />;
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
        title="Webwizia | Digital Marketing & Web Design Agency in Lahore"
        description="Build. Grow. Succeed. Webwizia is a premier digital marketing agency in Lahore specializing in Web Designing, SEO Services, Custom Website Development, and E-Commerce."
        keywords={[
          'Web Design Company in Lahore',
          'Website Development Company in Lahore',
          'SEO Services in Lahore',
          'E-Commerce Website Development in Lahore',
          'Digital Marketing Agency in Lahore',
          'Web Design Services in Pakistan',
          'SEO Company in Lahore'
        ]}
        canonicalPath="/"
      />

      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="hero-gradient text-white pt-16 pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden">
        {/* Decorative Grid & Glow Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span>Premier Digital Marketing & Web Agency in Lahore</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Build. Grow. Succeed. <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
                  With Webwizia
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                We create high-performing websites, powerful SEO strategies and digital solutions that help businesses grow online. Engineered for speed, high conversions, and measurable ROI.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-get-started-btn"
                  onClick={() => onOpenQuote()}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 flex items-center justify-center space-x-2.5 text-base group"
                >
                  <span>GET STARTED</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-view-services-btn"
                  onClick={() => onNavigate('/services')}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 text-base backdrop-blur-sm"
                >
                  <span>VIEW OUR SERVICES</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Custom Code & Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Lahore Local SEO Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Proven Track Record</span>
                </div>
              </div>
            </div>

            {/* Right Side: Professional Consultant with Laptop */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-lg group flex justify-center">
                {/* Ambient Soft Glow Behind Image */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl filter blur-3xl transform -translate-y-2 scale-95 pointer-events-none" />

                {/* Woman with Laptop with High-Quality Rounded Border Frame */}
                <div className="relative z-10 p-1.5 sm:p-2 rounded-3xl border-2 border-blue-400/40 bg-gradient-to-b from-blue-500/20 to-slate-800/40 backdrop-blur-sm shadow-2xl shadow-blue-950/60 transition-transform duration-500 hover:scale-102">
                  <img
                    src={heroWomanImg}
                    alt="Webwizia digital marketing and web development specialist working on laptop"
                    className="w-full h-auto max-h-[460px] sm:max-h-[500px] object-cover rounded-2xl border border-white/10"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                Web Designing <br />
                Company in <span className="text-[#e63946]">Pakistan</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Webzify is providing custom, professional and affordable website designing &amp; development services for your business in Pakistan. We specialize in helping small businesses to establish their digital brand and dominate the competition with modern and smart web design.
              </p>

              {/* 4 Feature Items with Colored Icon Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-2 max-w-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#1e1b4b] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800">Custom Website Design</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#6366f1] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800">SEO-Friendly Websites</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#f43f5e] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800">Responsive Web Design</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-[#1e293b] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800">Digital Marketing</span>
                </div>
              </div>

              {/* Bottom Row: Read More Button + Director Profile */}
              <div className="pt-6 flex flex-wrap items-center gap-8">
                <button
                  id="about-read-more-btn"
                  onClick={() => onNavigate('/about')}
                  className="px-8 py-3.5 bg-[#5b3df5] hover:bg-[#4b2fe0] active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-lg shadow-indigo-500/25 transition-all"
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
                    <h4 className="text-base font-black text-slate-900 leading-tight">Meggie Wilson</h4>
                    <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">CEO, HEAD DIRECTOR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Column with Curved Frame & Floating Stats Badges */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg">
                {/* Main Curved Image Container */}
                <div className="relative z-10 rounded-2xl lg:rounded-l-3xl lg:rounded-tr-[100px] lg:rounded-br-[100px] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white bg-slate-100">
                  <img
                    src={aboutWomanDeskImg}
                    alt="Professional web designer working on laptop at modern workspace"
                    className="w-full h-80 sm:h-[420px] object-cover"
                  />
                </div>

                {/* Floating Badge 1: 120% Engagement */}
                <div className="absolute -top-5 sm:-top-7 -left-3 sm:-left-8 z-20 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl shadow-slate-300/60 border border-slate-100 flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#ff4d6d] text-white flex items-center justify-center shadow-md shadow-rose-500/30">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900 leading-none">120%</div>
                    <div className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mt-1">ENGAGEMENT</div>
                  </div>
                </div>

                {/* Floating Badge 2: Increase Sales Chart */}
                <div className="absolute -bottom-5 sm:-bottom-7 -left-3 sm:-left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-300/60 border border-slate-100 w-44 sm:w-52">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-700">Increase Sales</span>
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



      {/* ========================================================
          OUR SERVICES SECTION (2x2 GRID - REFERENCE MATCH)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#f5f8fc] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Digital Solutions Designed To Grow Your Business
            </p>
          </div>

          {/* Exactly 2 cards on first row, 2 cards on second row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {servicesData.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.slug}`}
                onClick={() => onNavigate(`/services/${service.slug}`)}
                className="group relative bg-white hover:bg-[#0a4dad] rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-md shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/30 border border-slate-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top-left Rounded Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#e8f1fd] text-[#0d6efd] group-hover:bg-white group-hover:text-[#0a4dad] flex items-center justify-center transition-all duration-300 shadow-sm mb-6">
                    {getServiceIcon(service.number)}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 group-hover:text-blue-50 text-sm sm:text-base leading-relaxed mb-8 transition-colors duration-300">
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
                    <span>READ MORE</span>
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
          PORTFOLIO SECTION
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Recent Work
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Creative Digital Solutions Built For Growing Businesses
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {['All', 'Web Design', 'Website Development', 'E-Commerce', 'SEO'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedPortfolioCategory(cat)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  selectedPortfolioCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
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
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
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
          WHY CHOOSE WEBWIZIA
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <span>Why Webwizia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Businesses Choose Webwizia
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We combine technical craftsmanship with result-driven digital strategies to elevate your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {siteConfig.whyChooseUs.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-blue-50/60 p-8 rounded-3xl border border-slate-200/80 hover:border-blue-300 transition-all duration-300 space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-blue-600 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          TESTIMONIAL SECTION
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Real feedback from business leaders and founders who grew their companies with Webwizia.
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
                  <p className="text-slate-700 text-sm leading-relaxed italic">
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
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <span className="block text-xs text-slate-500">
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
              <span>Articles & Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Latest Blog & Insights
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore our latest guides on web design, SEO rankings, and digital business strategies.
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
                    <div className="flex items-center space-x-3 text-xs text-slate-400 mb-3">
                      <span>{post.publishedDate}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
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
              <h3 className="text-2xl font-bold text-slate-900">
                {activePortfolioModal.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activePortfolioModal.fullDescription}
              </p>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">
                  Key Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activePortfolioModal.deliverables.map((del, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
                      {del}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs">
                  <span className="font-bold text-slate-900">{activePortfolioModal.impactMetric}</span> {activePortfolioModal.impactLabel}
                </div>
                <button
                  onClick={() => {
                    setActivePortfolioModal(null);
                    onOpenQuote(activePortfolioModal.category);
                  }}
                  className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl"
                >
                  Start Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
