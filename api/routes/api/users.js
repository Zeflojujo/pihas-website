const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/registerController');

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.handleNewUser);

router.route('/:id')
    .put(usersController.updateUsers)
    .delete(usersController.deleteUsers);

module.exports = router;