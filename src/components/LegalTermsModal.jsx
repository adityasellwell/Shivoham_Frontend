import React, { useState, useEffect } from 'react';
import { X, Lock, FileText } from 'lucide-react';

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
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl max-h-[88vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-800 dark:text-slate-100 animate-scaleUp">
        
        {/* Modal Header - Clean Title as shown in reference design */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Terms and conditions
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Shivoham &amp; Associates Legal Terms &amp; Privacy Policy Notice
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 px-6 pt-3 shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 py-2.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 rounded-t-xl shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 py-2.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition cursor-pointer ${
              activeTab === 'terms'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 rounded-t-xl shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Use &amp; Engagement</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 overflow-y-auto leading-relaxed grow">
          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-900 dark:text-indigo-200 text-xs">
                <strong className="font-bold block mb-0.5">DPDP Act, 2023 &amp; DPDP Rules, 2025 Notice</strong>
                Shivoham &amp; Associates operates as a Data Fiduciary. By submitting your contact and business details through this quote estimator, you consent to our collection and lawful processing of this data.
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">1. Who We Are (Data Fiduciary)</h4>
                <p>
                  <strong>Shivoham &amp; Associates</strong> is a law practice headquartered in New Delhi, India. Contact for privacy inquiries: <code className="text-indigo-600 dark:text-indigo-400 font-semibold">advocate@shivoham.biz</code>.
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
                  Inquiry data is retained for up to 180 days before secure deletion. Request access or erasure by emailing <code className="text-indigo-600 dark:text-indigo-400 font-semibold">grievance@shivoham.biz</code>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs">
                <strong className="font-bold block mb-0.5">Bar Council of India • Rule 36 Mandatory Notice</strong>
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
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          {/* Checkbox */}
          <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <span>I have read and agree to the Terms &amp; Conditions</span>
          </label>

          {/* Action Buttons: Decline & Accept (No Print button) */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 font-bold text-xs transition cursor-pointer"
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
              className="px-7 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Accept
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
