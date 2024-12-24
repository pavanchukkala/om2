const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },  // hashed password
    salt: { type: String, required: true },      // salt for password
});

module.exports = mongoose.model('User', userSchema);
