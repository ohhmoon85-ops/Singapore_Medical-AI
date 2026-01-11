# 배포 가이드 (Deployment Guide)

## 🚀 Vercel 배포 단계별 가이드

### Step 1: 프로젝트 준비

```bash
# 1. 프로젝트 디렉토리 이동
cd medical-ai-singapore

# 2. 의존성 설치
npm install

# 3. 로컬에서 빌드 테스트
npm run build

# 4. 빌드 결과 확인 (dist 폴더 생성됨)
ls -la dist/
```

### Step 2: GitHub에 코드 업로드

```bash
# 1. Git 초기화 (아직 안 했다면)
git init

# 2. 모든 파일 추가
git add .

# 3. 커밋
git commit -m "feat: Medical AI Singapore Dashboard - Initial Release"

# 4. GitHub 저장소 연결 (본인의 username으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/medical-ai-singapore.git

# 5. 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

### Step 3: Vercel 배포

#### 방법 1: Vercel 웹사이트 (추천)

1. **Vercel 접속**: https://vercel.com
2. **로그인**: GitHub 계정으로 로그인
3. **New Project** 클릭
4. **Import Git Repository**
   - GitHub 저장소 선택: `medical-ai-singapore`
5. **Configure Project**
   - Framework Preset: `Vite` (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 입력됨)
   - Output Directory: `dist` (자동 입력됨)
   - Install Command: `npm install` (자동 입력됨)
6. **Environment Variables** (필요시)
   - 현재는 필요 없음 (API 키 등 사용하지 않음)
7. **Deploy** 클릭
8. **배포 완료 대기** (약 1-2분)
9. **URL 복사**: `https://medical-ai-singapore-xxxxx.vercel.app`

#### 방법 2: Vercel CLI

```bash
# 1. Vercel CLI 전역 설치
npm install -g vercel

# 2. Vercel 로그인
vercel login

# 3. 프로젝트 배포 (첫 배포)
vercel

# 4. 프로덕션 배포
vercel --prod

# 5. 배포 상태 확인
vercel list
```

### Step 4: 커스텀 도메인 설정 (선택사항)

1. Vercel 프로젝트 대시보드 → **Settings** → **Domains**
2. **Add Domain** 클릭
3. 도메인 입력 (예: medical-ai.com)
4. DNS 설정 안내에 따라 도메인 등록 업체에서 설정
5. 완료 후 자동으로 SSL 인증서 발급

## 📱 모바일 테스트 체크리스트

### 카카오톡 공유 테스트

1. **안드로이드 카카오톡**
   - [ ] URL 전송 시 미리보기 정상 표시
   - [ ] 링크 클릭 시 페이지 정상 로딩
   - [ ] 모든 섹션 스크롤 정상 작동
   - [ ] 하단 네비게이션 정상 작동

2. **iOS 카카오톡**
   - [ ] URL 전송 시 미리보기 정상 표시
   - [ ] URL 누락 없이 전체 링크 표시
   - [ ] 링크 클릭 시 페이지 정상 로딩
   - [ ] 차트 및 애니메이션 정상 작동

3. **공통 확인사항**
   - [ ] 세로/가로 모드 전환 정상
   - [ ] 터치 반응 원활
   - [ ] 폰트 크기 적절
   - [ ] 모든 아이콘 정상 표시

## 🔧 문제 해결

### 빌드 실패 시

```bash
# 캐시 및 node_modules 완전 삭제
rm -rf node_modules package-lock.json dist

# 재설치
npm install

# 빌드 재시도
npm run build
```

### Vercel 배포 실패 시

1. **Build Logs 확인**
   - Vercel 대시보드 → Deployments → 실패한 배포 클릭
   - Build Logs 탭에서 오류 메시지 확인

2. **자주 발생하는 오류**
   - `Cannot find module`: 의존성 설치 문제 → `package.json` 확인
   - `Build failed`: TypeScript 오류 → `tsconfig.json` 확인
   - `Out of memory`: 빌드 메모리 부족 → Vercel 플랜 업그레이드 필요

3. **Node.js 버전 설정**
   - `package.json`에 엔진 버전 명시
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

### 흰 화면 (White Screen) 문제

**원인**: 
- React 컴포넌트 렌더링 오류
- 잘못된 경로 설정
- JavaScript 오류

**해결 방법**:
1. 브라우저 개발자 도구 (F12) → Console 탭 확인
2. Network 탭에서 리소스 로딩 실패 확인
3. `vite.config.ts` base 경로 확인
4. `index.html`의 script 경로 확인

## 🔄 업데이트 배포

### 코드 수정 후 재배포

```bash
# 1. 코드 수정

# 2. 로컬 테스트
npm run dev

# 3. 빌드 테스트
npm run build

# 4. Git 커밋
git add .
git commit -m "feat: 업데이트 내용 설명"

# 5. GitHub에 푸시
git push origin main

# 6. Vercel 자동 배포 시작 (GitHub 연동 시)
# 또는 수동 배포: vercel --prod
```

## 📊 성능 최적화 팁

1. **이미지 최적화**
   - WebP 포맷 사용
   - 적절한 이미지 크기 설정
   - Lazy loading 적용

2. **코드 분할**
   - React.lazy() 사용
   - 동적 import 활용

3. **캐싱 전략**
   - vercel.json의 headers 설정 활용
   - 정적 자산 캐싱 최적화

4. **번들 크기 줄이기**
   ```bash
   # 번들 분석
   npm run build -- --mode analyze
   
   # 사용하지 않는 의존성 제거
   npm prune
   ```

## 📧 지원

배포 관련 문제 발생 시:
- GitHub Issues: [프로젝트 저장소 Issues]
- Email: [문형철 이메일]
- Vercel Support: https://vercel.com/support

---

**마지막 업데이트**: 2026-01-11
**작성자**: 문형철
