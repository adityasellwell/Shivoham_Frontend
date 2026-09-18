import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Briefcase,
  FileCheck,
  CheckCircle2,
  Star,
  MessageSquare,
  Zap,
  Sparkles,
  Layers,
  MessageSquareText,
  ShieldCheck,
  CalendarClock,
  Compass,
} from "lucide-react";
import { categories } from "../data/servicesData";
import api from "../config/api";
import brands from "../utils/brandsImages";
import TestimonialSlider from "../components/TestimonialSlider";
import SEO from "../components/SEO";

const heroSlides = [
  {
    title: "Protect Your",
    highlight: "Intellectual Property",
    suffix: "With Confidence",
    desc: "Expert legal services for trademark, copyright, and patent registrations, ensuring your brand stays secure.",
  },
  {
    title: "Seamless",
    highlight: "Business Registration",
    suffix: "Process",
    desc: "Start your business journey with our fast, transparent, and reliable company incorporation services.",
  },
  {
    title: "Comprehensive",
    highlight: "Legal Compliance",
    suffix: "Solutions",
    desc: "Stay ahead of regulatory requirements with our dedicated compliance and advisory support.",
  },
];

// const heroSlides = [
//   {
//     title: "Register Your",
//     highlight: "Trademark",
//     suffix: "With Confidence",
//     desc: "Protect your brand name, logo, and identity with expert trademark registration and legal support.",
//   },
//   {
//     title: "Launch Your",
//     highlight: "Dream Business",
//     suffix: "Without Hassle",
//     desc: "Private Limited, LLP, OPC, and startup registrations completed quickly and transparently.",
//   },
//   {
//     title: "Simplify",
//     highlight: "GST & Compliance",
//     suffix: "Requirements",
//     desc: "End-to-end compliance solutions to keep your business legally secure and audit-ready.",
//   },
// ];

