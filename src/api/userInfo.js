import api from '../axios/api';

export const changeUserInfo = async (userId, nickname) => {
    const response = await api
    .patch(`?userId=${userId}`);
    return response.data;
  };