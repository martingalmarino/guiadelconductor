import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Award, Clock, Users, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const chips = [
    { icon: Award, text: 'Gratis' },
    { icon: Clock, text: 'Preguntas Reales' },
    { icon: Users, text: 'Resultados Inmediatos' }
  ];

  return (
    <section id="inicio" className="pt-28 sm:pt-32 lg:pt-36 section-padding bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Chips */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {chips.map((chip, index) => (
                <motion.div
                  key={chip.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-primary-50 text-primary-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                >
                  <chip.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{chip.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="heading-xl text-gray-900"
              >
                Aprobá tu examen teórico en{' '}
                <span className="text-primary-600">Córdoba</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-body text-gray-600"
              >
                Simulador visual del examen teórico. Preguntas reales de Córdoba, 
                feedback inmediato y recomendaciones personalizadas.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link to="/test" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-bold
                             px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6
                             text-lg sm:text-xl lg:text-2xl
                             rounded-3xl transition-all duration-300
                             hover:shadow-lg hover:shadow-primary-600/25
                             active:scale-[0.98] transform hover:-translate-y-1
                             focus:outline-none focus:ring-4 focus:ring-primary-600/30
                             min-h-[56px] sm:min-h-[64px] lg:min-h-[72px]
                             w-full
                             flex items-center justify-center gap-3 sm:gap-4 group"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:animate-pulse" />
                  <span className="font-extrabold">Empezar el Test</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">85%</div>
                <div className="text-xs sm:text-sm text-gray-600">Tasa de aprobación</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Preguntas reales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">50k+</div>
                <div className="text-xs sm:text-sm text-gray-600">Estudiantes</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Illustration Container */}
            <div className="relative">
              {/* Analytics Dashboard */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative z-10 p-8"
              >
                <svg
                  viewBox="0 0 500 400"
                  className="w-full h-full max-w-lg mx-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Main Dashboard Card */}
                  <rect x="50" y="50" width="400" height="300" rx="20" fill="white" className="drop-shadow-2xl" stroke="#E5E7EB" strokeWidth="1" />
                  
                  {/* Header */}
                  <rect x="70" y="70" width="120" height="6" rx="3" fill="#FF6600" />
                  <rect x="70" y="85" width="180" height="4" rx="2" fill="#9CA3AF" />
                  
                  {/* Chart Area */}
                  <rect x="70" y="110" width="360" height="180" rx="8" fill="#FAFAFA" stroke="#F3F4F6" strokeWidth="1" />
                  
                  {/* Bar Chart */}
                  <g>
                    {/* Bars */}
                    <rect x="100" y="200" width="30" height="60" rx="4" fill="#FF6600" opacity="0.8" />
                    <rect x="140" y="180" width="30" height="80" rx="4" fill="#FF6600" />
                    <rect x="180" y="160" width="30" height="100" rx="4" fill="#10B981" />
                    <rect x="220" y="170" width="30" height="90" rx="4" fill="#FF6600" opacity="0.6" />
                    <rect x="260" y="140" width="30" height="120" rx="4" fill="#10B981" />
                    <rect x="300" y="190" width="30" height="70" rx="4" fill="#FF6600" opacity="0.7" />
                    <rect x="340" y="150" width="30" height="110" rx="4" fill="#10B981" />
                    
                    {/* Chart Labels */}
                    <text x="115" y="280" textAnchor="middle" className="fill-gray-500 text-xs">Ene</text>
                    <text x="155" y="280" textAnchor="middle" className="fill-gray-500 text-xs">Feb</text>
                    <text x="195" y="280" textAnchor="middle" className="fill-gray-500 text-xs">Mar</text>
                    <text x="235" y="280" textAnchor="middle" className="fill-gray-500 text-xs">Abr</text>
                    <text x="275" y="280" textAnchor="middle" className="fill-gray-500 text-xs">May</text>
                    <text x="315" y="280" textAnchor="middle" className="fill-gray-500 text-xs">Jun</text>
                    <text x="355" y="280" textAnchor="middle" className="fill-gray-500 text-xs">Jul</text>
                  </g>
                  
                  {/* Stats Cards */}
                  <g>
                    {/* Card 1 */}
                    <rect x="70" y="310" width="100" height="50" rx="8" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />
                    <text x="120" y="330" textAnchor="middle" className="fill-primary-600 text-lg font-bold">85%</text>
                    <text x="120" y="345" textAnchor="middle" className="fill-gray-600 text-xs">Aprobación</text>
                    
                    {/* Card 2 */}
                    <rect x="180" y="310" width="100" height="50" rx="8" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1" />
                    <text x="230" y="330" textAnchor="middle" className="fill-green-600 text-lg font-bold">100%</text>
                    <text x="230" y="345" textAnchor="middle" className="fill-gray-600 text-xs">Preguntas</text>
                    
                    {/* Card 3 */}
                    <rect x="290" y="310" width="100" height="50" rx="8" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1" />
                    <text x="340" y="330" textAnchor="middle" className="fill-blue-600 text-lg font-bold">50k+</text>
                    <text x="340" y="345" textAnchor="middle" className="fill-gray-600 text-xs">Usuarios</text>
                  </g>
                  
                  {/* Trend Line */}
                  <path 
                    d="M100 220 L140 200 L180 170 L220 180 L260 150 L300 200 L340 160" 
                    stroke="#FF6600" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  
                  {/* Data Points */}
                  <g>
                    <circle cx="140" cy="200" r="4" fill="#FF6600" />
                    <circle cx="180" cy="170" r="4" fill="#10B981" />
                    <circle cx="260" cy="150" r="4" fill="#10B981" />
                    <circle cx="340" cy="160" r="4" fill="#10B981" />
                  </g>
                  
                  {/* Decorative Elements */}
                  <circle cx="420" cy="80" r="3" fill="#FF6600" opacity="0.6" />
                  <circle cx="440" cy="100" r="2" fill="#10B981" opacity="0.7" />
                  <circle cx="460" cy="120" r="4" fill="#3B82F6" opacity="0.5" />
                  
                  {/* Success Icon */}
                  <g transform="translate(400, 320)">
                    <circle cx="15" cy="15" r="15" fill="#10B981" />
                    <path d="M8 15l4 4 8-8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </motion.div>
              
              {/* Modern Badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-primary-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-xs text-gray-600">Actualizado</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl border border-green-100">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">✓</div>
                  <div className="text-xs text-gray-600">2025</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
