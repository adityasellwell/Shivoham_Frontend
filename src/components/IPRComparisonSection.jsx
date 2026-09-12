import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  FileCode2, 
  Lightbulb, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  Clock, 
  Scale, 
  Info,
  Check
} from 'lucide-react';

export const iprData = {
  columns: [
    {
      id: 'trademark',
      title: 'Trademark',
      subtitle: 'Brand Identity',
      icon: Shield,
      color: 'from-amber-500 to-amber-600',
      badgeBg: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-700/50',
      link: '/legal-services/trademark-registration-in-mumbai',
      cta: 'Explore Trademark'
    },
    {
      id: 'copyright',
      title: 'Copyright',
      subtitle: 'Creative Expression',
      icon: FileCode2,
      color: 'from-blue-500 to-blue-600',
      badgeBg: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700/50',
      link: '/legal-services/copyright-registration-in-mumbai',
      cta: 'Explore Copyright'
    },
    {
      id: 'patent',
      title: 'Patent',
      subtitle: 'Inventions & Processes',
      icon: Lightbulb,
      color: 'from-emerald-500 to-emerald-600',
      badgeBg: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50',
      link: '/legal-services/patent-registration-in-mumbai',
      cta: 'Explore Patent'
    },
    {
      id: 'design',
      title: 'Design',
      subtitle: 'Visual Appearance',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      badgeBg: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700/50',
      link: '/legal-services/design-registration-in-mumbai',
      cta: 'Explore Design'
    }
  ],
  rows: [
    {
      label: 'Protects',
      icon: Shield,
      tooltip: 'What specific element of your business this IP right protects',
      values: {
        trademark: 'Brand identity — name, logo, slogan, sound',
        copyright: 'Original creative expression — writing, art, music, film, software code',
        patent: 'A new invention — a product or process that works in a new way',
        design: 'The visual appearance of a product — shape, pattern, ornamentation'
      }
    },
    {
      label: 'Typical example',
      icon: Sparkles,
      tooltip: 'Common real-world examples in day-to-day business',
      values: {
        trademark: "Your company's brand name",
        copyright: 'Your website copy, app source code, a song',
        patent: 'A new machine, formulation or technical process',
        design: 'A bottle shape, chair form, fabric print'
      }
    },
    {
      label: 'Registration',
      icon: CheckCircle2,
      tooltip: 'Whether government registration is mandatory for legal rights',
      badges: {
        trademark: { text: 'Required for enforcement rights', type: 'required' },
        copyright: { text: 'Optional; rights arise on creation', type: 'optional' },
        patent: { text: 'Mandatory', type: 'mandatory' },
        design: { text: 'Mandatory', type: 'mandatory' }
      }
    },
    {
      label: 'Term',
      icon: Clock,
      tooltip: 'Duration for which the legal protection lasts',
      values: {
        trademark: '10 years, renewable indefinitely',
        copyright: "Author's life + 60 years (varies by work type)",
        patent: '20 years from filing, non-renewable',
        design: '10 years, extendable by 5'
      }
    },
    {
      label: 'Governing law',
      icon: Scale,
      tooltip: 'The specific Indian legislation governing this IP right',
      values: {
        trademark: 'Trade Marks Act, 1999',
        copyright: 'Copyright Act, 1957',
        patent: 'Patents Act, 1970',
        design: 'Designs Act, 2000'
      }
    }
  ]
};

