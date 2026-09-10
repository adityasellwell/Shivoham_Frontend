import React, { useState, useEffect } from 'react';
import { Scale, ShieldCheck } from 'lucide-react';

export default function BarCouncilDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    // Rendered client-side after load so search engine bots do not index it as primary page content
    const accepted = sessionStorage.getItem('bci_disclaimer_agreed');
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('bci_disclaimer_agreed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-800 dark:text-slate-100 transform transition-all duration-300 scale-100">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#052E1F] via-[#0B4619] to-[#052E1F] px-6 py-5 sm:px-8 sm:py-6 text-white border-b border-yellow-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-300 shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-300 block">
                Bar Council of India • Rule 36 Compliance
              </span>
              <h2 id="disclaimer-title" className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
                Website Disclaimer &amp; Acknowledgement
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 max-h-[60vh] overflow-y-auto">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-medium">
            <strong>The Bar Council of India</strong> does not permit advertisement or solicitation by advocates in any form or manner.
          </div>

          <p>
            By accessing this website, <strong>www.shivoham.biz</strong>, you acknowledge and confirm that you are seeking information relating to <strong>Shivoham &amp; Associates</strong> of your own accord and that there has been no form of solicitation, advertisement or inducement by Shivoham &amp; Associates or its members.
          </p>

          <p>
            The content of this website is for informational purposes only and should not be interpreted as soliciting or advertising. Nothing on this website constitutes legal or professional advice, and no lawyer-client or professional relationship is created by accessing it or by transmitting any information through it.
          </p>

          <p>
            Shivoham &amp; Associates is not liable for any consequence of any action taken by the user relying on material or information published on this website. In cases where the user has any legal issue, the user must in all cases seek independent legal advice.
          </p>
        </div>

        {/* Footer Actions with Checkbox */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <label className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 select-none">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer shrink-0"
            />
            <span>I confirm that I am seeking this information voluntarily under BCI guidelines.</span>
          </label>

          <button
            type="button"
            disabled={!agreed}
            onClick={handleAgree}
            id="agree-bci-disclaimer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-sm tracking-wide bg-[#052E1F] hover:bg-[#0B4619] text-yellow-300 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            I AGREE
          </button>
        </div>
      </div>
    </div>
  );
}
