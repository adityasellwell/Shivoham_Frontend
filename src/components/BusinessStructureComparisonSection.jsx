import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  ShieldAlert, 
  ShieldCheck,
  Coins, 
  FileCheck2, 
  FileSearch, 
  TrendingUp, 
  Receipt, 
  Scale, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle,
  Briefcase,
  HelpCircle,
  Clock,
  ExternalLink,
  Check,
  X
} from 'lucide-react';

export const businessStructureData = {
  columns: [
    {
      id: 'proprietorship',
      title: 'Proprietorship',
      shortTitle: 'Proprietor',
      badge: 'Solo',
      subtitle: 'Zero setup friction',
      link: '/business-services/sole-proprietorship-registration-in-mumbai',
      cta: 'Register'
    },
    {
      id: 'partnership',
      title: 'Partnership Firm',
      shortTitle: 'Partnership',
      badge: 'Firm',
      subtitle: 'Traditional partners',
      link: '/business-services/partnership-firm-registration-in-mumbai',
      cta: 'Register'
    },
    {
      id: 'opc',
      title: 'OPC',
      shortTitle: 'OPC',
      badge: 'Solo Co.',
      subtitle: '1 Member + 1 Nominee',
      link: '/business-services/opc-registration-in-mumbai',
      cta: 'Register'
    },
    {
      id: 'llp',
      title: 'LLP',
      shortTitle: 'LLP',
      badge: 'LLP',
      subtitle: 'Professions & services',
      link: '/business-services/llp-incorporation-in-mumbai',
      cta: 'Register'
    },
    {
      id: 'private-limited',
      title: 'Private Limited',
      shortTitle: 'Pvt Ltd',
      badge: 'Startup Standard',
      subtitle: 'Institutional & VC-ready',
      link: '/business-services/company-formation-in-mumbai',
      cta: 'Incorporate'
    },
    {
      id: 'section-8',
      title: 'Section 8',
      shortTitle: 'Section 8',
      badge: 'Non-Profit',
      subtitle: 'Charity & NGO',
      link: '/business-services/ngo-trust-registration-in-mumbai',
      cta: 'Register'
    }
  ],
  rows: [
    {
      id: 'owners',
      label: 'Owners',
      sublabel: 'Minimum to max members',
      icon: Users,
      values: {
        proprietorship: '1',
        partnership: '2 to 50',
        opc: '1 + 1 Nominee',
        llp: '2+ Partners',
        'private-limited': '2 to 200',
        'section-8': '2+'
      },
      renderType: 'text-bold'
    },
    {
      id: 'entity',
      label: 'Separate Legal Entity',
      sublabel: 'Independent corporate status',
      icon: Scale,
      values: {
        proprietorship: false,
        partnership: false,
        opc: true,
        llp: true,
        'private-limited': true,
        'section-8': true
      },
      renderType: 'boolean'
    },
    {
      id: 'liability',
      label: 'Personal Liability',
      sublabel: 'Risk on personal assets',
      icon: ShieldAlert,
      values: {
        proprietorship: { text: 'Unlimited', type: 'danger' },
        partnership: { text: 'Unlimited', sub: 'Joint & several', type: 'danger' },
        opc: { text: 'Limited', type: 'safe' },
        llp: { text: 'Limited', type: 'safe' },
        'private-limited': { text: 'Limited', type: 'safe' },
        'section-8': { text: 'Limited', type: 'safe' }
      },
      renderType: 'liability'
    },
    {
      id: 'capital',
      label: 'Minimum Capital',
      sublabel: 'Mandatory deposit',
      icon: Coins,
      values: {
        proprietorship: 'None',
        partnership: 'None',
        opc: 'None',
        llp: 'None',
        'private-limited': 'None',
        'section-8': 'None'
      },
      renderType: 'neutral-pill'
    },
    {
      id: 'registration',
      label: 'Registration',
      sublabel: 'Statutory authority',
      icon: FileCheck2,
      values: {
        proprietorship: { text: 'None as such' },
        partnership: { text: 'Optional (ROF)' },
        opc: { text: 'Mandatory (MCA)' },
        llp: { text: 'Mandatory (MCA)' },
        'private-limited': { text: 'Mandatory (MCA)' },
        'section-8': { text: 'Mandatory (MCA + Lic)' }
      },
      renderType: 'text-sm'
    },
    {
      id: 'audit',
      label: 'Statutory Audit',
      sublabel: 'Annual CA check',
      icon: FileSearch,
      values: {
        proprietorship: { text: 'No', type: 'no' },
        partnership: { text: 'No', type: 'no' },
        opc: { text: 'Yes', type: 'yes' },
        llp: { text: 'Threshold-based', sub: '> ₹40L turnover', type: 'warning' },
        'private-limited': { text: 'Yes, always', type: 'yes' },
        'section-8': { text: 'Yes', type: 'yes' }
      },
      renderType: 'audit'
    },
    {
      id: 'funding',
      label: 'VC / Equity Funding',
      sublabel: 'Issue investor shares',
      icon: TrendingUp,
      values: {
        proprietorship: { text: 'No', type: 'no' },
        partnership: { text: 'No', type: 'no' },
        opc: { text: 'Not practically', type: 'warning' },
        llp: { text: 'Difficult', type: 'warning' },
        'private-limited': { text: 'Yes', sub: 'VC standard', type: 'highlight' },
        'section-8': { text: 'No', sub: 'Grants only', type: 'no' }
      },
      renderType: 'funding'
    },
    {
      id: 'taxation',
      label: 'Taxation',
      sublabel: 'Applicable tax regime',
      icon: Receipt,
      values: {
        proprietorship: { text: 'Individual slab' },
        partnership: { text: 'Firm rate (30%)' },
        opc: { text: 'Company rate (22%)' },
        llp: { text: 'Firm rate (30%)' },
        'private-limited': { text: 'Company rate (22%)' },
        'section-8': { text: 'Exempt (12A/80G)' }
      },
      renderType: 'text-sm'
    },
    {
      id: 'compliance',
      label: 'Compliance Cost',
      sublabel: 'Annual maintenance',
      icon: Clock,
      values: {
        proprietorship: { text: 'Minimal', color: 'emerald' },
        partnership: { text: 'Low', color: 'emerald' },
        opc: { text: 'Moderate', color: 'blue' },
        llp: { text: 'Low to Mod.', color: 'teal' },
        'private-limited': { text: 'Highest', color: 'amber' },
        'section-8': { text: 'Mod. to High', color: 'purple' }
      },
      renderType: 'compliance'
    },
    {
      id: 'law',
      label: 'Governing Law',
      sublabel: 'Governing legislation',
      icon: Scale,
      values: {
        proprietorship: 'No statute',
        partnership: 'Partnership Act, 1932*',
        opc: 'Companies Act, 2013',
        llp: 'LLP Act, 2008',
        'private-limited': 'Companies Act, 2013',
        'section-8': 'Companies Act, 2013'
      },
      renderType: 'text-sm'
    }
  ]
};

