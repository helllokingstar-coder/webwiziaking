import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Buttons on Left Side (WhatsApp & Phone) */}
      <aside 
        aria-label="Quick contact buttons" 
        className="fixed bottom-6 left-4 z-40 flex flex-col space-y-3"
      >
        {/* WhatsApp Button */}
        <div className="relative group">
          <a
            id="floating-whatsapp-btn"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowWhatsAppTooltip(true)}
            onMouseLeave={() => setShowWhatsAppTooltip(false)}
            aria-label="Chat on WhatsApp with Webwizia"
            className="w-12 h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl shadow-xl shadow-emerald-900/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            {/* Custom WhatsApp Vector Icon */}
            <svg 
              className="w-6 h-6 fill-current" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.585 1.761.889 2.796.889 3.182 0 5.768-2.587 5.768-5.766.001-3.18-2.585-5.765-5.768-5.765zm0 10.364c-.878 0-1.634-.268-2.348-.733l-.168-.11-1.577.414.421-1.537-.11-.175c-.495-.788-.756-1.564-.756-2.457 0-2.518 2.049-4.567 4.567-4.567 2.518 0 4.567 2.049 4.567 4.567 0 2.518-2.049 4.567-4.567 4.567zm2.508-3.424c-.138-.069-.813-.401-.939-.447-.126-.046-.218-.069-.31.069-.092.138-.356.447-.436.539-.08.092-.161.103-.299.034-.138-.069-.583-.215-1.11-.685-.41-.366-.687-.818-.767-.956-.08-.138-.009-.213.06-.282.063-.062.138-.161.207-.241.069-.08.092-.138.138-.23.046-.092.023-.172-.011-.241-.034-.069-.31-.747-.425-1.023-.112-.269-.226-.233-.31-.237-.08-.004-.172-.005-.264-.005s-.241.034-.367.172c-.126.138-.482.471-.482 1.149 0 .678.494 1.333.563 1.425.069.092.972 1.485 2.355 2.083.329.142.586.227.786.291.33.105.631.09.869.055.265-.039.813-.332.928-.653.115-.321.115-.596.08-.653-.034-.057-.126-.092-.264-.161z" />
            </svg>
          </a>

          {/* WhatsApp Tooltip */}
          <div 
            className={`absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap pointer-events-none transition-all duration-200 ${
              showWhatsAppTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
          >
            Chat on WhatsApp
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
          </div>
        </div>

        {/* Phone Call Button */}
        <div className="relative group">
          <a
            id="floating-phone-btn"
            href={`tel:${siteConfig.phoneRaw}`}
            onMouseEnter={() => setShowPhoneTooltip(true)}
            onMouseLeave={() => setShowPhoneTooltip(false)}
            aria-label="Call Webwizia directly"
            className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xl shadow-emerald-900/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <Phone className="w-5 h-5 animate-pulse" />
          </a>

          {/* Phone Tooltip */}
          <div 
            className={`absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap pointer-events-none transition-all duration-200 ${
              showPhoneTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
          >
            Call {siteConfig.phoneFormatted}
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
          </div>
        </div>
      </aside>

      {/* Scroll to Top Button (Fixed Bottom-Right) */}
      <button
        id="scroll-to-top-btn"
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-700 active:scale-90 text-white rounded-xl shadow-xl shadow-blue-600/30 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};
