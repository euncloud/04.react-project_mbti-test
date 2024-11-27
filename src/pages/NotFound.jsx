import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-[120px]">
      <div className="bg-white rounded-lg shadow-sm p-10 w-200 text-center mb-[300px]">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-600 mb-4">
          페이지를 찾을 수 없습니다.
        </h2>
        <p className="text-gray-500 mb-6">
          요청하신 페이지는 존재하지 않거나, 주소를 잘못 입력하셨습니다.
        </p>
        <Link
          to="/"
          className="text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
