const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    idCode: {
        type: String,
        required: true
    },
    imageSource: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('imageSchema', imageSchema);