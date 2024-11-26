import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <img
          src="/mbti.png"
          alt="Home"
          className="h-8 w-8 mr-4 cursor-pointer hover:opacity-80 transition-opacity"
        />
        <span className="text-lg font-bold text-gray-800">홈</span>
      </div>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all ease-in-out duration-200"
      >
        로그인
      </button>
    </header>
  );
};

export default Header;