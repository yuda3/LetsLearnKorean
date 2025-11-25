import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { LoginScreen } from '../../screens/LoginScreen';
import { useAuth } from '../../contexts/AuthContext';

// Mock dependencies
jest.mock('../../contexts/AuthContext');
jest.mock('../../contexts/ThemeContext', () => ({
  useTheme: () => ({
    colors: {
      background: { ivory: '#FDFBF7', cream: '#F5F1EB' },
      primary: {
        100: '#E8E5DE',
        200: '#D1CCC1',
        300: '#BAB5A4',
        400: '#A39E94',
        500: '#8C8779',
        600: '#6B6760',
        700: '#4A4844',
        800: '#2A2926',
      },
      sage: {
        50: '#F0F7F3',
        100: '#E8F2ED',
        300: '#B4D9C8',
        500: '#7DB49E',
        600: '#6BA08B',
        700: '#5A8C78',
      },
      coral: {
        50: '#FEF5F2',
        100: '#FDEEE8',
        500: '#F99B85',
        600: '#E88A74',
      },
    },
    mode: 'light',
    toggleTheme: jest.fn(),
  }),
}));
jest.mock('expo-speech', () => ({
  speak: jest.fn(),
  stop: jest.fn(),
}));

// Mock Alert
jest.spyOn(Alert, 'alert');

const mockLogin = jest.fn();

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
    });
  });

  it('should render login screen', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);
    
    expect(getByText('ようこそ')).toBeTruthy();
    expect(getByText('名前を入力して学習を始めましょう')).toBeTruthy();
    expect(getByPlaceholderText('田中太郎')).toBeTruthy();
    expect(getByText('始める')).toBeTruthy();
  });

  describe('이름 검증', () => {
    it('should show error when name is empty', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith('エラー', '名前を入力してください');
        expect(getByText('名前を入力してください')).toBeTruthy();
      });
      
      expect(mockLogin).not.toHaveBeenCalled();
    });

    it('should show error when name is only whitespace', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, '   ');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith('エラー', '名前を入力してください');
      });
      
      expect(mockLogin).not.toHaveBeenCalled();
    });

    it('should show error when name is too long', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      const longName = 'A'.repeat(31);
      fireEvent.changeText(input, longName);
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith('エラー', '名前は30文字以内で入力してください');
        expect(getByText('名前は30文字以内で入力してください')).toBeTruthy();
      });
      
      expect(mockLogin).not.toHaveBeenCalled();
    });

    it('should show error when name has consecutive spaces', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, '田中   太郎');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith('エラー', '名前に連続した空白は使用できません');
        expect(getByText('名前に連続した空白は使用できません')).toBeTruthy();
      });
      
      expect(mockLogin).not.toHaveBeenCalled();
    });

    it('should show error when name contains invalid characters', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, '田中@太郎');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith('エラー', '使用できない文字が含まれています');
        expect(getByText('使用できない文字が含まれています')).toBeTruthy();
      });
      
      expect(mockLogin).not.toHaveBeenCalled();
    });

    it('should accept valid Japanese name', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, '田中太郎');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith('田中太郎', expect.any(String));
      });
      
      expect(Alert.alert).not.toHaveBeenCalled();
    });

    it('should accept valid Korean name', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, '김철수');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith('김철수', expect.any(String));
      });
    });

    it('should accept valid English name', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, 'John Smith');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith('John Smith', expect.any(String));
      });
    });

    it('should trim whitespace from name before login', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, '  田中太郎  ');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith('田中太郎', expect.any(String));
      });
    });
  });

  describe('에러 상태 관리', () => {
    it('should clear error when user starts typing', async () => {
      const { getByText, getByPlaceholderText, queryByText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      // First, trigger error
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(getByText('名前を入力してください')).toBeTruthy();
      });
      
      // Then, start typing
      fireEvent.changeText(input, '田中');
      
      await waitFor(() => {
        expect(queryByText('名前を入力してください')).toBeNull();
      });
    });

    it('should update error message in real-time', async () => {
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      // Trigger error with empty name
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(getByText('名前を入力してください')).toBeTruthy();
      });
      
      // Change to invalid character
      fireEvent.changeText(input, '田中@太郎');
      
      await waitFor(() => {
        expect(getByText('使用できない文字が含まれています')).toBeTruthy();
      });
    });
  });

  describe('캐릭터 선택', () => {
    it('should allow character selection', () => {
      const { getByText } = render(<LoginScreen />);
      
      // First character should be selected by default
      const firstCharacter = getByText('🐭');
      expect(firstCharacter).toBeTruthy();
    });
  });

  describe('로그인 성공', () => {
    it('should call login with trimmed name and selected character', async () => {
      mockLogin.mockResolvedValue(undefined);
      
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, '  田中太郎  ');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith('田中太郎', '🐭');
      });
    });

    it('should handle login error', async () => {
      mockLogin.mockRejectedValue(new Error('Login failed'));
      
      const { getByText, getByPlaceholderText } = render(<LoginScreen />);
      
      const input = getByPlaceholderText('田中太郎');
      const button = getByText('始める');
      
      fireEvent.changeText(input, '田中太郎');
      fireEvent.press(button);
      
      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith('エラー', 'ログインに失敗しました');
      });
    });
  });
});

