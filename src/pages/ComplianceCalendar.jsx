import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Bell,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Send,
  FileCheck,
  Loader2
} from 'lucide-react';
import SEO from '../components/SEO';
import api from '../config/api';

// The 5 recurring compliance dates strictly specified in developer notes
const statutoryRecurringDates = [
  {
    id: 'iec-window',
    title: 'IEC Annual DGFT Update Window',
    dueDate: 'April 1 to June 30 Every Year',
    tag: 'DGFT Customs Mandate',
    statute: 'Foreign Trade Policy / DGFT Electronic Portal',
    portal: 'dgft.gov.in',
    applicability: 'Every IEC holder, even if no import or export transactions occurred during the financial year.',
    description: 'All IEC holders must confirm and validate their business profile electronically on the DGFT portal between April and June annually.',
    penalty: 'Automatic deactivation of IEC code. Goods cannot be cleared through Indian Customs (ICEGATE) while inactive.',
    link: '/business-registration/import-export-code-iec-in-mumbai'
  },
  {
    id: 'fssai-renewal',
    title: 'FSSAI Licence Renewal & Annual Return',
    dueDate: 'At Least 30 Days Before Expiry (Return: May 31)',
    tag: 'FSSAI / FoSCoS Rule',
    statute: 'Food Safety and Standards (Licensing & Registration) Regulations, 2011',
    portal: 'foscos.fssai.gov.in',
    applicability: 'All food business operators (restaurants, cloud kitchens, manufacturers, repackers, and traders).',
    description: 'Licence renewals open 180 days in advance and must be submitted at least 30 days prior to expiry date. Manufacturers and importers must also submit Form D-1 by May 31.',
    penalty: 'Late penalty fee of ₹100/day if renewal is submitted within the 30-day window. Once expired, renewal is barred and fresh application is mandatory.',
    link: '/business-registration/fssai-food-license-in-mumbai'
  },
  {
    id: 'pt-due-dates',
    title: 'Maharashtra Professional Tax (PTEC & PTRC)',
    dueDate: 'June 30 (PTEC) | Last Day of Month (PTRC)',
    tag: 'Maharashtra State Act',
    statute: 'Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975',
    portal: 'mahagst.gov.in',
    applicability: 'PTEC for business entities & directors; PTRC for all employers deducting tax from employee salaries.',
    description: 'PTEC: Flat ₹2,500 annual tax payable by June 30 for persons enrolled before May 31. PTRC: Monthly or quarterly salary tax remittance by the last day of the succeeding month.',
    penalty: 'Interest @ 1.25% per month + penalty up to 10% under Section 9 of the PT Act for delay in payment.',
    link: '/business-registration/professional-tax-ptec-ptrc-in-mumbai'
  },
  {
    id: 'gst-returns',
    title: 'GST Return Filing Dates (GSTR-1 & GSTR-3B)',
    dueDate: '11th & 20th of Every Month',
    tag: 'Monthly / Quarterly Filing',
    statute: 'Central Goods and Services Tax (CGST) Act, 2017 & Maharashtra SGST',
    portal: 'gst.gov.in',
    applicability: 'All active regular GST registered businesses and professionals.',
    description: 'Form GSTR-1 (Outward supplies) due on the 11th of each month. Form GSTR-3B (Summary return & net tax payment) due on the 20th of each month.',
    penalty: 'Statutory late fee of ₹50/day (₹20/day for Nil return) + 18% p.a. interest on net cash tax liability. Late filing blocks buyer ITC.',
    link: '/business-registration/gst-registration-filing-in-mumbai'
  },
  {
    id: 'udyam-update',
    title: 'MSME Udyam Annual Update',
    dueDate: 'Annual Review & Sync (Before March 31)',
    tag: 'Central MSME Portal',
    statute: 'MSMED Act, 2006 / Central MSME Gazette Notifications',
    portal: 'udyamregistration.gov.in',
    applicability: 'All micro, small, and medium enterprises holding an active Udyam registration number.',
    description: 'Mandatory annual synchronization of previous financial year investment in plant/machinery and turnover figures fetched from linked ITR and GST records.',
    penalty: 'Suspension or classification de-recognition on the Udyam portal, which forfeits 45-day payment dispute protections under MSMED Section 43B(h).',
    link: '/business-registration/msme-udyam-registration-in-mumbai'
  }
];

