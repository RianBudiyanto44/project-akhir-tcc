// crud/routes/dataRoutes.js
const express = require('express');
const {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData
} = require('../controllers/dataController');

const router = express.Router();

router.post('/', createData);
router.get('/', getAllData);
router.get('/:id', getDataById);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

module.exports = router;
