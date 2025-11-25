# 비즈니스 로직 문서

이 문서는 앱의 주요 비즈니스 로직과 플로우를 설명합니다.

## 목차
1. [사용자 인증 및 레벨 관리](#사용자-인증-및-레벨-관리)
2. [퀴즈 시작 플로우](#퀴즈-시작-플로우)
3. [문제 가져오기 로직](#문제-가져오기-로직)
4. [퀴즈 완료 및 결과 저장](#퀴즈-완료-및-결과-저장)
5. [학습 통계 관리](#학습-통계-관리)
6. [카테고리 잠금 해제 시스템](#카테고리-잠금-해제-시스템)

---

## 사용자 인증 및 레벨 관리

### 사용자 로그인
- **위치**: `contexts/AuthContext.tsx`
- **로직**:
  1. 사용자가 이름을 입력하면 이름 기반으로 일관된 사용자 ID 생성
  2. 같은 이름을 입력하면 항상 같은 ID가 생성됨 (해시 기반)
  3. 사용자 정보 저장: `id`, `name`, `character`, `createdAt`
  4. 초기에는 `level`이 없음 (선택 사항)

### 학습 레벨 선택 및 저장
- **위치**: `contexts/AuthContext.tsx` - `updateUserLevel()`
- **레벨 종류**:
  - `beginner` (初級): 기본적인 인사와 표현
  - `intermediate` (中級): 일상 회화와 여행
  - `advanced` (上級): 복잡한 표현과 문법
- **저장 시점**:
  - QuizSetup 화면에서 레벨을 선택하고 "퀴즈를 시작하기" 버튼을 누를 때
  - 사용자의 레벨이 없을 때만 저장됨 (기존 레벨이 있으면 업데이트하지 않음)

---

## 퀴즈 시작 플로우

### 시나리오 1: "퀴즈를 시작하기" 버튼 클릭
1. 홈 화면에서 "クイズを始める" 버튼 클릭
2. QuizSetup 화면으로 이동
3. 사용자 레벨이 없으면 레벨 선택 화면 표시
4. 문제 수 선택 (5, 10, 15, 20)
5. "クイズを始める" 버튼 클릭
6. `handleStartQuizWithParams()` 호출:
   - 레벨이 선택되었고 사용자 레벨이 없으면 레벨 저장
   - 선택된 레벨 또는 기존 사용자 레벨로 문제 가져오기
   - 카테고리가 지정되지 않았으면 랜덤 퀴즈 (`basic`)
7. Quiz 화면으로 이동

### 시나리오 2: 카테고리 선택 (학습 레벨이 있는 경우)
1. 홈 화면에서 카테고리 카드 클릭
2. 카테고리가 잠금 해제되어 있는지 확인
3. 사용자 레벨이 있으면:
   - 해당 카테고리와 레벨에 맞는 문제 5개 가져오기
   - 바로 Quiz 화면으로 이동
4. 사용자 레벨이 없으면:
   - QuizSetup 화면으로 이동 (카테고리 정보 전달)
   - 레벨 선택 후 퀴즈 시작

### 시나리오 3: 카테고리 선택 (학습 레벨이 없는 경우)
1. 홈 화면에서 카테고리 카드 클릭
2. 카테고리가 잠금 해제되어 있는지 확인
3. 사용자 레벨이 없으면:
   - QuizSetup 화면으로 이동
   - 카테고리 정보를 route params로 전달
   - 레벨 선택 화면 표시
   - 문제 수 선택
   - 선택한 레벨과 카테고리에 맞는 문제 가져오기
   - Quiz 화면으로 이동

---

## 문제 가져오기 로직

### 위치
- `data/quizzes/index.ts`

### 함수들

#### 1. `getRandomQuizzes(count, userLevel?)`
- **용도**: 랜덤 문제 가져오기
- **파라미터**:
  - `count`: 가져올 문제 수
  - `userLevel`: 사용자 레벨 (선택 사항)
- **로직**:
  1. `userLevel`이 지정되면 해당 레벨의 문제만 필터링
  2. 모든 문제를 섞기 (Fisher-Yates 알고리즘)
  3. 지정된 개수만큼 선택
  4. 각 문제의 선택지도 섞기

#### 2. `getQuizzesByCategory(category, userLevel?)`
- **용도**: 특정 카테고리의 문제 가져오기
- **파라미터**:
  - `category`: 카테고리 ID
  - `userLevel`: 사용자 레벨 (선택 사항)
- **로직**:
  1. 카테고리별 기본 난이도 매핑:
     - `basic`, `gratitude`, `daily`, `numbers`, `vlive`, `kpop_gratitude`, `reactions`, `sns`, `concert`: `beginner`
     - `travel`, `shopping`, `restaurant`, `fanLetter`, `slang`, `kpopTerms`: `intermediate`
     - `emergency`: `advanced`
  2. 특수 카테고리 처리:
     - `travel_daily`: 여러 일반 카테고리를 통합
  3. `userLevel`이 지정되면 해당 레벨에 맞는 문제만 필터링
  4. 문제 섞기 및 선택지 섞기

### 레벨 필터링 규칙
- 각 문제는 `difficulty` 속성을 가짐
- 문제에 `difficulty`가 없으면 카테고리의 기본 난이도 사용
- 사용자 레벨과 문제의 난이도가 일치하는 문제만 선택

---

## 퀴즈 완료 및 결과 저장

### 위치
- `screens/QuizScreen.tsx` - `handleNext()`

### 완료 처리 플로우
1. 모든 문제에 답변 완료
2. 정답/오답 계산
3. 점수 계산: `(정답 수 / 전체 문제 수) * 100`
4. 소요 시간 계산: `(현재 시간 - 시작 시간) / 1000` (초 단위)

### 결과 저장 조건
- **저장하는 경우**:
  - 일반 퀴즈 모드 (랜덤 퀴즈 포함)
  - 카테고리 선택 퀴즈
- **저장하지 않는 경우**:
  - 복습 모드 (`isReviewMode === true`)
  - 복습 모드에서 맞춘 문제는 기존 오답 목록에서 제거

### 저장되는 데이터
```typescript
{
  id: string;                    // 타임스탬프 기반 ID
  userId: string;                 // 사용자 ID
  category: QuizCategory;        // 카테고리
  score: number;                 // 점수 (0-100)
  totalQuestions: number;        // 전체 문제 수
  correctAnswers: number[];      // 정답한 문제 ID 배열
  incorrectAnswers: number[];    // 오답한 문제 ID 배열
  completedAt: string;           // 완료 시간 (ISO 형식)
  timeSpent: number;             // 소요 시간 (초)
}
```

### 저장 후 처리
1. `storageService.saveQuizResult()`: 퀴즈 결과 저장
2. `storageService.updateLearningStats()`: 전체 학습 통계 업데이트
3. `storageService.updateCategoryProgress()`: 카테고리별 진행도 업데이트

---

## 학습 통계 관리

### 위치
- `services/storageService.ts` - `updateLearningStats()`

### 통계 항목
- **전체 통계**:
  - `totalQuizzesTaken`: 총 퀴즈 완료 횟수
  - `totalCorrectAnswers`: 총 정답 수
  - `totalQuestions`: 총 문제 수
  - `currentStreak`: 현재 연속 학습 일수
  - `longestStreak`: 최장 연속 학습 일수
  - `lastStudyDate`: 마지막 학습 날짜
  - `dailyGoal`: 일일 목표 (기본값: 5)

- **카테고리별 통계**:
  - `quizzesTaken`: 해당 카테고리 퀴즈 완료 횟수
  - `averageScore`: 평균 점수
  - `bestScore`: 최고 점수

### 연속 학습 일수 계산
- 오늘 학습했으면 연속 일수 증가
- 어제도 학습했으면 연속 유지
- 어제 학습하지 않았으면 연속 일수 초기화

### 카테고리 진행도 업데이트
- 각 카테고리별로 완료한 퀴즈 수와 최고 점수 추적
- 잠금 해제 조건 확인에 사용

---

## 카테고리 잠금 해제 시스템

### 위치
- `screens/ImprovedHomeScreen.tsx` - `isCategoryUnlocked()`
- `data/categoryConfig.ts` - 카테고리 설정

### 잠금 해제 조건
각 카테고리는 `unlockRequirement`를 가질 수 있음:
```typescript
{
  requiredCategory: QuizCategory;  // 선행 카테고리
  minimumQuizzes: number;          // 최소 완료 퀴즈 수
  minimumScore: number;            // 최소 점수
}
```

### 잠금 해제 확인 로직
1. 카테고리에 `unlockRequirement`가 없으면 항상 잠금 해제됨
2. `requiredCategory`가 지정되어 있으면:
   - 해당 카테고리의 진행도 확인
   - `completedQuizzes >= minimumQuizzes` 확인
   - `bestScore >= minimumScore` 확인
3. 모든 조건을 만족하면 잠금 해제

### 잠금된 카테고리 처리
- 잠금된 카테고리를 클릭하면 알림 표시
- 잠금 해제 조건 안내
- 퀴즈 시작 불가

---

## 주요 상태 관리

### 퀴즈 상태 (QuizState)
```typescript
{
  questions: Question[];           // 현재 퀴즈 문제들
  category: QuizCategory;          // 현재 카테고리
  score: number;                   // 점수
  correctAnswers: number[];        // 정답한 문제 ID
  incorrectAnswers: number[];      // 오답한 문제 ID
  quizStartTime: number;           // 퀴즈 시작 시간 (타임스탬프)
  timeSpent: number;               // 소요 시간 (초)
}
```

### 사용자 상태 (User)
```typescript
{
  id: string;                       // 사용자 ID (이름 기반 해시)
  name: string;                     // 사용자 이름
  character: string;               // 선택한 캐릭터 (이모지)
  level?: UserLevel;                // 학습 레벨 (선택 사항)
  createdAt: string;                // 생성 시간
}
```

---

## 주요 결정 포인트

### 1. 레벨 선택 시점
- **QuizSetup 화면에서만**: 사용자가 명시적으로 레벨을 선택할 때
- **자동 선택 없음**: 카테고리 선택 시 자동으로 레벨을 선택하지 않음

### 2. 문제 가져오기 우선순위
1. 카테고리가 지정되면 해당 카테고리의 문제
2. 카테고리가 없으면 랜덤 문제 (`basic`)
3. 레벨이 지정되면 해당 레벨에 맞는 문제만 필터링

### 3. 결과 저장 규칙
- 복습 모드가 아닐 때만 저장
- 복습 모드에서 맞춘 문제는 오답 목록에서 제거
- 모든 퀴즈 결과는 통계에 반영

---

## 데이터 흐름도

### 퀴즈 시작
```
사용자 액션
  ↓
카테고리 선택 또는 "퀴즈 시작" 버튼
  ↓
레벨 확인
  ├─ 레벨 없음 → QuizSetup 화면 (레벨 선택)
  └─ 레벨 있음 → 바로 문제 가져오기
  ↓
문제 가져오기 (카테고리 + 레벨)
  ↓
Quiz 화면
```

### 퀴즈 완료
```
모든 문제 답변 완료
  ↓
정답/오답 계산
  ↓
결과 저장 (복습 모드가 아닐 때)
  ├─ 퀴즈 결과 저장
  ├─ 학습 통계 업데이트
  └─ 카테고리 진행도 업데이트
  ↓
Result 화면
```

---

## 참고 파일
- `navigation/MainNavigator.tsx`: 퀴즈 시작 플로우 관리
- `contexts/AuthContext.tsx`: 사용자 인증 및 레벨 관리
- `data/quizzes/index.ts`: 문제 가져오기 로직
- `services/storageService.ts`: 데이터 저장 및 통계 관리
- `screens/QuizScreen.tsx`: 퀴즈 진행 및 완료 처리
- `screens/ImprovedHomeScreen.tsx`: 카테고리 잠금 해제 확인

