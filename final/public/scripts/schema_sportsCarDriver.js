const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    idCode: {
        type: String, required: true
    },
    driverName: {
        type: String, required: true
    },
    nationality: {
        type: String, required: true
    }
});

module.exports = mongoose.model('sportsCarDriverSchema', driverSchema);