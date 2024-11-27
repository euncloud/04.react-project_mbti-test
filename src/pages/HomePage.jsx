import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
      {/* 첫 번째 섹션: 타이틀과 간단한 소개 */}
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-3xl w-full mb-8 border-4 border-purple-500 hover:border-purple-600 transition-all duration-300">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          무료 성격 테스트
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          간단한 테스트로 쉽고 빠르게 자신의 성격 유형을 확인할 수 있어요! <br/> 정확한 테스트 결과를 위해 솔직하게 답변해 주세요 💡
        </p>
        <div className="flex justify-center">
          <Link
            to="/test"
            className="inline-block px-6 py-3 text-white bg-purple-500 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-purple-600"
          >
            내 성격 알아보러 가기
          </Link>
        </div>
      </div>

      {/* 나머지 섹션들 */}
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-3xl w-full mb-8 border-2 border-gray-300 hover:border-purple-500 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          MBTI란?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          MBTI는 심리학자인 Carl Jung의 이론을 바탕으로 사람들의 성격을 16가지 유형으로 분류한 검사입니다. 이 검사를 통해 우리는 자신의 성격 특징을 이해하고, 더 나아가 다른 사람들과의 관계를 개선할 수 있습니다. 🌱
        </p>
        <p className="text-lg text-gray-700">
          테스트를 통해 당신은 어떤 유형인지 알아보세요! 직관적으로 성격 유형을 구분하여, 자신과 비슷한 성향을 가진 사람들과의 차이를 알아가는 재미도 있습니다.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-10 max-w-3xl w-full mb-8 border-2 border-gray-300 hover:border-purple-500 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          MBTI 16가지 성격 유형
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          MBTI는 총 16가지 성격 유형으로 나뉩니다. 각 성격 유형은 두 가지 선호 지표로 구분됩니다: 외향성/내향성, 감각/직관, 사고/감정, 판단/인식. 이 네 가지 선호를 결합하여, 각기 다른 성격 유형을 이해할 수 있습니다.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-lg font-semibold text-purple-600">ESTJ</p>
            <p className="text-gray-700">실용적이고 체계적인 성격</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-lg font-semibold text-purple-600">INFJ</p>
            <p className="text-gray-700">이상적이고 직관적인 성격</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-lg font-semibold text-purple-600">ISFP</p>
            <p className="text-gray-700">자유롭고 감성적인 성격</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-lg font-semibold text-purple-600">ENTP</p>
            <p className="text-gray-700">창의적이고 논리적인 성격</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-10 max-w-3xl w-full mb-8 border-2 border-gray-300 hover:border-purple-500 transition-all duration-300 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          나만의 성격 유형을 알아보세요!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          간단한 질문에 답하면, 당신의 성격 유형을 확인할 수 있습니다. 새로운 자기 자신을 발견하고 다른 사람들과 비교해 볼 수 있는 좋은 기회가 될 거에요 🌟
        </p>
        <Link
          to="/test"
          className="inline-block px-6 py-3 text-white bg-purple-500 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-purple-600"
        >
          내 성격 알아보러 가기
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