export default function IPRComparisonSection({ isCompact = false }) {
  const [selectedMobileTab, setSelectedMobileTab] = useState('trademark');
  const [interactiveQuizChoice, setInteractiveQuizChoice] = useState(null);

  const quizOptions = [
    {
      id: 'brand',
      question: 'Brand name, logo, slogan or audio tone',
      recommended: 'trademark',
      tip: 'You need a Trademark (Trade Marks Act, 1999) to establish brand exclusivity.'
    },
    {
      id: 'content',
      question: 'Software code, website text, book, music or artwork',
      recommended: 'copyright',
      tip: 'You need Copyright Registration (Copyright Act, 1957) to protect original creative works.'
    },
    {
      id: 'invention',
      question: 'New technical mechanism, formula, machine or process',
      recommended: 'patent',
      tip: 'You need a Patent (Patents Act, 1970) for inventions with novel functional utility.'
    },
    {
      id: 'shape',
      question: 'Unique aesthetic shape, 3D structure or surface pattern of a product',
      recommended: 'design',
      tip: 'You need Industrial Design Registration (Designs Act, 2000) for visual appearance.'
    }
  ];

  return (
    <div className="w-full space-y-12">
      {/* Intro Sub-header */}
      {!isCompact && (
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Comparison Matrix
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
            Which IP Protection Do You Need?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
            Trademark, copyright, patent and design protect four different things. Most businesses need more than one, and they are not alternatives to each other.
          </p>
        </div>
      )}

      {/* Desktop Comparison Table */}
      <div className="hidden md:block bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                <th className="p-5 font-display font-bold text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider w-[18%]">
                  Attribute
                </th>
                {iprData.columns.map((col) => {
                  const Icon = col.icon;
                  return (
                    <th key={col.id} className="p-5 w-[20.5%] align-top">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-bold shadow-xs transition-transform hover:scale-105"
                             style={{ background: 'var(--color-bg)' }}>
                          <span className={`p-1.5 rounded-md bg-gradient-to-br ${col.color} text-white shadow-xs`}>
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="text-slate-900 dark:text-white font-extrabold text-base">
                            {col.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {col.subtitle}
                        </p>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-sans">
              {iprData.rows.map((row, rIdx) => {
                const RowIcon = row.icon;
                return (
                  <tr key={rIdx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-5 align-top bg-slate-50/30 dark:bg-slate-900/50 border-r border-slate-100 dark:border-slate-800/60">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          <RowIcon className="w-4 h-4" />
                        </span>
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {row.label}
                        </span>
                      </div>
                    </td>
                    {iprData.columns.map((col) => (
                      <td key={col.id} className="p-5 align-top text-slate-700 dark:text-slate-300 text-sm leading-relaxed border-r border-slate-100 dark:border-slate-800/40 last:border-r-0">
                        {row.badges ? (
                          <div className="space-y-1">
                            <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold border ${
                              row.badges[col.id].type === 'mandatory' 
                                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900/50' 
                                : row.badges[col.id].type === 'required'
                                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-900/50'
                                : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/50'
                            }`}>
                              {row.badges[col.id].text}
                            </span>
                          </div>
                        ) : (
                          <span className={row.label === 'Governing law' ? 'font-semibold text-slate-900 dark:text-slate-100' : ''}>
                            {row.values[col.id]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}

              {/* Action Buttons Row */}
              <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                <td className="p-5 align-middle bg-slate-50/50 dark:bg-slate-900/50 border-r border-slate-100 dark:border-slate-800/60 font-semibold text-xs text-slate-500">
                  Direct Service
                </td>
                {iprData.columns.map((col) => (
                  <td key={col.id} className="p-5 align-middle border-r border-slate-100 dark:border-slate-800/40 last:border-r-0">
                    <Link
                      to={col.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition group"
                    >
                      {col.cta}
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card Switcher View */}
      <div className="md:hidden space-y-4">
        <div className="flex gap-1.5 bg-slate-200/60 dark:bg-slate-800 p-1.5 rounded-2xl overflow-x-auto">
          {iprData.columns.map((col) => {
            const Icon = col.icon;
            const isSelected = selectedMobileTab === col.id;
            return (
              <button
                key={col.id}
                onClick={() => setSelectedMobileTab(col.id)}
                className={`flex-1 min-w-[90px] py-2.5 px-3 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition ${
                  isSelected 
                    ? 'bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 shadow-md' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{col.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tab Detail Card on Mobile */}
        {(() => {
          const activeCol = iprData.columns.find((c) => c.id === selectedMobileTab);
          if (!activeCol) return null;
          const ActiveIcon = activeCol.icon;

          return (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-xl bg-gradient-to-br ${activeCol.color} text-white shadow-md`}>
                    <ActiveIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-black text-xl text-slate-900 dark:text-white">{activeCol.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{activeCol.subtitle}</p>
                  </div>
                </div>
                <Link
                  to={activeCol.link}
                  className="px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 font-bold text-xs flex items-center gap-1"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4 text-sm">
                {iprData.rows.map((row, rIdx) => {
                  const RowIcon = row.icon;
                  return (
                    <div key={rIdx} className="space-y-1 bg-slate-50/70 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">
                        <RowIcon className="w-3.5 h-3.5" />
                        <span>{row.label}</span>
                      </div>
                      <div className="text-slate-800 dark:text-slate-200 font-medium">
                        {row.badges ? (
                          <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-primary-100 dark:bg-primary-950/50 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                            {row.badges[activeCol.id].text}
                          </span>
                        ) : (
                          row.values[activeCol.id]
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Real-World Synergy / Insight Highlight Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary-500" />
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
            Real-World Synergy: How IP Rights Work Together
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Insight 1: A Logo can be both */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 dark:border-amber-700/30 shadow-md">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                1
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                    A logo can be both.
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-200/70 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200">
                    Trademark + Copyright
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                  A trademark protects it as a <strong>brand identifier</strong>; a copyright protects the <strong>artwork itself</strong>. Filing both is common where the logo is artistically distinctive.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300">
                  <Link to="/legal-services/trademark-registration-in-mumbai" className="hover:underline flex items-center gap-1">
                    Trademark Filings <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span>•</span>
                  <Link to="/legal-services/copyright-registration-in-mumbai" className="hover:underline flex items-center gap-1">
                    Copyright Filings <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Insight 2: A Product can need three */}
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-200/80 dark:border-emerald-700/30 shadow-md">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                2
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                    A product can need three.
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-200/70 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200">
                    Trademark + Patent + Design
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                  Its <strong>brand name</strong> is a trademark, its <strong>working mechanism</strong> is a patent, and its <strong>external appearance</strong> is a design.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                  <Link to="/legal-services/trademark-registration-in-mumbai" className="hover:underline flex items-center gap-1">
                    Brand (TM) <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span>•</span>
                  <Link to="/legal-services/patent-registration-in-mumbai" className="hover:underline flex items-center gap-1">
                    Mechanism (Patent) <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span>•</span>
                  <Link to="/legal-services/design-registration-in-mumbai" className="hover:underline flex items-center gap-1">
                    Aesthetics (Design) <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Quick Helper */}
      <div className="bg-slate-100/80 dark:bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
            Quick Decision Guide: What are you looking to protect?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quizOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setInteractiveQuizChoice(opt.id === interactiveQuizChoice ? null : opt.id)}
              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between ${
                interactiveQuizChoice === opt.id
                  ? 'bg-primary-50 dark:bg-slate-800 border-primary-500 shadow-sm ring-1 ring-primary-500'
                  : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/60 hover:border-slate-300'
              }`}
            >
              <div className="space-y-1 pr-3">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block">
                  {opt.question}
                </span>
                {interactiveQuizChoice === opt.id && (
                  <p className="text-xs text-primary-700 dark:text-primary-300 pt-1 font-medium leading-relaxed">
                    {opt.tip}
                  </p>
                )}
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                interactiveQuizChoice === opt.id
                  ? 'bg-primary-500 text-white border-primary-500'
                  : 'border-slate-300 dark:border-slate-600'
              }`}>
                {interactiveQuizChoice === opt.id && <Check className="w-3 h-3" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
