import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, CheckCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Guías', href: '#guias' },
    { name: 'Exámenes', href: '#examenes' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' : 'bg-white/80 backdrop-blur-sm border-b border-gray-200/30'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-22">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 p-3 sm:p-4 rounded-3xl shadow-lg">
              {/* Car with oval path and arrow */}
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                className="w-8 h-8 sm:w-9 sm:h-9"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Oval path around car */}
                <ellipse 
                  cx="16" 
                  cy="16" 
                  rx="13" 
                  ry="8" 
                  stroke="white" 
                  strokeWidth="1.5" 
                  fill="none"
                  opacity="0.7"
                />
                
                {/* Arrow on the path */}
                <g transform="translate(28, 16)">
                  <path d="M-2 -2 L2 0 L-2 2" stroke="white" strokeWidth="1.5" fill="white" opacity="0.8"/>
                </g>
                
                {/* Detailed car */}
                <g transform="translate(16, 16)">
                  {/* Main car body */}
                  <rect x="-6" y="-2" width="12" height="4" rx="1.5" fill="white"/>
                  
                  {/* Car roof/cabin */}
                  <path d="M-4 -2 L-2 -4 L2 -4 L4 -2" fill="white"/>
                  
                  {/* Front and rear details */}
                  <rect x="5" y="-1" width="1" height="2" rx="0.5" fill="white"/>
                  <rect x="-6" y="-1" width="1" height="2" rx="0.5" fill="white"/>
                  
                  {/* Wheels */}
                  <circle cx="-3.5" cy="3" r="1.5" fill="white"/>
                  <circle cx="3.5" cy="3" r="1.5" fill="white"/>
                  
                  {/* Wheel centers */}
                  <circle cx="-3.5" cy="3" r="0.6" fill="#ff8811"/>
                  <circle cx="3.5" cy="3" r="0.6" fill="#ff8811"/>
                  
                  {/* Windows */}
                  <rect x="-1.5" y="-3.5" width="1.2" height="1.5" rx="0.2" fill="#ff8811" opacity="0.3"/>
                  <rect x="0.3" y="-3.5" width="1.2" height="1.5" rx="0.2" fill="#ff8811" opacity="0.3"/>
                </g>
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-900 font-heading">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Guía del Conductor
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-primary-600 font-medium hidden sm:block">
                Córdoba, Argentina
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              item.name === 'Inicio' ? (
                <Link key={item.name} to={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Link to="/test">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium
                           px-3 py-2 sm:px-4 sm:py-2.5
                           text-sm sm:text-base
                           transition-all duration-300
                           hover:shadow-md hover:shadow-primary-600/25
                           min-h-[36px] sm:min-h-[40px]
                           hidden xs:flex items-center gap-1.5 sm:gap-2"
                style={{ borderRadius: '0 10px 0 10px' }}
              >
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Test Online</span>
                <span className="sm:hidden">Test</span>
              </motion.button>
            </Link>

            {/* Mobile CTA - Icon Only */}
            <Link to="/test" className="xs:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white
                           p-2 transition-all duration-300
                           hover:shadow-md hover:shadow-primary-600/25
                           min-w-[36px] min-h-[36px]
                           flex items-center justify-center"
                style={{ borderRadius: '0 8px 0 8px' }}
              >
                <CheckCircle className="w-4 h-4" />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden bg-gray-100 hover:bg-gray-200 text-gray-700
                         p-2 rounded-lg transition-all duration-300
                         min-w-[36px] min-h-[36px]
                         flex items-center justify-center"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 mt-2 rounded-b-2xl shadow-lg"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  item.name === 'Inicio' ? (
                    <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)}>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl mx-2 transition-all duration-200"
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ) : (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      whileHover={{ x: 10 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl mx-2 transition-all duration-200"
                    >
                      {item.name}
                    </motion.a>
                  )
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
