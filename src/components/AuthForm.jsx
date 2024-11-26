
import React, { useState } from "react";
import { login, register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import userBearsStore from "../zustand/bearsStore";

const AuthForm = ({ mode }) => {
  const [formData, setFormData] = useState({ id: "", password: "", nickname: "" });
  const { setUser } = userBearsStore((state) => state);  
  const navigate = useNavigate();

  const { mutate: mutateSignup } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log("회원가입 성공", data);
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    },
    onError: (error) => {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert(error.response?.data.message || "회원가입 중 오류가 발생했습니다.\n" + error.message);
    }
  })

  const { mutate: mutateLogin, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log('data', data);
      alert("로그인 성공! :D");

      localStorage.setItem("accessToken", data.accessToken); // 로컬스토리지에 로그인 토큰 정보 저장
      setUser(data.nickname, data.accessToken); // 전역 변수로 유저 닉네임, 토큰 정보 저장

      navigate('/');
    },
    onError: (error) => {
      console.error("로그인 실패:", error.response?.data || error.message);
      alert(error.response?.data.message || "로그인 중 오류가 발생했습니다.\n" + error.message);
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "signup") {
      mutateSignup(formData);
    } else {
      mutateLogin(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
        className="w-full p-4 border border-gray-300 rounded-lg mb-2"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
        className="w-full p-4 border border-gray-300 rounded-lg mb-2"
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <button type="submit"
        className="w-full p-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
        disabled={!!isLoading}
      >
        {mode === "login" ? (isLoading ? "로그인 중..." : "로그인") : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
