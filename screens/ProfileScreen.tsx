import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Card } from '../components/Card';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { storageService } from '../services/storageService';
import { LearningStats, Badge } from '../types';

const BADGE_DEFINITIONS: Badge[] = [
  {
    id: 'streak_3',
    name: '시작이 반',
    description: '3일 연속 학습',
    icon: '🥉',
    requirement: { type: 'streak', value: 3 },
  },
  {
    id: 'streak_7',
    name: '일주일 챌린저',
    description: '7일 연속 학습',
    icon: '🥈',
    requirement: { type: 'streak', value: 7 },
  },
  {
    id: 'streak_30',
    name: '한 달의 기적',
    description: '30일 연속 학습',
    icon: '🥇',
    requirement: { type: 'streak', value: 30 },
  },
  {
    id: 'streak_100',
    name: '마스터',
    description: '100일 연속 학습',
    icon: '💎',
    requirement: { type: 'streak', value: 100 },
  },
  {
    id: 'quizzes_10',
    name: '퀴즈 초보',
    description: '10개 퀴즈 완료',
    icon: '📝',
    requirement: { type: 'quizzes', value: 10 },
  },
  {
    id: 'quizzes_50',
    name: '퀴즈 달인',
    description: '50개 퀴즈 완료',
    icon: '📚',
    requirement: { type: 'quizzes', value: 50 },
  },
  {
    id: 'quizzes_100',
    name: '퀴즈 마스터',
    description: '100개 퀴즈 완료',
    icon: '🏆',
    requirement: { type: 'quizzes', value: 100 },
  },
  {
    id: 'category_1',
    name: '첫 걸음',
    description: '첫 번째 카테고리 완료',
    icon: '🌱',
    requirement: { type: 'category', value: 1 },
  },
  {
    id: 'category_3',
    name: '성장하는 학습자',
    description: '3개 카테고리 완료',
    icon: '🌿',
    requirement: { type: 'category', value: 3 },
  },
  {
    id: 'category_5',
    name: '중급 도전자',
    description: '5개 카테고리 완료',
    icon: '🎋',
    requirement: { type: 'category', value: 5 },
  },
  {
    id: 'category_all',
    name: '완벽한 정복',
    description: '모든 카테고리 완료',
    icon: '🎓',
    requirement: { type: 'category', value: 8 },
  },
];

