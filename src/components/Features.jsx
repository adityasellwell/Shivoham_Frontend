// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, Clock, IndianRupee, HeadphonesIcon, Award, FileCheck } from 'lucide-react';

// export default function Features() {
//   const features = [
//     {
//       icon: Award,
//       title: 'Trusted Corporate Advisors',
//       description: 'Over 10,000+ businesses across Mumbai and India trust us with their critical legal and taxation compliances.'
//     },
//     {
//       icon: Clock,
//       title: 'Swift Execution',
//       description: 'We value your time. From instant GST applications to fast-track trademark filings, we ensure zero delays.'
//     },
//     {
//       icon: IndianRupee,
//       title: 'Transparent Pricing',
//       description: 'No hidden costs or last-minute surprises. Our competitive pricing is communicated upfront before any task begins.'
//     },
//     {
//       icon: HeadphonesIcon,
//       title: 'Dedicated Support',
//       description: 'Get assigned a dedicated account manager who provides real-time updates on your application status via WhatsApp.'
//     },
//     {
//       icon: Shield,
//       title: 'Absolute Confidentiality',
//       description: 'Your business ideas, technical patents, and financial data are secured under strict non-disclosure policies.'
//     },
//     {
//       icon: FileCheck,
//       title: '100% Compliance Rate',
//       description: 'We don’t just file forms; we ensure long-term regulatory safety so you never face municipal or tax penalties.'
//     }
//   ];

//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-800/50">
//       <div className="max-w-7xl mx-auto space-y-16">
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
//             <Shield className="w-4 h-4" />
//             <span>Why Choose Us</span>
//           </div>
//           <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
//             Compliance Solutions that Build Better Futures
//           </h2>
//           <p className="text-slate-600 dark:text-slate-400 font-sans text-base leading-relaxed">
//             We eliminate red tape and bureaucratic hurdles so that you can focus entirely on scaling your business operations.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, idx) => {
//             const Icon = feature.icon;
//             return (
//               <motion.div 
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
//               >
//                 <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
//                   <Icon className="w-7 h-7" />
//                 </div>
//                 <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">{feature.title}</h3>
//                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
