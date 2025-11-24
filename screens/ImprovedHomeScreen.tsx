import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { SpeechButton } from '../components/SpeechButton';
import { TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { storageService } from '../services/storageService';
import { LearningStats, CategoryProgress, QuizCategory } from '../types';
import { CATEGORY_CONFIGS } from '../data/categoryConfig';

interface ImprovedHomeScreenProps {
  onStartQuiz: () => void;
  onCategorySelect?: (category: QuizCategory) => void;
  onNavigateToProfile?: () => void;
  onNavigateToSettings?: () => void;
  userName?: string;
}

export const ImprovedHomeScreen: React.FC<ImprovedHomeScreenProps> = ({
  onStartQuiz,
  onCategorySelect,
  onNavigateToProfile,
  onNavigateToSettings,
  userName = 'ユーザー',
}) => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [stats, setStats] = useState<LearningStats | null>(null);
  const [categoryProgress, setCategoryProgress] = useState<CategoryProgress[]>([]);
  const [todayQuizCount, setTodayQuizCount] = useState(0);

  const loadData = React.useCallback(async () => {
    const learningStats = await storageService.getLearningStats();
    setStats(learningStats);

    const progress = await storageService.getCategoryProgress();
    setCategoryProgress(progress);

    // 오늘 완료한 총 문제 수 계산
    const today = new Date().toISOString().split('T')[0];
    const allResults = await storageService.getQuizResults();
    const todayResults = allResults.filter(result => {
      const resultDate = new Date(result.completedAt).toISOString().split('T')[0];
      return resultDate === today;
    });
    // 퀴즈 세션 개수가 아니라 총 문제 수를 계산
    const totalQuestionsToday = todayResults.reduce((sum, result) => sum + result.totalQuestions, 0);
    setTodayQuizCount(totalQuestionsToday);
  }, []);

  // 화면이 포커스될 때마다 데이터 다시 로드
  useFocusEffect(
    React.useCallback(() => {
      if (user) {
        loadData();
      } else {
        setStats(null);
        setCategoryProgress([]);
        setTodayQuizCount(0);
      }
    }, [user, loadData])
  );

  const isCategoryUnlocked = (categoryId: QuizCategory): boolean => {
    const categoryConfig = CATEGORY_CONFIGS.find((c) => c.id === categoryId);

    // If no unlock requirement, it's always unlocked
    if (!categoryConfig?.unlockRequirement) {
      return true;
    }

    const requirement = categoryConfig.unlockRequirement;

    // Check if required category is completed
    if (requirement.requiredCategory) {
      const requiredProgress = categoryProgress.find(
        (p) => p.category === requirement.requiredCategory
      );

      if (!requiredProgress) return false;

      if (
        requiredProgress.completedQuizzes < requirement.minimumQuizzes ||
        requiredProgress.bestScore < requirement.minimumScore
      ) {
        return false;
      }
    }

    return true;
  };

  const getCategoryProgressData = (categoryId: QuizCategory) => {
    return categoryProgress.find((p) => p.category === categoryId);
  };

  const handleCategoryPress = (categoryId: QuizCategory) => {
    const unlocked = isCategoryUnlocked(categoryId);

    if (!unlocked) {
      const categoryConfig = CATEGORY_CONFIGS.find((c) => c.id === categoryId);
      const requirement = categoryConfig?.unlockRequirement;

      if (requirement?.requiredCategory) {
        const reqConfig = CATEGORY_CONFIGS.find((c) => c.id === requirement.requiredCategory);
        Alert.alert(
          'カテゴリーがロックされています',
          `「${reqConfig?.titleJa}」で${requirement.minimumQuizzes}個以上のクイズを${requirement.minimumScore}点以上で完了してください。`
        );
      }
      return;
    }

    if (onCategorySelect) {
      onCategorySelect(categoryId);
    } else {
      onStartQuiz();
    }
  };

  const dailyGoal = stats?.dailyGoal || 5;
  const todayProgress = Math.min((todayQuizCount / dailyGoal) * 100, 100);
  const currentStreak = stats?.currentStreak || 0;
  const totalScore = stats?.totalCorrectAnswers || 0;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Bar with Stats */}
        <View style={styles.topBar}>
          <View style={styles.topBarLeft}>
            <View style={[styles.statPill, { backgroundColor: colors.sage[100] }]}>
              <Text style={styles.statPillIcon}>⭐</Text>
              <Text style={[styles.statPillText, { color: colors.sage[700] }]}>
                {totalScore}
              </Text>
            </View>
            <View style={[styles.statPill, { backgroundColor: colors.coral[100] }]}>
              <Text style={styles.statPillIcon}>🔥</Text>
              <Text style={[styles.statPillText, { color: colors.coral[700] }]}>
                {currentStreak}日
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={onNavigateToSettings}
            style={[styles.iconButton, { backgroundColor: colors.background.cream }]}
          >
            <Text style={styles.iconText}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome Section with Profile */}
        <TouchableOpacity
          style={styles.header}
          onPress={onNavigateToProfile}
          activeOpacity={0.8}
        >
          <View style={[styles.avatar, { backgroundColor: colors.sage[100] }]}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View style={styles.headerText}>
            <Text style={[styles.greeting, { color: colors.primary[600] }]}>
              おはようございます
            </Text>
            <Text style={[styles.userName, { color: colors.primary[800] }]}>
              {userName}さん
            </Text>
          </View>
        </TouchableOpacity>

        {/* Today's Progress Card */}
        <Card style={styles.progressCard} variant="elevated">
          <Text style={[styles.cardTitle, { color: colors.primary[800] }]}>
            今日の学習進捗
          </Text>
          <ProgressBar progress={todayProgress} label="完了率" showPercentage={true} />

          {currentStreak >= 3 && (
            <View style={[styles.streakBanner, { backgroundColor: colors.sage[50] }]}>
              <Text style={styles.streakIcon}>🔥</Text>
              <Text style={[styles.streakText, { color: colors.sage[700] }]}>
                {currentStreak}日連続で学習中！素晴らしい！
              </Text>
            </View>
          )}
        </Card>

        {/* Main Action Button */}
        <View style={styles.mainActionContainer}>
          <Button
            title="クイズを始める"
            onPress={onStartQuiz}
            size="lg"
            variant="primary"
            fullWidth
          />
        </View>

        {/* Learning Categories */}
        <View style={styles.categoriesSection}>
          <Text style={[styles.sectionTitle, { color: colors.primary[800] }]}>
            学習カテゴリー
          </Text>

          {CATEGORY_CONFIGS.map((category) => {
            const unlocked = isCategoryUnlocked(category.id);
            const progressData = getCategoryProgressData(category.id);
            const progressPercentage = progressData
              ? Math.round((progressData.completedQuizzes / 10) * 100)
              : 0;

            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  { backgroundColor: colors.background.cream },
                  !unlocked && styles.lockedCategory,
                ]}
                onPress={() => handleCategoryPress(category.id)}
                activeOpacity={0.7}
              >
                <View style={styles.categoryHeader}>
                  <View style={styles.categoryLeft}>
                    <Text style={styles.categoryIcon}>{category.icon}</Text>
                    <View style={styles.categoryText}>
                      <Text style={[styles.categoryTitleJa, { color: colors.primary[600] }]}>
                        {category.titleJa}
                      </Text>
                      <View style={styles.categoryTitleWithSpeech}>
                        <Text style={[styles.categoryTitleKo, { color: colors.primary[800] }]}>
                          {category.titleKo}
                        </Text>
                        <SpeechButton text={category.titleKo} size="sm" />
                      </View>
                      <Text
                        style={[
                          styles.categoryDescription,
                          { color: colors.primary[500] },
                        ]}
                      >
                        {category.description}
                      </Text>
                    </View>
                  </View>

                  {!unlocked && (
                    <View style={styles.lockIcon}>
                      <Text style={styles.lockText}>🔒</Text>
                    </View>
                  )}

                  {unlocked && progressData && (
                    <View style={styles.categoryStats}>
                      <Text
                        style={[styles.categoryScore, { color: colors.sage[600] }]}
                      >
                        {progressData.bestScore}点
                      </Text>
                    </View>
                  )}
                </View>

                {unlocked && progressData && progressData.completedQuizzes > 0 && (
                  <View style={styles.categoryProgress}>
                    <View
                      style={[
                        styles.categoryProgressBar,
                        { backgroundColor: colors.primary[100] },
                      ]}
                    >
                      <View
                        style={[
                          styles.categoryProgressFill,
                          {
                            width: `${Math.min(progressPercentage, 100)}%`,
                            backgroundColor: colors.sage[500],
                          },
                        ]}
                      />
                    </View>
                    <Text style={[styles.categoryProgressText, { color: colors.primary[500] }]}>
                      {progressData.completedQuizzes}/10 完了
                    </Text>
                  </View>
                )}

                {!unlocked && category.unlockRequirement && (
                  <View
                    style={[
                      styles.unlockRequirement,
                      { backgroundColor: colors.primary[50] },
                    ]}
                  >
                    <Text
                      style={[styles.unlockRequirementText, { color: colors.primary[600] }]}
                    >
                      前のカテゴリーを{category.unlockRequirement.minimumScore}点以上で
                      {category.unlockRequirement.minimumQuizzes}回完了
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.lg,
    paddingBottom: SPACING['3xl'],
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  topBarLeft: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 9999,
    gap: SPACING.xs,
    ...SHADOWS.soft,
  },
  statPillIcon: {
    fontSize: 16,
  },
  statPillText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '700',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.soft,
  },
  iconText: {
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xl,
    gap: SPACING.md,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 30,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: TYPOGRAPHY.fontSize.base,
    marginBottom: 2,
  },
  userName: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
  },
  progressCard: {
    marginBottom: SPACING.lg,
  },
  cardTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  streakBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.md,
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    gap: SPACING.sm,
  },
  streakIcon: {
    fontSize: 20,
  },
  streakText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '600',
    flex: 1,
  },
  mainActionContainer: {
    marginBottom: SPACING.xl,
  },
  categoriesSection: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: '700',
    marginBottom: SPACING.md,
  },
  categoryCard: {
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.md,
    ...SHADOWS.soft,
  },
  lockedCategory: {
    opacity: 0.6,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  categoryLeft: {
    flexDirection: 'row',
    flex: 1,
    gap: SPACING.md,
  },
  categoryIcon: {
    fontSize: 36,
  },
  categoryText: {
    flex: 1,
  },
  categoryTitleJa: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    marginBottom: 2,
  },
  categoryTitleWithSpeech: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
    marginBottom: SPACING.xs,
  },
  categoryTitleKo: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '700',
  },
  categoryDescription: {
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  lockIcon: {
    marginLeft: SPACING.sm,
  },
  lockText: {
    fontSize: 24,
  },
  categoryStats: {
    alignItems: 'flex-end',
  },
  categoryScore: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '700',
  },
  categoryProgress: {
    marginTop: SPACING.md,
  },
  categoryProgressBar: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: SPACING.xs,
  },
  categoryProgressFill: {
    height: '100%',
    borderRadius: 3,
  },
  categoryProgressText: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    textAlign: 'right',
  },
  unlockRequirement: {
    marginTop: SPACING.sm,
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.sm,
  },
  unlockRequirementText: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    textAlign: 'center',
  },
});
