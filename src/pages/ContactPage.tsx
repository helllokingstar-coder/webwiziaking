import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Home,
  ChevronRight,
  ExternalLink,
  Navigation,
  CheckCircle2, 
  Send
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { siteConfig } from '../data/siteConfig';
import { ContactFormData } from '../types';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    serviceInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      serviceInterest: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <>
      <SeoHead
        title="Contact Us | Webzify Digital Marketing & Web Design Agency Lahore"
        description="Have a website, e-commerce or SEO project in mind? Contact Webzify and let's discuss how we can help. Office # 5, Brother Plaza, Hall Road, Lahore, Pakistan."
        keywords={[
          'Contact Webzify',
          'Web Design Lahore Office',
          'SEO Company Hall Road Lahore',
          'Digital Marketing Lahore Contact Number'
        ]}
        canonicalPath="/contact"
        schemaType="LocalBusiness"
      />

      <div className="bg-white min-h-screen">
        {/* ========================================================
            HERO HEADER SECTION (ROYAL BLUE GRID WITH BREADCRUMB)
            ======================================================== */}
        <section className="bg-gradient-to-r from-[#0b51da] via-[#155DFC] to-[#0d47a1] text-white pt-14 pb-36 sm:pb-44 lg:pb-52 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            {/* Centered Breadcrumb */}
            <nav className="inline-flex items-center justify-center space-x-2 text-xs sm:text-sm text-blue-100 font-medium mb-1">
              <button 
                onClick={() => onNavigate('/')}
                className="inline-flex items-center space-x-1 hover:text-white transition-colors"
                aria-label="Home"
              >
                <Home className="w-3.5 h-3.5" />
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-blue-200" />
              <span className="text-white font-semibold">Contact Us</span>
            </nav>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Let's Talk About Your Project
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed pt-1">
              Have a website, e-commerce or SEO project in mind? Contact Webzify and let's discuss how we can help.
            </p>
          </div>
        </section>

        {/* ========================================================
            MAIN CONTACT CARD (OVERLAPPING 2-COLUMN SPLIT)
            ======================================================== */}
        <section className="relative -mt-24 sm:-mt-32 lg:-mt-36 pb-20 px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-5xl mx-auto bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl shadow-blue-950/20 border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Contact Information (Dark Royal Blue) */}
            <div className="lg:col-span-5 bg-[#1045b8] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between text-left">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Contact Information
                </h2>
                <p className="text-blue-100/90 text-sm leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours to discuss your digital needs.
                </p>

                {/* Info List */}
                <div className="space-y-6 pt-6 sm:pt-8">
                  {/* Phone Item */}
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-200 block">Phone</span>
                      <a 
                        href={`tel:${siteConfig.phoneRaw}`} 
                        className="text-base font-bold text-white hover:text-blue-200 transition-colors mt-0.5 block"
                      >
                        {siteConfig.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-200 block">Email</span>
                      <a 
                        href="mailto:info@webzify.com" 
                        className="text-base font-bold text-white hover:text-blue-200 transition-colors mt-0.5 block"
                      >
                        info@webzify.com
                      </a>
                    </div>
                  </div>

                  {/* Office Item */}
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-200 block">Office</span>
                      <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                        Office No-G 5, Brother Plaza,<br />
                        Hall Road, Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Send us a Message Form (White) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 lg:p-12 text-left">
              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Webzify. Our team will review your inquiry and get back to you within 24 hours at <span className="font-bold text-slate-900">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-8 py-3.5 bg-[#155DFC] hover:bg-blue-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Send us a Message
                  </h2>

                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#f0f4fc] border focus:bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                          errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-transparent focus:border-blue-500'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email-addr"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#f0f4fc] border focus:bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-transparent focus:border-blue-500'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Interested Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone-num"
                        type="tel"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#f0f4fc] border focus:bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                          errors.phone ? 'border-red-400 focus:border-red-400' : 'border-transparent focus:border-blue-500'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Interested Service
                      </label>
                      <select
                        id="contact-service-select"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f0f4fc] border border-transparent focus:border-blue-500 focus:bg-white text-sm text-slate-800 focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="Web Design">Web Design</option>
                        <option value="E-Commerce Website">E-Commerce Website</option>
                        <option value="WordPress Website Design">WordPress Website Design</option>
                        <option value="SEO Services">SEO Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Project Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      id="contact-project-details"
                      rows={4}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#f0f4fc] border focus:bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-red-400 focus:border-red-400' : 'border-transparent focus:border-blue-500'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 bg-[#155DFC] hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* ========================================================
            MAP SECTION WITH FLOATING LOCATION BADGE
            ======================================================== */}
        <section className="relative w-full h-[400px] sm:h-[460px] bg-slate-100 overflow-hidden border-t border-slate-200">
          {/* Floating Map Location Card */}
          <div className="absolute top-6 left-6 z-20 bg-white px-5 py-3.5 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 flex items-center space-x-4 max-w-sm">
            <div>
              <h4 className="text-sm font-black text-slate-900">Hall Road</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-tight">
                Hall Rd, Garhi Shahu, Lahore,<br />54000, Pakistan
              </p>
            </div>
            <div className="flex items-center space-x-1.5 pl-2 border-l border-slate-100">
              <a
                href="https://maps.google.com/?q=Hall+Road+Lahore+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in Google Maps"
                className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#155DFC] flex items-center justify-center transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com/maps/dir//Hall+Road+Lahore+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Directions"
                className="w-8 h-8 rounded-lg bg-[#155DFC] text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Responsive Google Map */}
          <iframe
            title="Webzify Lahore Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.080512803875!2d74.32185687635677!3d31.566144874193206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4af2e7bcfb%3A0xe4d3a24ebce18e24!2sHall%20Rd%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[0.15] contrast-[1.05]"
          />
        </section>
      </div>
    </>
  );
};

