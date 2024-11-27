import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTestResult, getTestResults } from '../api/testResults';
import { mbtiDescriptions } from '../utils/mbtiCalculator';
import { toast } from 'react-toastify';
import userBearsStore from '../zustand/bearsStore';

const TestResultPage = () => {
  const navigate = useNavigate();
  const { user, userId } = userBearsStore((state) => state);
  const queryClient = useQueryClient();

  const { data, isPending, isError, isSuccess, error } = useQuery({
    queryKey: ["testResults", userId],
    queryFn: () => getTestResults(userId),
  });

  const { mutate } = useMutation({
    mutationFn: (userId) => deleteTestResult(userId),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"], userId);
      toast.success("새로운 테스트를 진행합니다.");
      navigate("/test");
    },
    onError: (error) => {
      console.log('테스트 결과 삭제 실패', error.message);
      toast.error('테스트 결과 삭제 중에 오류가 발생했습니다.');
    }
  })

  const handleRestartTest = () => {
    if (window.confirm("테스트를 새로 시작하시겠습니까?")) {
      mutate(userId);
    }
  };

  // useEffect(() => {
  //   if (data === null || (Array.isArray(data) && data.length === 0)) {
  //     if (!isTestResultsExist) {
  //       toast.error("테스트 결과가 없습니다! 테스트를 먼저 진행해 주세요.");
  //       setIsTestResultsExist(true); // Prevent further toasts
  //     }
  //     navigate("/test");
  //   } else {
  //     setIsTestResultsExist(false); // Reset on valid data
  //   }
  // }, [isTestResultsExist]);


  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;


  const getDescription = (mbtiType) => {
    return mbtiDescriptions[mbtiType] || "해당 성격 유형에 대한 설명이 없습니다.";
  }

  if (isSuccess && data && data[0]) {
    const mbtiDetail = getDescription(data[0].mbti);

    return (
      <div className="bg-gray-100 py-10 h-screen pt-[120px]">
        {/* 결과 페이지 내용 */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">{user}님의 MBTI 테스트 결과</h2>
        </div>
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-6">
          <h1 className="text-4xl font-bold text-left text-gray-800">
            {data[0].mbti}
          </h1>

          {/* 제목과 내용 구분선 */}
          <div className="border-t-2 border-gray-300 my-4"></div>

          <div className="text-lg text-gray-600">
            <p>{mbtiDetail}</p>
          </div>

          {/* 테스트하기 버튼 */}
          <button
            onClick={handleRestartTest}
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
