import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { COLORS, TYPOGRAPHY, SPACING, SHADOWS, BORDER_RADIUS } from '../constants/theme';

interface QuizQuestion {
  id: number;
  question: string;
  questionJa: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  detailedExplanation?: string;
}

interface QuizScreenProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  onExit: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  onComplete,
  onExit,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showDetailedExplanation, setShowDetailedExplanation] = useState(false);
  const [feedbackAnimation] = useState(new Animated.Value(0));

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

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

    // Update score
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowDetailedExplanation(false);
      feedbackAnimation.setValue(0);
    } else {
      onComplete(score + (isCorrect ? 1 : 0));
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onExit} style={styles.exitButton}>
            <Text style={styles.exitText}>×</Text>
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
            <Text style={styles.progressText}>
              {currentQuestionIndex + 1} / {questions.length}
            </Text>
          </View>
        </View>

        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionJa}>{currentQuestion.questionJa}</Text>
          <Text style={styles.question}>{currentQuestion.question}</Text>
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
            />
          ))}
        </View>

        {/* Feedback & Explanation */}
        {showResult && (
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
                isCorrect ? styles.correctCircle : styles.incorrectCircle,
              ]}
            >
              <Text style={styles.feedbackIcon}>
                {isCorrect ? '✓' : '×'}
              </Text>
            </View>

            <Card style={styles.explanationCard}>
              <Text style={styles.explanationTitle}>
                {isCorrect ? '正解です！' : '不正解'}
              </Text>
              <Text style={styles.explanationText}>
                {currentQuestion.explanation}
              </Text>

              {currentQuestion.detailedExplanation && (
                <>
                  {showDetailedExplanation ? (
                    <View style={styles.detailedExplanation}>
                      <Text style={styles.detailedExplanationText}>
                        {currentQuestion.detailedExplanation}
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      onPress={() => setShowDetailedExplanation(true)}
                      style={styles.moreButton}
                    >
                      <Text style={styles.moreButtonText}>もっと見る ↓</Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </Card>

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
        )}
      </View>
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
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  text,
  onPress,
  selected,
  correct,
  incorrect,
  disabled,
}) => {
  const getBackgroundColor = () => {
    if (correct) return COLORS.sage[100];
    if (incorrect) return COLORS.coral[100];
    if (selected) return COLORS.primary[100];
    return COLORS.background.cream;
  };

  const getBorderColor = () => {
    if (correct) return COLORS.sage[500];
    if (incorrect) return COLORS.coral[500];
    if (selected) return COLORS.primary[400];
    return COLORS.primary[200];
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.optionButton,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          borderWidth: 2,
        },
      ]}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.optionText,
          (correct || incorrect) && styles.optionTextBold,
        ]}
      >
        {text}
      </Text>
      {correct && <Text style={styles.checkMark}>✓</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background.ivory,
  },
  container: {
    flex: 1,
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
    backgroundColor: COLORS.background.cream,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
    ...SHADOWS.soft,
  },
  exitText: {
    fontSize: 28,
    color: COLORS.primary[600],
    fontWeight: '300',
  },
  progressContainer: {
    flex: 1,
  },
  progressBar: {
    height: 8,
    backgroundColor: COLORS.primary[100],
    borderRadius: BORDER_RADIUS.sm,
    overflow: 'hidden',
    marginBottom: SPACING.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.sage[500],
    borderRadius: BORDER_RADIUS.sm,
  },
  progressText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.primary[600],
    textAlign: 'right',
  },
  questionContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
    paddingVertical: SPACING.xl,
  },
  questionJa: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    color: COLORS.primary[600],
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  question: {
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    color: COLORS.primary[800],
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 42,
  },
  optionsContainer: {
    gap: SPACING.md,
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
    color: COLORS.primary[700],
    flex: 1,
  },
  optionTextBold: {
    fontWeight: '600',
  },
  checkMark: {
    fontSize: 24,
    color: COLORS.sage[600],
    marginLeft: SPACING.sm,
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
  correctCircle: {
    backgroundColor: COLORS.sage[500],
  },
  incorrectCircle: {
    backgroundColor: COLORS.coral[500],
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
    color: COLORS.primary[800],
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  explanationText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.primary[700],
    lineHeight: 24,
  },
  detailedExplanation: {
    marginTop: SPACING.md,
    paddingTop: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.primary[200],
  },
  detailedExplanationText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.primary[600],
    lineHeight: 24,
  },
  moreButton: {
    marginTop: SPACING.md,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
  },
  moreButtonText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    color: COLORS.sage[600],
    fontWeight: '600',
  },
});
