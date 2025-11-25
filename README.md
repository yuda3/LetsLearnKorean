# Let's Learn Korean - 한국어 학습 앱 🇰🇷

일본인 사용자를 위한 한국어 학습 퀴즈 앱입니다. 무인양품(Muji) 스타일의 미니멀하고 세련된 디자인을 채택했습니다.

## 📱 프로젝트 소개

**Let's Learn Korean**은 일본인 사용자가 한국어를 재미있고 효과적으로 학습할 수 있도록 설계된 React Native 기반 모바일 앱입니다. 퀴즈 형식의 인터랙티브한 학습 경험을 제공하며, 즐겁게 학습할 수 있습니다.

### 주요 특징

- 🎨 **자연스럽고 모던한 디자인**: 무인양품 스타일의 미니멀 디자인
- 🎵 **K-POP 특화 콘텐츠**: K-POP 팬을 위한 실용적인 한국어 표현 학습
- 📚 **9가지 학습 카테고리**: 기본 표현 + 8개 K-POP 카테고리 + 여행 회화
- 🎯 **진행도 기반 잠금 해제**: 이전 카테고리 완료 후 다음 단계 해제
- 📊 **학습 통계**: 개인별 학습 진행 상황 및 통계 추적
- 🔊 **음성 재생**: 한국어 발음 듣기 기능 (Expo Speech)
- 🌓 **다크 모드**: 라이트/다크 테마 지원
- 💾 **로컬 저장**: AsyncStorage를 통한 학습 데이터 저장
- 🛡️ **에러 처리**: 에러 바운더리를 통한 안정적인 앱 운영
- ⚡ **성능 최적화**: FlatList를 활용한 효율적인 렌더링
- ⏱️ **타이머 기능**: 30초 제한 시간으로 학습 집중도 향상
- 🔄 **복습 모드**: 오답 노트 기능으로 틀린 문제 다시 학습
- 🎭 **캐릭터 선택**: 개인화된 학습 경험을 위한 캐릭터 선택

## 🎨 디자인 컨셉

**「내추럴 & 모던 (Natural & Modern)」** - 무인양품(Muji) 스타일

### 주요 특징

- 🎨 **편안한 컬러 팔레트**: 베이지와 어스 컬러를 기반으로 한 눈에 편안한 색상
- 📱 **심플하고 직관적인 UI**: 40-50대도 사용하기 쉬운 큰 폰트와 여백
- 🇯🇵 **일본어 완전 지원**: Noto Sans JP 폰트 사용
- ✨ **부드러운 애니메이션**: React Native Reanimated를 활용한 자연스러운 전환

### 컬러 팔레트

#### 메인 컬러
- **웜 그레이**: 차분한 기본 색상
- **크림 화이트**: 배경과 카드
- **세이지 그린**: 액센트 및 정답 표시

#### 포인트 컬러
- **소프트 코랄**: 버튼 및 에러 표시
- **민트**: 서브 액센트

## 🛠 기술 스택

### 핵심 기술
- **React Native** `0.81.5` - 크로스 플랫폼 모바일 개발
- **Expo** `~54.0.25` - 개발 환경 및 빌드 도구
- **TypeScript** `~5.9.2` - 타입 안전성
- **React** `19.2.0` - UI 라이브러리

### 스타일링
- **NativeWind** `^4.2.1` - Tailwind CSS 스타일링
- **Tailwind CSS** `^3.4.18` - 유틸리티 퍼스트 CSS

### 네비게이션
- **React Navigation** `^7.x` - 네이티브 스택 및 바텀 탭 네비게이션

### 애니메이션
- **React Native Reanimated** `^4.1.5` - 고성능 애니메이션

### 폰트
- **Noto Sans JP** - 일본어 폰트 지원

### 기타
- **Expo Speech** `^14.0.7` - 텍스트 음성 변환
- **AsyncStorage** `^2.2.0` - 로컬 데이터 저장
- **React Error Boundary** `^6.0.0` - 에러 처리 및 복구

## 📦 설치 및 실행 방법

### 필수 요구사항

