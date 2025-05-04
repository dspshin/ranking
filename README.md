# 골프랭킹 (Golf Ranking)

골프랭킹은 골프 라운드 정보를 기록하고, 통계를 확인하고, 친구들과 성적을 공유할 수 있는 웹 애플리케이션입니다.

## 주요 기능

- 라운드 기록 및 관리
- 홀별 스코어 기록
- 페어웨이 안착률, 그린 적중률, 퍼팅 등 상세 통계
- 사진 업로드 기능
- 친구 그룹 및 랭킹 시스템

## 기술 스택

- **프론트엔드**: Next.js 15.3, React 19, TypeScript, Tailwind CSS 4
- **백엔드**: Next.js API Routes
- **데이터베이스**: SQLite, Prisma ORM 6.7
- **인증**: NextAuth.js 4.24
- **파일 스토리지**: Cloudinary

## 로컬 개발 환경 설정

1. 저장소 클론

2. 의존성 설치

```bash
npm install
```

3. 환경 변수 설정

`.env` 파일을 루트 디렉토리에 생성하고 다음 변수들을 설정하세요:

```
# 데이터베이스 URL
DATABASE_URL="file:./dev.db"

# NextAuth 설정
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# Cloudinary (이미지 업로드용)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

4. 데이터베이스 마이그레이션

```bash
npx prisma migrate dev
```

5. 개발 서버 실행

```bash
npm run dev
```

## 배포

### 무료 배포 옵션

- **Vercel**: Next.js 애플리케이션 배포에 최적화되어 있습니다.
- **Cloudinary**: 이미지 호스팅

## 기여하기

1. 이슈를 확인하거나 새로운 이슈를 생성합니다.
2. 이슈와 관련된 브랜치를 생성합니다. (`feature/issue-number-description`)
3. 변경사항을 커밋합니다.
4. 변경사항을 원격 저장소에 푸시합니다.
5. Pull Request를 생성합니다.

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
