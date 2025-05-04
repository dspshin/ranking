import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500">
            이 사이트는 개인 취미 프로젝트로 제작되었습니다.
          </p>
        </div>
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
              소개
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
              개인정보처리방침
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
              이용약관
            </Link>
          </div>
        </nav>
        <div className="mt-8">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} 골프랭킹 (취미 프로젝트 by 골프는힘)
          </p>
        </div>
      </div>
    </footer>
  );
} 