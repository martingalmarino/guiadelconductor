import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Zap, Shield } from 'lucide-react';

const Beneficios: React.FC = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Practicá con preguntas reales',
      description: '100% preguntas oficiales del examen teórico de Córdoba, actualizadas constantemente según la normativa vigente.',
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Zap,
      title: 'Obtené feedback inmediato',
      description: 'Conocé al instante si tu respuesta es correcta, con explicaciones detalladas para que entiendas cada concepto.',
      color: 'bg-primary-50 text-primary-600',
      borderColor: 'border-primary-200'
    },
    {
      icon: Shield,
      title: 'Ganá confianza antes del examen oficial',
      description: 'Simulacros que replican exactamente el formato y tiempo del examen real, para que llegues preparado y seguro.',
      color: 'bg-green-50 text-green-600',
      borderColor: 'border-green-200'
    }
  ];


  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-lg text-gray-900 mb-3 sm:mb-4">
            ¿Por qué elegir nuestro simulador?
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Te damos todas las herramientas que necesitás para aprobar tu examen teórico 
            de conducir en Córdoba con confianza.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`card p-6 sm:p-8 border-2 ${benefit.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-4 sm:mb-6`}>
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-small text-gray-600">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-4 sm:mt-6 w-0 hover:w-full transition-all duration-500" />
              </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="heading-md text-gray-900 mb-3 sm:mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-small text-gray-600 mb-6">
              Unite a los miles de cordobeses que ya aprobaron su examen con nosotros.
            </p>
            <div className="flex justify-center">
              <Link to="/test">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-bold
                             px-8 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-7
                             text-lg sm:text-xl lg:text-2xl
                             rounded-3xl transition-all duration-300
                             hover:shadow-lg hover:shadow-primary-600/25
                             active:scale-[0.98] transform hover:-translate-y-1
                             focus:outline-none focus:ring-4 focus:ring-primary-600/30
                             min-h-[60px] sm:min-h-[68px] lg:min-h-[76px]
                             w-full sm:w-auto max-w-xs sm:max-w-none
                             flex items-center justify-center gap-3"
                >
                  <span className="font-extrabold">Comenzar Test Gratuito</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
