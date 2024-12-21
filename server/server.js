// server.js
// Express app configuration

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./utils/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to database and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });
