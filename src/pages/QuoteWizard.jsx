import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Briefcase, FileCheck, Check, ArrowRight, ArrowLeft, Mail, Phone, User, CheckCircle2, Lock } from 'lucide-react';
import QuoteIcon from '../components/QuoteIcon';
import LegalTermsModal from '../components/LegalTermsModal';
import api from '../config/api';
import SEO from '../components/SEO';

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [businessDetails, setBusinessDetails] = useState({ name: '', description: '', turnover: '' });
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [turnoverOptions, setTurnoverOptions] = useState([]);

  // Legal Modal & Contact Form Gating State
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState('privacy');
  const [hasReadLegal, setHasReadLegal] = useState(false);
  const [hasAgreedTerms, setHasAgreedTerms] = useState(false);

  // Bar Council Disclaimer Modal State
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [pendingCategory, setPendingCategory] = useState(null);
  const [disclaimerCheck, setDisclaimerCheck] = useState(false);

  const openLegalModal = (tab = 'privacy') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleAcceptLegal = () => {
    setHasReadLegal(true);
    setHasAgreedTerms(true);
  };

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const [catRes, svcRes, turnRes] = await Promise.all([
          api.get('/quote-config/categories'),
          api.get('/quote-config/services'),
          api.get('/quote-config/turnovers'),
        ]);
        const cats = catRes.data?.data || [];
        const svcs = svcRes.data?.data || [];
        const turns = turnRes.data?.data || [];

        setCategories(cats);
        setAllServices(svcs);
        setTurnoverOptions(turns);

        if (turns.length > 0) {
          setBusinessDetails(prev => ({ ...prev, turnover: prev.turnover || turns[0].label }));
        }
      } catch (err) {
        console.error('Error loading quote config', err);
      }
    };
    fetchConfig();
  }, []);

  const handleCategorySelect = (catId) => {
    // Show Bar Council disclaimer before proceeding
    setPendingCategory(catId);
    setDisclaimerCheck(false);
    setDisclaimerOpen(true);
  };

  const handleDisclaimerAgree = () => {
    setDisclaimerOpen(false);
    setSelectedCategory(pendingCategory);
    setSelectedServices([]);
    setStep(2);
    setPendingCategory(null);
    setDisclaimerCheck(false);
  };

  const handleDisclaimerDecline = () => {
    setDisclaimerOpen(false);
    setPendingCategory(null);
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNextStep = () => {
    if (step === 2 && selectedServices.length === 0) return; // Require at least one service
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post('/quotes', {
        category: selectedCategory,
        services: selectedServices,
        businessName: businessDetails.name,
        businessDesc: businessDetails.description,
        turnover: isIPR ? 'N/A' : businessDetails.turnover,
        contactName: contactInfo.name,
        contactEmail: contactInfo.email,
        contactPhone: contactInfo.phone
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting quote', error);
      alert('Failed to submit quote request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Filter services by selected category (compare as numbers)
  const categoryServices = allServices.filter(
    s => String(s.quoteCategoryId) === String(selectedCategory)
  );

  const selectedCatObj = categories.find(
    c => String(c.id) === String(selectedCategory) || c.keyId === selectedCategory
  );
  const isIPR = Boolean(
    selectedCatObj
      ? (
        selectedCatObj.keyId?.toLowerCase().includes('ipr') ||
        selectedCatObj.title?.toLowerCase().includes('ipr') ||
        selectedCatObj.title?.toLowerCase().includes('intellectual property')
      )
      : (
        typeof selectedCategory === 'string' &&
        (selectedCategory.toLowerCase().includes('ipr') || selectedCategory.toLowerCase().includes('intellectual property'))
      )
  );

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 py-16 transition-all min-h-[80vh] flex flex-col justify-center items-center px-4">
      {/* SEO Metadata */}
      <SEO
        title="Get a Quote | Professional Legal & IPR Fees Estimator | Shivoham & Associates"
        description="Calculate estimated government and professional filing fees for Trademark, Patent, Copyright, Industrial Design, and Company Incorporation in Mumbai."
        canonicalUrl="https://shivoham.biz/quote"
      />

      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl shadow-xl overflow-hidden p-8 sm:p-10">

        {/* Progress Bar */}
        {!submitted && (
          <div className="mb-10 space-y-4">
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>Step {step} of 4</span>
              <span>{step === 1 ? 'Select Category' : step === 2 ? 'Select Services' : step === 3 ? 'Business Info' : 'Contact Info'}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-primary-500 to-accent-500"
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {/* Wizard Step Layouts */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-20 h-20 bg-accent-100 dark:bg-accent-950/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mx-auto">
                <CheckCircle2 className="w-12 h-12 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">Estimate Generated!</h2>
                <p className="text-slate-500 dark:text-slate-400 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you. Your request for services has been registered successfully. A legal consultant will call you back shortly with the final service proposal details.
                </p>
              </div>

              {/* Estimate Summary card */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-2xl max-w-sm mx-auto text-left space-y-3 font-sans">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pricing Estimate Overview</p>
                <div className="flex justify-between items-center py-2 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Selected Services:</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{selectedServices.length}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Consultation Fee:</span>
                  <span className="text-sm font-bold text-accent-500">FREE</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Filing Timeline:</span>
                  <span className="text-sm font-bold text-primary-500">2-5 Business Days</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setSelectedServices([]);
                    setSelectedCategory('');
                  }}
                  className="px-8 py-3 bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-xl font-bold shadow-md cursor-pointer"
                >
                  Create New Quote Request
                </button>
              </div>
            </motion.div>
          ) : step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2 text-center">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">Select Services Category</h2>
                <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">Choose the category matching your current business need.</p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4">
                {categories.map((cat) => {
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className="p-6 bg-slate-50 hover:bg-primary-50/50 dark:bg-slate-800/30 dark:hover:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-700 rounded-2xl flex items-center justify-between text-left transition duration-200 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                          <QuoteIcon name={cat.icon} className="w-6 h-6" />
                        </span>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">{cat.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5 line-clamp-1">{cat.description}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition transform group-hover:translate-x-1" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : step === 2 ? (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2 text-center">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">Select Specific Filings</h2>
                <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">Select one or more services you require from the list.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-87.5 overflow-y-auto pr-1">
                {categoryServices.map((service) => {
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-4 rounded-xl border text-left transition flex items-center justify-between cursor-pointer ${isSelected
                          ? 'border-primary-500 bg-primary-50/20 dark:bg-slate-800/80 text-primary-600 dark:text-primary-400 font-bold'
                          : 'border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                        }`}
                    >
                      <span className="text-sm font-semibold">{service.title}</span>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center border transition ${isSelected ? 'bg-primary-500 border-primary-500 text-white' : 'border-slate-300 dark:border-slate-700'
                        }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation controls */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handlePrevStep}
                  className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={selectedServices.length === 0}
                  className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white disabled:opacity-50 font-bold text-sm flex items-center gap-1.5 cursor-pointer"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : step === 3 ? (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2 text-center">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">Business Profile</h2>
                <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">Tell us details about your business to help calculate filing guidelines.</p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    required
                    value={businessDetails.name}
                    onChange={(e) => setBusinessDetails({ ...businessDetails, name: e.target.value })}
                    placeholder="E.g., Shivoham Corp"
                    className="w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Business Description / Concept</label>
                  <textarea
                    rows="3"
                    value={businessDetails.description}
                    onChange={(e) => setBusinessDetails({ ...businessDetails, description: e.target.value })}
                    placeholder="E.g., Tech startup developing mobile health tracking applications..."
                    className="w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium resize-none"
                  />
                </div>
                {!isIPR && (
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Estimated Annual Turnover</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {(turnoverOptions.length > 0 ? turnoverOptions : [
                        { id: 1, label: 'Below ₹10 Lakhs' },
                        { id: 2, label: '₹10L to ₹40 Lakhs' },
                        { id: 3, label: 'Above ₹40 Lakhs' }
                      ]).map((turn) => {
                        const isTurnSelected = businessDetails.turnover === turn.label;
                        return (
                          <button
                            key={turn.id || turn.label}
                            type="button"
                            onClick={() => setBusinessDetails({ ...businessDetails, turnover: turn.label })}
                            className={`p-3 rounded-lg border text-center transition font-bold text-xs cursor-pointer ${isTurnSelected
                                ? 'border-primary-500 bg-primary-50/15 text-primary-600 dark:text-primary-400'
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400'
                              }`}
                          >
                            {turn.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation controls */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handlePrevStep}
                  className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!businessDetails.name.trim()}
                  className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white disabled:opacity-50 font-bold text-sm flex items-center gap-1.5 cursor-pointer"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2 text-center">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">Contact Information</h2>
                <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">Where should our partners dispatch the compliance estimate files?</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                {/* Legal Review Prompt & Form Gating Banner */}
                {!hasReadLegal ? (
                  <div
                    onClick={() => openLegalModal('privacy')}
                    className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/25 border border-amber-500/30 dark:border-amber-700/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer hover:bg-amber-500/15 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-900 dark:text-amber-200">Legal Review Required</p>
                        <p className="text-[11px] text-amber-800/90 dark:text-amber-300/90">
                          Please read the Privacy Policy &amp; Terms to unlock and fill in your contact information.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLegalModal('privacy');
                      }}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition shadow-xs cursor-pointer shrink-0"
                    >
                      Read &amp; Unlock Form
                    </button>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      Policies acknowledged. Contact form unlocked.
                    </span>
                    <button
                      type="button"
                      onClick={() => openLegalModal('privacy')}
                      className="text-xs underline text-emerald-600 dark:text-emerald-400 font-bold hover:opacity-80 cursor-pointer"
                    >
                      Review Policies
                    </button>
                  </div>
                )}

                <div
                  className={!hasReadLegal ? "cursor-pointer group" : ""}
                  onClick={() => {
                    if (!hasReadLegal) openLegalModal('privacy');
                  }}
                >
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      disabled={!hasReadLegal}
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      placeholder={hasReadLegal ? "John Doe" : "Please read terms above to unlock..."}
                      className={`w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium transition ${!hasReadLegal ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-850/60' : ''
                        }`}
                    />
                  </div>
                </div>

                <div
                  className={!hasReadLegal ? "cursor-pointer group" : ""}
                  onClick={() => {
                    if (!hasReadLegal) openLegalModal('privacy');
                  }}
                >
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      disabled={!hasReadLegal}
                      maxLength={10}
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      placeholder={hasReadLegal ? "+91 99999 99999" : "Please read terms above to unlock..."}
                      className={`w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium transition ${!hasReadLegal ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-850/60' : ''
                        }`}
                    />
                  </div>
                </div>

                <div
                  className={!hasReadLegal ? "cursor-pointer group" : ""}
                  onClick={() => {
                    if (!hasReadLegal) openLegalModal('privacy');
                  }}
                >
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      disabled={!hasReadLegal}
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      placeholder={hasReadLegal ? "john@example.com" : "Please read terms above to unlock..."}
                      className={`w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium transition ${!hasReadLegal ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-850/60' : ''
                        }`}
                    />
                  </div>
                </div>

                {/* Consent & Anti-Fraud Notice */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={hasAgreedTerms}
                      onChange={(e) => {
                        if (!hasReadLegal) {
                          openLegalModal('privacy');
                        } else {
                          setHasAgreedTerms(e.target.checked);
                        }
                      }}
                      className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 shrink-0 cursor-pointer"
                    />
                    <span>
                      I have read and accept the{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openLegalModal('privacy');
                        }}
                        className="text-emerald-600 dark:text-emerald-400 underline font-semibold cursor-pointer hover:opacity-80 inline"
                      >
                        Privacy Policy
                      </button>
                      {' '}and{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openLegalModal('terms');
                        }}
                        className="text-emerald-600 dark:text-emerald-400 underline font-semibold cursor-pointer hover:opacity-80 inline"
                      >
                        Terms of Use &amp; Engagement
                      </button>.
                    </span>
                  </label>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-900 dark:text-amber-200 flex items-center gap-2">
                    <span className="font-bold shrink-0">Anti-Fraud Advisory:</span>
                    <span>We never process online transactions or collect payments through this website. Official invoices are issued exclusively from <code className="font-semibold">@shivoham.biz</code>.</span>
                  </div>
                </div>

                {/* Navigation controls */}
                <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting || !hasReadLegal || !hasAgreedTerms || !contactInfo.name.trim() || !contactInfo.email.trim() || !contactInfo.phone.trim()}
                    className="px-8 py-3 bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting...' : 'Request Proposal'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* In-Page Legal Terms & Privacy Policy Modal */}
        <LegalTermsModal
          isOpen={legalModalOpen}
          initialTab={legalModalTab}
          onClose={() => setLegalModalOpen(false)}
          onAccept={handleAcceptLegal}
        />
      </div>

      {/* Bar Council Disclaimer Modal */}
      {disclaimerOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="bci-disclaimer-title"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-800 dark:text-slate-100">

            {/* Header Ribbon */}
            <div className="bg-gradient-to-r from-[#052E1F] via-[#0B4619] to-[#052E1F] px-6 py-5 sm:px-8 sm:py-6 text-white border-b border-yellow-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-300 block">
                    Bar Council of India • Rule 36 Compliance
                  </span>
                  <h2 id="bci-disclaimer-title" className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
                    Website Disclaimer &amp; Acknowledgement
                  </h2>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 max-h-[55vh] overflow-y-auto">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-medium">
                <strong>The Bar Council of India</strong> does not permit advertisement or solicitation by advocates in any form or manner. By proceeding, you confirm you are seeking information voluntarily.
              </div>

              <p>
                By accessing this website, <strong>www.shivoham.biz</strong>, you acknowledge and confirm that you are seeking information relating to <strong>Shivoham &amp; Associates</strong> of your own accord and that there has been no form of solicitation, advertisement or inducement by Shivoham &amp; Associates or its members.
              </p>

              <p>
                The content of this website is for <strong>informational purposes only</strong> and should not be interpreted as soliciting or advertising. Nothing on this website constitutes legal or professional advice, and no lawyer-client or professional relationship is created by accessing it or by transmitting any information through it.
              </p>

              <p>
                Shivoham &amp; Associates is not liable for any consequence of any action taken by the user relying on material or information published on this website. In cases where the user has any legal issue, the user must in all cases seek independent legal advice.
              </p>

              <label className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={disclaimerCheck}
                  onChange={(e) => setDisclaimerCheck(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer shrink-0"
                />
                <span>
                  Clicking <strong>I Agree</strong> confirms that you have voluntarily sought this information under the statutory guidelines of the Bar Council of India.
                </span>
              </label>
            </div>

            {/* Footer Actions */}
            <div className="px-6 py-5 sm:px-8 sm:py-6 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleDisclaimerDecline}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                Decline &amp; Exit
              </button>
              <button
                type="button"
                disabled={!disclaimerCheck}
                onClick={handleDisclaimerAgree}
                id="agree-bci-disclaimer-quote"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-sm tracking-wide bg-[#052E1F] hover:bg-[#0B4619] text-yellow-300 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                I Agree &amp; Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
