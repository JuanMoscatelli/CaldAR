const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://Admin:RwM2CTiylkTtGvxg@cluster0.l9taq.mongodb.net/CaldAR_M5?retryWrites=true&w=majority';
db.building = require('./building.js')(mongoose);

module.exports = db;
