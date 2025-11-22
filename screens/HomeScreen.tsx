import React from 'react';
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
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS } from '../constants/theme';

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
  // Mock data - replace with actual data later
  const todayProgress = 65;
  const weeklyGoal = 5;
  const completedDays = 3;
  const currentStreak = 7;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>おはようございます、</Text>
          <Text style={styles.userName}>{userName}さん</Text>
          <Text style={styles.subtitle}>
            今日も韓国語の旅を始めましょう
          </Text>
        </View>

        {/* Today's Progress Card */}
        <Card style={styles.progressCard} variant="elevated">
          <Text style={styles.cardTitle}>今日の学習進捗</Text>
          <ProgressBar
            progress={todayProgress}
            label="完了率"
            showPercentage={true}
          />
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{currentStreak}</Text>
              <Text style={styles.statLabel}>日連続</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.stat}>
              <Text style={styles.statValue}>{completedDays}/{weeklyGoal}</Text>
              <Text style={styles.statLabel}>週間目標</Text>
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
          <Text style={styles.sectionTitle}>学習カテゴリー</Text>

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
            <Text style={styles.cardTitle}>復習が必要な単語</Text>
            <Text style={styles.reviewCount}>12個</Text>
          </View>
          <Text style={styles.reviewDescription}>
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
  return (
    <TouchableOpacity style={[styles.categoryCard, { backgroundColor: color }]}>
      <Text style={styles.categoryIcon}>{icon}</Text>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Text style={styles.categorySubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background.ivory,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background.ivory,
  },
  contentContainer: {
    padding: SPACING.lg,
    paddingBottom: SPACING['3xl'],
  },
  header: {
    marginBottom: SPACING.xl,
  },
  greeting: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.primary[600],
    marginBottom: SPACING.xs,
  },
  userName: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    color: COLORS.primary[800],
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.primary[500],
    lineHeight: 24,
  },
  progressCard: {
    marginBottom: SPACING.lg,
  },
  cardTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.primary[800],
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
    color: COLORS.sage[600],
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  statLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.primary[500],
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: COLORS.primary[200],
  },
  mainActionContainer: {
    marginBottom: SPACING.xl,
  },
  categoriesSection: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    color: COLORS.primary[800],
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
    color: COLORS.primary[800],
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  categorySubtitle: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.primary[600],
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
    color: COLORS.coral[500],
    fontWeight: '700',
  },
  reviewDescription: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.primary[600],
    marginBottom: SPACING.md,
  },
  reviewButtonContainer: {
    marginTop: SPACING.sm,
  },
});
