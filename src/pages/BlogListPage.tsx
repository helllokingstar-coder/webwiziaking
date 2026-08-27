import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Tag, 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';
import { blogPosts } from '../data/blogData';
import { BlogPost } from '../types';

interface BlogListPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Web Design', 'SEO', 'E-Commerce', 'Digital Strategy', 'Website Development'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <>
      <SeoHead
        title="Blog & Digital Marketing Insights | Webwizia Lahore"
        description="Read the latest actionable insights, web design best practices, SEO guides, and e-commerce tips from Webwizia's Lahore engineering and marketing leads."
        keywords={[
          'Digital Marketing Blog Pakistan',
          'SEO Tips Lahore',
          'Web Design Guides',
          'E-Commerce Development Blog',
          'Website Best Practices'
        ]}
        canonicalPath="/blog"
      />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-800 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center sm:text-left">
          <Breadcrumb
            items={[{ label: 'Our Blog' }]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Blog & Insights
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Practical strategies, technical teardowns, and growth blueprints to help you dominate your digital market.
          </p>
        </div>
      </section>

      {/* Main Blog Area */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Search & Category Filter Header */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                          selectedCategory === cat
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Featured Post Card (If on All category and no search) */}
              {selectedCategory === 'All' && !searchQuery && (
                <div 
                  onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-6 relative aspect-[16/10] md:aspect-auto">
                      <img
                        src={featuredPost.featuredImage}
                        alt={featuredPost.altText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-[11px] font-extrabold uppercase rounded-full tracking-wider">
                          Featured Post
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2">
                          <span>{featuredPost.publishedDate}</span>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-3">
                          {featuredPost.title}
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-xs">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Blog Posts Grid */}
              {filteredPosts.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl text-center border border-slate-200 space-y-3">
                  <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-800">No Articles Found</h3>
                  <p className="text-slate-500 text-xs">
                    Try adjusting your search terms or selecting a different category filter.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
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
                            <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2">
                            <span>{post.publishedDate}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h3>

                          <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0">
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
              )}
            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-8 text-left">
              {/* Recent Articles Widget */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                  <span>Recent Articles</span>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onNavigate(`/blog/${item.slug}`)}
                      className="group cursor-pointer flex space-x-3 items-center"
                    >
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="w-16 h-14 object-cover rounded-xl shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <span className="text-[11px] text-slate-400 mt-0.5 block">
                          {item.publishedDate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
                  Categories
                </h3>
                <div className="space-y-1.5">
                  {categories.filter(c => c !== 'All').map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="w-full flex items-center justify-between py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600"
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Sidebar Quote CTA Box */}
              <div className="bg-gradient-to-br from-blue-700 to-sky-700 p-6 rounded-3xl text-white space-y-4 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Ready to Grow?
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Transform Your Online Presence Today
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Get a free technical audit and strategy roadmap for your business website.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3 bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs rounded-xl shadow-md transition-all uppercase tracking-wider"
                >
                  GET A FREE QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
