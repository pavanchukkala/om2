// routes/contentRoutes.js
// Content-related API routes

const express = require('express');
const { getContent, createContent } = require('../controllers/contentController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getContent);
router.post('/', authMiddleware, createContent);

module.exports = router;