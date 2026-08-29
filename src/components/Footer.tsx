import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ShieldCheck, 
  Clock
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#155DFC] text-white pt-16 pb-8 border-t border-blue-400/30 relative overflow-hidden">
      {/* Subtle ambient gradient overlays */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/20">
          {/* Column 1 — Webwizia Brand */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={(e) => handleLink(e, '/')}>
              <div className="w-10 h-10 rounded-xl bg-white text-[#155DFC] flex items-center justify-center shadow-lg shadow-blue-950/20">
                <span className="font-extrabold text-xl tracking-tighter">W</span>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  Web<span className="text-blue-200">wizia</span>
                </span>
                <span className="block text-[10px] font-bold tracking-widest uppercase text-blue-100 -mt-1">
                  Digital Agency
                </span>
              </div>
            </div>

            <p className="text-sm text-blue-50/90 leading-relaxed font-medium">
              Webwizia is a full-service digital marketing and web design agency in Lahore, Pakistan. We help startups, established brands, and enterprises engineer high-converting websites and dominant organic search strategies.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-blue-100 mb-3">
                Connect With Us
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Webwizia on Facebook"
                  className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 hover:bg-white text-white hover:text-[#155DFC] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Webwizia on Twitter / X"
                  className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 hover:bg-white text-white hover:text-[#155DFC] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Webwizia on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 hover:bg-white text-white hover:text-[#155DFC] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Webwizia on Instagram"
                  className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 hover:bg-white text-white hover:text-[#155DFC] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-white after:mt-1.5">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={(e) => handleLink(e, '/')}
                  className="hover:text-blue-200 text-white font-medium transition-colors flex items-center space-x-2 group text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/about')}
                  className="hover:text-blue-200 text-white font-medium transition-colors flex items-center space-x-2 group text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/services')}
                  className="hover:text-blue-200 text-white font-medium transition-colors flex items-center space-x-2 group text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-1 transition-transform" />
                  <span>Our Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/blog')}
                  className="hover:text-blue-200 text-white font-medium transition-colors flex items-center space-x-2 group text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-1 transition-transform" />
                  <span>Blog & Insights</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/contact')}
                  className="hover:text-blue-200 text-white font-medium transition-colors flex items-center space-x-2 group text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — Core Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-white after:mt-1.5">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={(e) => handleLink(e, '/services/web-designing')}
                  className="hover:text-blue-200 text-white font-medium transition-colors flex items-center space-x-2 group text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-1 transition-transform" />
                  <span>Web Designing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/services/seo-services')}
                  className="hover:text-blue-200 text-white font-medium transition-colors flex items-center space-x-2 group text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-1 transition-transform" />
                  <span>SEO Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLink(e, '/services/e-commerce-website')}
                  className="hover:text-blue-200 text-white font-medium transition-colors flex items-center space-x-2 group text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 group-hover:translate-x-1 transition-transform" />
                  <span>E-Commerce Website</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base mb-5 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-white after:mt-1.5">
              Contact Information
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-3 text-white">
                <MapPin className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.address.full}</span>
              </div>

              <div className="flex items-center space-x-3 text-white">
                <Phone className="w-4 h-4 text-blue-200 shrink-0" />
                <a 
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  {siteConfig.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center space-x-3 text-white">
                <Mail className="w-4 h-4 text-blue-200 shrink-0" />
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-blue-200 transition-colors break-all font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center space-x-3 text-blue-100 text-xs pt-1">
                <Clock className="w-4 h-4 text-blue-200 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM PKT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-100 gap-4">
          <p>© 2026 Webwizia. All Rights Reserved. Crafted for High Performance & Local SEO in Lahore, Pakistan.</p>
          <div className="flex items-center space-x-6">
            <button 
              onClick={(e) => handleLink(e, '/privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={(e) => handleLink(e, '/terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
