// frontend/src/services/dataService.js
import axios from 'axios';

const API_URL = 'YOUR_CRUD_SERVICE_URL';

export const getData = async () => {
  const response = await axios.get(`${API_URL}/data`);
  return response.data;
};
