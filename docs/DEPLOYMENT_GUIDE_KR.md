# 앱스토어 배포 완벽 가이드 (한글)

## 개요
이 프로젝트는 **Expo**를 사용하여 개발되었으며, **하나의 코드베이스**로 Android와 iOS 앱을 동시에 개발하고 배포할 수 있습니다.

## 사전 준비사항

### 1. 필수 계정
- **Google Play Console** 계정 (Android 배포용)
  - 일회성 등록비: $25
  - https://play.google.com/console

- **Apple Developer Program** 계정 (iOS 배포용)
  - 연간 비용: $99
  - https://developer.apple.com/programs/

### 2. 필수 도구 설치
```bash
# EAS CLI 설치 (Expo Application Services)
npm install -g eas-cli

# EAS 로그인
eas login
```

---

### 💻 로컬 개발 및 테스트 (에뮬레이터)
앱스토어에 배포하기 전, 안드로이드 스튜디오의 에뮬레이터나 실제 기기에서 앱을 테스트하고 실시간으로 코드를 수정하며 확인할 수 있습니다. 이를 위해 **개발 빌드(Development Build)**를 사용합니다.

#### 1단계: `expo-dev-client` 설치
개발 빌드를 만들기 위해 `expo-dev-client` 패키지가 필요합니다. 아래 명령어로 먼저 설치해주세요.

```bash
npm install expo-dev-client
```

#### 2단계: Development 빌드 생성
에뮬레이터나 테스트 기기에 설치할 개발용 `apk` 파일을 생성합니다.

```bash
eas build --profile development --platform android
```

#### 3단계: 에뮬레이터에 앱 설치
1.  빌드가 완료되면, 빌드 결과 페이지에서 `.apk` 파일을 다운로드합니다.
2.  안드로이드 스튜디오에서 에뮬레이터를 실행합니다.
3.  다운로드한 `.apk` 파일을 실행 중인 에뮬레이터 화면으로 드래그 앤 드롭하여 설치합니다.

#### 4단계: 개발 서버 실행 및 앱 테스트
1.  터미널에서 아래 명령어로 개발 서버를 시작합니다.
    ```bash
    npm start
    ```
2.  에뮬레이터에서 설치된 '''LetsLearnKorean''' 앱을 실행합니다.
3.  앱이 개발 서버에 자동으로 연결되며, 이제 코드를 수정하면 에뮬레이터 화면에 즉시 반영됩니다.

---

## 📱 Android 배포 (Google Play Store)

### 1단계: Android 빌드 생성

#### Development 빌드 (개발 및 테스트용)
```bash
# 위 '''로컬 개발 및 테스트''' 섹션 참고
eas build --profile development --platform android
```

#### Preview 빌드 (테스트용 APK)
```bash
npm run build:android:preview
# 또는
eas build --platform android --profile preview
```

#### Production 빌드 (앱스토어용 AAB)
```bash
npm run build:android:production
# 또는
eas build --platform android --profile production
```

### 2단계: Google Play Console 설정

1. **Google Play Console**에 로그인
2. **앱 만들기** 클릭
3. 앱 정보 입력:
   - 앱 이름: **LetsLearnKorean**
   - 기본 언어: 한국어
   - 앱 또는 게임: 앱
   - 무료 또는 유료: 무료

4. **앱 액세스 권한**, **광고**, **콘텐츠 등급** 등 필수 정보 입력

### 3단계: 첫 번째 릴리스 만들기

1. **프로덕션** > **새 릴리스 만들기**
2. EAS에서 빌드한 `.aab` 파일 업로드
3. 출시 정보 작성:
   - 출시 이름: v1.0.0
   - 출시 노트 작성
4. **검토** > **프로덕션으로 출시**

### 4단계: 스토어 등록정보 작성

- **앱 이름**: LetsLearnKorean
- **간단한 설명**: 일본어 학습을 위한 한국어 학습 앱
- **자세한 설명**: 앱의 주요 기능 설명
- **스크린샷**: 최소 2개 이상 (1080x1920 권장)
- **아이콘**: 512x512 PNG

---

## 🍎 iOS 배포 (Apple App Store)

### 1단계: iOS 빌드 생성

#### Preview 빌드 (TestFlight용)
```bash
npm run build:ios:preview
# 또는
eas build --platform ios --profile preview
```

#### Production 빌드 (App Store용)
```bash
npm run build:ios:production
# 또는
eas build --platform ios --profile production
```

### 2단계: App Store Connect 설정

