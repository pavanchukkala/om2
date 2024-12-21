// routes/authRoutes.js
// Authentication-related API routes

const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);

module.exports = router;