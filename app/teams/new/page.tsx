"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewTeamPage() {
  const router = useRouter();

  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [currentMembers, setCurrentMembers] = useState("");
  const [hiringRoles, setHiringRoles] = useState("");
  const [contactLink, setContactLink] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("teams").insert([
      {
        team_name: teamName,
        description: description,
        current_members: currentMembers,
        hiring_roles: hiringRoles,
        contact_link: contactLink,
      },
    ]);

    if (error) {
      alert("등록에 실패했습니다: " + error.message);
    } else {
      alert("팀이 성공적으로 등록되었습니다!");
      router.push("/teams");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          새로운 창업 팀 등록
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              팀 이름
            </label>
            <input
              type="text"
              required
              /* text-black을 추가하여 입력 시 글자색을 검은색으로 고정합니다 */
              className="mt-1 w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="예: 팀메이트"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              프로젝트 설명
            </label>
            <textarea
              required
              /* text-black 추가 */
              className="mt-1 w-full p-2 border border-gray-300 rounded-md h-32 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="프로젝트의 비전과 아이템을 소개해 주세요."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                현재 팀 구성
              </label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={currentMembers}
                onChange={(e) => setCurrentMembers(e.target.value)}
                placeholder="예: 기획1, 디자인1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                모집 중인 역할
              </label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={hiringRoles}
                onChange={(e) => setHiringRoles(e.target.value)}
                placeholder="예: 백엔드 개발자"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              연락처 링크
            </label>
            <input
              type="url"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contactLink}
              onChange={(e) => setContactLink(e.target.value)}
              placeholder="오픈채팅방 주소나 이메일"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition mt-6"
          >
            팀 등록 완료하기
          </button>
        </form>
      </div>
    </div>
  );
}
