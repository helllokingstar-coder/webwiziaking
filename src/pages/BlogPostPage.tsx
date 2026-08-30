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
  Sparkles,
  HelpCircle,
  Tag,
  BookOpen
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

      {/* Header Banner (Royal Blue Grid Matching Template) */}
      <section className="bg-gradient-to-r from-[#0b51da] via-[#155DFC] to-[#0d47a1] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden text-left">
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
            <span className="px-3.5 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              {post.category}
            </span>
            <span className="text-xs text-blue-100 flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {post.publishedDate}
            </span>
            <span className="text-xs text-blue-100 flex items-center">
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
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
            />
            <div className="text-left text-xs">
              <div className="font-bold text-white">{post.author.name}</div>
              <div className="text-blue-200">{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-[16/9] bg-slate-100">
            <img
              src={post.featuredImage}
              alt={post.altText}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-3xl p-6 sm:p-8 mb-12 text-left space-y-4">
            <div className="flex items-center space-x-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Key Takeaways for Business Owners</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {post.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#1e1b4b]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formatted Article Body */}
          <div className="space-y-10 text-left text-[#1e1b4b] leading-relaxed text-base sm:text-lg">
            {post.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#1e1b4b] tracking-tight">
                  {sec.heading}
                </h2>
                {sec.subheading && (
                  <h3 className="text-lg font-bold text-blue-700">
                    {sec.subheading}
                  </h3>
                )}
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-[#1e1b4b] leading-relaxed text-base font-normal">
                    {para}
                  </p>
                ))}
                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="space-y-2.5 pt-2 pl-2">
                    {sec.bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm sm:text-base text-[#1e1b4b]">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Tags & Share Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400 mr-1" />
              {post.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 text-[#1e1b4b] text-xs font-semibold rounded-lg">
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={handleShare}
              className="px-4 py-2 bg-slate-100 hover:bg-blue-50 text-[#1e1b4b] hover:text-blue-600 text-xs font-bold rounded-xl transition-all flex items-center space-x-2"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>

          {/* Author Bio Box */}
          <div className="mt-12 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 text-left flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Written By</span>
              <h4 className="text-lg font-bold text-[#1e1b4b]">{post.author.name}</h4>
              <p className="text-xs text-[#1e1b4b]/70 font-semibold">{post.author.role}</p>
              <p className="text-xs text-[#1e1b4b] leading-relaxed pt-1 font-normal">
                {post.author.bio}
              </p>
            </div>
          </div>

          {/* Article FAQs Accordion */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16 text-left space-y-6">
              <div className="flex items-center space-x-2 text-[#1e1b4b] font-black text-2xl">
                <HelpCircle className="w-6 h-6 text-blue-600" />
                <span>Article FAQs</span>
              </div>

              <div className="space-y-3">
                {post.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-[#1e1b4b] hover:text-blue-600 transition-colors"
                    >
                      <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          openFaqIndex === idx ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>

                    {openFaqIndex === idx && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-[#1e1b4b] text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next Article Navigation */}
          <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <button
                onClick={() => onNavigate(`/blog/${prevPost.slug}`)}
                className="p-5 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-left group transition-all"
              >
                <div className="flex items-center space-x-1 text-xs font-bold text-[#1e1b4b]/60 group-hover:text-blue-600 mb-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Article</span>
                </div>
                <div className="text-sm font-bold text-[#1e1b4b] group-hover:text-blue-600 line-clamp-1">
                  {prevPost.title}
                </div>
              </button>
            ) : <div />}

            {nextPost ? (
              <button
                onClick={() => onNavigate(`/blog/${nextPost.slug}`)}
                className="p-5 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-right group transition-all"
              >
                <div className="flex items-center justify-end space-x-1 text-xs font-bold text-[#1e1b4b]/60 group-hover:text-blue-600 mb-1">
                  <span>Next Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm font-bold text-[#1e1b4b] group-hover:text-blue-600 line-clamp-1">
                  {nextPost.title}
                </div>
              </button>
            ) : <div />}
          </div>

          {/* Related Articles Section */}
          <div className="mt-16 pt-12 border-t border-slate-200 text-left space-y-6">
            <h3 className="text-2xl font-black text-[#1e1b4b]">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.id}
                  onClick={() => onNavigate(`/blog/${rPost.slug}`)}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group space-y-3"
                >
                  <img
                    src={rPost.featuredImage}
                    alt={rPost.title}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-blue-600 tracking-wider">
                      {rPost.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#1e1b4b] group-hover:text-blue-600 line-clamp-2 mt-1">
                      {rPost.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* In-Article CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-700 to-sky-700 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black">
              Need a Professional Website for Your Business?
            </h3>
            <p className="text-blue-100 text-base max-w-xl mx-auto">
              Contact Webwizia today for professional Web Design, WordPress Website Design, SEO and E-Commerce solutions in Lahore.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-sm uppercase tracking-wider shadow-md transition-all"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-8 py-3.5 bg-blue-900/70 hover:bg-blue-900 border border-white/30 text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-all"
              >
                Contact Webwizia
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
