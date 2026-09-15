import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Clock,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

export default function WhichRegistrationsNeed() {
  const canonicalUrl = 'https://shivoham.biz/business-registration/which-registrations-does-my-business-need';
  const pageTitle = 'Which Business Licences & Registrations Do You Actually Need? | Shivoham & Associates';

  const [selectedType, setSelectedType] = useState('restaurant');
  const [selectedLocation, setSelectedLocation] = useState('mumbai');
  const [selectedTurnover, setSelectedTurnover] = useState('under_12l');
  const [selectedStaff, setSelectedStaff] = useState('yes');
  const [copied, setCopied] = useState(false);

  const activeChecklist = useMemo(() => {
    const isMumbai = selectedLocation === 'mumbai';
    const isMaha = selectedLocation === 'mumbai' || selectedLocation === 'maharashtra';
    const hasStaff = selectedStaff === 'yes';
    const isHighTurnover = selectedTurnover === '40l_1_5cr' || selectedTurnover === 'above_1_5cr';
    const isMediumTurnover = selectedTurnover === '20l_40l' || isHighTurnover;

    const list = [];

    if (selectedType === 'restaurant') {
      if (isMaha) {
        list.push({
          title: 'Shop Act / Gumasta License',
          badge: 'Mandatory First Step',
          desc: isMumbai 
            ? 'Prerequisite to establish commercial premises in Mumbai (Form F Intimation or Form G Registration via BMC).'
            : 'Statutory registration under Maharashtra Shops and Establishments Act 2017 via Aaple Sarkar.',
          path: '/business-registration/gumasta-license-registration-in-mumbai'
        });
      }
      list.push({
        title: selectedTurnover === 'under_12l' ? 'FSSAI Basic Food Registration' : 'FSSAI State Food Licence',
        badge: 'Mandatory',
        desc: selectedTurnover === 'under_12l'
          ? 'Mandatory 14-digit FSSAI number on FoSCoS portal for petty food businesses (< ₹12L turnover) before commencing kitchen operations.'
          : 'Mandatory FSSAI State Licence on FoSCoS portal (₹12L to ₹20Cr) required to operate and list on Swiggy/Zomato.',
        path: '/business-registration/fssai-food-license-in-mumbai'
      });
      if (isMumbai) {
        list.push({
          title: 'BMC Health Trade Licence & Fire NOC',
          badge: 'Mandatory for Premises',
          desc: 'Issued by local municipal health department and Chief Fire Officer for commercial dining & kitchens.',
          path: '/business-registration/fssai-food-license-in-mumbai'
        });
      }
      list.push({
        title: 'GST Registration',
        badge: isMediumTurnover ? 'Mandatory' : 'Recommended / Optional',
        desc: isMediumTurnover
          ? 'Compulsory statutory registration for restaurants and food services crossing ₹20 Lakhs turnover.'
          : 'Optional below threshold, but required to claim Input Tax Credit on commercial equipment and raw materials.',
        path: '/business-registration/gst-registration-filing-in-mumbai'
      });
      if (isMaha) {
        list.push({
          title: 'Professional Tax (PTEC)',
          badge: 'Mandatory in Maharashtra',
          desc: 'Flat ₹2,500 annual tax on the restaurant owner/entity payable to Maharashtra government.',
          path: '/business-registration/professional-tax-ptec-ptrc-in-mumbai'
        });
        if (hasStaff) {
          list.push({
            title: 'Professional Tax (PTRC)',
            badge: 'Mandatory for Payroll',
            desc: 'Mandatory employer registration to deduct and remit professional tax from staff salaries above state threshold.',
            path: '/business-registration/professional-tax-ptec-ptrc-in-mumbai'
          });
        }
      }
      list.push({
        title: 'MSME Udyam Registration',
        badge: 'Recommended Benefit',
        desc: 'Unlocks subsidized commercial electricity tariffs, 45-day payment protection under MSMED Act, and priority bank credit.',
        path: '/business-registration/msme-udyam-registration-in-mumbai'
      });
    } else if (selectedType === 'ecommerce') {
      list.push({
        title: 'GST Registration',
        badge: 'Mandatory from Day 1',
        desc: 'Compulsory under Section 24 of CGST Act for all marketplace suppliers (Amazon, Flipkart, Blinkit, D2C), regardless of turnover.',
        path: '/business-registration/gst-registration-filing-in-mumbai'
      });
      if (isMaha) {
        list.push({
          title: 'Shop Act / Gumasta Intimation',
          badge: 'Mandatory for Premises',
          desc: 'Required for commercial office or residential warehouse address proof to open a dedicated current bank account.',
          path: '/business-registration/gumasta-license-registration-in-mumbai'
        });
      }
      list.push({
        title: 'MSME Udyam Registration',
        badge: 'Recommended',
        desc: 'Permanent statutory ID granting 50% discount on government trademark fees and access to collateral-free business loans.',
        path: '/business-registration/msme-udyam-registration-in-mumbai'
      });
      list.push({
        title: 'Trademark Registration',
        badge: 'Crucial for Brand Registry',
        desc: 'Essential to lock brand name exclusivity, avoid listing hijacking, and unlock Amazon Brand Registry protection.',
        path: '/legal-services/trademark-registration-in-mumbai'
      });
      list.push({
        title: 'BIS CRS / ISI Mark',
        badge: 'Sector Specific',
        desc: 'Compulsory if selling notified electronics, power banks, toys, footwear, or consumer electrical goods online.',
        path: '/business-registration/bis-certification-in-mumbai'
      });
      if (isMaha) {
        list.push({
          title: 'Professional Tax (PTEC' + (hasStaff ? ' & PTRC)' : ')'),
          badge: 'Mandatory in Maharashtra',
          desc: 'Statutory compliance for business owners and employer payroll tax deduction.',
          path: '/business-registration/professional-tax-ptec-ptrc-in-mumbai'
        });
      }
    } else if (selectedType === 'export') {
      list.push({
        title: 'Import Export Code (IEC) + AD Code',
        badge: 'Mandatory First Step',
        desc: '10-digit primary customs identifier issued by DGFT, registered with Bank AD Code at Mumbai ICEGATE ports.',
        path: '/business-registration/import-export-code-iec-in-mumbai'
      });
      list.push({
        title: 'GST Registration + LUT Filing',
        badge: 'Mandatory for Export',
        desc: 'Letter of Undertaking (LUT) allows zero-rated export of goods or services without upfront payment of integrated GST (IGST).',
        path: '/business-registration/gst-registration-filing-in-mumbai'
      });
      if (isMaha) {
        list.push({
          title: 'Gumasta & Professional Tax (PTEC)',
          badge: 'Mandatory State Compliance',
          desc: 'State statutory compliance for business establishment and owner tax enrollment.',
          path: '/business-registration/professional-tax-ptec-ptrc-in-mumbai'
        });
      }
      list.push({
        title: 'MSME Udyam Registration',
        badge: 'Recommended',
        desc: 'Unlocks international trade fair subsidies, export credit guarantees, and statutory priority clearance.',
        path: '/business-registration/msme-udyam-registration-in-mumbai'
      });
      list.push({
        title: 'CE Marking Certification',
        badge: 'For European Exports',
        desc: 'Mandatory technical file declaration if exporting industrial machinery, electrical equipment or medical devices to the EU/EEA.',
        path: '/business-registration/ce-marking-in-mumbai'
      });
    } else if (selectedType === 'freelance') {
      if (isMaha) {
        list.push({
          title: 'Shop Act Gumasta (Form F Intimation)',
          badge: 'Mandatory First Step',
          desc: 'Zero government fee online intimation receipt for self-employed individuals to open a commercial bank account.',
          path: '/business-registration/gumasta-license-registration-in-mumbai'
        });
        list.push({
          title: 'Professional Tax (PTEC)',
          badge: 'Mandatory in Maharashtra',
          desc: '₹2,500 flat annual statutory tax levied on professionals carrying on independent practice.',
          path: '/business-registration/professional-tax-ptec-ptrc-in-mumbai'
        });
      }
      list.push({
        title: 'GST Registration',
        badge: isMediumTurnover ? 'Mandatory' : 'Optional (< ₹20L)',
        desc: isMediumTurnover
          ? 'Compulsory registration as service turnover crosses the statutory ₹20 Lakhs threshold.'
          : 'Optional under ₹20L, but required if billing export clients under an LUT or inter-state corporate clients.',
        path: '/business-registration/gst-registration-filing-in-mumbai'
      });
      list.push({
        title: 'MSME Udyam Registration',
        badge: 'Recommended',
        desc: 'Gives freelancers legal protection under the MSMED Samadhaan portal against delayed payments past 45 days.',
        path: '/business-registration/msme-udyam-registration-in-mumbai'
      });
    } else if (selectedType === 'startup') {
      list.push({
        title: 'Private Limited or LLP Incorporation',
        badge: 'Prerequisite Entity',
        desc: 'Corporate structure with limited liability, required for venture capital equity funding and DPIIT recognition.',
        path: '/business-services/company-formation-in-mumbai'
      });
      list.push({
        title: 'Class 3 Digital Signature Certificate (DSC)',
        badge: 'Mandatory',
        desc: 'Cryptographic USB token required to sign MCA incorporation forms, annual returns, and patent e-filings.',
        path: '/business-registration/dsc-digital-signature-in-mumbai'
      });
      list.push({
        title: 'DPIIT Startup Recognition',
        badge: 'Statutory Incentives',
        desc: 'Unlocks Section 80-IAC 3-year income tax holiday eligibility, 80% patent rebate, 50% trademark rebate, and public tender relaxations.',
        path: '/business-registration/dpiit-startup-recognition-in-mumbai'
      });
      list.push({
        title: 'GST & Professional Tax (PTEC & PTRC)',
        badge: 'Mandatory',
        desc: 'Required for corporate invoicing, input credit on tech infrastructure, and employee payroll compliance.',
        path: '/business-registration/professional-tax-ptec-ptrc-in-mumbai'
      });
      list.push({
        title: 'Intellectual Property (Trademark & Patent)',
        badge: 'Fast-Track with 80% Rebate',
        desc: 'Protect core technology and brand name with fast-track examination under the Startup India SIPP framework.',
        path: '/legal-services/patent-registration-in-mumbai'
      });
    } else {
      // General retail / manufacturing
      if (isMaha) {
        list.push({
          title: 'Shop Act / Gumasta License',
          badge: 'Mandatory for Commercial Unit',
          desc: 'Primary municipal authorization under the Maharashtra Shops & Establishments Act 2017.',
          path: '/business-registration/gumasta-license-registration-in-mumbai'
        });
        list.push({
          title: 'Professional Tax (PTEC' + (hasStaff ? ' & PTRC)' : ')'),
          badge: 'Mandatory in Maharashtra',
          desc: 'Statutory state tax registration for business owner and payroll.',
          path: '/business-registration/professional-tax-ptec-ptrc-in-mumbai'
        });
      }
      list.push({
        title: 'GST Registration',
        badge: isHighTurnover ? 'Mandatory (> ₹40L)' : 'Threshold Dependent',
        desc: isHighTurnover
          ? 'Compulsory registration as goods turnover crosses ₹40 Lakhs statutory limit.'
          : 'Optional below ₹40L, but required for inter-state sales and claiming input credit.',
        path: '/business-registration/gst-registration-filing-in-mumbai'
      });
      list.push({
        title: 'MSME Udyam Registration',
        badge: 'High Value',
        desc: 'Statutory MSME certificate granting priority lending, lower electricity rates, and tender preference.',
        path: '/business-registration/msme-udyam-registration-in-mumbai'
      });
      if (selectedType === 'manufacturing') {
        list.push({
          title: 'BIS Certification (ISI / CRS)',
          badge: 'Mandatory for Notified Goods',
          desc: 'Required if producing goods notified under Quality Control Orders (QCOs) by the Ministry.',
          path: '/business-registration/bis-certification-in-mumbai'
        });
        list.push({
          title: 'ISO 9001 Certification',
          badge: 'Commercial Quality Credential',
          desc: 'Voluntary international standard demonstrating verified quality management workflows for tenders.',
          path: '/business-registration/iso-certification-in-mumbai'
        });
      }
    }

    return list;
  }, [selectedType, selectedLocation, selectedTurnover, selectedStaff]);

  const handleCopyChecklist = () => {
    const text = activeChecklist.map((s, i) => `${i + 1}. ${s.title} (${s.badge}) - ${s.desc}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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

            {/* Statutory Verification Strip */}
            <div className="pt-4 border-t border-[#0B4617]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#0B4619]/90">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0B4617] shrink-0" />
                Thresholds and fees as notified; subject to revision. Verified on September 2026.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

        {/* Interactive Licence Selector Tool (Section 0) */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/50 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Statutory Sequencing Tool
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Licence & Registration Selector
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
              Select your business model, location, and operational scale below to generate an exact, sequenced statutory registration roadmap.
            </p>
          </div>

          {/* Interactive Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
            {/* 1. Business Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                1. Business Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition cursor-pointer"
              >
                <option value="restaurant">Restaurant / Café / Cloud Kitchen</option>
                <option value="freelance">Freelancer / Professional / Agency</option>
                <option value="ecommerce">E-commerce Seller (Amazon/D2C)</option>
                <option value="retail">Retail Shop / Commercial Store</option>
                <option value="manufacturing">Manufacturer / Factory Producer</option>
                <option value="export">Exporter / Importer of Goods</option>
                <option value="startup">Tech / DPIIT Innovation Startup</option>
              </select>
            </div>

            {/* 2. Location */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                2. Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition cursor-pointer"
              >
                <option value="mumbai">Mumbai (BMC / Dadar / Suburbs)</option>
                <option value="maharashtra">Rest of Maharashtra</option>
                <option value="other">Outside Maharashtra</option>
              </select>
            </div>

            {/* 3. Turnover Bracket */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                3. Annual Turnover
              </label>
              <select
                value={selectedTurnover}
                onChange={(e) => setSelectedTurnover(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition cursor-pointer"
              >
                <option value="under_12l">Below ₹12 Lakhs</option>
                <option value="12l_20l">₹12 Lakhs – ₹20 Lakhs</option>
                <option value="20l_40l">₹20 Lakhs – ₹40 Lakhs</option>
                <option value="40l_1_5cr">₹40 Lakhs – ₹1.5 Crore</option>
                <option value="above_1_5cr">Above ₹1.5 Crore</option>
              </select>
            </div>

            {/* 4. Employees */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                4. Salaried Employees
              </label>
              <select
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
                className="w-full text-xs sm:text-sm font-semibold p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition cursor-pointer"
              >
                <option value="yes">Yes (Employing staff)</option>
                <option value="no">No (Solopreneur / Partners only)</option>
              </select>
            </div>
          </div>

          {/* Sequenced Checklist Results */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                  Sequenced Registration Stack ({activeChecklist.length} Required Steps)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Follow this chronological sequence to avoid rejection or invalid premises documentation:
                </p>
              </div>
              <button
                onClick={handleCopyChecklist}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition cursor-pointer flex items-center gap-1.5"
              >
                {copied ? '✓ Copied to Clipboard!' : 'Copy Checklist'}
              </button>
            </div>

            <div className="space-y-3">
              {activeChecklist.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700/60 transition shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-xl bg-[#0B4617] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-base text-slate-900 dark:text-white">
                          {step.title}
                        </h4>
                        <span className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                          step.badge === 'Mandatory'
                            ? 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300 border-red-200 dark:border-red-800'
                            : step.badge === 'Prerequisite'
                            ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                            : step.badge === 'Turnover Dependent'
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                            : 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                        }`}>
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={step.path}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0B4617] dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 hover:bg-[#0B4617] hover:text-white dark:hover:bg-emerald-600 transition shrink-0 self-start sm:self-center"
                  >
                    <span>View Filing Process</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

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
