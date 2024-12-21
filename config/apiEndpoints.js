// config/apiEndpoints.js
// API endpoint definitions

const apiEndpoints = {
    auth: {
      login: '/api/auth/login',
      register: '/api/auth/register',
    },
    content: {
      fetchAll: '/api/content',
      create: '/api/content',
    },
  };
  
  module.exports = apiEndpoints;