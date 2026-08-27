import { NavItem } from '../types';

export const siteConfig = {
  name: 'Webwizia',
  tagline: 'Build. Grow. Succeed. With Webwizia',
  description: 'We create high-performing websites, powerful SEO strategies, and digital solutions that help businesses grow online.',
  phone: '00923036346909',
  phoneFormatted: '+92 303 6346909',
  phoneRaw: '+923036346909',
  whatsappUrl: 'https://wa.me/923036346909?text=Hello%20Webwizia%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business.',
  email: 'websify.rafique@gmail.com',
  address: {
    office: 'Office # 5, Brother Plaza',
    street: 'Hall Road',
    city: 'Lahore',
    country: 'Pakistan',
    full: 'Office # 5, Brother Plaza, Hall Road, Lahore, Pakistan'
  },
  hours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 7:00 PM',
    sunday: 'Sunday: Closed (Available via WhatsApp)'
  },
  stats: [
    { value: '100+', label: 'Projects Completed', description: 'Web design, development, and digital marketing projects delivered' },
    { value: '80+', label: 'Happy Clients', description: 'Trusted by businesses across Pakistan and internationally' },
    { value: '95%', label: 'Client Satisfaction', description: 'Proven track record of high retention & measurable ROI' },
    { value: '24/7', label: 'Dedicated Support', description: 'Continuous maintenance, security audits, and quick assistance' }
  ],
  whyChooseUs: [
    {
      icon: 'Sparkles',
      title: 'Creative Solutions',
      description: 'We combine creative visual aesthetics and cutting-edge web technology to produce memorable digital experiences that captivate your target audience.'
    },
    {
      icon: 'Target',
      title: 'Result-Focused Strategy',
      description: 'Every website, campaign, and SEO architecture is engineered specifically around measurable business conversion goals and steady revenue growth.'
    },
    {
      icon: 'Smartphone',
      title: 'Responsive Design',
      description: 'Pixel-perfect responsiveness engineered to load lightning fast across smartphones, tablets, high-res laptops, and ultra-wide desktops.'
    },
    {
      icon: 'Headphones',
      title: 'Dedicated Support',
      description: 'Our Lahore-based expert engineering and marketing team provides proactive technical support throughout every phase of your project lifecycle.'
    }
  ],
  socials: [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
    { name: 'Twitter / X', url: 'https://x.com', icon: 'Twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' }
  ]
};

export const mainNavItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  {
    label: 'OUR SERVICES',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      {
        title: 'Web Designing',
        description: 'Modern, responsive, and conversion-focused UI/UX design',
        href: '/services/web-designing',
        iconName: 'Layout'
      },
      {
        title: 'SEO Services',
        description: 'Boost search rankings, traffic, and Lahore local presence',
        href: '/services/seo-services',
        iconName: 'TrendingUp'
      },
      {
        title: 'Website Development',
        description: 'Fast, secure, and scalable custom web applications',
        href: '/services/website-development',
        iconName: 'Code'
      },
      {
        title: 'E-Commerce Website',
        description: 'High-converting online stores with secure checkout',
        href: '/services/e-commerce-website',
        iconName: 'ShoppingBag'
      }
    ]
  },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' }
];
