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

// Import K-POP category questions
import {
  vliveQuestions,
  kpopGratitudeQuestions,
  reactionsQuestions,
  fanLetterQuestions,
  snsQuestions,
  concertQuestions,
  slangQuestions,
  kpopTermsQuestions
} from './kpop';

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
  // K-POP questions
  ...vliveQuestions,
  ...kpopGratitudeQuestions,
  ...reactionsQuestions,
  ...fanLetterQuestions,
  ...snsQuestions,
  ...concertQuestions,
  ...slangQuestions,
  ...kpopTermsQuestions,
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
  // K-POP categories
  vliveQuestions,
  kpopGratitudeQuestions,
  reactionsQuestions,
  fanLetterQuestions,
  snsQuestions,
  concertQuestions,
  slangQuestions,
  kpopTermsQuestions,
};

// Fisher-Yates shuffle algorithm for better randomization
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Shuffle question options and update correctAnswer index
const shuffleQuestionOptions = (question: Question): Question => {
  const { options, correctAnswer } = question;
  const correctOption = options[correctAnswer];

  // Create array of indices and shuffle them
  const indices = shuffleArray(options.map((_, i) => i));

  // Reorder options based on shuffled indices
  const shuffledOptions = indices.map(i => options[i]);

  // Find new index of correct answer
  const newCorrectAnswer = shuffledOptions.indexOf(correctOption);

  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectAnswer,
  };
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
    // K-POP categories
    vlive: 'beginner',
    kpop_gratitude: 'beginner',
    reactions: 'beginner',
    fanLetter: 'intermediate',
    sns: 'beginner',
    concert: 'beginner',
    slang: 'intermediate',
    kpopTerms: 'intermediate',
    // 통합 카테고리
    travel_daily: 'intermediate',
  };

  // 통합 카테고리 처리: travel_daily는 기존 일반 카테고리들을 모두 포함
  let filtered: Question[];
  if (category === 'travel_daily') {
    // 기존 일반 카테고리들의 퀴즈를 모두 합침
    const travelDailyCategories = ['gratitude', 'daily', 'numbers', 'travel', 'shopping', 'restaurant', 'emergency'];
    filtered = quizQuestions.filter((q) => travelDailyCategories.includes(q.category));
  } else {
    filtered = quizQuestions.filter((q) => q.category === category);
  }

  // ユーザーレベルが指定されている場合は、そのレベルに合った問題のみフィルター
  if (userLevel) {
    filtered = filtered.filter((q) => {
      const questionDifficulty = q.difficulty || categoryDefaultDifficulty[q.category] || 'beginner';
      return questionDifficulty === userLevel;
    });
  }

  // Shuffle questions using Fisher-Yates algorithm
  const shuffledQuestions = shuffleArray(filtered);

  // Shuffle options for each question
  return shuffledQuestions.map(shuffleQuestionOptions);
};

// Get random quizzes
export const getRandomQuizzes = (count: number, userLevel?: 'beginner' | 'intermediate' | 'advanced'): Question[] => {
  let questions = quizQuestions;

  // ユーザーレベルが指定されている場合は、そのレベルに合った問題のみ取得
  if (userLevel) {
    questions = getQuizzesByDifficulty(userLevel);
  }

  // Shuffle questions using Fisher-Yates algorithm
  const shuffled = shuffleArray(questions);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  // Shuffle options for each question
  return selected.map(shuffleQuestionOptions);
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
  // K-POP categories
  vlive: { name: 'V LIVE', icon: '📱', color: '#E8B4F4' },
  kpop_gratitude: { name: 'K-POP感謝', icon: '💜', color: '#F4B4E8' },
  reactions: { name: 'リアクション', icon: '😲', color: '#B4E8F4' },
  fanLetter: { name: 'ファンレター', icon: '💌', color: '#F4E8B4' },
  sns: { name: 'SNS', icon: '📲', color: '#E8F4B4' },
  concert: { name: 'コンサート', icon: '🎤', color: '#B4F4E8' },
  slang: { name: 'スラング', icon: '💬', color: '#F4D4B4' },
  kpopTerms: { name: 'K-POP用語', icon: '🎵', color: '#D4B4F4' },
  // 통합 카테고리
  travel_daily: { name: '旅行で使える日常会話', icon: '🗺️', color: '#9AC4B3' },
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
    // K-POP categories
    vlive: 'beginner',
    kpop_gratitude: 'beginner',
    reactions: 'beginner',
    fanLetter: 'intermediate',
    sns: 'beginner',
    concert: 'beginner',
    slang: 'intermediate',
    kpopTerms: 'intermediate',
  };

  return quizQuestions.filter((q) => {
    // 問題に難易度が設定されている場合はそれを使用、なければカテゴリのデフォルトを使用
    const questionDifficulty = q.difficulty || categoryDefaultDifficulty[q.category] || 'beginner';
    return questionDifficulty === difficulty;
  });
};

// Get specific questions by their IDs (for review mode)
export const getQuizzesByIds = (questionIds: number[]): Question[] => {
  const questions = quizQuestions.filter((q) => questionIds.includes(q.id));

  // Shuffle questions using Fisher-Yates algorithm
  const shuffled = shuffleArray(questions);

  // Shuffle options for each question
  return shuffled.map(shuffleQuestionOptions);
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
