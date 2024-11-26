import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const apiMoneyful = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
  });

export default api;
