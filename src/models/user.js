const mongoose = require('../database/index');

const User = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('user', User);

