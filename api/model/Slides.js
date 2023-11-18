const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
});

const Slides = mongoose.model("Slides", newsSchema);

module.exports = Slides;