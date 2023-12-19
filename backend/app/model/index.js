const dbConfig = require("../config/configDB.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.books = require("./model.js")(mongoose);

module.exports = db;
