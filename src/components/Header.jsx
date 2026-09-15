import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Search, ArrowRight, Shield, Briefcase, FileCheck, PhoneCall, ChevronDown, Sparkles } from 'lucide-react';
import { services } from '../data/servicesData';
import api from '../config/api';

export default function Header() {
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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    {
      name: 'IPR Services',
      dropdown: 'ipr',
      items: [
        {
          name: 'Which IP Protection Do I Need?',
          path: '/legal-services/ipr-services-in-mumbai',
          isFeatured: true
        },
        { name: 'Trademarks Registration', path: '/legal-services/trademark-registration-in-mumbai' },
        { name: 'Copyright Registration', path: '/legal-services/copyright-registration-in-mumbai' },
        { name: 'Patent Filing', path: '/legal-services/patent-registration-in-mumbai' },
        { name: 'Industrial Design', path: '/legal-services/design-registration-in-mumbai' },
        { name: 'Legal Advice & Contracts', path: '/legal-services/legal-advice-agreements-in-mumbai' }
      ]
    },
    {
      name: 'Company Formation',
      dropdown: 'formation',
      items: [
        {
          name: 'Which Business Structure Should I Choose?',
          path: '/business-services/which-business-structure-should-i-choose',
          isFeatured: true
        },
        { name: 'Sole Proprietorship', path: '/business-services/sole-proprietorship-registration-in-mumbai' },
        { name: 'Partnership Firm', path: '/business-services/partnership-firm-registration-in-mumbai' },
        { name: 'One Person Company (OPC)', path: '/business-services/opc-registration-in-mumbai' },
        { name: 'LLP Incorporation', path: '/business-services/llp-incorporation-in-mumbai' },
        { name: 'Private Limited Company', path: '/business-services/company-formation-in-mumbai' },
        { name: 'NGO', path: '/business-services/ngo-registration-in-mumbai' },
        { name: 'Trust', path: '/business-services/trust-registration-in-mumbai' }
      ]
    },
    {
      name: 'Licenses',
      dropdown: 'licenses',
      items: [
        {
          name: 'Which Registrations Do You Actually Need?',
          path: '/business-registration/which-registrations-does-my-business-need',
          isFeatured: true
        },
        {
          name: 'Statutory Compliance Calendar (Mumbai & MH)',
          path: '/compliance-calendar',
          isFeatured: true
        },
        { name: 'MSME / Udyam Registration', path: '/business-registration/msme-udyam-registration-in-mumbai' },
        { name: 'Gumasta / Shop Act License', path: '/business-registration/gumasta-license-registration-in-mumbai' },
        { name: 'Import Export Code (IEC)', path: '/business-registration/import-export-code-iec-in-mumbai' },
        { name: 'GST Registration & Filing', path: '/business-registration/gst-registration-filing-in-mumbai' },
        { name: 'FSSAI (Food License)', path: '/business-registration/fssai-food-license-in-mumbai' },
        { name: 'Digital Signature (DSC)', path: '/business-registration/dsc-digital-signature-in-mumbai' },
        { name: 'ISO Certification', path: '/business-registration/iso-certification-in-mumbai' },
        { name: 'Professional Tax — PTEC & PTRC (Maharashtra)', path: '/business-registration/professional-tax-ptec-ptrc-in-mumbai' },
        { name: 'Bureau of Indian Standards (BIS)', path: '/business-registration/bis-certification-in-mumbai' },
        { name: 'CE Marking', path: '/business-registration/ce-marking-in-mumbai' },
        { name: 'DPIIT Startup Recognition', path: '/business-registration/dpiit-startup-recognition-in-mumbai' }
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Notification / Utility Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
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
            Dadar East, Mumbai 400014 • India's Leading Professional Services Platform
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
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105 rounded-md"
            />
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
                      ? 'text-primary-600 dark:text-primary-600 bg-primary-50 dark:bg-primary-50/80 font-bold'
                      : 'text-slate-800 dark:text-slate-900 hover:text-slate-950 dark:hover:text-black hover:bg-slate-50 dark:hover:bg-slate-100'
                      }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 ml-1 text-slate-700 dark:text-slate-800 transition-transform duration-250 ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-semibold rounded-lg transition duration-200 block ${isActive
                        ? 'text-primary-600 dark:text-primary-600 bg-primary-50 dark:bg-primary-50/80 font-bold'
                        : 'text-slate-800 dark:text-slate-900 hover:text-slate-950 dark:hover:text-black hover:bg-slate-50 dark:hover:bg-slate-100'
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
                      className={`absolute left-0 mt-1 ${item.dropdown === 'licenses' ? 'w-84 sm:w-88' : 'w-72'} max-h-[82vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl z-50 p-2.5 grid gap-1`}
                    >
                      {item.items.map((subItem, sIdx) => (
                        <Link
                          key={sIdx}
                          to={subItem.path}
                          className={`px-3 py-2 text-sm rounded-xl transition duration-150 flex items-center justify-between font-medium ${subItem.isFeatured
                              ? 'bg-amber-50/90 dark:bg-amber-950/50 text-amber-950 dark:text-amber-200 hover:bg-amber-100/80 dark:hover:bg-amber-900/60 border border-amber-200/80 dark:border-amber-800/60 mb-1.5 shadow-xs'
                              : 'text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800/70'
                            }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-1">
                            {subItem.isFeatured ? (
                              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 ml-0.5 mr-1 shrink-0 transition-colors duration-150"></span>
                            )}
                            <span className={`${subItem.isFeatured ? 'text-xs sm:text-sm font-bold leading-snug text-amber-950 dark:text-amber-200' : 'text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200'}`}>
                              {subItem.name}
                            </span>
                          </div>
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
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition shadow-xs cursor-pointer group"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-500 transition-transform group-hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 transition-transform group-hover:-rotate-12" />
              )}
            </button>

            {/* CTA Button with pulse glow and light sweep */}
            <Link
              to="/get-quote"
              className="relative overflow-hidden bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#16a34a] hover:from-[#b45309] hover:to-[#15803d] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-1.5 group cursor-pointer cta-pulse-btn"
            >
              <span className="cta-shimmer" />
              <span className="relative z-10 flex items-center gap-1.5">
                Get a Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-700 dark:text-slate-200" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition"
            >
              {isOpen ? <X className="w-6 h-6 text-slate-800 dark:text-slate-200" /> : <Menu className="w-6 h-6 text-slate-800 dark:text-slate-200" />}
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
              className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                {navItems.map((item, idx) => (
                  <div key={idx} className="py-1">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown)}
                          className="w-full flex justify-between items-center py-2.5 px-3 text-base font-bold text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
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
                                  className={`block py-2 text-sm transition ${subItem.isFeatured
                                      ? 'text-amber-800 dark:text-amber-200 font-bold flex items-center gap-2 bg-amber-50 dark:bg-amber-950/50 px-3 py-2 rounded-lg border border-amber-200/60 dark:border-amber-800/60 my-1'
                                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-amber-400'
                                    }`}
                                >
                                  {subItem.isFeatured && <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                                  <span>{subItem.name}</span>
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
                            ? 'text-primary-600 dark:text-amber-400 bg-primary-50 dark:bg-slate-800 font-bold'
                            : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                ))}

                {/* Mobile CTA with animation */}
                <div className="pt-4 px-3">
                  <Link
                    to="/get-quote"
                    className="relative overflow-hidden w-full text-center bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#16a34a] hover:from-[#b45309] hover:to-[#15803d] text-white py-3 rounded-xl font-bold flex justify-center items-center gap-1.5 shadow-md cta-pulse-btn"
                  >
                    <span className="cta-shimmer" />
                    <span className="relative z-10 flex items-center gap-1.5">
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