- **Node.js** 18 이상
- **npm** 또는 **yarn**
- **Expo CLI** (전역 설치 권장)
- **iOS 개발**: macOS + Xcode (iOS 시뮬레이터용)
- **Android 개발**: Android Studio (Android 에뮬레이터용)

### 1. 저장소 클론

```bash
git clone <repository-url>
cd LetsLearnKorean
```

### 2. 의존성 설치

```bash
npm install
```

또는

```bash
yarn install
```

### 3. 개발 서버 실행

#### 기본 실행 (QR 코드 스캔)
```bash
npm start
```

또는

```bash
expo start
```

#### 플랫폼별 실행

**iOS (macOS만 가능)**
```bash
npm run ios
```

**Android**
```bash
npm run android
```

**Web 브라우저**
```bash
npm run web
```

### 4. 앱 실행 방법

#### 실제 기기에서 실행
1. 개발 서버 실행 후 QR 코드 표시
2. **iOS**: Camera 앱으로 QR 코드 스캔 → Expo Go 앱에서 열기
3. **Android**: Expo Go 앱으로 QR 코드 스캔

#### 시뮬레이터/에뮬레이터에서 실행
- **iOS**: `npm run ios` 실행 시 자동으로 시뮬레이터 열림
- **Android**: Android Studio에서 에뮬레이터 실행 후 `npm run android`

### 5. 빌드 (프로덕션)

#### EAS Build 사용 (권장)

**Preview 빌드 (TestFlight용)**
```bash
npm run build:ios:preview
```

**Production 빌드**
```bash
npm run build:ios:production
```

**App Store Connect 제출**
```bash
npm run submit:ios
```

자세한 내용은 `TESTFLIGHT_SETUP.md`를 참고하세요.

## 📁 프로젝트 구조

