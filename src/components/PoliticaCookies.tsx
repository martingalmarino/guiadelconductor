import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, BarChart3, Target } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const PoliticaCookies: React.FC = () => {
  useEffect(() => {
    document.title = 'Política de Cookies | Guía del Conductor';
    return () => {
      document.title = 'Guía del Conductor - Simulador Examen Teórico Córdoba';
    };
  }, []);

  const cookieTypes = [
    {
      icon: Settings,
      title: 'Cookies técnicas',
      description: 'Necesarias para el correcto funcionamiento del Sitio.',
      essential: true,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: BarChart3,
      title: 'Cookies de análisis',
      description: 'Permiten obtener estadísticas de uso (ej. Google Analytics).',
      essential: false,
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Target,
      title: 'Cookies publicitarias',
      description: 'Utilizadas por plataformas como Google AdSense para mostrar anuncios relevantes según el perfil del usuario.',
      essential: false,
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-100 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Back Button */}
              <div className="mb-8">
                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al inicio
                </Link>
              </div>

              <div className="bg-primary-600 p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
                <Cookie className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="heading-xl text-gray-900 mb-6">
                Política de Cookies
              </h1>
              
              <p className="text-body text-gray-600 mb-8">
                Información sobre las cookies que utilizamos en nuestro sitio web
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Definition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Definición</h2>
                <p className="text-gray-700 leading-relaxed">
                  Las cookies son pequeños archivos que se instalan en el navegador del usuario para reconocerlo y mejorar la experiencia de navegación.
                </p>
              </motion.div>

              {/* Cookie Types */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6 text-center">
                  Tipos de cookies utilizadas
                </h2>
                <div className="grid gap-6">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${cookie.color} flex items-center justify-center flex-shrink-0`}>
                          <cookie.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{cookie.title}</h3>
                            {cookie.essential && (
                              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                                Esencial
                              </span>
                            )}
                          </div>
                          <p className="text-gray-700 leading-relaxed">{cookie.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Cookie Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 font-heading">Gestión de cookies</h2>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      El usuario puede configurar su navegador para aceptar o rechazar cookies.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      La desactivación de cookies puede afectar el funcionamiento de algunas secciones del Sitio.
                    </p>
                  </li>
                </ul>
              </motion.div>

              {/* Browser Settings */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Configurar cookies en tu navegador
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { browser: 'Chrome', steps: 'Configuración > Privacidad y seguridad > Cookies' },
                    { browser: 'Firefox', steps: 'Preferencias > Privacidad y seguridad' },
                    { browser: 'Safari', steps: 'Preferencias > Privacidad > Cookies' },
                    { browser: 'Edge', steps: 'Configuración > Cookies y permisos del sitio' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.browser}</h3>
                      <p className="text-gray-600 text-sm">{item.steps}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-gray-600 mb-4">
                    ¿Necesitas ayuda con la configuración?
                  </p>
                  <a 
                    href="mailto:contacto@guiadelconductor.ar"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
                    style={{ borderRadius: '0 15px 0 15px' }}
                  >
                    Contactar soporte
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaCookies;
