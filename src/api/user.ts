import http from './http';

export const UserApi = {
  // 获取用户信息
  getUser: (id: string) => http.get(`/users/${id}`),
  
  // 登录接口
  login: (data: { username: string; password: string }) => 
    http.post('/auth/login', data),
  
  // 更新用户信息
  updateUser: (id: string, data: any) => 
    http.patch(`/users/${id}`, data)
};