export const ProfileScreen: React.FC = () => {
  const { user, logout } = useAuth();
  const { colors } = useTheme();
  const [stats, setStats] = useState<LearningStats | null>(null);
  const [badges, setBadges] = useState<Badge[]>([]);

  const loadStats = useCallback(async () => {
    const learningStats = await storageService.getLearningStats();
    setStats(learningStats);
  }, []);

  const loadBadges = useCallback(async () => {
    let savedBadges = await storageService.getBadges();

    // Initialize badges if not exist
    if (savedBadges.length === 0) {
      await storageService.saveBadges(BADGE_DEFINITIONS);
      savedBadges = BADGE_DEFINITIONS;
    }

    // Check and unlock badges based on current stats
    const currentStats = await storageService.getLearningStats();
    const categoryProgress = await storageService.getCategoryProgress();

    if (currentStats) {
      // Count completed categories (bestScore >= 70 and completedQuizzes >= 3)
      const completedCategories = categoryProgress.filter(
        (cat) => cat.bestScore >= 70 && cat.completedQuizzes >= 3
      ).length;

      const updatedBadges = savedBadges.map((badge) => {
        if (badge.unlockedAt) return badge;

        let shouldUnlock = false;
        switch (badge.requirement.type) {
          case 'streak':
            shouldUnlock = currentStats.currentStreak >= badge.requirement.value;
            break;
          case 'quizzes':
            shouldUnlock = currentStats.totalQuizzesTaken >= badge.requirement.value;
            break;
          case 'category':
            shouldUnlock = completedCategories >= badge.requirement.value;
            break;
        }

        if (shouldUnlock) {
          return { ...badge, unlockedAt: new Date().toISOString() };
        }
        return badge;
      });

      await storageService.saveBadges(updatedBadges);
      setBadges(updatedBadges);
    } else {
      setBadges(savedBadges);
    }
  }, []);

  useEffect(() => {
    if (user) {
      loadStats();
      loadBadges();
    } else {
      // 로그아웃 시 데이터 초기화
      setStats(null);
      setBadges([]);
    }
  }, [user, loadStats, loadBadges]);

  // 화면이 포커스될 때마다 데이터를 다시 로드
  useFocusEffect(
    useCallback(() => {
      if (user) {
        loadStats();
        loadBadges();
      }
    }, [user, loadStats, loadBadges])
  );

  const getAccuracyRate = () => {
    if (!stats || stats.totalQuestions === 0) return 0;
    const rate = Math.round((stats.totalCorrectAnswers / stats.totalQuestions) * 100);
    return Math.min(100, rate); // 최대 100%로 제한
  };

  const unlockedBadges = badges.filter((b) => b.unlockedAt);
  const lockedBadges = badges.filter((b) => !b.unlockedAt);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={[styles.avatar, { backgroundColor: colors.sage[100] }]}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={[styles.userName, { color: colors.primary[800] }]}>
            {user?.name || 'ユーザー'}
          </Text>
          <Text style={[styles.userLevel, { color: colors.primary[600] }]}>
            {user?.level === 'beginner' && '初級者'}
            {user?.level === 'intermediate' && '中級者'}
            {user?.level === 'advanced' && '上級者'}
          </Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Text style={styles.statIcon}>📊</Text>
            <Text style={[styles.statValue, { color: colors.primary[800] }]}>
              {stats?.totalQuizzesTaken || 0}
            </Text>
            <Text style={[styles.statLabel, { color: colors.primary[600] }]}>完了したクイズ</Text>
          </Card>

          <Card style={styles.statCard}>
            <Text style={styles.statIcon}>🎯</Text>
            <Text style={[styles.statValue, { color: colors.primary[800] }]}>
              {getAccuracyRate()}%
            </Text>
            <Text style={[styles.statLabel, { color: colors.primary[600] }]}>正答率</Text>
          </Card>

          <Card style={styles.statCard}>
            <Text style={styles.statIcon}>🔥</Text>
            <Text style={[styles.statValue, { color: colors.primary[800] }]}>
              {stats?.currentStreak || 0}
            </Text>
            <Text style={[styles.statLabel, { color: colors.primary[600] }]}>連続学習日</Text>
          </Card>
        </View>

        {/* Longest Streak */}
        {stats && stats.longestStreak > 0 && (
          <Card style={styles.longestStreakCard}>
            <Text style={[styles.longestStreakLabel, { color: colors.primary[600] }]}>
              最長連続記録
            </Text>
            <Text style={[styles.longestStreakValue, { color: colors.sage[600] }]}>
              🏅 {stats.longestStreak} 日間
            </Text>
          </Card>
        )}

        {/* Badges Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[800] }]}>
            獲得したバッジ ({unlockedBadges.length}/{badges.length})
          </Text>

          {unlockedBadges.length > 0 && (
            <View style={styles.badgesGrid}>
              {unlockedBadges.map((badge) => (
                <Card key={badge.id} style={styles.badgeCard}>
                  <Text style={styles.badgeIcon}>{badge.icon}</Text>
                  <Text style={[styles.badgeName, { color: colors.primary[800] }]}>
                    {badge.name}
                  </Text>
                  <Text style={[styles.badgeDescription, { color: colors.primary[600] }]}>
                    {badge.description}
                  </Text>
                </Card>
              ))}
            </View>
          )}

          {lockedBadges.length > 0 && (
            <>
              <Text style={[styles.subsectionTitle, { color: colors.primary[700] }]}>
                未獲得のバッジ
              </Text>
              <View style={styles.badgesGrid}>
                {lockedBadges.map((badge) => (
                  <Card key={badge.id} style={[styles.badgeCard, styles.lockedBadge]}>
                    <Text style={styles.badgeIconLocked}>🔒</Text>
                    <Text style={[styles.badgeName, { color: colors.primary[500] }]}>
                      {badge.name}
                    </Text>
                    <Text style={[styles.badgeDescription, { color: colors.primary[400] }]}>
                      {badge.description}
                    </Text>
                  </Card>
                ))}
              </View>
            </>
          )}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: colors.coral[100] }]}
          onPress={logout}
        >
          <Text style={[styles.logoutText, { color: colors.coral[600] }]}>ログアウト</Text>
        </TouchableOpacity>
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
  scrollContent: {
    paddingBottom: SPACING.xl * 2,
  },
  header: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  avatarText: {
    fontSize: 50,
  },
  userName: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  userLevel: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  statIcon: {
    fontSize: 32,
    marginBottom: SPACING.sm,
  },
  statValue: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  statLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    textAlign: 'center',
  },
  longestStreakCard: {
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
  },
  longestStreakLabel: {
    fontSize: TYPOGRAPHY.fontSize.base,
    marginBottom: SPACING.xs,
  },
  longestStreakValue: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: '700',
  },
  section: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: '700',
    marginBottom: SPACING.lg,
  },
  subsectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  badgeCard: {
    width: '47%',
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  lockedBadge: {
    opacity: 0.5,
  },
  badgeIcon: {
    fontSize: 40,
    marginBottom: SPACING.sm,
  },
  badgeIconLocked: {
    fontSize: 32,
    marginBottom: SPACING.sm,
  },
  badgeName: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
    marginBottom: SPACING.xs,
    textAlign: 'center',
  },
  badgeDescription: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    textAlign: 'center',
  },
  logoutButton: {
    marginHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    ...SHADOWS.soft,
  },
  logoutText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
  },
});
