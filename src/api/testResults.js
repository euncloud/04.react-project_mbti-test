import api from '../axios/api';

export const getTestResults = async (userId) => {
  const response = await api
  .get(`?userId=${userId}`);
  return response.data;
};


export const createTestResult = async (testData) => {
  const response = await api
  .post("/", testData);
  return response.data;
};


export const deleteTestResult = async (userId) => {
  const token = localStorage.getItem("accessToken") || null;

  if (!token) {
    throw new Error('로그인 후 다시 이용해 주세요');
  }

  // 먼저 userId로 데이터를 조회하여 해당 아이템을 찾는다
  const response = await api.get(`?userId=${userId}`);
  
  // 결과가 있다면 해당 데이터의 id를 사용해서 삭제 한다.
  if (response.data.length > 0) {
    await api.delete(`/${response.data[0].id}`); 
    return '삭제 성공';
  } else {
    throw new Error('해당 userId에 해당하는 데이터가 없습니다.');
  }
};


export const getAllTestResults = async () => {
  const response = await api
  .get("/");
  return response.data;
};

// export const updateTestResultVisibility = async (id, visibility) => {

// };