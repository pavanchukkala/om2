// server/controllers/userController.js
// User-related API logic

const getUser = (req, res) => {
    const userId = req.params.id;
    // Fetch user data from database (mock example)
    const user = { id: userId, name: "John Doe", email: "john.doe@example.com" };
    res.status(200).json(user);
  };
  
  const updateUser = (req, res) => {
    const userId = req.params.id;
    const updates = req.body;
    // Perform update logic (mock example)
    const updatedUser = { id: userId, ...updates };
    res.status(200).json(updatedUser);
  };
  
  module.exports = { getUser, updateUser };