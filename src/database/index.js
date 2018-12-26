const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/vuttr', { useNewUrlParser: true });

module.exports = mongoose;