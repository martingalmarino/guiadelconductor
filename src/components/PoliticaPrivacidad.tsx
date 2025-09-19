import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, UserCheck, Lock, ExternalLink } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const PoliticaPrivacidad: React.FC = () => {
  useEffect(() => {
    document.title = 'Política de Privacidad | Guía del Conductor';
    return () => {
      document.title = 'Guía del Conductor - Simulador Examen Teórico Córdoba';
    };
  }, []);

  const sections = [
    {
      icon: Database,
      title: 'Datos que recopilamos',
      content: [
        'El Sitio puede recopilar datos personales cuando el usuario los proporcione voluntariamente (ej. formularios de contacto o suscripción).',
        'También se recopila información de forma automática mediante cookies y tecnologías similares.'
      ],
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: UserCheck,
      title: 'Finalidad del tratamiento',
      content: [
        'Los datos podrán usarse para responder consultas, enviar información solicitada y mejorar la experiencia de navegación.',
        'No se cederán a terceros salvo obligación legal o consentimiento expreso del usuario.'
      ],
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Shield,
      title: 'Derechos del usuario',
      content: 'En cualquier momento, el usuario puede ejercer sus derechos de acceso, rectificación, cancelación u oposición escribiendo a: contacto@guiadelconductor.ar.',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Lock,
      title: 'Seguridad',
      content: 'Se aplican medidas técnicas y organizativas razonables para proteger los datos, aunque el usuario debe comprender que en internet no existe seguridad absoluta.',
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: ExternalLink,
      title: 'Servicios de terceros',
      content: 'El Sitio puede integrar servicios como Google Analytics o Google AdSense que recopilan información con fines estadísticos y publicitarios.',
      color: 'text-red-600 bg-red-50'
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
                <Shield className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="heading-xl text-gray-900 mb-6">
                Política de Privacidad
              </h1>
              
              <p className="text-body text-gray-600 mb-8">
                Cómo protegemos y tratamos tu información personal
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center flex-shrink-0`}>
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 font-heading">{section.title}</h2>
                  </div>
                  
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  )}
                </motion.div>
              ))}

              {/* Rights Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Tus Derechos de Privacidad
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Acceso', desc: 'Conocer qué datos tenemos sobre ti' },
                    { title: 'Rectificación', desc: 'Corregir datos incorrectos' },
                    { title: 'Cancelación', desc: 'Eliminar tus datos personales' },
                    { title: 'Oposición', desc: 'Oponerte al tratamiento de datos' }
                  ].map((right, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                      <h3 className="font-semibold text-gray-900 mb-2">{right.title}</h3>
                      <p className="text-gray-600 text-sm">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <a 
                    href="mailto:contacto@guiadelconductor.ar"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
                    style={{ borderRadius: '0 15px 0 15px' }}
                  >
                    Ejercer mis derechos
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

export default PoliticaPrivacidad;