```
LetsLearnKorean/
├── App.tsx                    # 메인 엔트리 포인트
├── app.json                   # Expo 설정 파일
├── package.json               # 프로젝트 의존성
├── tsconfig.json              # TypeScript 설정
├── tailwind.config.js         # Tailwind CSS 설정
├── babel.config.js            # Babel 설정
├── metro.config.js            # Metro 번들러 설정
├── jest.config.js             # Jest 테스트 설정
├── jest.setup.js              # Jest 설정 파일
│
├── screens/                   # 화면 컴포넌트
│   ├── LoginScreen.tsx        # 로그인 화면
│   ├── ImprovedHomeScreen.tsx # 홈 화면 (개선 버전)
│   ├── HomeScreen.tsx         # 홈 화면 (기존)
│   ├── QuizSetupScreen.tsx    # 퀴즈 설정 화면
│   ├── QuizScreen.tsx         # 퀴즈 화면
│   ├── ResultScreen.tsx       # 결과 화면
│   ├── PracticeScreen.tsx     # 연습 화면
│   ├── ProfileScreen.tsx      # 프로필 화면
│   └── SettingsScreen.tsx     # 설정 화면
│
├── navigation/                # 네비게이션 설정
│   └── MainNavigator.tsx      # 메인 네비게이터 (탭 + 스택)
│
├── components/                # 재사용 가능한 컴포넌트
│   ├── Button.tsx             # 버튼 컴포넌트
│   ├── Card.tsx               # 카드 컴포넌트
│   ├── ProgressBar.tsx        # 진행 바 컴포넌트
│   ├── SpeechButton.tsx       # 음성 재생 버튼
│   ├── ErrorBoundary.tsx      # 에러 바운더리
│   └── LoadingIndicator.tsx   # 로딩 인디케이터
│
├── contexts/                  # React Context
│   ├── AuthContext.tsx        # 인증 컨텍스트
│   └── ThemeContext.tsx       # 테마 컨텍스트
│
├── data/                      # 데이터 파일
│   ├── categoryConfig.ts      # 카테고리 설정
│   └── quizzes/               # 퀴즈 데이터
│       ├── index.ts           # 퀴즈 데이터 통합
│       ├── basic.ts           # 기본 표현
│       ├── gratitude.ts       # 감사 표현
│       ├── daily.ts           # 일상 회화
│       ├── numbers.ts         # 숫자
│       ├── travel.ts          # 여행 회화
│       ├── shopping.ts        # 쇼핑
│       ├── restaurant.ts      # 레스토랑
│       ├── emergency.ts       # 긴급 상황
│       ├── kpop/              # K-POP 카테고리
│       │   ├── vlive.ts       # V LIVE
│       │   ├── gratitude.ts   # K-POP 감사 표현
│       │   ├── reactions.ts   # 리액션
│       │   ├── fanLetter.ts   # 팬레터
│       │   ├── sns.ts         # SNS
│       │   ├── concert.ts     # 콘서트
│       │   ├── slang.ts       # 슬랭
│       │   └── kpopTerms.ts   # K-POP 용어
│       └── README.md          # 퀴즈 데이터 가이드
│
├── services/                  # 서비스 레이어
│   └── storageService.ts      # 로컬 스토리지 서비스
│
├── types/                     # TypeScript 타입 정의
│   └── index.ts               # 공통 타입
│
├── utils/                     # 유틸리티 함수
│   └── nameValidation.ts      # 이름 검증 유틸리티
│
├── constants/                 # 상수
│   └── theme.ts               # 테마 색상 및 스타일
│
├── assets/                    # 이미지 및 리소스
│   ├── logo.png               # 로고
│   ├── logo2.png              # 로고 2
│   └── ...
│
├── __tests__/                 # 테스트 파일
│   ├── data/
│   ├── screens/
│   ├── services/
│   └── utils/
│
├── scripts/                   # 유틸리티 스크립트
│   ├── analyze_patterns.js    # 패턴 분석 스크립트
│   └── split_quizzes.js       # 퀴즈 분할 스크립트
│
├── docs/                      # 문서
│   └── QUIZ_IMPROVEMENT_GUIDE.md  # 퀴즈 개선 가이드
│
├── patches/                   # 패치 파일
│   └── jest-expo+52.0.6.patch
│
├── eas.json                   # EAS Build 설정
├── APP_EVALUATION.md          # 앱 평가 문서
├── BUSINESS_LOGIC.md          # 비즈니스 로직 문서
└── TESTFLIGHT_SETUP.md        # TestFlight 배포 가이드
```

## 🎯 주요 기능

### 1. 홈 화면
- 학습 진행도 시각화
- 카테고리별 학습 콘텐츠
- 복습이 필요한 단어 표시
- 일일 목표 진행도

### 2. 퀴즈 화면
- 직관적인 선택지 버튼
- 부드러운 피드백 애니메이션
- 상세한 설명 (「もっと見る」로 자세히 보기)
- 음성 재생 기능
- 30초 타이머 기능
- 자동 진행 (3초 후 다음 문제로)
- 진행도 표시 (현재 문제 번호 / 전체 문제 수)

### 3. 결과 화면
- 성취감을 주는 비주얼
- 격려 메시지
- 다음 액션으로의 유도

### 4. 프로필 화면
- 사용자 정보
- 학습 통계
- 배지 및 성취

### 5. 설정 화면
- 테마 변경 (라이트/다크)
- 언어 설정
- 알림 설정

## 📚 학습 콘텐츠

### 카테고리 구성

총 **150개 이상의 K-POP 특화 문제**와 다양한 일반 회화 문제를 제공합니다.

#### 기본 카테고리

1. **기본 표현 (基本フレーズ)** ✨
   - 항상 잠금 해제됨
   - 초급 난이도
   - 자주 사용하는 기본 표현

#### K-POP 카테고리 (모두 잠금 해제)

2. **V LIVE** 📱
   - 항상 잠금 해제됨
   - 초급 난이도
   - V LIVE配信で使える表現
   - 실용적인 방송 시작 인사 및 대화 표현

3. **K-POP感謝表現** 💜
   - 항상 잠금 해제됨
   - 초급 난이도
   - K-POPアイドルへの感謝を伝える表現
   - 아이돌에게 감사를 전하는 다양한 표현

