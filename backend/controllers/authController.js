const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  // Registration logic
  try {
    // Menerima data pengguna dari permintaan
    const { username, password } = req.body;

    // Periksa apakah pengguna sudah terdaftar
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Membuat pengguna baru dalam database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // Menghasilkan token JWT untuk pengguna yang baru terdaftar
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    // Mengembalikan respons berhasil bersama dengan token
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  // Login logic
  try {
    // Menerima data pengguna dari permintaan
    const { username, password } = req.body;

    // Mencari pengguna berdasarkan nama pengguna
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Memverifikasi kata sandi yang dimasukkan
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Menghasilkan token JWT untuk pengguna yang berhasil login
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Mengembalikan respons berhasil bersama dengan token
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed' });
  }
};
