import { apiMoneyful } from '../axios/api';

export const checkAuth = async () => {
  const token = localStorage.getItem("accessToken") || null;

  if (!token) {
    return null;
  }

  const response = await apiMoneyful
    .get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
  return response.data;
}

export const register = async (userData) => {
  const response = await apiMoneyful
    .post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await apiMoneyful
    .post("/login", userData);
  return response.data;
};

// export const getUserProfile = async (token) => {

// };

export const updateProfile = async (nickname) => {
  const token = localStorage.getItem("accessToken") || null;

  if (!token) {
    throw error;
  }
  try {
    const response = await apiMoneyful
      .patch("/profile",
        { nickname },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
    return response.data;
  } catch (error) {
    console.error("Profile update failed", error);
    throw error; 
  }
};