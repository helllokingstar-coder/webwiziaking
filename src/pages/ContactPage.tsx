import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
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
    serviceInterest: 'Web Designing',
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
      newErrors.phone = 'Please enter your phone / WhatsApp number';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a message subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your inquiry';
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
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      serviceInterest: 'Web Designing',
      message: ''
    });
  };

  return (
    <>
      <SeoHead
        title="Contact Us | Webwizia Digital Marketing Agency Lahore"
        description="Get in touch with Webwizia in Lahore, Pakistan. Office # 5, Brother Plaza, Hall Road. Call or WhatsApp: 00923036346909. Email: websify.rafique@gmail.com."
        keywords={[
          'Contact Webwizia',
          'Web Design Lahore Office',
          'SEO Company Hall Road Lahore',
          'Digital Marketing Lahore Contact Number'
        ]}
        canonicalPath="/contact"
        schemaType="LocalBusiness"
      />

      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-800 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center sm:text-left">
          <Breadcrumb
            items={[{ label: 'Contact Us' }]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Contact Us
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            Have a question or ready to kick off your project? Reach out to our Lahore team for swift assistance.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Let's Talk About Your Project
                </h2>
                <p className="text-slate-600 text-base mt-3 leading-relaxed">
                  Whether you need a full website redesign, ranking optimization on Google, or a custom e-commerce portal, we’re here to help.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Address Card */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Office Location</h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                      {siteConfig.address.street},<br />
                      {siteConfig.address.city}, {siteConfig.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp Card */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Phone & WhatsApp</h3>
                    <div className="mt-1 space-y-1">
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="block text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                      >
                        {siteConfig.phoneFormatted}
                      </a>
                      <a
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                      >
                        <span>Chat directly on WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Email Address</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors mt-1"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Office Working Hours</h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      {siteConfig.hours.weekdays}<br />
                      <span className="text-slate-400">{siteConfig.hours.sunday}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl text-left">
                {isSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Webwizia. Our team will review your inquiry and get back to you within 24 business hours at <span className="font-bold text-slate-800">{formData.email}</span>.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Send Us A Direct Message
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill out the form below and we’ll respond as promptly as possible.
                      </p>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Your Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="e.g. Tariq Mehmood"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500 focus:bg-white'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                            errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500 focus:bg-white'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="0303 6346909"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                            errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500 focus:bg-white'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Interested Service
                        </label>
                        <select
                          id="contact-service"
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        >
                          <option value="Web Designing">Web Designing</option>
                          <option value="SEO Services">SEO Services</option>
                          <option value="Website Development">Website Development</option>
                          <option value="E-Commerce Website">E-Commerce Website</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="e.g. Website redesign inquiry for Lahore brand"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.subject ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500 focus:bg-white'
                        }`}
                      />
                      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Message / Project Scope *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Tell us what you would like to achieve..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          errors.message ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500 focus:bg-white'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5 text-xs text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Confidential Inquiry</span>
                      </div>

                      <button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center space-x-2 disabled:opacity-70 uppercase tracking-wider"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Google Map Section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-2xl font-black text-slate-900">
              Visit Our Lahore Office
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Office # 5, Brother Plaza, Hall Road, Lahore, Punjab 54000, Pakistan
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-96 w-full relative">
            <iframe
              title="Webwizia Lahore Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.080512803875!2d74.32185687635677!3d31.566144874193206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4af2e7bcfb%3A0xe4d3a24ebce18e24!2sHall%20Rd%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
