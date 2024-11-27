import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/testResults",
});

export const apiMoneyful = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
  });

export default api;
