import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">골프랭킹 소개</h1>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  골프랭킹은 개인 취미 프로젝트로 개발된 웹 애플리케이션입니다. 이 애플리케이션은 골프 라운드를 기록하고 분석하는 데 도움을 주기 위해 만들어졌습니다.
                </p>
                <p>
                  이 프로젝트는 학습 및 개인 포트폴리오 목적으로 제작되었으며, 상업적 용도로 사용되지 않습니다.
                </p>
                <p>
                  기술 스택:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>프론트엔드: Next.js 15.3, React 19, TypeScript, Tailwind CSS 4</li>
                  <li>백엔드: Next.js API Routes</li>
                  <li>데이터베이스: SQLite, Prisma ORM 6.7</li>
                  <li>인증: NextAuth.js 4.24</li>
                  <li>파일 스토리지: Cloudinary</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 