1. **App Store Connect**에 로그인 (https://appstoreconnect.apple.com/)
2. **나의 앱** > **+** > **신규 앱**
3. 앱 정보 입력:
   - **플랫폼**: iOS
   - **이름**: LetsLearnKorean
   - **기본 언어**: 한국어
   - **번들 ID**: com.letslearnkorean.app (이미 설정됨)
   - **SKU**: 고유 식별자 (예: LETSLEARNKOREAN001)

### 3단계: TestFlight 테스트 (선택사항)

1. **TestFlight** 탭으로 이동
2. 빌드가 처리될 때까지 대기 (10-30분)
3. **내부 테스팅** 또는 **외부 테스팅** 그룹 생성
4. 테스터 초대 (이메일)
5. 테스터들이 TestFlight 앱으로 설치 및 테스트

### 4단계: App Store 제출

1. **App Store** 탭으로 이동
2. **+버전 또는 플랫폼** > **iOS**
3. 버전 정보 입력:
   - **버전**: 1.0.0
   - **스크린샷**: 각 기기 크기별로 필요
   - **설명**: 앱 설명
   - **키워드**: 검색 키워드
   - **지원 URL**: 지원 웹사이트
   - **개인정보 처리방침 URL**: 필수

4. **빌드 선택** > TestFlight에서 승인된 빌드 선택
5. **가격 및 판매 가능 여부** 설정
6. **심사를 위해 제출**

### 5단계: EAS Submit으로 자동 제출 (선택사항)

```bash
# eas.json의 submit 섹션 업데이트 필요
eas submit --platform ios
```

`eas.json`에서 다음 정보를 업데이트하세요:
```json
"submit": {
  "production": {
    "ios": {
      "appleId": "your-apple-id@example.com",
      "ascAppId": "App Store Connect에서 찾을 수 있는 앱 ID",
      "appleTeamId": "Apple Developer Team ID"
    }
  }
}
```

---

## 🚀 양쪽 동시 빌드

### Android와 iOS를 동시에 빌드
```bash
eas build --platform all --profile production
```

---

## 📋 배포 체크리스트

### Android
- [ ] Google Play Console 계정 생성
- [ ] 앱 등록 및 정보 입력
- [ ] 개인정보 처리방침 작성
- [ ] 스크린샷 준비 (최소 2개)
- [ ] 아이콘 준비 (512x512)
- [ ] Production 빌드 생성
- [ ] AAB 파일 업로드
- [ ] 콘텐츠 등급 받기
- [ ] 출시 제출

### iOS
- [ ] Apple Developer 계정 가입 ($99/년)
- [ ] App Store Connect에 앱 등록
- [ ] Bundle ID 확인 (com.letslearnkorean.app)
- [ ] 개인정보 처리방침 웹페이지 준비
- [ ] 스크린샷 준비 (각 기기 크기별)
- [ ] 아이콘 준비 (1024x1024)
- [ ] Production 빌드 생성
- [ ] TestFlight 테스트 (선택)
- [ ] App Store 제출
- [ ] 심사 대기 (보통 1-3일)

---

## 🔧 유용한 명령어

### 빌드 상태 확인
```bash
eas build:list
```

### 특정 빌드 상세 확인
```bash
eas build:view [BUILD_ID]
```

### 프로젝트 정보 확인
```bash
eas project:info
```

### 인증서 관리
```bash
eas credentials
```

---

## ❗ 주의사항

### 버전 관리
업데이트를 배포할 때마다 버전을 올려야 합니다:

**app.json**
```json
{
  "expo": {
    "version": "1.0.1",  // 전체 버전
    "ios": {
      "buildNumber": "2"  // iOS 빌드 번호
    },
    "android": {
      "versionCode": 2    // Android 버전 코드
    }
  }
}
```

### 심사 거부 사유 (iOS)
- 개인정보 처리방침 누락
- 스크린샷과 실제 앱 불일치
- 충돌/버그 발생
- 필수 기능 미작동
- 부적절한 콘텐츠

### 심사 기간
- **Google Play**: 보통 1-3일
- **Apple App Store**: 보통 1-3일 (길면 1주일)

---

## 📚 추가 리소스

- [Expo 빌드 문서](https://docs.expo.dev/build/introduction/)
- [Google Play Console 헬프](https://support.google.com/googleplay/android-developer/)
- [App Store Connect 가이드](https://developer.apple.com/app-store-connect/)
- [TestFlight 가이드](https://developer.apple.com/testflight/)

---

## 🆘 문제 해결

### 빌드 실패 시
1. 빌드 로그 확인: `eas build:view [BUILD_ID]`
2. `app.json` 설정 확인
3. 의존성 문제 확인: `npm install`

### iOS 인증서 문제
- EAS가 자동으로 인증서를 관리합니다
- 수동 관리가 필요하면: `eas credentials`

### Android 서명 문제
- EAS가 자동으로 키스토어를 관리합니다
- 수동 관리가 필요하면: `eas credentials`

---

## 🎉 첫 배포 후

1. **사용자 피드백** 수집
2. **분석 도구** 연동 (Google Analytics, Firebase 등)
3. **정기 업데이트** 계획
4. **버그 수정** 및 기능 추가

행운을 빕니다! 🚀
