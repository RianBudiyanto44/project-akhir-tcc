// crud/controllers/dataController.js
const Data = require('../models/Data');

exports.createData = async (req, res) => {
  const { name, value } = req.body;
  try {
    const data = new Data({ name, value });
    await data.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Data.findById(id);
    if (!data) {
      return res.status(404).send({ error: 'Data not found' });
    }
    res.send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.updateData = async (req, res) => {
  const { id } = req.params;
  const { name, value } = req.body;
  try {
    const data = await Data.findByIdAndUpdate(id, { name, value }, { new: true });
    if (!data) {
      return res.status(404).send({ error: 'Data not found' });
    }
    res.send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Data.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).send({ error: 'Data not found' });
    }
    res.send({ message: 'Data deleted' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
