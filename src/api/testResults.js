import api from '../axios/api';

export const getTestResults = async () => {
  const response = await api
  .get("");
  return response.data;
};

export const createTestResult = async (resultData) => {

};

export const deleteTestResult = async (id) => {

};

export const updateTestResultVisibility = async (id, visibility) => {

};