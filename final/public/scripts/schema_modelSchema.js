const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    idCode: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    platform: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('modelSchema', modelSchema);