import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import api from '../config/api';

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    content: "Shivoham & Associates made our Private Limited incorporation completely seamless. Their team handled everything from DSC to GST registration in record time. Highly recommended for startups!",
    name: "Rahul Varma",
    designation: "Founder",
    company: "TechNova Solutions",
    rating: 5,
    image: null,
  },
  {
    id: 2,
    content: "We were struggling with a complex trademark objection for months. Adv. Diptish Hegde stepped in, filed a brilliant reply, and got our brand registered. Truly expert service.",
    name: "Sneha Patil",
    designation: "Director",
    company: "GreenRoots Organics",
    rating: 5,
    image: null,
  },
  {
    id: 3,
    content: "Getting our Shop Act and MSME registration was a breeze. What impressed me the most was their transparent pricing and prompt updates on WhatsApp.",
    name: "Karan Desai",
    designation: "Owner",
    company: "Desai Enterprises",
    rating: 5,
    image: null,
  },
];

export default function TestimonialSlider({ testimonials: propTestimonials, title = "Client Success Stories" }) {
  const [testimonials, setTestimonials] = useState(propTestimonials || []);
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // If testimonials not passed as prop, fetch from backend
  useEffect(() => {
    if (propTestimonials && propTestimonials.length > 0) {
      setTestimonials(propTestimonials);
      return;
    }

    const fetchTestimonials = async () => {
      try {
        const res = await api.get('/testimonials');
        const data = res.data?.data || [];
        if (data.length > 0) {
          setTestimonials(data);
        } else {
          setTestimonials(DEFAULT_TESTIMONIALS);
        }
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setTestimonials(DEFAULT_TESTIMONIALS);
      }
    };

    fetchTestimonials();
  }, [propTestimonials]);

  const list = testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS;

  useEffect(() => {
    if (!autoplay || list.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % list.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [autoplay, list.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % list.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + list.length) % list.length);
  };

  const active = list[current] || list[0];
  const authorName = active?.name || active?.author || 'Verified Client';
  const roleText = [active?.designation, active?.company].filter(Boolean).join(', ') || active?.role || 'Corporate Client';
  const starCount = active?.rating || 5;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70 dark:bg-slate-950/30 transition-colors">
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {/* Header with Google Reviews Badge */}
        <div className="text-center mb-10 space-y-3">

          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Real feedback and reviews from entrepreneurs, startups, and corporate leaders across India.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800/80 overflow-hidden">
          {/* Decorative Quote Mark */}
          <Quote className="absolute top-6 left-6 w-20 h-20 text-slate-100 dark:text-slate-800/60 -rotate-6 pointer-events-none" />


          <div className="relative min-h-[170px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="text-center w-full space-y-5"
              >
                {/* 5 Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(starCount)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-400" />
                  ))}
                  {[...Array(Math.max(0, 5 - starCount))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed max-w-2xl mx-auto">
                  "{active?.content}"
                </p>

                {/* Author Info & Avatar */}
                <div className="flex items-center justify-center space-x-3 pt-2">
                  {active?.image ? (
                    <img
                      src={active.image}
                      alt={authorName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/30 shadow-xs"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-linear-to-br from-amber-500 to-amber-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      {authorName.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {authorName}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" title="Verified Customer" />
                    </div>
                    {roleText && (
                      <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                        {roleText}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Prev/Next & Dots */}
          <div className="flex justify-center items-center mt-8 space-x-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <button 
              onClick={prev}
              aria-label="Previous Review"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-amber-900/30 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {list.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    current === idx ? 'bg-amber-600 w-7' : 'bg-slate-300 dark:bg-slate-700 hover:bg-amber-400 w-2.5'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              aria-label="Next Review"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-amber-900/30 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
