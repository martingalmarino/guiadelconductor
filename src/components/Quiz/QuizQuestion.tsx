import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../../types/quiz';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, SkipForward } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  selectedOption: number | null;
  showFeedback: boolean;
  onSelectOption: (optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedOption,
  showFeedback,
  onSelectOption,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious
}) => {
  const isCorrect = selectedOption === question.respuestaCorrecta;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Question Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
          {question.pregunta}
        </h2>

        {/* Options */}
        <div className="space-y-3 sm:space-y-4">
          {question.opciones.map((opcion, index) => {
            const isSelected = selectedOption === index;
            const isCorrectOption = index === question.respuestaCorrecta;
            
            let optionClasses = "w-full p-4 sm:p-5 text-left rounded-xl border-2 transition-all duration-300 ";
            
            if (showFeedback) {
              if (isSelected) {
                optionClasses += isCorrect 
                  ? "bg-green-50 border-green-500 text-green-800" 
                  : "bg-red-50 border-red-500 text-red-800";
              } else if (isCorrectOption) {
                optionClasses += "bg-green-50 border-green-500 text-green-800";
              } else {
                optionClasses += "bg-gray-50 border-gray-200 text-gray-500";
              }
            } else {
              optionClasses += isSelected
                ? "bg-primary-50 border-primary-500 text-primary-800"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
            }

            return (
              <motion.button
                key={index}
                whileHover={!showFeedback ? { scale: 1.02, y: -2 } : {}}
                whileTap={!showFeedback ? { scale: 0.98 } : {}}
                onClick={() => onSelectOption(index)}
                disabled={showFeedback}
                className={optionClasses}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center">
                    {showFeedback && isSelected && (
                      isCorrect ? (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      )
                    )}
                    {showFeedback && !isSelected && isCorrectOption && (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    )}
                    {!showFeedback && (
                      <span className="text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                    )}
                  </div>
                  <span className="text-base sm:text-lg font-medium leading-relaxed">
                    {opcion}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-6 sm:p-8 border-2 ${
              isCorrect 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                isCorrect ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <XCircle className="w-5 h-5 text-white" />
                )}
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold mb-2 ${
                  isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isCorrect ? '✅ Correcto' : '❌ Incorrecto'}
                </h3>
                <p className={`text-base leading-relaxed ${
                  isCorrect ? 'text-green-700' : 'text-red-700'
                }`}>
                  {question.comentario}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="btn-secondary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed order-2 sm:order-1"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Anterior</span>
        </motion.button>

        <div className="flex gap-3 order-1 sm:order-2">
          {!showFeedback && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNext()}
              className="btn-secondary flex items-center justify-center gap-2 flex-1 sm:flex-none"
            >
              <SkipForward className="w-5 h-5" />
              <span>Saltar</span>
            </motion.button>
          )}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            disabled={!canGoNext}
            className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed flex-1 sm:flex-none"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizQuestion;
