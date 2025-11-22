// User types
export interface User {
  id: string;
  name: string;
  email?: string;
  createdAt: string;
}

// Quiz types
export interface Question {
  id: number;
  category: QuizCategory;
  questionJa: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  detailedExplanation: string;
}

export type QuizCategory =
  | 'travel'      // 旅行会話
  | 'daily'       // 日常会話
  | 'gratitude'   // 感謝の表現
  | 'basic'       // 基本フレーズ
  | 'shopping'    // ショッピング
  | 'restaurant'  // レストラン
  | 'emergency'   // 緊急時
  | 'numbers';    // 数字

// Learning history types
export interface QuizResult {
  id: string;
  userId: string;
  category: QuizCategory;
  score: number;
  totalQuestions: number;
  correctAnswers: number[];
  incorrectAnswers: number[];
  completedAt: string;
  timeSpent: number; // in seconds
}

export interface LearningStats {
  totalQuizzesTaken: number;
  totalCorrectAnswers: number;
  totalQuestions: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string;
  categoryStats: {
    [key in QuizCategory]?: {
      quizzesTaken: number;
      averageScore: number;
      bestScore: number;
    };
  };
}

// Theme types
export type ThemeMode = 'light' | 'dark';
