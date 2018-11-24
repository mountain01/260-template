const mongoose = require('mongoose');

if (mongoose.connection.readyState !== 1) {
  mongoose.connect('mongodb://localhost:32769/db');
}

mongoose.connection.on('error', console.error.bind(console, 'connection error'));

module.exports = mongoose.connection;
