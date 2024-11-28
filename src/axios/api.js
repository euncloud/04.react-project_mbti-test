import axios from "axios";

const api = axios.create({
  baseURL: "https://grizzly-nifty-visitor.glitch.me/testResults",
});

export const apiMoneyful = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
  });

export default api;
