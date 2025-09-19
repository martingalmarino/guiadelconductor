import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, AlertCircle, Users, Shield, Car, ArrowLeft, ExternalLink } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const GuiaBuenConductor: React.FC = () => {
  const temas = [
    {
      icon: AlertCircle,
      title: 'Señalización y semáforos',
      description: 'Significado de luces fijas e intermitentes. Prioridad en intersecciones, rotondas y sendas peatonales. Interpretación de señales horizontales (pintadas en el pavimento) y verticales (carteles).',
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: Car,
      title: 'Normas de circulación',
      description: 'Velocidades máximas y mínimas según el tipo de vía (calles, avenidas, zonas escolares). Reglas para adelantamientos, cambios de carril y uso de carriles exclusivos. Prioridades de paso en distintas situaciones (mano derecha, peatones, vehículos de emergencia).',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Shield,
      title: 'Seguridad vial',
      description: 'Uso obligatorio de cinturón, casco, espejos y elementos de seguridad. Normas para transporte de menores y pasajeros. Requisitos técnicos y documentales del vehículo (ITV, seguro, patentes).',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Users,
      title: 'Convivencia y prevención',
      description: 'Uso responsable de la bocina. Prohibiciones como conducir con teléfono en mano, fumar en transporte público o estacionar en zonas no permitidas. Conductas seguras en condiciones especiales (lluvia, niebla, curvas).',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: BookOpen,
      title: 'Reglamentaciones específicas',
      description: 'Reglas para taxis, remises, transporte escolar, transporte de carga y vehículos de emergencia. Límites de alcoholemia por categoría de conductor (en muchos casos, 0,0 g/l).',
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  const consejos = [
    'Revisa las señales viales hasta reconocerlas de inmediato, ya que en el examen muchas preguntas incluyen gráficos.',
    'Práctica como si estuvieras rindiendo: intenta responder sin mirar las opciones correctas y luego verifica.',
    'Memoriza las prioridades de paso y los límites de velocidad, que son puntos clave del examen.',
    'Fíjate en las excepciones: por ejemplo, cuándo está permitido adelantar por la derecha o girar en determinadas condiciones.'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
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
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="heading-xl text-gray-900 mb-6">
                La Guía del Buen Conductor: tu llave para aprobar el examen teórico en Córdoba
              </h1>
              
              <p className="text-body text-gray-600 mb-8">
                La Guía del Buen Conductor es uno de los materiales más solicitados por quienes están por rendir el examen teórico para obtener la licencia de conducir en la ciudad de Córdoba. Elaborada por la Municipalidad, este manual recopila de manera práctica las normativas de tránsito vigentes y las principales señales, maniobras y obligaciones que todo conductor debe conocer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/test">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-bold
                               px-8 py-4 text-lg
                               transition-all duration-300
                               hover:shadow-lg hover:shadow-primary-600/25
                               active:scale-[0.98] transform hover:-translate-y-1
                               focus:outline-none focus:ring-4 focus:ring-primary-600/30
                               min-h-[56px]
                               w-full sm:w-auto
                               flex items-center justify-center gap-3"
                    style={{ borderRadius: '0 15px 0 15px' }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Practicar con el Test</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* What Contains */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-lg text-gray-900 mb-8 text-center">
                  ¿Qué contiene la guía?
                </h2>
                <p className="text-body text-gray-600 mb-12 text-center">
                  El material está estructurado como un cuestionario de preguntas y respuestas, con la opción correcta marcada, para facilitar el estudio. Los temas centrales incluyen:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {temas.map((tema, index) => (
                    <motion.div
                      key={tema.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl ${tema.color} flex items-center justify-center mb-4`}>
                        <tema.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{tema.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{tema.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h2 className="heading-lg text-gray-900 mb-6 text-center">
                  ¿Para qué sirve esta guía?
                </h2>
                <p className="text-body text-gray-600 mb-6 text-center">
                  Su finalidad es doble:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Prepararte para el examen</h3>
                    <p className="text-gray-600">
                      Muchas de las preguntas del test oficial son idénticas o muy similares a las que aparecen en la guía.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Formarte como conductor</h3>
                    <p className="text-gray-600">
                      Entendiendo no solo la letra de la ley, sino también la importancia de aplicarla para prevenir accidentes y respetar a todos los usuarios de la vía.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Study Tips */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-lg text-gray-900 mb-8 text-center">
                  Consejos para estudiar la Guía
                </h2>
                
                <div className="space-y-4">
                  {consejos.map((consejo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{consejo}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Final */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 text-center text-white"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  ¿Listo para poner en práctica lo aprendido?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Usa nuestro simulador para practicar con preguntas reales del examen de Córdoba
                </p>
                
                <Link to="/test">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 font-bold
                               px-8 py-4 text-lg
                               hover:shadow-xl transition-all duration-300
                               min-h-[56px]
                               inline-flex items-center justify-center gap-3"
                    style={{ borderRadius: '0 15px 0 15px' }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Comenzar Test Gratuito</span>
                  </motion.button>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaBuenConductor;
