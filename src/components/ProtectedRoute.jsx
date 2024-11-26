import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { toast } from "react-toastify"

function ProtectedRoute() {
    const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰 가져오기
    
    if (!token) {
        toast.warning("로그인 후 이용해 주세요");
        return <Navigate to="/login" replace />; // 토큰이 없으면 로그인 페이지로 리다이렉트
    }

    return <Outlet />; // 토큰이 있으면 하위 라우트를 렌더링
};
export default ProtectedRoute