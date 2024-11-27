import api from '../axios/api';

export const getTestResults = async () => {
  const token = localStorage.getItem("accessToken") || null;
  
  if(!token){
    return null;
  }

  const response = await api
  .get(`?token=${token}`);
  console.log('getTestResults response', response);
  return response.data;
};

export const createTestResult = async (testData) => {
  const response = await api
  .post("/", testData);
  return response.data;
};

export const deleteTestResult = async (id) => {

};

export const updateTestResultVisibility = async (id, visibility) => {

};