import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Question, QuizState } from '../../types/quiz';
import QuizQuestion from './QuizQuestion';
import QuizTimer from './QuizTimer';
import QuizNavigation from './QuizNavigation';
import QuizResults from './QuizResults';
import QuizStart from './QuizStart';
import { BookOpen } from 'lucide-react';

const Quiz: React.FC = () => {
  useEffect(() => {
    document.title = 'Test Online del Examen Conducir Córdoba 2025 | Guía del Conductor';
    return () => {
      document.title = 'Guía del Conductor - Simulador Examen Teórico Córdoba';
    };
  }, []);

  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    selectedOption: null,
    showFeedback: false,
    timeRemaining: 20 * 60, // 20 minutes in seconds
    isCompleted: false,
    isStarted: false,
    score: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load questions from JSON and select 40 random questions
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await fetch('/data/preguntas.json');
        if (!response.ok) {
          throw new Error('Error al cargar las preguntas');
        }
        const allQuestions: Question[] = await response.json();
        
        // Shuffle and select 40 questions from 42 available
        const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
        const selectedQuestions = shuffledQuestions.slice(0, 40);
        
        // Re-assign sequential IDs to maintain order
        const questionsWithNewIds = selectedQuestions.map((question, index) => ({
          ...question,
          id: index + 1
        }));
        
        setQuizState(prev => ({
          ...prev,
          questions: questionsWithNewIds,
          answers: new Array(questionsWithNewIds.length).fill(null)
        }));
        setLoading(false);
      } catch (err) {
        setError('Error al cargar el examen. Por favor, recarga la página.');
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  // Timer countdown - only when quiz is started
  useEffect(() => {
    if (!quizState.isStarted || quizState.isCompleted || quizState.timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (prev.timeRemaining <= 1) {
          return { ...prev, timeRemaining: 0, isCompleted: true };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState.isStarted, quizState.isCompleted, quizState.timeRemaining]);

  // Auto-complete when time runs out
  useEffect(() => {
    if (quizState.timeRemaining <= 0 && !quizState.isCompleted) {
      handleCompleteQuiz();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizState.timeRemaining]);

  const handleStartQuiz = () => {
    setQuizState(prev => ({
      ...prev,
      isStarted: true
    }));
  };

  const handleSelectOption = (optionIndex: number) => {
    if (quizState.showFeedback) return;
    
    setQuizState(prev => ({
      ...prev,
      selectedOption: optionIndex,
      showFeedback: true
    }));
  };

  const handleNextQuestion = () => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = quizState.selectedOption;

    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        answers: newAnswers,
        selectedOption: null,
        showFeedback: false
      }));
    } else {
      handleCompleteQuiz(newAnswers);
    }
  };

  const handlePreviousQuestion = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        selectedOption: prev.answers[prev.currentQuestionIndex - 1],
        showFeedback: prev.answers[prev.currentQuestionIndex - 1] !== null
      }));
    }
  };

  const handleGoToQuestion = (questionIndex: number) => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: questionIndex,
      selectedOption: prev.answers[questionIndex],
      showFeedback: prev.answers[questionIndex] !== null
    }));
  };

  const handleCompleteQuiz = (finalAnswers?: (number | null)[]) => {
    const answersToUse = finalAnswers || quizState.answers;
    const correctCount = answersToUse.reduce((count: number, answer, index) => {
      if (answer !== null && answer === quizState.questions[index]?.respuestaCorrecta) {
        return count + 1;
      }
      return count;
    }, 0);

    setQuizState(prev => ({
      ...prev,
      answers: answersToUse,
      isCompleted: true,
      score: Math.round((correctCount / prev.questions.length) * 100)
    }));
  };

  const handleRestartQuiz = () => {
    setQuizState({
      questions: quizState.questions,
      currentQuestionIndex: 0,
      answers: new Array(quizState.questions.length).fill(null),
      selectedOption: null,
      showFeedback: false,
      timeRemaining: 20 * 60,
      isCompleted: false,
      isStarted: false,
      score: 0
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Cargando examen...</h2>
          <p className="text-gray-600">Preparando las preguntas del test</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error al cargar</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (!quizState.isStarted) {
    return (
      <QuizStart
        totalQuestions={quizState.questions.length}
        onStart={handleStartQuiz}
      />
    );
  }

  if (quizState.isCompleted) {
    return (
      <QuizResults
        quizState={quizState}
        onRestart={handleRestartQuiz}
      />
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-xl">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Examen Teórico</h1>
                <p className="text-sm text-gray-600">Córdoba, Argentina</p>
              </div>
            </div>
            
            <QuizTimer timeRemaining={quizState.timeRemaining} />
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Pregunta {quizState.currentQuestionIndex + 1} de {quizState.questions.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100)}% completado
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-primary-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100}%` 
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Question */}
          <QuizQuestion
            question={currentQuestion}
            selectedOption={quizState.selectedOption}
            showFeedback={quizState.showFeedback}
            onSelectOption={handleSelectOption}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
            canGoNext={quizState.showFeedback}
            canGoPrevious={quizState.currentQuestionIndex > 0}
          />

          {/* Navigation */}
          <QuizNavigation
            questions={quizState.questions}
            answers={quizState.answers}
            currentQuestionIndex={quizState.currentQuestionIndex}
            onGoToQuestion={handleGoToQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
