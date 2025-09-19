import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Book, Target, TrendingUp } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900"
              >
                Test examen de conducir{' '}
                <span className="text-primary-600">Córdoba</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Nuestro simulador está diseñado específicamente para el examen teórico 
                de conducir de la Provincia de Córdoba. Utilizamos las preguntas oficiales 
                y el mismo formato que encontrarás en el examen real.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Con 100% preguntas reales actualizadas, feedback inmediato y 
                explicaciones detalladas, te preparamos para aprobar tu examen 
                en el primer intento.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: MapPin, text: 'Específico para Córdoba Capital y Provincia' },
                { icon: Book, text: 'Preguntas oficiales actualizadas 2025' },
                { icon: Target, text: 'Simulacros con el formato real del examen' },
                { icon: TrendingUp, text: 'Seguimiento de tu progreso y mejoras' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Carnet de Conducir Illustration */}
            <div className="relative">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full max-w-md mx-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Carnet Background */}
                <rect x="50" y="50" width="300" height="200" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="2" className="drop-shadow-2xl" />
                
                {/* Header Band */}
                <rect x="50" y="50" width="300" height="40" rx="16" fill="#FF6600" />
                <rect x="50" y="74" width="300" height="16" fill="#FF6600" />
                
                {/* Header Text */}
                <text x="200" y="70" textAnchor="middle" className="fill-white text-sm font-bold">LICENCIA DE CONDUCIR</text>
                <text x="200" y="85" textAnchor="middle" className="fill-white text-xs">PROVINCIA DE CÓRDOBA</text>
                
                {/* Photo Area */}
                <rect x="70" y="110" width="80" height="100" rx="8" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
                
                {/* Avatar Icon */}
                <g transform="translate(110, 140)">
                  <circle cx="0" cy="0" r="15" fill="#9CA3AF" />
                  <circle cx="0" cy="-5" r="8" fill="#6B7280" />
                  <path d="M-12 8 C-12 0 -8 -8 0 -8 C8 -8 12 0 12 8" fill="#6B7280" />
                </g>
                
                {/* Info Fields */}
                <g>
                  {/* Name Field */}
                  <rect x="170" y="110" width="160" height="8" rx="4" fill="#FF6600" />
                  <rect x="170" y="125" width="120" height="6" rx="3" fill="#9CA3AF" />
                  
                  {/* DNI Field */}
                  <rect x="170" y="145" width="80" height="6" rx="3" fill="#6B7280" />
                  <rect x="170" y="155" width="100" height="4" rx="2" fill="#D1D5DB" />
                  
                  {/* Class Field */}
                  <rect x="170" y="175" width="60" height="6" rx="3" fill="#10B981" />
                  <rect x="170" y="185" width="40" height="4" rx="2" fill="#D1D5DB" />
                </g>
                
                {/* Validity Section */}
                <rect x="70" y="225" width="260" height="20" rx="8" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
                <text x="200" y="237" textAnchor="middle" className="fill-green-700 text-xs font-semibold">VÁLIDA HASTA: DICIEMBRE 2030</text>
                
                {/* Security Elements */}
                <g>
                  {/* Hologram */}
                  <circle cx="320" cy="130" r="12" fill="none" stroke="#FF6600" strokeWidth="2" opacity="0.6" />
                  <circle cx="320" cy="130" r="8" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.8" />
                  <circle cx="320" cy="130" r="4" fill="#3B82F6" opacity="0.5" />
                  
                  {/* QR Code */}
                  <rect x="280" y="180" width="40" height="40" rx="4" fill="#1F2937" />
                  <g fill="white">
                    <rect x="284" y="184" width="4" height="4" />
                    <rect x="292" y="184" width="4" height="4" />
                    <rect x="300" y="184" width="4" height="4" />
                    <rect x="308" y="184" width="4" height="4" />
                    <rect x="284" y="192" width="4" height="4" />
                    <rect x="300" y="192" width="4" height="4" />
                    <rect x="284" y="200" width="4" height="4" />
                    <rect x="292" y="200" width="4" height="4" />
                    <rect x="308" y="200" width="4" height="4" />
                    <rect x="284" y="208" width="4" height="4" />
                    <rect x="300" y="208" width="4" height="4" />
                    <rect x="308" y="208" width="4" height="4" />
                  </g>
                </g>
                
                {/* Decorative Corner Elements */}
                <g stroke="#FF6600" strokeWidth="2" fill="none" opacity="0.3">
                  <path d="M60 60 L70 60 L70 70" />
                  <path d="M330 60 L340 60 L340 70" />
                  <path d="M60 240 L70 240 L70 230" />
                  <path d="M330 240 L340 240 L340 230" />
                </g>
                
                {/* Success Badge */}
                <g transform="translate(320, 200)">
                  <circle cx="10" cy="10" r="10" fill="#10B981" />
                  <path d="M5 10l3 3 6-6" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>

              {/* Static Badge - Hidden on Mobile */}
              <div className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-xl hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-xs text-gray-600">Actualizado</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
