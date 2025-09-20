import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Beneficios from './components/Beneficios';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Quiz from './components/Quiz/Quiz';
import GuiaBuenConductor from './components/GuiaBuenConductor';
import TerminosCondiciones from './components/TerminosCondiciones';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import PoliticaCookies from './components/PoliticaCookies';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

// Home Page Component
const HomePage: React.FC = () => (
  <>
    {/* Header */}
    <Header />

    {/* Main Content */}
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Info Section */}
      <InfoSection />

      {/* Benefits Section */}
      <Beneficios />

      {/* Call to Action Section */}
      <CTA />

      {/* FAQ Section */}
      <FAQ />
    </motion.main>

    {/* Footer */}
    <Footer />

    {/* Loading Animation Overlay (optional) */}
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center pointer-events-none"
    >
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full" />
    </motion.div>
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<Quiz />} />
          <Route path="/guia-del-buen-conductor-cordoba" element={<GuiaBuenConductor />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
          {/* Catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
