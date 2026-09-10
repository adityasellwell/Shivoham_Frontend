import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, ArrowRight } from 'lucide-react';
import api from '../config/api';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await api.get('/faqs');
        setFaqs(res.data.data);
      } catch (err) {
        console.error('Error fetching FAQs', err);
        // Fallback to empty — page still renders gracefully
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20  transition-all">
      {/* Title Header Banner */}
      <section className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-20 pb-25 px-4 text-center relative overflow-hidden border-b border-[#0B4619]/10">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-tight text-[#0B4619]">Frequently Asked Questions</h1>
          <p className="text-[#0B4619]/80 font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
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
          {loading ? (
            <div className="text-center py-12 text-slate-400">Loading FAQs...</div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => (
                  <motion.div
                    key={faq.id || idx}
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
                        <span>{faq.question}</span>
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
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div layout className="text-center py-12 text-slate-500 dark:text-slate-400 font-sans">
                  {faqs.length === 0 ? "No FAQs available yet." : "No FAQs match your search query. Try typing something else."}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </section>
    </div>
  );
}
