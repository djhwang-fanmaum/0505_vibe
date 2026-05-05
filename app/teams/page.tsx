import { supabase } from "@/lib/supabase";

export default async function TeamsPage() {
  // 1. Supabase에서 데이터 가져오기
  const { data: teams, error } = await supabase
    .from("teams")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return <div>데이터를 불러오는데 실패했습니다.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">
          창업 팀 탐색하기
        </h1>

        <div className="grid gap-6">
          {teams?.map((team) => (
            <div
              key={team.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {team.team_name}
                </h2>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {team.hiring_roles}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{team.description}</p>
              <div className="flex items-center text-sm text-gray-500 gap-4">
                <span>📍 현재 구성: {team.current_members}</span>
                <a
                  href={team.contact_link}
                  className="text-blue-500 hover:underline"
                >
                  연락하기 →
                </a>
              </div>
            </div>
          ))}
          {teams?.length === 0 && (
            <p>아직 등록된 팀이 없습니다. 첫 팀이 되어보세요!</p>
          )}
        </div>
      </div>
    </div>
  );
}
