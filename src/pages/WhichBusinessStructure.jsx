import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ChevronRight } from 'lucide-react';
import BusinessStructureComparisonSection from '../components/BusinessStructureComparisonSection';
import SEO from '../components/SEO';

export default function WhichBusinessStructure() {
  const canonicalUrl = 'https://shivoham.biz/business-services/which-business-structure-should-i-choose';
  const pageTitle = 'Which Business Structure Should I Choose? Proprietorship vs LLP vs Pvt Ltd vs OPC | Shivoham & Associates';

  const articleSchema = {
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    headline: 'Which Business Structure Should I Choose? Proprietorship vs LLP vs Pvt Ltd vs OPC',
    description: 'Comprehensive decision guide comparing Proprietorship, Partnership Firm, OPC, LLP, Private Limited, and Section 8 NGO incorporation in India.',
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
        name: 'Company Formation',
        item: 'https://shivoham.biz/#services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Which Business Structure Should I Choose?',
        item: canonicalUrl
      }
    ]
  };

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 py-8 transition-all">
      {/* SEO Metadata & Schemas */}
      <SEO
        title={pageTitle}
        description="Comprehensive decision guide comparing Proprietorship, Partnership Firm, OPC, LLP, Private Limited, and Section 8 NGO. Find the right structure for your startup."
        canonicalUrl={canonicalUrl}
        schemas={[articleSchema, breadcrumbSchema]}
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
              Company Formation
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" /></li>
          <li className="text-slate-900 dark:text-white font-semibold truncate" aria-current="page">
            Which Business Structure Should I Choose?
          </li>
        </ol>
      </nav>

      {/* Hero Banner with Golden Gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 bg-[#0B4617]/10 border border-primary-400/20 text-[#0B4619] text-xs font-bold uppercase rounded-full tracking-wider inline-flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                Corporate Strategy & Structuring
              </span>
              <span className="text-[#0B4619]/60 text-xs font-semibold">• High-Traffic Founder Guide</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Which business structure should I choose?
            </h1>

            <p className="text-[#0B4619] font-sans text-base sm:text-lg font-bold leading-relaxed">
              This is the single highest-traffic question in the category. Build it as its own page and link every entity page back to it.
            </p>

            <p className="text-[#0B4619] font-sans text-base sm:text-lg leading-relaxed font-medium">
              There is no "best" structure. The right one depends on how many owners you have, whether you need outside investment, how much personal risk you can carry, and how much annual compliance you are willing to pay for.
            </p>
          </div>
        </div>
      </div>

      {/* Main Comparison Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <BusinessStructureComparisonSection />
      </div>
    </div>
  );
}
