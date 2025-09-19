import React from 'react';
import { motion } from 'framer-motion';
import { QuizState } from '../../types/quiz';
import { Trophy, RotateCcw, CheckCircle, XCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuizResultsProps {
  quizState: QuizState;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ quizState, onRestart }) => {
  const correctAnswers = quizState.answers.reduce((count: number, answer, index) => {
    if (answer !== null && answer === quizState.questions[index]?.respuestaCorrecta) {
      return count + 1;
    }
    return count;
  }, 0);

  const totalQuestions = quizState.questions.length;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = scorePercentage >= 70;
  const timeUsed = (20 * 60) - quizState.timeRemaining;
  const minutesUsed = Math.floor(timeUsed / 60);
  const secondsUsed = timeUsed % 60;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        {/* Results Card */}
        <div className={`rounded-3xl p-8 sm:p-12 shadow-2xl border-2 ${
          passed 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          {/* Icon */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full ${
                passed ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {passed ? (
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              ) : (
                <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              )}
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${
              passed ? 'text-green-800' : 'text-red-800'
            }`}
          >
            {passed ? '¡Felicitaciones!' : 'No aprobaste'}
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`text-lg sm:text-xl text-center mb-8 leading-relaxed ${
              passed ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {passed 
              ? `Aprobaste con ${correctAnswers} respuestas correctas de ${totalQuestions}!`
              : `Sacaste ${correctAnswers} de ${totalQuestions}. Te recomendamos seguir practicando.`
            }
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
          >
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-gray-900">{scorePercentage}%</div>
              <div className="text-sm text-gray-600">Puntaje</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
              <div className="text-sm text-gray-600">Correctas</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-red-600">{totalQuestions - correctAnswers}</div>
              <div className="text-sm text-gray-600">Incorrectas</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">
                {minutesUsed}:{secondsUsed.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-600">Tiempo</div>
            </div>
          </motion.div>

          {/* Detailed Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-2xl p-6 mb-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalle de Respuestas</h3>
            <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-2">
              {quizState.answers.map((answer, index) => {
                const isCorrect = answer === quizState.questions[index]?.respuestaCorrecta;
                const isAnswered = answer !== null;
                
                return (
                  <div
                    key={index}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                      !isAnswered 
                        ? 'bg-gray-200 text-gray-500' 
                        : isCorrect 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                    }`}
                  >
                    {isAnswered ? (
                      isCorrect ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <XCircle className="w-4 h-4" />
                      )
                    ) : (
                      index + 1
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRestart}
              className="btn-primary flex items-center justify-center gap-3"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Reiniciar el Test</span>
            </motion.button>

            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-3 w-full"
              >
                <Home className="w-5 h-5" />
                <span>Volver al Inicio</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Recommendation */}
          {!passed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-blue-800 mb-2">
                💡 Recomendaciones para mejorar
              </h4>
              <ul className="text-blue-700 space-y-2">
                <li>• Revisá las preguntas que respondiste incorrectamente</li>
                <li>• Estudiá el manual del conductor de Córdoba</li>
                <li>• Practicá más simulacros antes del examen real</li>
                <li>• Prestá atención a las señales de tránsito</li>
              </ul>
            </motion.div>
          )}

          {passed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-green-800 mb-2">
                🎉 ¡Estás listo para el examen real!
              </h4>
              <p className="text-green-700">
                Con este puntaje tenés excelentes chances de aprobar el examen oficial. 
                ¡Seguí practicando para mantener tu nivel!
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizResults;
