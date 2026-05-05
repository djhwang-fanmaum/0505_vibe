import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 바 (상단 메뉴) */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">TeamMate</h1>
        <div className="space-x-6 text-gray-600 font-medium">
          <Link href="/teams" className="hover:text-blue-600 transition">
            팀 탐색
          </Link>
          <Link href="/teams/new" className="hover:text-blue-600 transition">
            팀 등록
          </Link>
        </div>
      </nav>

      {/* 메인 히어로 섹션 */}
      <main className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          대학생 창업의 시작,
          <br />
          <span className="text-blue-600">최고의 팀원</span>을 만나보세요
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          아이디어는 있지만 팀원이 부족하신가요? TeamMate에서 여러분의 비전을
          함께 실현할 동료를 찾고 팀을 관리하세요.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/teams">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition w-full md:w-auto shadow-lg shadow-blue-200">
              창업 팀 탐색하기
            </button>
          </Link>
          <Link href="/teams/new">
            <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition w-full md:w-auto">
              우리 팀 등록하기
            </button>
          </Link>
        </div>

        {/* 서비스 특징 요약 */}
        <div className="grid md:grid-cols-3 gap-12 mt-32">
          <div className="p-6">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-2">대학생 특화</h3>
            <p className="text-gray-500">
              열정 넘치는 대학생 예비 창업가들이 한곳에 모여 있습니다.
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">직관적인 탐색</h3>
            <p className="text-gray-500">
              원하는 역할과 팀 구성을 필터링 없이 한눈에 확인하세요.
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">빠른 매칭</h3>
            <p className="text-gray-500">
              오픈채팅, 이메일 링크로 마음에 드는 팀에 즉시 연락하세요.
            </p>
          </div>
        </div>
      </main>

      {/* 푸터 (하단 정보) */}
      <footer className="border-t border-gray-100 py-12 text-center text-gray-400 text-sm">
        <p>© 2026 TeamMate. 대학생 창업 팀 빌딩 플랫폼</p>
      </footer>
    </div>
  );
}
