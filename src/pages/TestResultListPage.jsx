import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteTestResult, getAllTestResults } from '../api/testResults';
import { mbtiDescriptions } from '../utils/mbtiCalculator';
import userBearsStore from '../zustand/bearsStore';
import { toast } from 'react-toastify';

const TestResultsPage = () => {
  const { userId } = userBearsStore((state) => state);
  const queryClient = useQueryClient();

  const { data, isPending, isError, isSuccess, error } = useQuery({
    queryKey: ["testResults"],
    queryFn: getAllTestResults,
  });

  const { mutate: deleteResult } = useMutation({
    mutationFn: (userId) => deleteTestResult(userId),
    onSuccess: () => {
      toast.success("테스트 결과가 삭제되었습니다.");
      queryClient.invalidateQueries(["testResults"]); // 캐시 데이터 갱신
    },
    onError: (error) => {
      console.error("테스트 결과 삭제 실패:", error.message);
      toast.error("테스트 결과 삭제에 실패했습니다.");
    },
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

  const handleDeleteResult = (userId) => {
    if (window.confirm("테스트 결과를 삭제하시겠습니까?")) {
      deleteResult(userId);
    }
  }

  return (
    <div className="bg-gray-50 py-10">
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
            <div className="flex justify-between text-gray-600 text-sm mb-2">
              <span className="text-base font-semibold text-purple-700">{result.nickname}</span>
              <span>{result.date}</span>
            </div>

            <div className="text-3xl font-bold text-purple-800 mb-4">
              {result.mbti}
            </div>

            <div className="text-lg text-gray-800">
              {getDescription(result.mbti)}
            </div>

            {/* 내 결과에만 보이는 버튼 */}
            {result.userId === userId && (
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                  onClick={() => handleDeleteResult(result.userId)}
                >
                  삭제하기
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResultsPage;
