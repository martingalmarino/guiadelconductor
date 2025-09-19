export interface Question {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  comentario: string;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: (number | null)[];
  selectedOption: number | null;
  showFeedback: boolean;
  timeRemaining: number;
  isCompleted: boolean;
  isStarted: boolean;
  score: number;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  passed: boolean;
  timeUsed: number;
}
