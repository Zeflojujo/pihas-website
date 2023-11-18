const data = {
    messages: require('../model/messages.json'),
    setMessages: function(data) { this.messages = data }
};

const fsPromises = require('fs').promises;
const path = require('path');

const getAllMessages = (req, res) => {
    res.json(data.messages);
};

const createNewMessage = async(req, res) => {
    console.log(req.body)
    console.log(req.body.name, req.body.email, req.body.phone, req.body.msg)
    const newMessage = {
        id: data.messages[data.messages.length - 1].id + 1 || 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.msg
    }

    if(!newMessage.name || !newMessage.email || !newMessage.phone || !newMessage.message) {
        return res.status(400).json({ 'message': 'All the filled are required.' });
    }

    data.setMessages([...data.messages, newMessage]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'messages.json'),
        JSON.stringify(data.messages)
    );
    res.status(201).json(data.messages);
}

const deleteMessage = async(req, res) => {
    const message = data.messages.find(emp => emp.id === parseInt(req.body.id));
    if(!message) {
        return res.status(400).json({ "message": `Message ID ${req.body.id} not found` });
    }
    const filteredArray = data.messages.filter(emp => emp.id !== parseInt(req.body.id));
    data.setMessages([...filteredArray]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'messages.json'),
        JSON.stringify(data.messages)
    );
    res.json(data.messages);
}

const getMessage = (req, res) => {
    const message = data.messages.find(emp => emp.id === parseInt(req.body.id));
    if(!message) {
        return res.status(400).json({ "message": `Message ID ${req.params.id} not found` });
    }
    res.json(message);
}

module.exports = {
    getAllMessages,
    createNewMessage,
    deleteMessage,
    getMessage
}