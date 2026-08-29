import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { QuoteFormData } from '../types';
import { siteConfig } from '../data/siteConfig';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Web Designing'
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceType: defaultService,
    budgetRange: '$500 - $1,500',
    timeline: 'Within 2 to 4 weeks',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone or WhatsApp number';
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please share a brief summary of your project goals';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high reliability agency intake processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      serviceType: 'Web Designing',
      budgetRange: '$500 - $1,500',
      timeline: 'Within 2 to 4 weeks',
      projectDetails: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-100 relative my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white p-6 sm:p-8 relative">
          <button
            id="close-quote-modal-btn"
            onClick={onClose}
            aria-label="Close quote modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wide uppercase text-blue-100 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Turnaround • Free Consultation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Request A Custom Project Quote
          </h2>
          <p className="text-blue-100 text-sm mt-1 max-w-md">
            Tell us about your digital goals. Our Lahore engineering and marketing leads will review your specs and send a detailed proposal within 24 hours.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Your quote request for <span className="font-semibold text-blue-600">{formData.serviceType}</span> has been received. One of our senior strategists will contact you at <span className="font-semibold text-slate-800">{formData.email}</span> shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="quote-success-done-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md"
                >
                  Back to Website
                </button>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md flex items-center space-x-2"
                >
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Required Service *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Web Designing', 'SEO Services', 'E-Commerce Website'].map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setFormData({ ...formData, serviceType: srv })}
                      className={`p-2.5 text-xs font-semibold rounded-xl border text-center transition-all ${
                        formData.serviceType === srv
                          ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm font-bold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="quote-form-name"
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
                    id="quote-form-email"
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

              {/* Phone & Company Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="quote-form-phone"
                    type="tel"
                    placeholder="0300 1234567 or +92..."
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
                    Company / Brand Name (Optional)
                  </label>
                  <input
                    id="quote-form-company"
                    type="text"
                    placeholder="e.g. Apex Enterprises"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Budget & Timeline Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Budget
                  </label>
                  <select
                    id="quote-form-budget"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option value="Under $500 (PKR 50k - 150k)">Under $500 (Basic Package)</option>
                    <option value="$500 - $1,500 (PKR 150k - 450k)">$500 - $1,500 (Standard Growth)</option>
                    <option value="$1,500 - $3,000 (PKR 450k - 900k)">$1,500 - $3,000 (Custom Pro)</option>
                    <option value="$3,000+ (Enterprise)">$3,000+ (Enterprise Full Suite)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Timeline
                  </label>
                  <select
                    id="quote-form-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option value="Urgent (1 - 2 weeks)">Urgent (1 - 2 weeks)</option>
                    <option value="Within 2 to 4 weeks">Within 2 to 4 weeks</option>
                    <option value="1 to 2 months">1 to 2 months</option>
                    <option value="Flexible planning">Flexible planning</option>
                  </select>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tell Us About Your Project & Objectives *
                </label>
                <textarea
                  id="quote-form-details"
                  rows={3}
                  placeholder="Describe your website requirements, target audience, reference sites, or specific features you need..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    errors.projectDetails ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-500 focus:bg-white'
                  }`}
                />
                {errors.projectDetails && <p className="text-xs text-red-500 mt-1">{errors.projectDetails}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Privacy. Zero Spam.</span>
                </div>

                <button
                  id="submit-quote-request-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>SUBMIT QUOTE REQUEST</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
