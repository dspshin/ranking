'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import AuthGuard from '../../components/AuthGuard';

export default function NewRoundPage() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    courseName: '',
    location: '',
    description: '',
    totalHoles: '18',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 여기에서 API 호출하여 라운드 생성
    // 실제 구현에서는 formData와 이미지를 서버로 전송

    // 성공 후 라운드 목록 페이지로 이동
    setTimeout(() => {
      router.push('/rounds');
    }, 1500);
  };

  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">새 라운드 생성</h1>
              <p className="mt-2 text-sm text-gray-500">
                골프 라운드 정보를 입력하여 새 라운드를 생성하세요.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* 날짜 */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      날짜 *
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {/* 코스 이름 */}
                  <div>
                    <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
                      코스 이름 *
                    </label>
                    <input
                      type="text"
                      name="courseName"
                      id="courseName"
                      required
                      value={formData.courseName}
                      onChange={handleChange}
                      className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {/* 위치 */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      위치
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {/* 설명 */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      설명
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  {/* 홀 수 */}
                  <div>
                    <label htmlFor="totalHoles" className="block text-sm font-medium text-gray-700">
                      홀 수
                    </label>
                    <select
                      name="totalHoles"
                      id="totalHoles"
                      value={formData.totalHoles}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    >
                      <option value="9">9홀</option>
                      <option value="18">18홀</option>
                    </select>
                  </div>

                  {/* 이미지 업로드 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      코스 이미지
                    </label>
                    <div className="mt-1 flex items-center">
                      {imagePreview ? (
                        <div className="relative h-32 w-full rounded-md overflow-hidden">
                          <Image
                            src={imagePreview}
                            alt="코스 이미지 미리보기"
                            fill
                            className="object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => setImagePreview(null)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="h-32 w-full border-2 border-gray-300 border-dashed rounded-md flex justify-center items-center">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none">
                            <span>이미지 업로드</span>
                            <input
                              type="file"
                              onChange={handleImageChange}
                              accept="image/*"
                              className="sr-only"
                            />
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Link href="/rounds" className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-3">
                  취소
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? '처리 중...' : '라운드 생성'}
                </button>
              </div>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </AuthGuard>
  );
} 