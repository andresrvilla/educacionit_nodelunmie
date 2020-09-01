const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var schemaInstructor = new Schema({
    Nombre: {
        type: String,
        required: true
    },
    Apellido: {
        type: String,
        required: true
    },
    Direccion: {
        type: String
    },
    CantidadCursos: Number
})

module.exports = {
    Instructor: schemaInstructor
}