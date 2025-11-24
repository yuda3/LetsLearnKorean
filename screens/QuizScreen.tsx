import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SpeechButton } from '../components/SpeechButton';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';
import { Question, QuizCategory, QuizResult } from '../types';
import { storageService } from '../services/storageService';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

interface QuizScreenProps {
  questions: Question[];
  category?: QuizCategory;
  onComplete: (score: number, correctAnswers: number[], incorrectAnswers: number[]) => void;
  onExit: () => void;
  userName?: string;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  category = 'basic',
  onComplete,
  onExit,
  userName,
}) => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showDetailedExplanation, setShowDetailedExplanation] = useState(false);
  const [feedbackAnimation] = useState(new Animated.Value(0));
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number[]>([]);
  const [startTime] = useState(Date.now());
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Reset quiz state when questions change (new quiz started)
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setShowDetailedExplanation(false);
    setCorrectAnswers([]);
    setIncorrectAnswers([]);
    feedbackAnimation.setValue(0);

    // Clear any pending auto-advance timer
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
      setAutoAdvanceTimer(null);
    }
  }, [questions]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    // Animate feedback
    Animated.spring(feedbackAnimation, {
      toValue: 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();

    // Update score and track answers
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setCorrectAnswers([...correctAnswers, currentQuestion.id]);
    } else {
      setIncorrectAnswers([...incorrectAnswers, currentQuestion.id]);
    }

    // Auto-advance to next question after 3 seconds
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);
    setAutoAdvanceTimer(timer);
  };

  const handleNext = async () => {
    // Clear auto-advance timer
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
      setAutoAdvanceTimer(null);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowDetailedExplanation(false);
      feedbackAnimation.setValue(0);
    } else {
      // Save quiz result
      // Use current state values directly (already updated in handleAnswerSelect)
      const finalCorrectAnswers = correctAnswers;
      const finalIncorrectAnswers = incorrectAnswers;
      // Use the length of correct answers as the final score
      const finalScore = finalCorrectAnswers.length;

      if (user) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        const result: QuizResult = {
          id: Date.now().toString(),
          userId: user.id,
          category,
          score: Math.round((finalScore / questions.length) * 100),
          totalQuestions: questions.length,
          correctAnswers: finalCorrectAnswers,
          incorrectAnswers: finalIncorrectAnswers,
          completedAt: new Date().toISOString(),
          timeSpent,
        };

        try {
          await storageService.saveQuizResult(result);
          await storageService.updateLearningStats(result);
          await storageService.updateCategoryProgress(result);
        } catch (error) {
          console.error('Error saving quiz result:', error);
        }
      }

      onComplete(finalScore, finalCorrectAnswers, finalIncorrectAnswers);
    }
  };

  const feedbackScale = feedbackAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  const feedbackOpacity = feedbackAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
      }
    };
  }, [autoAdvanceTimer]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onExit} style={[styles.exitButton, { backgroundColor: colors.background.cream }]}>
              <Text style={[styles.exitText, { color: colors.primary[600] }]}>×</Text>
            </TouchableOpacity>
            <View style={styles.progressContainer}>
              {userName && (
                <Text style={[styles.userNameText, { color: colors.primary[700] }]}>{userName}さん</Text>
              )}
              <View style={[styles.progressBar, { backgroundColor: colors.primary[100] }]}>
                <View style={[styles.progressFill, { width: `${progress}%`, backgroundColor: colors.sage[500] }]} />
              </View>
              <Text style={[styles.progressText, { color: colors.primary[600] }]}>
                {currentQuestionIndex + 1} / {questions.length}
              </Text>
            </View>
          </View>

          {/* Question */}
          <View style={styles.questionContainer}>
            <Text style={[styles.questionJa, { color: colors.primary[600] }]}>{currentQuestion.questionJa}</Text>
            <Text style={[styles.question, { color: colors.primary[800] }]}>{currentQuestion.question}</Text>
          </View>

          {/* Answer Options */}
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <AnswerOption
                key={index}
                text={option}
                onPress={() => handleAnswerSelect(index)}
                selected={selectedAnswer === index}
                correct={showResult && index === currentQuestion.correctAnswer}
                incorrect={showResult && selectedAnswer === index && !isCorrect}
                disabled={showResult}
                colors={colors}
              />
            ))}
          </View>

          {/* Feedback & Explanation */}
          {showResult && (
            <TouchableOpacity
              activeOpacity={1}
              onPress={handleNext}
              style={styles.feedbackTouchable}
            >
              <Animated.View
                style={[
                  styles.feedbackContainer,
                  {
                    opacity: feedbackOpacity,
                    transform: [{ scale: feedbackScale }],
                  },
                ]}
              >
                <View
                  style={[
                    styles.feedbackCircle,
                    {
                      backgroundColor: isCorrect ? colors.sage[500] : colors.coral[500],
                    },
                  ]}
                >
                  <Text style={styles.feedbackIcon}>
                    {isCorrect ? '✓' : '×'}
                  </Text>
                </View>

                <Card style={styles.explanationCard}>
                  <Text style={[styles.explanationTitle, { color: colors.primary[800] }]}>
                    {isCorrect ? '正解です！' : '不正解'}
                  </Text>
                  <Text style={[styles.explanationText, { color: colors.primary[700] }]}>
                    {currentQuestion.explanation}
                  </Text>

                  {currentQuestion.detailedExplanation && (
                    <>
                      {showDetailedExplanation ? (
                        <View style={[styles.detailedExplanation, { borderTopColor: colors.primary[200] }]}>
                          <Text style={[styles.detailedExplanationText, { color: colors.primary[600] }]}>
                            {currentQuestion.detailedExplanation}
                          </Text>
                        </View>
                      ) : (
                        <TouchableOpacity
                          onPress={(e) => {
                            e.stopPropagation();
                            setShowDetailedExplanation(true);
                          }}
                          style={styles.moreButton}
                        >
                          <Text style={[styles.moreButtonText, { color: colors.sage[600] }]}>もっと見る ↓</Text>
                        </TouchableOpacity>
                      )}
                    </>
                  )}
                </Card>

                <Text style={[styles.tapToNextText, { color: colors.primary[500] }]}>
                  {currentQuestionIndex < questions.length - 1
                    ? '🖐️ タップで次の問題へ'
                    : '🖐️ タップで結果を見る'}
                </Text>

                <Button
                  title={
                    currentQuestionIndex < questions.length - 1
                      ? '次へ'
                      : '結果を見る'
                  }
                  onPress={handleNext}
                  variant="primary"
                  size="lg"
                  fullWidth
                />
              </Animated.View>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

interface AnswerOptionProps {
  text: string;
  onPress: () => void;
  selected: boolean;
  correct: boolean;
  incorrect: boolean;
  disabled: boolean;
  colors: any;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  text,
  onPress,
  selected,
  correct,
  incorrect,
  disabled,
  colors,
}) => {
  const getBackgroundColor = () => {
    if (correct) return colors.sage[100];
    if (incorrect) return colors.coral[100];
    if (selected) return colors.primary[100];
    return colors.background.cream;
  };

  const getBorderColor = () => {
    if (correct) return colors.sage[500];
    if (incorrect) return colors.coral[500];
    if (selected) return colors.primary[400];
    return colors.primary[200];
  };

  return (
    <View style={styles.optionWithSpeech}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.optionButton,
          {
            backgroundColor: getBackgroundColor(),
            borderColor: getBorderColor(),
            borderWidth: 2,
            flex: 1,
          },
        ]}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.optionText,
            { color: colors.primary[700] },
            (correct || incorrect) && styles.optionTextBold,
          ]}
        >
          {text}
        </Text>
        {correct && <Text style={[styles.checkMark, { color: colors.sage[600] }]}>✓</Text>}
      </TouchableOpacity>
      <SpeechButton text={text} size="sm" style={{ marginLeft: SPACING.xs }} />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: SPACING.xl * 2,
  },
  container: {
    padding: SPACING.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  exitButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
    ...SHADOWS.soft,
  },
  exitText: {
    fontSize: 28,
    fontWeight: '300',
  },
  progressContainer: {
    flex: 1,
  },
  userNameText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  progressBar: {
    height: 8,
    borderRadius: BORDER_RADIUS.sm,
    overflow: 'hidden',
    marginBottom: SPACING.xs,
  },
  progressFill: {
    height: '100%',
    borderRadius: BORDER_RADIUS.sm,
  },
  progressText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    textAlign: 'right',
  },
  questionContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
    paddingVertical: SPACING.xl,
  },
  questionJa: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  question: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 42,
  },
  optionsContainer: {
    gap: SPACING.md,
  },
  optionWithSpeech: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionButton: {
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.soft,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    flex: 1,
  },
  optionTextBold: {
    fontWeight: '600',
  },
  checkMark: {
    fontSize: 24,
    marginLeft: SPACING.sm,
  },
  feedbackTouchable: {
    width: '100%',
  },
  feedbackContainer: {
    marginTop: SPACING.xl,
    alignItems: 'center',
  },
  feedbackCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
    ...SHADOWS.softMd,
  },
  feedbackIcon: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  explanationCard: {
    width: '100%',
    marginBottom: SPACING.lg,
  },
  explanationTitle: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  explanationText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    lineHeight: 24,
  },
  detailedExplanation: {
    marginTop: SPACING.md,
    paddingTop: SPACING.md,
    borderTopWidth: 1,
  },
  detailedExplanationText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    lineHeight: 24,
  },
  moreButton: {
    marginTop: SPACING.md,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
  },
  tapToNextText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    marginBottom: SPACING.md,
    textAlign: 'center',
    fontWeight: '500',
  },
});
