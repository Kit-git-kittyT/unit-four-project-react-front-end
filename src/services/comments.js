import api from "./apiConfig.js";

export const getComments = async (id) => {
  try {
    const response = await api.get(`/interests/${id}/comments/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addPostComment = async (id, commentData) => {
  try {
    const response = await api.post(`/interests/${id}/comments/`, commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};