import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  FileText, 
  AlertTriangle, 
  Scale, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  UserCheck, 
  Database, 
  Calendar, 
  ExternalLink,
  Info,
  RotateCcw,
  AlertCircle,
  Clock,
  ChevronRight,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';

export default function Legal({ defaultTab = 'disclaimer' }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    if (location.pathname.includes('privacy')) {
      setActiveTab('privacy');
    } else if (location.pathname.includes('terms')) {
      setActiveTab('terms');
    } else if (location.pathname.includes('refund')) {
      setActiveTab('refund');
    } else {
      setActiveTab('disclaimer');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'disclaimer') navigate('/disclaimer');
    else if (tabId === 'privacy') navigate('/privacy-policy');
    else if (tabId === 'terms') navigate('/terms-and-conditions');
    else if (tabId === 'refund') navigate('/refund-policy');
  };

  const tabs = [
    { id: 'disclaimer', label: 'Entry Disclaimer', icon: AlertTriangle, badge: 'Bar Council' },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock, badge: 'DPDP 2023' },
    { id: 'terms', label: 'Terms and Conditions', icon: FileText, badge: '19 Clauses' },
    { id: 'refund', label: 'Return and Refund Policy', icon: RotateCcw, badge: 'Direct Fees' },
  ];

  const privacySections = [
    { id: 'priv-1', label: '1. Who we are' },
    { id: 'priv-2', label: '2. What we collect' },
    { id: 'priv-3', label: '3. Why we process' },
    { id: 'priv-4', label: '4. Consent' },
    { id: 'priv-5', label: '5. Who we share with' },
    { id: 'priv-6', label: '6. Retention' },
    { id: 'priv-7', label: '7. Your Rights' },
    { id: 'priv-8', label: '8. Security' },
    { id: 'priv-9', label: '9. Children\'s Data' },
    { id: 'priv-10', label: '10. Cookies' },
    { id: 'priv-11', label: '11. Anti-Fraud' },
    { id: 'priv-12', label: '12. Grievance Redressal' },
    { id: 'priv-13', label: '13. Changes' },
    { id: 'priv-14', label: '14. Contact' },
  ];

  const termsSections = [
    { id: 'term-1', label: '1. Disclaimer & Solicitation' },
    { id: 'term-2', label: '2. Scope of Website' },
    { id: 'term-3', label: '3. No Attorney-Client Privilege' },
    { id: 'term-4', label: '4. Non-Provision of Regulated Services' },
    { id: 'term-5', label: '5. IP & Corporate Practice' },
    { id: 'term-6', label: '6. Conflict of Interest' },
    { id: 'term-7', label: '7. Refusal / Discontinuance' },
    { id: 'term-8', label: '8. Client Obligations & KYC' },
    { id: 'term-9', label: '9. Professional Fees & Taxes' },
    { id: 'term-10', label: '10. Third-Party Costs' },
    { id: 'term-11', label: '11. Limitation of Liability' },
    { id: 'term-12', label: '12. Indemnity' },
    { id: 'term-13', label: '13. Intellectual Property' },
    { id: 'term-14', label: '14. Confidentiality' },
    { id: 'term-15', label: '15. Termination' },
    { id: 'term-16', label: '16. Governing Law & Jurisdiction' },
    { id: 'term-17', label: '17. Amendments' },
    { id: 'term-18', label: '18. Grievance & Complaints' },
    { id: 'term-19', label: '19. Entire Agreement' },
  ];

  const refundSections = [
    { id: 'ref-scope', label: 'Scope of Policy' },
    { id: 'ref-1', label: '1. Three Fee Components' },
    { id: 'ref-2', label: '2. Professional Work' },
    { id: 'ref-4', label: '4. Non-Refundable Cases' },
    { id: 'ref-5', label: '5. Where We Refund' },
    { id: 'ref-6', label: '6. Consultation Fees' },
    { id: 'ref-7', label: '7. Renewals & Lapses' },
    { id: 'ref-8', label: '8. Taxes on Refunds' },
    { id: 'ref-9', label: '9. Request Procedure' },
    { id: 'ref-10', label: '10. Grievance / Complaints' },
    { id: 'ref-11', label: '11. Governing Law' },
  ];


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-12 sm:py-16 px-4 text-center relative overflow-hidden border-b border-[#0B4619]/10">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-xs font-bold uppercase tracking-wider text-[#0B4619]">
              <Scale className="w-3.5 h-3.5 text-[#0B4619]" /> Legal &amp; Regulatory Framework
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight text-[#0B4619]">
            {activeTab === 'disclaimer' && 'Bar Council Entry Disclaimer'}
            {activeTab === 'privacy' && 'Privacy Policy'}
            {activeTab === 'terms' && 'Terms and Conditions'}
            {activeTab === 'refund' && 'Return and Refund Policy'}
          </h1>
          <p className="text-[#0B4619]/80 font-medium max-w-2xl mx-auto text-sm sm:text-base">
            Shivoham &amp; Associates • Professional Intellectual Property, Corporate Incorporation &amp; Regulatory Practice
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5 mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer ${
                    isActive
                      ? 'bg-[#0B4619] text-white shadow-md ring-2 ring-[#0B4619]/20'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-300' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                      isActive ? 'bg-emerald-800 text-emerald-200' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ENTRY DISCLAIMER (BAR COUNCIL) */}
        {/* ========================================================================= */}
        {activeTab === 'disclaimer' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900/70 p-6 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
              
              {/* Statutory Badge */}
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 flex items-start gap-3.5">
                <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm">
                  <strong className="block font-bold text-amber-900 dark:text-amber-300 text-base">
                    Bar Council of India Rule 36 Mandatory Compliance
                  </strong>
                  <p>
                    The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. This website is strictly informational and intended for voluntary user access.
                  </p>
                </div>
              </div>

              {/* Exact Bar Council Entry Text */}
              <div className="border-l-4 border-[#0B4619] dark:border-yellow-400 pl-6 py-2 space-y-4">
                <h2 className="font-display font-black text-2xl text-slate-900 dark:text-white">
                  ENTRY DISCLAIMER &amp; DECLARATION
                </h2>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                  The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, <strong>www.shivoham.biz</strong>, you acknowledge and confirm that you are seeking information relating to <strong>Shivoham &amp; Associates</strong> of your own accord and that there has been no form of solicitation, advertisement or inducement by Shivoham &amp; Associates or its members.
                </p>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200">
                  The content of this website is for informational purposes only and should not be interpreted as soliciting or advertising. Nothing on this website constitutes legal or professional advice, and no lawyer-client or professional relationship is created by accessing it or by transmitting any information through it.
                </p>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200">
                  Shivoham &amp; Associates is not liable for any consequence of any action taken by the user relying on material or information published on this website. In cases where the user has any legal issue, the user must in all cases seek independent legal advice.
                </p>
              </div>

              {/* Key Practical Takeaways */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <Shield className="w-4 h-4 text-emerald-600" /> Voluntary Inquiry
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Visitor initiates contact seeking general knowledge about regulatory, IP, and compliance procedures.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <AlertCircle className="w-4 h-4 text-amber-600" /> No Attorney-Client Privilege
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Mere electronic browsing or enquiry submission does not establish formal legal representation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <Lock className="w-4 h-4 text-emerald-600" /> Zero Online Payment
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    We do not collect payments or process transactions via this website, maintaining strict professional compliance.
                  </p>
                </div>
              </div>

              {/* Office Contact Strip */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  Flignite, Ground Floor, Parasmani Commercial Complex, Dadar East, Mumbai – 400014
                </span>
                <a href="mailto:diptish@shivoham.biz" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  diptish@shivoham.biz
                </a>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PRIVACY POLICY (DPDP 2023 & IT ACT 2000) */}
        {/* ========================================================================= */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            {/* Quick Navigation / Table of Contents Chips */}
            <div className="bg-white dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2 sticky top-20 z-20 backdrop-blur-md shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Jump to:</span>
              {privacySections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500/15 hover:text-emerald-700 dark:hover:text-emerald-400 transition"
                >
                  {sec.label}
                </a>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900/70 p-6 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
              
              {/* Header Metadata */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    DPDP Act, 2023 &amp; IT Act, 2000 Compliant
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                  Shivoham &amp; Associates Privacy Policy
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  This Policy explains how we collect, use, share, retain and protect personal data when you visit this website, submit an enquiry, or engage us for professional services. It is issued in accordance with the <strong>Digital Personal Data Protection Act, 2023</strong> and the rules made under it, and with the <strong>Information Technology Act, 2000</strong> and the rules made under it.
                </p>
              </div>

              {/* 1. Who we are */}
              <section id="priv-1" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Building2 className="w-4 h-4" /> Section 1
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  1. Who we are
                </h2>
                <p>
                  Shivoham &amp; Associates ("we", "us", "the Firm") is a professional services firm with its office at Flignite, Ground Floor, Parasmani Commercial Complex, Dadar East, Mumbai – 400014. Maharashtra. We provide intellectual property, business incorporation, licensing and regulatory advisory services.
                </p>
                <p>
                  This Policy explains how we collect, use, share, retain and protect personal data when you visit this website, submit an enquiry, or engage us for professional services. It is issued in accordance with the Digital Personal Data Protection Act, 2023 and the rules made under it, and with the Information Technology Act, 2000 and the rules made under it.
                </p>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-sm font-medium flex items-start gap-3">
                  <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    For the purposes of the Digital Personal Data Protection Act, 2023, we act as a <strong>Data Fiduciary</strong> in respect of the personal data described below, and you are the <strong>Data Principal</strong>.
                  </div>
                </div>
              </section>

              {/* 2. What we collect */}
              <section id="priv-2" className="space-y-5 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Database className="w-4 h-4" /> Section 2
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  2. What we collect
                </h2>
                
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-emerald-600" /> Information you give us directly
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700 dark:text-slate-300">
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

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" /> Information required to deliver a service you have engaged us for
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Statutory filings require prescribed documents. Depending on the service, these may include PAN, Aadhaar, passport, photographs, address proof, bank details, financial statements, incorporation documents, and the specific technical or commercial material relevant to the filing, such as artwork, specifications or product information.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                    We collect these only when you have engaged us and only to the extent the relevant authority or statute requires.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-600" /> Information collected automatically
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    IP address, browser and device type, pages visited, referring URL, and time spent. This is collected through server logs and, if enabled, analytics tools, and is used in aggregate to understand and improve site performance.
                  </p>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-950 dark:text-amber-200 space-y-3">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-amber-900 dark:text-amber-300">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" /> What we do not collect
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>
                      <strong>We do not knowingly collect personal data from children.</strong>
                    </li>
                    <li>
                      <strong>No payment through this website:</strong> We do not collect any payment through this website. This website has no payment gateway, shopping cart or checkout. We do not collect card numbers, UPI IDs, net banking credentials or any other payment credentials through this website, and you should never enter them here. Fees, where payable, are invoiced separately after an engagement is confirmed in writing, and are paid directly to us by bank transfer or other agreed mode.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. Why we process your data */}
              <section id="priv-3" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4" /> Section 3
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  3. Why we process your data
                </h2>
                
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#052E1F] text-white text-xs font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-4 sm:px-6 sm:py-4 border-b border-emerald-900 w-1/3">Purpose</th>
                        <th className="p-4 sm:px-6 sm:py-4 border-b border-emerald-900">What this covers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">Responding to your enquiry</td>
                        <td className="p-4 sm:px-6">Assessing your requirement, preparing a proposal or checklist, and contacting you</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">Delivering engaged services</td>
                        <td className="p-4 sm:px-6">Preparing, executing and filing applications with the relevant authority</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">Statutory and regulatory compliance</td>
                        <td className="p-4 sm:px-6">Client identification, record-keeping, tax and professional obligations</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">Service communications</td>
                        <td className="p-4 sm:px-6">Status updates, document requests, deadline and renewal reminders</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">Fee administration</td>
                        <td className="p-4 sm:px-6">Raising invoices, recording payments received offline, and accounting</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">Legal purposes</td>
                        <td className="p-4 sm:px-6">Establishing, exercising or defending legal claims</td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">Website operation and security</td>
                        <td className="p-4 sm:px-6">Maintaining, securing and improving this website</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-sm font-semibold flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>We do not sell your personal data. We do not share it with advertisers or data brokers.</span>
                </div>
              </section>

              {/* 4. Consent */}
              <section id="priv-4" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" /> Section 4
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  4. Consent, and processing without consent
                </h2>
                <p>
                  Where consent is required, we process your personal data on the basis of the consent you give when you submit a form, engage us, or provide documents for a filing. You may withdraw your consent at any time by writing to <a href="mailto:diptish@shivoham.biz" className="text-emerald-700 dark:text-emerald-400 underline font-bold hover:text-emerald-600">diptish@shivoham.biz</a>.
                </p>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-3">
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Please note two consequences of withdrawal:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>
                      Withdrawal does not affect the lawfulness of processing carried out before withdrawal.
                    </li>
                    <li>
                      Where the data is necessary to perform a service you have engaged us for, withdrawal may make it impossible for us to continue, and in respect of filings already submitted to an authority, the data will already be on the public or official record and outside our control.
                    </li>
                  </ul>
                </div>

                <p className="text-sm leading-relaxed">
                  We may also process personal data without separate consent where the law permits or requires it, including for compliance with a legal obligation, for court or authority proceedings, and for purposes for which you have voluntarily provided data and have not indicated an objection.
                </p>
              </section>

              {/* 5. Who we share it with */}
              <section id="priv-5" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <ExternalLink className="w-4 h-4" /> Section 5
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  5. Who we share it with
                </h2>
                <p>We share personal data only as follows:</p>

                <div className="space-y-3">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-sm">
                    <strong className="text-slate-900 dark:text-white font-bold">• Government authorities and portals —</strong> the Trade Marks Registry, Patent Office, Copyright Office, MCA, GST Network, DGFT, FSSAI, the Charity Commissioner, state and municipal authorities and similar bodies, as required to make the filing you have engaged us for. A significant part of the information filed with these authorities becomes part of a public register. For example, a trademark application, a company incorporation and an FSSAI licence are all publicly searchable. This is inherent to the filing and outside our control.
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-sm">
                    <strong className="text-slate-900 dark:text-white font-bold">• Professionals we work with —</strong> chartered accountants, company secretaries, advocates, certification bodies, laboratories and certifying authorities, where their involvement is necessary for the service, and subject to confidentiality obligations.
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-sm">
                    <strong className="text-slate-900 dark:text-white font-bold">• Service providers —</strong> hosting, email and IT support providers, who process data on our instructions and under contract.
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-sm">
                    <strong className="text-slate-900 dark:text-white font-bold">• Where required by law —</strong> in response to a lawful order, notice or requirement of a court, authority or regulator.
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
                  We do not transfer personal data outside India except where a service provider we use hosts data outside India, and then only in accordance with applicable law and any restrictions notified by the Central Government.
                </p>
              </section>

              {/* 6. How long we keep it */}
              <section id="priv-6" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Calendar className="w-4 h-4" /> Section 6
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  6. How long we keep it
                </h2>
                
                <ul className="space-y-3 text-sm">
                  <li className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white">• Enquiries that do not become engagements —</strong> retained for a limited period to respond and to maintain a record of the contact, and then deleted or anonymised.
                  </li>
                  <li className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white">• Engagement records —</strong> retained for the period we are required to retain professional, tax and statutory records, and for so long as necessary to establish, exercise or defend legal claims. Professional service records generally require retention for several years after the engagement ends, and in the case of IP and corporate filings a longer period is prudent because the filing itself has a long life.
                  </li>
                  <li className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white">• Material filed with an authority —</strong> remains on that authority's record independently of our retention. We cannot delete it.
                  </li>
                </ul>

                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Where we are no longer required to retain data and no purpose remains, we erase it or anonymise it.
                </p>
              </section>

              {/* 7. Your rights */}
              <section id="priv-7" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" /> Section 7
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  7. Your rights
                </h2>
                <p className="text-sm">Subject to the Digital Personal Data Protection Act, 2023, you have the right to:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">• Access</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      obtain a summary of the personal data we process about you and the processing activities undertaken
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">• Correction and completion</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      have inaccurate or incomplete data corrected or completed
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">• Erasure</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      have your personal data erased, except where retention is required by law or for a legal claim
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">• Withdraw consent</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      at any time, subject to Clause 4
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">• Nominate</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      nominate another individual to exercise your rights in the event of your death or incapacity
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">• Grievance redressal</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      raise a grievance with us before approaching the Data Protection Board of India
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  To exercise any of these, write to <a href="mailto:diptish@shivoham.biz" className="text-emerald-700 dark:text-emerald-400 underline font-bold">diptish@shivoham.biz</a>. We may ask you to verify your identity before acting on a request, and we will respond within the period prescribed under applicable law.
                </div>
              </section>

              {/* 8. Security */}
              <section id="priv-8" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" /> Section 8
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  8. Security
                </h2>
                <p className="text-sm leading-relaxed">
                  We apply reasonable security safeguards appropriate to the nature of the data, including access controls, restriction of access to those who need it, secure storage of documents, and confidentiality obligations on our personnel and professional associates.
                </p>
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-sm space-y-2">
                  <p className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" /> Important security notice on electronic transmission:
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Please note: no method of transmission or storage is completely secure. Email and messaging applications in particular are not secure channels. If you wish to send sensitive documents by a more secure route, please ask us and we will arrange one. You send documents by email or messaging application at your own risk.
                  </p>
                </div>
              </section>

              {/* 9, 10, 11, 12: Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <section id="priv-9" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    9. Cookies and analytics
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    This website uses cookies necessary for it to function, and may use analytics cookies to understand how it is used. You can control cookies through your browser settings, though disabling some cookies may affect how the site works.
                  </p>
                </section>

                <section id="priv-10" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    10. Third-party links
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    This website links to government portals and other third-party sites. We do not control those sites and are not responsible for their content or their privacy practices. Their policies apply when you visit them.
                  </p>
                </section>

                <section id="priv-11" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    11. Children
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our services are directed at businesses and adults. We do not knowingly process the personal data of a child. If you believe a child has provided us with personal data, please write to <a href="mailto:diptish@shivoham.biz" className="text-emerald-700 dark:text-emerald-400 underline font-semibold">diptish@shivoham.biz</a> and we will delete it.
                  </p>
                </section>

                <section id="priv-12" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    12. Changes to this Policy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    We may update this Policy. The current version, with its effective date, will always be available on this page. Material changes will be notified on this website.
                  </p>
                </section>
              </div>

              {/* 13. Grievance Officer */}
              <section id="priv-13" className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#052E1F] via-[#0B4619] to-[#052E1F] text-white space-y-5 shadow-lg scroll-mt-28 border border-emerald-800/40">
                <div className="flex items-center gap-2.5 text-yellow-300">
                  <Shield className="w-6 h-6 shrink-0" />
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                    13. Grievance Officer
                  </h2>
                </div>
                
                <p className="text-sm text-white/90 leading-relaxed">
                  Any question, concern or complaint about how we handle personal data should be addressed to:
                </p>
                
                <div className="p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3 text-sm">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-black tracking-wider uppercase mb-1">
                      Designated Grievance Officer
                    </span>
                    <p className="font-extrabold text-lg sm:text-xl text-yellow-300 tracking-tight">
                      SHRI DIPTISH KHOT
                    </p>
                    <p className="text-white font-medium text-sm">Grievance Officer, Shivoham &amp; Associates</p>
                  </div>
                  
                  <div className="flex items-start gap-2.5 text-white/80 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-yellow-300 shrink-0 mt-0.5" />
                    <span>
                      Flignite, Ground Floor, Parasmani Commercial Complex, Dadar East, Mumbai – 400014. Maharashtra
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold">
                    <a 
                      href="mailto:diptish@shivoham.biz" 
                      className="flex items-center gap-2 hover:text-yellow-300 underline transition"
                    >
                      <Mail className="w-4 h-4 text-yellow-300" />
                      diptish@shivoham.biz
                    </a>
                    <a 
                      href="tel:9167963888" 
                      className="flex items-center gap-2 hover:text-yellow-300 underline transition"
                    >
                      <Phone className="w-4 h-4 text-yellow-300" />
                      9167963888
                    </a>
                  </div>
                </div>

                <p className="text-xs text-white/75 leading-relaxed">
                  We will acknowledge and address grievances within the period prescribed under applicable law. If you are not satisfied with our response, you may approach the <strong>Data Protection Board of India</strong>.
                </p>
              </section>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: TERMS OF USE & ENGAGEMENT (FULL 19 CLAUSES) */}
        {/* ========================================================================= */}
        {activeTab === 'terms' && (
          <div className="space-y-6">
            
            {/* Quick Navigation / Table of Contents Chips */}
            <div className="bg-white dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2 sticky top-20 z-20 backdrop-blur-md shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Quick Jump:</span>
              {termsSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-yellow-400/20 hover:text-amber-800 dark:hover:text-yellow-300 transition"
                >
                  {sec.label}
                </a>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900/70 p-6 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
              
              {/* Header Metadata */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <span className="px-3.5 py-1.5 rounded-full bg-yellow-500/10 text-amber-800 dark:text-yellow-300 border border-yellow-500/20 font-bold">
                    Comprehensive 19-Clause Standard
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Jurisdiction: Mumbai, Maharashtra
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                  Shivoham &amp; Associates Terms of Use &amp; Engagement
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  These Terms govern your access to and use of this website, and set forth the contractual terms applicable to professional engagements undertaken by Shivoham &amp; Associates.
                </p>
              </div>

              {/* Clause 1: Disclaimer and no solicitation */}
              <section id="term-1" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4" /> Clause 1
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  1. Disclaimer and no solicitation
                </h2>
                <p>
                  The Bar Council of India does not permit advertisement or solicitation by advocates. By accessing this website you confirm that you are seeking information about <strong>SHIVOHAM &amp; ASSOCIATES</strong> of your own accord, and that no form of solicitation, advertisement, inducement or invitation has been made by the Firm or its members.
                </p>
                <p>
                  The content of this website is provided for general informational purposes only. It is not, and must not be treated as, legal, tax, financial or professional advice, or as an offer to provide professional services.
                </p>
              </section>

              {/* Clause 2: No professional relationship */}
              <section id="term-2" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" /> Clause 2
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  2. No professional relationship is created by this website
                </h2>
                <p>
                  Browsing this website, downloading material from it, submitting an enquiry, requesting a quote, booking a consultation, or corresponding with us does not create a lawyer-client, advisory or other professional relationship between you and the Firm.
                </p>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-sm">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    A professional relationship arises only when:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
                    <li>We have accepted the engagement in writing,</li>
                    <li>Completed our client identification and conflict checks, and</li>
                    <li>You have accepted our written engagement terms.</li>
                  </ul>
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                    Until all of those have occurred, you should not act, or refrain from acting, in reliance on anything we have said.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs sm:text-sm font-medium">
                  <strong>Notice regarding unsolicited material:</strong> Do not send us confidential or privileged information before an engagement is confirmed in writing. Information sent before that point may not be treated as confidential and may not prevent us from acting for another party.
                </div>
              </section>

              {/* Clause 3: Accuracy of website content */}
              <section id="term-3" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4" /> Clause 3
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  3. Accuracy of website content
                </h2>
                <p>
                  The information on this website concerns Indian statutes, rules, fees, thresholds and procedures that change frequently, sometimes without notice and sometimes with retrospective effect. While we take reasonable care to keep the content current and to date-stamp it, we give no warranty that it is accurate, complete or current at the time you read it.
                </p>
                <p>
                  You must not act on any information on this website without obtaining specific advice on your own facts. We accept no liability for any action taken, or not taken, in reliance on this website.
                </p>
              </section>

              {/* Clause 4: Scope of our services */}
              <section id="term-4" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Building2 className="w-4 h-4" /> Clause 4
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  4. Scope of our services
                </h2>
                <p>
                  We provide professional and advisory services in relation to intellectual property filings, business incorporation, licensing and regulatory registrations, and related compliance.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-sm">
                  <strong>Territorial Limitation:</strong> Our services are limited to Indian law and Indian regulatory procedure unless expressly agreed otherwise in writing. Where a matter involves foreign law — including international trademark or patent filings, CE marking, or foreign incorporation — we act as a coordinator and our advice does not extend to the law of that jurisdiction. Advice on foreign law must be taken from a qualified practitioner in that jurisdiction.
                </div>
              </section>

              {/* Clause 5: No guarantee of outcome (Prominent Callout) */}
              <section id="term-5" className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 text-slate-900 dark:text-slate-100 space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-black text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  Clause 5 • Essential Disclaimers on Statutory Outcomes
                </div>
                <h2 className="font-display font-black text-2xl text-amber-950 dark:text-white">
                  5. No guarantee of outcome
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-amber-950 dark:text-amber-100">
                  Applications for registration, licensing, certification and approval are decided by government authorities, registries and certification bodies, applying their own discretion, standards and timelines. We are not able to control, direct or guarantee their decisions.
                </p>

                <div className="bg-white/70 dark:bg-slate-900/80 p-5 rounded-2xl border border-amber-500/20 space-y-2 text-sm text-slate-800 dark:text-slate-200">
                  <p className="font-bold text-slate-900 dark:text-white">Accordingly, we do not warrant or guarantee:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>That any application will be accepted, registered, granted or approved</li>
                    <li>That any application will be free from objection, examination report, opposition, query, inspection finding or refusal</li>
                    <li>Any particular timeline for a decision, since published or customary timelines are indicative only and are frequently exceeded</li>
                    <li>That a third party will not oppose, challenge, rectify or infringe</li>
                  </ul>
                </div>

                <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-medium">
                  Objections, examination reports, oppositions and queries are normal stages of these statutory processes and do not indicate any deficiency in our services. Any estimate of time or likelihood we give is an opinion based on experience, not an assurance.
                </p>
              </section>

              {/* Clause 6: Your responsibilities */}
              <section id="term-6" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" /> Clause 6
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  6. Your responsibilities
                </h2>
                <p className="text-sm">You agree that:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>
                    All information, documents and instructions you provide are true, accurate, complete and not misleading, and you will inform us promptly if anything changes;
                  </li>
                  <li>
                    You are entitled to provide the documents and material you give us, including artwork, specifications, content and identity documents belonging to others;
                  </li>
                  <li>
                    You will provide documents, signatures, approvals and payments within the time we request, since statutory deadlines are strict and are not extended for delay on your part;
                  </li>
                  <li>
                    You will respond to our communications, particularly where an authority has issued a report, notice or query with a fixed deadline;
                  </li>
                  <li>
                    You will not ask us to make any statement or filing that is false, misleading or unlawful.
                  </li>
                </ul>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  We act on the information you provide and are entitled to rely on it without independent verification. We are not liable for any consequence arising from information or documents that are inaccurate, incomplete, misleading or provided late, including the refusal, abandonment or lapse of an application.
                </div>
              </section>

              {/* Clause 7: Client identification and right to decline */}
              <section id="term-7" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" /> Clause 7
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  7. Client identification and right to decline
                </h2>
                <p>
                  We may require identification and verification documents before accepting an engagement, and we may decline or discontinue an engagement where identification is not satisfactorily provided, where a conflict of interest exists or arises, where we are asked to act unlawfully or improperly, or where fees remain unpaid.
                </p>
                <p>
                  Where we discontinue an engagement, we will do so in a manner consistent with our professional obligations and will inform you of any imminent deadline.
                </p>
              </section>

              {/* Clause 8: Fees, government fees and taxes + CAUTION AGAINST FRAUD */}
              <section id="term-8" className="space-y-5 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <FileSpreadsheet className="w-4 h-4" /> Clause 8
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  8. Fees, government fees and taxes
                </h2>
                
                <div className="space-y-3 text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white font-bold">• Professional fees:</strong> As set out in our written proposal or engagement letter.
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white font-bold">• Government fees &amp; statutory charges:</strong> Government fees, statutory charges and third-party costs — including registry fees, stamp duty, testing and certification charges, notary and courier costs — are payable in addition and are collected from you and passed through to the relevant authority or provider. They are not our income and are not refundable by us once paid.
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white font-bold">• Taxes &amp; Out-of-Scope Work:</strong> Applicable taxes are payable in addition at the prevailing rate. Fees quoted are based on the scope described at the time of quotation. Additional work arising from objections, oppositions, hearings, resubmissions, changes in scope or changes in law is chargeable separately and will be quoted before we undertake it.
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white font-bold">• Invoicing Offline:</strong> We may require fees in advance and may decline to commence or continue work until they are received. No payment is collected through this website. This website does not process payments and has no checkout facility. Fees become payable only after an engagement has been confirmed in writing, and are paid against an invoice issued by us, directly to the bank account stated on that invoice.
                  </div>
                </div>

                {/* PROMINENT FRAUD WARNING CALLOUT */}
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-rose-900 via-rose-950 to-slate-950 text-white border-2 border-rose-500/50 shadow-xl space-y-3">
                  <div className="flex items-center gap-2.5 text-rose-300">
                    <AlertTriangle className="w-6 h-6 shrink-0" />
                    <h3 className="font-display font-black text-lg sm:text-xl tracking-wide uppercase">
                      Caution Against Fraud &amp; Impersonation
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-rose-100 leading-relaxed">
                    Because we <strong>never collect payment through this website</strong>, any page, link, form, QR code or message that appears to invite payment through or on behalf of this website is not ours. We will never request payment by a channel other than an invoice issued from our own email domain (<code className="text-yellow-300 bg-white/10 px-1.5 py-0.5 rounded">@shivoham.biz</code>), and we will never request payment to an account other than the one stated on that invoice.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold">
                    <span className="text-yellow-300">
                      If you receive any suspicious communication, do not pay. Contact us immediately:
                    </span>
                    <a href="tel:9167963888" className="px-3.5 py-1.5 rounded-xl bg-yellow-400 text-slate-950 hover:bg-yellow-300 font-bold transition flex items-center gap-1.5">
                      <Phone className="w-4 h-4" /> 9167963888
                    </a>
                  </div>
                  <p className="text-[11px] text-rose-200/80 pt-1">
                    We accept no liability for any payment made to a third party in response to a fraudulent or impersonating communication.
                  </p>
                </div>
              </section>

              {/* Clause 9: Limitation of liability */}
              <section id="term-9" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4" /> Clause 9
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  9. Limitation of liability
                </h2>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  To the maximum extent permitted by law:
                </p>
                
                <div className="space-y-3 text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white font-bold">• Cap on Liability:</strong> Our total aggregate liability arising out of or in connection with any engagement, whether in contract, tort, statute or otherwise, is limited to the professional fees actually received by us for the specific service giving rise to the claim, excluding government fees, statutory charges, third-party costs and taxes.
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white font-bold">• Consequential Losses Excluded:</strong> We are not liable for indirect, consequential, special or incidental loss, or for loss of profit, revenue, business, goodwill, opportunity or anticipated savings.
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white font-bold">• Third-Party &amp; Authority Events:</strong> We are not liable for: decisions, delays, errors, objections or refusals of any government authority, registry or certification body; downtime, malfunction, data loss or error on any government portal; changes in law, rules, fees or procedure, including retrospective changes; acts or omissions of a third party, including opposition or infringement by another person; or loss arising from inaccurate, incomplete or delayed information from you.
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
                  Nothing in this clause excludes or limits liability which cannot lawfully be excluded or limited, including liability for fraud or for wilful misconduct.
                </p>
              </section>

              {/* Clause 10: Confidentiality */}
              <section id="term-10" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" /> Clause 10
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  10. Confidentiality
                </h2>
                <p>
                  We will keep confidential the information you provide in the course of an engagement, and will not disclose it except: to authorities and portals as necessary for the filing; to professionals and service providers assisting on the matter, under equivalent obligations; where you authorise disclosure; or where disclosure is required by law or by a court, authority or professional body.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Information that is or becomes public — including material entered on a public register through a filing — is not confidential.
                </p>
              </section>

              {/* Clause 11: Communications */}
              <section id="term-11" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Mail className="w-4 h-4" /> Clause 11
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  11. Communications
                </h2>
                <p>
                  You consent to us communicating with you by email, telephone and messaging applications, including WhatsApp, at the contact details you provide, for the purposes of the engagement and for deadline, renewal and compliance reminders.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  You acknowledge that these channels are not secure and that we are not responsible for interception, non-delivery, delay or corruption in transit. It is your responsibility to keep your contact details current and to check for our communications, particularly where a deadline is approaching.
                </div>
              </section>

              {/* Clause 12: Intellectual property in this website */}
              <section id="term-12" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" /> Clause 12
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  12. Intellectual property in this website
                </h2>
                <p>
                  All content on this website — text, structure, graphics, layout, logos and compilations — is owned by or licensed to the Firm and is protected under applicable law. You may view and print content for your own personal or internal business use. You may not reproduce, republish, distribute, commercially exploit or create derivative works from it without our prior written permission.
                </p>
                <p className="text-sm">
                  All trademarks, logos, product and brand names belong to their respective owners. Any company, product and service names mentioned on this website are for identification purposes only. The use of these names, logos or brands does not imply any endorsement.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Work product prepared for you during an engagement is addressed in the engagement letter. Documents prepared for you may not be relied upon by any third party without our written consent.
                </p>
              </section>

              {/* Clause 13 to 17: Multi-column grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <section id="term-13" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    13. Acceptable use
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    You may not use this website to transmit unlawful, defamatory, infringing or harmful material; attempt unauthorised access to the website or its systems; introduce malicious code; scrape, harvest or extract data by automated means; or interfere with its operation or security. We reserve the right to restrict access where we reasonably believe this clause has been breached.
                  </p>
                </section>

                <section id="term-14" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    14. Third-party links
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    This website links to government portals and third-party resources for convenience. We do not endorse and are not responsible for their content, accuracy or availability.
                  </p>
                </section>

                <section id="term-15" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    15. Force majeure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    We are not liable for any failure or delay in performance caused by circumstances beyond our reasonable control, including government or portal outage, change in law or procedure, strike, natural event, epidemic, power or network failure, or civil disturbance.
                  </p>
                </section>

                <section id="term-16" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    16. Amendment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    We may amend these Terms at any time. The current version, with its effective date, will be published on this page. Your continued use of this website after publication constitutes acceptance.
                  </p>
                </section>
              </div>

              {/* Clause 17 & 18 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <section id="term-17" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    17. Severability and waiver
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    If any provision is held to be invalid or unenforceable, it will be severed and the remaining provisions will continue in full force. Our failure to enforce any provision is not a waiver of it.
                  </p>
                </section>

                <section id="term-18" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    18. Governing law and jurisdiction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    These Terms and any dispute or claim arising out of or in connection with them, this website or any engagement, are governed by the laws of India. The courts at Mumbai, Maharashtra have exclusive jurisdiction.
                  </p>
                </section>
              </div>

              {/* Clause 19: Contact */}
              <section id="term-19" className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#052E1F] via-[#0B4619] to-[#052E1F] text-white space-y-5 shadow-lg scroll-mt-28 border border-emerald-800/40">
                <div className="flex items-center gap-2.5 text-yellow-300">
                  <Building2 className="w-6 h-6 shrink-0" />
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                    19. Official Contact Details
                  </h2>
                </div>
                
                <div className="p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3 text-sm">
                  <div>
                    <p className="font-extrabold text-lg sm:text-xl text-yellow-300 tracking-tight">
                      SHIVOHAM &amp; ASSOCIATES
                    </p>
                    <p className="text-white/80 font-medium text-xs sm:text-sm">Legal, IP &amp; Regulatory Practice</p>
                  </div>
                  
                  <div className="flex items-start gap-2.5 text-white/90 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-yellow-300 shrink-0 mt-0.5" />
                    <span>
                      Flignite, Ground Floor, Parasmani Commercial Complex, Dadar East, Mumbai – 400014. Maharashtra
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold">
                    <a 
                      href="mailto:diptish@shivoham.biz" 
                      className="flex items-center gap-2 hover:text-yellow-300 underline transition"
                    >
                      <Mail className="w-4 h-4 text-yellow-300" />
                      diptish@shivoham.biz
                    </a>
                    <a 
                      href="tel:9167963888" 
                      className="flex items-center gap-2 hover:text-yellow-300 underline transition"
                    >
                      <Phone className="w-4 h-4 text-yellow-300" />
                      9167963888
                    </a>
                  </div>
                </div>
              </section>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: REFUND & CANCELLATION POLICY */}
        {/* ========================================================================= */}
        {activeTab === 'refund' && (
          <div className="space-y-6">
            
            {/* Quick Jump Bar */}
            <div className="bg-white dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2 sticky top-20 z-20 backdrop-blur-md shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Quick Jump:</span>
              {refundSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500/15 hover:text-emerald-700 dark:hover:text-emerald-400 transition"
                >
                  {sec.label}
                </a>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900/70 p-6 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
              
              {/* Header Metadata */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    Professional Services Practice Standard
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                  Shivoham &amp; Associates Refund &amp; Cancellation Policy
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We aim to be clear about refunds before you pay rather than after. Please read this policy carefully alongside our Terms of Use &amp; Engagement.
                </p>
              </div>

              {/* Scope Box */}
              <section id="ref-scope" className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                  <Info className="w-4 h-4 text-emerald-600" /> Scope of this Policy
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>No payment is collected through this website.</strong> This Policy therefore governs fees paid to us directly under a confirmed professional engagement — it is not an e-commerce return policy. It applies from the point at which an engagement is confirmed in writing and a fee is paid to us.
                </p>
              </section>

              {/* 1. The three components of what you pay (Detailed Table) */}
              <section id="ref-1" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <FileSpreadsheet className="w-4 h-4" /> Section 1
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  1. The three components of what you pay
                </h2>
                <p className="text-sm">
                  Understanding the split is essential, because each component is treated very differently under statute and contract:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#052E1F] text-white text-xs font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-4 sm:px-6 sm:py-4 border-b border-emerald-900 w-1/4">Component</th>
                        <th className="p-4 sm:px-6 sm:py-4 border-b border-emerald-900 w-1/2">What it is</th>
                        <th className="p-4 sm:px-6 sm:py-4 border-b border-emerald-900 w-1/4">Refundable?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                          Government / statutory fees
                        </td>
                        <td className="p-4 sm:px-6">
                          Registry, MCA, GST, DGFT, FSSAI, stamp duty and similar charges paid directly to an authority or portal.
                        </td>
                        <td className="p-4 sm:px-6">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20">
                            No (Non-Refundable)
                          </span>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                            These are paid to the government and non-refundable by statute, including where an application is objected to, opposed, refused, abandoned or withdrawn. We cannot recover them and cannot refund them.
                          </p>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                          Third-party costs
                        </td>
                        <td className="p-4 sm:px-6">
                          Certification body charges, laboratory testing, DSC tokens, notary, courier, translation.
                        </td>
                        <td className="p-4 sm:px-6">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20">
                            No (Once incurred)
                          </span>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                            Non-refundable once incurred or committed to the third party.
                          </p>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td className="p-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                          Professional fees
                        </td>
                        <td className="p-4 sm:px-6">
                          Our charge for the professional legal, drafting, and regulatory filing work we perform.
                        </td>
                        <td className="p-4 sm:px-6">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20">
                            No (Subject to Cl. 5)
                          </span>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                            Non-refundable once work commences, except under Clause 5 circumstances.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 2. Fees are for professional work, not for a result */}
              <section id="ref-2" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4" /> Section 2
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  2. Fees are for professional work, not for a result
                </h2>
                <p>
                  Our professional fee covers the preparation, execution and conduct of your matter to a professional standard. It is not contingent on the outcome.
                </p>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs sm:text-sm font-medium">
                  No refund is available on the ground that an application was objected to, opposed, queried, inspected adversely, delayed, refused or rejected by an authority, or that a third party challenged it. These are decisions of statutory authorities or acts of third parties, and as set out in our Terms we do not and cannot guarantee outcomes. Objections and examination reports are a normal stage of statutory processes, not a service failure.
                </div>
              </section>

              {/* 4. Where no refund is available */}
              <section id="ref-4" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" /> Section 4
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  4. Where no refund is available
                </h2>
                <p className="text-sm">For clarity, professional fees are not refundable where:</p>
                
                <div className="space-y-2.5">
                  {[
                    "The application has been filed with the relevant authority",
                    "The outcome is unfavourable, delayed, objected to, opposed or refused",
                    "You fail to provide required documents, signatures or approvals within the time requested, or become unresponsive, and the matter cannot proceed or a deadline lapses as a result",
                    "The information or documents you provided were inaccurate, incomplete or misleading",
                    "You change your mind about the business decision underlying the filing, for example deciding not to proceed with a brand, product or entity",
                    "The service has been completed and delivered",
                    "The engagement is discontinued by us on the grounds set out in Clause 7 of our Terms"
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Where we will refund */}
              <section id="ref-5" className="space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" /> Section 5
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  5. Where we will refund
                </h2>
                <p className="text-sm">
                  We will refund the unearned portion of professional fees, without applying an arbitrary scale, strictly where:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm space-y-1">
                    <p className="font-bold text-emerald-900 dark:text-emerald-300">• Conflict of Interest</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      We are unable to take up or continue the engagement because of a conflict of interest identified by us.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm space-y-1">
                    <p className="font-bold text-emerald-900 dark:text-emerald-300">• Declination attributable to us</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      We decline the engagement after payment for reasons attributable to us.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm space-y-1">
                    <p className="font-bold text-emerald-900 dark:text-emerald-300">• Billing Error / Duplicate Charge</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      We have charged you in error, or duplicated a charge.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-xs sm:text-sm space-y-1">
                    <p className="font-bold text-emerald-900 dark:text-emerald-300">• Non-delivery attributable to us</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      We are unable to deliver the service and the reason is attributable directly to us.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6 to 8: Multi-block grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <section id="ref-6" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    6. Consultation fees
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Fees for a scheduled consultation are non-refundable once the consultation has taken place. Where you cancel or reschedule with at least <strong>15 days notice</strong>, the fee may be adjusted against a rescheduled consultation. Non-attendance without notice forfeits the fee.
                  </p>
                </section>

                <section id="ref-7" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    7. Renewals &amp; Lapses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Where engaged to file a renewal, our responsibility is limited to that specific renewal. Courtesy reminders do not create an ongoing obligation, and we are not liable for lapses arising from non-response or outdated contact details.
                  </p>
                </section>

                <section id="ref-8" className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-2 scroll-mt-28">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    8. Taxes on refunds
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Where a refund is made, applicable taxes will be adjusted in accordance with statutory tax regulations. Bank and transfer charges already incurred are non-refundable.
                  </p>
                </section>
              </div>

              {/* 9. How to request a refund */}
              <section id="ref-9" className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 space-y-4 scroll-mt-28">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Mail className="w-4 h-4" /> Section 9
                </div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  9. How to request a refund
                </h2>
                <p className="text-sm">
                  Send a written request to <a href="mailto:diptish@shivoham.biz" className="text-emerald-700 dark:text-emerald-400 font-bold underline">diptish@shivoham.biz</a> setting out the service, the date of payment, the amount, and the reason.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold block">1. Acknowledgement</span>
                    <p className="text-slate-600 dark:text-slate-400">
                      We will acknowledge receipt within <strong>7 working days</strong> and respond with a formal review decision.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold block">2. Disbursement Mode</span>
                    <p className="text-slate-600 dark:text-slate-400">
                      Approved refunds are processed within <strong>7 working days of approval</strong>, by bank transfer to the same account from which payment was received. We do not refund to a different account or in cash.
                    </p>
                  </div>
                </div>
              </section>

              {/* 10. If you are dissatisfied & 11. Governing law */}
              <section id="ref-10" className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#052E1F] via-[#0B4619] to-[#052E1F] text-white space-y-5 shadow-lg scroll-mt-28 border border-emerald-800/40">
                <div className="flex items-center gap-2.5 text-yellow-300">
                  <HelpCircle className="w-6 h-6 shrink-0" />
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                    10. Resolution of Concerns &amp; Complaints
                  </h2>
                </div>
                
                <p className="text-sm text-white/90 leading-relaxed">
                  Please raise the matter with us first. Most concerns arise from a misunderstanding about what an authority has done or statutory procedural timelines, and can be resolved quickly.
                </p>
                
                <div className="p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3 text-sm">
                  <div>
                    <p className="font-extrabold text-lg text-yellow-300">
                      Shivoham &amp; Associates
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Flignite, Ground Floor, Parasmani Commercial Complex, Dadar East, Mumbai – 400014. Maharashtra
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold">
                    <a 
                      href="mailto:diptish@shivoham.biz" 
                      className="flex items-center gap-2 hover:text-yellow-300 underline transition"
                    >
                      <Mail className="w-4 h-4 text-yellow-300" />
                      diptish@shivoham.biz
                    </a>
                    <a 
                      href="tel:9167963888" 
                      className="flex items-center gap-2 hover:text-yellow-300 underline transition"
                    >
                      <Phone className="w-4 h-4 text-yellow-300" />
                      9167963888
                    </a>
                  </div>
                </div>

                <div id="ref-11" className="pt-3 text-xs text-white/75 leading-relaxed border-t border-white/15">
                  <strong>11. Governing Law &amp; Jurisdiction:</strong> This Policy is governed by the laws of India and is subject to the exclusive jurisdiction of the courts at Mumbai, Maharashtra. It must be read in conjunction with our Terms of Use &amp; Engagement.
                </div>
              </section>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
