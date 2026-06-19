import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Search, ArrowRight, Shield, Briefcase, FileCheck, PhoneCall, ChevronDown } from 'lucide-react';
import { services } from '../data/servicesData';
import api from '../config/api';

export default function Header() {
  // const [navItems,setNavItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle theme change
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle client-side search logic
  // useEffect(() => {
  //   if (!searchQuery.trim()) {
  //     setSearchResults([]);
  //     return;
  //   }

  //   const query = searchQuery.toLowerCase();
  //   const results = Object.values(services).filter(service =>
  //     service.title.toLowerCase().includes(query) ||
  //     service.shortDescription.toLowerCase().includes(query)
  //   ).slice(0, 5);

  //   setSearchResults(results);
  // }, [searchQuery]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // const getNavItems =async ()=>{
  //   const {data} = await api.get("/navbar");
  //   setNavItems(data.data);
  // }

  const navItems = [
    // { name: 'Home', path: '/' },
    {
      name: 'IPR Services',
      dropdown: 'ipr',
      items: [
        { name: 'Trademarks Registration', path: '/services/trademark' },
        { name: 'Copyright Registration', path: '/services/copyright' },
        { name: 'Patent Filing', path: '/services/patent' },
        { name: 'Industrial Design', path: '/services/design' },
        { name: 'Legal Advice & Contracts', path: '/services/legal-advice' }
      ]
    },
    {
      name: 'Company Formation',
      dropdown: 'formation',
      items: [
        { name: 'Sole Proprietorship', path: '/services/sole-proprietor' },
        { name: 'Partnership Firm', path: '/services/partnership-firm' },
        { name: 'One Person Company (OPC)', path: '/services/opc' },
        { name: 'LLP Incorporation', path: '/services/llp' },
        { name: 'Private Limited Company', path: '/services/private-limited' },
        { name: 'NGO / Trust', path: '/services/ngo' }
      ]
    },
    {
      name: 'Licenses',
      dropdown: 'licenses',
      items: [
        { name: 'MSME Udyam Registration', path: '/services/msme-udyam' },
        { name: 'GST Filing & Registration', path: '/services/gst' },
        { name: 'Digital Signature (DSC)', path: '/services/dsc' },
        { name: 'Import Export Code (IEC)', path: '/services/iec' },
        { name: 'Shop Act / Gumasta', path: '/services/shop-act-gumasta' },
        { name: 'FSSAI / Health / Fire', path: '/services/fssai-health-fire' },
        { name: 'ISO / CE / BIS Certs', path: '/services/iso-ce-bis' }
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Header Bar */}
      <div className="hidden lg:block bg-[#052E1F] text-white py-2 px-6 text-xs sm:text-sm transition-all border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center font-sans space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row sm:space-x-6 items-center space-y-1 sm:space-y-0">
            <span className="flex items-center text-slate-300">
              <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary-400" />
              Call us: <a href="tel:+919137282042" className="hover:text-primary-400 transition ml-1 font-semibold">+91 9137282042</a>
            </span>
            <span className="flex items-center text-slate-300">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-ping mr-2"></span>
              Email: <a href="mailto:diptish@shivoham.biz" className="hover:text-primary-400 transition ml-1 font-semibold">diptish@shivoham.biz</a>
            </span>
          </div>
          <div className="text-slate-400 sm:text-slate-300 text-center sm:text-right">
            Dadar, Mumbai • India's Leading Professional Services Platform
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-50 glass-nav transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo Branding */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/img/mainLogo.png"
              alt="Shivoham & Associates"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            {/* <div className="flex flex-col leading-none">
              <span className="font-display font-black text-xl text-slate-900 dark:text-white tracking-tight">SHIVOHAM</span>
              <span className="font-sans text-[10px] text-primary-600 dark:text-primary-400 tracking-wider font-semibold">LAW & ASSOCIATES</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.dropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center transition duration-200 cursor-pointer ${activeDropdown === item.dropdown
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-slate-800/50'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                      }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-250 ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-semibold rounded-lg transition duration-200 block ${isActive
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-slate-800/50 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}

                {/* Desktop Dropdown Render */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-64 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xl rounded-xl overflow-hidden z-50 p-2 grid gap-1"
                    >
                      {item.items.map((subItem, sIdx) => (
                        <Link
                          key={sIdx}
                          to={subItem.path}
                          className="px-4 py-2.5 text-sm rounded-lg text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition duration-150 flex items-center font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mr-2.5 transition-colors duration-150 hover:bg-primary-500"></span>
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search Icon */}
            {/* <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 hover:bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full transition cursor-pointer"
              title="Search Services"
            >
              <Search className="w-5 h-5" />
            </button> */}

            {/* CTA Button */}
            <Link
              to="/get-quote"
              className="bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition duration-200 flex items-center gap-1.5 group cursor-pointer"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
            >
              <Search className="w-5 h-5" />
            </button> */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                {navItems.map((item, idx) => (
                  <div key={idx} className="py-1">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown)}
                          className="w-full flex justify-between items-center py-2.5 px-3 text-base font-bold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/30"
                        >
                          {item.name}
                          <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.dropdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 pr-3 mt-1 space-y-1 overflow-hidden"
                            >
                              {item.items.map((subItem, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={subItem.path}
                                  className="block py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block py-2.5 px-3 text-base font-bold rounded-lg transition ${isActive
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-slate-800/40'
                            : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/30'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 px-3">
                  <Link
                    to="/get-quote"
                    className="w-full text-center bg-linear-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-1.5 shadow-md"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Animated Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-lg z-100 flex justify-center items-start pt-20 px-4 sm:pt-28"
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
            >
              {/* Search Header Input */}
              <div className="p-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center flex-1 mr-4">
                  <Search className="w-6 h-6 text-slate-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Search for trademark, GST, company registration..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none text-slate-800 dark:text-white text-lg font-medium placeholder-slate-400 focus:ring-0"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Body Results */}
              <div className="p-5 max-h-[60vh] overflow-y-auto bg-slate-50/50 dark:bg-slate-900/50">
                {searchQuery.trim() === '' ? (
                  <div className="text-center py-6">
                    <p className="text-slate-500 dark:text-slate-400 font-semibold mb-2">Popular Searches</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                      {['Trademark', 'GST', 'MSME Udyam', 'LLP', 'Private Limited'].map((pop, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setSearchQuery(pop)}
                          className="px-3.5 py-1.5 bg-white dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition cursor-pointer"
                        >
                          {pop}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Matching Services</p>
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        to={`/services/${result.id}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="p-3 bg-white dark:bg-slate-800 hover:bg-primary-50/50 dark:hover:bg-slate-800/80 border border-slate-200/40 dark:border-slate-700/40 hover:border-primary-300 dark:hover:border-primary-700 rounded-xl flex items-center justify-between transition group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary-50 dark:bg-primary-950/50 rounded-lg text-primary-600 dark:text-primary-400">
                            {result.categoryId === 'ipr' ? <Shield className="w-5 h-5" /> :
                              result.categoryId === 'company-formation' ? <Briefcase className="w-5 h-5" /> :
                                <FileCheck className="w-5 h-5" />}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">{result.title}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{result.shortDescription}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-slate-500 dark:text-slate-400 font-semibold">No services found for "{searchQuery}"</p>
                    <p className="text-xs text-slate-400 mt-1">Try searching with other terms like "trademark", "patent", "GST", etc.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
