// server/controllers/contentController.js
// Content-related API logic

const getContent = (req, res) => {
    // Fetch content data (mock example)
    const content = [
      { id: 1, title: "Welcome to our site", body: "We’re glad you’re here!" },
      { id: 2, title: "About Us", body: "Learn more about what we do." },
    ];
    res.status(200).json(content);
  };
  
  module.exports = { getContent };
  