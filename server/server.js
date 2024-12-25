// server/server.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/om-castings', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Serve static files from the React build directory
const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));

// API Endpoints
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Serve React frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// Catch-all route for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
