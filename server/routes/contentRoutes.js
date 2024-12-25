// server/routes/contentRoutes.js

const express = require('express');
const { getContent, createContent } = require('../controllers/contentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Define routes
router.get('/', getContent);
router.post('/', authMiddleware, createContent);

module.exports = router;
