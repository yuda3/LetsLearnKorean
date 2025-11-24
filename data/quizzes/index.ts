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
export const getQuizzesByCategory = (category: string): Question[] => {
  const filtered = quizQuestions.filter((q) => q.category === category);
  // Shuffle to avoid repeating same questions consecutively
  return [...filtered].sort(() => 0.5 - Math.random());
};

// Get random quizzes
export const getRandomQuizzes = (count: number): Question[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
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

// Get questions by difficulty level (based on category)
export const getQuizzesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): Question[] => {
  const categoryMap = {
    beginner: ['basic', 'gratitude', 'daily', 'numbers'],
    intermediate: ['travel', 'shopping', 'restaurant'],
    advanced: ['emergency'],
  };

  const categories = categoryMap[difficulty] || [];
  return quizQuestions.filter((q) => categories.includes(q.category));
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