4. **リアクション** 😲
   - 항상 잠금 해제됨
   - 초급 난이도
   - 配信やSNSでのリアクション表現
   - 감탄사 및 반응 표현 (대박, 헐 등)

5. **ファンレター** 💌
   - 항상 잠금 해제됨
   - 중급 난이도
   - ファンレターで使える表現
   - 팬레터 작성에 필요한 정중한 표현

6. **SNS** 📲
   - 항상 잠금 해제됨
   - 초급 난이도
   - SNSで使える表現
   - 소셜 미디어에서 사용하는 표현

7. **コンサート** 🎤
   - 항상 잠금 해제됨
   - 초급 난이도
   - コンサートで使える表現
   - 콘서트 현장에서 사용하는 표현

8. **スラング** 💬
   - 항상 잠금 해제됨
   - 중급 난이도
   - K-POPファンがよく使うスラング
   - K-POP 팬들이 자주 사용하는 슬랭

9. **K-POP用語** 🎵
   - 항상 잠금 해제됨
   - 중급 난이도
   - K-POPでよく使われる専門用語
   - K-POP 관련 전문 용어

#### 통합 카테고리

10. **旅行で使える日常会話** 🗺️
    - 항상 잠금 해제됨
    - 중급 난이도
    - 旅行・ショッピング・レストラン・緊急時などで使える表現
    - 여행, 쇼핑, 레스토랑, 긴급 상황 등 실용적인 표현

### 퀴즈 문제 특징

- **실용성**: K-POP 팬이 실제로 사용할 수 있는 표현 위주
- **상세한 설명**: 간단한 설명과 상세한 설명 제공
- **실제 사용 예시**: 실제 상황에서 사용되는 예시 포함
- **메타데이터**: 상황, 용도, 감정, 격식 수준 등 풍부한 메타데이터

## 🛠 개발 가이드

### 디자인 시스템

모든 색상, 타이포그래피, 간격은 `constants/theme.ts`에서 관리됩니다.

```typescript
import { COLORS, TYPOGRAPHY, SPACING } from './constants/theme';
```

### 커스텀 컴포넌트 사용법

#### Button
```typescript
<Button
  title="퀴즈 시작"
  onPress={handlePress}
  variant="primary"  // primary | secondary | outline
  size="lg"          // sm | md | lg
  fullWidth
/>
```

#### Card
```typescript
<Card variant="elevated">
  {/* 콘텐츠 */}
</Card>
```

#### ProgressBar
```typescript
<ProgressBar
  progress={75}
  label="완료율"
  showPercentage
/>
```

#### LoadingIndicator
```typescript
<LoadingIndicator
  message="データを読み込み中..."
  size="large"
  fullScreen
/>
```

#### ErrorBoundary
```typescript
import { ErrorBoundary } from './components/ErrorBoundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### 퀴즈 데이터 추가

새로운 퀴즈를 추가하려면 `data/quizzes/` 디렉토리의 해당 카테고리 파일을 수정하거나, 새로운 파일을 생성한 후 `data/quizzes/index.ts`에 등록하세요.

자세한 내용은 `data/quizzes/README.md`와 `docs/QUIZ_IMPROVEMENT_GUIDE.md`를 참고하세요.

### Context 사용

#### 인증 컨텍스트
```typescript
import { useAuth } from './contexts/AuthContext';

const { user, login, logout, updateUserLevel } = useAuth();
```

#### 테마 컨텍스트
```typescript
import { useTheme } from './contexts/ThemeContext';

const { colors, mode, toggleTheme } = useTheme();
```

## 🐛 문제 해결

### 일반적인 문제

#### Metro 번들러 오류
```bash
# 캐시 클리어 후 재시작
npm start -- --reset-cache
```

#### 의존성 충돌
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install
```

#### iOS 빌드 오류
```bash
# Pods 재설치 (iOS만)
cd ios
pod install
cd ..
```

## 🧪 테스트

### 테스트 실행

**모든 테스트 실행**
```bash
npm test
```

**Watch 모드로 실행**
```bash
npm run test:watch
```

