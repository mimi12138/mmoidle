import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器（添加 token 等）
http.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截器（统一错误处理）
http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response?.status === 401) {
      // token 失效处理
      window.location.href = '/login';
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export default http;
