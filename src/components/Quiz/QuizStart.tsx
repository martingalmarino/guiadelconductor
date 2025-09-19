import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Clock, BookOpen, CheckCircle, AlertCircle, Home } from 'lucide-react';

interface QuizStartProps {
  totalQuestions: number;
  onStart: () => void;
}

const QuizStart: React.FC<QuizStartProps> = ({ totalQuestions, onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-primary-600 rounded-full mb-6"
            >
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Examen Teórico de Conducir
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600"
            >
              Córdoba, Argentina
            </motion.p>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6 mb-8"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Instrucciones del Examen
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 text-blue-700">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm sm:text-base">20 minutos de duración</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="text-sm sm:text-base">40 preguntas (de 42 disponibles)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm sm:text-base">70% para aprobar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Play className="w-5 h-5 text-blue-600" />
                  <span className="text-sm sm:text-base">Feedback inmediato</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">
                ✅ Características del Simulador
              </h4>
              <ul className="space-y-2 text-green-700">
                <li>• Preguntas oficiales del examen real de Córdoba</li>
                <li>• 40 preguntas seleccionadas aleatoriamente de 42 disponibles</li>
                <li>• Explicación detallada para cada respuesta</li>
                <li>• Navegación libre entre preguntas</li>
                <li>• Resultados detallados al finalizar</li>
                <li>• Posibilidad de reiniciar con nuevas preguntas</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">
                ⚠️ Importante
              </h4>
              <ul className="space-y-2 text-yellow-700">
                <li>• Una vez iniciado el timer no se puede pausar</li>
                <li>• Podés navegar libremente entre preguntas</li>
                <li>• Las preguntas sin responder cuentan como incorrectas</li>
                <li>• Necesitás 70% o más para aprobar</li>
              </ul>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStart}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold
                         px-8 py-5 sm:px-10 sm:py-6
                         text-xl sm:text-2xl
                         rounded-2xl transition-all duration-300
                         hover:shadow-lg hover:shadow-primary-600/25
                         min-h-[64px] sm:min-h-[72px]
                         flex items-center justify-center gap-3
                         w-full sm:w-auto"
            >
              <Play className="w-6 h-6 sm:w-7 sm:h-7" />
              <span className="font-extrabold">COMENZAR CON EL TEST</span>
            </motion.button>

            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-gray-700 font-semibold
                           px-6 py-4 sm:px-8 sm:py-5
                           text-lg sm:text-xl
                           rounded-2xl border-2 border-gray-200 hover:border-gray-300
                           transition-all duration-300 hover:shadow-md
                           min-h-[56px] sm:min-h-[64px]
                           flex items-center justify-center gap-3
                           w-full sm:w-auto"
              >
                <Home className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Volver al Inicio</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizStart;
