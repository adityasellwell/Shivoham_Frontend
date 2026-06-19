import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Briefcase, FileCheck, Check, ArrowRight, ArrowLeft, Mail, Phone, User, CheckCircle2 } from 'lucide-react';
import { services, categories } from '../data/servicesData';
import api from '../config/api';

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [businessDetails, setBusinessDetails] = useState({ name: '', description: '', turnover: '0-10lakhs' });
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    setSelectedServices([]);
    setStep(2);
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
        turnover: businessDetails.turnover,
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

  // Filter services by category
  const categoryServices = Object.values(services).filter(
    s => s.categoryId === selectedCategory
  );

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 py-16 transition-all min-h-[80vh] flex flex-col justify-center items-center px-4">
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
                          {cat.icon === 'Shield' ? <Shield className="w-6 h-6" /> : 
                           cat.icon === 'Briefcase' ? <Briefcase className="w-6 h-6" /> : 
                           <FileCheck className="w-6 h-6" />}
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
                      className={`p-4 rounded-xl border text-left transition flex items-center justify-between cursor-pointer ${
                        isSelected 
                          ? 'border-primary-500 bg-primary-50/20 dark:bg-slate-800/80 text-primary-600 dark:text-primary-400 font-bold' 
                          : 'border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="text-sm font-semibold">{service.title}</span>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center border transition ${
                        isSelected ? 'bg-primary-500 border-primary-500 text-white' : 'border-slate-300 dark:border-slate-700'
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
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Estimated Annual Turnover</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { val: '0-10lakhs', label: 'Below ₹10 Lakhs' },
                      { val: '10-40lakhs', label: '₹10L to ₹40 Lakhs' },
                      { val: '40lakhs-plus', label: 'Above ₹40 Lakhs' }
                    ].map((turn) => {
                      const isTurnSelected = businessDetails.turnover === turn.val;
                      return (
                        <button
                          key={turn.val}
                          type="button"
                          onClick={() => setBusinessDetails({ ...businessDetails, turnover: turn.val })}
                          className={`p-3 rounded-lg border text-center transition font-bold text-xs cursor-pointer ${
                            isTurnSelected 
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
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      required
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input 
                      type="tel" 
                      required
                      maxLength={10}
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      placeholder="+91 99999 99999"
                      className="w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input 
                      type="email" 
                      required
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium"
                    />
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
                    disabled={submitting || !contactInfo.name.trim() || !contactInfo.email.trim() || !contactInfo.phone.trim()}
                    className="px-8 py-3 bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Request Proposal'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
