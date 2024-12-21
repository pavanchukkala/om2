// userService.js
// Service for user-related actions

import apiClient from './apiClient';

const userService = {
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  },

  getUserProfile: async () => {
    const response = await apiClient.get('/users/me');
    return response.data;
  },

  updateUserProfile: async (profileData) => {
    const response = await apiClient.put('/users/me', profileData);
    return response.data;
  },
};

export default userService;