// Custom CountUp Animation component for premium feel
function CountUp({ end, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [showClientModal, setShowClientModal] = useState(false);
  const [clientType, setClientType] = useState(null);

  const [stats, setStats] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [partnerLogos, setPartnerLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dynamic data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, testimonialsRes, partnerLogosRes] = await Promise.all([
          api.get("/stats"),
          api.get("/testimonials"),
          api.get("/partner-logos"),
        ]);
        setStats(statsRes.data.data || []);
        setTestimonials(testimonialsRes.data.data || []);
        const fetchedLogos = (partnerLogosRes.data?.data || [])
          .map((item) => (typeof item === "string" ? item : item.image))
          .filter(Boolean);
        if (fetchedLogos.length > 0) {
          setPartnerLogos(fetchedLogos);
        } else {
          setPartnerLogos(brands);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setPartnerLogos(brands);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const doSearch = () => {
    if (!searchQuery.trim()) {
      if (!clientType) setShowClientModal(true);
      return;
    }
    navigate("/search-result", { state: { query: searchQuery } });
  };

  // for form submit (Enter key automatically triggers this)
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    doSearch();
  };

  // for button click
  const handleButtonClick = () => {
    doSearch();
  };

  // Handle client-side search logic
  //  const handleSearchSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!searchQuery.trim()) return;
  //   const res = await api.post("/search",{
  //     word_mark: searchQuery,
  //   })
  //   // setIsSearchOpen(false);
  //   if(res)  navigate('/search-result', { state: { query: searchQuery } });
  //   else navigate('/admin')
  // };

  // Hero slide auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="font-sans overflow-hidden">
      {/* SEO Metadata & LegalService Schema */}
      <SEO
        title="Shivoham & Associates | Premium IPR & Legal Advisory Services in Dadar, Mumbai"
        description="India's trusted legal and IPR consultancy firm in Dadar, Mumbai. Expert Trademark, Copyright, Patent, Industrial Design, Company Incorporation, and GST filing services."
        canonicalUrl="https://shivoham.biz"
        schemas={{
          '@type': 'LegalService',
          '@id': 'https://shivoham.biz#organization',
          name: 'Shivoham & Associates',
          url: 'https://shivoham.biz',
          logo: 'https://shivoham.biz/img/mainLogo.png',
          telephone: '+919137282042',
          email: 'diptish@shivoham.biz',
          priceRange: '₹₹',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Ground Floor, Parasmani Commercial Complex, Flignite',
            addressLocality: 'Dadar, Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '400014',
            addressCountry: 'IN'
          }
        }}
      />

      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#0B4619]/10 blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto w-full flex flex-col items-center relative z-10 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-[#0B4619] text-xs font-bold uppercase tracking-wider shadow-xs mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Shivoham & Associates
          </div>

          {/* Headline & Subtitle Carousel Area */}
          <div className="relative min-h-[110px] sm:min-h-[105px] w-full flex items-center justify-center mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="space-y-2.5 w-full"
              >
                <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-[#0B4619] max-w-3xl mx-auto">
                  {heroSlides[currentSlide].title}{" "}
                  <span className="text-white drop-shadow-sm">
                    {heroSlides[currentSlide].highlight}
                  </span>{" "}
                  {heroSlides[currentSlide].suffix}
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-[#0B4619]/90 max-w-2xl mx-auto leading-relaxed font-medium px-2">
                  {heroSlides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3 Slider Dots Indicator */}
          <div className="flex justify-center items-center space-x-2.5">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? "bg-[#0B4619]"
                    : "bg-[#0B4619]/35 hover:bg-[#0B4619]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      {stats.length > 0 && (
        <section className="bg-white dark:bg-slate-900 py-12 px-6 border-b border-slate-100 dark:border-slate-800 relative z-20 shadow-md">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <p className="font-display font-black text-3xl sm:text-5xl text-primary-600 dark:text-primary-400">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-xs sm:text-sm font-semibold uppercase text-slate-500 tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Core Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950/40 transition-all">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Our Areas of Expertise
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              From patent filing to business licensing, we coordinate all
              compliance needs to help your operations run smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                    {cat.icon === "Shield" ? (
                      <Shield className="w-8 h-8" />
                    ) : cat.icon === "Briefcase" ? (
                      <Briefcase className="w-8 h-8" />
                    ) : (
                      <FileCheck className="w-8 h-8" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  {cat.id === "ipr" ? (
                    <Link
                      to="/legal-services/trademark-registration-in-mumbai"
                      className="text-primary-600 dark:text-primary-400 font-extrabold text-sm flex items-center gap-1 hover:gap-2 transition-all group cursor-pointer"
                    >
                      Explore IPR Services
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : cat.id === "company-formation" ? (
                    <Link
                      to="/business-services/company-formation-in-mumbai"
                      className="text-primary-600 dark:text-primary-400 font-extrabold text-sm flex items-center gap-1 hover:gap-2 transition-all group cursor-pointer"
                    >
                      Explore Formations
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <Link
                      to="/services/gst"
                      className="text-primary-600 dark:text-primary-400 font-extrabold text-sm flex items-center gap-1 hover:gap-2 transition-all group cursor-pointer"
                    >
                      Explore Licenses
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Commit To Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/60 relative overflow-hidden border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <span>How We Work · What to Expect · Our Approach · Before You Engage Us</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
              What We{" "}
              <span className="bg-linear-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent">
                Commit To
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
              Our firm bridges the gap between complex legal registries and fast-moving business targets. Here is our straightforward promise to every client.
            </p>
          </div>

          {/* 2-Column Side-by-Side Cards (Opposite Pairs) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Pair 1 - Left */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                  One office for the whole stack.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  IPR, incorporation, licenses and contracts. Most businesses need more than one, and they interact.
                </p>
              </div>
            </motion.div>

            {/* Pair 1 - Right */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 dark:bg-teal-400/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <MessageSquareText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                  Plain language, and reasoning behind it.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Simple, clear and business friendly solutions
                </p>
              </div>
            </motion.div>

            {/* Pair 2 - Left */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                  We tell you what you need
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  A trademark won't protect your product design. A company name isn't a brand right. Copyright won't protect an idea.
                </p>
              </div>
            </motion.div>

            {/* Pair 2 - Right */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                  We'll tell you if you don't need it
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  ISO isn't mandatory. Most software isn't patentable. Not every business needs GST.
                </p>
              </div>
            </motion.div>

            {/* Pair 3 - Left */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <CalendarClock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                  Your deadlines, tracked.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Trademarks renew at 10 years. FSSAI licenses expire. An IEC must be confirmed every April to June. LLP forms run at ₹100 a day with no ceiling.
                </p>
              </div>
            </motion.div>

            {/* Pair 3 - Right */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 bg-white dark:bg-slate-800/80 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                  You'll always know which stage you're at.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  And what the next one is, with the date it's due.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Google Reviews Branding */}
      <TestimonialSlider testimonials={testimonials} title="Client Success Stories" />

      {/* Premium Brand logo section */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-y border-slate-100 dark:border-slate-800">
        {/* subtle background glow */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-200 h-100 bg-linear-to-r from-[#F4C430]/10 via-[#FFB300]/10 to-[#FF9933]/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#0B4619]/5 border border-[#0B4619]/10">
              {/* <Star className="w-4 h-4 text-[#F4C430] fill-[#F4C430]" /> */}
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B4619] dark:text-slate-300">
                Trusted Partners
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-[#0B4619] dark:text-white tracking-tight">
              Empowering{" "}
              <span className="bg-linear-to-r from-[#F4C430] to-[#FF9933] bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h3>
            <p className="mt-4 text-base sm:text-lg text-[#0B4619]/70 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Join hundreds of forward-thinking brands that rely on Shivoham for
              seamless compliance and legal execution.
            </p>
          </div>

          {/* Logo track */}
          <div className="relative overflow-hidden py-8">
            {/* left fade */}
            <div className="absolute left-0 top-0 h-full w-32 z-10 bg-linear-to-r from-white dark:from-slate-950 to-transparent pointer-events-none" />

            {/* right fade */}
            <div className="absolute right-0 top-0 h-full w-32 z-10 bg-linear-to-l from-white dark:from-slate-950 to-transparent pointer-events-none" />

            {/* moving row */}
            <div className="flex items-center gap-16 w-max animate-[marquee_22s_linear_infinite]">
              {(() => {
                const logoList = partnerLogos.length > 0 ? partnerLogos : brands;
                const formatPath = (src) => {
                  if (!src) return "";
                  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) return src;
                  return `/${src}`;
                };
                return [...logoList, ...logoList].map((brand, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-center px-4"
                  >
                    <img
                      src={formatPath(brand)}
                      alt="brand logo"
                      className="h-12 sm:h-16 object-contain opacity-80 
                             group-hover:opacity-100 
                           transition-all duration-500 cursor-pointer hover:scale-110 drop-shadow-sm group-hover:drop-shadow-md"
                    />
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for search */}
      {showClientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur"
            onClick={() => setShowClientModal(false)}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="relative w-full max-w-md rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden">
              {/* Top Bar */}
              <div className="h-1" />

              <div className="p-6">
                {/* Badge */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4619]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#0B4619]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </div>

                <h3 className="text-center text-xl font-bold text-slate-900">
                  Trademark Search
                </h3>

                <p className="mt-2 text-center text-sm text-slate-500">
                  Are you already a Shivoham client?
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      setClientType("client");
                      setShowClientModal(false);
                    }}
                    className="flex-1 rounded-xl bg-[#0B4619] py-3 text-white font-medium hover:bg-[#073010] transition-all cursor-pointer"
                  >
                    Yes
                  </button>

                  <button
                    onClick={() => {
                      setClientType("guest");
                      setShowClientModal(false);
                    }}
                    className="flex-1 rounded-xl border border-slate-200 py-3 text-slate-700 font-medium hover:border-[#0B4619] hover:text-[#0B4619] transition-all cursor-pointer"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