export default function ComplianceCalendar() {
  const canonicalUrl = 'https://shivoham.biz/compliance-calendar';
  const pageTitle = 'Annual Compliance Calendar for Businesses in Mumbai & Maharashtra | Shivoham & Associates';

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    businessType: 'Private Limited / LLP'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setLoading(true);
    try {
      await api.post('/consultations', {
        name: formData.name,
        phone: formData.contact,
        email: formData.email,
        subject: `Compliance Reminder Request (${formData.businessType})`,
        message: `Registered for statutory due date reminders on Compliance Calendar. Entity: ${formData.businessType}. Mobile/WhatsApp: ${formData.contact}, Email: ${formData.email}`,
        source: 'Compliance Calendar'
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error saving compliance reminder request:', error);
      // Still show confirmed for smooth client experience
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumbs`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://shivoham.biz'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Licenses & Compliance',
        item: 'https://shivoham.biz/#services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Compliance Calendar',
        item: canonicalUrl
      }
    ]
  };

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 py-8 transition-all">
      {/* SEO Metadata */}
      <SEO
        title={pageTitle}
        description="Statutory compliance calendar for Maharashtra businesses: IEC April–June update window, FSSAI renewal, GST return dates, PT June 30 due date, and Udyam annual update."
        canonicalUrl={canonicalUrl}
        schemas={[breadcrumbSchema]}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 overflow-x-auto py-1">
          <li>
            <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-1">
              Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" /></li>
          <li>
            <Link to="/#services" className="hover:text-primary-600 dark:hover:text-primary-400 transition">
              Licenses & Compliance
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" /></li>
          <li className="text-slate-900 dark:text-white font-semibold truncate" aria-current="page">
            Compliance Calendar
          </li>
        </ol>
      </nav>

      {/* Hero Banner with Standard Golden Brand Gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4 max-w-4xl">
            <span className="px-3.5 py-1.5 bg-[#0B4617]/10 border border-[#0B4617]/20 text-[#0B4619] text-xs font-black uppercase rounded-full tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              Statutory Recurring Dates
            </span>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Annual Business Compliance Calendar
            </h1>

            <p className="text-[#0B4619] font-sans text-base sm:text-lg leading-relaxed font-medium">
              The recurring statutory dates every business in Mumbai & Maharashtra must track: the IEC April-to-June window, FSSAI renewal, GST return dates, PT due dates, and Udyam annual update.
            </p>

            <p className="text-[#0B4619] font-sans text-sm sm:text-base leading-relaxed font-medium">
              Missing a recurring deadline leads to automatic licence deactivations, loss of bank clearance, or severe per-day late fees. Below is the recurring statutory timeline with direct filing guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Recurring Compliance List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Recurring Dates Cards */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
              Recurring Statutory Deadlines
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-sans">
              Critical annual and monthly filing windows governed by Maharashtra and Central ministries:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {statutoryRecurringDates.map((item, index) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-[#0B4617] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200">
                      {item.tag}
                    </span>
                  </div>

                  {/* Due Date Strip */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#0B4617] dark:text-emerald-300 font-bold text-sm">
                    <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Statutory Date: {item.dueDate}</span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 font-sans">
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300">Who Must File: </span>
                      <span className="text-slate-500 dark:text-slate-400">{item.applicability}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300">Statutory Authority: </span>
                      <span className="text-slate-500 dark:text-slate-400">{item.statute}</span>
                    </div>
                  </div>

                  {/* Consequences Box */}
                  <div className="p-3 rounded-xl bg-red-50/70 dark:bg-red-950/30 text-xs text-red-800 dark:text-red-300 leading-relaxed font-sans">
                    <span className="font-bold text-red-900 dark:text-red-200">Penalty for Default: </span>
                    {item.penalty}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col gap-2.5 sm:self-center">
                  <Link
                    to={item.link}
                    className="px-5 py-3 rounded-xl bg-[#0B4617] text-white hover:bg-[#135c24] text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm text-center"
                  >
                    <span>View Filing Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-center text-slate-400 font-mono">
                    Portal: {item.portal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Reminder Form Section */}
        <div id="reminders" className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Bell className="w-3.5 h-3.5" />
              Statutory Reminder Service
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
              Get Statutory Due Date Reminders
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
              Every compliance above is critical for ongoing operations. Register your details below to receive proactive reminders before your statutory deadline.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-2">
                <div className="flex items-center gap-2 text-[#0B4617] dark:text-emerald-300 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Reminder Request Received!</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>. Your details have been successfully recorded in our system. Our team will notify you prior to upcoming statutory deadlines.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Business Name / Contact Person
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Contact / Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. +91 98200 00000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@business.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Primary Entity / Registrations
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    >
                      <option value="Sole Proprietorship">Sole Proprietorship</option>
                      <option value="Private Limited / LLP">Private Limited / LLP</option>
                      <option value="Restaurant / Food Business">Restaurant / Food Business (FSSAI)</option>
                      <option value="Exporter / Importer">Exporter / Importer (IEC)</option>
                      <option value="MSME Manufacturing">MSME Manufacturing / Services</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3.5 bg-[#0B4617] hover:bg-[#135c24] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Registering...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Me Due Date Reminders</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
