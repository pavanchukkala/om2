// server/controllers/contentController.js

// Example implementation
const getContent = (req, res) => {
    res.json({ message: 'Get content successful' });
};

const createContent = (req, res) => {
    const content = req.body;
    res.status(201).json({ message: 'Content created', data: content });
};

module.exports = {
    getContent,
    createContent,
};
