import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { useTheme } from '../contexts/ThemeContext';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onHome: () => void;
  onShare?: () => void;
  correctAnswers?: number[];
  incorrectAnswers?: number[];
  timeSpent?: number;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  onRetry,
  onHome,
  onShare,
  correctAnswers = [],
  incorrectAnswers = [],
  timeSpent,
}) => {
  const { colors } = useTheme();
  const [scaleAnimation] = useState(new Animated.Value(0));
  const [fadeAnimation] = useState(new Animated.Value(0));

  const percentage = Math.round((score / totalQuestions) * 100);

  const formatTime = (seconds: number | undefined) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const averageTimePerQuestion = timeSpent && totalQuestions > 0
    ? Math.round(timeSpent / totalQuestions)
    : 0;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnimation, {
        toValue: 1,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
        delay: 200,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        delay: 400,
      }),
    ]).start();
  }, []);

  const getMessage = () => {
    if (percentage === 100) {
      return {
        title: '完璧です！',
        subtitle: '素晴らしい成績ですね',
        emoji: '🎉',
        color: colors.sage[500],
      };
    } else if (percentage >= 80) {
      return {
        title: '大変よくできました！',
        subtitle: 'とても良い理解度です',
        emoji: '⭐',
        color: colors.sage[500],
      };
    } else if (percentage >= 60) {
      return {
        title: 'よくできました！',
        subtitle: '着実に上達しています',
        emoji: '👏',
        color: colors.mint[500],
      };
    } else if (percentage >= 40) {
      return {
        title: '頑張りました！',
        subtitle: '復習して次に進みましょう',
        emoji: '💪',
        color: colors.coral[400],
      };
    } else {
      return {
        title: 'もう一度チャレンジ！',
        subtitle: '練習すればもっと良くなります',
        emoji: '🌱',
        color: colors.coral[500],
      };
    }
  };

  const message = getMessage();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Decorative Background */}
          <View style={styles.decorativeBackground}>
            <View style={[styles.circle, styles.circle1, { backgroundColor: colors.sage[300] }]} />
            <View style={[styles.circle, styles.circle2, { backgroundColor: colors.coral[300] }]} />
            <View style={[styles.circle, styles.circle3, { backgroundColor: colors.mint[300] }]} />
          </View>

          {/* Result Card */}
          <Animated.View
            style={[
              styles.cardContainer,
              {
                transform: [{ scale: scaleAnimation }],
              },
            ]}
          >
            <Card style={styles.resultCard} variant="elevated">
              {/* Emoji */}
              <Text style={styles.emoji}>{message.emoji}</Text>

              {/* Title */}
              <Text style={[styles.title, { color: colors.primary[800] }]}>{message.title}</Text>
              <Text style={[styles.subtitle, { color: colors.primary[600] }]}>{message.subtitle}</Text>

              {/* Score Display */}
              <View style={styles.scoreContainer}>
                <View style={[styles.scoreCircle, { borderColor: message.color, backgroundColor: colors.background.warmWhite }]}>
                  <Text style={[styles.scorePercentage, { color: message.color }]}>
                    {percentage}%
                  </Text>
                  <Text style={[styles.scoreLabel, { color: colors.primary[600] }]}>正解率</Text>
                </View>
              </View>

              {/* Score Details */}
              <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                  <Text style={[styles.detailValue, { color: colors.primary[700] }]}>{score}</Text>
                  <Text style={[styles.detailLabel, { color: colors.primary[500] }]}>正解</Text>
                </View>
                <View style={[styles.divider, { backgroundColor: colors.primary[200] }]} />
                <View style={styles.detailItem}>
                  <Text style={[styles.detailValue, { color: colors.primary[700] }]}>{totalQuestions - score}</Text>
                  <Text style={[styles.detailLabel, { color: colors.primary[500] }]}>不正解</Text>
                </View>
                <View style={[styles.divider, { backgroundColor: colors.primary[200] }]} />
                <View style={styles.detailItem}>
                  <Text style={[styles.detailValue, { color: colors.primary[700] }]}>{totalQuestions}</Text>
                  <Text style={[styles.detailLabel, { color: colors.primary[500] }]}>合計</Text>
                </View>
              </View>

              {/* Additional Stats */}
              {timeSpent !== undefined && (
                <View style={[styles.additionalStatsContainer, { borderTopColor: colors.primary[200] }]}>
                  <View style={styles.statRow}>
                    <Text style={styles.statIcon}>⏱️</Text>
                    <View style={styles.statInfo}>
                      <Text style={[styles.statLabel, { color: colors.primary[600] }]}>所要時間</Text>
                      <Text style={[styles.statValue, { color: colors.primary[700] }]}>{formatTime(timeSpent)}</Text>
                    </View>
                  </View>
                  <View style={styles.statRow}>
                    <Text style={styles.statIcon}>⚡</Text>
                    <View style={styles.statInfo}>
                      <Text style={[styles.statLabel, { color: colors.primary[600] }]}>平均解答時間</Text>
                      <Text style={[styles.statValue, { color: colors.primary[700] }]}>{averageTimePerQuestion}秒</Text>
                    </View>
                  </View>
                </View>
              )}

              {/* Motivational Message */}
              <View style={[styles.messageContainer, { borderTopColor: colors.primary[200] }]}>
                <Text style={[styles.messageText, { color: colors.primary[600] }]}>
                  {percentage >= 70
                    ? '継続は力なり。この調子で頑張りましょう！'
                    : '間違えた問題を復習すると、もっと上達しますよ。'}
                </Text>
              </View>
            </Card>
          </Animated.View>

          {/* Action Buttons */}
          <Animated.View style={[styles.actionsContainer, { opacity: fadeAnimation }]}>
            {onShare && (
              <TouchableOpacity style={[styles.shareButton, { backgroundColor: colors.background.cream, borderColor: colors.primary[200] }]} onPress={onShare}>
                <Text style={[styles.shareButtonText, { color: colors.primary[700] }]}>📤 結果をシェア</Text>
              </TouchableOpacity>
            )}

            <View style={styles.buttonGroup}>
              <View style={styles.buttonWrapper}>
                <Button
                  title="もう一度"
                  onPress={onRetry}
                  variant="outline"
                  size="lg"
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Button
                  title="ホームへ"
                  onPress={onHome}
                  variant="primary"
                  size="lg"
                />
              </View>
            </View>
          </Animated.View>
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
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: 'center',
  },
  decorativeBackground: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    borderRadius: 9999,
    opacity: 0.1,
  },
  circle1: {
    width: 300,
    height: 300,
    top: -100,
    right: -100,
  },
  circle2: {
    width: 200,
    height: 200,
    bottom: -50,
    left: -50,
  },
  circle3: {
    width: 150,
    height: 150,
    top: '40%',
    left: -75,
  },
  cardContainer: {
    marginBottom: SPACING.xl,
  },
  resultCard: {
    alignItems: 'center',
    paddingVertical: SPACING['2xl'],
  },
  emoji: {
    fontSize: 72,
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontWeight: '700',
    marginBottom: SPACING.xs,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  scoreContainer: {
    marginVertical: SPACING.xl,
  },
  scoreCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scorePercentage: {
    fontSize: TYPOGRAPHY.fontSize['5xl'],
    fontWeight: '700',
  },
  scoreLabel: {
    fontSize: TYPOGRAPHY.fontSize.base,
    marginTop: SPACING.xs,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.md,
  },
  detailItem: {
    alignItems: 'center',
    flex: 1,
  },
  detailValue: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  detailLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  divider: {
    width: 1,
    height: 40,
  },
  additionalStatsContainer: {
    width: '100%',
    marginTop: SPACING.lg,
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
    gap: SPACING.md,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  statIcon: {
    fontSize: 24,
  },
  statInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageContainer: {
    marginTop: SPACING.xl,
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
    width: '100%',
  },
  messageText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    textAlign: 'center',
    lineHeight: 24,
  },
  actionsContainer: {
    gap: SPACING.md,
  },
  shareButton: {
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    ...SHADOWS.soft,
    borderWidth: 1,
  },
  shareButtonText: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  statValue: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  buttonWrapper: {
    flex: 1,
  },
});
