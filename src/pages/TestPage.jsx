import React, { useEffect, useState } from "react";
import TestForm from "../components/TestForm";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTestResults } from "../api/testResults";
import userBearsStore from "../zustand/bearsStore";
import { toast } from "react-toastify";

const TestPage = () => {
  const navigate = useNavigate();
  const { userId } = userBearsStore((state) => state);

  const { data, isPending, isError, isSuccess, error } = useQuery({
    queryKey: ["testResults", userId],
    queryFn: () => getTestResults(userId),
  });

  useEffect(() => {
    if (isSuccess === true && data && Array.isArray(data) && data.length > 0) {
      // data에 값이 있는 경우 testresult 페이지로 이동
      toast.info("이미 테스트를 완료했습니다.");
      navigate("/testresult");
    }
  }, [data]);

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error?.message || "Unknown error"}</div>;
  }

  if (isSuccess) {
    return (
      <>
        <div className="w-full flex flex-col items-center justify-center bg-gray-50 pt-[120px]">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full h-full overflow-y-auto">
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm />

          </div>
        </div>
      </>
    );
  }

};

export default TestPage;
