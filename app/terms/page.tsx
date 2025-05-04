import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">이용약관</h1>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  골프랭킹은 개인 취미 프로젝트로, 다음과 같은 간단한 이용약관을 제공합니다:
                </p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">1. 서비스 이용 목적</h2>
                    <p className="mt-2">
                      본 서비스는 개인 취미 프로젝트로 개발된 골프 기록 및 분석 서비스로, 학습 및 포트폴리오 목적으로 제작되었습니다.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">2. 서비스 제공 및 변경</h2>
                    <p className="mt-2">
                      본 서비스는 취미 프로젝트이므로 사전 통지 없이 서비스가 변경되거나 중단될 수 있습니다. 데이터 백업은 보장되지 않습니다.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">3. 사용자 의무</h2>
                    <p className="mt-2">
                      사용자는 다른 사용자의 이용을 방해하거나 서비스를 악용하지 않아야 합니다. 타인의 정보를 무단으로 사용하거나 허위 정보를 등록해서는 안 됩니다.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">4. 면책조항</h2>
                    <p className="mt-2">
                      본 서비스는 취미 프로젝트로 제공되므로, 서비스 이용으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다.
                    </p>
                  </div>
                </div>
                
                <p className="mt-8 text-sm text-gray-500 italic">
                  본 이용약관은 취미 프로젝트의 일환으로 작성되었으며, 실제 법적 효력을 갖추기 위한 전문적인 검토를 거치지 않았습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 