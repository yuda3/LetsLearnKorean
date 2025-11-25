import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
  isReviewMode?: boolean; // 복습 모드인지 여부
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  category = 'basic',
  onComplete,
  onExit,
  userName,
  isReviewMode = false,
}) => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showDetailedExplanation, setShowDetailedExplanation] = useState(false);
  const [feedbackAnimation] = useState(new Animated.Value(0));
  const [blinkAnimation] = useState(new Animated.Value(1));
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number[]>([]);
  const [startTime] = useState(Date.now());
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [timeLeft, setTimeLeft] = useState(30); // 30초 타이머
  const [timeExpired, setTimeExpired] = useState(false);
  
  // useRef로 handleTimeExpired의 최신 참조를 유지하여 무한 루프 방지
  const handleTimeExpiredRef = useRef<() => void>();
  // useRef로 timerInterval을 관리하여 state 업데이트로 인한 리렌더링 방지
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // showDetailedExplanation의 최신 값을 참조하기 위한 ref
  const showDetailedExplanationRef = useRef(false);

  // currentQuestion 계산 (안전하게 처리)
  const currentQuestion = questions && questions.length > 0 
    ? questions[currentQuestionIndex] 
    : null;

  // 모든 hooks를 early return 전에 호출
  const isCorrect = useMemo(
    () => currentQuestion ? selectedAnswer === currentQuestion.correctAnswer : false,
    [selectedAnswer, currentQuestion]
  );

  const progress = useMemo(
    () => questions && questions.length > 0 
      ? ((currentQuestionIndex + 1) / questions.length) * 100 
      : 0,
    [currentQuestionIndex, questions]
  );

  // Reset quiz state when questions change (new quiz started)
  useEffect(() => {
    if (!questions || questions.length === 0) return;
    
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    showDetailedExplanationRef.current = false;
    setShowDetailedExplanation(false);
    setCorrectAnswers([]);
    setIncorrectAnswers([]);
    feedbackAnimation.setValue(0);
    blinkAnimation.setValue(1);
    setTimeLeft(30);
    setTimeExpired(false);

    // Clear any pending auto-advance timer
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
      setAutoAdvanceTimer(null);
    }
    // Clear timer interval
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

  const handleNext = useCallback(async () => {
    // Clear auto-advance timer
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
      setAutoAdvanceTimer(null);
    }

    // 타이머 정지
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }

    if (!questions || questions.length === 0) return;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      showDetailedExplanationRef.current = false;
      setShowDetailedExplanation(false);
      setTimeExpired(false);
      setTimeLeft(30);
      feedbackAnimation.setValue(0);
      blinkAnimation.setValue(1);
    } else {
      // 마지막 문제 완료 - 상태 업데이트 후 onComplete 호출
      // setState 콜백을 사용하여 최신 상태 값을 가져온 후, 
      // setTimeout을 사용하여 렌더링 완료 후 onComplete 호출
      setCorrectAnswers((finalCorrectAnswers) => {
        setIncorrectAnswers((finalIncorrectAnswers) => {
          // Use the length of correct answers as the final score
          const finalScore = finalCorrectAnswers.length;

          // 렌더링 완료 후 onComplete 호출 (다른 컴포넌트 상태 업데이트 방지)
          setTimeout(() => {
            if (user) {
              const timeSpent = Math.floor((Date.now() - startTime) / 1000);

              // 복습 모드에서 맞춘 문제를 기존 결과에서 제거
              if (isReviewMode && finalCorrectAnswers.length > 0) {
                storageService
                  .removeIncorrectAnswersFromResults(category, finalCorrectAnswers)
                  .catch((error) => {
                    console.error('Error removing incorrect answers from results:', error);
                  });
              }

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

              // 복습 모드가 아닐 때만 새로운 결과를 저장 (랜덤 퀴즈 포함)
              if (!isReviewMode) {
                Promise.all([
                  storageService.saveQuizResult(result),
                  storageService.updateLearningStats(result),
                  storageService.updateCategoryProgress(result),
                ]).catch((error) => {
                  console.error('Error saving quiz result:', error);
                });
              }
            }

            onComplete(finalScore, finalCorrectAnswers, finalIncorrectAnswers);
          }, 0);
          
          return finalIncorrectAnswers;
        });
        return finalCorrectAnswers;
      });
    }
  }, [
    autoAdvanceTimer,
    currentQuestionIndex,
    questions.length,
    feedbackAnimation,
    user,
    startTime,
    isReviewMode,
    category,
    onComplete,
  ]);

  const handleTimeExpired = useCallback(() => {
    if (showResult) return;

    // currentQuestion이 없으면 처리하지 않음
    if (!currentQuestion) return;

    // 시간 만료 시 정답을 자동으로 선택한 것으로 처리
    setSelectedAnswer(null); // 선택하지 않음으로 표시
    setShowResult(true);
    setTimeExpired(true);

    // 정답이 아니므로 오답으로 처리
    setIncorrectAnswers((prev) => [...prev, currentQuestion.id]);

    // Animate feedback
    Animated.spring(feedbackAnimation, {
      toValue: 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();

    // Auto-advance to next question after 5 seconds (only if detailed explanation is not shown)
    const timer = setTimeout(() => {
      // showDetailedExplanation가 true가 되면 자동 진행하지 않음
      if (!showDetailedExplanationRef.current) {
        handleNext();
      }
    }, 5000);
    setAutoAdvanceTimer(timer);
  }, [showResult, currentQuestion, feedbackAnimation, handleNext]);
  
  // handleTimeExpired의 최신 참조를 ref에 저장
  handleTimeExpiredRef.current = handleTimeExpired;

  // 타이머 시작 및 관리
  useEffect(() => {
    // Don't start timer if result is already showing or detailed explanation is shown
    if (showResult || showDetailedExplanation) {
      // 타이머가 실행 중이면 정지
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
      return;
    }

    // 기존 타이머가 있으면 정리
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }

    // 새 문제가 시작되면 타이머 리셋
    setTimeLeft(30);
    setTimeExpired(false);

    // Use a ref to track if we should continue
    let isActive = true;

    // 타이머 시작
    const interval = setInterval(() => {
      if (!isActive) return; // Guard against stale intervals

      setTimeLeft((prev) => {
        if (!isActive || prev <= 0) {
          return prev;
        }

        const newTime = prev - 1;
        
        // 시간 만료 체크는 setTimeLeft 외부에서 처리
        if (newTime <= 0) {
          // 다음 틱에서 handleTimeExpired 호출 (setState 외부에서)
          setTimeout(() => {
            if (handleTimeExpiredRef.current && isActive) {
              handleTimeExpiredRef.current();
            }
          }, 0);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    timerIntervalRef.current = interval;

    // Cleanup: always clear interval when effect re-runs or component unmounts
    return () => {
      isActive = false;
      clearInterval(interval);
      timerIntervalRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex, showResult, showDetailedExplanation]);

  const handleAnswerSelect = useCallback(
    (answerIndex: number) => {
      if (showResult || timeExpired || !currentQuestion) return;

      setSelectedAnswer(answerIndex);

      // Update score and track answers
      if (answerIndex === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1);
        setCorrectAnswers((prev) => [...prev, currentQuestion.id]);
      } else {
        setIncorrectAnswers((prev) => [...prev, currentQuestion.id]);
      }

      // Set showResult to trigger useEffect cleanup
      setShowResult(true);

      // Animate feedback
      Animated.spring(feedbackAnimation, {
        toValue: 1,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }).start();

      // Auto-advance to next question after 5 seconds (only if detailed explanation is not shown)
      const timer = setTimeout(() => {
        // showDetailedExplanation가 true가 되면 자동 진행하지 않음
        if (!showDetailedExplanationRef.current) {
          handleNext();
        }
      }, 5000);
      setAutoAdvanceTimer(timer);
    },
    [showResult, timeExpired, currentQuestion, feedbackAnimation, handleNext]
  );

  const feedbackScale = feedbackAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  const feedbackOpacity = feedbackAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  // 깜빡이는 애니메이션
  useEffect(() => {
    if (showResult && !showDetailedExplanation) {
      const blinkLoop = Animated.loop(
        Animated.sequence([
          Animated.timing(blinkAnimation, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(blinkAnimation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      );
      blinkLoop.start();
      return () => blinkLoop.stop();
    } else {
      blinkAnimation.setValue(1);
    }
  }, [showResult, showDetailedExplanation, blinkAnimation]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
      }
    };
  }, [autoAdvanceTimer]);

  // Early return을 조건부 렌더링으로 변경 (모든 hooks 호출 후)
  if (!questions || questions.length === 0) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
        <View style={styles.container}>
          <Text style={[styles.errorText, { color: colors.primary[800] }]}>
            問題が見つかりませんでした
          </Text>
          <Button
            title="戻る"
            onPress={onExit}
            variant="primary"
            size="lg"
            style={{ marginTop: SPACING.lg }}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (!currentQuestion) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background.ivory }]}>
        <View style={styles.container}>
          <Text style={[styles.errorText, { color: colors.primary[800] }]}>
            問題の読み込み中にエラーが発生しました
          </Text>
          <Button
            title="戻る"
            onPress={onExit}
            variant="primary"
            size="lg"
            style={{ marginTop: SPACING.lg }}
          />
        </View>
      </SafeAreaView>
    );
  }

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
            <TouchableOpacity
              onPress={onExit}
              style={[styles.exitButton, { backgroundColor: colors.background.cream }]}
              accessibilityLabel="クイズを終了"
              accessibilityHint="ホーム画面に戻ります"
              accessibilityRole="button"
            >
              <Text style={[styles.exitText, { color: colors.primary[600] }]}>×</Text>
            </TouchableOpacity>
            <View style={styles.progressContainer}>
              {userName && (
                <Text style={[styles.userNameText, { color: colors.primary[700] }]}>{userName}さん</Text>
              )}
              <View style={styles.progressAndTimerRow}>
                <View
                  style={styles.progressSection}
                  accessibilityLabel={`進行状況: ${currentQuestionIndex + 1}問目、全${questions.length}問中`}
                  accessibilityRole="progressbar"
                >
                  <View style={[styles.progressBar, { backgroundColor: colors.primary[100] }]}>
                    <View style={[styles.progressFill, { width: `${progress}%`, backgroundColor: colors.sage[500] }]} />
                  </View>
                  <Text style={[styles.progressText, { color: colors.primary[600] }]}>
                    {currentQuestionIndex + 1} / {questions.length}
                  </Text>
                </View>
                {/* 타이머 */}
                <View
                  style={[
                    styles.timerContainer,
                    { backgroundColor: timeLeft <= 10 ? colors.coral[100] : colors.primary[100] }
                  ]}
                  accessibilityLabel={`残り時間: ${timeLeft}秒`}
                  accessibilityRole="timer"
                  accessibilityLiveRegion="polite"
                >
                  <Text style={[
                    styles.timerText,
                    { color: timeLeft <= 10 ? colors.coral[600] : colors.primary[700] }
                  ]}>
                    ⏱️ {timeLeft}秒
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Question */}
          <View
            style={styles.questionContainer}
            accessibilityLabel={`問題: ${currentQuestion.questionJa}、韓国語で: ${currentQuestion.question}`}
            accessibilityRole="header"
          >
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
                correct={showResult && index === currentQuestion.correctAnswer && !timeExpired}
                incorrect={(showResult && selectedAnswer === index && !isCorrect) || (timeExpired && index === currentQuestion.correctAnswer)}
                disabled={showResult || timeExpired}
                colors={colors}
                timeExpired={timeExpired && index === currentQuestion.correctAnswer}
              />
            ))}
          </View>

          {/* Feedback & Explanation */}
          {showResult && (
            <View style={styles.feedbackTouchable}>
              <Animated.View
                style={[
                  styles.feedbackContainer,
                  {
                    opacity: feedbackOpacity,
                    transform: [{ scale: feedbackScale }],
                  },
                ]}
              >
                {/* 클릭 가능한 피드백 영역 - もっと見る를 누르지 않았을 때만 다음 문제로 이동 */}
                {!showDetailedExplanation && (
                  <TouchableOpacity
                    onPress={() => {
                      handleNext();
                    }}
                    activeOpacity={0.7}
                    style={styles.feedbackClickArea}
                  >
                    <Animated.Text
                      style={[
                        styles.tapHintText,
                        {
                          color: colors.primary[400],
                          opacity: blinkAnimation,
                        },
                      ]}
                    >
                      ここをタップして次へ
                    </Animated.Text>
                  </TouchableOpacity>
                )}

                <Card style={styles.explanationCard}>
                  <Text style={[styles.explanationTitle, { color: colors.primary[800] }]}>
                    {timeExpired ? '時間切れ' : isCorrect ? '正解です！' : '不正解'}
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
                            // 자동 진행 타이머 취소
                            if (autoAdvanceTimer) {
                              clearTimeout(autoAdvanceTimer);
                              setAutoAdvanceTimer(null);
                            }
                            // 타이머 정지
                            if (timerIntervalRef.current) {
                              clearInterval(timerIntervalRef.current);
                              timerIntervalRef.current = null;
                            }
                            // ref 업데이트
                            showDetailedExplanationRef.current = true;
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

                {showDetailedExplanation && (
                  <View style={[styles.noticeBox, { backgroundColor: colors.sage[50], borderColor: colors.sage[300] }]}>
                    <Text style={[styles.noticeText, { color: colors.sage[700] }]}>
                      📌 「次へ」ボタンを押して次の問題に進んでください
                    </Text>
                  </View>
                )}


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
            </View>
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
  colors: typeof COLORS;
  timeExpired?: boolean; // 시간 만료로 인한 정답 표시
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  text,
  onPress,
  selected,
  correct,
  incorrect,
  disabled,
  colors,
  timeExpired = false,
}) => {
  const getBackgroundColor = () => {
    if (timeExpired) return colors.coral[100]; // 시간 만료 시 빨간색
    if (correct) return colors.sage[100];
    if (incorrect) return colors.coral[100];
    if (selected) return colors.primary[100];
    return colors.background.cream;
  };

  const getBorderColor = () => {
    if (timeExpired) return colors.coral[500]; // 시간 만료 시 빨간색 테두리
    if (correct) return colors.sage[500];
    if (incorrect) return colors.coral[500];
    if (selected) return colors.primary[400];
    return colors.primary[200];
  };

  const getAccessibilityLabel = () => {
    let label = `選択肢: ${text}`;
    if (correct) label += '、正解';
    if (incorrect) label += '、不正解';
    if (timeExpired) label += '、時間切れ';
    if (selected) label += '、選択中';
    return label;
  };

  const getAccessibilityHint = () => {
    if (disabled) return '回答済み';
    return 'この選択肢を選ぶにはタップしてください';
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
        accessibilityLabel={getAccessibilityLabel()}
        accessibilityHint={getAccessibilityHint()}
        accessibilityRole="button"
        accessibilityState={{
          selected,
          disabled,
        }}
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
                {correct && !timeExpired && <Text style={[styles.checkMark, { color: colors.sage[600] }]}>✓</Text>}
                {timeExpired && <Text style={[styles.checkMark, { color: colors.coral[600] }]}>⏱️</Text>}
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
  progressAndTimerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  progressSection: {
    flex: 1,
  },
  timerContainer: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.md,
    minWidth: 70,
    alignItems: 'center',
  },
  timerText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '700',
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
  feedbackClickArea: {
    width: '100%',
    paddingVertical: SPACING.md,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  tapHintText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    opacity: 0.6,
    fontWeight: '400',
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
  noticeBox: {
    marginTop: SPACING.md,
    marginBottom: SPACING.md,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
  },
  noticeText: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 22,
  },
  errorText: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
});
