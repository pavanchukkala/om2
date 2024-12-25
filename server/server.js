// server.js
// Express app configuration

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./utils/logger');

// Load environment variables from .env file
dotenv.config();

// Ensure MONGO_URI is defined in .env
if (!process.env.MONGO_URI) {
  console.error('MongoDB URI is not defined in environment variables!');
  process.exit(1); // Exit if MONGO_URI is not found
}

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

// Connect to MongoDB and start the server
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    setTimeout(connectDB, 5000); // Retry connection after 5 seconds
  }
};

connectDB();
