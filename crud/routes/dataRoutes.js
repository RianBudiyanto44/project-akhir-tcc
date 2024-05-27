// // crud/routes/dataRoutes.js
// const express = require('express');
// const {
//   createData,
//   getAllData,
//   getDataById,
//   updateData,
//   deleteData
// } = require('../controllers/dataController');

// const router = express.Router();

// router.post('/', createData);
// router.get('/', getAllData);
// router.get('/:id', getDataById);
// router.put('/:id', updateData);
// router.delete('/:id', deleteData);

// module.exports = router;

const express = require('express');
const Data = require('../models/Data');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Data.find();
  res.send(data);
});

router.post('/', async (req, res) => {
  const data = new Data(req.body);
  await data.save();
  res.status(201).send(data);
});

router.put('/:id', async (req, res) => {
  const data = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(data);
});

router.delete('/:id', async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
