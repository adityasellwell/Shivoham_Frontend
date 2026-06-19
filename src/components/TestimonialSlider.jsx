import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Shivoham & Associates made our Private Limited incorporation completely seamless. Their team handled everything from DSC to GST registration in record time. Highly recommended for startups!",
    author: "Rahul Varma",
    role: "Founder, TechNova Solutions",
    rating: 5
  },
  {
    id: 2,
    content: "We were struggling with a complex trademark objection for months. Adv. Diptish Hegde stepped in, filed a brilliant reply, and got our brand registered. Truly expert service.",
    author: "Sneha Patil",
    role: "Director, GreenRoots Organics",
    rating: 5
  },
  {
    id: 3,
    content: "Getting our Shop Act and MSME registration was a breeze. What impressed me the most was their transparent pricing and prompt updates on WhatsApp.",
    author: "Karan Desai",
    role: "Owner, Desai Enterprises",
    rating: 4
  },
  {
    id: 4,
    content: "Extremely professional auditing and tax compliance team. Aditya Mehta and his team have been managing our corporate filings for 3 years without a single penalty.",
    author: "Vikram Singh",
    role: "CEO, Apex Logistics",
    rating: 5
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="text-center mb-12">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">What Our Clients Say</h2>
        <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 overflow-hidden">
        {/* Decorative Quote Icon */}
        <Quote className="absolute top-6 left-6 w-24 h-24 text-slate-50 dark:text-slate-800/50 -rotate-6 pointer-events-none" />
        
        <div className="relative h-64 sm:h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center w-full"
            >
              <div className="flex justify-center mb-4 space-x-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-500 fill-primary-500" />
                ))}
                {[...Array(5 - testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium italic mb-6 leading-relaxed">
                "{testimonials[current].content}"
              </p>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">{testimonials[current].author}</h4>
                <p className="text-sm text-accent-600 dark:text-accent-400 font-semibold">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button 
            onClick={prev}
            className="p-2 rounded-full bg-slate-100 hover:bg-primary-100 dark:bg-slate-800 dark:hover:bg-primary-900/30 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  current === idx ? 'bg-primary-500 w-6' : 'bg-slate-300 dark:bg-slate-700 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="p-2 rounded-full bg-slate-100 hover:bg-primary-100 dark:bg-slate-800 dark:hover:bg-primary-900/30 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
