import { message } from 'antd';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/';

const instance = axios.create({
  baseURL: apiUrl,
});

instance.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.baseURL as string);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use((response) => {
  if (response.data.access_token) {
    window.localStorage.setItem('token', response.data.access_token);
  }

  return response;
});

export default instance;
