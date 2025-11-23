import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { Card } from '../components/Card';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { useTheme } from '../contexts/ThemeContext';
import { storageService } from '../services/storageService';

interface SettingItemProps {
  icon: string;
  titleJa: string;
  titleKo: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
  colors: any;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  titleJa,
  titleKo,
  onPress,
  rightElement,
  colors,
}) => (
  <TouchableOpacity
    style={[styles.settingItem, { backgroundColor: colors.background.cream }]}
    onPress={onPress}
    disabled={!onPress}
    activeOpacity={onPress ? 0.7 : 1}
  >
    <View style={styles.settingLeft}>
      <Text style={styles.settingIcon}>{icon}</Text>
      <View>
        <Text style={[styles.settingTitleJa, { color: colors.primary[600] }]}>{titleJa}</Text>
        <Text style={[styles.settingTitleKo, { color: colors.primary[800] }]}>{titleKo}</Text>
      </View>
    </View>
    {rightElement || (
      <Text style={[styles.settingArrow, { color: colors.primary[400] }]}>›</Text>
    )}
  </TouchableOpacity>
);

export const SettingsScreen: React.FC = () => {
  const { colors, mode, toggleTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleClearData = () => {
    Alert.alert(
      'データをクリア',
      '本当にすべてのデータを削除しますか？この操作は取り消せません。',
      [
        {
          text: 'キャンセル',
          style: 'cancel',
        },
        {
          text: '削除',
          style: 'destructive',
          onPress: async () => {
            try {
              await storageService.clearAll();
              Alert.alert('成功', 'すべてのデータが削除されました。アプリを再起動してください。');
            } catch (error) {
              Alert.alert('エラー', 'データの削除に失敗しました。');
            }
          },
        },
      ]
    );
  };

  const handleAbout = () => {
    Alert.alert(
      'LetsLearnKorean について',
      'バージョン: 1.0.0\n\n楽しく日本語を学習できるクイズアプリです。\n\n開発: LetsLearnKorean Team'
    );
  };

  const handleHelp = () => {
    Alert.alert(
      'ヘルプ',
      '使い方:\n\n1. ホーム画面からカテゴリを選択\n2. クイズに挑戦\n3. 結果を確認して復習\n4. 毎日学習して連続記録を伸ばそう！'
    );
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.primary[800] }]}>設定</Text>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[700] }]}>外観</Text>
          <SettingItem
            icon="🌓"
            titleJa="ダークモード"
            titleKo="다크 모드"
            colors={colors}
            rightElement={
              <Switch
                value={mode === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: colors.primary[200], true: colors.sage[400] }}
                thumbColor={mode === 'dark' ? colors.sage[600] : colors.primary[100]}
              />
            }
          />
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[700] }]}>通知</Text>
          <SettingItem
            icon="🔔"
            titleJa="通知を有効にする"
            titleKo="알림 활성화"
            colors={colors}
            rightElement={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: colors.primary[200], true: colors.sage[400] }}
                thumbColor={notificationsEnabled ? colors.sage[600] : colors.primary[100]}
              />
            }
          />
        </View>

        {/* Sound Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[700] }]}>サウンド</Text>
          <SettingItem
            icon="🔊"
            titleJa="サウンドを有効にする"
            titleKo="사운드 활성화"
            colors={colors}
            rightElement={
              <Switch
                value={soundEnabled}
                onValueChange={setSoundEnabled}
                trackColor={{ false: colors.primary[200], true: colors.sage[400] }}
                thumbColor={soundEnabled ? colors.sage[600] : colors.primary[100]}
              />
            }
          />
        </View>

        {/* Data Management Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[700] }]}>
            データ管理
          </Text>
          <SettingItem
            icon="🗑️"
            titleJa="すべてのデータをクリア"
            titleKo="모든 데이터 삭제"
            colors={colors}
            onPress={handleClearData}
          />
        </View>

        {/* Information Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[700] }]}>情報</Text>
          <SettingItem
            icon="❓"
            titleJa="ヘルプ・FAQ"
            titleKo="도움말 · FAQ"
            colors={colors}
            onPress={handleHelp}
          />
          <View style={{ height: SPACING.sm }} />
          <SettingItem
            icon="ℹ️"
            titleJa="アプリについて"
            titleKo="앱 정보"
            colors={colors}
            onPress={handleAbout}
          />
        </View>

        {/* Version */}
        <Text style={[styles.versionText, { color: colors.primary[400] }]}>
          Version 1.0.0
        </Text>
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
  },
  section: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '600',
    marginBottom: SPACING.md,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    ...SHADOWS.soft,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 24,
    marginRight: SPACING.md,
  },
  settingTitleJa: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    marginBottom: 2,
  },
  settingTitleKo: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
  },
  settingArrow: {
    fontSize: 24,
    marginLeft: SPACING.sm,
  },
  versionText: {
    textAlign: 'center',
    fontSize: TYPOGRAPHY.fontSize.sm,
    marginTop: SPACING.xl,
  },
});
