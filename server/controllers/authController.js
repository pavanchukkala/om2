const crypto = require('crypto');
const User = require('../models/User');

// Password Hashing using PBKDF2 and Salt
const hashPassword = (password) => {
    const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return { salt, hashedPassword };
}

// Password Comparison using PBKDF2 and Salt
const comparePassword = (salt, hashedPassword, password) => {
    const hashedEnteredPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hashedEnteredPassword === hashedPassword;
}

// Register User
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    
    const { salt, hashedPassword } = hashPassword(password);  // crypto for hashing
    
    const newUser = new User({ username, email, password: hashedPassword, salt });  // store salt
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
};

// Login User
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = comparePassword(user.salt, user.password, password);  // crypto for comparison

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
};
