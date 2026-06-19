import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'A Complete Guide to Trademark Registration in India',
      category: 'Intellectual Property',
      date: 'Oct 15, 2023',
      author: 'Adv. Diptish K. Hegde',
      excerpt: 'Protecting your brand identity is crucial in today’s competitive market. Learn the step-by-step process of securing your trademark.',
      image: '/img/blog-1.png'
    },
    {
      id: 2,
      title: 'Navigating GST Compliances for E-commerce Sellers',
      category: 'Taxation & Compliance',
      date: 'Nov 02, 2023',
      author: 'Aditya Mehta, CA',
      excerpt: 'Selling online? Understanding GST implications for e-commerce operators and sellers is mandatory to avoid heavy penalties.',
      image: '/img/blog-2.png'
    },
    {
      id: 3,
      title: 'Why Every Tech Startup Needs a Founders Agreement',
      category: 'Corporate Law',
      date: 'Nov 18, 2023',
      author: 'Meera Deshpande, CS',
      excerpt: 'A solid founders agreement prevents disputes regarding equity, roles, and intellectual property. Here’s what you need to include.',
      image: '/img/blog-3.png'
    },
    {
      id: 4,
      title: 'Benefits of Registering your Business under MSME Udyam',
      category: 'Business Licensing',
      date: 'Dec 05, 2023',
      author: 'Adv. Sameer Sawant',
      excerpt: 'Unlock collateral-free loans, subsidized patent filings, and protection against delayed payments with MSME Udyam registration.',
      image: '/img/blog-1.png' // Reusing image placeholder
    },
    {
      id: 5,
      title: 'Shop Act vs Trade License: What Does Your Business Need?',
      category: 'Municipal Licensing',
      date: 'Dec 22, 2023',
      author: 'Adv. Sameer Sawant',
      excerpt: 'Confused about local municipal licenses? We break down the difference between Gumasta (Shop Act) and Health Trade Licenses.',
      image: '/img/blog-2.png'
    },
    {
      id: 6,
      title: 'How to Respond to a Trademark Objection under Section 9',
      category: 'Intellectual Property',
      date: 'Jan 10, 2024',
      author: 'Adv. Diptish K. Hegde',
      excerpt: 'Received an Examination Report with an objection? Don’t panic. Here is how to draft a strong reply and secure your brand.',
      image: '/img/blog-3.png'
    }
  ];

  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Title Header Banner */}
      <section className="bg-linear-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] text-[#0B4619] py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <BookOpen className="w-12 h-12 text-[#0B4619] mx-auto mb-4" />
          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-tight">News & Insights</h1>
          <p className="text-[#0B4619] font-sans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Expert legal analysis, compliance updates, and actionable advice to help you navigate India's corporate regulatory landscape.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-accent-700 dark:text-accent-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   onError={(e) => {
    console.log("Failed:", e.currentTarget.src);
  }}
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-3.5 h-3.5 mr-1" />
                    {post.author}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button className="text-accent-600 dark:text-accent-400 font-bold text-sm flex items-center group/btn hover:text-accent-700 dark:hover:text-accent-300 transition-colors cursor-pointer">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1.5 transform transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 border-t border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display font-black text-3xl text-slate-900 dark:text-white">Subscribe to Legal Updates</h2>
          <p className="text-slate-600 dark:text-slate-400">Stay informed with the latest notifications regarding taxation, GST, and corporate compliance.</p>
          <form className="flex max-w-md mx-auto relative group">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all dark:text-white"
              required
            />
            <button 
              type="submit" 
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-accent-600 hover:bg-accent-700 text-white px-6 rounded-full font-bold text-sm transition-colors cursor-pointer shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
