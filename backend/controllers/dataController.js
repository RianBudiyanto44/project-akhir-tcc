const Data = require('../models/Data');

exports.createData = async (req, res) => {
  // Create data logic
  try {
    // Menerima data baru dari permintaan
    const { title, content } = req.body;

    // Membuat data baru dan menyimpannya dalam database
    const newData = new Data({ title, content, userId: req.user.userId });
    await newData.save();

    // Mengembalikan respons berhasil
    res.status(201).json({ message: 'Data created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create data' });
  }
};

exports.getData = async (req, res) => {
  // Get data logic
  try {
    // Mengambil semua data yang terkait dengan pengguna yang sedang login
    const data = await Data.find({ userId: req.user.userId });

    // Mengembalikan data yang berhasil diambil
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch data' });
  }
};

exports.updateData = async (req, res) => {
  // Update data logic
  try {
    // Menerima data yang ingin diperbarui dari permintaan
    const { title, content } = req.body;
    const { id } = req.params;

    // Memperbarui data yang sesuai dengan ID yang diberikan
    await Data.findByIdAndUpdate(id, { title, content });

    // Mengembalikan respons berhasil
    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update data' });
  }
};

exports.deleteData = async (req, res) => {
  // Delete data logic
  try {
    // Menerima ID data yang akan dihapus dari permintaan
    const { id } = req.params;

    // Menghapus data yang sesuai dengan ID yang diberikan
    await Data.findByIdAndDelete(id);

    // Mengembalikan respons berhasil
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete data' });
  }
};
