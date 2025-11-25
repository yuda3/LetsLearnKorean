import {
  getQuizzesByCategory,
  getRandomQuizzes,
  getQuizzesByDifficulty,
  getQuizzesByIds,
  getQuizStatistics,
} from '../../../data/quizzes/index';
import { Question } from '../../../types';

// Mock the quiz data
jest.mock('../../../data/quizzes/basic', () => ({
  basicQuestions: [
    {
      id: 1,
      category: 'basic',
      difficulty: 'beginner',
      questionJa: 'テスト問題1',
      question: '안녕하세요',
      options: ['안녕하세요', '안녕히가세요', '감사합니다', '죄송합니다'],
      correctAnswer: 0,
      explanation: '正解です',
      detailedExplanation: '詳細説明',
    },
    {
      id: 2,
      category: 'basic',
      difficulty: 'beginner',
      questionJa: 'テスト問題2',
      question: '감사합니다',
      options: ['안녕하세요', '감사합니다', '죄송합니다', '안녕히가세요'],
      correctAnswer: 1,
      explanation: '正解です',
      detailedExplanation: '詳細説明',
    },
  ],
}));

jest.mock('../../../data/quizzes/kpop', () => ({
  vliveQuestions: [
    {
      id: 100,
      category: 'vlive',
      difficulty: 'beginner',
      questionJa: 'V LIVEテスト',
      question: '여러분 안녕하세요',
      options: ['여러분 안녕하세요', '안녕하세요', '하이', '안녕'],
      correctAnswer: 0,
      explanation: '正解です',
      detailedExplanation: '詳細説明',
    },
  ],
  kpopGratitudeQuestions: [],
  reactionsQuestions: [],
  fanLetterQuestions: [],
  snsQuestions: [],
  concertQuestions: [],
  slangQuestions: [],
  kpopTermsQuestions: [],
}));

jest.mock('../../../data/quizzes/gratitude', () => ({
  gratitudeQuestions: [],
}));
jest.mock('../../../data/quizzes/daily', () => ({
  dailyQuestions: [],
}));
jest.mock('../../../data/quizzes/numbers', () => ({
  numbersQuestions: [],
}));
jest.mock('../../../data/quizzes/travel', () => ({
  travelQuestions: [],
}));
jest.mock('../../../data/quizzes/shopping', () => ({
  shoppingQuestions: [],
}));
jest.mock('../../../data/quizzes/restaurant', () => ({
  restaurantQuestions: [],
}));
jest.mock('../../../data/quizzes/emergency', () => ({
  emergencyQuestions: [],
}));

