import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';

interface QuizTimerProps {
  timeRemaining: number;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ timeRemaining }) => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isLowTime = timeRemaining <= 300; // 5 minutes warning
  const isCritical = timeRemaining <= 60; // 1 minute critical

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <motion.div
      animate={isCritical ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 1, repeat: isCritical ? Infinity : 0 }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl border-2 ${
        isCritical 
          ? 'bg-red-50 border-red-200 text-red-700' 
          : isLowTime 
            ? 'bg-yellow-50 border-yellow-200 text-yellow-700'
            : 'bg-blue-50 border-blue-200 text-blue-700'
      }`}
    >
      {isCritical ? (
        <AlertTriangle className="w-5 h-5" />
      ) : (
        <Clock className="w-5 h-5" />
      )}
      
      <div className="flex items-center space-x-1">
        <span className="text-lg font-bold font-mono">
          {formatTime(minutes)}:{formatTime(seconds)}
        </span>
        <span className="text-sm font-medium hidden sm:inline">
          restantes
        </span>
      </div>
    </motion.div>
  );
};

export default QuizTimer;
