const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27017/refrigerante?authSource=refrigerante";

mongoose.connect(uri, {});