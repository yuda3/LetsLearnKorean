import React, { useState, useEffect } from 'react';
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
import { Button } from '../components/Button';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { storageService } from '../services/storageService';
import { QuizResult, QuizCategory } from '../types';
import { getCategoryConfig } from '../data/categoryConfig';

interface PracticeModeCardProps {
  icon: string;
  titleJa: string;
  titleKo: string;
  description: string;
  onPress: () => void;
  colors: ReturnType<typeof useTheme>['colors'];
  disabled?: boolean;
}

const PracticeModeCard: React.FC<PracticeModeCardProps> = ({
  icon,
  titleJa,
  titleKo,
  description,
  onPress,
  colors,
  disabled = false,
}) => (
  <TouchableOpacity
    style={[
      styles.modeCard,
      { backgroundColor: colors.background.cream },
      disabled && styles.disabledCard,
    ]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.7}
  >
    <Text style={styles.modeIcon}>{icon}</Text>
    <Text style={[styles.modeTitleJa, { color: colors.primary[600] }]}>{titleJa}</Text>
    <Text style={[styles.modeTitleKo, { color: colors.primary[800] }]}>{titleKo}</Text>
    <Text style={[styles.modeDescription, { color: colors.primary[700] }]}>
      {description}
    </Text>
    {disabled && (
      <View style={[styles.comingSoonBadge, { backgroundColor: colors.sage[100] }]}>
        <Text style={[styles.comingSoonText, { color: colors.sage[600] }]}>準備中</Text>
      </View>
    )}
  </TouchableOpacity>
);

interface CategoryReviewCardProps {
  category: QuizCategory;
  categoryNameJa: string;
  categoryNameKo: string;
  icon: string;
  incorrectCount: number;
  onPress: () => void;
  colors: ReturnType<typeof useTheme>['colors'];
}

const CategoryReviewCard: React.FC<CategoryReviewCardProps> = ({
  category,
  categoryNameJa,
  categoryNameKo,
  icon,
  incorrectCount,
  onPress,
  colors,
}) => (
  <TouchableOpacity
    style={[styles.reviewCard, { backgroundColor: colors.background.cream }]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.reviewCardLeft}>
      <Text style={styles.reviewIcon}>{icon}</Text>
      <View>
        <Text style={[styles.reviewTitleJa, { color: colors.primary[600] }]}>
          {categoryNameJa}
        </Text>
        <Text style={[styles.reviewTitleKo, { color: colors.primary[800] }]}>
          {categoryNameKo}
        </Text>
      </View>
    </View>
    <View style={[styles.reviewBadge, { backgroundColor: colors.coral[100] }]}>
      <Text style={[styles.reviewBadgeText, { color: colors.coral[600] }]}>
        {incorrectCount}問
      </Text>
    </View>
  </TouchableOpacity>
);

