import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';
import IPRComparisonSection from '../components/IPRComparisonSection';
import SEO from '../components/SEO';

export default function WhichIPProtection() {
  const canonicalUrl = 'https://shivoham.biz/legal-services/ipr-services-in-mumbai';
  const pageTitle = 'Which IP Protection Do I Need? Trademark vs Patent vs Copyright vs Design | Shivoham & Associates';

  const articleSchema = {
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    headline: 'Which IP Protection Do I Need? Trademark vs Patent vs Copyright vs Design',
    description: 'Comprehensive guide comparing Trademark, Copyright, Patent, and Industrial Design registration under Indian IP law.',
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
        name: 'IPR Services',
        item: 'https://shivoham.biz/#services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Which IP Protection Do I Need?',
        item: canonicalUrl
      }
    ]
  };

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 py-8 transition-all">
      {/* SEO Metadata & Schemas */}
      <SEO
        title={pageTitle}
        description="Trademark, copyright, patent and design protect four distinct facets of your business. Compare differences, statutory terms, and criteria in Mumbai."
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
              IPR Services
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" /></li>
          <li className="text-slate-900 dark:text-white font-semibold truncate" aria-current="page">
            Which IP Protection Do I Need?
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
                <Shield className="w-3.5 h-3.5" />
                IPR Advisory & Strategy
              </span>
              <span className="text-[#0B4619]/60 text-xs font-semibold">• Comprehensive Comparison</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Which IP Protection Do I Need?
            </h1>

            <p className="text-[#0B4619] font-sans text-base sm:text-lg leading-relaxed font-medium">
              Trademark, copyright, patent and design protect four different things. Most businesses need more than one, and they are not alternatives to each other.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Comparison Section */}
        <IPRComparisonSection />
      </div>
    </div>
  );
}
