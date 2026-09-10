import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Search, ArrowRight, Shield, Briefcase, FileCheck, PhoneCall, ChevronDown } from 'lucide-react';
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
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Header Bar */}
      <div className="hidden lg:block bg-[#052E1F] dark:bg-black text-white py-2 px-6 text-xs sm:text-sm transition-all border-b border-slate-800 dark:border-zinc-800">
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
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
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
                        ? 'text-primary-600 bg-primary-50 font-bold'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
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
                      className="absolute left-0 mt-1 w-64 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden z-50 p-2 grid gap-1"
                    >
                      {item.items.map((subItem, sIdx) => (
                        <Link
                          key={sIdx}
                          to={subItem.path}
                          className="px-4 py-2.5 text-sm rounded-lg text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition duration-150 flex items-center font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2.5 transition-colors duration-150 hover:bg-primary-500"></span>
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
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition shadow-xs cursor-pointer group"
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
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-full transition cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-full transition"
            >
              {isOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
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
              className="lg:hidden bg-white border-t border-slate-200 shadow-xl overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                {navItems.map((item, idx) => (
                  <div key={idx} className="py-1">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown)}
                          className="w-full flex justify-between items-center py-2.5 px-3 text-base font-bold text-slate-800 rounded-lg hover:bg-slate-50"
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
                                  className="block py-2 text-sm text-slate-600 hover:text-primary-600 transition"
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
                            ? 'text-primary-600 bg-primary-50 font-bold'
                            : 'text-slate-800 hover:bg-slate-50'
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
