import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>¡Empezá ahora mismo!</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="heading-lg text-white"
          >
            ¿Listo para aprobar tu examen teórico?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-body text-white/90 max-w-2xl mx-auto"
          >
            No esperes más. Empezá a practicar con 100% preguntas reales del examen 
            de conducir de Córdoba y aumentá tus chances de aprobar en el primer intento.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <Link to="/test" className="w-full max-w-md sm:max-w-lg mx-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary-600 font-bold 
                           px-8 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-7
                           text-xl sm:text-2xl lg:text-3xl 
                           rounded-3xl hover:shadow-2xl transition-all duration-300 
                           inline-flex items-center justify-center gap-4 sm:gap-5
                           min-h-[64px] sm:min-h-[72px] lg:min-h-[80px]
                           w-full
                           shadow-lg hover:shadow-primary-600/20"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                <span className="font-extrabold">Comenzar el Test</span>
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </motion.button>
            </Link>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/90 text-sm sm:text-base">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-300 text-lg">✓</span>
                <span className="font-semibold">100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-300 text-lg">✓</span>
                <span className="font-semibold">Sin registro requerido</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/20 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">+50k</div>
              <div className="text-sm sm:text-base text-white/80">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-sm sm:text-base text-white/80">Aprobación</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">4.9★</div>
              <div className="text-sm sm:text-base text-white/80">Calificación</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
