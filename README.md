# Let's Learn Korean - 한국語学習アプリ

日本人ユーザー向けの韓国語学習クイズアプリです。Mujiスタイルのミニマルで洗練されたデザインを採用しています。

## デザインコンセプト

**「内추럴 & 모던 (Natural & Modern)」** - 無印良品(Muji)スタイル

### 主な特徴

- 🎨 **心地よいカラーパレット**: ベージュとアースカラーを基調とした目に優しい配色
- 📱 **シンプルで直感的なUI**: 40-50代の方でも使いやすい大きなフォントと余白
- 🇯🇵 **日本語完全対応**: Noto Sans JPフォントを使用
- ✨ **滑らかなアニメーション**: 心地よいフィードバックと動き

## カラーパレット

### メインカラー
- **ウォームグレー**: 落ち着いた基調色
- **クリームホワイト**: 背景とカード
- **セージグリーン**: アクセントと正解表示

### ポイントカラー
- **ソフトコーラル**: ボタンとエラー表示
- **ミント**: サブアクセント

## 画面構成

### 1. ホーム画面
- 温かみのある挨拶メッセージ
- 学習進捗の可視化
- カテゴリー別の学習コンテンツ
- 復習が必要な単語の表示

### 2. クイズ画面
- 画面中央に大きく表示される問題
- 直感的な選択肢ボタン
- 滑らかなフィードバックアニメーション
- わかりやすい解説（「もっと見る」で詳細表示）

### 3. 結果画面
- 達成感を与えるビジュアル
- 励ましのメッセージ
- SNSシェア機能（予定）
- 次のアクションへの導線

## 技術スタック

- **React Native**: クロスプラットフォーム開発
- **Expo**: 開発環境とツール
- **TypeScript**: 型安全な開発
- **NativeWind**: Tailwind CSSスタイリング
- **Reanimated**: 滑らかなアニメーション
- **Noto Sans JP**: 日本語フォント

## セットアップ

### 必要な環境
- Node.js 18以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# iOSの場合（Macのみ）
npm run ios

# Androidの場合
npm run android

# Webブラウザで実行
npm run web
```

## 開発ガイド

### プロジェクト構造

```
LetsLearnKorean/
├── App.tsx                 # メインエントリーポイント
├── screens/               # 画面コンポーネント
│   ├── HomeScreen.tsx     # ホーム画面
│   ├── QuizScreen.tsx     # クイズ画面
│   └── ResultScreen.tsx   # 結果画面
├── components/            # 再利用可能なコンポーネント
│   ├── Button.tsx         # ボタンコンポーネント
│   ├── Card.tsx          # カードコンポーネント
│   └── ProgressBar.tsx   # プログレスバー
├── constants/            # 定数とテーマ
│   └── theme.ts         # デザインシステム
└── tailwind.config.js   # Tailwind CSS設定
```

### デザインシステム

全てのカラー、タイポグラフィ、スペーシングは `constants/theme.ts` で管理されています。

```typescript
import { COLORS, TYPOGRAPHY, SPACING } from './constants/theme';
```

### カスタムコンポーネント

#### Button
```typescript
<Button
  title="クイズを始める"
  onPress={handlePress}
  variant="primary"  // primary | secondary | outline
  size="lg"          // sm | md | lg
  fullWidth
/>
```

#### Card
```typescript
<Card variant="elevated">
  {/* コンテンツ */}
</Card>
```

#### ProgressBar
```typescript
<ProgressBar
  progress={75}
  label="完了率"
  showPercentage
/>
```

## 学習コンテンツ

### カテゴリー

1. **旅行会話**
   - レストランでの注文
   - 道を尋ねる
   - ショッピング

2. **日常会話**
   - 挨拶
   - 自己紹介
   - 感謝の表現

3. **基本フレーズ**
   - よく使う表現
   - 数字と時間
   - 家族の呼び方

## 今後の予定

- [ ] ユーザー認証機能
- [ ] 学習履歴の保存
- [ ] より多くのクイズカテゴリー
- [ ] 音声読み上げ機能
- [ ] SNSシェア機能
- [ ] ダークモード対応
- [ ] オフライン対応

## ライセンス

MIT

## 開発者

このアプリは日本の20-50代のユーザーを対象に、使いやすさと美しいデザインを最優先に設計されました。

---

**韓国語学習を楽しく、美しく。**
