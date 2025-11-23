import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Button } from '../components/Button';
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from '../constants/theme';
import { useTheme } from '../contexts/ThemeContext';
import { storageService } from '../services/storageService';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface OnboardingSlide {
  id: string;
  icon: string;
  titleJa: string;
  titleKo: string;
  description: string;
}

const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: '1',
    icon: '👋',
    titleJa: 'ようこそ！',
    titleKo: '환영합니다!',
    description: '일본어 학습을 시작해봅시다.\n재미있는 퀴즈로 실력을 향상시켜보세요.',
  },
  {
    id: '2',
    icon: '🎯',
    titleJa: 'レベル別学習',
    titleKo: '단계별 학습',
    description: '초급, 중급, 고급으로 나뉘어\n자신의 수준에 맞게 학습할 수 있어요.',
  },
  {
    id: '3',
    icon: '🔥',
    titleJa: '毎日の習慣',
    titleKo: '매일매일 학습',
    description: '연속 학습일을 기록하고\n배지를 획득하며 동기를 유지하세요.',
  },
  {
    id: '4',
    icon: '📊',
    titleJa: '進捗を確認',
    titleKo: '진행 상황 확인',
    description: '학습 통계와 진행률을 확인하고\n자신의 성장을 실감하세요.',
  },
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const { colors } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    if (currentIndex < ONBOARDING_SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({
      index: ONBOARDING_SLIDES.length - 1,
      animated: true,
    });
  };

  const handleGetStarted = async () => {
    await storageService.completeOnboarding();
    onComplete();
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = ({ item }: { item: OnboardingSlide }) => (
    <View style={[styles.slide, { width: SCREEN_WIDTH }]}>
      <View style={styles.slideContent}>
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={[styles.titleJa, { color: colors.primary[600] }]}>{item.titleJa}</Text>
        <Text style={[styles.titleKo, { color: colors.primary[800] }]}>{item.titleKo}</Text>
        <Text style={[styles.description, { color: colors.primary[700] }]}>
          {item.description}
        </Text>
      </View>
    </View>
  );

  const renderPagination = () => (
    <View style={styles.pagination}>
      {ONBOARDING_SLIDES.map((_, index) => {
        const inputRange = [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 24, 8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={[
              styles.dot,
              {
                width: dotWidth,
                backgroundColor: colors.sage[500],
                opacity,
              },
            ]}
          />
        );
      })}
    </View>
  );

  const isLastSlide = currentIndex === ONBOARDING_SLIDES.length - 1;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background.ivory }]}>
      {/* Skip button */}
      {!isLastSlide && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={[styles.skipText, { color: colors.primary[600] }]}>スキップ</Text>
        </TouchableOpacity>
      )}

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_SLIDES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />

      {/* Pagination dots */}
      {renderPagination()}

      {/* Navigation buttons */}
      <View style={styles.footer}>
        {isLastSlide ? (
          <Button
            title="始める"
            onPress={handleGetStarted}
            variant="primary"
            size="lg"
            fullWidth
          />
        ) : (
          <Button
            title="次へ"
            onPress={handleNext}
            variant="primary"
            size="lg"
            fullWidth
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: SPACING.lg,
    zIndex: 10,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  skipText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },
  slideContent: {
    alignItems: 'center',
    maxWidth: 400,
  },
  icon: {
    fontSize: 120,
    marginBottom: SPACING.xl,
  },
  titleJa: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '600',
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  titleKo: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontWeight: '700',
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  description: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    lineHeight: 28,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  footer: {
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
});
