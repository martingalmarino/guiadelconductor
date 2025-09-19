import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: '¿Cómo saber cuánto debo estudiar para el examen teórico en Córdoba?',
      answer: 'Recomendamos estudiar hasta alcanzar consistentemente un 85% o más en nuestros simulacros. La mayoría de nuestros estudiantes necesitan entre 2-4 semanas de práctica regular (30 minutos diarios) para alcanzar este nivel. Nuestro sistema de seguimiento te mostrará tu progreso y te indicará cuándo estés listo para el examen real.'
    },
    {
      question: '¿El simulador es completamente gratis?',
      answer: 'Sí, nuestro simulador básico es 100% gratuito e incluye acceso a las preguntas oficiales, simulacros ilimitados y feedback inmediato. No necesitás registrarte ni proporcionar datos de tarjeta de crédito.'
    },
    {
      question: '¿Puedo practicar desde el celular?',
      answer: 'Absolutamente. Nuestro simulador está optimizado para funcionar perfectamente en celulares, tablets y computadoras. Podés practicar en cualquier lugar y en cualquier momento. La interfaz se adapta automáticamente al tamaño de tu pantalla y todas las funciones están disponibles en dispositivos móviles.'
    },
    {
      question: '¿Las preguntas son las mismas que aparecen en el examen real?',
      answer: 'Sí, utilizamos la base de datos oficial de preguntas del examen teórico de la Provincia de Córdoba. Nuestro contenido se actualiza regularmente para reflejar cualquier cambio en la normativa de tránsito. Esto garantiza que practiques con las mismas preguntas que podrían aparecer en tu examen real.'
    },
    {
      question: '¿Cuánto tiempo tengo para completar cada simulacro?',
      answer: 'Los simulacros replican exactamente las condiciones del examen real: tenés 20 minutos para responder 40 preguntas. También ofrecemos modos de práctica sin límite de tiempo para que puedas estudiar a tu ritmo y revisar las explicaciones detalladas de cada respuesta.'
    },
    {
      question: '¿Qué pasa si no apruebo el simulacro?',
      answer: 'No te preocupes, es parte del proceso de aprendizaje. Cada simulacro te muestra exactamente qué preguntas respondiste incorrectamente y por qué. Podés revisar las explicaciones, estudiar los temas específicos donde necesitás mejorar y volver a intentarlo. No hay límite en la cantidad de simulacros que podés hacer.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-lg text-gray-900 mb-3 sm:mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro simulador del examen teórico
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Question */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 touch-target"
                  whileHover={{ backgroundColor: '#f9fafb' }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 sm:pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-full flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-8 sm:pb-6 border-t border-gray-100">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="text-small text-gray-600 pt-3 sm:pt-4"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <h3 className="heading-md text-gray-900 mb-3">
                ¿Tenés más preguntas?
              </h3>
              <p className="text-small text-gray-600 mb-6">
                Contactanos y te ayudamos con cualquier duda sobre el examen teórico
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-bold
                             px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg
                             rounded-2xl transition-all duration-300
                             hover:shadow-lg hover:shadow-primary-600/25
                             active:scale-[0.98] transform hover:-translate-y-1
                             focus:outline-none focus:ring-4 focus:ring-primary-600/30
                             min-h-[52px] sm:min-h-[56px]
                             w-full sm:w-auto
                             flex items-center justify-center gap-2"
                >
                  <span className="font-semibold">Contactar Soporte</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-50 active:bg-gray-100 text-primary-600 font-bold
                             px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg
                             rounded-2xl border-2 border-primary-600 hover:border-primary-700
                             transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/15
                             active:scale-[0.98] transform hover:-translate-y-1
                             focus:outline-none focus:ring-4 focus:ring-primary-600/30
                             min-h-[52px] sm:min-h-[56px]
                             w-full sm:w-auto
                             flex items-center justify-center gap-2"
                >
                  <span className="font-semibold">Ver Más FAQ</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
