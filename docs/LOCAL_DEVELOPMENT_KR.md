# 로컬 개발 및 테스트 가이드

## 🚀 빠른 시작 (Xcode 불필요)

### 1. Expo Go 앱으로 테스트 (추천)

가장 쉬운 방법입니다. Xcode나 Android Studio가 필요 없습니다.

```bash
# 개발 서버 시작
npm start
```

그 다음:
1. **iPhone/iPad**: App Store에서 "Expo Go" 다운로드
2. **Android**: Play Store에서 "Expo Go" 다운로드
3. 터미널에 표시된 QR 코드를 스캔
4. 앱이 자동으로 로드됩니다
5. 코드를 수정하면 자동으로 새로고침됩니다 (Hot Reload)

**장점:**
- 설정 불필요
- 실제 기기에서 바로 테스트
- 빠른 개발 사이클
- 여러 기기에서 동시 테스트 가능

**단점:**
- 커스텀 네이티브 모듈 사용 불가
- 일부 네이티브 기능 제한

---

## 💻 Mac에서 iOS 시뮬레이터로 테스트

### 사전 준비

1. **Xcode 설치**
   ```bash
   # Mac App Store에서 Xcode 다운로드 (무료, 약 10GB)
   # 또는 터미널에서:
   xcode-select --install
   ```

2. **iOS 시뮬레이터 확인**
   ```bash
   # Xcode를 한 번 실행하고 라이센스 동의
   # 그 다음 Xcode를 닫아도 됩니다
   ```

### 앱 실행

```bash
# iOS 시뮬레이터에서 실행 (Xcode를 열 필요 없음!)
npm run ios
```

이 명령어가 자동으로:
- iOS 시뮬레이터를 실행
- 앱을 빌드
- 앱을 설치하고 실행

**팁:**
- 첫 실행은 느릴 수 있습니다 (빌드 시간)
- 이후에는 빠르게 실행됩니다
- Hot Reload가 작동합니다

### 특정 기기 선택

```bash
# iPhone 15 Pro 시뮬레이터로 실행
npx expo run:ios --device "iPhone 15 Pro"

# 사용 가능한 시뮬레이터 목록 보기
xcrun simctl list devices
```

---

## 🤖 Android 에뮬레이터로 테스트

### 사전 준비

1. **Android Studio 설치**
   - https://developer.android.com/studio 에서 다운로드

2. **Android 에뮬레이터 설정**
   - Android Studio 실행
   - Tools > Device Manager
   - Create Virtual Device
   - Pixel 5 또는 원하는 기기 선택
   - Android 13 (API 33) 이상 선택
   - Finish

3. **환경 변수 설정** (Mac/Linux)
   ```bash
   # ~/.zshrc 또는 ~/.bash_profile에 추가
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

### 앱 실행

```bash
# 1. 에뮬레이터 실행 (Device Manager에서 수동으로 실행 또는)
emulator -avd Pixel_5_API_33

# 2. 앱 실행
npm run android
```

**팁:**
- 첫 실행은 느릴 수 있습니다
- Hot Reload가 작동합니다
- 에뮬레이터를 계속 켜두면 편합니다

---

## 🔧 네이티브 코드 수정이 필요한 경우

Expo를 사용하면 대부분 네이티브 코드를 건드릴 필요가 없지만, 필요한 경우:

### iOS 네이티브 프로젝트 생성

```bash
# iOS 폴더 생성 (prebuild)
npx expo prebuild --platform ios

# Xcode에서 열기
open ios/LetsLearnKorean.xcworkspace
```

⚠️ **주의**: `prebuild`를 실행하면 더 이상 Expo Go를 사용할 수 없습니다.

### Android 네이티브 프로젝트 생성

```bash
# Android 폴더 생성
npx expo prebuild --platform android

# Android Studio에서 열기
open -a "Android Studio" android/
```

---

## 🎯 개발 워크플로우 추천

### 초기 개발 단계
```bash
# Expo Go 앱으로 빠르게 개발
npm start
# → QR 코드 스캔으로 실제 기기에서 테스트
```

### 시뮬레이터/에뮬레이터 테스트
```bash
# iOS (Mac만 가능)
npm run ios

# Android
npm run android
```

### 프로덕션 빌드 테스트
```bash
# EAS 클라우드 빌드 (Mac 없이도 iOS 빌드 가능!)
npm run build:ios:preview
npm run build:android:preview

