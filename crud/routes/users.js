const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', dataController.getUsers);
router.post('/', dataController.createUser);
router.put('/:id', dataController.updateUser);
router.delete('/:id', dataController.deleteUser);

module.exports = router;
