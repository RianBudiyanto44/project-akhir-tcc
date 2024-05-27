// auth/controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send({ message: 'User registered' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send({ error: 'Invalid username or password' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY');
    res.send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
