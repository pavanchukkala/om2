const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/om-castings', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Middleware for serving static files
const buildPath = path.join(__dirname, '../build');
app.use(express.static(buildPath));

// API Endpoints (Add your custom endpoints here)
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Serve React frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// Catch-all route for Single Page Application (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
