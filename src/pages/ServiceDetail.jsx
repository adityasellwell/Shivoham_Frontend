import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Briefcase, FileCheck, CheckCircle2, ChevronDown, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { services, categories } from '../data/servicesData';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  // Look up service details
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
    { id: 'process', label: 'Process Steps' }
  ];

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 py-12 transition-all">
      {/* Category & Service Hero Breadcrumb Banner */}
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
            <p className="text-[#0B4619] font-sans text-sm sm:text-base max-w-3xl leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Service Details and Tabs */}
        <div className={`${relatedServices.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-8`}>
          {/* Custom Tabs Navigation */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-2.5 shadow-sm flex flex-wrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[120px] text-center py-3 rounded-xl font-bold text-sm transition relative cursor-pointer ${
                  activeTab === tab.id 
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-slate-800/60' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents Panel */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-md min-h-[350px]">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Service Overview</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-base">{service.fullDescription}</p>
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
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Key Advantages & Benefits</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100/30 dark:border-slate-800/30">
                        <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300 font-sans text-sm sm:text-base leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
                  <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 pl-8 space-y-8">
                    {service.process.map((step, sIdx) => (
                      <div key={sIdx} className="relative">
                        <span className="absolute -left-[45px] top-0.5 w-8 h-8 rounded-full bg-primary-500 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                          {step.step}
                        </span>
                        <div className="space-y-1">
                          <h4 className="font-bold text-lg text-slate-900 dark:text-white">{step.title}</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Service Specific FAQs */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-md space-y-6">
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/30 dark:bg-slate-900">
                  <button
                    onClick={() => setOpenFaqIdx(openFaqIdx === fIdx ? null : fIdx)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaqIdx === fIdx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaqIdx === fIdx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 overflow-hidden"
                      >
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-1 border-t border-slate-100 dark:border-slate-800/60">
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

        {/* Right Side: Sidebar Navigation (Related Services) */}
        {relatedServices.length > 0 && (
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-md">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4">Related Services</h3>
              <div className="grid gap-2">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.id}`}
                    className="p-3 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-primary-50/45 dark:hover:bg-slate-800/80 border border-slate-200/30 dark:border-slate-700/30 rounded-xl flex items-center justify-between transition group font-medium"
                  >
                    <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition truncate pr-2">
                      {rel.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition flex-shrink-0 transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
