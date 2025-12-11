import api from "./apiConfig.js";

export const getInterests = async () => {
  try {
    const response = await api.get("/posts/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getInterest = async (id) => {
  try {
    const response = await api.get(`/posts/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createInterest = async (postData) => {
  try {
    const response = await api.post("/posts/", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateInterest = async (id, interestData) => {
  try {
    const response = await api.put(`/posts/${id}/`, interestData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
