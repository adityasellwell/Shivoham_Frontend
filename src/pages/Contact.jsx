import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, User, FileText, Send, Calendar, Lock } from 'lucide-react';
import LegalTermsModal from '../components/LegalTermsModal';
import api from '../config/api';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Legal Modal & Contact Form Gating State
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState('privacy');
  const [hasReadLegal, setHasReadLegal] = useState(false);
  const [hasAgreedTerms, setHasAgreedTerms] = useState(false);

  const openLegalModal = (tab = 'privacy') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleAcceptLegal = () => {
    setHasReadLegal(true);
    setHasAgreedTerms(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/consultations', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        source: 'Contact Page'
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      title: 'Our Office',
      desc: 'Ground Floor, Shivoham & Associates, Parasmani Commercial Complex, Flignite, Dadar, Mumbai – 400014',
      icon: MapPin,
      actionLabel: 'Find on Maps',
      link: 'https://maps.google.com/?q=Parasmani+Commercial+Complex+Dadar+Mumbai+400014'
    },
    {
      title: 'Call Us',
      desc: '+91 9137282042',
      icon: Phone,
      actionLabel: 'Place Call',
      link: 'tel:+919137282042'
    },
    {
      title: 'Mail Us',
      desc: 'diptish@shivoham.biz',
      icon: Mail,
      actionLabel: 'Send Email',
      link: 'mailto:diptish@shivoham.biz'
    }
  ];

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 transition-all">
      {/* SEO Metadata & ContactPage Schema */}
      <SEO
        title="Contact Us | Legal Advisors in Dadar, Mumbai | Shivoham & Associates"
        description="Schedule a legal consultation or drop an inquiry with Shivoham & Associates at Dadar, Mumbai. Phone: +91 9137282042 | Email: diptish@shivoham.biz"
        canonicalUrl="https://shivoham.biz/contact"
        schemas={{
          '@type': 'ContactPage',
          '@id': 'https://shivoham.biz/contact#page',
          name: 'Contact Shivoham & Associates',
          url: 'https://shivoham.biz/contact',
          mainEntity: {
            '@type': 'LegalService',
            name: 'Shivoham & Associates',
            telephone: '+919137282042',
            email: 'diptish@shivoham.biz',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Ground Floor, Parasmani Commercial Complex, Flignite',
              addressLocality: 'Dadar, Mumbai',
              addressRegion: 'Maharashtra',
              postalCode: '400014',
              addressCountry: 'IN'
            }
          }
        }}
      />

      {/* Title Header Banner */}
      <section className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-20 px-4 text-center relative overflow-hidden border-b border-[#0B4619]/10">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-tight text-[#0B4619]">Contact Our Advisers</h1>
          <p className="text-[#0B4619]/80 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Reach out to schedule a consulting slot, ask registration questions, or request case studies from our Dadar, Mumbai office.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2 mb-8">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">Get in Touch</h2>
            <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">Use our details to reach a legal consultant directly, or drop a query.</p>
          </div>

          <div className="grid gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex items-start space-x-4">
                  <span className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{card.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">{card.desc}</p>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary-600 dark:text-primary-400 font-bold hover:underline inline-block pt-1 cursor-pointer"
                    >
                      {card.actionLabel} &rarr;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Contact form panel */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-md">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-16 space-y-6"
              >
                <div className="w-16 h-16 bg-accent-100 dark:bg-accent-950/50 rounded-full flex items-center justify-center text-accent-600 dark:text-accent-400 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Message Dispatched!</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you. We have received your query and will get back to you within 24 business hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 mb-2">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Send Message</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-sans text-xs">Fill out all fields below to trigger an evaluation from our offices.</p>
                </div>

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
                          Please read the Privacy Policy &amp; Terms to unlock and fill in the contact form.
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div 
                    className={!hasReadLegal ? "cursor-pointer group" : ""}
                    onClick={() => {
                      if (!hasReadLegal) openLegalModal('privacy');
                    }}
                  >
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        disabled={!hasReadLegal}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={hasReadLegal ? "John Doe" : "Please read terms to unlock..."}
                        className={`w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium transition ${
                          !hasReadLegal ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-850/60' : ''
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
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        disabled={!hasReadLegal}
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={hasReadLegal ? "+91 99999 99999" : "Please read terms to unlock..."}
                        className={`w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium transition ${
                          !hasReadLegal ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-850/60' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div 
                    className={!hasReadLegal ? "cursor-pointer group" : ""}
                    onClick={() => {
                      if (!hasReadLegal) openLegalModal('privacy');
                    }}
                  >
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Your Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        disabled={!hasReadLegal}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={hasReadLegal ? "john@example.com" : "Please read terms to unlock..."}
                        className={`w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium transition ${
                          !hasReadLegal ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-850/60' : ''
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
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Subject</label>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        disabled={!hasReadLegal}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={hasReadLegal ? "Inquiry about Trademark" : "Please read terms to unlock..."}
                        className={`w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium transition ${
                          !hasReadLegal ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-850/60' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div 
                  className={!hasReadLegal ? "cursor-pointer group" : ""}
                  onClick={() => {
                    if (!hasReadLegal) openLegalModal('privacy');
                  }}
                >
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Message Details</label>
                  <textarea
                    rows="5"
                    required
                    disabled={!hasReadLegal}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={hasReadLegal ? "Provide details about your query here..." : "Please read terms above to unlock the message field..."}
                    className={`w-full bg-slate-50 dark:bg-slate-850/30 border border-slate-200/60 dark:border-slate-800 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-primary-500 focus:bg-white text-slate-800 dark:text-white font-medium resize-none transition ${
                      !hasReadLegal ? 'opacity-60 cursor-not-allowed bg-slate-100 dark:bg-slate-850/60' : ''
                    }`}
                  />
                </div>

                {/* Consent & Anti-Fraud Notice */}
                <div className="space-y-3 pt-1">
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

                <button
                  type="submit"
                  disabled={loading || !hasReadLegal || !hasAgreedTerms || !formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()}
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-xl font-bold text-base shadow-md hover:shadow-lg transition flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom Map Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200/50 dark:border-slate-800/80">
          <iframe
            className="w-full border-0 h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15088.354075299494!2d72.8436782!3d19.0158207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1ed58c1157%3A0xd909cce553d3833f!2sSHIVOHAM%20AND%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1726666937210!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shivoham & Associates Office Map Location"
          ></iframe>
        </div>
      </section>

      {/* In-Page Legal Terms & Privacy Policy Modal */}
      <LegalTermsModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
        onAccept={handleAcceptLegal}
      />
    </div>
  );
}
