// middlewares/authMiddleware.js
// Middleware for authentication handling

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      // Verify token (mock example)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
  
  module.exports = authMiddleware;