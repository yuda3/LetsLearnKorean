import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Platform } from 'react-native';
import { ImprovedHomeScreen } from '../screens/ImprovedHomeScreen';
import { PracticeScreen } from '../screens/PracticeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { QuizSetupScreen } from '../screens/QuizSetupScreen';
import { QuizScreen } from '../screens/QuizScreen';
import { ResultScreen } from '../screens/ResultScreen';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { getRandomQuizzes } from '../data/quizData';
import { UserLevel, QuizCategory } from '../types';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Home Stack Navigator
function HomeStack() {
  const { user, updateUserLevel } = useAuth();
  const { colors } = useTheme();
  const [quizState, setQuizState] = React.useState<{
    questions: any[];
    category: QuizCategory;
    score: number;
    correctAnswers: number[];
    incorrectAnswers: number[];
    quizStartTime: number;
    timeSpent: number;
  }>({
    questions: getRandomQuizzes(5),
    category: 'basic',
    score: 0,
    correctAnswers: [],
    incorrectAnswers: [],
    quizStartTime: Date.now(),
    timeSpent: 0,
  });

  const handleStartQuiz = () => {
    setQuizState({
      ...quizState,
      questions: getRandomQuizzes(5),
      score: 0,
      correctAnswers: [],
      incorrectAnswers: [],
      quizStartTime: Date.now(),
    });
  };

  const handleStartQuizWithParams = async (questionCount: number, level?: UserLevel) => {
    if (level && user && !user.level) {
      await updateUserLevel(level);
    }

    setQuizState({
      ...quizState,
      questions: getRandomQuizzes(questionCount),
      score: 0,
      correctAnswers: [],
      incorrectAnswers: [],
      quizStartTime: Date.now(),
    });
  };

  const handleQuizComplete = (score: number, correct: number[], incorrect: number[]) => {
    setQuizState({
      ...quizState,
      score,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      timeSpent: Math.floor((Date.now() - quizState.quizStartTime) / 1000),
    });
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background.ivory },
      }}
    >
      <Stack.Screen name="HomeMain">
        {(props) => (
          <ImprovedHomeScreen
            {...props}
            onStartQuiz={() => props.navigation.navigate('QuizSetup')}
            onNavigateToProfile={() => props.navigation.navigate('ProfileTab')}
            onNavigateToSettings={() => props.navigation.navigate('SettingsTab')}
            userName={user?.name}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="QuizSetup">
        {(props) => (
          <QuizSetupScreen
            {...props}
            onStart={(count, level) => {
              handleStartQuizWithParams(count, level);
              props.navigation.navigate('Quiz');
            }}
            onBack={() => props.navigation.goBack()}
            userLevel={user?.level}
            showLevelSelection={!user?.level}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Quiz">
        {(props) => (
          <QuizScreen
            {...props}
            questions={quizState.questions}
            category={quizState.category}
            onComplete={(score, correct, incorrect) => {
              handleQuizComplete(score, correct, incorrect);
              props.navigation.navigate('Result');
            }}
            onExit={() => props.navigation.navigate('HomeMain')}
            userName={user?.name}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Result">
        {(props) => (
          <ResultScreen
            {...props}
            score={quizState.score}
            totalQuestions={quizState.questions.length}
            onRetry={() => props.navigation.navigate('QuizSetup')}
            onHome={() => props.navigation.navigate('HomeMain')}
            onShare={() => {
              // Share functionality placeholder - can be implemented with expo-sharing
            }}
            correctAnswers={quizState.correctAnswers}
            incorrectAnswers={quizState.incorrectAnswers}
            timeSpent={quizState.timeSpent}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

// Practice Stack Navigator
function PracticeStack() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background.ivory },
      }}
    >
      <Stack.Screen name="PracticeMain" component={PracticeScreen} />
    </Stack.Navigator>
  );
}

// Profile Stack Navigator
function ProfileStack() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background.ivory },
      }}
    >
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

// Settings Stack Navigator
function SettingsStack() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background.ivory },
      }}
    >
      <Stack.Screen name="SettingsMain" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// Tab Icon Component
const TabIcon = ({ focused, icon }: { focused: boolean; icon: string }) => {
  return <Text style={{ fontSize: focused ? 26 : 24 }}>{icon}</Text>;
};

// Main Tab Navigator
export function MainNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background.cream,
          borderTopColor: colors.primary[200],
          borderTopWidth: 1,
          paddingBottom: Platform.OS === 'ios' ? 20 : 8,
          paddingTop: 8,
          height: Platform.OS === 'ios' ? 88 : 68,
        },
        tabBarActiveTintColor: colors.sage[600],
        tabBarInactiveTintColor: colors.primary[400],
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="🏠" />,
        }}
      />
      <Tab.Screen
        name="PracticeTab"
        component={PracticeStack}
        options={{
          tabBarLabel: '練習',
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="📝" />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: 'プロフィール',
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="👤" />,
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStack}
        options={{
          tabBarLabel: '設定',
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="⚙️" />,
        }}
      />
    </Tab.Navigator>
  );
}
