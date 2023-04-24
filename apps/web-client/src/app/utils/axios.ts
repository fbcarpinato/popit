import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/';

const instance = axios.create({
  baseURL: apiUrl,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (config.baseURL === apiUrl) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.access_token) {
      window.localStorage.setItem('token', response.data.access_token);
    }

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.localStorage.removeItem('token');
    }

    return Promise.reject(error);
  }
);

export default instance;
