import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      category: 'General',
      q: 'What is Shivoham & Associates?',
      a: 'Shivoham & Associates is a premium professional services firm located in Dadar, Mumbai. We specialize in Intellectual Property Rights (IPR) filing, new business incorporations, tax compliance registration (GST, MSME), and corporate legal contracting.'
    },
    {
      category: 'General',
      q: 'How do I start working with your firm?',
      a: 'You can use our online "Get a Quote" wizard to submit your specific requirements. A qualified partner from our Mumbai office will assess the request and call or email you a detailed checklist and proposal within 24 hours.'
    },
    {
      category: 'IPR & Trademarks',
      q: 'What is a trademark registration?',
      a: 'A trademark is a unique logo, brand name, sound, or slogan that distinguishes your services and goods. Registering it grants you exclusive national ownership rights and allows you to enforce legal action against duplicators.'
    },
    {
      category: 'IPR & Trademarks',
      q: 'Can I use the ™ symbol immediately?',
      a: 'Yes! Once we file your trademark application and generate the official TM Application Number (within 24 hours of document sign-off), you can legally start using the ™ symbol beside your brand name.'
    },
    {
      category: 'IPR & Trademarks',
      q: 'How long does a trademark registration last?',
      a: 'Trademark registrations are valid for 10 years from the date of application filing. It can be renewed indefinitely every 10 years by paying standard renewal fees.'
    },
    {
      category: 'Company Formation',
      q: 'What is a One Person Company (OPC)?',
      a: 'An OPC is a modern corporate structure that allows a single entrepreneur to operate a registered company with limited liability protection and a separate legal status. It requires a nominee director but gives the credibility of a private limited firm.'
    },
    {
      category: 'Company Formation',
      q: 'What is the difference between an LLP and a Partnership Firm?',
      a: 'A traditional Partnership Firm leaves partners personally liable for the debts of the firm. A Limited Liability Partnership (LLP) limits each partner\'s liability to their capital contribution, protecting personal assets, and is registered formally with the MCA.'
    },
    {
      category: 'Licenses & GST',
      q: 'Is GST registration mandatory for small businesses?',
      a: 'GST registration is mandatory if your annual service turnover exceeds ₹20 Lakhs (₹40 Lakhs for trading/manufacturing goods), if you sell products online via e-commerce, or if you perform cross-state trading.'
    },
    {
      category: 'Licenses & GST',
      q: 'What are the benefits of MSME Udyam registration?',
      a: 'Registering as an MSME grants your business access to collateral-free bank loans, subsidized interest rates, protective laws against delayed payments from larger companies, and 50% rebates on patent and trademark government fees.'
    }
  ];

  const filteredFaqs = faqs.filter(
    faq =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20  transition-all">
      {/* Title Header Banner */}
      <section className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-20 pb-25 px-4 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-tight">Frequently Asked Questions</h1>
          <p className="text-[#0B4619] font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Quick answers to key legal compliance questions. Search below to find details.
          </p>
        </div>
      </section>

      {/* FAQ Accordions with Search */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        {/* Search input bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Search FAQs by keywords (e.g., trademark, GST, OPC)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIdx(null);
            }}
            className="w-full bg-transparent border-0 outline-none text-slate-800 dark:text-white text-base font-semibold placeholder-slate-400 focus:ring-0"
          />
        </div>

        {/* Collapsible List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer"
                  >
                    <div className="flex items-center space-x-3.5 pr-2">
                      <HelpCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIdx === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 overflow-hidden"
                      >
                        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-3 border-t border-slate-100 dark:border-slate-800/60">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div
                layout
                className="text-center py-12 text-slate-500 dark:text-slate-400 font-sans"
              >
                No FAQs match your search query. Try typing something else.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
