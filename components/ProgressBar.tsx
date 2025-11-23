import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { TYPOGRAPHY, BORDER_RADIUS, SPACING } from '../constants/theme';
import { useTheme } from '../contexts/ThemeContext';

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  showPercentage = true,
}) => {
  const { colors } = useTheme();
  const progressValue = useSharedValue(0);

  useEffect(() => {
    progressValue.value = withSpring(progress, {
      damping: 15,
      stiffness: 100,
    });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progressValue.value}%`,
    };
  });

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, { color: colors.primary[700] }]}>{label}</Text>
          {showPercentage && (
            <Text style={[styles.percentage, { color: colors.sage[600] }]}>{Math.round(progress)}%</Text>
          )}
        </View>
      )}
      <View style={[styles.track, { backgroundColor: colors.primary[100] }]}>
        <Animated.View style={[styles.fill, { backgroundColor: colors.sage[500] }, animatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  label: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '500',
  },
  percentage: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
  },
  track: {
    height: 12,
    borderRadius: BORDER_RADIUS.sm,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: BORDER_RADIUS.sm,
  },
});
