# Medical AI - Singapore Strategic Proposal 🏥

AI-Assisted ECG 솔루션을 싱가포르 의료 관계자들에게 제안하는 전략적 프리젠테이션 대시보드입니다.

## 주요 기능 ✨

- 📊 **시각화 중심 프리젠테이션**: 도표, 시뮬레이션, 데이터 비교
- 📱 **모바일 최적화**: 안드로이드/iOS 카카오톡 공유 지원
- 🎯 **대상별 맞춤 메시지**: 의사, 경영진, GP 클리닉 운영자
- 🚀 **빠른 워크플로우**: 180분 → 10초 분석 시간 단축
- 💰 **재정적 영향 시뮬레이션**: ROI 및 비용 절감 효과

## 기술 스택 🛠️

- React 18 + TypeScript
- Vite (빌드 도구)
- Tailwind CSS (스타일링)
- Recharts (차트 라이브러리)
- Font Awesome (아이콘)

## 로컬 개발 환경 설정 💻

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## Vercel 배포 가이드 🚀

### 1. GitHub 연동 방식 (권장)

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Medical AI Singapore Dashboard"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/medical-ai-singapore.git
   git push -u origin main
   ```

2. **Vercel 배포**
   - [Vercel](https://vercel.com) 로그인
   - "New Project" 클릭
   - GitHub 저장소 선택
   - Framework Preset: **Vite** 자동 감지
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Deploy 클릭

### 2. Vercel CLI 방식

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 모바일 최적화 📱

### 카카오톡 공유 URL 유지
- Open Graph 메타 태그 설정 완료
- iOS 카카오톡 URL 누락 방지를 위한 메타 태그 추가
- 모바일 뷰포트 최적화

### 테스트 방법
1. 배포 후 URL 복사
2. 카카오톡에서 URL 전송 테스트
3. 미리보기 이미지 및 제목 확인
4. 링크 클릭 후 정상 작동 확인

## 프로젝트 구조 📁

```
medical-ai-singapore/
├── src/
│   ├── App.tsx          # 메인 애플리케이션 컴포넌트
│   ├── main.tsx         # 앱 엔트리 포인트
│   └── index.css        # 글로벌 스타일 (Tailwind)
├── index.html           # HTML 템플릿
├── package.json         # 프로젝트 의존성
├── vite.config.ts       # Vite 설정
├── tsconfig.json        # TypeScript 설정
├── tailwind.config.js   # Tailwind CSS 설정
└── README.md
```

## 주요 섹션 📋

1. **Problem Definition** - Iceberg Effect 시각화
2. **Workflow Simulation** - 180분 vs 10초 비교
3. **Clinical Evidence** - 다민족 AUROC 정확도
4. **Financial Impact** - ROI 및 비용 절감
5. **Integration** - GE/Philips 장비 연동

## 환경 변수 🔐

`.env.local` 파일 생성 (필요시):
```bash
VITE_GEMINI_API_KEY=your_api_key_here
VITE_APP_NAME=Medical AI Singapore
VITE_APP_VERSION=1.0.0
```

## 문제 해결 🔧

### 빌드 오류 시
```bash
# 캐시 삭제
rm -rf node_modules package-lock.json
npm install

# TypeScript 오류 무시 (임시)
npm run build -- --mode production
```

### Vercel 배포 실패 시
1. Node.js 버전 확인 (18+)
2. `vercel.json` 설정 확인
3. Build logs 확인
4. Environment Variables 설정

## 라이선스 📄

MIT License

## 문의 및 지원 💬

프로젝트 관련 문의: [문형철](mailto:your-email@example.com)

---

Made with ❤️ for Singapore Healthcare Innovation
