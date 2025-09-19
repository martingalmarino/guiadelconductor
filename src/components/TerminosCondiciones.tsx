import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, AlertCircle, Edit, Scale } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const TerminosCondiciones: React.FC = () => {
  useEffect(() => {
    document.title = 'Términos y Condiciones | Guía del Conductor';
    return () => {
      document.title = 'Guía del Conductor - Simulador Examen Teórico Córdoba';
    };
  }, []);

  const sections = [
    {
      icon: FileText,
      title: 'Introducción',
      content: 'El presente documento regula el acceso y uso del sitio web guíadelconductor.ar (en adelante, "el Sitio"). Al utilizar este Sitio, el usuario acepta los términos y condiciones aquí expuestos.',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Shield,
      title: 'Uso del Sitio',
      content: [
        'El acceso al Sitio es gratuito, salvo los costes de conexión a internet.',
        'El usuario se compromete a utilizar el Sitio de forma lícita, sin contravenir la legislación vigente ni los derechos de terceros.',
        'Queda prohibido el uso del Sitio con fines fraudulentos, de difusión de malware, spam o cualquier otra actividad que pueda dañar su funcionamiento.'
      ],
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Scale,
      title: 'Propiedad Intelectual',
      content: [
        'Los contenidos publicados en el Sitio (textos, imágenes, logotipos, base de datos, etc.) son propiedad de Guía del Conductor o de sus legítimos titulares.',
        'Queda prohibida su reproducción, distribución o modificación sin autorización expresa.'
      ],
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: AlertCircle,
      title: 'Limitación de responsabilidad',
      content: [
        'La información ofrecida tiene carácter informativo y de consulta. Aunque se procura mantenerla actualizada y precisa, el Sitio no garantiza la exactitud absoluta de los datos publicados.',
        'El Sitio no se hace responsable de daños que pudieran derivarse del uso de la información o de enlaces externos.'
      ],
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: Edit,
      title: 'Modificaciones',
      content: 'El Sitio se reserva el derecho a modificar en cualquier momento los presentes Términos y Condiciones.',
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
                <FileText className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="heading-xl text-gray-900 mb-6">
                Términos y Condiciones
              </h1>
              
              <p className="text-body text-gray-600 mb-8">
                Condiciones de uso del sitio web Guía del Conductor
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

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 text-center"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Tienes dudas sobre nuestros términos?
                </h2>
                <p className="text-gray-600 mb-6">
                  Si necesitas aclaración sobre algún punto, no dudes en contactarnos
                </p>
                <a 
                  href="mailto:contacto@guiadelconductor.ar"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-2xl transition-colors"
                  style={{ borderRadius: '0 15px 0 15px' }}
                >
                  Contactar
                </a>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TerminosCondiciones;
