'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// 랭킹 필터 타입 정의
type RankingFilter = 'average' | 'best' | 'fairway' | 'green' | 'putts';

export default function RankingsPage() {
  // 현재 선택된 필터
  const [currentFilter, setCurrentFilter] = useState<RankingFilter>('average');

  // 더미 데이터 - 실제로는 API에서 가져와야 함
  const rankings = [
    {
      id: '1',
      name: '김철수',
      nickname: '철수골프왕',
      imageUrl: '/images/avatar1.jpg',
      rounds: 24,
      avgScore: 82.3,
      bestScore: 76,
      fairwayHitRate: 68,
      greenHitRate: 56,
      avgPutts: 1.8,
    },
    {
      id: '2',
      name: '이영희',
      nickname: '영희프로',
      imageUrl: '/images/avatar2.jpg',
      rounds: 18,
      avgScore: 84.7,
      bestScore: 79,
      fairwayHitRate: 65,
      greenHitRate: 48,
      avgPutts: 1.9,
    },
    {
      id: '3',
      name: '박지성',
      nickname: '골프지성',
      imageUrl: '/images/avatar3.jpg',
      rounds: 32,
      avgScore: 79.5,
      bestScore: 72,
      fairwayHitRate: 72,
      greenHitRate: 63,
      avgPutts: 1.7,
    },
    {
      id: '4',
      name: '최민준',
      nickname: '민준골퍼',
      imageUrl: '/images/avatar4.jpg',
      rounds: 15,
      avgScore: 87.2,
      bestScore: 81,
      fairwayHitRate: 58,
      greenHitRate: 45,
      avgPutts: 2.1,
    },
    {
      id: '5',
      name: '정서연',
      nickname: '서연골프',
      imageUrl: '/images/avatar5.jpg',
      rounds: 22,
      avgScore: 85.6,
      bestScore: 78,
      fairwayHitRate: 62,
      greenHitRate: 52,
      avgPutts: 1.9,
    },
  ];

  // 필터에 따라 랭킹 정렬
  const getSortedRankings = () => {
    switch (currentFilter) {
      case 'average':
        return [...rankings].sort((a, b) => a.avgScore - b.avgScore);
      case 'best':
        return [...rankings].sort((a, b) => a.bestScore - b.bestScore);
      case 'fairway':
        return [...rankings].sort((a, b) => b.fairwayHitRate - a.fairwayHitRate);
      case 'green':
        return [...rankings].sort((a, b) => b.greenHitRate - a.greenHitRate);
      case 'putts':
        return [...rankings].sort((a, b) => a.avgPutts - b.avgPutts);
      default:
        return rankings;
    }
  };

  // 필터에 따른 표시 값
  const getDisplayValue = (player: typeof rankings[0]) => {
    switch (currentFilter) {
      case 'average':
        return player.avgScore.toFixed(1);
      case 'best':
        return player.bestScore.toString();
      case 'fairway':
        return `${player.fairwayHitRate}%`;
      case 'green':
        return `${player.greenHitRate}%`;
      case 'putts':
        return player.avgPutts.toFixed(1);
      default:
        return player.avgScore.toFixed(1);
    }
  };

  // 필터에 따른 표시 레이블
  const getFilterLabel = () => {
    switch (currentFilter) {
      case 'average':
        return '평균 스코어';
      case 'best':
        return '베스트 스코어';
      case 'fairway':
        return '페어웨이 안착률';
      case 'green':
        return '그린 적중률';
      case 'putts':
        return '평균 퍼팅';
      default:
        return '평균 스코어';
    }
  };

  const sortedRankings = getSortedRankings();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">골프 랭킹</h1>
          </div>
          
          {/* 필터 탭 */}
          <div className="bg-white shadow mb-6">
            <nav className="flex" aria-label="Tabs">
              <button
                onClick={() => setCurrentFilter('average')}
                className={`px-3 py-2 text-sm font-medium ${
                  currentFilter === 'average'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                평균 스코어
              </button>
              <button
                onClick={() => setCurrentFilter('best')}
                className={`px-3 py-2 text-sm font-medium ${
                  currentFilter === 'best'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                베스트 스코어
              </button>
              <button
                onClick={() => setCurrentFilter('fairway')}
                className={`px-3 py-2 text-sm font-medium ${
                  currentFilter === 'fairway'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                페어웨이 안착률
              </button>
              <button
                onClick={() => setCurrentFilter('green')}
                className={`px-3 py-2 text-sm font-medium ${
                  currentFilter === 'green'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                그린 적중률
              </button>
              <button
                onClick={() => setCurrentFilter('putts')}
                className={`px-3 py-2 text-sm font-medium ${
                  currentFilter === 'putts'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                평균 퍼팅
              </button>
            </nav>
          </div>
          
          {/* 랭킹 목록 */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    순위
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    플레이어
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    라운드 수
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {getFilterLabel()}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedRankings.map((player, index) => (
                  <tr key={player.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          index < 3 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        } font-bold`}>
                          {index + 1}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 relative">
                          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">
                              {player.nickname[0]}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {player.nickname}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {player.rounds}회
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                      <span className={`${
                        currentFilter === 'average' || currentFilter === 'best' || currentFilter === 'putts'
                          ? 'text-green-600'
                          : 'text-blue-600'
                      }`}>
                        {getDisplayValue(player)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 