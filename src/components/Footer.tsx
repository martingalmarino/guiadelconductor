import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Guía del Buen Conductor', href: '/guia-del-buen-conductor-cordoba' },
    { name: 'Simulacros', href: '/test' },
    { name: 'Test Online', href: '/test' },
  ];

  const legalLinks = [
    { name: 'Política de Privacidad', href: '/politica-de-privacidad' },
    { name: 'Términos y Condiciones', href: '/terminos-y-condiciones' },
    { name: 'Cookies', href: '/politica-de-cookies' },
    { name: 'Contacto', href: 'mailto:contacto@guiadelconductor.ar' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@guiadelconductor.com.ar', href: 'mailto:info@guiadelconductor.com.ar' },
    { icon: Phone, text: '+54 351 123-4567', href: 'tel:+543511234567' },
    { icon: MapPin, text: 'Córdoba Capital, Argentina', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 sm:col-span-2 lg:col-span-1"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="bg-primary-600 p-2.5 sm:p-3 rounded-xl">
                  <Car className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Guía del Conductor</h3>
                  <p className="text-gray-400 text-sm">Córdoba, Argentina</p>
                </div>
              </div>

              <p className="text-small text-gray-300">
                El simulador más completo para aprobar tu examen teórico de conducir 
                en Córdoba. Más de 50,000 estudiantes confían en nosotros.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} touch-target`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-primary-400 transition-all duration-200 block"
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('mailto:') ? (
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-primary-400 transition-all duration-200 block"
                      >
                        {link.name}
                      </motion.a>
                    ) : (
                      <Link to={link.href}>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-gray-300 hover:text-primary-400 transition-all duration-200 block"
                        >
                          {link.name}
                        </motion.div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index}>
                    <motion.a
                      href={contact.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-all duration-200"
                    >
                      <contact.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold mb-3">Recibí actualizaciones</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-xl transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-800"
      >
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © 2025 Guía del Conductor. Todos los derechos reservados.
              </p>
              <p className="mt-1">
                Desarrollado por{' '}
                <a 
                  href="mailto:m.galmarino@gmail.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  Martín Galmarino
                </a>{' '}
                🤖
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Sistema actualizado</span>
              </div>
              <div>v2025.1</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
