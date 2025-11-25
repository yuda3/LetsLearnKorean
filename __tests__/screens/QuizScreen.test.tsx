import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { QuizScreen } from '../../screens/QuizScreen';
import { Question } from '../../types';
import { storageService } from '../../services/storageService';

// Mock dependencies
jest.mock('../../services/storageService');
jest.mock('expo-speech', () => ({
  speak: jest.fn(),
  stop: jest.fn(),
  isSpeakingAsync: jest.fn(() => Promise.resolve(false)),
}));
jest.mock('../../contexts/AuthContext', () => ({
  useAuth: () => ({
    user: {
      id: 'user_123',
      name: 'テストユーザー',
      character: '🐶',
      createdAt: '2025-11-25T00:00:00.000Z',
    },
  }),
}));
jest.mock('../../contexts/ThemeContext', () => ({
  useTheme: () => ({
    colors: {
      background: { ivory: '#FDFBF7', cream: '#F5F1EB' },
      primary: {
        100: '#E8E5DE',
        200: '#D1CCC1',
        400: '#A39E94',
        500: '#8C8779',
        600: '#6B6760',
        700: '#4A4844',
        800: '#2A2926',
      },
      sage: {
        100: '#E8F2ED',
        500: '#7DB49E',
        600: '#6BA08B',
      },
      coral: {
        100: '#FDEEE8',
        500: '#F99B85',
        600: '#E88A74',
      },
    },
  }),
}));

const mockQuestions: Question[] = [
  {
    id: 1,
    category: 'basic',
    questionJa: 'こんにちは',
    question: '안녕하세요',
    options: ['こんにちは', 'おはよう', 'こんばんは', 'さようなら'],
    correctAnswer: 0,
    explanation: '基本的な挨拶です',
    detailedExplanation: 'これは最も一般的な韓国語の挨拶表現です。',
  },
  {
    id: 2,
    category: 'basic',
    questionJa: 'ありがとうございます',
    question: '감사합니다',
    options: ['감사합니다', '미안합니다', '괜찮습니다', '안녕히 가세요'],
    correctAnswer: 0,
    explanation: '感謝の表現です',
    detailedExplanation: '丁寧な感謝の表現として使われます。',
  },
];

