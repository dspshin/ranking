'use client';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function RoundDetailPage({ params }: { params: { id: string } }) {
  const { data: session } = useSession();

  // 더미 데이터 (실제로는 API에서 데이터를 가져옴)
  const round = {
    id: params.id,
    date: "2023-06-15",
    courseName: "서울 컨트리 클럽",
    location: "경기도 용인시",
    imageUrl: "/images/course1.jpg",
    description: "맑은 날씨에 진행된 라운드. 드라이버 샷이 안정적이었음.",
    totalScore: 82,
    totalPar: 72,
    userId: "1", // 라운드 생성자 ID
    participants: [
      { id: "1", name: "김철수", nickname: "철수골프왕", image: "/images/avatar1.jpg" },
      { id: "2", name: "이영희", nickname: "영희프로", image: "/images/avatar2.jpg" },
      { id: "3", name: "박지성", nickname: "골프지성", image: "/images/avatar3.jpg" },
    ],
    holeScores: [
      { holeNumber: 1, par: 4, score: 5, fairwayHit: true, greenHit: false, putts: 2 },
      { holeNumber: 2, par: 3, score: 3, fairwayHit: true, greenHit: true, putts: 2 },
      { holeNumber: 3, par: 5, score: 6, fairwayHit: false, greenHit: false, putts: 3 },
      { holeNumber: 4, par: 4, score: 4, fairwayHit: true, greenHit: true, putts: 2 },
      { holeNumber: 5, par: 4, score: 5, fairwayHit: false, greenHit: false, putts: 2 },
      { holeNumber: 6, par: 3, score: 4, fairwayHit: true, greenHit: false, putts: 2 },
      { holeNumber: 7, par: 5, score: 7, fairwayHit: false, greenHit: false, putts: 3 },
      { holeNumber: 8, par: 4, score: 5, fairwayHit: true, greenHit: false, putts: 2 },
      { holeNumber: 9, par: 4, score: 5, fairwayHit: false, greenHit: false, putts: 2 },
      { holeNumber: 10, par: 4, score: 5, fairwayHit: true, greenHit: false, putts: 2 },
      { holeNumber: 11, par: 3, score: 3, fairwayHit: true, greenHit: true, putts: 2 },
      { holeNumber: 12, par: 5, score: 6, fairwayHit: false, greenHit: false, putts: 3 },
      { holeNumber: 13, par: 4, score: 4, fairwayHit: true, greenHit: true, putts: 2 },
      { holeNumber: 14, par: 4, score: 5, fairwayHit: false, greenHit: false, putts: 2 },
      { holeNumber: 15, par: 3, score: 4, fairwayHit: true, greenHit: false, putts: 2 },
      { holeNumber: 16, par: 5, score: 7, fairwayHit: false, greenHit: false, putts: 3 },
      { holeNumber: 17, par: 4, score: 4, fairwayHit: true, greenHit: true, putts: 2 },
      { holeNumber: 18, par: 4, score: 5, fairwayHit: false, greenHit: false, putts: 2 },
    ],
  };

  // 현재 사용자가 라운드 생성자인지 확인
  const isOwner = session?.user?.email && session.user.email === "test@example.com"; // 실제로는 사용자 ID를 비교해야 함

  // 통계 계산
  const frontNine = round.holeScores.slice(0, 9);
  const backNine = round.holeScores.slice(9, 18);
  const frontNineTotal = frontNine.reduce((sum, hole) => sum + hole.score, 0);
  const backNineTotal = backNine.reduce((sum, hole) => sum + hole.score, 0);
  const frontNinePar = frontNine.reduce((sum, hole) => sum + hole.par, 0);
  const backNinePar = backNine.reduce((sum, hole) => sum + hole.par, 0);
  
  const fairwayHits = round.holeScores.filter(hole => hole.fairwayHit).length;
  const fairwayHitPercentage = Math.round((fairwayHits / round.holeScores.length) * 100);
  
  const greenHits = round.holeScores.filter(hole => hole.greenHit).length;
  const greenHitPercentage = Math.round((greenHits / round.holeScores.length) * 100);
  
  const totalPutts = round.holeScores.reduce((sum, hole) => sum + hole.putts, 0);
  const averagePutts = (totalPutts / round.holeScores.length).toFixed(1);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{round.courseName}</h1>
              <p className="mt-1 text-lg text-gray-500">
                {new Date(round.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                {round.location && ` · ${round.location}`}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              {session ? (
                <>
                  {isOwner && (
                    <Link href={`/rounds/${round.id}/edit`} className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      수정하기
                    </Link>
                  )}
                  <Link href={`/rounds/${round.id}/score`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                    스코어 입력
                  </Link>
                </>
              ) : (
                <Link href={`/auth/signin?redirect=/rounds/${round.id}/score`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                  로그인하여 스코어 입력
                </Link>
              )}
            </div>
          </div>

          {/* 라운드 이미지 및 설명 */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="relative h-64 w-full">
              <Image
                src={round.imageUrl}
                alt={round.courseName}
                fill
                className="object-cover"
              />
            </div>
            {round.description && (
              <div className="px-4 py-5 sm:px-6">
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{round.description}</p>
              </div>
            )}
          </div>

          {/* 참가자 */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">참가자</h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <div className="flex space-x-4">
                {round.participants.map((participant) => (
                  <div key={participant.id} className="flex flex-col items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={participant.image}
                        alt={participant.nickname}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="mt-2 text-sm font-medium text-gray-900">{participant.nickname}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 스코어 카드 */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">스코어 카드</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                총 스코어: {round.totalScore} ({round.totalScore > round.totalPar ? `+${round.totalScore - round.totalPar}` : round.totalScore === round.totalPar ? 'E' : round.totalScore - round.totalPar})
              </p>
            </div>
            <div className="border-t border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        홀
                      </th>
                      {[...Array(9)].map((_, i) => (
                        <th key={i} scope="col" className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {i + 1}
                        </th>
                      ))}
                      <th scope="col" className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        합계
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">파</td>
                      {frontNine.map((hole) => (
                        <td key={hole.holeNumber} className="px-3 py-2 whitespace-nowrap text-center text-sm text-gray-500">
                          {hole.par}
                        </td>
                      ))}
                      <td className="px-3 py-2 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {frontNinePar}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">스코어</td>
                      {frontNine.map((hole) => (
                        <td key={hole.holeNumber} className="px-3 py-2 whitespace-nowrap text-center text-sm text-gray-500">
                          <span className={
                            hole.score < hole.par ? 'text-red-600 font-medium' : 
                            hole.score === hole.par ? '' : 
                            'text-blue-600 font-medium'
                          }>
                            {hole.score}
                          </span>
                        </td>
                      ))}
                      <td className="px-3 py-2 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {frontNineTotal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        홀
                      </th>
                      {[...Array(9)].map((_, i) => (
                        <th key={i} scope="col" className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {i + 10}
                        </th>
                      ))}
                      <th scope="col" className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        합계
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">파</td>
                      {backNine.map((hole) => (
                        <td key={hole.holeNumber} className="px-3 py-2 whitespace-nowrap text-center text-sm text-gray-500">
                          {hole.par}
                        </td>
                      ))}
                      <td className="px-3 py-2 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {backNinePar}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">스코어</td>
                      {backNine.map((hole) => (
                        <td key={hole.holeNumber} className="px-3 py-2 whitespace-nowrap text-center text-sm text-gray-500">
                          <span className={
                            hole.score < hole.par ? 'text-red-600 font-medium' : 
                            hole.score === hole.par ? '' : 
                            'text-blue-600 font-medium'
                          }>
                            {hole.score}
                          </span>
                        </td>
                      ))}
                      <td className="px-3 py-2 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                        {backNineTotal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 통계 */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">라운드 통계</h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">페어웨이 안착률</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{fairwayHitPercentage}% ({fairwayHits}/{round.holeScores.length})</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">그린 적중률</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{greenHitPercentage}% ({greenHits}/{round.holeScores.length})</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">홀당 평균 퍼팅</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{averagePutts} ({totalPutts} 퍼팅)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 