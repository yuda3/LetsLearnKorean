import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { TYPOGRAPHY, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { useTheme } from '../contexts/ThemeContext';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
}) => {
  const { colors } = useTheme();

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: BORDER_RADIUS.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.soft,
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, ViewStyle> = {
      sm: { paddingVertical: 10, paddingHorizontal: 16 },
      md: { paddingVertical: 14, paddingHorizontal: 24 },
      lg: { paddingVertical: 18, paddingHorizontal: 32 },
    };

    // Variant styles
    const variantStyles: Record<ButtonVariant, ViewStyle> = {
      primary: {
        backgroundColor: colors.sage[500],
      },
      secondary: {
        backgroundColor: colors.coral[500],
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primary[300],
      },
    };

    const combinedStyle: ViewStyle = {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    if (fullWidth) {
      combinedStyle.width = '100%';
    }

    if (disabled) {
      combinedStyle.opacity = 0.5;
    }

    return combinedStyle;
  };

  const getTextStyle = (): TextStyle => {
    const sizeStyles: Record<ButtonSize, TextStyle> = {
      sm: { fontSize: TYPOGRAPHY.fontSize.base },
      md: { fontSize: TYPOGRAPHY.fontSize.lg },
      lg: { fontSize: TYPOGRAPHY.fontSize.xl },
    };

    const variantStyles: Record<ButtonVariant, TextStyle> = {
      primary: { color: '#FFFFFF' },
      secondary: { color: '#FFFFFF' },
      outline: { color: colors.primary[700] },
    };

    return {
      ...sizeStyles[size],
      ...variantStyles[variant],
      fontWeight: '600',
    };
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={getButtonStyle()}
      activeOpacity={0.7}
      accessibilityLabel={title}
      accessibilityRole="button"
      accessibilityState={{
        disabled: disabled || loading,
        busy: loading,
      }}
      accessibilityHint={loading ? '読み込み中' : undefined}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? colors.primary[700] : '#FFFFFF'} />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text style={getTextStyle()}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
