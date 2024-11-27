import React from "react";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[70%] sm:w-[550px] mb-[300px]">
        <h1 className="text-3xl font-semibold text-center mb-6">로그인</h1>
        <AuthForm mode="login" />
        <div className="mt-4 text-center">
          <p>
            계정이 없으신가요?{" "}
            <Link 
              to="/signup" 
              className="text-purple-600 hover:text-[#333333] transition-colors"
            >
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
