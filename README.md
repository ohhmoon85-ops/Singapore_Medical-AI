# Medical AI - Singapore Strategic Proposal

싱가포르 의료 기관을 위한 AI 기반 심전도 분석 솔루션 제안 대시보드입니다.

## 주요 기능

- 📊 **시각화 중심 프레젠테이션**: 복잡한 의료 데이터를 직관적인 차트와 그래프로 표현
- 📱 **모바일 최적화**: 스마트폰에서도 완벽하게 작동하는 반응형 디자인
- 🎯 **타겟별 맞춤 메시지**: 의사, 병원 경영진, 클리닉 운영자 각각을 위한 핵심 포인트
- 💡 **인터랙티브 시뮬레이션**: Before/After 비교를 통한 가치 제안

## 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## Vercel 배포

### 1. GitHub 연동

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Vercel에서 배포

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 선택
4. Framework Preset: **Vite** 선택
5. "Deploy" 클릭

### 3. 카카오톡 공유 최적화

이 앱은 카카오톡(안드로이드/iOS)에서 URL이 누락되지 않도록 최적화되어 있습니다:
- ✅ 모바일 뷰포트 설정
- ✅ 메타 태그 최적화
- ✅ Open Graph 프로토콜 지원 준비

## 기술 스택

- **React 19** - UI 프레임워크
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 빌드 도구
- **Tailwind CSS** - 유틸리티 우선 CSS
- **Recharts** - 데이터 시각화
- **Font Awesome** - 아이콘

## 프로젝트 구조

```
medical-ai-singapore/
├── index.html          # HTML 진입점
├── index.tsx           # React 진입점
├── App.tsx             # 메인 앱 컴포넌트
├── index.css           # 글로벌 스타일
├── package.json        # 의존성 관리
├── tsconfig.json       # TypeScript 설정
└── vite.config.ts      # Vite 빌드 설정
```

## 주요 섹션

1. **Problem Definition** - 싱가포르의 심혈관 질환 현황 (빙산 모델)
2. **Workflow Simulation** - 기존 3시간 vs AI 10초 비교
3. **Clinical Evidence** - 다민족 환경에서의 높은 정확도 (AUROC 0.905+)
4. **Financial Impact** - ROI 및 비용 절감 시뮬레이션
5. **Integration** - 기존 GE/Philips 장비와의 완벽한 통합

## 라이선스

Copyright © 2026 Medical AI. All rights reserved.
