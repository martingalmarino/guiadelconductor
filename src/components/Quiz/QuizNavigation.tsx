import React from 'react';
import { motion } from 'framer-motion';
import { Question } from '../../types/quiz';

interface QuizNavigationProps {
  questions: Question[];
  answers: (number | null)[];
  currentQuestionIndex: number;
  onGoToQuestion: (questionIndex: number) => void;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  questions,
  answers,
  currentQuestionIndex,
  onGoToQuestion
}) => {
  return (
    <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Navegación del Examen
      </h3>
      
      <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-3">
        {questions.map((_, index) => {
          const isAnswered = answers[index] !== null;
          const isCurrent = index === currentQuestionIndex;
          
          let buttonClasses = "w-10 h-10 sm:w-12 sm:h-12 rounded-xl font-bold text-sm transition-all duration-300 ";
          
          if (isCurrent) {
            buttonClasses += "bg-primary-600 text-white border-2 border-primary-700 shadow-lg";
          } else if (isAnswered) {
            buttonClasses += "bg-green-500 text-white border-2 border-green-600 hover:bg-green-600";
          } else {
            buttonClasses += "bg-gray-100 text-gray-600 border-2 border-gray-200 hover:bg-gray-200 hover:border-gray-300";
          }

          return (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onGoToQuestion(index)}
              className={buttonClasses}
            >
              {index + 1}
            </motion.button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-primary-600 rounded border-2 border-primary-700"></div>
          <span className="text-sm text-gray-600">Actual</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded border-2 border-green-600"></div>
          <span className="text-sm text-gray-600">Respondida</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-100 rounded border-2 border-gray-200"></div>
          <span className="text-sm text-gray-600">Pendiente</span>
        </div>
      </div>
    </div>
  );
};

export default QuizNavigation;
