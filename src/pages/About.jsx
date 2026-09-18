import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Building2,
  FileCheck,
  FileText,
  XCircle,
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
  Scale,
  Sparkles,
  Award,
  Accessibility,
  Eye,
  Receipt,
  Landmark,
  ChevronRight,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';
import SEO from '../components/SEO';

export default function About() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const values = [
    {
      title: 'Excellence',
      desc: 'We strive for excellence in everything we do, ensuring the best possible legal and financial outcomes for our clients.',
      icon: Award
    },
    {
      title: 'Innovation',
      desc: 'We leverage technology and modern legal strategies to stay ahead in an ever-evolving regulatory landscape.',
      icon: Sparkles
    },
    {
      title: 'Accessibility',
      desc: 'We believe in making legal services accessible to all. Our flexible structures ensure high-quality, budget-friendly compliance.',
      icon: Accessibility
    },
    {
      title: 'Proven Results',
      desc: 'We have built a consistent reputation for achieving favorable outcomes, no matter how challenging the filing scenario.',
      icon: Shield
    }
  ];

  const whatWeDo = [
    {
      title: "Intellectual Property",
      desc: "Trademarks feasibility, filings, objection replies and oppositions. Copyright registration for creative and software works. Patent drafting, filing and prosecution. Design registration. We handle a matter from the first availability search through to the registration certificate, and through renewals afterwards.",
      icon: Shield,
      tag: "IPR & Patents"
    },
    {
      title: "Business Incorporation",
      desc: "Private Limited, LLP, OPC, partnership firms and proprietorships. Section 8 companies, trusts and societies for charitable work. We advise on structure before incorporation, because the wrong choice at the start is expensive to correct later.",
      icon: Building2,
      tag: "Company Setup"
    },
    {
      title: "Licences and Registrations",
      desc: "GST, Udyam, Shop Act and Gumasta, Professional Tax, IEC, FSSAI and municipal health and fire permissions, Digital Signatures, BIS, ISO and CE.",
      icon: FileCheck,
      tag: "Statutory Compliance"
    },
    {
      title: "Contracts and Advisory",
      desc: "Founders' agreements, service and vendor contracts, IP assignments, licensing agreements and employment documentation.",
      icon: FileText,
      tag: "Legal Advisory"
    }
  ];

  const whatWeDontDo = [
    {
      title: "We don't guarantee registrations",
      desc: "No professional can. What we can commit to is a properly prepared, correctly classified filing and a considered response to whatever the registry raises."
    },
    {
      title: "We don't file applications we think will fail",
      desc: "If a search shows your brand name is not registrable, we will tell you before you spend the government fee, which is non-refundable."
    },
    {
      title: "We don't advise on foreign law",
      desc: "For international filings we coordinate; the advice on that jurisdiction comes from a practitioner qualified there."
    },
    {
      title: "We don't take payment through this website",
      desc: "Fees are invoiced after an engagement is confirmed in writing. Any request for payment through this site, or to an account other than the one on our invoice, is not from us."
    }
  ];

  const howWeWork = [
    {
      title: "We tell you what a filing will not do",
      shortTitle: "Realistic Scope & Feasibility",
      tag: "Expectation Setting",
      icon: Eye,
      quote: "We would rather explain this before you pay than after you are disappointed.",
      desc: "A trademark does not protect your product design. A company name approval is not a brand right. Copyright will not protect an idea. Most software is not patentable in India. We would rather explain this before you pay than after you are disappointed."
    },
    {
      title: "We quote government fees and professional fees separately",
      shortTitle: "Itemized, Transparent Billing",
      tag: "Zero Hidden Markups",
      icon: Receipt,
      quote: "Statutory fees are fixed by rule and go to the authority, not to us.",
      desc: "Statutory fees are fixed by rule and go to the authority, not to us. You should always be able to see which part of an invoice is ours."
    },
    {
      title: "We do not promise outcomes",
      shortTitle: "Procedural Realism & Discretion",
      tag: "Regulatory Integrity",
      icon: Scale,
      quote: "Any firm guaranteeing you a registration is guaranteeing something it does not control.",
      desc: "Registrations are granted by registries applying their own discretion, on their own timelines. Objections and examination reports are ordinary stages of the process, not failures. Any firm guaranteeing you a registration is guaranteeing something it does not control."
    },
    {
      title: "We track your deadlines",
      shortTitle: "Proactive Deadline Tracking",
      tag: "Zero-Lapse Calendar",
      icon: Clock,
      quote: "A statutory lapse is far more expensive than the original filing was.",
      desc: "Trademarks renew every ten years. FSSAI licences expire. An IEC must be confirmed every April to June or it is deactivated. LLP forms carry a penalty of ₹100 per day with no ceiling. We maintain these dates for the clients we act for, because a lapse is far more expensive than the filing was."
    },
    {
      title: "We work on Maharashtra procedure, not generic advice",
      shortTitle: "Ground Maharashtra Practice",
      tag: "Hyper-Local Mumbai Edge",
      icon: Landmark,
      quote: "Portal-based national aggregators do not know local ward realities. We work here.",
      desc: "The Marathi signboard requirement on a Gumasta application. Which ward office handles a BMC health licence. How the Charity Commissioner's office actually processes a trust registration. Portal-based national services do not know this. We work here."
    }
  ];

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/40 transition-all">
      {/* SEO Metadata */}
      <SEO
        title="About Us | Legal & IPR Experts in Dadar, Mumbai | Shivoham & Associates"
        description="Learn about Shivoham & Associates, a premier legal consultancy in Dadar, Mumbai specializing in Intellectual Property, corporate governance, and statutory compliance."
        canonicalUrl="https://shivoham.biz/about"
      />

      {/* Title Header Banner */}
      <section className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-20 px-4 text-center relative overflow-hidden border-b border-[#0B4619]/10">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/25 border border-white/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Professional Legal & Regulatory Practice
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-tight">About Shivoham & Associates</h1>
          <p className="text-[#0B4619]/90 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Registered Intellectual Property, Corporate Formation & Statutory Compliance Practice based in Dadar, Mumbai.
          </p>
        </div>
      </section>

      {/* 1. OUR CORE MISSION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Our Core Mission
          </h2>
          <p className="text-slate-700 dark:text-slate-300 font-sans leading-relaxed text-base font-semibold">
            A professional practice in Dadar, working across intellectual property, incorporation and regulatory compliance.
          </p>
          <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-base">
            Shivoham & Associates has been working with founders, family businesses, manufacturers and creators across Mumbai to register what they have built and keep it compliant. We file before the Trade Marks Registry, the Patent Office, the Copyright Office, the Ministry of Corporate Affairs, the GST Office, the DGFT, fssai, the municipal and state authorities of Maharashtra.
          </p>
          <p className="text-slate-800 dark:text-slate-200 font-sans leading-relaxed text-base font-medium border-l-4 border-amber-500 pl-4 bg-amber-500/5 py-2 rounded-r-lg">
            The work is detailed, procedural and deadline-driven.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <img
            src="/img/about-1.png"
            alt="Shivoham & Associates Practice"
            className="rounded-3xl shadow-xl w-full border border-slate-200/60 dark:border-slate-800 object-cover"
          />
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-sans text-sm sm:text-base">
              The pillars that define our client relationships and professional ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 rounded-3xl space-y-5 hover:border-amber-500/40 hover:shadow-lg transition duration-300 flex flex-col justify-start"
                >
                  <span className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div className="space-y-2.5">
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              What We Do
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-sans text-base leading-relaxed">
              We work across four connected areas. Most clients need more than one, which is why we keep them under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeDo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800 rounded-2xl space-y-4 hover:border-amber-500/50 hover:shadow-lg transition duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DON'T DO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            What We Don't Do
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-sans text-base leading-relaxed">
            Professional clarity and client trust begin with total honesty about ethical boundaries and regulatory reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatWeDontDo.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-red-500/5 dark:bg-red-950/10 border border-red-200/60 dark:border-red-900/40 rounded-2xl space-y-3"
            >
              <div className="flex items-center gap-2.5 text-red-600 dark:text-red-400">
                <XCircle className="w-5 h-5 shrink-0" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans pl-7.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW WE WORK (Interactive Master-Detail Showcase) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Our Operating Standards
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
              Our principles on filings, transparency, statutory fees, tracking and local Mumbai procedures.
            </p>
          </div>

          {/* Mobile & Tablet Selector - All 5 Principles Clearly Visible */}
          <div className="flex flex-wrap gap-2 lg:hidden">
            {howWeWork.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activePrinciple === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePrinciple(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${isActive
                      ? "bg-amber-500 text-slate-950 shadow-md font-black ring-2 ring-amber-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-amber-500'}`} />
                  <span>{item.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Master-Detail Interactive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Nav Menu (5 columns) */}
            <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
              {howWeWork.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activePrinciple === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePrinciple(idx)}
                    onMouseEnter={() => setActivePrinciple(idx)}
                    className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${isActive
                        ? "bg-gradient-to-r from-amber-500/15 to-transparent border-amber-500/80 shadow-md translate-x-1"
                        : "bg-slate-50/70 dark:bg-slate-950/30 border-slate-200/70 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                            ? "bg-amber-500 text-slate-950 font-black shadow-sm scale-105"
                            : "bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-amber-500/10 group-hover:text-amber-600"
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="min-w-0">
                        <span className={`text-[11px] font-bold tracking-wider uppercase block ${isActive ? "text-amber-600 dark:text-amber-400" : "text-slate-400 dark:text-slate-500"}`}>
                          {item.tag}
                        </span>
                        <p
                          className={`text-sm font-bold truncate transition-colors ${isActive
                              ? "text-slate-950 dark:text-white font-extrabold"
                              : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                            }`}
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${isActive
                          ? "text-amber-600 dark:text-amber-400 translate-x-1"
                          : "text-slate-400 group-hover:translate-x-0.5"
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Showcase Panel (7 columns) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePrinciple}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full p-5 sm:p-8 lg:p-10 rounded-3xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/90 dark:border-slate-800 shadow-xl flex flex-col justify-between gap-6"
                >
                  <div className="space-y-5 relative z-10">
                    {/* Top Tag & Title */}
                    <div className="space-y-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-black uppercase tracking-widest">
                        {howWeWork[activePrinciple].tag}
                      </span>
                      <h3 className="font-display font-black text-xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                        {howWeWork[activePrinciple].title}
                      </h3>
                    </div>

                    {/* Main Narrative */}
                    <p className="text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      {howWeWork[activePrinciple].desc}
                    </p>

                    {/* Featured Quote Box */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500">
                      <p className="text-xs sm:text-base font-serif italic text-slate-800 dark:text-slate-200">
                        "{howWeWork[activePrinciple].quote}"
                      </p>
                    </div>
                  </div>

                  {/* Bottom Navigation Hints - Unified Controls Inside Card */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 relative z-10">
                    <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-start">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold text-xs">
                        {activePrinciple + 1} of {howWeWork.length}
                      </span>
                      <span className="font-medium text-slate-600 dark:text-slate-400">
                        Shivoham Procedural Transparency Standard
                      </span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
                      <button
                        onClick={() => setActivePrinciple((prev) => (prev > 0 ? prev - 1 : howWeWork.length - 1))}
                        aria-label="Previous principle"
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition cursor-pointer shadow-xs"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5 px-1">
                        {howWeWork.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => setActivePrinciple(dotIdx)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePrinciple === dotIdx ? "w-6 bg-amber-500" : "w-2 bg-slate-300 dark:bg-slate-700"
                              }`}
                            aria-label={`Jump to principle ${dotIdx + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => setActivePrinciple((prev) => (prev < howWeWork.length - 1 ? prev + 1 : 0))}
                        aria-label="Next principle"
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition cursor-pointer shadow-xs"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHERE WE ARE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Where We Are
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-sans text-base leading-relaxed">
            Conveniently situated in Central Mumbai, supporting clients locally, pan-India, and internationally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between p-8 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800 rounded-3xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <MapPin className="w-6 h-6" />
                <span className="font-bold text-sm uppercase tracking-wider">Dadar Practice Office</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-sans leading-relaxed text-base">
                Our office is in Dadar, at the centre of Mumbai's rail network and well connected with the City. Our Clients from across the Mumbai Metropolitan Region reach us without difficulty, and much of our work is completed without a visit at all — the registries are online and documents can be signed digitally/ DSC.
              </p>
              <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-sm sm:text-base">
                We work with clients across India and abroad, where a filing requires it, coordinate with associates in other jurisdictions.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                Ground Floor, Shivoham & Associates, Parasmani Commercial Complex, Flignite, Dadar, Mumbai – 400014
              </div>
              <a
                href="https://www.google.com/maps/place/SHIVOHAM+AND+ASSOCIATES/@19.015854,72.8437095,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf1ed58c1157:0xd909cce553d3833f!8m2!3d19.015854!4d72.8437095!16s%2Fg%2F11whfm7hz1?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-sm font-bold rounded-xl transition"
              >
                Open in Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-md min-h-[320px]">
            <iframe
              title="Shivoham & Associates Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7487211181245!2d72.84113457597144!3d19.015854082179836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf1ed58c1157%3A0xd909cce553d3833f!2sSHIVOHAM%20AND%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1709971200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Client Success Stories / Google Reviews */}
      <TestimonialSlider title="Client Success Stories" />
    </div>
  );
}
