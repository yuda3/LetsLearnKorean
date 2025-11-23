import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { TYPOGRAPHY, SPACING, SHADOWS, COLORS } from '../constants/theme';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { storageService } from '../services/storageService';
import { LearningStats } from '../types';

interface HomeScreenProps {
  onStartQuiz: () => void;
  onReview: () => void;
  userName?: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartQuiz,
  onReview,
  userName = 'ユーザー',
}) => {
  const { logout } = useAuth();
  const { colors, mode, toggleTheme } = useTheme();
  const [stats, setStats] = useState<LearningStats | null>(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const learningStats = await storageService.getLearningStats();
    setStats(learningStats);
  };

  const todayProgress = stats ? Math.min((stats.totalQuizzesTaken / 5) * 100, 100) : 0;
  const weeklyGoal = 5;
  const completedDays = stats ? Math.min(stats.totalQuizzesTaken, weeklyGoal) : 0;
  const currentStreak = stats?.currentStreak || 0;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background.ivory }]}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Theme Toggle and Logout */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={toggleTheme} style={[styles.iconButton, { backgroundColor: colors.background.cream }]}>
            <Text style={styles.iconText}>{mode === 'dark' ? '☀️' : '🌙'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout} style={[styles.iconButton, { backgroundColor: colors.background.cream }]}>
            <Text style={styles.iconText}>👋</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome Section */}
        <View style={styles.header}>
          <Text style={[styles.greeting, { color: colors.primary[600] }]}>おはようございます、</Text>
          <Text style={[styles.userName, { color: colors.primary[800] }]}>{userName}さん</Text>
          <Text style={[styles.subtitle, { color: colors.primary[500] }]}>
            今日も韓国語の旅を始めましょう
          </Text>
        </View>

        {/* Today's Progress Card */}
        <Card style={styles.progressCard} variant="elevated">
          <Text style={[styles.cardTitle, { color: colors.primary[800] }]}>今日の学習進捗</Text>
          <ProgressBar
            progress={todayProgress}
            label="完了率"
            showPercentage={true}
          />
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={[styles.statValue, { color: colors.sage[600] }]}>{currentStreak}</Text>
              <Text style={[styles.statLabel, { color: colors.primary[500] }]}>日連続</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: colors.primary[200] }]} />
            <View style={styles.stat}>
              <Text style={[styles.statValue, { color: colors.sage[600] }]}>{completedDays}/{weeklyGoal}</Text>
              <Text style={[styles.statLabel, { color: colors.primary[500] }]}>週間目標</Text>
            </View>
          </View>
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
          <Text style={[styles.sectionTitle, { color: colors.primary[800] }]}>学習カテゴリー</Text>

          <View style={styles.categoryGrid}>
            <CategoryCard
              title="旅行会話"
              subtitle="ソウルのグルメで注文"
              icon="🍜"
              color={COLORS.sage[100]}
            />
            <CategoryCard
              title="日常会話"
              subtitle="道を尋ねる"
              icon="🗺️"
              color={COLORS.mint[100]}
            />
            <CategoryCard
              title="感謝の表現"
              subtitle="お礼を伝える"
              icon="💝"
              color={COLORS.coral[100]}
            />
            <CategoryCard
              title="基本フレーズ"
              subtitle="よく使う表現"
              icon="✨"
              color={COLORS.primary[100]}
            />
          </View>
        </View>

        {/* Quick Review Section */}
        <Card style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Text style={[styles.cardTitle, { color: colors.primary[800] }]}>復習が必要な単語</Text>
            <Text style={[styles.reviewCount, { color: colors.coral[500] }]}>12個</Text>
          </View>
          <Text style={[styles.reviewDescription, { color: colors.primary[600] }]}>
            忘れる前に復習しましょう
          </Text>
          <View style={styles.reviewButtonContainer}>
            <Button
              title="復習を始める"
              onPress={onReview}
              variant="outline"
              fullWidth
            />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

interface CategoryCardProps {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  subtitle,
  icon,
  color,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={[styles.categoryCard, { backgroundColor: color }]}>
      <Text style={styles.categoryIcon}>{icon}</Text>
      <Text style={[styles.categoryTitle, { color: colors.primary[800] }]}>{title}</Text>
      <Text style={[styles.categorySubtitle, { color: colors.primary[600] }]}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.lg,
    paddingBottom: SPACING['3xl'],
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
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
    marginBottom: SPACING.xl,
  },
  greeting: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    marginBottom: SPACING.xs,
  },
  userName: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
    lineHeight: 24,
  },
  progressCard: {
    marginBottom: SPACING.lg,
  },
  cardTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  statLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  divider: {
    width: 1,
    height: 40,
  },
  mainActionContainer: {
    marginBottom: SPACING.xl,
  },
  categoriesSection: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    padding: SPACING.md,
    borderRadius: 12,
    ...SHADOWS.soft,
    marginBottom: SPACING.sm,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: SPACING.sm,
  },
  categoryTitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  categorySubtitle: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    lineHeight: 18,
  },
  reviewCard: {
    marginBottom: SPACING.lg,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  reviewCount: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '700',
  },
  reviewDescription: {
    fontSize: TYPOGRAPHY.fontSize.base,
    marginBottom: SPACING.md,
  },
  reviewButtonContainer: {
    marginTop: SPACING.sm,
  },
});
