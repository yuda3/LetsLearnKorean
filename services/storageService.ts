import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, QuizResult, LearningStats, ThemeMode, CategoryProgress, OnboardingStatus, Badge } from '../types';

const KEYS = {
  USER: '@user',
  QUIZ_RESULTS: '@quiz_results',
  LEARNING_STATS: '@learning_stats',
  THEME_MODE: '@theme_mode',
  CATEGORY_PROGRESS: '@category_progress',
  ONBOARDING_STATUS: '@onboarding_status',
  BADGES: '@badges',
};

export const storageService = {
  // User management
  async saveUser(user: User): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.USER, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user:', error);
      throw error;
    }
  },

  async getUser(): Promise<User | null> {
    try {
      const userData = await AsyncStorage.getItem(KEYS.USER);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  },

  async removeUser(): Promise<void> {
    try {
      await AsyncStorage.removeItem(KEYS.USER);
    } catch (error) {
      console.error('Error removing user:', error);
      throw error;
    }
  },

  // Quiz results management
  async saveQuizResult(result: QuizResult): Promise<void> {
    try {
      const existingResults = await this.getQuizResults();
      const updatedResults = [...existingResults, result];
      await AsyncStorage.setItem(KEYS.QUIZ_RESULTS, JSON.stringify(updatedResults));
    } catch (error) {
      console.error('Error saving quiz result:', error);
      throw error;
    }
  },

  async getQuizResults(): Promise<QuizResult[]> {
    try {
      const resultsData = await AsyncStorage.getItem(KEYS.QUIZ_RESULTS);
      return resultsData ? JSON.parse(resultsData) : [];
    } catch (error) {
      console.error('Error getting quiz results:', error);
      return [];
    }
  },

  async getQuizResultsByCategory(category: string): Promise<QuizResult[]> {
    try {
      const results = await this.getQuizResults();
      return results.filter((result) => result.category === category);
    } catch (error) {
      console.error('Error getting quiz results by category:', error);
      return [];
    }
  },

  // Learning stats management
  async saveLearningStats(stats: LearningStats): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.LEARNING_STATS, JSON.stringify(stats));
    } catch (error) {
      console.error('Error saving learning stats:', error);
      throw error;
    }
  },

  async getLearningStats(): Promise<LearningStats | null> {
    try {
      const statsData = await AsyncStorage.getItem(KEYS.LEARNING_STATS);
      return statsData ? JSON.parse(statsData) : null;
    } catch (error) {
      console.error('Error getting learning stats:', error);
      return null;
    }
  },

  async updateLearningStats(result: QuizResult): Promise<void> {
    try {
      const stats = await this.getLearningStats();
      const today = new Date().toISOString().split('T')[0];

      if (!stats) {
        // Create initial stats
        const newStats: LearningStats = {
          totalQuizzesTaken: 1,
          totalCorrectAnswers: result.correctAnswers.length,
          totalQuestions: result.totalQuestions,
          currentStreak: 1,
          longestStreak: 1,
          lastStudyDate: today,
          categoryStats: {
            [result.category]: {
              quizzesTaken: 1,
              averageScore: result.score,
              bestScore: result.score,
            },
          },
        };
        await this.saveLearningStats(newStats);
        return;
      }

      // Update existing stats
      const lastStudyDate = new Date(stats.lastStudyDate);
      const todayDate = new Date(today);
      const daysDiff = Math.floor(
        (todayDate.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      let newStreak = stats.currentStreak;
      if (daysDiff === 1) {
        newStreak += 1;
      } else if (daysDiff > 1) {
        newStreak = 1;
      }

      const categoryStats = stats.categoryStats[result.category];
      const updatedCategoryStats = categoryStats
        ? {
            quizzesTaken: categoryStats.quizzesTaken + 1,
            averageScore:
              (categoryStats.averageScore * categoryStats.quizzesTaken + result.score) /
              (categoryStats.quizzesTaken + 1),
            bestScore: Math.max(categoryStats.bestScore, result.score),
          }
        : {
            quizzesTaken: 1,
            averageScore: result.score,
            bestScore: result.score,
          };

      const updatedStats: LearningStats = {
        totalQuizzesTaken: stats.totalQuizzesTaken + 1,
        totalCorrectAnswers: stats.totalCorrectAnswers + result.correctAnswers.length,
        totalQuestions: stats.totalQuestions + result.totalQuestions,
        currentStreak: newStreak,
        longestStreak: Math.max(stats.longestStreak, newStreak),
        lastStudyDate: today,
        categoryStats: {
          ...stats.categoryStats,
          [result.category]: updatedCategoryStats,
        },
      };

      await this.saveLearningStats(updatedStats);
    } catch (error) {
      console.error('Error updating learning stats:', error);
      throw error;
    }
  },

  // Theme management
  async saveThemeMode(mode: ThemeMode): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.THEME_MODE, mode);
    } catch (error) {
      console.error('Error saving theme mode:', error);
      throw error;
    }
  },

  async getThemeMode(): Promise<ThemeMode> {
    try {
      const mode = await AsyncStorage.getItem(KEYS.THEME_MODE);
      return (mode as ThemeMode) || 'light';
    } catch (error) {
      console.error('Error getting theme mode:', error);
      return 'light';
    }
  },

  // Clear all data
  async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  },

  // Category progress management
  async getCategoryProgress(): Promise<CategoryProgress[]> {
    try {
      const progressData = await AsyncStorage.getItem(KEYS.CATEGORY_PROGRESS);
      return progressData ? JSON.parse(progressData) : [];
    } catch (error) {
      console.error('Error getting category progress:', error);
      return [];
    }
  },

  async saveCategoryProgress(progress: CategoryProgress[]): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.CATEGORY_PROGRESS, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving category progress:', error);
      throw error;
    }
  },

  async updateCategoryProgress(result: QuizResult): Promise<void> {
    try {
      const progress = await this.getCategoryProgress();
      const categoryIndex = progress.findIndex(
        (p) => p.category === result.category
      );

      if (categoryIndex >= 0) {
        const existing = progress[categoryIndex];
        progress[categoryIndex] = {
          ...existing,
          completedQuizzes: existing.completedQuizzes + 1,
          totalQuizzes: existing.totalQuizzes + 1,
          bestScore: Math.max(existing.bestScore, result.score),
          averageScore:
            (existing.averageScore * existing.completedQuizzes + result.score) /
            (existing.completedQuizzes + 1),
        };
      } else {
        progress.push({
          category: result.category,
          level: 'beginner',
          isUnlocked: true,
          completedQuizzes: 1,
          totalQuizzes: 1,
          bestScore: result.score,
          averageScore: result.score,
        });
      }

      await this.saveCategoryProgress(progress);
    } catch (error) {
      console.error('Error updating category progress:', error);
      throw error;
    }
  },

  // Onboarding management
  async getOnboardingStatus(): Promise<OnboardingStatus> {
    try {
      const statusData = await AsyncStorage.getItem(KEYS.ONBOARDING_STATUS);
      return statusData
        ? JSON.parse(statusData)
        : { completed: false, currentStep: 0 };
    } catch (error) {
      console.error('Error getting onboarding status:', error);
      return { completed: false, currentStep: 0 };
    }
  },

  async saveOnboardingStatus(status: OnboardingStatus): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.ONBOARDING_STATUS, JSON.stringify(status));
    } catch (error) {
      console.error('Error saving onboarding status:', error);
      throw error;
    }
  },

  async completeOnboarding(): Promise<void> {
    try {
      const status: OnboardingStatus = {
        completed: true,
        currentStep: 4,
        completedAt: new Date().toISOString(),
      };
      await this.saveOnboardingStatus(status);
    } catch (error) {
      console.error('Error completing onboarding:', error);
      throw error;
    }
  },

  // Badges management
  async getBadges(): Promise<Badge[]> {
    try {
      const badgesData = await AsyncStorage.getItem(KEYS.BADGES);
      return badgesData ? JSON.parse(badgesData) : [];
    } catch (error) {
      console.error('Error getting badges:', error);
      return [];
    }
  },

  async saveBadges(badges: Badge[]): Promise<void> {
    try {
      await AsyncStorage.setItem(KEYS.BADGES, JSON.stringify(badges));
    } catch (error) {
      console.error('Error saving badges:', error);
      throw error;
    }
  },

  async unlockBadge(badgeId: string): Promise<void> {
    try {
      const badges = await this.getBadges();
      const badgeIndex = badges.findIndex((b) => b.id === badgeId);

      if (badgeIndex >= 0 && !badges[badgeIndex].unlockedAt) {
        badges[badgeIndex].unlockedAt = new Date().toISOString();
        await this.saveBadges(badges);
      }
    } catch (error) {
      console.error('Error unlocking badge:', error);
      throw error;
    }
  },
};
