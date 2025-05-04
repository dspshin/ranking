import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">개인정보처리방침</h1>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  골프랭킹은 개인 취미 프로젝트로, 다음과 같은 간단한 개인정보처리방침을 따릅니다:
                </p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">1. 수집하는 개인정보</h2>
                    <p className="mt-2">
                      회원 가입 시 이메일, 이름, 닉네임을 수집합니다. 소셜 로그인 시 해당 서비스 제공자가 제공하는 정보를 활용합니다.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">2. 개인정보의 이용</h2>
                    <p className="mt-2">
                      수집된 정보는 서비스 제공과 사용자 식별을 위해서만 사용됩니다.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">3. 개인정보의 보호</h2>
                    <p className="mt-2">
                      사용자의 개인정보는 암호화되어 안전하게 보관됩니다. 본 서비스는 취미 프로젝트로 운영되므로 상업적 목적으로 개인정보를 활용하지 않습니다.
                    </p>
                  </div>
                </div>
                
                <p className="mt-8 text-sm text-gray-500 italic">
                  본 개인정보처리방침은 취미 프로젝트의 일환으로 작성되었으며, 실제 법적 효력을 갖추기 위한 전문적인 검토를 거치지 않았습니다.
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