export const decisionGuide = [
  {
    title: 'Testing an idea, working alone, low risk, tight budget',
    structure: 'Proprietorship',
    note: 'Easiest setup with near-zero compliance overhead. You can convert later into a Pvt Ltd or LLP.',
    link: '/business-services/sole-proprietorship-registration-in-mumbai',
    color: 'border-amber-400/40 bg-amber-50/50 dark:bg-amber-950/20'
  },
  {
    title: 'Working alone but want limited liability & corporate credibility',
    structure: 'One Person Company (OPC)',
    note: 'Gives full corporate separation and limited liability for a single founder with one nominee.',
    link: '/business-services/opc-registration-in-mumbai',
    color: 'border-blue-400/40 bg-blue-50/50 dark:bg-blue-950/20'
  },
  {
    title: 'Two or more people, professional services, no plan to raise equity',
    structure: 'Limited Liability Partnership (LLP)',
    note: 'Protects personal assets, gives partnership tax benefits, and avoids rigid company meetings.',
    link: '/business-services/llp-incorporation-in-mumbai',
    color: 'border-emerald-400/40 bg-emerald-50/50 dark:bg-emerald-950/20'
  },
  {
    title: 'Planning to raise funding, issue ESOPs, or onboard investors',
    structure: 'Private Limited Company',
    note: 'The ONLY corporate vehicle institutional investors and VC funds will write cheques for.',
    link: '/business-services/company-formation-in-mumbai',
    color: 'border-purple-400/40 bg-purple-50/50 dark:bg-purple-950/20'
  },
  {
    title: 'Family or small trading business, partners who trust each other, minimal compliance',
    structure: 'Partnership Firm, registered',
    note: 'Simple agreement-based operation with lower statutory compliance burdens.',
    link: '/business-services/partnership-firm-registration-in-mumbai',
    color: 'border-orange-400/40 bg-orange-50/50 dark:bg-orange-950/20'
  },
  {
    title: 'Charitable, educational or social welfare purpose',
    structure: 'Section 8 Company, Trust or Society',
    note: 'Unlocks 12A/80G tax exemptions, foreign contributions (FCRA), and public CSR donations.',
    link: '/business-services/ngo-trust-registration-in-mumbai',
    color: 'border-rose-400/40 bg-rose-50/50 dark:bg-rose-950/20'
  }
];

