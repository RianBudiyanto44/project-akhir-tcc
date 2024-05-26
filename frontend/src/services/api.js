import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

export const createData = async (data, token) => {
  return await axios.post(`${API_URL}/data`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getData = async (token) => {
  return await axios.get(`${API_URL}/data`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const updateData = async (id, data, token) => {
  return await axios.put(`${API_URL}/data/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const deleteData = async (id, token) => {
  return await axios.delete(`${API_URL}/data/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
