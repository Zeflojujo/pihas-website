const data = {
    news: require('../model/news.json'),
    setNews: function(data) { this.news = data }
};

const fsPromises = require('fs').promises;
const path = require('path');

const getAllNews = (req, res) => {
    res.json(data.news);
};

const createNewNews = async(req, res) => {
    const newNews = {
        id: data.news[data.news.length - 1].id + 1 || 1,
        title: req.body.title,
        description: req.body.description
    }

    console.log(newNews)

    if(!newNews.title || !newNews.description) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }

    data.setNews([...data.news, newNews]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'news.json'),
        JSON.stringify(data.news)
    );
    res.status(201).json(data.news);
}

const updateNews = async(req, res) => {
    const news = data.news.find(emp => emp.id === parseInt(req.body.id));
    if(!news) {
        return res.status(400).json({ "message": `news ID ${req.body.id} not found` });
    }
    if (req.body.title) news.title = req.body.title;
    if (req.body.description) news.description = req.body.description;
    const filteredArray = data.news.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, news];
    data.setNews(unsortedArray.sort((a,b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'news.json'),
        JSON.stringify(data.news)
    );
    res.json(data.news);
}

const deleteNews = async(req, res) => {
    console.log(req.params.id)
    const news = data.news.find(emp => emp.id === parseInt(req.params.id));

    if(!news) {
        return res.status(400).json({ "message": `news ID ${req.params.id} not found` });
    }
    const filteredArray = data.news.filter(emp => emp.id !== parseInt(req.params.id));
    data.setNews([...filteredArray]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'news.json'),
        JSON.stringify(data.news)
    );
    res.json(data.news);
}

const getNews = (req, res) => {
    const news = data.news.find(emp => emp.id === parseInt(req.body.id));
    if(!news) {
        return res.status(400).json({ "message": `news ID ${req.params.id} not found` });
    }
    res.json(news);
}

module.exports = {
    getAllNews,
    createNewNews,
    updateNews,
    deleteNews,
    getNews
}