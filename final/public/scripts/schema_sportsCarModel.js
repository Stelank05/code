const mongoose = require('mongoose');

const sportsCarModelSchema = new mongoose.Schema({
    idCode: {
        type: String, required: true
    },
    modelName: {
        type: String, required: true
    },
    platform: {
        type: String, required: true
    },
    debutRace: {
        type: String, required: true
    },
    series: {
        type: Array, required: true
    },
    teams: {
        type: Array, required: true
    },
    photo: {
        type: String, required: true
    },
    notes: {
        type: String, required: true
    }
});

module.exports = mongoose.model('sportsCarModelSchema', sportsCarModelSchema);