describe('QuizScreen', () => {
  const mockOnComplete = jest.fn();
  const mockOnExit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render quiz screen with first question', () => {
    const { getByText } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
        userName="テストユーザー"
      />
    );

    expect(getByText('こんにちは')).toBeTruthy();
    expect(getByText('안녕하세요')).toBeTruthy();
    expect(getByText('1 / 2')).toBeTruthy();
  });

  it('should show error message when no questions provided', () => {
    const { getByText } = render(
      <QuizScreen
        questions={[]}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
      />
    );

    expect(getByText('問題が見つかりませんでした')).toBeTruthy();
  });

  it('should handle answer selection correctly', async () => {
    const { getByText, getAllByRole } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
      />
    );

    // Get all TouchableOpacity elements (answer buttons)
    const buttons = getAllByRole('button');

    // Find the correct answer button
    const correctButton = buttons.find(button => {
      const text = button.props.children?.find((child: any) =>
        child?.props?.children === 'こんにちは'
      );
      return !!text;
    });

    // Click correct answer
    act(() => {
      if (correctButton) {
        fireEvent.press(correctButton);
      }
    });

    // Wait for feedback to show
    await waitFor(() => {
      expect(getByText('正解です！')).toBeTruthy();
      expect(getByText('基本的な挨拶です')).toBeTruthy();
    });
  });

  it('should show incorrect feedback for wrong answer', async () => {
    const { getByText, getAllByRole } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
      />
    );

    const buttons = getAllByRole('button');

    // Find the wrong answer button (not the first option)
    const wrongButton = buttons.find(button => {
      const text = button.props.children?.find((child: any) =>
        child?.props?.children === 'おはよう'
      );
      return !!text;
    });

    // Click wrong answer
    act(() => {
      if (wrongButton) {
        fireEvent.press(wrongButton);
      }
    });

    // Wait for feedback to show
    await waitFor(() => {
      expect(getByText('不正解')).toBeTruthy();
    });
  });

  it('should auto-advance to next question after 3 seconds', async () => {
    const { getByText, getAllByRole } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
      />
    );

    const buttons = getAllByRole('button');
    const correctButton = buttons.find(button => {
      const text = button.props.children?.find((child: any) =>
        child?.props?.children === 'こんにちは'
      );
      return !!text;
    });

    // Answer first question
    act(() => {
      if (correctButton) {
        fireEvent.press(correctButton);
      }
    });

    // Wait for auto-advance timer (3 seconds)
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Should now show second question
    await waitFor(() => {
      expect(getByText('ありがとうございます')).toBeTruthy();
      expect(getByText('감사합니다')).toBeTruthy();
    });
  });

  it('should handle time expiration correctly', async () => {
    const { getByText } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
      />
    );

    // Fast-forward 30 seconds (timer expiration)
    act(() => {
      jest.advanceTimersByTime(30000);
    });

    // Should show time expired message
    await waitFor(() => {
      expect(getByText('時間切れ')).toBeTruthy();
    });
  });

  it('should complete quiz and call onComplete after last question', async () => {
    const { getAllByRole } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
      />
    );

    // Answer first question correctly
    act(() => {
      const buttons = getAllByRole('button');
      const correctButton = buttons.find(button => {
        const text = button.props.children?.find((child: any) =>
          child?.props?.children === 'こんにちは'
        );
        return !!text;
      });
      if (correctButton) {
        fireEvent.press(correctButton);
      }
    });

    // Auto-advance to next question
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Answer second question correctly
    await waitFor(() => {
      const buttons = getAllByRole('button');
      const correctButton2 = buttons.find(button => {
        const text = button.props.children?.find((child: any) =>
          child?.props?.children === '감사합니다'
        );
        return !!text;
      });

      act(() => {
        if (correctButton2) {
          fireEvent.press(correctButton2);
        }
      });
    });

    // Auto-advance after last question (should call onComplete)
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(mockOnComplete).toHaveBeenCalledWith(
        2, // score (2 correct)
        [1, 2], // correct answer IDs
        [] // incorrect answer IDs
      );
    });
  });

  it('should call onExit when exit button is pressed', () => {
    const { getByText } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
      />
    );

    const exitButton = getByText('×');
    fireEvent.press(exitButton);

    expect(mockOnExit).toHaveBeenCalled();
  });

  it('should save quiz result in non-review mode', async () => {
    const mockSaveQuizResult = jest.fn();
    const mockUpdateLearningStats = jest.fn();
    const mockUpdateCategoryProgress = jest.fn();

    (storageService.saveQuizResult as jest.Mock) = mockSaveQuizResult;
    (storageService.updateLearningStats as jest.Mock) = mockUpdateLearningStats;
    (storageService.updateCategoryProgress as jest.Mock) = mockUpdateCategoryProgress;

    const { getAllByRole } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
        isReviewMode={false}
      />
    );

    // Answer both questions
    act(() => {
      const buttons = getAllByRole('button');
      const correctButton = buttons[0];
      fireEvent.press(correctButton);
    });

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      const buttons = getAllByRole('button');
      if (buttons.length > 0) {
        act(() => {
          fireEvent.press(buttons[0]);
        });
      }
    });

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(mockSaveQuizResult).toHaveBeenCalled();
      expect(mockUpdateLearningStats).toHaveBeenCalled();
      expect(mockUpdateCategoryProgress).toHaveBeenCalled();
    });
  });

  it('should NOT save quiz result in review mode', async () => {
    const mockSaveQuizResult = jest.fn();
    const mockRemoveIncorrectAnswers = jest.fn();

    (storageService.saveQuizResult as jest.Mock) = mockSaveQuizResult;
    (storageService.removeIncorrectAnswersFromResults as jest.Mock) = mockRemoveIncorrectAnswers;

    const { getAllByRole } = render(
      <QuizScreen
        questions={mockQuestions}
        category="basic"
        onComplete={mockOnComplete}
        onExit={mockOnExit}
        isReviewMode={true}
      />
    );

    // Answer both questions correctly
    act(() => {
      const buttons = getAllByRole('button');
      fireEvent.press(buttons[0]);
    });

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      const buttons = getAllByRole('button');
      if (buttons.length > 0) {
        act(() => {
          fireEvent.press(buttons[0]);
        });
      }
    });

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(mockSaveQuizResult).not.toHaveBeenCalled();
      expect(mockRemoveIncorrectAnswers).toHaveBeenCalled();
    });
  });
});
