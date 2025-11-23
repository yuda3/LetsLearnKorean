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
import { QuizSetupScreen } from './screens/QuizSetupScreen';
import { ResultScreen } from './screens/ResultScreen';
import { LoginScreen } from './screens/LoginScreen';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { quizQuestions, getRandomQuizzes } from './data/quizData';
import { UserLevel } from './types';
import './global.css';

type Screen = 'home' | 'setup' | 'quiz' | 'result';

function AppContent() {
  const { user, isLoading: authLoading, updateUserLevel } = useAuth();
  const { colors, mode } = useTheme();
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState(getRandomQuizzes(5));
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number[]>([]);
  const [quizStartTime, setQuizStartTime] = useState<number>(Date.now());
  const [timeSpent, setTimeSpent] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
  });

  const handleStartSetup = useCallback(() => {
    setCurrentScreen('setup');
  }, []);

  const handleStartQuiz = useCallback(async (questionCount: number, level?: UserLevel) => {
    // Update user level if provided and user doesn't have a level set
    if (level && user && !user.level) {
      await updateUserLevel(level);
    }

    setQuizScore(0);
    setCorrectAnswers([]);
    setIncorrectAnswers([]);
    setCurrentQuestions(getRandomQuizzes(questionCount));
    setQuizStartTime(Date.now());
    setCurrentScreen('quiz');
  }, [user, updateUserLevel]);

  const handleQuizComplete = useCallback((score: number, correct: number[], incorrect: number[]) => {
    setQuizScore(score);
    setCorrectAnswers(correct);
    setIncorrectAnswers(incorrect);
    const endTime = Date.now();
    setTimeSpent(Math.floor((endTime - quizStartTime) / 1000));
    setCurrentScreen('result');
  }, [quizStartTime]);

  const handleRetry = useCallback(() => {
    setCurrentScreen('setup');
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
          onStartQuiz={handleStartSetup}
          onReview={handleReview}
          userName={user.name}
        />
      )}

      {currentScreen === 'setup' && (
        <QuizSetupScreen
          onStart={handleStartQuiz}
          onBack={handleGoHome}
          userLevel={user.level}
          showLevelSelection={!user.level}
        />
      )}

      {currentScreen === 'quiz' && (
        <QuizScreen
          questions={currentQuestions}
          category="basic"
          onComplete={handleQuizComplete}
          onExit={handleGoHome}
          userName={user.name}
        />
      )}

      {currentScreen === 'result' && (
        <ResultScreen
          score={quizScore}
          totalQuestions={currentQuestions.length}
          onRetry={handleRetry}
          onHome={handleGoHome}
          onShare={handleShare}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          timeSpent={timeSpent}
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
