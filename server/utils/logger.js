// utils/logger.js
// Utility for request/response logging

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };
  
  module.exports = logger;