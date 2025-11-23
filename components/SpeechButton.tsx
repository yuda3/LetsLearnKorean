import React, { useState } from 'react';
import { TouchableOpacity, Text, ViewStyle, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../contexts/ThemeContext';
import { BORDER_RADIUS } from '../constants/theme';

interface SpeechButtonProps {
  text: string;
  language?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'button';
  style?: ViewStyle;
}

export const SpeechButton: React.FC<SpeechButtonProps> = ({
  text,
  language = 'ko-KR',
  size = 'md',
  variant = 'icon',
  style,
}) => {
  const { colors } = useTheme();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async () => {
    if (isSpeaking) {
      await Speech.stop();
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);
    Speech.speak(text, {
      language,
      pitch: 1.0,
      rate: 0.85,
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const sizeMap = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const iconSizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  if (variant === 'icon') {
    return (
      <TouchableOpacity
        onPress={handleSpeak}
        style={[
          {
            width: sizeMap[size],
            height: sizeMap[size],
            borderRadius: 50,
            backgroundColor: isSpeaking ? colors.sage[600] : colors.sage[500],
            alignItems: 'center',
            justifyContent: 'center',
          },
          style,
        ]}
        activeOpacity={0.7}
      >
        {isSpeaking ? (
          <ActivityIndicator color="#FFFFFF" size="small" />
        ) : (
          <Text style={{ fontSize: iconSizeMap[size], color: '#FFFFFF' }}>🔊</Text>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={handleSpeak}
      style={[
        {
          paddingVertical: size === 'sm' ? 6 : size === 'md' ? 8 : 10,
          paddingHorizontal: size === 'sm' ? 12 : size === 'md' ? 16 : 20,
          borderRadius: BORDER_RADIUS.md,
          backgroundColor: isSpeaking ? colors.sage[600] : colors.sage[500],
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        },
        style,
      ]}
      activeOpacity={0.7}
    >
      {isSpeaking ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <Text style={{ fontSize: iconSizeMap[size], color: '#FFFFFF' }}>🔊</Text>
      )}
      <Text style={{ fontSize: size === 'sm' ? 12 : size === 'md' ? 14 : 16, color: '#FFFFFF', fontWeight: '600' }}>
        {isSpeaking ? '재생 중...' : '듣기'}
      </Text>
    </TouchableOpacity>
  );
};
