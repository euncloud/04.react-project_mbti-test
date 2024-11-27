import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getTestResults } from '../api/testResults';
import { mbtiDescriptions } from '../utils/mbtiCalculator';
import { toast } from 'react-toastify';

const TestResultPage = () => {
  const navigate = useNavigate();

  const { data, isPending, isError, isSuccess, error } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  if(data === null || (Array.isArray(data) && data.length === 0)){
    toast.error('테스트 결과가 없습니다! 테스트를 먼저 진행해 주세요.');
    navigate('/test');
  }

  if (isPending) {
    // 로딩 상태에서 보여줄 UI
    return <div>Loading...</div>;
  }

  if (isError) {
    // 오류 상태에서 보여줄 UI
    return <div>Error: {error.message}</div>;
  }

  const handleReStartTest = () => {
    navigate("/test"); // 테스트 페이지로 이동, 테스트 결과 삭제 필요
  };

  const getDescription = (mbtiType) => {
    return mbtiDescriptions[mbtiType] || "해당 성격 유형에 대한 설명이 없습니다.";
  }

  if (isSuccess) {
    const mbtiDetail = getDescription(data[0].mbti);
  
    return (
      <div className="bg-gray-50 py-10">
        {/* 결과 페이지 내용 */}
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            {data[0].mbti}
          </h1>

          {/* 제목과 내용 구분선 */}
          <div className="border-t-2 border-gray-300 my-4"></div>

          <div className="text-lg text-gray-600">
            <p>{mbtiDetail}</p>
          </div>

          {/* 테스트하기 버튼 */}
          <button
            onClick={handleReStartTest}
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300"
          >
            테스트 다시 하기
          </button>
        </div>
      </div>
    );
  };

  return <div>Something went wrong...</div>;
}

export default TestResultPage;
