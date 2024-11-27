import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getAllTestResults } from '../api/testResults';
import { mbtiDescriptions } from '../utils/mbtiCalculator';

const TestResultsPage = () => {
  // const [testResults, setTestReaults ] = useState([]);
  const { data, isPending, isError, isSuccess, error } = useQuery({
    queryKey: ["testResults"],
    queryFn: getAllTestResults,
  });

  const getDescription = (mbtiType) => {
    return mbtiDescriptions[mbtiType] || "해당 성격 유형에 대한 설명이 없습니다.";
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-gray-50 py-10">
      {/* 상단 제목 */}
      <div className="text-3xl font-bold text-[#333333] text-center mb-6">
        전체 테스트 결과
      </div>

      {/* 테스트 결과 리스트 */}
      <div className="max-w-3xl mx-auto space-y-6">
        {data.map((result) => (
          <div
            key={result.userId}
            className="bg-white p-6 rounded-lg border-2 border-purple-500 shadow-md"
          >
            <div className="flex justify-between text-gray-600 text-sm mb-4">
              <span className=" font-semibold text-purple-700">{result.nickname}</span>
              <span>{result.date}</span>
            </div>

            {/* MBTI */}
            <div className="text-3xl font-bold text-purple-800 mb-4">
              {result.mbti}
            </div>

            {/* MBTI 설명 */}
            <div className="text-lg text-gray-800">
              {getDescription(result.mbti)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResultsPage;
