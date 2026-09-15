import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Briefcase, FileCheck, CheckCircle2, ChevronDown, Clock, HelpCircle, ArrowRight, AlertCircle, ChevronRight, Scale, Users, AlertTriangle, Building2, MapPin, Sparkles, ExternalLink, FileText, Layers, Calendar, Landmark } from 'lucide-react';
import { services, categories } from '../data/servicesData';
import SEO from '../components/SEO';

const seoSlugMap = {
  // IPR Services
  'trademark': '/legal-services/trademark-registration-in-mumbai',
  'copyright': '/legal-services/copyright-registration-in-mumbai',
  'patent': '/legal-services/patent-registration-in-mumbai',
  'design': '/legal-services/design-registration-in-mumbai',
  'legal-advice': '/legal-services/legal-advice-agreements-in-mumbai',

  // Company Formation
  'sole-proprietor': '/business-services/sole-proprietorship-registration-in-mumbai',
  'partnership-firm': '/business-services/partnership-firm-registration-in-mumbai',
  'opc': '/business-services/opc-registration-in-mumbai',
  'llp': '/business-services/llp-incorporation-in-mumbai',
  'private-limited': '/business-services/company-formation-in-mumbai',
  'ngo': '/business-services/ngo-registration-in-mumbai',
  'trust': '/business-services/trust-registration-in-mumbai',

  // Licenses & Compliance
  'msme-udyam': '/business-registration/msme-udyam-registration-in-mumbai',
  'gst': '/business-registration/gst-registration-filing-in-mumbai',
  'dsc': '/business-registration/dsc-digital-signature-in-mumbai',
  'iec': '/business-registration/import-export-code-iec-in-mumbai',
  'shop-act-gumasta': '/business-registration/gumasta-license-registration-in-mumbai',
  'fssai-health-fire': '/business-registration/fssai-food-license-in-mumbai',
  'iso-ce-bis': '/business-registration/iso-certification-in-mumbai',
  'professional-tax': '/business-registration/professional-tax-ptec-ptrc-in-mumbai',
  'bis-certification': '/business-registration/bis-certification-in-mumbai',
  'ce-marking': '/business-registration/ce-marking-in-mumbai',
  'dpiit-startup': '/business-registration/dpiit-startup-recognition-in-mumbai'
};

const pathToIdMap = {
  // IPR Services
  '/legal-services/trademark-registration-in-mumbai': 'trademark',
  '/legal-services/copyright-registration-in-mumbai': 'copyright',
  '/legal-services/patent-registration-in-mumbai': 'patent',
  '/legal-services/design-registration-in-mumbai': 'design',
  '/legal-services/legal-advice-agreements-in-mumbai': 'legal-advice',

  // Company Formation
  '/business-services/sole-proprietorship-registration-in-mumbai': 'sole-proprietor',
  '/business-services/partnership-firm-registration-in-mumbai': 'partnership-firm',
  '/business-services/opc-registration-in-mumbai': 'opc',
  '/business-services/llp-incorporation-in-mumbai': 'llp',
  '/business-services/company-formation-in-mumbai': 'private-limited',
  '/business-services/ngo-registration-in-mumbai': 'ngo',
  '/business-services/trust-registration-in-mumbai': 'trust',
  '/business-services/ngo-trust-registration-in-mumbai': 'ngo',

  // Licenses & Compliance
  '/business-registration/msme-udyam-registration-in-mumbai': 'msme-udyam',
  '/business-registration/gst-registration-filing-in-mumbai': 'gst',
  '/business-registration/dsc-digital-signature-in-mumbai': 'dsc',
  '/business-registration/import-export-code-iec-in-mumbai': 'iec',
  '/business-registration/iec-code-registration-in-mumbai': 'iec',
  '/business-registration/gumasta-license-registration-in-mumbai': 'shop-act-gumasta',
  '/business-registration/fssai-food-license-in-mumbai': 'fssai-health-fire',
  '/business-registration/iso-certification-in-mumbai': 'iso-ce-bis',
  '/business-registration/professional-tax-ptec-ptrc-in-mumbai': 'professional-tax',
  '/business-registration/professional-tax-pt-in-mumbai': 'professional-tax',
  '/business-registration/bis-certification-in-mumbai': 'bis-certification',
  '/business-registration/ce-marking-in-mumbai': 'ce-marking',
  '/business-registration/dpiit-startup-recognition-in-mumbai': 'dpiit-startup'
};

