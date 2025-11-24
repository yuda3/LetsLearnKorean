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
import './global.css';

function AppContent() {
  const { user, isLoading: authLoading } = useAuth();
  const { colors, mode } = useTheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));

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
          // 스플래시 스크린을 약간 보여준 후 숨김 (최소 2초)
          await new Promise(resolve => setTimeout(resolve, 2000));
          // 페이드 아웃 애니메이션
          Animated.timing(fadeAnim, {
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
  }, [fontsLoaded, authLoading, fadeAnim]);

  // Show splash screen while loading
  if (!appIsReady) {
    return (
      <View style={[styles.splashContainer, { backgroundColor: '#7B947E' }]}>
        <Animated.View style={[styles.splashContent, { opacity: fadeAnim }]}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <ActivityIndicator size="large" color="#ffffff" style={styles.splashLoader} />
        </Animated.View>
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
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
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
    marginBottom: 40,
  },
  splashLoader: {
    marginTop: 20,
  },
});
