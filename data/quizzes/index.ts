import { Question } from '../../types';

// Import all category questions
import { basicQuestions } from './basic';
import { gratitudeQuestions } from './gratitude';
import { dailyQuestions } from './daily';
import { numbersQuestions } from './numbers';
import { travelQuestions } from './travel';
import { shoppingQuestions } from './shopping';
import { restaurantQuestions } from './restaurant';
import { emergencyQuestions } from './emergency';

// Combine all questions
export const quizQuestions: Question[] = [
  ...basicQuestions,
  ...gratitudeQuestions,
  ...dailyQuestions,
  ...numbersQuestions,
  ...travelQuestions,
  ...shoppingQuestions,
  ...restaurantQuestions,
  ...emergencyQuestions,
];

// Export individual category questions
export {
  basicQuestions,
  gratitudeQuestions,
  dailyQuestions,
  numbersQuestions,
  travelQuestions,
  shoppingQuestions,
  restaurantQuestions,
  emergencyQuestions,
};

// Category-specific question getters
export const getQuizzesByCategory = (category: string, userLevel?: 'beginner' | 'intermediate' | 'advanced'): Question[] => {
  // カテゴリのデフォルト難易度マッピング
  const categoryDefaultDifficulty: Record<string, 'beginner' | 'intermediate' | 'advanced'> = {
    basic: 'beginner',
    gratitude: 'beginner',
    daily: 'beginner',
    numbers: 'beginner',
    travel: 'intermediate',
    shopping: 'intermediate',
    restaurant: 'intermediate',
    emergency: 'advanced',
  };

  let filtered = quizQuestions.filter((q) => q.category === category);

  // ユーザーレベルが指定されている場合は、そのレベルに合った問題のみフィルター
  if (userLevel) {
    filtered = filtered.filter((q) => {
      const questionDifficulty = q.difficulty || categoryDefaultDifficulty[q.category] || 'beginner';
      return questionDifficulty === userLevel;
    });
  }

  // Shuffle to avoid repeating same questions consecutively
  return [...filtered].sort(() => 0.5 - Math.random());
};

// Get random quizzes
export const getRandomQuizzes = (count: number, userLevel?: 'beginner' | 'intermediate' | 'advanced'): Question[] => {
  let questions = quizQuestions;

  // ユーザーレベルが指定されている場合は、そのレベルに合った問題のみ取得
  if (userLevel) {
    questions = getQuizzesByDifficulty(userLevel);
  }

  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Category information
export const categoryInfo = {
  basic: { name: '基本フレーズ', icon: '✨', color: '#7DB49E' },
  gratitude: { name: '感謝の表現', icon: '💝', color: '#F99B85' },
  daily: { name: '日常会話', icon: '💬', color: '#85C9B7' },
  numbers: { name: '数字', icon: '🔢', color: '#A8D9CC' },
  travel: { name: '旅行会話', icon: '🗺️', color: '#9AC4B3' },
  shopping: { name: 'ショッピング', icon: '🛍️', color: '#B8D4C8' },
  restaurant: { name: 'レストラン', icon: '🍜', color: '#D4E4DD' },
  emergency: { name: '緊急時', icon: '🚨', color: '#FBB8A8' },
};

// Get questions by difficulty level (based on question's difficulty field or category default)
export const getQuizzesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): Question[] => {
  // カテゴリのデフォルト難易度マッピング
  const categoryDefaultDifficulty: Record<string, 'beginner' | 'intermediate' | 'advanced'> = {
    basic: 'beginner',
    gratitude: 'beginner',
    daily: 'beginner',
    numbers: 'beginner',
    travel: 'intermediate',
    shopping: 'intermediate',
    restaurant: 'intermediate',
    emergency: 'advanced',
  };

  return quizQuestions.filter((q) => {
    // 問題に難易度が設定されている場合はそれを使用、なければカテゴリのデフォルトを使用
    const questionDifficulty = q.difficulty || categoryDefaultDifficulty[q.category] || 'beginner';
    return questionDifficulty === difficulty;
  });
};

// Statistics
export const getQuizStatistics = () => {
  const stats: Record<string, number> = {};

  quizQuestions.forEach((q) => {
    stats[q.category] = (stats[q.category] || 0) + 1;
  });

  return {
    total: quizQuestions.length,
    byCategory: stats,
  };
};
