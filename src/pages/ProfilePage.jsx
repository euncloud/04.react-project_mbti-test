import React, { useState } from "react";
import userBearsStore from "../zustand/bearsStore";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../api/auth";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user, userId, setUser } = userBearsStore((state) => state);
  const [nickname, setNickname] = useState(user?.nickname || "");

  // const { mutation } = useMutation({
  //   mutationFn: (userId, nickname) => changeUserInfo(userId, nickname),
  //   onSuccess: () => toast.success('변경 완료'),
  // })

  const { mutate: saveProfile } = useMutation({
    mutationFn: (nickname) => updateProfile(nickname),
    onSuccess: (data) => {
      toast.success(`닉네임이 ${data.nickname} 님으로 변경되었습니다.`);
      setUser(data.nickname);
    }
  })

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm(`닉네임을 ${nickname} 님으로 변경하시겠습니까?`)) {
      saveProfile(nickname, userId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-[120px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[70%] sm:w-[450px] mb-[400px]">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              placeholder={user}
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition-all"
          >
            프로필 수정하기
          </button>
        </form>
      </div>
    </div>

  );
};

export default ProfilePage;