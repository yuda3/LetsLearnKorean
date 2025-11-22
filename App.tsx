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
import { LoginScreen } from './screens/LoginScreen';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { quizQuestions, getRandomQuizzes } from './data/quizData';
import './global.css';

type Screen = 'home' | 'quiz' | 'result';

function AppContent() {
  const { user, isLoading: authLoading } = useAuth();
  const { colors, mode } = useTheme();
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState(getRandomQuizzes(5));

  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
  });

  const handleStartQuiz = useCallback(() => {
    setQuizScore(0);
    setCurrentQuestions(getRandomQuizzes(5));
    setCurrentScreen('quiz');
  }, []);

  const handleQuizComplete = useCallback((score: number) => {
    setQuizScore(score);
    setCurrentScreen('result');
  }, []);

  const handleRetry = useCallback(() => {
    setQuizScore(0);
    setCurrentQuestions(getRandomQuizzes(5));
    setCurrentScreen('quiz');
  }, []);

  const handleGoHome = useCallback(() => {
    setCurrentScreen('home');
  }, []);

  const handleReview = useCallback(() => {
    console.log('Review functionality to be implemented');
  }, []);

  const handleShare = useCallback(() => {
    console.log('Share functionality to be implemented');
  }, []);

  if (!fontsLoaded || authLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background.ivory }]}>
        <ActivityIndicator size="large" color={colors.sage[500]} />
      </View>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background.ivory }]}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />

      {currentScreen === 'home' && (
        <HomeScreen
          onStartQuiz={handleStartQuiz}
          onReview={handleReview}
          userName={user.name}
        />
      )}

      {currentScreen === 'quiz' && (
        <QuizScreen
          questions={currentQuestions}
          category="basic"
          onComplete={handleQuizComplete}
          onExit={handleGoHome}
        />
      )}

      {currentScreen === 'result' && (
        <ResultScreen
          score={quizScore}
          totalQuestions={currentQuestions.length}
          onRetry={handleRetry}
          onHome={handleGoHome}
          onShare={handleShare}
        />
      )}
    </View>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
