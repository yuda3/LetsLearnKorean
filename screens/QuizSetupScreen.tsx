import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { UserLevel } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface QuizSetupScreenProps {
  onStart: (questionCount: number, level?: UserLevel) => void;
  onBack: () => void;
  userLevel?: UserLevel;
  showLevelSelection: boolean;
}

export const QuizSetupScreen: React.FC<QuizSetupScreenProps> = ({
  onStart,
  onBack,
  userLevel,
  showLevelSelection,
}) => {
  const { colors } = useTheme();
  const [selectedLevel, setSelectedLevel] = useState<UserLevel>(userLevel || 'beginner');
  const [selectedCount, setSelectedCount] = useState<number>(5);

  const questionCounts = [5, 10, 15, 20];

  const levelOptions: { value: UserLevel; label: string; description: string; icon: string }[] = [
    {
      value: 'beginner',
      label: '初級',
      description: '基本的な挨拶と表現',
      icon: '🌱',
    },
    {
      value: 'intermediate',
      label: '中級',
      description: '日常会話と旅行',
      icon: '🌿',
    },
    {
      value: 'advanced',
      label: '上級',
      description: '複雑な表現と文法',
      icon: '🌳',
    },
  ];

  const handleStart = () => {
    onStart(selectedCount, showLevelSelection ? selectedLevel : undefined);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={[styles.backButton, { backgroundColor: colors.background.cream }]}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={[styles.headerTitle, { color: colors.primary[800] }]}>クイズ設定</Text>
            <Text style={[styles.headerSubtitle, { color: colors.primary[600] }]}>
              レベルと問題数を選択してください
            </Text>
          </View>
        </View>

        {/* Level Selection */}
        {showLevelSelection && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.primary[800] }]}>
              📚 学習レベル
            </Text>
            <View style={styles.levelGrid}>
              {levelOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.levelCard,
                    {
                      backgroundColor: selectedLevel === option.value
                        ? colors.sage[100]
                        : colors.background.cream,
                      borderColor: selectedLevel === option.value
                        ? colors.sage[500]
                        : colors.primary[200],
                      borderWidth: 2,
                    },
                  ]}
                  onPress={() => setSelectedLevel(option.value)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.levelIcon}>{option.icon}</Text>
                  <Text style={[styles.levelLabel, { color: colors.primary[800] }]}>
                    {option.label}
                  </Text>
                  <Text style={[styles.levelDescription, { color: colors.primary[600] }]}>
                    {option.description}
                  </Text>
                  {selectedLevel === option.value && (
                    <View style={[styles.checkmark, { backgroundColor: colors.sage[500] }]}>
                      <Text style={styles.checkmarkText}>✓</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Question Count Selection */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[800] }]}>
            📝 問題数
          </Text>
          <View style={styles.countGrid}>
            {questionCounts.map((count) => (
              <TouchableOpacity
                key={count}
                style={[
                  styles.countButton,
                  {
                    backgroundColor: selectedCount === count
                      ? colors.sage[500]
                      : colors.background.cream,
                    borderColor: selectedCount === count
                      ? colors.sage[600]
                      : colors.primary[200],
                  },
                ]}
                onPress={() => setSelectedCount(count)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.countText,
                    {
                      color: selectedCount === count
                        ? colors.background.warmWhite
                        : colors.primary[700],
                    },
                  ]}
                >
                  {count}
                </Text>
                <Text
                  style={[
                    styles.countLabel,
                    {
                      color: selectedCount === count
                        ? colors.background.warmWhite
                        : colors.primary[500],
                    },
                  ]}
                >
                  問題
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Info Card */}
        <Card style={styles.infoCard}>
          <Text style={[styles.infoTitle, { color: colors.primary[800] }]}>💡 ヒント</Text>
          <Text style={[styles.infoText, { color: colors.primary[600] }]}>
            • 毎日少しずつ学習すると効果的です{'\n'}
            • 間違えた問題は復習しましょう{'\n'}
            • 自分のペースで進めてください
          </Text>
        </Card>

        {/* Start Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="クイズを始める"
            onPress={handleStart}
            variant="primary"
            size="lg"
            fullWidth
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
    ...SHADOWS.soft,
  },
  backButtonText: {
    fontSize: 24,
    color: COLORS.primary[600],
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  headerSubtitle: {
    fontSize: TYPOGRAPHY.fontSize.base,
  },
  section: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  levelGrid: {
    gap: SPACING.md,
  },
  levelCard: {
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.soft,
    position: 'relative',
  },
  levelIcon: {
    fontSize: 32,
    marginBottom: SPACING.sm,
  },
  levelLabel: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  levelDescription: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    lineHeight: 20,
  },
  checkmark: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  countGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  countButton: {
    width: '22%',
    aspectRatio: 1,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    ...SHADOWS.soft,
  },
  countText: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  countLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  infoCard: {
    marginBottom: SPACING.xl,
  },
  infoTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '600',
    marginBottom: SPACING.sm,
  },
  infoText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: SPACING.md,
  },
});
