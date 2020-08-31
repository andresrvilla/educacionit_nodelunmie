const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/educacionit");

const appSchemas = require("./app-schemas");
var Instructor = new mongoose.model("Instructor", appSchemas.Instructor);

