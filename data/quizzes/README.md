# 퀴즈 데이터 구조

## 개요
이 폴더에는 카테고리별로 분할된 퀴즈 데이터가 포함되어 있습니다.

## 폴더 구조
```
data/quizzes/
├── index.ts           # 메인 진입점 (모든 퀴즈 통합)
├── basic.ts           # 기본 표현 (beginner)
├── gratitude.ts       # 감사 표현 (beginner)
├── daily.ts           # 일상 회화 (beginner)
├── numbers.ts         # 숫자 (beginner)
├── travel.ts          # 여행 회화 (intermediate)
├── shopping.ts        # 쇼핑 (intermediate)
├── restaurant.ts      # 레스토랑 (intermediate)
└── emergency.ts       # 긴급 상황 (advanced)
```

## 카테고리별 문제 수
- **basic**: 11 문제 (beginner)
- **gratitude**: 9 문제 (beginner)
- **daily**: 11 문제 (beginner)
- **numbers**: 12 문제 (beginner)
- **travel**: 124 문제 (intermediate)
- **shopping**: 9 문제 (intermediate)
- **restaurant**: 11 문제 (intermediate)
- **emergency**: 10 문제 (advanced)

**총 문제 수**: 197개

## 사용 방법

### 기본 사용
```typescript
import { quizQuestions, getQuizzesByCategory } from '../data/quizzes';

// 모든 퀴즈 가져오기
const allQuizzes = quizQuestions;

// 특정 카테고리 퀴즈 가져오기
const travelQuizzes = getQuizzesByCategory('travel');
```

### 카테고리별 개별 import
```typescript
import { travelQuestions } from '../data/quizzes/travel';
import { basicQuestions } from '../data/quizzes/basic';
```

### 난이도별 퀴즈 가져오기
```typescript
import { getQuizzesByDifficulty } from '../data/quizzes';

const beginnerQuizzes = getQuizzesByDifficulty('beginner');
const intermediateQuizzes = getQuizzesByDifficulty('intermediate');
const advancedQuizzes = getQuizzesByDifficulty('advanced');
```

## 변경 이력

### 2024-11-24: 구조 리팩토링
- **변경 내용**:
  - 단일 파일 (`quizData.ts`)을 카테고리별 8개 파일로 분할
  - 난이도(beginner/intermediate/advanced) 정보 추가
  - 통합 index 파일 생성

- **이유**:
  - 파일 크기 과다 (45,000+ 토큰)
  - 유지보수성 향상
  - 카테고리별 독립적인 관리 가능

- **마이그레이션**:
  - 기존 `import from '../data/quizData'` → `import from '../data/quizzes'`
  - 모든 함수와 export는 동일하게 유지

## 주의사항

### 문제 다양성 개선 필요
현재 문제의 선택지에 반복되는 패턴이 많습니다:
- "해요": 120회 (60.9%)
- "좋아요": 54회 (27.4%)
- "가요": 37회 (18.8%)

자세한 개선 방법은 `/docs/QUIZ_IMPROVEMENT_GUIDE.md`를 참고하세요.

## 새 퀴즈 추가하기

1. 해당 카테고리 파일을 엽니다 (예: `travel.ts`)
2. 배열에 새 문제를 추가합니다:
```typescript
{
  id: 200, // 고유 ID
  category: 'travel',
  questionJa: '日本語の説明',
  question: '韓国語の質問',
  options: [
    '正解の選択肢',
    'オプション2',
    'オプション3',
    'オプション4',
  ],
  correctAnswer: 0, // 정답 인덱스 (0-3)
  explanation: '簡単な説明',
  detailedExplanation: '詳しい説明',
}
```

## 문제 품질 체크리스트
- [ ] 4개의 선택지가 모두 다른 패턴인가?
- [ ] 오답이 학습 가치가 있는가?
- [ ] 실제로 혼동할 수 있는 표현인가?
- [ ] 같은 어미 반복을 피했는가? (특히 "~좋아요", "~해요")