# 빌드 완료 후 TestFlight나 내부 테스팅으로 배포
```

---

## 🐛 디버깅

### React Native Debugger 사용

```bash
# 개발자 메뉴 열기
# iOS 시뮬레이터: Cmd + D
# Android 에뮬레이터: Cmd + M (Mac) 또는 Ctrl + M (Windows/Linux)

# "Debug Remote JS" 선택
```

### 콘솔 로그 보기

```bash
# Metro bundler 터미널에서 자동으로 표시됩니다
npm start
```

---

## 📱 실제 기기에서 테스트

### Expo Go 사용 (가장 쉬움)
1. `npm start`
2. QR 코드 스캔
3. 완료!

### 개발 빌드 사용 (네이티브 모듈 필요시)

#### iOS (Apple Developer 계정 필요)
```bash
# 개발 빌드 생성
eas build --profile development --platform ios

# 기기를 Apple Developer에 등록해야 함
# UDID 확인: 기기를 Mac에 연결 > Finder에서 기기 클릭 > UDID 확인
```

#### Android (계정 불필요)
```bash
# 개발 APK 생성
eas build --profile development --platform android

# APK를 기기에 다운로드하고 설치
```

---

## ⚡ 성능 최적화 팁

### 빠른 개발을 위한 설정

**Metro bundler 캐시 초기화**
```bash
npm start -- --clear
```

**의존성 재설치**
```bash
rm -rf node_modules package-lock.json
npm install
```

**iOS 빌드 캐시 초기화**
```bash
npx expo run:ios --clean
```

**Android 빌드 캐시 초기화**
```bash
cd android
./gradlew clean
cd ..
npx expo run:android
```

---

## 🆚 Expo Go vs 개발 빌드 비교

| 특징 | Expo Go | 개발 빌드 |
|------|---------|-----------|
| 설치 속도 | 즉시 | 빌드 필요 (5-10분) |
| 네이티브 모듈 | 제한적 | 모든 모듈 사용 가능 |
| Xcode/Android Studio | 불필요 | 불필요 (EAS 빌드 사용) |
| 사용 사례 | 빠른 프로토타이핑 | 프로덕션 준비 |

---

## 🔍 문제 해결

### iOS 시뮬레이터가 실행되지 않을 때
```bash
# Xcode 라이센스 동의
sudo xcodebuild -license accept

# 시뮬레이터 초기화
xcrun simctl erase all
```

### Android 에뮬레이터가 느릴 때
- AVD Manager에서 RAM 증가 (최소 2GB)
- Hardware acceleration 활성화 (Intel HAXM 또는 Apple Silicon)

### Metro bundler 오류
```bash
# 포트 충돌 시
npx react-native start --reset-cache --port 8082

# 또는 기존 프로세스 종료
killall node
```

### "Unable to resolve module" 오류
```bash
# 캐시 초기화
npm start -- --clear

# watchman 초기화 (Mac)
watchman watch-del-all
```

---

## 🎓 유용한 단축키

### iOS 시뮬레이터
- `Cmd + D`: 개발자 메뉴
- `Cmd + R`: 새로고침
- `Cmd + Shift + H`: 홈 화면

### Android 에뮬레이터
- `Cmd + M` (Mac) / `Ctrl + M`: 개발자 메뉴
- `R + R`: 새로고침

---

## 📚 추가 리소스

- [Expo 개발 문서](https://docs.expo.dev/develop/development-builds/introduction/)
- [React Native 디버깅](https://reactnative.dev/docs/debugging)
- [Expo CLI 명령어](https://docs.expo.dev/workflow/expo-cli/)

---

## ✅ 체크리스트

### 처음 시작할 때
- [ ] Node.js 설치 확인 (`node -v`)
- [ ] 의존성 설치 (`npm install`)
- [ ] Expo Go 앱 다운로드 (iOS/Android)
- [ ] 개발 서버 시작 (`npm start`)

### iOS 개발 (Mac)
- [ ] Xcode 설치
- [ ] Xcode 라이센스 동의
- [ ] iOS 시뮬레이터 실행 확인

### Android 개발
- [ ] Android Studio 설치
- [ ] Android 에뮬레이터 생성
- [ ] 환경 변수 설정

행운을 빕니다! 🚀
