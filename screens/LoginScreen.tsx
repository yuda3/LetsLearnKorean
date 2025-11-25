import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS } from '../constants/theme';
import { useAuth } from '../contexts/AuthContext';

const CHARACTERS = [
  { emoji: '🐱', name: '고양이' },
  { emoji: '🐶', name: '강아지' },
  { emoji: '🐻', name: '곰' },
  { emoji: '🐰', name: '토끼' },
  { emoji: '🦊', name: '여우' },
  { emoji: '🐼', name: '팬더' },
  { emoji: '🦁', name: '사자' },
  { emoji: '🐯', name: '호랑이' },
];

export const LoginScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<string>(CHARACTERS[0].emoji);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!name.trim()) {
      Alert.alert('エラー', '名前を入力してください');
      return;
    }

    try {
      await login(name.trim(), selectedCharacter);
    } catch (error) {
      Alert.alert('エラー', 'ログインに失敗しました');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.appTitle}>한국어 학습</Text>
            <Text style={styles.subtitle}>韓国語を学びましょう</Text>
          </View>

          {/* Login Card */}
          <Card style={styles.loginCard} variant="elevated">
            <Text style={styles.welcomeText}>ようこそ</Text>
            <Text style={styles.instructionText}>
              名前を入力して学習を始めましょう
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>お名前</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="田中太郎"
                placeholderTextColor={COLORS.primary[300]}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={handleLogin}
              />
            </View>

            <View style={styles.characterContainer}>
              <Text style={styles.label}>キャラクターを選ぶ</Text>
              <View style={styles.characterGrid}>
                {CHARACTERS.map((char) => (
                  <TouchableOpacity
                    key={char.emoji}
                    style={[
                      styles.characterButton,
                      selectedCharacter === char.emoji && styles.characterButtonSelected,
                    ]}
                    onPress={() => setSelectedCharacter(char.emoji)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.characterEmoji}>{char.emoji}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <Button
              title="始める"
              onPress={handleLogin}
              size="lg"
              variant="primary"
              fullWidth
            />
          </Card>

          {/* Features */}
          <View style={styles.featuresContainer}>
            <FeatureItem icon="📚" text="豊富なカテゴリー" />
            <FeatureItem icon="📊" text="学習履歴の記録" />
            <FeatureItem icon="🌙" text="ダークモード対応" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

interface FeatureItemProps {
  icon: string;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <View style={styles.featureItem}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background.ivory,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING['2xl'],
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: SPACING.lg,
  },
  appTitle: {
    fontSize: TYPOGRAPHY.fontSize['4xl'],
    color: COLORS.sage[600],
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.primary[600],
  },
  loginCard: {
    marginBottom: SPACING.xl,
  },
  welcomeText: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    color: COLORS.primary[800],
    fontWeight: '700',
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.primary[600],
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: SPACING.lg,
  },
  label: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.primary[700],
    fontWeight: '600',
    marginBottom: SPACING.sm,
  },
  input: {
    backgroundColor: COLORS.background.ivory,
    borderWidth: 1.5,
    borderColor: COLORS.primary[200],
    borderRadius: 12,
    padding: SPACING.md,
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.primary[800],
    fontFamily: TYPOGRAPHY.fontFamily.regular,
  },
  characterContainer: {
    marginBottom: SPACING.lg,
  },
  characterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
    marginTop: SPACING.sm,
  },
  characterButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.background.ivory,
    borderWidth: 2,
    borderColor: COLORS.primary[200],
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterButtonSelected: {
    borderColor: COLORS.sage[500],
    backgroundColor: COLORS.sage[50],
    borderWidth: 3,
  },
  characterEmoji: {
    fontSize: 32,
  },
  featuresContainer: {
    marginTop: SPACING.xl,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: SPACING.md,
  },
  featureText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.primary[700],
  },
});
