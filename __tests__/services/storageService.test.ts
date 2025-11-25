import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageService } from '../../services/storageService';
import { QuizResult, LearningStats } from '../../types';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

describe('storageService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('User Management', () => {
    it('should save user correctly', async () => {
      const mockUser = {
        id: 'user_123',
        name: 'テストユーザー',
        character: '🐶',
        createdAt: '2025-11-25T00:00:00.000Z',
      };

      await storageService.saveUser(mockUser);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        '@user',
        JSON.stringify(mockUser)
      );
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        '@current_user_id',
        'user_123'
      );
    });

    it('should get user correctly', async () => {
      const mockUser = {
        id: 'user_123',
        name: 'テストユーザー',
        character: '🐶',
        createdAt: '2025-11-25T00:00:00.000Z',
      };

      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(mockUser)
      );

      const result = await storageService.getUser();

      expect(result).toEqual(mockUser);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith('@user');
    });

    it('should return null when user does not exist', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

      const result = await storageService.getUser();

      expect(result).toBeNull();
    });
  });

  describe('Learning Stats - Streak Calculation', () => {
    beforeEach(() => {
      // Mock current user ID
      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        return Promise.resolve(null);
      });
    });

    it('should initialize stats with streak 1 for first quiz', async () => {
      const mockResult: QuizResult = {
        id: '1',
        userId: 'user_123',
        category: 'basic',
        score: 80,
        totalQuestions: 10,
        correctAnswers: [1, 2, 3, 4, 5, 6, 7, 8],
        incorrectAnswers: [9, 10],
        completedAt: '2025-11-25T10:00:00.000Z',
        timeSpent: 120,
      };

      await storageService.updateLearningStats(mockResult);

      const savedStats = (AsyncStorage.setItem as jest.Mock).mock.calls.find(
        (call) => call[0] === '@learning_stats_user_123'
      );

      expect(savedStats).toBeDefined();
      const stats = JSON.parse(savedStats[1]);
      expect(stats.currentStreak).toBe(1);
      expect(stats.longestStreak).toBe(1);
      expect(stats.totalQuizzesTaken).toBe(1);
    });

    it('should increment streak when studying on consecutive days', async () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      const existingStats: LearningStats = {
        totalQuizzesTaken: 5,
        totalCorrectAnswers: 40,
        totalQuestions: 50,
        currentStreak: 3,
        longestStreak: 5,
        lastStudyDate: yesterdayStr,
        dailyGoal: 5,
        categoryStats: {
          basic: {
            quizzesTaken: 5,
            averageScore: 80,
            bestScore: 90,
          },
        },
      };

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        if (key === '@learning_stats_user_123') {
          return Promise.resolve(JSON.stringify(existingStats));
        }
        return Promise.resolve(null);
      });

      const mockResult: QuizResult = {
        id: '2',
        userId: 'user_123',
        category: 'basic',
        score: 85,
        totalQuestions: 10,
        correctAnswers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        incorrectAnswers: [10],
        completedAt: new Date().toISOString(),
        timeSpent: 100,
      };

      await storageService.updateLearningStats(mockResult);

      const savedStats = (AsyncStorage.setItem as jest.Mock).mock.calls.find(
        (call) => call[0] === '@learning_stats_user_123'
      );

      const stats = JSON.parse(savedStats[1]);
      expect(stats.currentStreak).toBe(4); // Incremented from 3 to 4
      expect(stats.longestStreak).toBe(5); // Unchanged (still 5)
    });

    it('should maintain streak when studying on same day', async () => {
      const today = new Date().toISOString().split('T')[0];

      const existingStats: LearningStats = {
        totalQuizzesTaken: 2,
        totalCorrectAnswers: 15,
        totalQuestions: 20,
        currentStreak: 3,
        longestStreak: 5,
        lastStudyDate: today,
        dailyGoal: 5,
        categoryStats: {},
      };

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        if (key === '@learning_stats_user_123') {
          return Promise.resolve(JSON.stringify(existingStats));
        }
        return Promise.resolve(null);
      });

      const mockResult: QuizResult = {
        id: '3',
        userId: 'user_123',
        category: 'basic',
        score: 90,
        totalQuestions: 10,
        correctAnswers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        incorrectAnswers: [10],
        completedAt: new Date().toISOString(),
        timeSpent: 95,
      };

      await storageService.updateLearningStats(mockResult);

      const savedStats = (AsyncStorage.setItem as jest.Mock).mock.calls.find(
        (call) => call[0] === '@learning_stats_user_123'
      );

      const stats = JSON.parse(savedStats[1]);
      expect(stats.currentStreak).toBe(3); // Unchanged
      expect(stats.lastStudyDate).toBe(today);
    });

    it('should reset streak to 1 when gap is 2+ days', async () => {
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      const threeDaysAgoStr = threeDaysAgo.toISOString().split('T')[0];

      const existingStats: LearningStats = {
        totalQuizzesTaken: 10,
        totalCorrectAnswers: 80,
        totalQuestions: 100,
        currentStreak: 7,
        longestStreak: 10,
        lastStudyDate: threeDaysAgoStr,
        dailyGoal: 5,
        categoryStats: {},
      };

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        if (key === '@learning_stats_user_123') {
          return Promise.resolve(JSON.stringify(existingStats));
        }
        return Promise.resolve(null);
      });

      const mockResult: QuizResult = {
        id: '4',
        userId: 'user_123',
        category: 'basic',
        score: 75,
        totalQuestions: 10,
        correctAnswers: [1, 2, 3, 4, 5, 6, 7, 8],
        incorrectAnswers: [9, 10],
        completedAt: new Date().toISOString(),
        timeSpent: 110,
      };

      await storageService.updateLearningStats(mockResult);

      const savedStats = (AsyncStorage.setItem as jest.Mock).mock.calls.find(
        (call) => call[0] === '@learning_stats_user_123'
      );

      const stats = JSON.parse(savedStats[1]);
      expect(stats.currentStreak).toBe(1); // Reset to 1
      expect(stats.longestStreak).toBe(10); // Unchanged
    });

    it('should update longest streak when current exceeds it', async () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      const existingStats: LearningStats = {
        totalQuizzesTaken: 15,
        totalCorrectAnswers: 120,
        totalQuestions: 150,
        currentStreak: 9,
        longestStreak: 9,
        lastStudyDate: yesterdayStr,
        dailyGoal: 5,
        categoryStats: {},
      };

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        if (key === '@learning_stats_user_123') {
          return Promise.resolve(JSON.stringify(existingStats));
        }
        return Promise.resolve(null);
      });

      const mockResult: QuizResult = {
        id: '5',
        userId: 'user_123',
        category: 'basic',
        score: 88,
        totalQuestions: 10,
        correctAnswers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        incorrectAnswers: [10],
        completedAt: new Date().toISOString(),
        timeSpent: 105,
      };

      await storageService.updateLearningStats(mockResult);

      const savedStats = (AsyncStorage.setItem as jest.Mock).mock.calls.find(
        (call) => call[0] === '@learning_stats_user_123'
      );

      const stats = JSON.parse(savedStats[1]);
      expect(stats.currentStreak).toBe(10); // Incremented from 9 to 10
      expect(stats.longestStreak).toBe(10); // Updated to match current
    });
  });

  describe('Category Progress', () => {
    beforeEach(() => {
      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        return Promise.resolve(null);
      });
    });

    it('should create new category progress for first quiz in category', async () => {
      const mockResult: QuizResult = {
        id: '1',
        userId: 'user_123',
        category: 'vlive',
        score: 85,
        totalQuestions: 10,
        correctAnswers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        incorrectAnswers: [10],
        completedAt: new Date().toISOString(),
        timeSpent: 120,
      };

      await storageService.updateCategoryProgress(mockResult);

      const savedProgress = (AsyncStorage.setItem as jest.Mock).mock.calls.find(
        (call) => call[0] === '@category_progress_user_123'
      );

      const progress = JSON.parse(savedProgress[1]);
      expect(progress).toHaveLength(1);
      expect(progress[0]).toMatchObject({
        category: 'vlive',
        completedQuizzes: 1,
        bestScore: 85,
        averageScore: 85,
      });
    });

    it('should update existing category progress with weighted average', async () => {
      const existingProgress = [
        {
          category: 'vlive',
          level: 'beginner',
          isUnlocked: true,
          completedQuizzes: 2,
          totalQuizzes: 2,
          bestScore: 90,
          averageScore: 80,
        },
      ];

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        if (key === '@category_progress_user_123') {
          return Promise.resolve(JSON.stringify(existingProgress));
        }
        return Promise.resolve(null);
      });

      const mockResult: QuizResult = {
        id: '2',
        userId: 'user_123',
        category: 'vlive',
        score: 70,
        totalQuestions: 10,
        correctAnswers: [1, 2, 3, 4, 5, 6, 7],
        incorrectAnswers: [8, 9, 10],
        completedAt: new Date().toISOString(),
        timeSpent: 140,
      };

      await storageService.updateCategoryProgress(mockResult);

      const savedProgress = (AsyncStorage.setItem as jest.Mock).mock.calls.find(
        (call) => call[0] === '@category_progress_user_123'
      );

      const progress = JSON.parse(savedProgress[1]);
      expect(progress[0].completedQuizzes).toBe(3);
      // Weighted average: (80 * 2 + 70) / 3 = 76.67
      expect(progress[0].averageScore).toBeCloseTo(76.67, 1);
      expect(progress[0].bestScore).toBe(90); // Unchanged
    });
  });

  describe('Review Mode - Remove Incorrect Answers', () => {
    beforeEach(() => {
      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        return Promise.resolve(null);
      });
    });

    it('should remove correctly answered questions from incorrectAnswers', async () => {
      const existingResults: QuizResult[] = [
        {
          id: '1',
          userId: 'user_123',
          category: 'basic',
          score: 60,
          totalQuestions: 10,
          correctAnswers: [1, 2, 3, 4, 5, 6],
          incorrectAnswers: [7, 8, 9, 10],
          completedAt: '2025-11-24T10:00:00.000Z',
          timeSpent: 120,
        },
        {
          id: '2',
          userId: 'user_123',
          category: 'basic',
          score: 70,
          totalQuestions: 10,
          correctAnswers: [1, 2, 3, 4, 5, 6, 7],
          incorrectAnswers: [8, 9, 10],
          completedAt: '2025-11-24T11:00:00.000Z',
          timeSpent: 110,
        },
      ];

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key: string) => {
        if (key === '@current_user_id') {
          return Promise.resolve('user_123');
        }
        if (key === '@quiz_results_user_123') {
          return Promise.resolve(JSON.stringify(existingResults));
        }
        return Promise.resolve(null);
      });

      // User correctly answers questions 8 and 9 in review mode
      await storageService.removeIncorrectAnswersFromResults('basic', [8, 9]);

      const savedResults = (AsyncStorage.setItem as jest.Mock).mock.calls.find(
        (call) => call[0] === '@quiz_results_user_123'
      );

      const results = JSON.parse(savedResults[1]);
      expect(results[0].incorrectAnswers).toEqual([7, 10]); // 8, 9 removed
      expect(results[1].incorrectAnswers).toEqual([10]); // 8, 9 removed
    });
  });
});
