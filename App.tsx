import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import {
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_700Bold,
} from '@expo-google-fonts/noto-sans-jp';

import { HomeScreen } from './screens/HomeScreen';
import { QuizScreen } from './screens/QuizScreen';
import { ResultScreen } from './screens/ResultScreen';
import { COLORS } from './constants/theme';
import './global.css';

type Screen = 'home' | 'quiz' | 'result';

// Sample quiz data - 일본 사용자를 위한 한국어 학습 퀴즈
const sampleQuestions = [
  {
    id: 1,
    questionJa: 'レストランで食べ物を注文するとき',
    question: '「これをください」は韓国語で？',
    options: [
      '이것 주세요',
      '저것 주세요',
      '그것 주세요',
      '다 주세요',
    ],
    correctAnswer: 0,
    explanation: '「이것(これ)+ 주세요(ください)」で「これをください」という意味になります。',
    detailedExplanation:
      '韓国語の指示代名詞は3種類あります：이것(これ・近くのもの)、그것(それ・相手の近くのもの)、저것(あれ・遠くのもの)。レストランでメニューを指して注文する時は「이것 주세요」が最も自然です。',
  },
  {
    id: 2,
    questionJa: '道を尋ねるとき',
    question: '「トイレはどこですか？」は韓国語で？',
    options: [
      '화장실이 어디예요?',
      '화장실이 뭐예요?',
      '화장실이 누구예요?',
      '화장실이 언제예요?',
    ],
    correctAnswer: 0,
    explanation: '「화장실(トイレ)+ 어디예요?(どこですか?)」で場所を尋ねます。',
    detailedExplanation:
      '疑問詞の使い分け：어디(どこ)、뭐/무엇(何)、누구(誰)、언제(いつ)、왜(なぜ)、어떻게(どのように)。場所を聞く時は必ず「어디」を使います。',
  },
  {
    id: 3,
    questionJa: '感謝を表現するとき',
    question: '「ありがとうございます」のより丁寧な表現は？',
    options: [
      '고마워',
      '감사합니다',
      '괜찮아요',
      '미안해요',
    ],
    correctAnswer: 1,
    explanation: '「감사합니다」は「ありがとうございます」の最も丁寧な表現です。',
    detailedExplanation:
      '感謝の表現レベル：고마워(カジュアル・友達間)< 고마워요(丁寧)< 고맙습니다(より丁寧)< 감사합니다(最も丁寧・ビジネスや目上の人に)。初対面や公式な場面では「감사합니다」が安全です。',
  },
  {
    id: 4,
    questionJa: '挨拶の基本',
    question: '「おはようございます」は韓国語で？',
    options: [
      '안녕하세요',
      '잘 자요',
      '안녕히 가세요',
      '반갑습니다',
    ],
    correctAnswer: 0,
    explanation: '「안녕하세요」は時間帯に関係なく使える基本的な挨拶です。',
    detailedExplanation:
      '韓国語では日本語と違い、朝昼晩で挨拶を変えません。「안녕하세요」がいつでも使える万能な挨拶表現です。より親しい関係なら「안녕」だけでもOKです。',
  },
  {
    id: 5,
    questionJa: 'カフェでの注文',
    question: '「アイスアメリカーノ一つください」は？',
    options: [
      '아이스 아메리카노 한 잔 주세요',
      '아이스 아메리카노 두 잔 주세요',
      '아이스 아메리카노 세 잔 주세요',
      '뜨거운 아메리카노 주세요',
    ],
    correctAnswer: 0,
    explanation: '한 잔(一杯)は「ひとつ」という意味の数え方です。',
    detailedExplanation:
      '飲み物を数える時は「잔(杯)」を使います：한 잔(1杯)、두 잔(2杯)、세 잔(3杯)。아이스(アイス)と뜨거운(ホット)も覚えておくと便利です。',
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [quizScore, setQuizScore] = useState(0);

  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
  });

  const handleStartQuiz = useCallback(() => {
    setQuizScore(0);
    setCurrentScreen('quiz');
  }, []);

  const handleQuizComplete = useCallback((score: number) => {
    setQuizScore(score);
    setCurrentScreen('result');
  }, []);

  const handleRetry = useCallback(() => {
    setQuizScore(0);
    setCurrentScreen('quiz');
  }, []);

  const handleGoHome = useCallback(() => {
    setCurrentScreen('home');
  }, []);

  const handleReview = useCallback(() => {
    // TODO: Implement review functionality
    console.log('Review functionality to be implemented');
  }, []);

  const handleShare = useCallback(() => {
    // TODO: Implement share functionality
    console.log('Share functionality to be implemented');
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.sage[500]} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {currentScreen === 'home' && (
        <HomeScreen
          onStartQuiz={handleStartQuiz}
          onReview={handleReview}
          userName="ユーザー"
        />
      )}

      {currentScreen === 'quiz' && (
        <QuizScreen
          questions={sampleQuestions}
          onComplete={handleQuizComplete}
          onExit={handleGoHome}
        />
      )}

      {currentScreen === 'result' && (
        <ResultScreen
          score={quizScore}
          totalQuestions={sampleQuestions.length}
          onRetry={handleRetry}
          onHome={handleGoHome}
          onShare={handleShare}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.ivory,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background.ivory,
  },
});
