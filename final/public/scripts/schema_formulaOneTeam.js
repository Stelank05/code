const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    idCode: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    teamCode: {
        type: String,
        required: true
    },
    nationalityLong: {
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
        required: false
    },
    drivers: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('formulaOneTeamSchema', teamSchema);