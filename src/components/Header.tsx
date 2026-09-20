import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Layout, 
  TrendingUp, 
  Code, 
  ShoppingBag,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { siteConfig, mainNavItems } from '../data/siteConfig';
import webwiziaLogo from '../assets/images/Webwizia_logo.png';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenQuote,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for sticky header elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    onNavigate(href);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const getServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#046BD2] group-hover:text-[#15ace6] transition-colors" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#046BD2] group-hover:text-[#15ace6] transition-colors" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#046BD2] group-hover:text-[#15ace6] transition-colors" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#046BD2] group-hover:text-[#15ace6] transition-colors" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#046BD2]" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
            : 'bg-white shadow-sm py-4.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleLinkClick('/')}
            className="flex items-center group text-left focus:outline-none"
          >
            <img 
              src={webwiziaLogo} 
              alt="Webwizia" 
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => {
              if (item.hasDropdown) {
                const isServicesActive = currentPath.startsWith('/services');
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      id="nav-services-dropdown-btn"
                      onClick={() => handleLinkClick('/services')}
                      className={`flex items-center space-x-1.5 text-sm font-semibold tracking-wide transition-colors py-2 ${
                        isServicesActive 
                          ? 'text-[#046BD2] font-bold' 
                          : 'text-[#031b4e] hover:text-[#046BD2]'
                      }`}
                      aria-expanded={isServicesDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180 text-[#046BD2]' : 'text-slate-400'
                        }`} 
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white rounded-2xl shadow-xl shadow-[#031b4e]/10 border border-sky-100 p-2.5 overflow-hidden ring-1 ring-black/5">
                          <div className="px-3.5 py-2 mb-1 border-b border-sky-100/70 bg-[#f2f9fd] rounded-xl">
                            <span className="text-[11px] font-bold text-[#031b4e]/60 uppercase tracking-wider">
                              Our Core Services
                            </span>
                          </div>
                          {item.dropdownItems?.map((subItem) => (
                            <button
                              key={subItem.href}
                              id={`dropdown-${subItem.href.replace('/services/', '')}`}
                              onClick={() => handleLinkClick(subItem.href)}
                              className={`w-full flex items-start space-x-3.5 p-3 rounded-xl transition-all text-left group ${
                                currentPath === subItem.href 
                                  ? 'bg-[#f2f9fd] text-[#046BD2]' 
                                  : 'hover:bg-[#f2f9fd]/70 text-[#031b4e]'
                              }`}
                            >
                              <div className="p-2 rounded-lg bg-sky-50 group-hover:bg-[#15ace6]/15 transition-colors mt-0.5 shrink-0">
                                {getServiceIcon(subItem.iconName)}
                              </div>
                              <div>
                                <span className="block text-sm font-semibold group-hover:text-[#046BD2] transition-colors">
                                  {subItem.title}
                                </span>
                                <span className="block text-xs text-slate-500 font-normal mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </span>
                              </div>
                            </button>
                          ))}
                          <div className="p-2 mt-1 border-t border-sky-100 bg-[#f2f9fd]/70 rounded-xl">
                            <button
                              id="dropdown-view-all-services-btn"
                              onClick={() => handleLinkClick('/services')}
                              className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-[#046BD2] hover:text-[#15ace6] transition-colors"
                            >
                              <span>Explore All Solutions</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentPath === item.href;
              return (
                <button
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleLinkClick(item.href)}
                  className={`text-sm font-semibold tracking-wide transition-colors py-2 relative ${
                    isActive 
                      ? 'text-[#046BD2] font-bold' 
                      : 'text-[#031b4e] hover:text-[#046BD2]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#15ace6] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Header Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Trigger Button */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              aria-label="Search website content"
              className="p-2.5 text-[#031b4e]/70 hover:text-[#046BD2] hover:bg-sky-50 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#046BD2]/20"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* "CONTACT US" Primary CTA Button */}
            <button
              id="header-contact-btn"
              onClick={() => onNavigate('/contact')}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#046BD2] to-[#15ace6] rounded-xl hover:from-[#0353a4] hover:to-[#0d99d1] active:scale-95 transition-all shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 focus:outline-none focus:ring-2 focus:ring-[#046BD2] focus:ring-offset-2"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              aria-label="Search website"
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="mobile-hamburger-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 text-slate-800 hover:text-blue-600 hover:bg-slate-100 rounded-xl focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-50 lg:hidden bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white h-full max-h-[calc(100vh-70px)] overflow-y-auto px-6 py-6 flex flex-col justify-between shadow-2xl border-t border-slate-100">
            <div className="space-y-4">
              {mainNavItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label} className="border-b border-slate-100 pb-3">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="w-full flex items-center justify-between py-2 text-base font-bold text-slate-900"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isMobileServicesOpen && (
                        <div className="mt-2 pl-3 space-y-2 border-l-2 border-[#15ace6]">
                          <button
                            onClick={() => handleLinkClick('/services')}
                            className="w-full text-left py-1.5 text-sm font-semibold text-[#046BD2]"
                          >
                            All Services Overview
                          </button>
                          {item.dropdownItems?.map((subItem) => (
                            <button
                              key={subItem.href}
                              onClick={() => handleLinkClick(subItem.href)}
                              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-[#046BD2]"
                            >
                              {subItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = currentPath === item.href;
                return (
                  <div key={item.label} className="border-b border-slate-100 pb-3">
                    <button
                      onClick={() => handleLinkClick(item.href)}
                      className={`w-full text-left py-2 text-base font-bold ${
                        isActive ? 'text-[#046BD2]' : 'text-[#031b4e]'
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
              <button
                id="mobile-drawer-contact-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('/contact');
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#046BD2] to-[#15ace6] text-white font-bold rounded-xl shadow-lg shadow-sky-500/30 flex items-center justify-center space-x-2"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="bg-[#f2f9fd] p-4 rounded-xl space-y-2 text-xs text-slate-600 border border-sky-100/60">
                <div className="flex items-center space-x-2 text-[#031b4e] font-semibold">
                  <Phone className="w-4 h-4 text-[#046BD2]" />
                  <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneFormatted}</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#046BD2]" />
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
                <div className="flex items-start space-x-2 text-slate-500 pt-1">
                  <MapPin className="w-4 h-4 text-[#15ace6] shrink-0 mt-0.5" />
                  <span>Office # 5, Brother Plaza, Hall Road, Lahore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
