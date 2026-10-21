import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardList, Car, Bike, Truck, Bus } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import Seo from '../../seo/Seo';
import { breadcrumbSchema, itemListSchema } from '../../seo/schema';

/** Slugs reservados para URLs futuras de cada test. */
export const EXAMENES_CATEGORIAS = [
  {
    slug: 'categoria-b',
    title: 'Teórico Categoría B',
    subtitle: 'Automóviles, camionetas y utilitarios',
    icon: Car,
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-primary-600',
    iconBg: 'bg-white',
  },
  {
    slug: 'categoria-a',
    title: 'Test teórico Categoría A',
    subtitle: 'Motovehículos de dos ruedas',
    icon: Bike,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    iconBg: 'bg-white',
  },
  {
    slug: 'categoria-e',
    title: 'Test teórico Categoría E',
    subtitle: 'Carga, camiones y maquinaria no agrícola',
    icon: Truck,
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-700',
    iconBg: 'bg-white',
  },
  {
    slug: 'categoria-d',
    title: 'Test teórico Categoría D',
    subtitle: 'Transporte de pasajeros',
    icon: Bus,
    color: 'bg-violet-50 border-violet-200',
    iconColor: 'text-violet-600',
    iconBg: 'bg-white',
  },
] as const;

const ExamenesIndex: React.FC = () => {
  return (
    <>
      <Seo
        path="/examenes"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Exámenes', path: '/examenes' },
          ]),
          itemListSchema(
            'Exámenes teóricos por categoría',
            EXAMENES_CATEGORIAS.map((examen) => ({
              name: examen.title,
              path: `/examenes`,
              description: `${examen.subtitle}. Próximamente.`,
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
              <span className="text-gray-900">Exámenes</span>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <ClipboardList className="w-8 h-8 text-primary-600" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4 leading-tight">
              Exámenes teóricos
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Próximamente vas a poder practicar el examen teórico según la categoría de
              licencia. Mientras tanto, podés usar el simulador general disponible hoy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid gap-4 sm:gap-6 mb-12"
          >
            {EXAMENES_CATEGORIAS.map((examen, index) => {
              const IconComponent = examen.icon;

              return (
                <motion.div
                  key={examen.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className={`${examen.color} border-2 rounded-2xl p-4 sm:p-6 relative overflow-hidden`}
                  aria-label={`${examen.title}. ${examen.subtitle}. Próximamente.`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${examen.iconBg} rounded-xl flex items-center justify-center shadow-sm`}
                      >
                        <IconComponent
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${examen.iconColor}`}
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2 mb-2">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight uppercase tracking-tight">
                          {examen.title}
                        </h2>
                        <span className="inline-flex self-start px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-900/90 text-white whitespace-nowrap">
                          Próximamente
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {examen.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                ¿Querés practicar ahora?
              </h2>
              <p className="text-primary-100 mb-6 text-base sm:text-lg">
                El simulador general del examen teórico de Córdoba ya está disponible.
              </p>
              <Link
                to="/test"
                className="inline-block bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Ir al test online
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ExamenesIndex;
