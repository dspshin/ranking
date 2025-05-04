'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function RoundsPage() {
  const { data: session } = useSession();

  // 더미 데이터 (실제로는 데이터베이스에서 가져옴)
  const rounds = [
    {
      id: "1",
      date: "2023-06-15",
      courseName: "서울 컨트리 클럽",
      location: "경기도 용인시",
      imageUrl: "/images/course1.jpg",
      totalScore: 82,
      totalPar: 72,
    },
    {
      id: "2", 
      date: "2023-06-10",
      courseName: "파인크리크 컨트리 클럽",
      location: "경기도 안성시",
      imageUrl: "/images/course2.jpg",
      totalScore: 87,
      totalPar: 72,
    },
    {
      id: "3",
      date: "2023-06-01",
      courseName: "레이크사이드 컨트리 클럽",
      location: "경기도 용인시",
      imageUrl: "/images/course3.jpg",
      totalScore: 85,
      totalPar: 72,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">나의 라운드</h1>
            {session ? (
              <Link href="/rounds/new" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                라운드 추가
              </Link>
            ) : (
              <Link href="/auth/signin?redirect=/rounds/new" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                로그인하여 라운드 추가
              </Link>
            )}
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {rounds.map((round) => (
                <li key={round.id}>
                  <Link href={`/rounds/${round.id}`} className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0 h-16 w-16 relative rounded-md overflow-hidden">
                          <Image
                            fill
                            src={round.imageUrl}
                            alt={round.courseName}
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1 px-4">
                          <div>
                            <p className="text-sm font-medium text-green-600 truncate">{round.courseName}</p>
                            <p className="mt-1 flex items-center text-sm text-gray-500">
                              <span className="truncate">{round.location}</span>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {new Date(round.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center">
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            {round.totalScore > round.totalPar 
                              ? `+${round.totalScore - round.totalPar}` 
                              : round.totalScore === round.totalPar 
                                ? 'E' 
                                : `${round.totalScore - round.totalPar}`}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-center font-semibold text-gray-700">
                          {round.totalScore}
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 