export default function BusinessStructureComparisonSection() {
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [mobileCompareA, setMobileCompareA] = useState('private-limited');
  const [mobileCompareB, setMobileCompareB] = useState('llp');
  const [mobileTab, setMobileTab] = useState('private-limited');
  const [mobileView, setMobileView] = useState('compare'); // 'compare' | 'single'

  const renderCell = (row, colId) => {
    const val = row.values[colId];

    if (row.renderType === 'boolean') {
      return val ? (
        <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-bold text-xs bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
          <Check className="w-3 h-3 text-emerald-600" /> Yes
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-slate-500 font-semibold text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
          <X className="w-3 h-3 text-slate-400" /> No
        </span>
      );
    }

    if (row.renderType === 'liability') {
      const isSafe = val.type === 'safe';
      return (
        <div className="flex flex-col items-center">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold border ${
            isSafe 
              ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' 
              : 'bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800'
          }`}>
            {val.text}
          </span>
          {val.sub && (
            <span className="text-[10px] text-slate-400 mt-0.5 leading-tight text-center">
              {val.sub}
            </span>
          )}
        </div>
      );
    }

    if (row.renderType === 'funding') {
      if (val.type === 'highlight') {
        return (
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-xs">
              <Sparkles className="w-2.5 h-2.5" /> Yes
            </span>
            <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-semibold mt-0.5 text-center">
              {val.sub}
            </span>
          </div>
        );
      }
      return (
        <div className="flex flex-col items-center">
          <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
            val.type === 'warning' 
              ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800' 
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
          }`}>
            {val.text}
          </span>
          {val.sub && (
            <span className="text-[10px] text-slate-400 mt-0.5 text-center">
              {val.sub}
            </span>
          )}
        </div>
      );
    }

    if (row.renderType === 'audit') {
      return (
        <div className="flex flex-col items-center">
          <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${
            val.type === 'yes'
              ? 'bg-purple-50 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
              : val.type === 'warning'
              ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
              : 'text-slate-600 dark:text-slate-400'
          }`}>
            {val.text}
          </span>
          {val.sub && (
            <span className="text-[10px] text-slate-400 text-center mt-0.5">
              {val.sub}
            </span>
          )}
        </div>
      );
    }

    if (row.renderType === 'compliance') {
      const colorMap = {
        emerald: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200',
        teal: 'bg-teal-50 text-teal-800 dark:bg-teal-950/50 dark:text-teal-300 border-teal-200',
        blue: 'bg-blue-50 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200',
        amber: 'bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200',
        purple: 'bg-purple-50 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200'
      };
      return (
        <span className={`px-2 py-0.5 rounded-md text-xs font-bold border ${colorMap[val.color] || ''}`}>
          {val.text}
        </span>
      );
    }

    if (row.renderType === 'neutral-pill') {
      return (
        <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
          {val}
        </span>
      );
    }

    if (row.renderType === 'text-sm') {
      return (
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center leading-tight">
          {typeof val === 'string' ? val : val.text}
        </span>
      );
    }

    return (
      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 text-center leading-tight">
        {val}
      </span>
    );
  };

  const colA = businessStructureData.columns.find(c => c.id === mobileCompareA) || businessStructureData.columns[4];
  const colB = businessStructureData.columns.find(c => c.id === mobileCompareB) || businessStructureData.columns[3];
  const singleCol = businessStructureData.columns.find(c => c.id === mobileTab) || businessStructureData.columns[4];

  return (
    <div className="space-y-12 w-full">
      {/* 1. Header Overview Statement */}
      <div className="max-w-4xl mx-auto text-center space-y-3 px-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Entity Comparison Matrix</span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
          Side-by-Side Entity Comparison
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
          Evaluate ownership, liability, tax rates, and investor readiness before registering.
        </p>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. DESKTOP FULL TABLE: 100% WIDTH, ZERO HORIZONTAL SCROLL */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
        <table className="w-full table-fixed border-collapse">
          {/* Exact Percentage Widths (Total = 100%) */}
          <colgroup>
            <col className="w-[20%]" />
            <col className="w-[13.33%]" />
            <col className="w-[13.33%]" />
            <col className="w-[13.33%]" />
            <col className="w-[13.33%]" />
            <col className="w-[13.35%]" />
            <col className="w-[13.33%]" />
          </colgroup>

          {/* Table Header */}
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50">
              <th className="p-4 text-left font-display font-black text-xs uppercase tracking-wider text-slate-500 border-r border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-primary-600" />
                  <span>Parameters</span>
                </div>
              </th>

              {businessStructureData.columns.map((col) => {
                const isHovered = hoveredColumn === col.id;
                return (
                  <th
                    key={col.id}
                    onMouseEnter={() => setHoveredColumn(col.id)}
                    onMouseLeave={() => setHoveredColumn(null)}
                    className={`p-3.5 text-center border-r border-slate-100 dark:border-slate-800 last:border-r-0 relative transition ${
                      isHovered ? 'bg-primary-50/50 dark:bg-slate-800/80' : ''
                    }`}
                  >
                    <div className="space-y-1 pt-0.5">
                      <span className="inline-block text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {col.badge}
                      </span>
                      <h3 className="font-display font-black text-sm text-slate-900 dark:text-white leading-tight">
                        {col.shortTitle}
                      </h3>
                      <Link
                        to={col.link}
                        className="inline-flex items-center justify-center gap-1 w-full py-1 px-2 rounded-md text-[11px] font-bold transition shadow-2xs bg-primary-600 hover:bg-primary-700 text-white"
                      >
                        <span>{col.cta}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {businessStructureData.rows.map((row, rIdx) => {
              const Icon = row.icon;
              const isEven = rIdx % 2 === 0;

              return (
                <tr
                  key={row.id}
                  className={`transition ${isEven ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/40 dark:bg-slate-950/30'}`}
                >
                  <td className="p-3 text-left border-r border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white text-xs">
                        {row.label}
                      </span>
                    </div>
                  </td>

                  {businessStructureData.columns.map((col) => {
                    const isHovered = hoveredColumn === col.id;
                    return (
                      <td
                        key={col.id}
                        onMouseEnter={() => setHoveredColumn(col.id)}
                        onMouseLeave={() => setHoveredColumn(null)}
                        className={`p-3 text-center align-middle border-r border-slate-100 dark:border-slate-800 last:border-r-0 transition ${
                          isHovered ? 'bg-primary-50/30 dark:bg-slate-800/40' : ''
                        }`}
                      >
                        {renderCell(row, col.id)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>

          {/* Table Footer */}
          <tfoot>
            <tr className="bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800">
              <td className="p-3 border-r border-slate-200 dark:border-slate-800 font-bold text-xs text-slate-400 uppercase tracking-wider">
                Registration
              </td>
              {businessStructureData.columns.map((col) => (
                <td key={col.id} className="p-2.5 text-center border-r border-slate-100 dark:border-slate-800 last:border-r-0">
                  <Link
                    to={col.link}
                    className="inline-flex items-center justify-center gap-1 text-xs font-bold text-primary-700 dark:text-primary-400 hover:underline"
                  >
                    <span>Start</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. MOBILE & TABLET VIEW: 100% RESPONSIVE, ZERO SCROLLING */}
      {/* ---------------------------------------------------- */}
      <div className="block lg:hidden w-full space-y-4">
        {/* View Switcher: Head-to-Head Compare vs Single Entity Details */}
        <div className="flex items-center justify-center gap-2 pb-1">
          <button
            onClick={() => setMobileView('compare')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              mobileView === 'compare'
                ? 'bg-primary-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            ⚖️ Compare Any 2 Structures
          </button>
          <button
            onClick={() => setMobileView('single')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              mobileView === 'single'
                ? 'bg-primary-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            📋 Single Structure Specs
          </button>
        </div>

        {/* MODE 1: MOBILE HEAD-TO-HEAD COMPARISON (Fits 100% Mobile Screen, Zero Scrolling) */}
        {mobileView === 'compare' && (
          <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
            {/* 2-Entity Selector Row */}
            <div className="p-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Entity 1</label>
                <select
                  value={mobileCompareA}
                  onChange={(e) => setMobileCompareA(e.target.value)}
                  className="w-full p-2 text-xs font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                >
                  {businessStructureData.columns.map((col) => (
                    <option key={col.id} value={col.id}>{col.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Entity 2</label>
                <select
                  value={mobileCompareB}
                  onChange={(e) => setMobileCompareB(e.target.value)}
                  className="w-full p-2 text-xs font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                >
                  {businessStructureData.columns.map((col) => (
                    <option key={col.id} value={col.id}>{col.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Header Cards */}
            <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-3 text-center">
              <div className="px-2 space-y-1">
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {colA.badge}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">{colA.title}</h4>
                <Link
                  to={colA.link}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary-600 dark:text-primary-400 pt-1"
                >
                  <span>Register →</span>
                </Link>
              </div>

              <div className="px-2 space-y-1">
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {colB.badge}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">{colB.title}</h4>
                <Link
                  to={colB.link}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-primary-600 dark:text-primary-400 pt-1"
                >
                  <span>Register →</span>
                </Link>
              </div>
            </div>

            {/* 10 Rows Side-by-Side */}
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {businessStructureData.rows.map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.id} className="p-3 space-y-2">
                    {/* Row Header */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-primary-600" />
                      <span>{row.label}</span>
                    </div>

                    {/* 2-Column Values */}
                    <div className="grid grid-cols-2 gap-2 divide-x divide-slate-100 dark:divide-slate-800">
                      <div className="text-center pr-1 flex items-center justify-center">
                        {renderCell(row, colA.id)}
                      </div>
                      <div className="text-center pl-1 flex items-center justify-center">
                        {renderCell(row, colB.id)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MODE 2: SINGLE ENTITY SPECIFICATION CARD */}
        {mobileView === 'single' && (
          <div className="w-full space-y-3">
            {/* 6 Tab Buttons in a 3x2 Grid (100% fits, zero scroll) */}
            <div className="grid grid-cols-3 gap-1.5">
              {businessStructureData.columns.map((col) => {
                const isActive = mobileTab === col.id;
                return (
                  <button
                    key={col.id}
                    onClick={() => setMobileTab(col.id)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition border cursor-pointer ${
                      isActive
                        ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <span className="block truncate">{col.shortTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Specs Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {singleCol.badge}
                  </span>
                  <h4 className="font-display font-black text-lg text-slate-900 dark:text-white mt-1">
                    {singleCol.title}
                  </h4>
                </div>
                <Link
                  to={singleCol.link}
                  className="px-3 py-1.5 bg-primary-600 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow"
                >
                  <span>Register</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                {businessStructureData.rows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.id} className="py-2.5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-primary-600 shrink-0" />
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{row.label}</span>
                      </div>
                      <div className="text-right">
                        {renderCell(row, singleCol.id)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. Decision Guide Cards */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            A Short Decision Guide
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Find your scenario below to see which structure offers the highest legal benefit:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decisionGuide.map((item, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-6 border transition shadow-sm hover:shadow-md flex flex-col justify-between space-y-4 ${item.color}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-primary-700 dark:text-primary-300">
                    {item.structure}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {item.note}
                </p>
              </div>

              <Link
                to={item.link}
                className="inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-primary-700 dark:text-primary-400 hover:text-primary-800 border-t border-slate-200/50 dark:border-slate-800 transition group"
              >
                <span>Register {item.structure}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
              </Link>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}
