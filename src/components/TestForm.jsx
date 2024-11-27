import React, { useState } from "react";
import { questions } from "../data/questions";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { useMutation } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userBearsStore from "../zustand/bearsStore";

const TestForm = () => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" }),
  );
  // const [testData, setTestData] = useState({ id: "", nickname: "", mbti: "", date: "" });
  const navigate = useNavigate();
  const { user, userId } = userBearsStore((state) => state);

  const { mutate } = useMutation({
    mutationFn: createTestResult, // testResults.js
    onSuccess: (data) => {
      console.log("test 결과 저장 완료", data);
      toast.success("테스트 결과가 저장되었습니다!");
      navigate("/testresult");
    },
    onError: (error) => {
      console.log("test 결과 저장 실패", error.response?.data || error.message);
      toast.error(error.response?.data.message || "데이터 저장 중 오류가 발생했습니다.\n" + error.message);
    }
  })

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer: value };
    setAnswers(newAnswers);
  };

  const handleTestSubmit = async (e) => {
    e.preventDefault();
    const mbti = calculateMBTI(answers);
    const testData = {
      nickname: user,
      userId: userId,
      mbti: mbti,
      date: new Date().toLocaleString(),
    }
    // setTestData(formData); 
    mutate(testData); // 테스트 결과 DB 저장
  };

  return (
    <form onSubmit={handleTestSubmit} className="space-y-6 p-6 bg-white rounded-lg">
      {questions.map((q, index) => (
        <div
          key={q.id}
          className="mb-6 p-4 border border-gray-300 rounded-lg hover:border-purple-500 transition-colors duration-300"
        >
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 
                  ${answers[index]?.answer === q.type.split("/")[i]
                    ? "bg-gray-200" : ""} hover:bg-purple-200`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={q.type.split("/")[i]}
                  checked={answers[index]?.answer === q.type.split("/")[i]}
                  onChange={() => handleChange(index, q.type.split("/")[i])}
                  className="mr-2 text-primary-color"
                  required    
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
      >
        제출하기
      </button>
    </form>


  );
};

export default TestForm;
