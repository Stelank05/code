const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    idCode: {
        type: String,
        required: true
    },
    driverName: {
        type: String,
        required: true
    },
    nationalityLong: {
        type: String,
        required: true
    },
    carNumber: {
        type: String,
        required: true
    },
    pointsScored: {
        type: Number,
        required: true
    },
    championshipPosition: {
        type: String,
        required: true
    },
    gpWins: {
        type: Number,
        required: true
    },
    gpPodiums: {
        type: Number,
        required: true
    },
    gpPoles: {
        type: Number,
        required: true
    },
    sprintWins: {
        type: Number,
        required: true
    },
    sprintPodiums: {
        type: Number,
        required: true
    },
    sprintPoles: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('formulaOneDriverSchema', driverSchema);