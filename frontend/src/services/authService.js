// frontend/src/services/authService.js
import axios from 'axios';

const API_URL = 'YOUR_AUTH_SERVICE_URL';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};
