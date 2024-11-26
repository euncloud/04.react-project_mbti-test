import { apiMoneyful } from '../axios/api';

export const register = async (userData) => {
  const response = await apiMoneyful
  .post("/register", userData);
  return response.data;
};

export const login = async (userData) => {

};

export const getUserProfile = async (token) => {

};

export const updateProfile = async (formData) => {

};