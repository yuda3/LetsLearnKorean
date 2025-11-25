import { validateName } from '../../utils/nameValidation';

describe('validateName', () => {
  describe('빈 값 검증', () => {
    it('should return error for empty string', () => {
      const result = validateName('');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('名前を入力してください');
    });

    it('should return error for whitespace only', () => {
      const result = validateName('   ');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('名前を入力してください');
    });

    it('should return error for tab only', () => {
      const result = validateName('\t');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('名前を入力してください');
    });
  });

  describe('길이 검증', () => {
    it('should accept valid length names (1-30 characters)', () => {
      expect(validateName('田').isValid).toBe(true);
      expect(validateName('田中').isValid).toBe(true);
      expect(validateName('田中太郎').isValid).toBe(true);
      expect(validateName('A'.repeat(30)).isValid).toBe(true);
    });

    it('should reject names longer than 30 characters', () => {
      const result = validateName('A'.repeat(31));
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('名前は30文字以内で入力してください');
    });

    it('should reject names with 31 Japanese characters', () => {
      const result = validateName('田'.repeat(31));
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('名前は30文字以内で入力してください');
    });
  });

  describe('연속 공백 검증', () => {
    it('should accept single space', () => {
      expect(validateName('田中 太郎').isValid).toBe(true);
    });

    it('should accept double space', () => {
      expect(validateName('田中  太郎').isValid).toBe(true);
    });

    it('should reject three or more consecutive spaces', () => {
      const result = validateName('田中   太郎');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('名前に連続した空白は使用できません');
    });

    it('should reject many consecutive spaces', () => {
      const result = validateName('田中        太郎');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('名前に連続した空白は使用できません');
    });
  });

  describe('허용되는 문자 검증', () => {
    it('should accept Japanese hiragana', () => {
      expect(validateName('たなか').isValid).toBe(true);
      expect(validateName('さとう').isValid).toBe(true);
    });

    it('should accept Japanese katakana', () => {
      expect(validateName('タナカ').isValid).toBe(true);
      expect(validateName('サトウ').isValid).toBe(true);
    });

    it('should accept Japanese kanji', () => {
      expect(validateName('田中').isValid).toBe(true);
      expect(validateName('佐藤').isValid).toBe(true);
    });

    it('should accept Korean characters', () => {
      expect(validateName('김철수').isValid).toBe(true);
      expect(validateName('이영희').isValid).toBe(true);
    });

    it('should accept English letters', () => {
      expect(validateName('John').isValid).toBe(true);
      expect(validateName('Mary').isValid).toBe(true);
      expect(validateName('John Smith').isValid).toBe(true);
    });

    it('should accept numbers', () => {
      expect(validateName('田中1').isValid).toBe(true);
      expect(validateName('123').isValid).toBe(true);
      expect(validateName('John123').isValid).toBe(true);
    });

    it('should accept hyphen', () => {
      expect(validateName('Tanaka-Taro').isValid).toBe(true);
      expect(validateName('John-Smith').isValid).toBe(true);
    });

    it('should accept underscore', () => {
      expect(validateName('Tanaka_Taro').isValid).toBe(true);
      expect(validateName('John_Smith').isValid).toBe(true);
    });

    it('should accept mixed characters', () => {
      expect(validateName('田中太郎').isValid).toBe(true);
      expect(validateName('John 田中').isValid).toBe(true);
      expect(validateName('Tanaka-太郎').isValid).toBe(true);
    });
  });

  describe('허용되지 않는 문자 검증', () => {
    it('should reject @ symbol', () => {
      const result = validateName('田中@太郎');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });

    it('should reject # symbol', () => {
      const result = validateName('田中#太郎');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });

    it('should reject $ symbol', () => {
      const result = validateName('田中$太郎');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });

    it('should reject % symbol', () => {
      const result = validateName('田中%太郎');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });

    it('should reject & symbol', () => {
      const result = validateName('田中&太郎');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });

    it('should reject * symbol', () => {
      const result = validateName('田中*太郎');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });

    it('should reject parentheses', () => {
      const result = validateName('田中(太郎)');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });

    it('should reject brackets', () => {
      const result = validateName('田中[太郎]');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });

    it('should reject curly braces', () => {
      const result = validateName('田中{太郎}');
      expect(result.isValid).toBe(false);
      expect(result.errorMessage).toBe('使用できない文字が含まれています');
    });
  });

  describe('실제 사용 사례', () => {
    it('should accept common Japanese names', () => {
      expect(validateName('田中太郎').isValid).toBe(true);
      expect(validateName('佐藤花子').isValid).toBe(true);
      expect(validateName('鈴木一郎').isValid).toBe(true);
    });

    it('should accept names with spaces', () => {
      expect(validateName('John Smith').isValid).toBe(true);
      expect(validateName('田中 太郎').isValid).toBe(true);
    });

    it('should accept names with hyphens', () => {
      expect(validateName('Mary-Jane').isValid).toBe(true);
      expect(validateName('Tanaka-Taro').isValid).toBe(true);
    });

    it('should trim whitespace before validation', () => {
      expect(validateName('  田中太郎  ').isValid).toBe(true);
      expect(validateName('  John  ').isValid).toBe(true);
    });
  });

  describe('엣지 케이스', () => {
    it('should handle single character', () => {
      expect(validateName('田').isValid).toBe(true);
      expect(validateName('A').isValid).toBe(true);
      expect(validateName('1').isValid).toBe(true);
    });

    it('should handle exactly 30 characters', () => {
      expect(validateName('A'.repeat(30)).isValid).toBe(true);
      expect(validateName('田'.repeat(30)).isValid).toBe(true);
    });

    it('should handle mixed valid characters at max length', () => {
      const name = '田中'.repeat(15); // 30 characters
      expect(validateName(name).isValid).toBe(true);
    });

    it('should handle names with valid special characters', () => {
      expect(validateName('Tanaka-Taro_123').isValid).toBe(true);
      expect(validateName('John_Smith-123').isValid).toBe(true);
    });
  });
});

