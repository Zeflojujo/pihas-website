const express = require('express');
const router = express.Router();
const messagesController = require('../../controllers/messagesController');

router.route('/')
    .get(messagesController.getAllMessages)
    .post(messagesController.createNewMessage)
    .delete(messagesController.deleteMessage);

router.route('/:id')
    .get(messagesController.getMessage);

module.exports = router;