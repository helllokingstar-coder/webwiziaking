export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    title: string;
    description: string;
    href: string;
    iconName?: string;
  }[];
}

export interface ServiceDetail {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullTitle: string;
  tagline: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overview: string;
  keyOfferings: {
    title: string;
    description: string;
    icon: string;
  }[];
  detailedSections: {
    title: string;
    content: string;
    points: string[];
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  featuredImage: string;
  altText: string;
  excerpt: string;
  sections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  keyTakeaways: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  conclusion: string;
  relatedSlugs: string[];
  tags: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Web Design' | 'E-Commerce' | 'SEO';
  categorySlug: string;
  image: string;
  altText: string;
  shortDescription: string;
  fullDescription: string;
  client: string;
  location: string;
  deliverables: string[];
  impactMetric: string;
  impactLabel: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  service: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  serviceInterest: string;
  message: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectDetails: string;
}

export interface SearchResult {
  title: string;
  category: 'Service' | 'Blog Post' | 'Page' | 'Feature';
  href: string;
  description: string;
}
