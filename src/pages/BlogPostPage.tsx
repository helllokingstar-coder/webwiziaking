import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight,
  Sparkles,
  HelpCircle,
  Tag,
  BookOpen,
  Search
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';
import { blogPosts } from '../data/blogData';
import { BlogPost } from '../types';
import { siteConfig } from '../data/siteConfig';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onNavigate, onOpenQuote }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'E-Commerce', 'WordPress', 'Web Design', 'SEO', 'Digital Strategy'];
  const sidebarCategories = ['E-Commerce', 'WordPress', 'Web Design', 'SEO', 'Digital Strategy'];

  // Recent posts for sidebar widget
  const recentPosts = blogPosts.slice(0, 4);

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Related posts (same category or others)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || true))
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <SeoHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.tags}
        canonicalPath={`/blog/${post.slug}`}
        schemaType="Article"
        schemaData={{
          authorName: post.author.name,
          datePublished: post.publishedDate
        }}
        ogImage={post.featuredImage}
      />

      {/* Header Banner (Midnight Navy & Cyan Grid Matching Template) */}
      <section className="bg-gradient-to-r from-[#031b4e] via-[#046BD2] to-[#15ace6] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumb
            items={[
              { label: 'Our Blog', href: '/blog' },
              { label: post.title }
            ]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-white/15 text-sky-100 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              {post.category}
            </span>
            <span className="text-xs text-sky-100 flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {post.publishedDate}
            </span>
            <span className="text-xs text-sky-100 flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-3 pt-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#15ace6]"
            />
            <div className="text-left text-xs">
              <div className="font-bold text-white">{post.author.name}</div>
              <div className="text-sky-200">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-12 sm:py-16 bg-[#f2f9fd]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Category Filter & Search Bar matching blog category.JPG */}
          <div className="mb-10 pb-6 border-b border-sky-100 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onNavigate(cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`);
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    post.category === cat
                      ? 'bg-gradient-to-r from-[#046BD2] to-[#15ace6] text-white shadow-sm'
                      : 'bg-white text-[#031b4e] hover:bg-sky-50 border border-sky-100 shadow-xs'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    onNavigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
                  }
                }}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white text-[#031b4e] placeholder:text-slate-400 border border-sky-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046BD2] shadow-xs"
              />
              <Search 
                className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-[#046BD2]" 
                onClick={() => {
                  if (searchQuery.trim()) {
                    onNavigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
                  }
                }}
              />
            </div>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column (8 cols): Article Content */}
            <article className="lg:col-span-8 space-y-10">
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-[16/9] bg-slate-100">
                <img
                  src={post.featuredImage}
                  alt={post.altText}
                  className="w-full h-full object-cover"
                />
              </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#f2f9fd] border border-sky-100 rounded-3xl p-6 sm:p-8 mb-12 text-left space-y-4">
            <div className="flex items-center space-x-2 text-[#031b4e] font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#046BD2]" />
              <span>Key Takeaways for Business Owners</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {post.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#046BD2] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#031b4e]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formatted Article Body */}
          <div className="space-y-10 text-left text-slate-700 leading-relaxed text-base sm:text-lg">
            {post.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#031b4e] tracking-tight">
                  {sec.heading}
                </h2>
                {sec.subheading && (
                  <h3 className="text-lg font-bold text-[#046BD2]">
                    {sec.subheading}
                  </h3>
                )}
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-slate-600 leading-relaxed text-base font-normal">
                    {para}
                  </p>
                ))}
                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="space-y-2.5 pt-2 pl-2">
                    {sec.bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm sm:text-base text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#046BD2] mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Tags & Share Bar */}
          <div className="mt-12 pt-8 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400 mr-1" />
              {post.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-sky-50 text-[#031b4e] text-xs font-semibold rounded-lg border border-sky-100">
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={handleShare}
              className="px-4 py-2 bg-sky-50 hover:bg-sky-100 text-[#031b4e] hover:text-[#046BD2] text-xs font-bold rounded-xl transition-all flex items-center space-x-2 border border-sky-100"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>

          {/* Author Bio Box */}
          <div className="mt-12 bg-[#f2f9fd] p-6 sm:p-8 rounded-3xl border border-sky-100 text-left flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#046BD2] shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase text-[#046BD2] tracking-wider">Written By</span>
              <h4 className="text-lg font-bold text-[#031b4e]">{post.author.name}</h4>
              <p className="text-xs text-slate-500 font-semibold">{post.author.role}</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1 font-normal">
                {post.author.bio}
              </p>
            </div>
          </div>

          {/* Article FAQs Accordion */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16 text-left space-y-6">
              <div className="flex items-center space-x-2 text-[#031b4e] font-black text-2xl">
                <HelpCircle className="w-6 h-6 text-[#046BD2]" />
                <span>Article FAQs</span>
              </div>

              <div className="space-y-3">
                {post.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-sky-100 rounded-2xl overflow-hidden transition-all bg-[#f2f9fd]/30"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-[#031b4e] hover:text-[#046BD2] transition-colors"
                    >
                      <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          openFaqIndex === idx ? 'rotate-180 text-[#046BD2]' : ''
                        }`}
                      />
                    </button>

                    {openFaqIndex === idx && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-sky-100 bg-white font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next Article Navigation */}
          <div className="mt-16 pt-8 border-t border-sky-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <button
                onClick={() => onNavigate(`/blog/${prevPost.slug}`)}
                className="p-5 rounded-2xl bg-[#f2f9fd] hover:bg-sky-100/50 border border-sky-100 text-left group transition-all"
              >
                <div className="flex items-center space-x-1 text-xs font-bold text-slate-500 group-hover:text-[#046BD2] mb-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Article</span>
                </div>
                <div className="text-sm font-bold text-[#031b4e] group-hover:text-[#046BD2] line-clamp-1">
                  {prevPost.title}
                </div>
              </button>
            ) : <div />}

            {nextPost ? (
              <button
                onClick={() => onNavigate(`/blog/${nextPost.slug}`)}
                className="p-5 rounded-2xl bg-[#f2f9fd] hover:bg-sky-100/50 border border-sky-100 text-right group transition-all"
              >
                <div className="flex items-center justify-end space-x-1 text-xs font-bold text-slate-500 group-hover:text-[#046BD2] mb-1">
                  <span>Next Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm font-bold text-[#031b4e] group-hover:text-[#046BD2] line-clamp-1">
                  {nextPost.title}
                </div>
              </button>
            ) : <div />}
          </div>

          {/* Related Articles Section */}
          <div className="mt-16 pt-12 border-t border-sky-100 text-left space-y-6">
            <h3 className="text-2xl font-black text-[#031b4e]">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.id}
                  onClick={() => onNavigate(`/blog/${rPost.slug}`)}
                  className="p-4 rounded-2xl border border-sky-100 hover:border-[#046BD2] hover:shadow-md transition-all cursor-pointer group space-y-3 bg-white"
                >
                  <img
                    src={rPost.featuredImage}
                    alt={rPost.title}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#046BD2] tracking-wider">
                      {rPost.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#031b4e] group-hover:text-[#046BD2] line-clamp-2 mt-1">
                      {rPost.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In-Article CTA */}
          <div className="mt-16 bg-[#031b4e] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black">
              Need a Professional Website for Your Business?
            </h3>
            <p className="text-sky-100 text-base max-w-xl mx-auto">
              Contact Webwizia today for professional Web Design, WordPress Website Design, SEO and E-Commerce solutions in Lahore.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 bg-gradient-to-r from-[#046BD2] to-[#15ace6] hover:from-[#0353a4] hover:to-[#0d99d1] text-white font-bold rounded-xl text-sm uppercase tracking-wider shadow-md transition-all"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-all"
              >
                Contact Webwizia
              </button>
            </div>
          </div>
        </article>

        {/* Right Column (4 cols): Sticky Sidebar matching seprate blog.JPG */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          {/* Widget 1: Recent Articles */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-sm space-y-5 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-black text-[#031b4e] tracking-tight">Recent Articles</h3>
              <Sparkles className="w-4 h-4 text-[#15ace6]" />
            </div>
            <div className="space-y-4">
              {recentPosts.map((rPost) => (
                <div
                  key={rPost.id}
                  onClick={() => onNavigate(`/blog/${rPost.slug}`)}
                  className="flex items-center space-x-3.5 group cursor-pointer"
                >
                  <img
                    src={rPost.featuredImage}
                    alt={rPost.title}
                    className="w-16 h-14 rounded-xl object-cover shrink-0 border border-sky-100 group-hover:border-[#15ace6] transition-all"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#031b4e] group-hover:text-[#046BD2] line-clamp-2 leading-snug transition-colors">
                      {rPost.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-semibold mt-1">
                      {rPost.publishedDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 2: Categories */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-sm text-left">
            <h3 className="text-lg font-black text-[#031b4e] tracking-tight mb-4">Categories</h3>
            <div className="divide-y divide-slate-100">
              {sidebarCategories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => onNavigate(`/blog?category=${encodeURIComponent(cat)}`)}
                  className="py-3.5 flex items-center justify-between group cursor-pointer transition-colors"
                >
                  <span className={`text-xs sm:text-sm font-semibold transition-colors ${
                    post.category === cat ? 'text-[#046BD2] font-bold' : 'text-slate-700 group-hover:text-[#046BD2]'
                  }`}>
                    {cat}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#046BD2] group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Widget 3: READY TO GROW? CTA Card */}
          <div className="bg-[#031b4e] rounded-3xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden text-left">
            <div className="relative z-10">
              <span className="text-[#15ace6] text-[11px] font-black tracking-widest uppercase block mb-2">
                READY TO GROW?
              </span>
              <h3 className="text-xl font-black text-white leading-tight">
                Transform Your Online Presence Today
              </h3>
              <p className="text-sky-100/80 text-xs leading-relaxed mt-3 font-normal">
                Get a free technical audit and strategy roadmap for your business website.
              </p>
              <button
                onClick={() => onNavigate('/contact')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#046BD2] to-[#15ace6] hover:from-[#0353a4] hover:to-[#0d99d1] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all mt-6 text-center block active:scale-95"
              >
                CONTACT US
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
    </>
  );
};
