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
              {/* Effective Dates Badge */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">Shivoham &amp; Associates</span>
                <span className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800 font-medium">
                  Effective from: 01.09.2026 &bull; Last updated: 10.09.2026
                </span>
              </div>

              {/* Section 1 */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  1. Who we are
                </h4>
                <p className="mb-2.5 leading-relaxed">
                  <strong>Shivoham &amp; Associates</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;the Firm&rdquo;) is a professional services firm with its office at Flignite, Ground Floor, Parasmani Commercial Complex, Dadar, Mumbai – 400014. Maharashtra. We provide intellectual property, business incorporation, licensing and regulatory advisory services. Contact for privacy inquiries: <a href="mailto:diptish@shivoham.biz" className="text-emerald-700 dark:text-emerald-400 font-bold underline">diptish@shivoham.biz</a>.
                </p>
                <p className="mb-3 leading-relaxed">
                  This Policy explains how we collect, use, share, retain and protect personal data when you visit this website, submit an enquiry, or engage us for professional services. It is issued in accordance with the Digital Personal Data Protection Act, 2023 and the rules made under it, and with the Information Technology Act, 2000 and the rules made under it.
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm font-medium space-y-1">
                  <div>
                    For the purposes of the Digital Personal Data Protection Act, 2023, we act as a <strong>Data Fiduciary</strong> in respect of the personal data described below, and you are the <strong>Data Principal</strong>.
                  </div>
                  <div className="pt-1.5 border-t border-emerald-500/20 text-xs font-semibold">
                    Contact Email: <a href="mailto:diptish@shivoham.biz" className="underline font-bold text-emerald-800 dark:text-emerald-300">diptish@shivoham.biz</a>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="pt-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">
                  2. What we collect
                </h4>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                  <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    Information you give us directly
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li>
                      <strong>Identity and contact details</strong> — name, telephone number, email address, postal address
                    </li>
                    <li>
                      <strong>Business information</strong> — entity name, constitution, nature of business, turnover range, registered address
                    </li>
                    <li>
                      <strong>Enquiry content</strong> — the details you provide through our quote form, consultation form or by email, telephone or messaging application
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs sm:text-sm">
                <strong className="font-bold block mb-1 text-amber-900 dark:text-amber-100 flex items-center gap-1.5 text-sm sm:text-base">
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />
                  Terms of Use &amp; Engagement (Bar Council)
                </strong>
                <span className="font-bold tracking-wider uppercase text-[11px] text-amber-800 dark:text-amber-300 block mt-1">
                  DISCLAIMER
                </span>
              </div>

              <div className="space-y-3 leading-relaxed text-xs sm:text-sm">
                <p>
                  The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, <strong className="text-emerald-700 dark:text-emerald-400">www.shivoham.biz</strong>, you acknowledge and confirm that you are seeking information relating to <strong>Shivoham &amp; Associates</strong> of your own accord and that there has been no form of solicitation, advertisement or inducement by Shivoham &amp; Associates or its members.
                </p>
                <p>
                  The content of this website is for informational purposes only and should not be interpreted as soliciting or advertising. Nothing on this website constitutes legal or professional advice, and no lawyer-client or professional relationship is created by accessing it or by transmitting any information through it.
                </p>
                <p>
                  Shivoham &amp; Associates is not liable for any consequence of any action taken by the user relying on material or information published on this website. In cases where the user has any legal issue, the user must in all cases seek independent legal advice.
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