export default function ServiceDetail() {
  const { serviceId: paramServiceId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  // Look up service details either by param or SEO URL path
  const serviceId = paramServiceId || pathToIdMap[pathname.toLowerCase()];
  const service = services[serviceId];

  // If service doesn't exist, redirect to 404
  useEffect(() => {
    if (!service) {
      navigate('/404', { replace: true });
    } else {
      setActiveTab('overview');
      setOpenFaqIdx(null);
    }
  }, [serviceId, service, navigate]);

  if (!service) return null;

  const category = categories.find(cat => cat.id === service.categoryId);

  // Get other services in same category
  const relatedServices = Object.values(services).filter(
    s => s.categoryId === service.categoryId && s.id !== service.id
  );

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Key Benefits' },
    { id: 'documents', label: 'Documents Needed' },
    { id: 'process', label: 'Process Steps' },
    ...(service.limitations ? [{ id: 'limitations', label: 'Limitations' }] : []),
    ...(service.feesAtAGlance ? [{ id: 'fees', label: service.atAGlanceTitle || 'Fees at a Glance' }] : [])
  ];

  // SEO Page Title following the user's exact suggested pattern:
  // "FSSAI Licence in Mumbai — Categories, Documents, Fees | Shivoham & Associates"
  const exactTitleMap = {
    'fssai-health-fire': 'FSSAI Licence in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'shop-act-gumasta': 'Gumasta Licence in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'professional-tax': 'Professional Tax in Maharashtra (PTEC & PTRC) — Categories, Documents, Fees | Shivoham & Associates',
    'bis-certification': 'BIS Licence in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'ce-marking': 'CE Marking in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'dpiit-startup': 'DPIIT Startup Recognition in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'msme-udyam': 'MSME Udyam Registration in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'gst': 'GST Registration in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'iec': 'Import Export Code (IEC) in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'dsc': 'Class 3 DSC in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
    'iso-ce-bis': 'ISO Certification in Mumbai — Categories, Documents, Fees | Shivoham & Associates',
  };

  const pageTitle = exactTitleMap[service.id] || `${service.title} in Mumbai — Categories, Documents, Fees | Shivoham & Associates`;
  const seoSlug = seoSlugMap[service.id] || `/services/${service.id}`;
  const canonicalUrl = `https://shivoham.biz${seoSlug}`;

  // JSON-LD Schemas: Service, LegalService, FAQPage, BreadcrumbList
  const serviceSchema = {
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: `${service.title} in Mumbai`,
    serviceType: service.title,
    description: service.shortDescription,
    url: canonicalUrl,
    provider: {
      '@type': 'LegalService',
      name: 'Shivoham & Associates',
      url: 'https://shivoham.biz',
      telephone: '+919137282042',
      email: 'diptish@shivoham.biz',
      priceRange: '₹₹',
      logo: 'https://shivoham.biz/img/mainLogo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ground Floor, Parasmani Commercial Complex, Flignite',
        addressLocality: 'Dadar East, Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400014',
        addressCountry: 'IN'
      }
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Mumbai, Maharashtra, India'
    }
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faqs`,
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  } : null;

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
        name: category?.title || 'Services',
        item: 'https://shivoham.biz/#services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: canonicalUrl
      }
    ]
  };

  const schemas = [serviceSchema, breadcrumbSchema, faqSchema].filter(Boolean);

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 py-8 transition-all">
      {/* SEO Metadata & Schemas */}
      <SEO
        title={pageTitle}
        description={`${service.shortDescription} Expert advisory, transparent government fees, and fast online filing by Shivoham & Associates in Dadar East, Mumbai.`}
        canonicalUrl={canonicalUrl}
        schemas={schemas}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 overflow-x-auto py-1">
          <li>
            <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition flex items-center gap-1">
              Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" /></li>
          <li>
            <Link to="/#services" className="hover:text-primary-600 dark:hover:text-primary-400 transition">
              {category?.title || 'Services'}
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" /></li>
          <li className="text-slate-900 dark:text-white font-semibold truncate" aria-current="page">
            {service.title}
          </li>
        </ol>
      </nav>

      {/* Category & Service Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-4">
            <span className="px-3 py-1 bg-[#0B4617]/10 border border-primary-400/20 text-[#0B4619] text-xs font-bold uppercase rounded-full tracking-wider inline-flex items-center gap-1.5">
              {service.categoryId === 'ipr' ? <Shield className="w-3.5 h-3.5" /> :
                service.categoryId === 'company-formation' ? <Briefcase className="w-3.5 h-3.5" /> :
                  <FileCheck className="w-3.5 h-3.5" />}
              {category?.title}
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">{service.title}</h1>
            <p className="text-[#0B4619] font-sans text-sm sm:text-base max-w-3xl leading-relaxed">{service.heroLine || service.shortDescription}</p>

            {/* Statutory Verification Notice */}
            <div className="pt-4 border-t border-[#0B4617]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#0B4619]/90">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0B4617] shrink-0" />
                Thresholds and fees as notified subject to revision. Verified on September 2026.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Dedicated Sidebar Width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-start w-full">
        {/* Left Side: Service Details and Tabs */}
        <div className="flex-1 min-w-0 w-full space-y-8">
          {/* Custom Tabs Navigation */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-2 sm:p-2.5 shadow-sm flex flex-wrap gap-1 sm:gap-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[90px] sm:min-w-[100px] text-center py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl font-bold text-xs sm:text-sm transition relative cursor-pointer ${activeTab === tab.id
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-slate-800/60'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/20'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents Panel */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md min-h-[350px]">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {service.schemes ? (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
                          <Building2 className="w-6 h-6 text-primary-500" />
                          {service.schemes.title || 'The schemes'}
                        </h3>
                        {service.schemes.subtitle && (
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                            {service.schemes.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm w-full">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                              <th className="p-4 sm:p-5 w-1/3">Scheme</th>
                              <th className="p-4 sm:p-5 w-2/3">Covers</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-sans">
                            {service.schemes.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white align-top">
                                  <span className="font-bold text-sm text-amber-800 dark:text-amber-400">
                                    {row.scheme}
                                  </span>
                                </td>
                                <td className="p-4 sm:p-5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed align-top">
                                  {row.covers}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : service.distinction ? (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
                          <Scale className="w-6 h-6 text-primary-500" />
                          {service.distinction.title || 'The distinction, stated simply'}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.distinction.items.map((dist, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 space-y-2.5 shadow-xs"
                          >
                            <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-black rounded-lg border border-amber-300/60 dark:border-amber-800/40">
                              {dist.term}
                            </span>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                              {dist.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {service.distinction.note && (
                        <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/25 border border-amber-200/70 dark:border-amber-800/40 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans font-medium">
                          {service.distinction.note}
                        </div>
                      )}
                    </div>
                  ) : service.fullDescription ? (
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                        {service.overviewTitle || 'Service Overview'}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-base">{service.fullDescription}</p>
                    </div>
                  ) : null}

                  {service.eligibility && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          {service.eligibility.title || 'Eligibility Criteria'}
                        </h4>
                        {service.eligibility.subtitle && (
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                            {service.eligibility.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {service.eligibility.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100/80 dark:border-emerald-900/30 transition hover:border-emerald-300 dark:hover:border-emerald-700/50"
                          >
                            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                              ✓
                            </span>
                            <span className="text-slate-800 dark:text-slate-200 font-sans text-sm sm:text-base leading-relaxed font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.classification && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-primary-500" />
                          {service.classification.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                          Composite statutory criteria for enterprise classification under the MSMED Act:
                        </p>
                      </div>

                      <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm w-full">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                              <th className="p-4 sm:p-5">Category</th>
                              <th className="p-4 sm:p-5">Investment in plant, machinery or equipment</th>
                              <th className="p-4 sm:p-5">Annual turnover</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-sans">
                            {service.classification.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">
                                  <span className="font-bold text-sm text-slate-900 dark:text-amber-400">
                                    {row.category}
                                  </span>
                                </td>
                                <td className="p-4 sm:p-5 text-slate-700 dark:text-slate-300 font-medium">
                                  {row.investment}
                                </td>
                                <td className="p-4 sm:p-5 text-slate-700 dark:text-slate-300 font-medium">
                                  {row.turnover}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {service.classification.note && (
                        <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-sans leading-relaxed">
                          <span className="font-bold">Statutory Note: </span>
                          {service.classification.note}
                        </div>
                      )}
                    </div>
                  )}

                  {service.whichLicenceYouNeed && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-primary-500" />
                          {service.whichLicenceYouNeed.title}
                        </h4>
                        {service.whichLicenceYouNeed.subtitle && (
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                            {service.whichLicenceYouNeed.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm w-full">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                              <th className="p-4 sm:p-5 w-1/3">Category</th>
                              <th className="p-4 sm:p-5 w-2/3">Applies to</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-sans">
                            {service.whichLicenceYouNeed.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white align-top">
                                  <span className="font-bold text-sm text-slate-900 dark:text-amber-400">
                                    {row.category}
                                  </span>
                                </td>
                                <td className="p-4 sm:p-5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed align-top">
                                  {row.appliesTo}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {service.warningNotice && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      <div className="p-6 sm:p-7 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-700/60 shadow-sm space-y-3">
                        <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-200">
                          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                          <h4 className="font-display font-bold text-lg sm:text-xl text-amber-900 dark:text-amber-100">
                            {service.warningNotice.title}
                          </h4>
                        </div>
                        <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-sans text-sm sm:text-base">
                          {service.warningNotice.desc}
                        </p>
                        {service.warningNotice.note && (
                          <div className="pt-3 border-t border-amber-200/80 dark:border-amber-800/60 text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-300">
                            {service.warningNotice.note}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {service.whenRegistrationIsMandatory && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary-500" />
                          {service.whenRegistrationIsMandatory.title}
                        </h4>
                        {service.whenRegistrationIsMandatory.subtitle && (
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                            {service.whenRegistrationIsMandatory.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {service.whenRegistrationIsMandatory.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60"
                          >
                            <span className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.sayPlainlyNotice && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-700/60 shadow-sm space-y-2">
                        <h4 className="font-display font-bold text-base sm:text-lg text-amber-900 dark:text-amber-200 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                          {service.sayPlainlyNotice.title || 'Say this plainly on the page:'}
                        </h4>
                        <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-sans text-sm sm:text-base font-medium">
                          {service.sayPlainlyNotice.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {service.commonStandards && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-primary-500" />
                          {service.commonStandards.title}
                        </h4>
                        {service.commonStandards.subtitle && (
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                            {service.commonStandards.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm w-full">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                          <thead>
                            <tr className="bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                              <th className="p-4 sm:p-5 w-1/3">Standard</th>
                              <th className="p-4 sm:p-5 w-2/3">Covers</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-sans">
                            {service.commonStandards.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                                <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white align-top">
                                  <span className="font-bold text-sm text-slate-900 dark:text-amber-400">
                                    {row.standard}
                                  </span>
                                </td>
                                <td className="p-4 sm:p-5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed align-top">
                                  {row.covers}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {service.types && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary-500" />
                          {service.typesTitle || 'Types'}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service.types.map((type, tIdx) => {
                          const parts = typeof type === 'string' ? type.split(' — ') : [type.name, type.desc];
                          return (
                            <div
                              key={tIdx}
                              className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/70 flex flex-col gap-2 hover:border-primary-500/40 transition-all shadow-sm"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-primary-500 shrink-0"></span>
                                <span className="font-bold text-slate-900 dark:text-white text-base">
                                  {parts[0]}
                                </span>
                              </div>
                              {parts[1] && (
                                <p className="text-slate-600 dark:text-slate-400 text-sm font-sans leading-relaxed">
                                  {parts[1]}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {service.whatItIs && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary-500" />
                        What it is
                      </h4>
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-slate-800/50 border border-amber-200/50 dark:border-slate-700/50">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                          {service.whatItIs}
                        </p>
                      </div>
                    </div>
                  )}

                  {service.bestSuitedFor && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary-500" />
                        Best suited for
                      </h4>
                      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-slate-800/50 border border-emerald-200/50 dark:border-slate-700/50">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                          {service.bestSuitedFor}
                        </p>
                      </div>
                    </div>
                  )}

                  {service.noteOnTerminology && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                        Note on terminology
                      </h4>
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                          {service.noteOnTerminology}
                        </p>
                      </div>
                    </div>
                  )}

                  {service.maharashtraNote && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary-500" />
                        Maharashtra Note
                      </h4>
                      <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/50">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                          {service.maharashtraNote}
                        </p>
                      </div>
                    </div>
                  )}

                  {service.howItIsEstablished && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-primary-500" />
                          {service.howItIsEstablished.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 font-sans text-sm sm:text-base">
                          {service.howItIsEstablished.intro}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-3 pt-1">
                        {service.howItIsEstablished.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60"
                          >
                            <span className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                              {(() => {
                                const parts = item.split(' — ');
                                if (parts.length === 2) {
                                  return (
                                    <>
                                      <strong className="text-slate-900 dark:text-white font-semibold">{parts[0]}</strong>
                                      <span className="text-slate-600 dark:text-slate-400"> — {parts[1]}</span>
                                    </>
                                  );
                                }
                                return item;
                              })()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.whatItProtects && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary-500" />
                        What it protects
                      </h4>
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-slate-800/50">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                          {(() => {
                            if (typeof service.whatItProtects !== 'string') return service.whatItProtects;
                            return service.whatItProtects.split(/(\*\*.*?\*\*)/g).map((part, idx) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                  <span
                                    key={idx}
                                    className="font-bold text-amber-800 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/40 px-1.5 py-0.5 mx-0.5 rounded"
                                  >
                                    {part.slice(2, -2)}
                                  </span>
                                );
                              }
                              return part;
                            });
                          })()}
                        </p>
                      </div>
                    </div>
                  )}

                  {(service.whatCannotBePatented || service.whatItDoesNotProtect) && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                      <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                        {service.whatItDoesNotProtectTitle || (service.whatCannotBePatented ? 'What cannot be patented' : 'What it does not protect')}
                      </h4>
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/30 dark:bg-slate-800/40">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                          {(() => {
                            const text = service.whatCannotBePatented || service.whatItDoesNotProtect;
                            if (typeof text !== 'string') return text;
                            return text.split(/(\*\*.*?\*\*)/g).map((part, idx) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                  <span
                                    key={idx}
                                    className="font-bold text-amber-800 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/40 px-1.5 py-0.5 mx-0.5 rounded"
                                  >
                                    {part.slice(2, -2)}
                                  </span>
                                );
                              }
                              return part;
                            });
                          })()}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'benefits' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                    {service.benefitsTitle || 'Key Advantages & Benefits'}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {service.benefits.map((benefit, bIdx) => {
                      const hasDash = typeof benefit === 'string' && benefit.includes(' — ');
                      const parts = hasDash ? benefit.split(' — ') : null;

                      return (
                        <div key={bIdx} className="flex items-start space-x-3.5 p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100/60 dark:border-slate-800/60 hover:border-primary-200 dark:hover:border-slate-700 transition">
                          <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <div className="text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                            {parts ? (
                              <>
                                <strong className="font-bold text-slate-900 dark:text-white">{parts[0]}</strong>
                                <span className="text-slate-600 dark:text-slate-300"> — {parts[1]}</span>
                              </>
                            ) : typeof benefit === 'string' && benefit.includes('*') ? (
                              <span>
                                {benefit.replace('*', '')}
                                <span className="text-red-500 font-bold">*</span>
                              </span>
                            ) : (
                              benefit
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {service.keyFeatures && (
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                        {service.keyFeatures.title || 'Key Features to Note'}
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.keyFeatures.items.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-3.5 p-4 bg-slate-50/70 dark:bg-slate-800/30 rounded-2xl border border-slate-100/60 dark:border-slate-800/60">
                            <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                      {service.keyFeatures.advisoryNote && (
                        <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-sans leading-relaxed">
                          <span className="font-bold">Advisory Notice: </span>
                          {service.keyFeatures.advisoryNote}
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'documents' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Documents Checklist</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">Prepare these files beforehand for a quick and paperless submission process:</p>
                  <div className="grid grid-cols-1 gap-3">
                    {service.documents.map((doc, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-3.5 p-3.5 bg-primary-50/20 dark:bg-slate-800/25 border border-primary-100/30 dark:border-slate-700/30 rounded-xl">
                        <span className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold text-xs">{dIdx + 1}</span>
                        <span className="text-slate-700 dark:text-slate-300 font-sans text-sm font-semibold">{doc}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'process' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Step-by-Step Registration Process</h3>

                  <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-5 pl-7 space-y-8">
                    {service.process.map((step, sIdx) => (
                      <div key={sIdx} className="relative">
                        <span className={`absolute -left-[43px] top-0.5 w-8 h-8 rounded-full ${step.isRed ? 'bg-red-600 text-white shadow-red-500/30' : 'bg-primary-500 text-white'} font-extrabold text-xs flex items-center justify-center shadow-md`}>
                          {step.step}
                        </span>
                        <div className="space-y-1">
                          <h4 className={`font-bold text-lg ${step.isRed ? 'text-red-600 dark:text-red-500' : 'text-slate-900 dark:text-white'}`}>{step.title}</h4>
                          {step.desc && (
                            <p className={`text-sm sm:text-base font-sans leading-relaxed ${step.isRed ? 'text-red-600 dark:text-red-400 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>{step.desc}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'limitations' && service.limitations && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white flex items-center gap-2.5">
                      <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                      Limitations you should state plainly
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">
                      Key legal risks and operational boundaries to consider plainly:
                    </p>
                  </div>

                  <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/50 dark:bg-slate-800/60 border border-amber-200/60 dark:border-slate-700/60 space-y-5 shadow-sm">
                    <p className="text-xs font-bold tracking-wider uppercase text-amber-800 dark:text-amber-400">
                      Key Risks & Structural Boundaries
                    </p>
                    <ul className="space-y-5">
                      {service.limitations.map((limit, lIdx) => {
                        const boldMatch = typeof limit === 'string' && limit.match(/^\*\*(.*?)\*\*\s*(.*)$/);
                        if (boldMatch) {
                          const [, title, desc] = boldMatch;
                          return (
                            <li key={lIdx} className="flex items-start gap-3.5">
                              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                              <div className="space-y-1 font-sans">
                                <h5 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                                  {title}
                                </h5>
                                {desc && (
                                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                                    {desc}
                                  </p>
                                )}
                              </div>
                            </li>
                          );
                        }

                        // Auto-detect title if separated by period or semicolon
                        const splitIdx = typeof limit === 'string' ? limit.search(/[.;]\s+/) : -1;
                        if (splitIdx !== -1 && splitIdx < 70) {
                          const title = limit.slice(0, splitIdx + 1);
                          const desc = limit.slice(splitIdx + 1).trim();
                          return (
                            <li key={lIdx} className="flex items-start gap-3.5">
                              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                              <div className="space-y-1 font-sans">
                                <h5 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                                  {title}
                                </h5>
                                {desc && (
                                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                                    {desc}
                                  </p>
                                )}
                              </div>
                            </li>
                          );
                        }

                        return (
                          <li key={lIdx} className="flex items-start gap-3.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                            <span className="text-base font-bold text-slate-900 dark:text-white leading-relaxed font-sans">
                              {limit}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'fees' && service.feesAtAGlance && (() => {
                const hasFeeColumn = service.feesAtAGlance.some(item => item.fee !== undefined && item.fee !== null);

                // Group consecutive items with identical particular labels using rowSpan
                const itemsWithSpan = service.feesAtAGlance.map((item, idx, arr) => {
                  if (idx > 0 && item.particular === arr[idx - 1].particular) {
                    return { ...item, span: 0 };
                  }
                  let count = 1;
                  while (idx + count < arr.length && arr[idx + count].particular === item.particular) {
                    count++;
                  }
                  return { ...item, span: count };
                });

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">{service.atAGlanceTitle || 'Fees at a Glance'}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">
                        {service.atAGlanceDesc || 'Clear breakdown of official government statutory filing fees and standard timelines.'}
                      </p>
                    </div>


                    <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm w-full">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                            <th className={`p-4 sm:p-5 ${hasFeeColumn ? 'w-1/4' : 'w-2/5'}`}>{service.atAGlanceHeaders?.[0] || 'Particular'}</th>
                            <th className={`p-4 sm:p-5 ${hasFeeColumn ? 'w-1/2' : 'w-3/5'}`}>{service.atAGlanceHeaders?.[1] || 'Details & Applicability'}</th>
                            {hasFeeColumn && <th className="p-4 sm:p-5 w-1/4">{service.atAGlanceHeaders?.[2] || 'Statutory Fee'}</th>}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-sans">
                          {itemsWithSpan.map((item, fIdx) => (
                            <tr key={fIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                              {item.span > 0 && (
                                <td
                                  rowSpan={item.span}
                                  className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white align-top border-b border-slate-100 dark:border-slate-800"
                                >
                                  {item.particular}
                                </td>
                              )}
                              <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 align-top leading-relaxed">
                                {item.detail === 'Nil' ? (
                                  <span className="font-bold text-xs text-emerald-700 dark:text-emerald-400">
                                    ₹0 (Nil Government Fee)
                                  </span>
                                ) : item.detail === 'startupindia.gov.in' ? (
                                  <a
                                    href="https://www.startupindia.gov.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-bold text-primary-600 dark:text-primary-400 hover:underline"
                                  >
                                    startupindia.gov.in
                                    <span className="text-xs">↗</span>
                                  </a>
                                ) : Array.isArray(item.detail) ? (
                                  <ul className="space-y-2 list-disc pl-5">
                                    {item.detail.map((bullet, bIdx) => {
                                      const isAsterisk = typeof bullet === 'string' && bullet.includes('*');
                                      return (
                                        <li
                                          key={bIdx}
                                          className={`leading-relaxed ${isAsterisk ? 'text-red-600 dark:text-red-500 font-semibold marker:text-red-500' : ''}`}
                                        >
                                          {bullet}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                ) : typeof item.detail === 'string' && (item.detail.includes('“except above”') || item.detail.includes('"except above"')) ? (
                                  <>
                                    {item.detail.split(/“except above”|"except above"/)[0]}
                                    <span className="text-red-600 dark:text-red-500 font-bold">
                                      “except above”
                                    </span>
                                    {item.detail.split(/“except above”|"except above"/)[1]}
                                  </>
                                ) : typeof item.detail === 'string' && item.detail.includes('*') ? (
                                  <span className="text-red-600 dark:text-red-500 font-semibold">
                                    {item.detail}
                                  </span>
                                ) : (
                                  item.detail
                                )}
                              </td>
                              {hasFeeColumn && (
                                <td className="p-4 sm:p-5 align-top">
                                  {item.fee ? (
                                    <span className="font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-300">
                                      {item.fee}
                                    </span>
                                  ) : (
                                    <span className="text-xs text-slate-400 dark:text-slate-500">—</span>
                                  )}
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {service.atAGlanceNote && (
                      <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-sans leading-relaxed">
                        <span className="font-bold">Note: </span>
                        {service.atAGlanceNote}
                      </div>
                    )}
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Contextual Cross-Links for Sole Proprietor, Private Limited, MSME Udyam, and IEC */}
            {service.id === 'sole-proprietor' && (
              <div className="mt-8 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/20 border border-emerald-200/70 dark:border-emerald-800/40 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300/60">
                    Statutory Founder Stack
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Mandatory Next Steps</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                    Next Essential Registrations for Sole Proprietors in Mumbai
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
                    A proprietorship has no separate legal existence from its owner. To open a bank current account and operate without municipal penalties in Maharashtra, these three registrations are statutory requirements:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <Link
                    to="/business-registration/gumasta-license-registration-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-emerald-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        1. Municipal Mandate
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition flex items-center justify-between">
                        <span>BMC Gumasta License</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Statutory proof of business address required by all banks in Mumbai and Thane to open a current account.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      Apply Form G / F <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  <Link
                    to="/business-registration/gst-registration-filing-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-emerald-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-1">
                        2. Indirect Tax
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition flex items-center justify-between">
                        <span>GST Registration</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Mandatory for e-commerce, inter-state billing, or turnover crossing ₹40L (goods) / ₹20L (services).
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      GSTIN In 3–7 Days <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  <Link
                    to="/business-registration/msme-udyam-registration-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-emerald-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
                        3. Central Scheme
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition flex items-center justify-between">
                        <span>MSME Udyam Certificate</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Free central government recognition unlocking 45-day payment protection and 50% discount on trademarks.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      Get Udyam Today <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            )}

            {service.id === 'private-limited' && (
              <div className="mt-8 bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20 border border-blue-200/70 dark:border-blue-800/40 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300/60">
                    Post-Incorporation Mandates
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Statutory Compliance Bundle</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                    Mandatory Post-Incorporation Compliance Bundle
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
                    Incorporation under SPICe+ INC-11 is only step one. MCA, Income Tax, and Maharashtra state law mandate these immediate post-incorporation actions:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <Link
                    to="/business-registration/dsc-digital-signature-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-1">
                        1. Director Requirement
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition flex items-center justify-between">
                        <span>Class-3 DSC Tokens</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Required by every director to e-sign MCA statutory filings, Form INC-20A (Commencement of Business), and annual DIR-3 KYC.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      Issue USB Tokens <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  <Link
                    to="/business-registration/professional-tax-ptec-ptrc-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-emerald-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        2. Maharashtra State Tax
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition flex items-center justify-between">
                        <span>PTEC & PTRC Enrolment</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        PTEC mandatory for the company & directors (₹2,500/yr); PTRC required before running payroll and deducting PT from staff.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      Register PTEC & PTRC <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  <Link
                    to="/business-registration/gst-registration-filing-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-amber-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
                        3. Commercial Operations
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition flex items-center justify-between">
                        <span>GST Registration</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Activate input tax credit (ITC) claims on vendor expenses, capital equipment, and corporate lease rent.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      Get GST Certificate <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            )}

            {service.id === 'msme-udyam' && (
              <div className="mt-8 bg-gradient-to-br from-amber-50/70 via-white to-purple-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-purple-950/20 border border-amber-200/70 dark:border-amber-800/40 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300/60">
                    Statutory Government Subsidies
                  </span>
                  <span className="text-xs text-slate-500 font-medium">IPR Fee Concessions</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                    Unlock 50% to 80% Government Fee Rebates on IPR With Udyam
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
                    Your Udyam Registration Certificate is your statutory key to massive government fee concessions at the Intellectual Property India Office (CGPDTM):
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <Link
                    to="/legal-services/trademark-registration-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-amber-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
                        Save ₹4,500 / Class
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition flex items-center justify-between">
                        <span>50% Trademark Rebate</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Pay ₹4,500 official government filing fee per class instead of ₹9,000 for standard companies. Protect brand name & logo.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      File Trademark <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  <Link
                    to="/legal-services/patent-registration-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-purple-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider mb-1">
                        Save Up to 80%
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition flex items-center justify-between">
                        <span>80% Patent Fee Reduction</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Massive official fee reduction on provisional & complete patent filing, plus fast-track examination under Rule 24C.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 dark:text-purple-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      Patent Inventions <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  <Link
                    to="/legal-services/design-registration-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-emerald-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        Industrial Shapes
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition flex items-center justify-between">
                        <span>Design Registration</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Protect distinctive visual shape, packaging, or product aesthetic with 50% statutory fee concessions for MSMEs.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      Register Product Design <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            )}

            {service.id === 'iec' && (
              <div className="mt-8 bg-gradient-to-br from-indigo-50/70 via-white to-emerald-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/20 border border-indigo-200/70 dark:border-indigo-800/40 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-300/60">
                    Cross-Border Tax Integration
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Statutory Linkages</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                    Mandatory Tax & Compliance Linkage: GST & LUT Filing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
                    Holding an active Import Export Code allows overseas consignments, but cross-border trade requires critical GST linkage to prevent working capital lock-up:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <Link
                    to="/business-registration/gst-registration-filing-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mb-1">
                        1. Section 24 CGST
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition flex items-center justify-between">
                        <span>GST for Exporters</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Mandatory for any person making cross-border supplies, zero-rated exports, or claiming duty drawback, regardless of turnover.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      Register GST <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  <Link
                    to="/business-registration/gst-registration-filing-in-mumbai"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-emerald-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        2. Zero-Rated Supply
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition flex items-center justify-between">
                        <span>Form GST RFD-11 (LUT)</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        File an annual Letter of Undertaking before shipments to export goods and services without paying 18% IGST upfront.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      File Annual LUT <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  <Link
                    to="/compliance-calendar"
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 hover:border-amber-500/80 hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
                        3. Strict Annual Window
                      </div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition flex items-center justify-between">
                        <span>April–June DGFT Renewal</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-sans">
                        Mandatory annual electronic validation between April 1 and June 30 every year to avoid automated IEC deactivation.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/50">
                      View Compliance Due Dates <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Sidebar Navigation (Related Services) */}
        {relatedServices.length > 0 && (
          <div className="w-full lg:w-[350px] xl:w-[380px] flex-shrink-0 space-y-8 lg:sticky lg:top-24 min-w-0">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-7 shadow-md w-full overflow-hidden">
              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-4">Related Services</h3>
              <div className="flex flex-col gap-2.5 w-full min-w-0">
                {relatedServices.map((rel) => {
                  const targetUrl = seoSlugMap[rel.id] || `/services/${rel.id}`;
                  return (
                    <Link
                      key={rel.id}
                      to={targetUrl}
                      className="w-full min-w-0 p-3 sm:p-3.5 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-amber-50/60 dark:hover:bg-slate-800 rounded-2xl flex items-center justify-between transition-all duration-200 group font-medium"
                    >
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 group-hover:text-[#0B4619] dark:group-hover:text-amber-400 transition truncate flex-1 min-w-0 pr-2 font-semibold">
                        {rel.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B4619] dark:group-hover:text-amber-400 transition flex-shrink-0 shrink-0 transform group-hover:translate-x-1" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* IPR Cluster Cross-Link Card for SEO and User Flow */}
            {service.categoryId === 'ipr' && (
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent border border-amber-400/30 dark:border-amber-500/20 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-amber-800 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>IP Strategy Comparison</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                  Which IP Protection Do You Need?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Confused between Trademark, Copyright, Patent, and Design? Compare all 4 protections in one clear guide.
                </p>
                <Link
                  to="/legal-services/ipr-services-in-mumbai"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-gradient-to-r from-[#0B4619] to-[#145a27] text-white rounded-xl text-xs font-bold shadow hover:shadow-md transition group"
                >
                  <span>Compare All 4 IP Types</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                </Link>
              </div>
            )}

            {/* Company Formation Cross-Link Card */}
            {service.categoryId === 'company-formation' && (
              <div className="bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent border border-blue-400/30 dark:border-blue-500/20 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-blue-800 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Founder Decision Guide</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                  Which Business Structure Should I Choose?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Compare Proprietorship vs LLP vs Private Limited vs OPC side-by-side in one clear guide.
                </p>
                <Link
                  to="/business-services/which-business-structure-should-i-choose"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-gradient-to-r from-[#0B4619] to-[#145a27] text-white rounded-xl text-xs font-bold shadow hover:shadow-md transition group"
                >
                  <span>Compare All 6 Structures</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                </Link>
              </div>
            )}

            {/* Licenses & Compliance Cluster Cross-Link Card */}
            {service.categoryId === 'licenses' && (
              <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-transparent border border-emerald-400/30 dark:border-emerald-500/20 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-emerald-800 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Licence & Permit Roadmap</span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                  Which Registrations Does Your Business Need?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Try our interactive licence selector tool. Get an exact, ordered checklist based on your business type, turnover & location.
                </p>
                <Link
                  to="/business-registration/which-registrations-does-my-business-need"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-gradient-to-r from-[#0B4619] to-[#145a27] text-white rounded-xl text-xs font-bold shadow hover:shadow-md transition group"
                >
                  <span>Launch Licence Selector</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Service Specific FAQs - Expanded to Full Width Across All Service Pages */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-md space-y-6">
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/30 dark:bg-slate-900">
                  <button
                    onClick={() => setOpenFaqIdx(openFaqIdx === fIdx ? null : fIdx)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform flex-shrink-0 ${openFaqIdx === fIdx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaqIdx === fIdx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 overflow-hidden"
                      >
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/60">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cross-Link Comparison Banner for IPR Pages */}
      {service.categoryId === 'ipr' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-gradient-to-r from-[#0B4619] to-[#165a29] text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                IPR Decision Matrix
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl">
                Not sure if you need a Trademark, Copyright, Patent, or Design?
              </h3>
              <p className="text-white/80 text-sm max-w-2xl">
                The same product often qualifies for multiple protections on different aspects. Read our comprehensive side-by-side comparison guide.
              </p>
            </div>
            <Link
              to="/legal-services/ipr-services-in-mumbai"
              className="px-6 py-3.5 bg-[#F4C430] hover:bg-[#ffcd38] text-[#0B4619] font-bold text-sm rounded-xl shadow-md transition flex items-center gap-2 flex-shrink-0 group cursor-pointer"
            >
              <span>Explore Which IP I Need</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      )}

      {/* Cross-Link Comparison Banner for Company Formation Pages */}
      {service.categoryId === 'company-formation' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-gradient-to-r from-[#0B4619] to-[#165a29] text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                Entity Selection Matrix
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl">
                Which business structure should you choose?
              </h3>
              <p className="text-white/80 text-sm max-w-2xl">
                There is no single "best" structure. Compare liability, taxes, audit rules, and compliance across Proprietorship, LLP, OPC, and Pvt Ltd.
              </p>
            </div>
            <Link
              to="/business-services/which-business-structure-should-i-choose"
              className="px-6 py-3.5 bg-[#F4C430] hover:bg-[#ffcd38] text-[#0B4619] font-bold text-sm rounded-xl shadow-md transition flex items-center gap-2 flex-shrink-0 group cursor-pointer"
            >
              <span>Compare Business Structures</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      )}

      {/* Cross-Link Comparison Banner for Licenses Pages */}
      {service.categoryId === 'licenses' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-gradient-to-r from-[#0B4619] to-[#165a29] text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5" />
                Interactive Licence Tool
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl">
                Which registrations does your business actually need?
              </h3>
              <p className="text-white/80 text-sm max-w-2xl">
                Avoid running non-compliant operations or paying for redundant licences. Select your entity type, location, and turnover to generate an instant statutory sequence.
              </p>
            </div>
            <Link
              to="/business-registration/which-registrations-does-my-business-need"
              className="px-6 py-3.5 bg-[#F4C430] hover:bg-[#ffcd38] text-[#0B4619] font-bold text-sm rounded-xl shadow-md transition flex items-center gap-2 flex-shrink-0 group cursor-pointer"
            >
              <span>Check Your Licence Stack</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
