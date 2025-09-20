import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-8"
        >
          <AlertTriangle className="w-12 h-12 text-red-600" />
        </motion.div>

        {/* 404 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-8xl sm:text-9xl font-bold text-gray-900 mb-4"
        >
          404
        </motion.h1>

        {/* Error Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
        >
          Página no encontrada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
        >
          Lo sentimos, la página que buscás no existe o ha sido movida. 
          Podés volver al inicio o explorar nuestro contenido.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Home Button */}
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-bold
                         px-8 py-4 text-lg
                         transition-all duration-300
                         hover:shadow-lg hover:shadow-primary-600/25
                         active:scale-[0.98] transform hover:-translate-y-1
                         focus:outline-none focus:ring-4 focus:ring-primary-600/30
                         flex items-center justify-center gap-3
                         w-full sm:w-auto min-w-[200px]"
              style={{ borderRadius: '0 15px 0 15px' }}
            >
              <Home className="w-5 h-5" />
              <span>Volver al Inicio</span>
            </motion.button>
          </Link>

          {/* Quiz Button */}
          <Link to="/test">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-700 font-semibold
                         px-8 py-4 text-lg
                         border-2 border-gray-200 hover:border-gray-300
                         transition-all duration-300 hover:shadow-md
                         active:scale-[0.98] transform hover:-translate-y-1
                         focus:outline-none focus:ring-4 focus:ring-gray-200/50
                         flex items-center justify-center gap-3
                         w-full sm:w-auto min-w-[200px]"
              style={{ borderRadius: '0 12px 0 12px' }}
            >
              <Search className="w-5 h-5" />
              <span>Hacer el Test</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 mb-4">También podés visitar:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              to="/guia-del-buen-conductor-cordoba" 
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
            >
              Guía del Buen Conductor
            </Link>
            <Link 
              to="/terminos-y-condiciones" 
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
            >
              Términos y Condiciones
            </Link>
            <Link 
              to="/politica-de-privacidad" 
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
            >
              Política de Privacidad
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
