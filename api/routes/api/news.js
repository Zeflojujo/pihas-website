const express = require('express');
const router = express.Router();
const newsController = require('../../controllers/newsController');

router.route('/')
    .get(newsController.getAllNews)
    .post(newsController.createNewNews);

router.route('/:id')
    .get(newsController.getNews)
    .delete(newsController.deleteNews)
    .put(newsController.updateNews);

module.exports = router;