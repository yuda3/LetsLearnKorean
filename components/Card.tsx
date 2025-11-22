import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { COLORS, BORDER_RADIUS, SHADOWS, SPACING } from '../constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: 'default' | 'elevated' | 'outlined';
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = 'default'
}) => {
  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      backgroundColor: COLORS.background.cream,
      borderRadius: BORDER_RADIUS.lg,
      padding: SPACING.lg,
    };

    const variantStyles: Record<string, ViewStyle> = {
      default: {
        ...SHADOWS.soft,
      },
      elevated: {
        ...SHADOWS.softMd,
      },
      outlined: {
        borderWidth: 1,
        borderColor: COLORS.primary[200],
      },
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
    };
  };

  return (
    <View style={[getCardStyle(), style]}>
      {children}
    </View>
  );
};
