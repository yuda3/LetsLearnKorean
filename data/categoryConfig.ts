import { CategoryConfig, QuizCategory, UserLevel } from '../types';

export const CATEGORY_CONFIGS: CategoryConfig[] = [
  {
    id: 'basic',
    titleJa: '基本フレーズ',
    titleKo: '기본 표현',
    icon: '✨',
    description: 'よく使う基本的な表現',
    difficulty: 'beginner',
    // No unlock requirement - always unlocked
  },
  {
    id: 'gratitude',
    titleJa: '感謝の表現',
    titleKo: '감사 표현',
    icon: '💝',
    description: 'お礼を伝える表現',
    difficulty: 'beginner',
    unlockRequirement: {
      requiredCategory: 'basic',
      minimumScore: 60,
      minimumQuizzes: 2,
    },
  },
  {
    id: 'daily',
    titleJa: '日常会話',
    titleKo: '일상 회화',
    icon: '💬',
    description: '日常でよく使う会話',
    difficulty: 'beginner',
    unlockRequirement: {
      requiredCategory: 'gratitude',
      minimumScore: 60,
      minimumQuizzes: 2,
    },
  },
  {
    id: 'numbers',
    titleJa: '数字',
    titleKo: '숫자',
    icon: '🔢',
    description: '数字の数え方',
    difficulty: 'beginner',
    unlockRequirement: {
      requiredCategory: 'daily',
      minimumScore: 60,
      minimumQuizzes: 2,
    },
  },
  {
    id: 'travel',
    titleJa: '旅行会話',
    titleKo: '여행 회화',
    icon: '🗺️',
    description: '旅行で使える表現',
    difficulty: 'intermediate',
    unlockRequirement: {
      requiredCategory: 'numbers',
      minimumScore: 70,
      minimumQuizzes: 3,
    },
  },
  {
    id: 'shopping',
    titleJa: 'ショッピング',
    titleKo: '쇼핑',
    icon: '🛍️',
    description: '買い物で使える表現',
    difficulty: 'intermediate',
    unlockRequirement: {
      requiredCategory: 'travel',
      minimumScore: 70,
      minimumQuizzes: 3,
    },
  },
  {
    id: 'restaurant',
    titleJa: 'レストラン',
    titleKo: '레스토랑',
    icon: '🍜',
    description: 'レストランで使える表現',
    difficulty: 'intermediate',
    unlockRequirement: {
      requiredCategory: 'shopping',
      minimumScore: 70,
      minimumQuizzes: 3,
    },
  },
  {
    id: 'emergency',
    titleJa: '緊急時',
    titleKo: '긴급 상황',
    icon: '🚨',
    description: '緊急時に使える表現',
    difficulty: 'advanced',
    unlockRequirement: {
      requiredCategory: 'restaurant',
      minimumScore: 80,
      minimumQuizzes: 5,
    },
  },
];

export const getCategoryConfig = (categoryId: QuizCategory): CategoryConfig | undefined => {
  return CATEGORY_CONFIGS.find((cat) => cat.id === categoryId);
};

export const getCategoriesByDifficulty = (level: UserLevel): CategoryConfig[] => {
  return CATEGORY_CONFIGS.filter((cat) => cat.difficulty === level);
};
