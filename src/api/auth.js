import { apiMoneyful } from '../axios/api';

export const checkAuth = async () => {
  const token = localStorage.getItem("accessToken") || null;
  if(!token){
    return false;
  }
  const response = await apiMoneyful
  .get("/user", {
    headers: { Authorization: `Bearer ${token}`},
  });
  return response.data.success;
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

export const getUserProfile = async (token) => {

};

export const updateProfile = async (formData) => {

};