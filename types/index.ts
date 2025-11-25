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
  // 既存フィールド
  id: number;
  category: QuizCategory;
  difficulty?: UserLevel; // 問題の難易度（未指定の場合はカテゴリのデフォルト難易度を使用）
  questionJa: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  detailedExplanation: string;

  // ★ 新規追加フィールド（K-POP特化）
  context?: 'V LIVE' | 'concert' | 'fan_letter' | 'SNS' | 'interview' | 'award_speech';
  idol?: 'BTS' | 'BLACKPINK' | 'NewJeans' | 'Stray Kids' | 'multiple';
  frequency?: 'extremely_high' | 'very_high' | 'high' | 'medium';
  usage?: 'greeting' | 'cheering' | 'reaction' | 'thanks' | 'closing' | 'interaction' | 'QA' | 'announcement' | 'update' | 'reassurance' | 'gratitude' | 'apology' | 'response' | 'promise' | 'request' | 'conversation' | 'mukbang';
  emotion?: 'happy' | 'moved' | 'longing' | 'surprise' | 'love' | 'grateful' | 'caring' | 'determined';
  formality?: 'casual' | 'polite' | 'formal';
  realExample?: string; // "BTS V LIVE 2024.3" など
}

export type QuizCategory =
  | 'basic'       // 基本フレーズ
  // K-POP関連カテゴリ
  | 'vlive'       // V LIVE
  | 'kpop_gratitude'  // K-POP感謝表現
  | 'reactions'   // リアクション
  | 'fanLetter'   // ファンレター
  | 'sns'         // SNS
  | 'concert'     // コンサート
  | 'slang'       // スラング
  | 'kpopTerms'   // K-POP用語
  // 統合カテゴリ
  | 'travel_daily' // 旅行で使える日常会話 (統合: gratitude, daily, numbers, travel, shopping, restaurant, emergency)
  // 旧カテゴリ (非表示だがデータは保持)
  | 'travel'      // 旅行会話
  | 'daily'       // 日常会話
  | 'gratitude'   // 感謝の表現
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
