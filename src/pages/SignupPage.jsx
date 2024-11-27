import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-[120px]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full mb-[300px]">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">회원가입</h1>
        <AuthForm mode="signup" />
        <div className="mt-4">
          <p>
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className="text-purple-600 hover:text-[#333333] transition-colors">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>

  );
};

export default Signup;

