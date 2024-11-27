import api from '../axios/api';

export const getTestResults = async (userId) => {
  const response = await api
  .get(`?useId=${userId}`);
  return response.data;
};

export const createTestResult = async (testData) => {
  const response = await api
  .post("/", testData);
  return response.data;
};

export const deleteTestResult = async () => {
  const token = localStorage.getItem("accessToken") || null;

  if (!token) {
    throw new Error('로그인 후 다시 이용해 주세요.');
  }

  const response = await api.get(`?token=${token}`);
  
  if (response.data.length === 0) {
    throw new Error('해당하는 데이터가 없습니다.');
  }

  // 찾은 데이터가 있으면 삭제
  await api.delete(`${response.data[0].id}`);
  return '삭제 성공';
};

export const getAllTestResults = async () => {
  const response = await api
  .get("/");
  return response.data;
};

// export const updateTestResultVisibility = async (id, visibility) => {

// };