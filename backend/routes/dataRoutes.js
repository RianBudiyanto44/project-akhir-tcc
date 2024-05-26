const express = require('express');
const { createData, getData, updateData, deleteData } = require('../controllers/dataController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createData);
router.get('/', authMiddleware, getData);
router.put('/:id', authMiddleware, updateData);
router.delete('/:id', authMiddleware, deleteData);

module.exports = router;