interface PracticeScreenProps {
  onStartPractice?: (mode: string) => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({ onStartPractice }) => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [weakCategories, setWeakCategories] = useState<
    { category: QuizCategory; incorrectCount: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadQuizResults();
    } else {
      setQuizResults([]);
      setWeakCategories([]);
      setIsLoading(false);
    }
  }, [user]);

  // 화면이 포커스될 때마다 데이터 다시 로드
  useFocusEffect(
    React.useCallback(() => {
      if (user) {
        loadQuizResults();
      }
    }, [user])
  );

  const loadQuizResults = async () => {
    try {
      setIsLoading(true);
      const results = await storageService.getQuizResults();
      setQuizResults(results);

      // Calculate weak categories (categories with many incorrect answers)
      const categoryIncorrects: { [key: string]: number } = {};

      results.forEach((result) => {
        const category = result.category;
        if (!categoryIncorrects[category]) {
          categoryIncorrects[category] = 0;
        }
        categoryIncorrects[category] += result.incorrectAnswers.length;
      });

      const weak = Object.entries(categoryIncorrects)
        .filter(([_, count]) => count > 0)
        .map(([category, count]) => ({
          category: category as QuizCategory,
          incorrectCount: count,
        }))
        .sort((a, b) => b.incorrectCount - a.incorrectCount)
        .slice(0, 5);

      setWeakCategories(weak);
    } catch (error) {
      console.error('Error loading quiz results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategoryName = (category: QuizCategory): { ja: string; ko: string; icon: string } => {
    // categoryConfig에서 카테고리 정보 가져오기
    const config = getCategoryConfig(category);
    if (config) {
      return {
        ja: config.titleJa,
        ko: config.titleKo,
        icon: config.icon,
      };
    }

    // categoryConfig에 없는 경우를 위한 폴백 (기존 일반 카테고리)
    const fallbackNames: { [key: string]: { ja: string; ko: string; icon: string } } = {
      travel: { ja: '旅行会話', ko: '여행 회화', icon: '🗺️' },
      daily: { ja: '日常会話', ko: '일상 회화', icon: '💬' },
      gratitude: { ja: '感謝の表現', ko: '감사 표현', icon: '💝' },
      basic: { ja: '基本フレーズ', ko: '기본 표현', icon: '✨' },
      shopping: { ja: 'ショッピング', ko: '쇼핑', icon: '🛍️' },
      restaurant: { ja: 'レストラン', ko: '레스토랑', icon: '🍜' },
      emergency: { ja: '緊急時', ko: '긴급 상황', icon: '🚨' },
      numbers: { ja: '数字', ko: '숫자', icon: '🔢' },
      // K-POP 카테고리 폴백
      vlive: { ja: 'V LIVE', ko: 'V LIVE', icon: '📱' },
      kpop_gratitude: { ja: 'K-POP感謝表現', ko: 'K-POP 감사 표현', icon: '💜' },
      reactions: { ja: 'リアクション', ko: '리액션', icon: '😲' },
      fanLetter: { ja: 'ファンレター', ko: '팬레터', icon: '💌' },
      sns: { ja: 'SNS', ko: 'SNS', icon: '📲' },
      concert: { ja: 'コンサート', ko: '콘서트', icon: '🎤' },
      slang: { ja: 'スラング', ko: '슬랭', icon: '💬' },
      kpopTerms: { ja: 'K-POP用語', ko: 'K-POP 용어', icon: '🎵' },
      travel_daily: { ja: '旅行で使える日常会話', ko: '여행에서 쓸 수 있는 일상 회화', icon: '🗺️' },
    };

    return fallbackNames[category] || { ja: '不明', ko: '알 수 없음', icon: '❓' };
  };

  const handleModePress = (mode: string) => {
    if (onStartPractice) {
      onStartPractice(mode);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
        <LoadingIndicator message="データを読み込み中..." fullScreen />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.primary[800] }]}>練習モード</Text>
          <Text style={[styles.headerSubtitle, { color: colors.primary[600] }]}>
            復習や特訓で実力アップ
          </Text>
        </View>

        {/* Review Section */}
        {weakCategories.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.primary[800] }]}>
              📝 復習が必要な分野
            </Text>
            <Text style={[styles.sectionSubtitle, { color: colors.primary[600] }]}>
              間違えた問題が多いカテゴリです
            </Text>
            {weakCategories.map((item) => {
              const catInfo = getCategoryName(item.category);
              return (
                <CategoryReviewCard
                  key={item.category}
                  category={item.category}
                  categoryNameJa={catInfo.ja}
                  categoryNameKo={catInfo.ko}
                  icon={catInfo.icon}
                  incorrectCount={item.incorrectCount}
                  onPress={() => handleModePress(`review_${item.category}`)}
                  colors={colors}
                />
              );
            })}
          </View>
        )}

        {/* Practice Modes */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[800] }]}>
            🎯 練習モード
          </Text>

          <PracticeModeCard
            icon="🎲"
            titleJa="ランダムクイズ"
            titleKo="랜덤 퀴즈"
            description="すべてのカテゴリからランダムに出題"
            onPress={() => handleModePress('random')}
            colors={colors}
          />

          <PracticeModeCard
            icon="⏱️"
            titleJa="タイムアタック"
            titleKo="타임 어택"
            description="制限時間内にできるだけ多く正解しよう"
            onPress={() => handleModePress('time_attack')}
            colors={colors}
            disabled
          />

          <PracticeModeCard
            icon="🏆"
            titleJa="チャレンジモード"
            titleKo="챌린지 모드"
            description="難易度の高い問題に挑戦"
            onPress={() => handleModePress('challenge')}
            colors={colors}
            disabled
          />

          <PracticeModeCard
            icon="📚"
            titleJa="弱点克服"
            titleKo="약점 극복"
            description="間違えた問題を集中的に復習"
            onPress={() => handleModePress('weakness')}
            colors={colors}
            disabled
          />
        </View>

        {/* Stats */}
        {quizResults.length > 0 && (
          <Card style={styles.statsCard}>
            <Text style={[styles.statsTitle, { color: colors.primary[800] }]}>
              これまでの練習
            </Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.sage[600] }]}>
                  {quizResults.length}
                </Text>
                <Text style={[styles.statLabel, { color: colors.primary[600] }]}>
                  完了したクイズ
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.sage[600] }]}>
                  {quizResults.reduce((sum, r) => sum + r.totalQuestions, 0)}
                </Text>
                <Text style={[styles.statLabel, { color: colors.primary[600] }]}>
                  解いた問題
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.sage[600] }]}>
                  {quizResults.reduce((sum, r) => sum + r.incorrectAnswers.length, 0)}
                </Text>
                <Text style={[styles.statLabel, { color: colors.primary[600] }]}>
                  間違えた問題
                </Text>
              </View>
            </View>
          </Card>
        )}
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
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
  },
  headerTitle: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  headerSubtitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
  },
  section: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  sectionSubtitle: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    marginBottom: SPACING.md,
  },
  reviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.soft,
  },
  reviewCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reviewIcon: {
    fontSize: 32,
    marginRight: SPACING.md,
  },
  reviewTitleJa: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    marginBottom: 2,
  },
  reviewTitleKo: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
  },
  reviewBadge: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
  },
  reviewBadgeText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '700',
  },
  modeCard: {
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.md,
    alignItems: 'center',
    ...SHADOWS.soft,
    position: 'relative',
  },
  disabledCard: {
    opacity: 0.6,
  },
  modeIcon: {
    fontSize: 48,
    marginBottom: SPACING.md,
  },
  modeTitleJa: {
    fontSize: TYPOGRAPHY.fontSize.base,
    marginBottom: 2,
  },
  modeTitleKo: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  modeDescription: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    textAlign: 'center',
  },
  comingSoonBadge: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs / 2,
    borderRadius: BORDER_RADIUS.sm,
  },
  comingSoonText: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    fontWeight: '600',
  },
  statsCard: {
    marginHorizontal: SPACING.lg,
  },
  statsTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '700',
    marginBottom: SPACING.md,
  },
  statsRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    justifyContent: 'space-around',
  },
  statItem: {
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
    textAlign: 'center',
  },
});
