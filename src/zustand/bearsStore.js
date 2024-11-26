import { create } from "zustand";

const userBearsStore = create((set) => {
    return {
        user: null, // 로그인 유저 정보
        accessToken: null, // 로그인 후 토큰 정보
        setUser: (userData, token) => set({user: userData, accessToken: token }),
        clearUser: () => set({ user: null, accessToken: null, }),
    };
});

export default userBearsStore;