import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { LanguageProvider, useLang } from './i18n';

// Start each page at the top (hash links like /portfolio#f1-predictor scroll to their target).
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // wait for the new page (fonts, images) to lay out before jumping to the anchor
    const id = decodeURIComponent(hash.slice(1));
    const timers = [0, 150, 500].map((ms) => window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), ms));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [pathname, hash]);
  return null;
};

const Shell: React.FC = () => {
  const { t } = useLang();
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow">
        {t.nav.skip}
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* the old blog had placeholder posts: send old links to the home page */}
          <Route path="/blog/*" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <Router>
      <Shell />
    </Router>
  </LanguageProvider>
);

export default App;
