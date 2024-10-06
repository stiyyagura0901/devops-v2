import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'http://localhost:3010',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getMessage = async () => {
  const response = await ApiService.get('/message?auth=1234567890');

  return response.data;
}