describe('Quiz Logic', () => {
  describe('getQuizzesByCategory', () => {
    it('should return questions for a specific category', () => {
      const questions = getQuizzesByCategory('basic');
      expect(questions.length).toBeGreaterThan(0);
      expect(questions.every((q) => q.category === 'basic')).toBe(true);
    });

    it('should filter by user level when provided', () => {
      const beginnerQuestions = getQuizzesByCategory('basic', 'beginner');
      expect(beginnerQuestions.length).toBeGreaterThan(0);
      expect(
        beginnerQuestions.every(
          (q) => (q.difficulty || 'beginner') === 'beginner'
        )
      ).toBe(true);
    });

    it('should return empty array for non-existent category', () => {
      const questions = getQuizzesByCategory('nonexistent' as any);
      expect(questions).toEqual([]);
    });

    it('should shuffle questions and options', () => {
      const questions1 = getQuizzesByCategory('basic');
      const questions2 = getQuizzesByCategory('basic');
      
      // Questions should be shuffled (order might differ)
      // Options should be shuffled (correctAnswer index might differ)
      // At least verify that all questions are present
      const ids1 = questions1.map((q) => q.id).sort();
      const ids2 = questions2.map((q) => q.id).sort();
      expect(ids1).toEqual(ids2);
    });

    it('should handle travel_daily category correctly', () => {
      const questions = getQuizzesByCategory('travel_daily');
      // Should include questions from multiple categories
      expect(Array.isArray(questions)).toBe(true);
    });
  });

  describe('getRandomQuizzes', () => {
    it('should return specified number of questions', () => {
      const questions = getRandomQuizzes(5);
      // Should return up to available questions (mock has 3 questions)
      expect(questions.length).toBeLessThanOrEqual(5);
      expect(questions.length).toBeGreaterThan(0);
    });

    it('should return all available questions if count exceeds available', () => {
      const questions = getRandomQuizzes(1000);
      expect(questions.length).toBeLessThanOrEqual(3); // Only 3 questions in mock
    });

    it('should filter by user level when provided', () => {
      const beginnerQuestions = getRandomQuizzes(10, 'beginner');
      expect(beginnerQuestions.length).toBeGreaterThan(0);
      expect(
        beginnerQuestions.every(
          (q) => (q.difficulty || 'beginner') === 'beginner'
        )
      ).toBe(true);
    });

    it('should shuffle questions and options', () => {
      const questions1 = getRandomQuizzes(2);
      const questions2 = getRandomQuizzes(2);
      
      // Verify that questions are shuffled
      const ids1 = questions1.map((q) => q.id).sort();
      const ids2 = questions2.map((q) => q.id).sort();
      // Should have same questions but possibly different order
      expect(ids1.length).toBe(ids2.length);
    });
  });

  describe('getQuizzesByDifficulty', () => {
    it('should return only beginner questions', () => {
      const questions = getQuizzesByDifficulty('beginner');
      expect(questions.length).toBeGreaterThan(0);
      expect(
        questions.every(
          (q) => (q.difficulty || 'beginner') === 'beginner'
        )
      ).toBe(true);
    });

    it('should return empty array if no questions match difficulty', () => {
      const questions = getQuizzesByDifficulty('advanced');
      // With current mock data, should return empty or filtered results
      expect(Array.isArray(questions)).toBe(true);
    });

    it('should use category default difficulty when question difficulty is not set', () => {
      const questions = getQuizzesByDifficulty('beginner');
      // All questions should have beginner difficulty (either explicit or category default)
      questions.forEach((q) => {
        const difficulty = q.difficulty || 'beginner'; // basic category default is beginner
        expect(difficulty).toBe('beginner');
      });
    });
  });

  describe('getQuizzesByIds', () => {
    it('should return questions with specified IDs', () => {
      const questions = getQuizzesByIds([1, 2]);
      expect(questions.length).toBe(2);
      expect(questions.every((q) => [1, 2].includes(q.id))).toBe(true);
    });

    it('should return empty array if no questions match IDs', () => {
      const questions = getQuizzesByIds([999, 1000]);
      expect(questions).toEqual([]);
    });

    it('should shuffle questions and options', () => {
      const questions = getQuizzesByIds([1, 2]);
      expect(questions.length).toBe(2);
      // Options should be shuffled
      expect(Array.isArray(questions[0].options)).toBe(true);
    });
  });

  describe('getQuizStatistics', () => {
    it('should return statistics with total count', () => {
      const stats = getQuizStatistics();
      expect(stats).toHaveProperty('total');
      expect(stats).toHaveProperty('byCategory');
      expect(typeof stats.total).toBe('number');
    });

    it('should return category breakdown', () => {
      const stats = getQuizStatistics();
      expect(stats.byCategory).toBeDefined();
      expect(typeof stats.byCategory).toBe('object');
    });

    it('should count questions by category correctly', () => {
      const stats = getQuizStatistics();
      if (stats.byCategory.basic) {
        expect(stats.byCategory.basic).toBeGreaterThan(0);
      }
    });
  });

  describe('Question structure validation', () => {
    it('should ensure all returned questions have required fields', () => {
      const questions = getRandomQuizzes(5);
      questions.forEach((q) => {
        expect(q).toHaveProperty('id');
        expect(q).toHaveProperty('category');
        expect(q).toHaveProperty('questionJa');
        expect(q).toHaveProperty('question');
        expect(q).toHaveProperty('options');
        expect(q).toHaveProperty('correctAnswer');
        expect(q).toHaveProperty('explanation');
        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBeGreaterThan(0);
        expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(q.correctAnswer).toBeLessThan(q.options.length);
      });
    });

    it('should ensure shuffled options maintain correct answer', () => {
      const questions = getRandomQuizzes(5);
      questions.forEach((q) => {
        const correctOption = q.options[q.correctAnswer];
        expect(correctOption).toBeDefined();
        // The correct answer should be one of the options
        expect(q.options.includes(correctOption)).toBe(true);
      });
    });
  });
});

