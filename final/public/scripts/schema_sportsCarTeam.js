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
    carModel: {
        type: String,
        required: true
    },
    carNumber: {
        type: String,
        required: true
    },
    enteredClass: {
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
    wins: {
        type: Number,
        required: true
    },
    podiums: {
        type: Number,
        required: true
    },
    poles: {
        type: Number,
        required: true
    },
    isPrivateer: {
        type: Boolean,
        required: true
    },
    privateerPointsScored: {
        type: Number,
        required: false
    },
    privateerChampionshipPosition: {
        type: String,
        required: false
    },
    privateerWins: {
        type: Number,
        required: false
    },
    privateerPodiums: {
        type: Number,
        required: false
    },
    privateerPoles: {
        type: Number,
        required: false
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

module.exports = mongoose.model('sportsCarTeamSchema', teamSchema);