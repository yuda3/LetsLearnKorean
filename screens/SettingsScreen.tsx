import React, { useState, useEffect } from 'react';
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
  const [dailyGoal, setDailyGoal] = useState(5);

  useEffect(() => {
    loadDailyGoal();
  }, []);

  const loadDailyGoal = async () => {
    const goal = await storageService.getDailyGoal();
    setDailyGoal(goal);
  };

  const handleClearData = () => {
    Alert.alert(
      '모든 데이터 삭제 / データをクリア',
      '정말로 모든 데이터를 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.\n\n本当にすべてのデータを削除しますか？この操作は取り消せません。',
      [
        {
          text: '취소 / キャンセル',
          style: 'cancel',
        },
        {
          text: '삭제 / 削除',
          style: 'destructive',
          onPress: async () => {
            try {
              await storageService.clearAll();
              Alert.alert(
                '성공 / 成功',
                '모든 데이터가 삭제되었습니다. 앱을 다시 시작해주세요.\n\nすべてのデータが削除されました。アプリを再起動してください。'
              );
            } catch (error) {
              console.error('Error clearing data:', error);
              Alert.alert(
                '오류 / エラー',
                '데이터 삭제에 실패했습니다.\n\nデータの削除に失敗しました。'
              );
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

  const handleDailyGoalChange = () => {
    Alert.alert(
      '일일 목표 / 1日の目標',
      '하루에 완료하고 싶은 퀴즈 수를 선택하세요\n\n1日に完了したいクイズの数を選択してください',
      [
        {
          text: '3개 / 3個',
          onPress: () => updateGoal(3),
        },
        {
          text: '5개 / 5個',
          onPress: () => updateGoal(5),
        },
        {
          text: '10개 / 10個',
          onPress: () => updateGoal(10),
        },
        {
          text: '더보기 / さらに表示',
          onPress: showMoreGoalOptions,
        },
        {
          text: '취소 / キャンセル',
          style: 'cancel',
        },
      ]
    );
  };

  const showMoreGoalOptions = () => {
    Alert.alert(
      '일일 목표 / 1日の目標',
      '하루에 완료하고 싶은 퀴즈 수를 선택하세요\n\n1日に完了したいクイズの数を選択してください',
      [
        {
          text: '15개 / 15個',
          onPress: () => updateGoal(15),
        },
        {
          text: '20개 / 20個',
          onPress: () => updateGoal(20),
        },
        {
          text: '돌아가기 / 戻る',
          onPress: handleDailyGoalChange,
        },
        {
          text: '취소 / キャンセル',
          style: 'cancel',
        },
      ]
    );
  };

  const updateGoal = async (goal: number) => {
    try {
      await storageService.updateDailyGoal(goal);
      setDailyGoal(goal);
      Alert.alert(
        '성공 / 成功',
        `일일 목표를 ${goal}개로 설정했습니다.\n\n1日の目標を${goal}個に設定しました。`
      );
    } catch (error) {
      console.error('Error updating daily goal:', error);
      Alert.alert(
        '오류 / エラー',
        '목표 설정에 실패했습니다.\n\n目標の設定に失敗しました。'
      );
    }
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

        {/* Learning Goal Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.primary[700] }]}>学習目標</Text>
          <SettingItem
            icon="🎯"
            titleJa="1日の目標"
            titleKo="일일 목표"
            colors={colors}
            onPress={handleDailyGoalChange}
            rightElement={
              <View style={styles.goalValueContainer}>
                <Text style={[styles.goalValue, { color: colors.sage[600] }]}>
                  {dailyGoal}個
                </Text>
                <Text style={[styles.settingArrow, { color: colors.primary[400] }]}>›</Text>
              </View>
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
  goalValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  goalValue: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '700',
  },
  versionText: {
    textAlign: 'center',
    fontSize: TYPOGRAPHY.fontSize.sm,
    marginTop: SPACING.xl,
  },
});
