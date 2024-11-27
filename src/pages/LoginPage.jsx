import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login"  />
        <div>
          <p>
            계정이 없으신가요?{" "}
            <Link to="/signup">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;