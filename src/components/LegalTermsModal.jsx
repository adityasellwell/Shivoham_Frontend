import React, { useState, useEffect } from 'react';
import { X, Lock, FileText, ShieldCheck, Scale, Check } from 'lucide-react';

export default function LegalTermsModal({ isOpen, onClose, onAccept, initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setAgreed(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity duration-200 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl max-h-[88vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-800 dark:text-slate-100 animate-scaleUp">
        
        {/* Modal Header - Rich Shivoham Brand Ribbon */}
        <div className="bg-gradient-to-r from-[#052E1F] via-[#0B4619] to-[#052E1F] px-6 py-5 sm:px-8 sm:py-6 text-white border-b border-yellow-500/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-300 block">
                Shivoham &amp; Associates • Legal Terms
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
                Terms and Conditions
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition cursor-pointer border border-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation with Brand Colors */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-950/60 px-6 pt-3 shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 py-3 px-5 font-bold text-xs sm:text-sm border-b-2 transition cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-[#0B4619] dark:border-yellow-400 text-[#0B4619] dark:text-yellow-300 bg-white dark:bg-slate-900 rounded-t-xl shadow-xs'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Privacy Policy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 py-3 px-5 font-bold text-xs sm:text-sm border-b-2 transition cursor-pointer ${
              activeTab === 'terms'
                ? 'border-[#0B4619] dark:border-yellow-400 text-[#0B4619] dark:text-yellow-300 bg-white dark:bg-slate-900 rounded-t-xl shadow-xs'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Terms of Use &amp; Engagement</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 overflow-y-auto leading-relaxed grow">
          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-xs">
                <strong className="font-bold block mb-0.5 text-emerald-900 dark:text-emerald-100 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  DPDP Act, 2023 &amp; DPDP Rules, 2025 Notice
                </strong>
                Shivoham &amp; Associates operates as a Data Fiduciary. By submitting your contact and business details through this quote estimator, you consent to our collection and lawful processing of this data.
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">1. Who We Are (Data Fiduciary)</h4>
                <p>
                  <strong>Shivoham &amp; Associates</strong> is a law practice headquartered in New Delhi, India. Contact for privacy inquiries: <code className="text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 font-semibold">advocate@shivoham.biz</code>.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">2. Personal Data We Collect</h4>
                <p>Through this quote wizard, we collect:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Identity &amp; Contact Data:</strong> Full Name, Email Address, and Phone Number.</li>
                  <li><strong>Business Profile Data:</strong> Brand Name, Entity Type, and Concept Description.</li>
                  <li><strong>Technical &amp; Log Data:</strong> IP Address, browser type, and submission timestamp.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">3. Purpose of Processing &amp; Consent</h4>
                <p>
                  We process data strictly to evaluate legal or compliance filing scopes, prepare quotes, and communicate regarding engagements. We do not sell or trade your data.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">4. Data Retention &amp; Rights</h4>
                <p>
                  Inquiry data is retained for up to 180 days before secure deletion. Request access or erasure by emailing <code className="text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 font-semibold">grievance@shivoham.biz</code>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs">
                <strong className="font-bold block mb-0.5 text-amber-900 dark:text-amber-100 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  Bar Council of India • Rule 36 Mandatory Notice
                </strong>
                The Bar Council of India prohibits advocates from advertising or soliciting clients. This website provides informational material solely at your specific request.
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">1. Non-Solicitation &amp; Informational Scope</h4>
                <p>
                  You acknowledge that you are voluntarily requesting information about our legal practice and that no advertisement or solicitation has been made by Shivoham &amp; Associates.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">2. No Lawyer-Client Relationship by Submission</h4>
                <p>
                  Submitting a quote request <strong>does not create an advocate-client relationship</strong>. A formal relationship is created solely upon execution of a Vakalatnama or Consultancy Agreement.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">3. Nature of Online Fee Estimates</h4>
                <p>
                  Quotes generated via this wizard are provisional estimates. Official government fees and stamp duties are confirmed during formal engagement.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">4. Governing Law &amp; Jurisdiction</h4>
                <p>
                  These Terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in New Delhi.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Agree Checkbox & Decline / Accept Buttons */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          {/* Checkbox */}
          <label className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer shrink-0"
            />
            <span>I have read and agree to the Terms &amp; Conditions</span>
          </label>

          {/* Action Buttons: Decline & Accept */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              Decline
            </button>
            <button
              type="button"
              disabled={!agreed}
              onClick={() => {
                onAccept();
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#052E1F] hover:bg-[#0B4619] text-yellow-300 hover:text-white font-black text-xs sm:text-sm shadow-lg transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 border border-yellow-500/30"
            >
              <Check className="w-4 h-4" />
              Accept &amp; Proceed
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
