// server/middlewares/authMiddleware.js

// Example middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Add further token validation here
    next();
};

module.exports = authMiddleware;
