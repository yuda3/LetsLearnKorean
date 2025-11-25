# TestFlight 배포 가이드

## 사전 준비사항

1. **Apple Developer 계정** 필요
   - [Apple Developer Program](https://developer.apple.com/programs/) 가입 (연간 $99)
   - App Store Connect 접근 권한

2. **EAS CLI 설치**
   ```bash
   npm install -g eas-cli
   ```

3. **EAS 계정 로그인**
   ```bash
   eas login
   ```

## TestFlight 배포 단계

### 1단계: iOS 빌드 생성

#### Preview 빌드 (TestFlight용)
```bash
eas build --platform ios --profile preview
```

또는 프로덕션 빌드:
```bash
eas build --platform ios --profile production
```

### 2단계: App Store Connect에 제출

빌드가 완료되면 자동으로 App Store Connect에 업로드됩니다.

또는 수동으로 제출:
```bash
eas submit --platform ios
```

### 3단계: App Store Connect에서 설정

1. [App Store Connect](https://appstoreconnect.apple.com/)에 로그인
2. 앱 선택 또는 새 앱 생성
3. **TestFlight** 탭으로 이동
4. 빌드가 처리될 때까지 대기 (보통 10-30분)
5. **Internal Testing** 또는 **External Testing** 그룹에 빌드 추가
6. 테스터 초대

## 빌드 프로파일 설명

### Preview
- TestFlight 배포용
- 내부 테스터용
- 시뮬레이터 빌드 없음

### Production
- App Store 배포용
- TestFlight와 App Store 모두 사용 가능
- 최종 릴리스용

### Development
- 개발용
- Development Client 필요
- 시뮬레이터 지원

## eas.json 설정 수정

`eas.json`의 `submit` 섹션에서 다음 정보를 업데이트하세요:

```json
"submit": {
  "production": {
    "ios": {
      "appleId": "your-apple-id@example.com",
      "ascAppId": "your-app-store-connect-app-id",
      "appleTeamId": "your-apple-team-id"
    }
  }
}
```

또는 제출 시 자동으로 입력하도록 할 수 있습니다.

## 유용한 명령어

### 빌드 상태 확인
```bash
eas build:list
```

### 빌드 로그 확인
```bash
eas build:view [BUILD_ID]
```

### 프로젝트 정보 확인
```bash
eas project:info
```

## 문제 해결

### 빌드 실패 시
1. 빌드 로그 확인: `eas build:view [BUILD_ID]`
2. `app.json`의 iOS 설정 확인
3. Bundle Identifier가 App Store Connect에 등록되어 있는지 확인

### 인증서 문제
- EAS가 자동으로 인증서를 관리합니다
- 필요시 `eas credentials` 명령어로 확인

## 참고 자료

- [EAS Build 문서](https://docs.expo.dev/build/introduction/)
- [TestFlight 가이드](https://developer.apple.com/testflight/)
- [App Store Connect 가이드](https://developer.apple.com/app-store-connect/)

