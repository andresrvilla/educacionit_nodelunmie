const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schemaInstructor = new Schema({
    Nombre: String,
    Apellido: String,
    CantidadCursos: Number
})

module.exports = {
    Instructor: schemaInstructor
}