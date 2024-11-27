import { create } from "zustand";

const userBearsStore = create((set) => {
    return {
        user: null, // 로그인 유저 닉네임 정보
        userId: null, // 로그인 후 유저 아이디 정보
        hasTestResult: false,
        setUser: (userData, userId) => set({user: userData, userId: userId }),
        clearUser: () => set({ user: null, userId: null, }),
    };
});

export default userBearsStore;