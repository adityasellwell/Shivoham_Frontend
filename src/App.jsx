import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import QuoteWizard from './pages/QuoteWizard';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import AdminLayout from './pages/admin/AdminLayout';
import AdminStats from './pages/admin/AdminStats';
import AdminTestimonials from './pages/admin/AdminTestimonials';
import AdminQuotes from './pages/admin/AdminQuotes';
import AdminConsultations from './pages/admin/AdminConsultations';
import SearchResults from './pages/SearchResults';
import AdminLogin from './pages/admin/AdminLogin';
import AdminFAQ from './pages/admin/AdminFAQ';
import AdminQuoteConfig from './pages/admin/AdminQuoteConfig';
import Legal from './pages/Legal';


// Scroll to top helper on route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Redirects legacy SEO paths from old PHP website to new React routes
function LegacyRedirect() {
  const { pathname } = useLocation();
  const lowerPath = pathname.toLowerCase();

  const redirects = {
    '/index.php': '/',
    '/about.php': '/about',
    '/contact.php': '/contact',
    '/faq.php': '/faq',
    '/company-formation.php': '/services/private-limited',
    '/msme-service-in-dadar.php': '/services/msme-udyam',
    '/gumasta-service-in-dadar.php': '/services/shop-act-gumasta',
    '/ipr-service-in-dadar.php': '/services/trademark',
    '/trademark-services-in-dadar.php': '/services/trademark',
    '/copyright-services-in-dadar.php': '/services/copyright',
    '/patents-services-in-dadar.php': '/services/patent',
    '/designs-services-in-dadar.php': '/services/design',
    '/legal-advise-in-dadar.php': '/services/legal-advice',
    '/sole-proprietor-services-in-dadar.php': '/services/sole-proprietor',
    '/partnership-firm-services-in-dadar.php': '/services/partnership-firm',
    '/opc-services-in-dadar.php': '/services/opc',
    '/llp-services-in-dadar.php': '/services/llp',
    '/private-limited-services-in-dadar.php': '/services/private-limited',
    '/ngo-services-in-dadar.php': '/services/ngo',
    '/msme-udyam-services-in-dadar.php': '/services/msme-udyam',
    '/gst-services-in-dadar.php': '/services/gst',
    '/dsc-services-in-dadar.php': '/services/dsc',
    '/iec-services-in-dadar.php': '/services/iec',
    '/shop-act-gumasta-services-in-dadar.php': '/services/shop-act-gumasta',
    '/fssai-health-fire-services-in-dadar.php': '/services/fssai-health-fire',
    '/iso-ce-bis-services-in-dadar.php': '/services/iso-ce-bis'
  };

  const matchedRoute = redirects[lowerPath];

  if (matchedRoute) {
    return <Navigate to={matchedRoute} replace />;
  }

  // Fallback to NotFound if not recognized
  return <Navigate to="/404" replace />;
}

export default function App() {
  const { pathname } = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <ScrollToTop />

      {!pathname.startsWith("/admin") && <Header />}
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/get-quote" element={<QuoteWizard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path='/search-result' element={<SearchResults/>}/>
          <Route path="/disclaimer" element={<Legal defaultTab="disclaimer" />} />
          <Route path="/privacy-policy" element={<Legal defaultTab="privacy" />} />
          <Route path="/terms-and-conditions" element={<Legal defaultTab="terms" />} />
          <Route path="/refund-policy" element={<Legal defaultTab="refund" />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/refund" element={<Navigate to="/refund-policy" replace />} />

          {/* Admin Routes */}
          <Route path='/admin/login' element={<AdminLogin/>}  />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/stats" replace />} />
            <Route path="stats" element={<AdminStats />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="quotes" element={<AdminQuotes />} />
            <Route path="consultations" element={<AdminConsultations />} />
            <Route path="faqs" element={<AdminFAQ />} />
            <Route path="quote-config" element={<AdminQuoteConfig />} />
          </Route>

          {/* Legacy PHP page redirect routes */}
          <Route path="/index.php" element={<LegacyRedirect />} />
          <Route path="/about.php" element={<LegacyRedirect />} />
          <Route path="/contact.php" element={<LegacyRedirect />} />
          <Route path="/faq.php" element={<LegacyRedirect />} />
          <Route path="/company-formation.php" element={<LegacyRedirect />} />
          <Route path="/msme-service-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/gumasta-service-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/ipr-service-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/trademark-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/copyright-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/patents-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/designs-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/legal-advise-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/sole-proprietor-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/partnership-firm-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/opc-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/llp-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/private-limited-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/ngo-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/msme-udyam-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/gst-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/dsc-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/iec-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/shop-act-gumasta-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/fssai-health-fire-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/fssai-health-fire-services-in-dadar.php" element={<LegacyRedirect />} />
          <Route path="/iso-ce-bis-services-in-dadar.php" element={<LegacyRedirect />} />
          {/* <Route path="/blog.php" element={<Navigate to="/blog" replace />} /> */}

          {/* Error and fallback */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      {!pathname.startsWith("/admin") && <Footer />}
    </div>
  );
}
