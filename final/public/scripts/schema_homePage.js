const mongoose = require('mongoose');
//const image = require('/schema_images');

const homeSchema = new mongoose.Schema({
    idCode: {
        type: String,
        required: true
    },
    seriesName: {
        type: String,
        required: true
    },
    seriesDescription: {
        type: String,
        required: true
    },
    seriesLink: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    bodyStyle: {
        type: String,
        required: true
    },
    buttonStyle: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('homeSchema', homeSchema);