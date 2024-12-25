const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/your-database-name';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Body parser middleware (if needed)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files for a frontend app (if applicable)
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Root route for testing
app.get('/', (req, res) => {
    res.send('Welcome to Om Castings!');
});

// Example API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Catch-all route to serve the frontend app
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
