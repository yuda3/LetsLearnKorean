import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_700Bold,
} from '@expo-google-fonts/noto-sans-jp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { LoginScreen } from './screens/LoginScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { MainNavigator } from './navigation/MainNavigator';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { storageService } from './services/storageService';
import './global.css';

function AppContent() {
  const { user, isLoading: authLoading } = useAuth();
  const { colors, mode } = useTheme();
  const [onboardingCompleted, setOnboardingCompleted] = useState<boolean | null>(null);

  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
  });

  useEffect(() => {
    checkOnboardingStatus();
  }, [user]);

  const checkOnboardingStatus = async () => {
    const status = await storageService.getOnboardingStatus();
    setOnboardingCompleted(status.completed);
  };

  const handleOnboardingComplete = async () => {
    await storageService.completeOnboarding();
    setOnboardingCompleted(true);
  };

  // Show loading while fonts or auth is loading
  if (!fontsLoaded || authLoading || onboardingCompleted === null) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background.ivory }]}>
        <ActivityIndicator size="large" color={colors.sage[500]} />
      </View>
    );
  }

  // Show login screen if no user
  if (!user) {
    return <LoginScreen />;
  }

  // Show onboarding if not completed
  if (!onboardingCompleted) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  // Show main app with navigation
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
        <MainNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
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
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
