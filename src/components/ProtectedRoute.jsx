import React, { useEffect, useRef } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { toast } from "react-toastify"

function ProtectedRoute() {
    const token = localStorage.getItem("accessToken") || null; // 로컬 스토리지에서 토큰 가져오기
    const hasShownToast = useRef(false);

    useEffect(() => {
        if (!token && !hasShownToast.current) {
            toast.warning("로그인 후 이용해 주세요");
            hasShownToast.current = true; // 경고 메시지가 한번만 뜨도록 상태를 설정
        }
    }, [token]); 

    if (!token) {
        hasShownToast.current = false;
        return <Navigate to="/login" />; // 토큰이 없으면 로그인 페이지로 리다이렉트
    }

    return <Outlet />; // 토큰이 있으면 하위 라우트를 렌더링
};
export default ProtectedRoute