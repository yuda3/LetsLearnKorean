# iOS 기기에서 앱 테스트하기

이 가이드는 LetsLearnKorean 앱을 실제 iPhone이나 iPad에서 테스트하는 방법을 설명합니다.

## 📱 테스트 방법 개요

iOS 기기에서 앱을 테스트하는 방법은 크게 3가지가 있습니다:

### 1. Development Build (추천) ⭐
- **장점**: 모든 네이티브 기능 사용 가능, 실시간 업데이트
- **단점**: 초기 빌드에 시간이 걸림 (약 10-20분)
- **적합한 경우**: 본격적인 개발 및 테스트

### 2. Expo Go 앱
- **장점**: 가장 빠르고 간단함
- **단점**: 일부 네이티브 모듈 사용 제한
- **적합한 경우**: 간단한 UI 테스트

### 3. TestFlight (베타 테스트)
- **장점**: 실제 배포 환경과 동일
- **단점**: 빌드 및 승인 시간이 오래 걸림
- **적합한 경우**: 최종 테스트, 베타 테스터 배포

---

## 방법 1: Development Build 사용하기 (추천)

### 사전 요구사항

1. **Apple Developer 계정** 필요
   - 무료 계정: 기기 1대만, 7일마다 재설치 필요
   - 유료 계정 ($99/년): 최대 100대 기기, 1년 유효

2. **EAS CLI 설치**
   ```bash
   npm install -g eas-cli
   ```

3. **Expo 계정으로 로그인**
   ```bash
   eas login
   ```

### 단계별 진행

#### Step 1: Development Build 생성

**실제 iOS 기기용 빌드:**
```bash
eas build --profile development-device --platform ios
```

**iOS 시뮬레이터용 빌드 (Mac만 가능):**
```bash
eas build --profile development --platform ios
```

#### Step 2: Apple Developer 인증

처음 빌드할 때 다음을 입력하라는 메시지가 나타납니다:
- Apple ID (Apple Developer 계정)
- Apple Team ID (있는 경우)

#### Step 3: 기기 등록

빌드 과정에서 기기를 등록하라는 URL이 제공됩니다:
1. iPhone에서 해당 URL 열기
2. 프로필 다운로드 및 설치
3. 설정 → 일반 → VPN 및 기기 관리에서 프로필 승인

#### Step 4: 빌드 완료 및 설치

빌드가 완료되면 (약 10-20분):
1. 빌드 완료 알림 수신
2. QR 코드 또는 다운로드 링크 제공됨
3. iPhone에서 QR 코드 스캔 또는 링크 열기
4. 앱 다운로드 및 설치

#### Step 5: 앱 실행 및 개발

1. **설치된 앱 실행**
   - 홈 화면에서 "LetsLearnKorean" 앱 찾기
   - 앱 실행

2. **개발 서버 시작**
   ```bash
   npm start
   ```

3. **코드 변경 즉시 반영**
   - 코드를 수정하면 앱에 자동으로 반영됨
   - 빠른 테스트 및 디버깅 가능

### 빌드 프로필 설명

프로젝트에는 다음 빌드 프로필이 설정되어 있습니다:

| 프로필 | 용도 | 명령어 |
|--------|------|--------|
| `development` | iOS 시뮬레이터용 | `eas build --profile development --platform ios` |
| `development-device` | 실제 iOS 기기용 | `eas build --profile development-device --platform ios` |
| `preview` | 내부 테스트용 | `eas build --profile preview --platform ios` |
| `production` | 배포용 | `eas build --profile production --platform ios` |

---

## 방법 2: Expo Go 앱 사용하기

가장 빠르고 간단한 방법이지만, 일부 네이티브 기능이 제한됩니다.

### 단계별 진행

#### Step 1: Expo Go 앱 설치
1. App Store에서 "Expo Go" 검색
2. 앱 다운로드 및 설치

#### Step 2: 개발 서버 시작
```bash
npm start
```

#### Step 3: 앱 실행
1. 터미널에 표시된 QR 코드를 iPhone 카메라로 스캔
2. 또는 같은 Wi-Fi에 연결된 상태에서 Expo Go 앱에서 앱 선택

### 제한사항
- `expo-dev-client`를 사용하는 프로젝트는 Expo Go에서 일부 기능이 작동하지 않을 수 있습니다
- 커스텀 네이티브 모듈은 사용할 수 없습니다

---

## 방법 3: TestFlight 사용하기

실제 배포 환경과 동일한 조건에서 테스트할 수 있습니다.

자세한 내용은 [TESTFLIGHT_SETUP.md](../TESTFLIGHT_SETUP.md) 파일을 참고하세요.

---

## 🛠️ 문제 해결

### 빌드 실패

**오류**: "Provisioning profile doesn't include signing certificate"
- **해결**: Apple Developer 계정에서 인증서를 다시 생성
```bash
eas credentials
```

### 앱이 설치되지 않음

**오류**: "Untrusted Enterprise Developer"
- **해결**: 설정 → 일반 → VPN 및 기기 관리에서 개발자 신뢰

### 개발 서버에 연결되지 않음

**원인**: iPhone과 컴퓨터가 다른 Wi-Fi에 연결됨
- **해결**: 같은 Wi-Fi 네트워크에 연결

### 빌드가 7일 후 만료됨

**원인**: 무료 Apple Developer 계정 사용
- **해결**:
  - 유료 계정으로 업그레이드 ($99/년)
  - 또는 7일마다 재빌드 및 재설치

---

## 💡 추천 워크플로우

### 일상적인 개발
1. **Development Build를 기기에 설치** (한 번만)
2. **npm start로 개발 서버 시작**
3. **코드 수정 → 자동 리로드**
4. **빠른 반복 개발**

### 네이티브 코드 변경 시
```bash
# 새로운 네이티브 패키지 추가하거나 설정 변경 시
eas build --profile development-device --platform ios
```

### 베타 테스터에게 공유
```bash
# Preview 빌드 생성
eas build --profile preview --platform ios

# 빌드 완료 후 다운로드 링크 공유
```

---

## 📚 추가 자료

- [Expo Development Builds 공식 문서](https://docs.expo.dev/develop/development-builds/introduction/)
- [EAS Build 공식 문서](https://docs.expo.dev/build/introduction/)
- [Apple Developer Program](https://developer.apple.com/programs/)
- [TestFlight 가이드](https://developer.apple.com/testflight/)

---

## 🎯 요약

| 방법 | 설정 시간 | 비용 | 기능 제한 | 추천 용도 |
|------|----------|------|-----------|----------|
| Development Build | 🕐 중간 (10-20분) | 💰 무료 또는 $99/년 | ✅ 없음 | 일상적인 개발 |
| Expo Go | ⚡ 빠름 (1분) | 💰 무료 | ⚠️ 있음 | 간단한 UI 테스트 |
| TestFlight | 🕐 느림 (1-2시간) | 💰 $99/년 필수 | ✅ 없음 | 최종 테스트, 베타 배포 |

**추천**: Development Build로 시작하세요! 초기 설정 후에는 가장 빠르고 편리한 개발 경험을 제공합니다.
