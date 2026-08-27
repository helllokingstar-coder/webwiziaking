import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SeoHead
        title="Privacy Policy | Webwizia Lahore"
        description="Privacy policy and data protection principles of Webwizia digital marketing agency in Lahore, Pakistan."
        canonicalPath="/privacy-policy"
      />

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-800 text-white py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 text-center sm:text-left">
          <Breadcrumb
            items={[{ label: 'Privacy Policy' }]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          <h1 className="text-3xl sm:text-5xl font-black text-white">Privacy Policy</h1>
          <p className="text-blue-100 text-sm sm:text-base">Last Updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Commitment to Privacy</h2>
            <p className="text-slate-600">
              Webwizia ("we," "our," or "us"), located at Office # 5, Brother Plaza, Hall Road, Lahore, Pakistan, is committed to safeguarding the privacy and confidential intellectual property of our website visitors and clients.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p className="text-slate-600">
              When you submit a quote request, contact form inquiry, or initiate a consultation, we may collect your name, email address, phone number, company name, and project specifications. We only collect information strictly required to deliver our web design, SEO, and development services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>To prepare customized project proposals and technical estimates.</li>
              <li>To communicate project milestones, deliverables, and service updates.</li>
              <li>To conduct authorized web analytics audits and search optimization benchmarks.</li>
              <li>We never sell, rent, or trade your personal or business data to third-party advertisers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Data Security</h2>
            <p className="text-slate-600">
              We implement industry-standard SSL encryption, secure access controls, and strict confidentiality agreements to protect your data from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Contact Regarding Privacy</h2>
            <p className="text-slate-600">
              For questions regarding our privacy practices, contact us at <a href={`mailto:${siteConfig.email}`} className="text-blue-600 font-semibold underline">{siteConfig.email}</a> or call {siteConfig.phoneFormatted}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export const TermsPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SeoHead
        title="Terms & Conditions | Webwizia Lahore"
        description="Terms of service and engagement agreements for Webwizia web design, SEO, and digital marketing services."
        canonicalPath="/terms"
      />

      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-800 text-white py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 text-center sm:text-left">
          <Breadcrumb
            items={[{ label: 'Terms & Conditions' }]}
            onNavigate={onNavigate}
            lightMode={true}
          />
          <h1 className="text-3xl sm:text-5xl font-black text-white">Terms & Conditions</h1>
          <p className="text-blue-100 text-sm sm:text-base">Last Updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
            <p className="text-slate-600">
              By accessing Webwizia.com or engaging our agency for web design, SEO, custom development, or digital marketing services, you agree to comply with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Scope of Services</h2>
            <p className="text-slate-600">
              Each web design, development, or search engine optimization engagement is governed by an agreed project statement of work detailing timeline, deliverables, milestones, and payment structure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Intellectual Property Ownership</h2>
            <p className="text-slate-600">
              Upon final project sign-off and receipt of settled invoices, full ownership of custom source code, design assets, and digital media created for the client is transferred to the client in full.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Governing Law</h2>
            <p className="text-slate-600">
              These terms are governed by the laws and judicial jurisdiction of the Islamic Republic of Pakistan, with primary legal proceedings subject to Lahore courts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
