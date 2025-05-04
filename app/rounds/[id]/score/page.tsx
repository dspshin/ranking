'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import AuthGuard from '../../../components/AuthGuard';

type HoleScore = {
  holeNumber: number;
  par: number;
  score: number;
  fairwayHit: boolean;
  greenHit: boolean;
  putts: number;
};

export default function ScoreInputPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentHole, setCurrentHole] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalHoles] = useState(18); // 실제로는 라운드에서 가져와야 함

  // 상태 초기화
  const [holeScores, setHoleScores] = useState<HoleScore[]>([]);

  // 컴포넌트 마운트 시 스코어 초기화
  useEffect(() => {
    const initialScores: HoleScore[] = [];
    for (let i = 1; i <= totalHoles; i++) {
      initialScores.push({
        holeNumber: i,
        par: 4, // 기본값
        score: 0,
        fairwayHit: false,
        greenHit: false,
        putts: 2,
      });
    }
    setHoleScores(initialScores);
  }, [totalHoles]);

  const currentScore = holeScores.find(score => score.holeNumber === currentHole);
  
  const updateHoleScore = (field: keyof HoleScore, value: any) => {
    setHoleScores(prevScores => 
      prevScores.map(score => 
        score.holeNumber === currentHole 
          ? { ...score, [field]: value }
          : score
      )
    );
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      updateHoleScore('score', value);
    }
  };

  const handleParChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateHoleScore('par', parseInt(e.target.value));
  };

  const handlePuttsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      updateHoleScore('putts', value);
    }
  };

  const handleFairwayHitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateHoleScore('fairwayHit', e.target.checked);
  };

  const handleGreenHitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateHoleScore('greenHit', e.target.checked);
  };

  const handlePrevHole = () => {
    if (currentHole > 1) {
      setCurrentHole(currentHole - 1);
    }
  };

  const handleNextHole = () => {
    if (currentHole < totalHoles) {
      setCurrentHole(currentHole + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 여기에서 API 호출하여 스코어 저장
    // const response = await fetch(`/api/rounds/${params.id}/scores`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(holeScores),
    // });

    // 성공 후 라운드 상세 페이지로 이동
    setTimeout(() => {
      router.push(`/rounds/${params.id}`);
    }, 1500);
  };

  // 전체 스코어 계산
  const totalScore = holeScores.reduce((sum, hole) => sum + (hole.score || 0), 0);
  const totalPar = holeScores.reduce((sum, hole) => sum + hole.par, 0);

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">라운드 스코어 입력</h1>
              <p className="mt-2 text-sm text-gray-500">
                각 홀별 스코어 및 통계 정보를 입력하세요.
              </p>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
              <div className="px-4 py-5 sm:p-6">
                <dl className="grid grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">현재 홀</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{currentHole}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">현재 스코어</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {totalScore > 0 ? totalScore : '-'}
                      {totalScore > 0 && totalPar > 0 && (
                        <span className="ml-2 text-sm font-medium">
                          {totalScore > totalPar ? `+${totalScore - totalPar}` : 
                          totalScore === totalPar ? 'E' : 
                          `${totalScore - totalPar}`}
                        </span>
                      )}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">진행률</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {Math.round((currentHole / totalHoles) * 100)}%
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {/* 홀 번호 버튼 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        홀 선택
                      </label>
                      <div className="grid grid-cols-9 gap-2">
                        {Array.from({ length: totalHoles }, (_, i) => i + 1).map(hole => (
                          <button
                            key={hole}
                            type="button"
                            onClick={() => setCurrentHole(hole)}
                            className={`py-2 px-3 text-sm font-medium rounded-md ${
                              currentHole === hole
                                ? 'bg-green-600 text-white'
                                : holeScores.find(score => score.holeNumber === hole)?.score 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {hole}
                          </button>
                        ))}
                      </div>
                    </div>

                    {currentScore && (
                      <>
                        {/* 파 */}
                        <div>
                          <label htmlFor="par" className="block text-sm font-medium text-gray-700">
                            파
                          </label>
                          <select
                            id="par"
                            value={currentScore.par}
                            onChange={handleParChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          >
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        </div>

                        {/* 스코어 */}
                        <div>
                          <label htmlFor="score" className="block text-sm font-medium text-gray-700">
                            스코어
                          </label>
                          <input
                            type="number"
                            id="score"
                            min={1}
                            value={currentScore.score || ''}
                            onChange={handleScoreChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        {/* 퍼팅 */}
                        <div>
                          <label htmlFor="putts" className="block text-sm font-medium text-gray-700">
                            퍼팅 수
                          </label>
                          <input
                            type="number"
                            id="putts"
                            min={0}
                            value={currentScore.putts}
                            onChange={handlePuttsChange}
                            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        {/* 체크박스 */}
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              id="fairwayHit"
                              type="checkbox"
                              checked={currentScore.fairwayHit}
                              onChange={handleFairwayHitChange}
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor="fairwayHit" className="ml-3 block text-sm font-medium text-gray-700">
                              페어웨이 안착
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="greenHit"
                              type="checkbox"
                              checked={currentScore.greenHit}
                              onChange={handleGreenHitChange}
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor="greenHit" className="ml-3 block text-sm font-medium text-gray-700">
                              그린 적중
                            </label>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <div className="flex justify-between">
                    <div>
                      <button
                        type="button"
                        onClick={handlePrevHole}
                        disabled={currentHole === 1}
                        className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                          currentHole === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        이전 홀
                      </button>
                      <button
                        type="button"
                        onClick={handleNextHole}
                        disabled={currentHole === totalHoles}
                        className={`ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
                          currentHole === totalHoles ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        다음 홀
                      </button>
                    </div>
                    <div>
                      <Link
                        href={`/rounds/${params.id}`}
                        className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-3"
                      >
                        취소
                      </Link>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? '저장 중...' : '점수 저장'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </AuthGuard>
  );
} 