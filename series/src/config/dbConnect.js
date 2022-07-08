const mongoose = require('mongoose')

const DATABASE_URI = process.env.DATABASE_URI

mongoose.connect(DATABASE_URI);

let db = mongoose.connection;

module.exports = db