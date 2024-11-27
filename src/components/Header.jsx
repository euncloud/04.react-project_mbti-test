import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userBearsStore from "../zustand/bearsStore";
import { checkAuth } from "../api/auth";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser, clearUser } = userBearsStore((state) => state);  // bearsStore의 user 정보
  const [hasToken, setHasToken] = useState(localStorage.getItem("accessToken") || null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await checkAuth(); // auth.js localstorage에 토큰값 있는 경우 - 로그인 유저 정보, 또는 null
      if (!!response) { setUser(response?.nickname, hasToken) } else { clearUser() };
    }
    fetchUser();
  }, []);

  const handleLogout = () => {
    toast.success("👋 로그아웃 되었습니다.");
    localStorage.removeItem("accessToken"); // 토큰 삭제
    setHasToken(null);
    clearUser(); // 사용자 정보 초기화
    navigate("/login"); // 로그인 페이지로 이동
  };

  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <img
          src="/mbti.png"
          alt="Home"
          className="h-8 w-8 mr-4 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate("/")}
        />
        <span className="text-lg font-bold text-gray-800">홈</span>
      </div>

      {hasToken || user ? (
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-800 hover:text-gray-500 transition-all"
            onClick={() => navigate("/test")}>
            테스트
          </button>
          <button
            className="text-gray-800 hover:text-gray-500 transition-all"
            onClick={() => navigate("/testresult")}>
            결과보기
          </button>
          <button
            className="text-gray-800 hover:text-gray-500 transition-all"
            onClick={() => navigate("/profile")}>
            {user}님
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
            onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      ) : (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
          onClick={() => navigate("/login")}>
          로그인
        </button>
      )}
    </header>
  );
};

export default Header;
