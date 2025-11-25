// User types
export type UserLevel = 'beginner' | 'intermediate' | 'advanced';

export interface User {
  id: string;
  name: string;
  email?: string;
  level?: UserLevel;
  character?: string; // 선택한 캐릭터 이모지
  createdAt: string;
}

// Quiz types
export interface Question {
  id: number;
  category: QuizCategory;
  difficulty?: UserLevel; // 問題の難易度（未指定の場合はカテゴリのデフォルト難易度を使用）
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
  dailyGoal?: number; // 1日の目標クイズ数 (デフォルト: 5)
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

// Progress and unlock system
export interface CategoryProgress {
  category: QuizCategory;
  level: UserLevel;
  isUnlocked: boolean;
  completedQuizzes: number;
  bestScore: number;
  averageScore: number;
  totalQuizzes: number;
}

export interface UnlockRequirement {
  requiredCategory?: QuizCategory;
  requiredLevel?: UserLevel;
  minimumScore: number;
  minimumQuizzes: number;
}

export interface CategoryConfig {
  id: QuizCategory;
  titleJa: string;
  titleKo: string;
  icon: string;
  description: string;
  difficulty: UserLevel;
  unlockRequirement?: UnlockRequirement;
}

// Badges and achievements
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  requirement: {
    type: 'streak' | 'quizzes' | 'score' | 'category';
    value: number;
  };
}
