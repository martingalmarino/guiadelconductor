import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { HOME_FAQ } from '../seo/faqData';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50" id="preguntas-frecuentes">
      <div className="container-custom">
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
            Respuestas claras sobre el simulador del examen teórico de conducir en Córdoba
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {HOME_FAQ.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
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

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 pb-4 sm:px-8 sm:pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
