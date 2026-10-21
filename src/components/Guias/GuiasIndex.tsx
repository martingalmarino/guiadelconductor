import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Info, AlertTriangle, CheckCircle, MapPin } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import Seo from '../../seo/Seo';
import { breadcrumbSchema, itemListSchema } from '../../seo/schema';

const GuiasIndex: React.FC = () => {
  const guias = [
    {
      slug: 'senales-transito-informativas',
      title: 'Señales de Tránsito Informativas',
      description:
        'Conocé las señales informativas de Argentina: servicios, lugares de interés y referencias turísticas.',
      icon: Info,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      slug: 'senales-preventivas',
      title: 'Señales Preventivas',
      description:
        'Guía de señales de advertencia: curvas, pendientes, cruces y peligros en la vía.',
      icon: AlertTriangle,
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      slug: 'senales-reglamentarias',
      title: 'Señales Reglamentarias',
      description:
        'Señales de prohibiciones, obligaciones y restricciones en el tránsito vehicular.',
      icon: CheckCircle,
      color: 'bg-red-50 border-red-200 hover:bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      slug: 'prohibido-estacionar-guia-por-colores-de-cordon',
      title: 'Prohibido estacionar en Córdoba',
      description:
        'Guía por colores de cordón: dónde podés y no podés estacionar en Córdoba para evitar multas.',
      icon: MapPin,
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <>
      <Seo
        path="/guias"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Guías', path: '/guias' },
          ]),
          itemListSchema(
            'Guías de tránsito y conducción',
            guias.map((g) => ({
              name: g.title,
              path: `/guias/${g.slug}`,
              description: g.description,
            }))
          ),
        ]}
      />
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary-600">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Guías</span>
            </nav>
          </motion.div>

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
              Recursos para aprender señalización, normas de tránsito y prepararte para el
              examen teórico de conducir en Córdoba y el resto de Argentina. Incluye señales
              y la guía de estacionamiento por colores de cordón.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4 sm:gap-6 mb-12"
          >
            {guias.map((guia, index) => {
              const IconComponent = guia.icon;

              return (
                <motion.div
                  key={guia.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link to={`/guias/${guia.slug}`}>
                    <div
                      className={`${guia.color} border-2 rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer group`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${guia.iconColor}`}
                            />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors leading-tight mb-2">
                            {guia.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {guia.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">¿Listo para el examen teórico?</h2>
              <p className="text-primary-100 mb-6 text-lg">
                Practicá con el simulador online del examen teórico de Córdoba
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
