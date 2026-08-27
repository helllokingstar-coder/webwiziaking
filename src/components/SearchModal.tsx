import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Layout, TrendingUp, Code, ShoppingBag, BookOpen, FileText } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { blogPosts } from '../data/blogData';
import { SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      // Default top suggestions
      const defaultSuggestions: SearchResult[] = [
        {
          title: 'Web Designing Services',
          category: 'Service',
          href: '/services/web-designing',
          description: 'Modern, responsive, and conversion-focused UI/UX design.'
        },
        {
          title: 'SEO Services in Lahore',
          category: 'Service',
          href: '/services/seo-services',
          description: 'Rank on Page 1 of Google, local SEO Lahore, and technical audits.'
        },
        {
          title: 'Website Development',
          category: 'Service',
          href: '/services/website-development',
          description: 'Custom full-stack web applications, portals, and CMS platforms.'
        },
        {
          title: 'E-Commerce Website Development',
          category: 'Service',
          href: '/services/e-commerce-website',
          description: 'High-converting online store creation with JazzCash and COD.'
        },
        {
          title: 'Why Professional Web Design Matters',
          category: 'Blog Post',
          href: '/blog/why-professional-web-design-matters-for-your-business',
          description: 'Insights on first impressions, trust, and conversion rates.'
        }
      ];
      setResults(defaultSuggestions);
      return;
    }

    const q = query.toLowerCase();
    const matched: SearchResult[] = [];

    // Search services
    servicesData.forEach((s) => {
      if (
        s.title.toLowerCase().includes(q) ||
        s.overview.toLowerCase().includes(q) ||
        s.keywords.some((k) => k.toLowerCase().includes(q))
      ) {
        matched.push({
          title: s.title,
          category: 'Service',
          href: `/services/${s.slug}`,
          description: s.shortDescription
        });
      }
    });

    // Search blog posts
    blogPosts.forEach((b) => {
      if (
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        matched.push({
          title: b.title,
          category: 'Blog Post',
          href: `/blog/${b.slug}`,
          description: b.excerpt
        });
      }
    });

    // Main pages
    if ('about us who we are mission vision'.includes(q)) {
      matched.push({
        title: 'About Webwizia',
        category: 'Page',
        href: '/about',
        description: 'Our mission, vision, core values, and Lahore engineering team.'
      });
    }
    if ('contact us phone email address lahore map office quote'.includes(q)) {
      matched.push({
        title: 'Contact Webwizia',
        category: 'Page',
        href: '/contact',
        description: 'Office # 5, Brother Plaza, Hall Road, Lahore. Phone: 00923036346909.'
      });
    }

    setResults(matched);
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (href: string) => {
    onNavigate(href);
    onClose();
  };

  const getResultIcon = (category: string) => {
    switch (category) {
      case 'Service':
        return <Layout className="w-4 h-4 text-blue-600" />;
      case 'Blog Post':
        return <BookOpen className="w-4 h-4 text-sky-600" />;
      default:
        return <FileText className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-100 ring-1 ring-black/5"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center space-x-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, blog guides, SEO tips, pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-200/60 hover:bg-slate-200 rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1 divide-y divide-slate-50">
          <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
            {query.trim() ? `Search Results (${results.length})` : 'Popular Searches & Services'}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              <p>No results found for "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for "SEO", "Web Design", "Lahore", or "E-Commerce".</p>
            </div>
          ) : (
            results.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.href)}
                className="w-full text-left p-3 rounded-xl hover:bg-blue-50/70 transition-all flex items-center justify-between group"
              >
                <div className="flex items-start space-x-3 pr-2">
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white transition-colors mt-0.5 shrink-0 shadow-xs">
                    {getResultIcon(item.category)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
