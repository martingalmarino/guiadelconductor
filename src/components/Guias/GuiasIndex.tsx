import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const GuiasIndex: React.FC = () => {
  useEffect(() => {
    document.title = 'Guías de Tránsito y Conducción | Guía del Conductor';
    return () => {
      document.title = 'Guía del Conductor - Simulador Examen Teórico Córdoba';
    };
  }, []);

  const guias = [
    {
      slug: 'senales-transito-informativas',
      title: 'Señales de Tránsito Informativas',
      description: 'Conocé las 25 señales informativas más importantes de Argentina. Aprende sobre servicios, lugares de interés y referencias turísticas.',
      icon: Info,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      iconColor: 'text-blue-600',
      status: 'Disponible',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      slug: 'senales-preventivas',
      title: 'Señales Preventivas',
      description: 'Guía completa sobre señales de advertencia y prevención. Identifica peligros y situaciones especiales en la vía.',
      icon: AlertTriangle,
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      iconColor: 'text-yellow-600',
      status: 'Próximamente',
      statusColor: 'bg-gray-100 text-gray-600'
    },
    {
      slug: 'senales-reglamentarias',
      title: 'Señales Reglamentarias',
      description: 'Todas las señales que indican prohibiciones, obligaciones y restricciones en el tránsito vehicular.',
      icon: CheckCircle,
      color: 'bg-red-50 border-red-200 hover:bg-red-100',
      iconColor: 'text-red-600',
      status: 'Próximamente',
      statusColor: 'bg-gray-100 text-gray-600'
    }
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
            
            <nav className="text-sm text-gray-600">
              <Link to="/" className="hover:text-primary-600">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Guías</span>
            </nav>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-primary-600" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
              Guías de Tránsito
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Recursos completos para aprender sobre señalización, normas de tránsito y 
              prepararte para el examen teórico de conducir en Córdoba
            </p>
          </motion.div>

          {/* Guías Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4 sm:gap-6 mb-12"
          >
            {guias.map((guia, index) => {
              const IconComponent = guia.icon;
              const isAvailable = guia.status === 'Disponible';
              
              return (
                <motion.div
                  key={guia.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {isAvailable ? (
                    <Link to={`/guias/${guia.slug}`}>
                      <div className={`${guia.color} border-2 rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer group`}>
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                              <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${guia.iconColor}`} />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors leading-tight">
                                {guia.title}
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${guia.statusColor} self-start sm:self-auto`}>
                                {guia.status}
                              </span>
                            </div>
                            
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                              {guia.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className={`${guia.color} border-2 rounded-2xl p-4 sm:p-6 opacity-60 cursor-not-allowed`}>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center">
                            <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${guia.iconColor}`} />
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                              {guia.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${guia.statusColor} self-start sm:self-auto`}>
                              {guia.status}
                            </span>
                          </div>
                          
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {guia.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para el examen teórico?
              </h3>
              <p className="text-primary-100 mb-6 text-lg">
                Practica con nuestro simulador online con preguntas reales del examen de Córdoba
              </p>
              <Link
                to="/test"
                className="inline-block bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Hacer Test Ahora
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default GuiasIndex;
