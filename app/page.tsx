import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

              <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"></div>

              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block xl:inline">당신의 골프 라운드를</span>{" "}
                    <span className="block text-green-600 xl:inline">기록하고 분석하세요</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:max-w-3xl lg:mx-0">
                    골프랭킹에서 라운드 점수를 기록하고, 분석하고, 친구들과 공유하세요. 
                    홀별 스코어, 페어웨이 안착률, 그린 적중률 등을 추적하고 자신의 실력을 향상시키세요.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link href="/auth/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                        시작하기
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href="/rounds" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                        둘러보기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="/images/hero.jpg"
              alt="골프 코스"
              width={1920}
              height={1080}
            />
          </div>
        </div>

        {/* 기능 섹션 */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">특징</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                골프 기록 관리를 더 쉽게
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                골프랭킹은 골프 라운드 정보를 쉽게 기록하고 분석할 수 있도록 도와줍니다.
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {/* 기능 1 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">스코어 기록</h3>
                    <p className="mt-2 text-base text-gray-500">
                      홀별 스코어, 페어웨이 안착률, 그린 적중률, 퍼팅 등을 쉽게 기록하고 추적할 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 기능 2 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">통계 분석</h3>
                    <p className="mt-2 text-base text-gray-500">
                      라운드 기록을 바탕으로 상세한 통계와 분석을 제공하여 자신의 강점과 약점을 파악할 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 기능 3 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">사진 업로드</h3>
                    <p className="mt-2 text-base text-gray-500">
                      골프 라운드 중 멋진 순간을 사진으로 기록하고 공유할 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 기능 4 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">친구들과 경쟁</h3>
                    <p className="mt-2 text-base text-gray-500">
                      친구들과 그룹을 만들고 랭킹을 공유하여 건전한 경쟁을 즐길 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
