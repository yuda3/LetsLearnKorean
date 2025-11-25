// 이름 검증 정규표현식
// 한글, 일본어(히라가나, 가타카나, 한자), 영문, 숫자, 공백, 하이픈, 언더스코어 허용
// 최소 1자, 최대 30자
const NAME_REGEX = /^[\p{L}\p{N}\s\-_]{1,30}$/u;

// 이름 검증 결과 타입
export interface NameValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

// 이름 검증 함수
export const validateName = (name: string): NameValidationResult => {
  const trimmed = name.trim();
  
  if (!trimmed) {
    return { isValid: false, errorMessage: '名前を入力してください' };
  }
  
  if (trimmed.length < 1) {
    return { isValid: false, errorMessage: '名前を入力してください' };
  }
  
  if (trimmed.length > 30) {
    return { isValid: false, errorMessage: '名前は30文字以内で入力してください' };
  }
  
  // 연속된 공백 체크 (3개 이상 연속 공백 불가)
  if (/\s{3,}/.test(trimmed)) {
    return { isValid: false, errorMessage: '名前に連続した空白は使用できません' };
  }
  
  // 정규표현식 검증
  if (!NAME_REGEX.test(trimmed)) {
    return { isValid: false, errorMessage: '使用できない文字が含まれています' };
  }
  
  return { isValid: true };
};

