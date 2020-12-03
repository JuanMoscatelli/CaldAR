const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://Admin:RwM2CTiylkTtGvxg@cluster0.l9taq.mongodb.net/CaldAR_M5';

db.building = require("./building.js")(mongoose);
db.boilerTypes = require("./boiler-types.js")(mongoose);
db.boiler = require("./boilers.js")(mongoose);
db.constructionCompany = require("./construction-company.js")(mongoose);
db.technician = require("./technicians.js")(mongoose);

module.exports = db;