
// productService.js
// Service for product-related actions

import apiClient from './apiClient';

const productService = {
  getProducts: async () => {
    const response = await apiClient.get('/products');
    return response.data;
  },

  getProductById: async (productId) => {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  },

  createProduct: async (productData) => {
    const response = await apiClient.post('/products', productData);
    return response.data;
  },

  updateProduct: async (productId, productData) => {
    const response = await apiClient.put(`/products/${productId}`, productData);
    return response.data;
  },

  deleteProduct: async (productId) => {
    const response = await apiClient.delete(`/products/${productId}`);
    return response.data;
  },
};

export default productService;
