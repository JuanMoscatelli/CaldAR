const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = process.env.mongoURL;
db.technicians = require('./construction-company.js')(mongoose);

module.exports = db;