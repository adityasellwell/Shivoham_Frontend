import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Accessibility, Award, Users, CheckCircle2 } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';

export default function About() {
  const values = [
    {
      title: 'Excellence',
      desc: 'We strive for excellence in everything we do, ensuring the best possible legal and financial outcomes for our clients.',
      icon: Award
    },
    {
      title: 'Innovation',
      desc: 'We leverage cutting-edge technology and modern legal strategies to stay ahead in an ever-evolving regulatory landscape.',
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

  const team = [
    {
      name: 'Adv. Diptish K. Hegde',
      role: 'Founder & Senior Partner',
      experience: '15+ Years Experience',
      specialty: 'Intellectual Property, Corporate Litigations & Trademark Protection',
      image: '/img/team-1.jpg'
    },
    {
      name: 'Meera Deshpande, CS',
      role: 'Partner - Corporate Services',
      experience: '10+ Years Experience',
      specialty: 'Company Secretarial, Mergers & Private Limited Formations',
      image: '/img/team-2.jpg'
    },
    {
      name: 'Aditya Mehta, CA',
      role: 'Head of Taxation & Audits',
      experience: '12+ Years Experience',
      specialty: 'GST Advisory, Corporate Auditing & Startup Tax Exemptions',
      image: '/img/team-3.jpg'
    },
    {
      name: 'Adv. Sameer Sawant',
      role: 'Associate Partner',
      experience: '8+ Years Experience',
      specialty: 'Import Export Codes, Shop Act Compliances & Municipal Licensing',
      image: '/img/team-4.jpg'
    }
  ];

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950/20 transition-all">
      {/* Title Header Banner */}
      <section className="bg-gradient-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-tight">About Our Firm</h1>
          <p className="text-[#0B4619] font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Shivoham & Associates provides streamlined corporate filing, brand protection, and municipal licensing services to startups and corporations.
          </p>
        </div>
      </section>

      {/* Main Profile Description */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">Our Core Mission</h2>
          <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-base">
            Established in Dadar, Mumbai, Shivoham & Associates was founded with a singular focus: to simplify business compliance for Indian entrepreneurs. We eliminate administrative friction, helping business leaders focus entirely on scaling their enterprises while we safeguard their brands, patents, and tax structures.
          </p>
          <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-base">
            Over the years, our advisory board has assisted over 10,000 businesses, securing brand registrations across multiple sectors, establishing robust partnerships, and enabling smooth export operations.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <img
            src="/img/about-1.png"
            alt="Office workspace"
            className="rounded-3xl shadow-xl w-full border border-slate-200/50 dark:border-slate-800"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-display font-black text-3xl text-slate-900 dark:text-white">Our Core Values</h2>
            <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">The pillars that define our client relationships and professional ethics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/60 rounded-2xl space-y-4">
                  <span className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{v.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Users className="w-12 h-12 text-primary-500 mx-auto" />
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">Our Expert Advisory Board</h2>
          <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">Qualified advocates, company secretaries, and auditors.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="h-64 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter contrast-95 transition-transform duration-350 hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{member.name}</h4>
                <p className="text-xs font-extrabold text-primary-600 dark:text-primary-400 tracking-wider uppercase">{member.role}</p>
                <p className="text-[10px] font-bold text-slate-400">{member.experience}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
    </div>
  );
}
