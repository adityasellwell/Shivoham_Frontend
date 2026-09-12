import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

export default function WhichRegistrationsNeed() {
  const canonicalUrl = 'https://shivoham.biz/business-registration/which-registrations-does-my-business-need';
  const pageTitle = 'Which Business Licences & Registrations Do You Actually Need? | Shivoham & Associates';

  const articleSchema = {
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    headline: 'Which Business Registrations Does My Business Actually Need?',
    description: 'Statutory decision guide for businesses in Mumbai & Maharashtra: Shop Act Gumasta, PTEC, PTRC, GST, Udyam MSME, IEC, FSSAI, BIS, and ISO certifications.',
    author: {
      '@type': 'Organization',
      name: 'Shivoham & Associates',
      url: 'https://shivoham.biz'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Shivoham & Associates',
      logo: {
        '@type': 'ImageObject',
        url: 'https://shivoham.biz/img/mainLogo.png'
      }
    },
    mainEntityOfPage: canonicalUrl
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
        name: 'Which Registrations Do You Need?',
        item: canonicalUrl
      }
    ]
  };

  // Typical Stacks
  const typicalStacks = [
    {
      business: 'Freelancer or consultant in Mumbai',
      items: [
        { name: 'Gumasta', path: '/business-registration/gumasta-license-registration-in-mumbai' },
        { name: 'PTEC', path: '/business-registration/professional-tax-pt-in-mumbai' },
        { name: 'GST (if above threshold)', path: '/business-registration/gst-registration-filing-in-mumbai' },
        { name: 'Udyam', path: '/business-registration/msme-udyam-registration-in-mumbai' }
      ]
    },
    {
      business: 'Restaurant or café in Dadar',
      items: [
        { name: 'Gumasta', path: '/business-registration/gumasta-license-registration-in-mumbai' },
        { name: 'FSSAI', path: '/business-registration/fssai-food-license-in-mumbai' },
        { name: 'BMC Health Trade Licence', path: '/business-registration/fssai-food-license-in-mumbai' },
        { name: 'Fire NOC', path: '/business-registration/fssai-food-license-in-mumbai' },
        { name: 'GST', path: '/business-registration/gst-registration-filing-in-mumbai' },
        { name: 'PTEC/PTRC', path: '/business-registration/professional-tax-pt-in-mumbai' }
      ]
    },
    {
      business: 'E-commerce seller',
      items: [
        { name: 'GST (mandatory in most cases)', path: '/business-registration/gst-registration-filing-in-mumbai' },
        { name: 'Gumasta', path: '/business-registration/gumasta-license-registration-in-mumbai' },
        { name: 'Udyam', path: '/business-registration/msme-udyam-registration-in-mumbai' },
        { name: 'BIS (if product is notified)', path: '/business-registration/iso-certification-in-mumbai' }
      ]
    },
    {
      business: 'Exporter of goods',
      items: [
        { name: 'IEC', path: '/business-registration/import-export-code-iec-in-mumbai' },
        { name: 'AD Code', path: '/business-registration/import-export-code-iec-in-mumbai' },
        { name: 'GST', path: '/business-registration/gst-registration-filing-in-mumbai' },
        { name: 'LUT', path: '/business-registration/gst-registration-filing-in-mumbai' },
        { name: 'Udyam', path: '/business-registration/msme-udyam-registration-in-mumbai' },
        { name: 'BIS/CE (as applicable)', path: '/business-registration/iso-certification-in-mumbai' }
      ]
    },
    {
      business: 'Funded tech startup',
      items: [
        { name: 'GST', path: '/business-registration/gst-registration-filing-in-mumbai' },
        { name: 'PTEC/PTRC', path: '/business-registration/professional-tax-pt-in-mumbai' },
        { name: 'DSC', path: '/business-registration/dsc-digital-signature-in-mumbai' },
        { name: 'DPIIT Recognition', path: '/business-services/which-business-structure-should-i-choose' },
        { name: 'Udyam', path: '/business-registration/msme-udyam-registration-in-mumbai' }
      ]
    }
  ];

  // Statutory Decision Matrix
  const decisionMatrix = [
    {
      ifYou: 'Operate any shop, office or commercial premises in Maharashtra',
      need: 'Shop Act / Gumasta',
      path: '/business-registration/gumasta-license-registration-in-mumbai'
    },
    {
      ifYou: 'Are a company, LLP, partner, director or self-employed professional in Maharashtra',
      need: 'Professional Tax (PTEC)',
      path: '/business-registration/professional-tax-pt-in-mumbai'
    },
    {
      ifYou: 'Pay salaries above the state threshold to employees',
      need: 'Professional Tax (PTRC)',
      path: '/business-registration/professional-tax-pt-in-mumbai'
    },
    {
      ifYou: 'Cross the turnover threshold, sell inter-state, or sell on e-commerce',
      need: 'GST',
      path: '/business-registration/gst-registration-filing-in-mumbai'
    },
    {
      ifYou: 'Are a manufacturer or service provider wanting government scheme access',
      need: 'Udyam (MSME)',
      path: '/business-registration/msme-udyam-registration-in-mumbai'
    },
    {
      ifYou: 'Import or export goods',
      need: 'IEC + AD Code',
      path: '/business-registration/import-export-code-iec-in-mumbai'
    },
    {
      ifYou: 'Handle, manufacture, store or sell food in any form',
      need: 'FSSAI',
      path: '/business-registration/fssai-food-license-in-mumbai'
    },
    {
      ifYou: 'Are an innovative startup within 10 years of incorporation',
      need: 'DPIIT Recognition',
      path: '/business-services/which-business-structure-should-i-choose'
    },
    {
      ifYou: 'File with MCA, GST, income tax or IP India as a company or LLP',
      need: 'Digital Signature (Class 3 DSC)',
      path: '/business-registration/dsc-digital-signature-in-mumbai'
    },
    {
      ifYou: 'Manufacture a product covered by a Quality Control Order',
      need: 'BIS',
      path: '/business-registration/iso-certification-in-mumbai'
    },
    {
      ifYou: 'Export a product to the Europe',
      need: 'CE Marking',
      path: '/business-registration/iso-certification-in-mumbai'
    },
    {
      ifYou: 'Want a quality or security standard for tenders and buyers',
      need: 'ISO',
      path: '/business-registration/iso-certification-in-mumbai'
    }
  ];

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 py-8 transition-all">
      {/* SEO Metadata */}
      <SEO
        title={pageTitle}
        description="Statutory advisory guide: Determine exactly which licences, tax registrations, and permits your business needs in Mumbai & Maharashtra. Verified compliance thresholds."
        canonicalUrl={canonicalUrl}
        schemas={[articleSchema, breadcrumbSchema]}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 mb-4">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 overflow-x-auto py-1">
          <li>
            <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition">
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
            Which registrations does my business actually need?
          </li>
        </ol>
      </nav>

      {/* Hero Section with Golden Brand Gradient */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-4">
            <span className="px-3.5 py-1.5 bg-[#0B4617]/10 border border-[#0B4617]/20 text-[#0B4619] text-xs font-black uppercase rounded-full tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              Statutory Advisory Guide
            </span>
            
            <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
              Which registrations does my business actually need?
            </h1>
            
            <p className="text-[#0B4619] font-sans text-base leading-relaxed font-medium">
              No business needs all of these. What you need depends on what you sell, where you sell it, how much you turn over, and whether you employ anyone.
            </p>

            {/* Reviewer Credentials & Statutory Verification Strip */}
            <div className="pt-4 border-t border-[#0B4617]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#0B4619]/90">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B4617] shrink-0" />
                Reviewed by Adv. Diptish Khot, Advocate & Trademark Attorney | Last updated: September 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0B4617] shrink-0" />
                Thresholds and fees as notified; subject to revision. Verified on September 2026.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

        {/* Important Compliance Notes (Placed immediately after hero section) */}
        <section className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/50 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm sm:text-base">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            Important Compliance Notes
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5">
            <li>
              <strong>Import Export Code (IEC) Annual Re-validation:</strong> Every IEC holder must confirm or update their details on the DGFT portal between 1 April and 30 June every financial year, even when nothing has changed. Failure results in automatic deactivation and stoppage of customs clearance.
            </li>
            <li>
              <strong>Revised MSME Classification:</strong> Effective 1 April 2025, composite investment and turnover thresholds apply. Udyam grants an 80% rebate on statutory patent filing fees and 50% on trademark filing fees.
            </li>
            <li>
              <strong>Maharashtra Professional Tax (PTEC vs PTRC):</strong> PTEC applies to the entity/directors themselves (₹2,500/year). PTRC applies to employers paying salaries above the threshold to deduct and deposit employee tax.
            </li>
          </ul>
        </section>

        {/* Typical Stacks Section */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
              Typical Stacks
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Common business models and their typical statutory bundles in Maharashtra:
            </p>
          </div>

          <div className="space-y-3 pt-1">
            {typicalStacks.map((stack, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white md:w-5/12">
                  {stack.business}
                </div>
                <div className="flex flex-wrap items-center gap-2 md:w-7/12">
                  {stack.items.map((item, iIdx) => (
                    <React.Fragment key={iIdx}>
                      <Link
                        to={item.path}
                        className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#0B4617] dark:text-emerald-400 hover:border-[#0B4617] dark:hover:border-emerald-400 hover:underline transition"
                      >
                        {item.name}
                      </Link>
                      {iIdx < stack.items.length - 1 && (
                        <span className="text-xs text-slate-400 font-bold">+</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Decision Matrix Section */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
              The Decision Matrix
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Find the registrations required based on your business situation:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-xs uppercase font-bold text-slate-600 dark:text-slate-400 tracking-wider">
                  <th className="p-4 sm:p-5 w-7/12">If you…</th>
                  <th className="p-4 sm:p-5 w-5/12">You will likely need</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-sans">
                {decisionMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
                    <td className="p-4 sm:p-5 text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {row.ifYou}
                    </td>
                    <td className="p-4 sm:p-5">
                      <Link 
                        to={row.path}
                        className="inline-flex items-center gap-1 font-semibold text-[#0B4617] dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline transition"
                      >
                        {row.need}
                        <ArrowRight className="w-3.5 h-3.5 opacity-70 shrink-0" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
