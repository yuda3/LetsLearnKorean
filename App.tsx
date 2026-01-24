import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_700Bold,
} from '@expo-google-fonts/noto-sans-jp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { LoginScreen } from './screens/LoginScreen';
import { MainNavigator } from './navigation/MainNavigator';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import './global.css';

function AppContent() {
  const { user, isLoading: authLoading } = useAuth();
  const { colors, mode } = useTheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [showSecondLogo, setShowSecondLogo] = useState(false);
  const [showThirdLogo, setShowThirdLogo] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [logo2FadeAnim] = useState(new Animated.Value(0));
  const [logo3FadeAnim] = useState(new Animated.Value(0));

  const [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // 폰트와 인증이 모두 로드될 때까지 대기
        if (fontsLoaded && !authLoading) {
          // 첫 번째 로고 표시 (1.2초)
          await new Promise(resolve => setTimeout(resolve, 1200));

          // 첫 번째 로고 페이드 아웃
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }).start();

          await new Promise(resolve => setTimeout(resolve, 400));

          // 두 번째 로고로 전환
          setShowSecondLogo(true);

          // 두 번째 로고 페이드 인
          Animated.timing(logo2FadeAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }).start();

          // 두 번째 로고 표시 (1.5초)
          await new Promise(resolve => setTimeout(resolve, 1500));

          // 두 번째 로고 페이드 아웃
          Animated.timing(logo2FadeAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }).start();

          await new Promise(resolve => setTimeout(resolve, 400));

          // 세 번째 이미지로 전환
          setShowSecondLogo(false);
          setShowThirdLogo(true);

          // 세 번째 이미지 페이드 인
          Animated.timing(logo3FadeAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }).start();

          // 세 번째 이미지 표시 (3초)
          await new Promise(resolve => setTimeout(resolve, 3000));

          // 세 번째 이미지 페이드 아웃
          Animated.timing(logo3FadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            setAppIsReady(true);
          });
        }
      } catch (e) {
        console.warn(e);
        setAppIsReady(true);
      }
    }

    prepare();
  }, [fontsLoaded, authLoading, fadeAnim, logo2FadeAnim, logo3FadeAnim]);

  // Show splash screen while loading
  if (!appIsReady) {
    return (
      <View style={[styles.splashContainer, { backgroundColor: '#ffffff' }]}>
        {!showSecondLogo && !showThirdLogo ? (
          <Animated.View style={[styles.splashContent, { opacity: fadeAnim }]}>
            <Image
              source={require('./assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animated.View>
        ) : showSecondLogo && !showThirdLogo ? (
          <Animated.View style={[styles.splashContent, { opacity: logo2FadeAnim }]}>
            <Image
              source={require('./assets/logo2.png')}
              style={styles.logo2}
              resizeMode="contain"
            />
            <ActivityIndicator size="large" color="#6B9BD1" style={styles.splashLoader} />
          </Animated.View>
        ) : (
          <Animated.View style={[styles.splashContent, { opacity: logo3FadeAnim }]}>
            <Image
              source={require('./assets/Second.png')}
              style={styles.logo3}
              resizeMode="contain"
            />
          </Animated.View>
        )}
      </View>
    );
  }

  // Show login screen if no user
  if (!user) {
    return <LoginScreen />;
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
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  logo2: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  logo3: {
    width: 300,
    height: 300,
  },
  splashLoader: {
    marginTop: 20,
  },
});
