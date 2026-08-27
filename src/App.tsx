import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';
import { servicesData } from './data/servicesData';
import { blogPosts } from './data/blogData';

export default function App() {
  // Current active path state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Modal states
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState('Web Designing');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync with browser back/forward history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation helper
  const handleNavigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      window.history.pushState({}, '', path);
    } catch {
      // Fallback for strict sandbox iframe environments
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setQuoteDefaultService(serviceName);
    }
    setIsQuoteOpen(true);
  };

  // Route matching logic
  const renderCurrentPage = () => {
    const cleanPath = currentPath.replace(/\/$/, '') || '/';

    if (cleanPath === '/') {
      return (
        <HomePage 
          onNavigate={handleNavigate} 
          onOpenQuote={handleOpenQuote} 
        />
      );
    }

    if (cleanPath === '/about') {
      return (
        <AboutPage 
          onNavigate={handleNavigate} 
          onOpenQuote={handleOpenQuote} 
        />
      );
    }

    if (cleanPath === '/services') {
      return (
        <ServicesPage 
          onNavigate={handleNavigate} 
          onOpenQuote={handleOpenQuote} 
        />
      );
    }

    if (cleanPath.startsWith('/services/')) {
      const slug = cleanPath.replace('/services/', '');
      const service = servicesData.find((s) => s.slug === slug);
      if (service) {
        return (
          <ServiceDetailPage 
            service={service} 
            onNavigate={handleNavigate} 
            onOpenQuote={handleOpenQuote} 
          />
        );
      }
      // Fallback to services list
      return (
        <ServicesPage 
          onNavigate={handleNavigate} 
          onOpenQuote={handleOpenQuote} 
        />
      );
    }

    if (cleanPath === '/blog') {
      return (
        <BlogListPage 
          onNavigate={handleNavigate} 
          onOpenQuote={() => handleOpenQuote()} 
        />
      );
    }

    if (cleanPath.startsWith('/blog/')) {
      const slug = cleanPath.replace('/blog/', '');
      const post = blogPosts.find((p) => p.slug === slug);
      if (post) {
        return (
          <BlogPostPage 
            post={post} 
            onNavigate={handleNavigate} 
            onOpenQuote={() => handleOpenQuote()} 
          />
        );
      }
      // Fallback to blog list
      return (
        <BlogListPage 
          onNavigate={handleNavigate} 
          onOpenQuote={() => handleOpenQuote()} 
        />
      );
    }

    if (cleanPath === '/contact') {
      return (
        <ContactPage 
          onNavigate={handleNavigate} 
        />
      );
    }

    if (cleanPath === '/privacy-policy') {
      return (
        <PrivacyPolicyPage 
          onNavigate={handleNavigate} 
        />
      );
    }

    if (cleanPath === '/terms') {
      return (
        <TermsPage 
          onNavigate={handleNavigate} 
        />
      );
    }

    // Default 404 / Home Fallback
    return (
      <HomePage 
        onNavigate={handleNavigate} 
        onOpenQuote={handleOpenQuote} 
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Bar + Main Navigation */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Dynamic Page Content */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global 4-Column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating WhatsApp & Phone (Left) + Scroll to Top (Right) */}
      <FloatingWidgets />

      {/* Global Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={quoteDefaultService}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