**커버리지 리포트 생성**
```bash
npm run test:coverage
```

### 테스트 구조

- **단위 테스트**: `__tests__/` 디렉토리에 위치
  - `utils/nameValidation.test.ts` - 이름 검증 로직
  - `services/storageService.test.ts` - 스토리지 서비스
  - `data/quizzes/index.test.ts` - 퀴즈 데이터
  - `screens/LoginScreen.test.tsx` - 로그인 화면
  - `screens/QuizScreen.test.tsx` - 퀴즈 화면

### 테스트 도구

- **Jest** `^29.7.0` - 테스트 프레임워크
- **React Native Testing Library** `^12.5.0` - 컴포넌트 테스트
- **Jest Expo** `^52.0.2` - Expo 환경 테스트

## 📝 스크립트

### 패턴 분석
```bash
node scripts/analyze_patterns.js
```

### 퀴즈 분할
```bash
node scripts/split_quizzes.js
```

## ✨ 최근 개선 사항

### v1.0.0 (최신)

- ✅ **에러 바운더리 추가**: 예상치 못한 에러 발생 시 앱 크래시 방지
- ✅ **타입 안전성 강화**: 모든 `any` 타입 제거, 완전한 TypeScript 타입 체크
- ✅ **로딩 상태 개선**: 데이터 로딩 중 사용자 피드백 제공
- ✅ **성능 최적화**: FlatList 도입으로 렌더링 성능 향상
- ✅ **K-POP 카테고리 중심**: 8개의 K-POP 특화 카테고리 추가 (총 150개 이상의 문제)
- ✅ **캐릭터 선택 기능**: 사용자 개인화를 위한 캐릭터 선택
- ✅ **타이머 기능**: 30초 제한 시간으로 학습 집중도 향상
- ✅ **복습 모드**: 오답 노트 기능으로 틀린 문제 다시 학습
- ✅ **TestFlight 배포 준비**: EAS Build 설정 완료
- ✅ **테스트 코드 추가**: 핵심 기능에 대한 단위 테스트 작성

## 📊 앱 품질 평가

전체 평가 점수: **8.5/10** ⭐

| 항목 | 점수 | 비고 |
|------|------|------|
| 코드 품질 | 9.5/10 | 구조가 우수하고 타입 안전성 좋음, 에러 바운더리 구현 |
| UX/UI | 9/10 | 디자인 일관성과 접근성 우수, 타이머 기능 추가 |
| 기능 완성도 | 8.5/10 | 핵심 기능 완성, 타이머와 복습 모드 등 추가 기능 우수 |
| 성능 | 8/10 | 기본 최적화는 되어 있으나 개선 가능 |
| 유지보수성 | 9/10 | 문서화와 구조가 좋음, 비즈니스 로직 문서화 |
| 보안 | 7.5/10 | 기본 보안은 있으나 강화 필요 |
| 콘텐츠 품질 | 9/10 | 실용적이고 상세한 문제 구성 |

자세한 평가 내용은 `APP_EVALUATION.md`를 참고하세요.

## 🚀 향후 계획

### 높은 우선순위
- [ ] 테스트 코드 확대 (핵심 비즈니스 로직)
- [ ] 로딩 상태 개선 (스켈레톤 UI 고려)
- [ ] 알림 시스템 (일일 학습 알림, 복습 알림)

### 중간 우선순위
- [ ] 성능 최적화 (문제 수 증가 시 FlatList 도입)
- [ ] 문제 수 확대 (더 많은 K-POP 그룹별 표현)
- [ ] 사용자 인증 기능 (서버 연동)

### 낮은 우선순위
- [ ] 클라우드 동기화
- [ ] SNS 공유 기능
- [ ] 학습 통계 대시보드 개선
- [ ] 배지 및 성취 시스템 확장

## 📄 라이선스

MIT

## 👥 기여하기

이슈 리포트나 풀 리퀘스트를 환영합니다! 프로젝트 개선에 기여해 주세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

**한국어 학습을 즐겁고 아름답게. 🇰🇷✨**
