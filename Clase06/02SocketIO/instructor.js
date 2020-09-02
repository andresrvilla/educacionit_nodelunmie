const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/educacionit");

const appSchemas = require("./app-schemas");
var Instructor = new mongoose.model("Instructor", 
        appSchemas.Instructor);

let crearInstructor = (nombre, apellido, cantidadCursos, callback) => {
    let nuevoInstructor = new Instructor({
        Nombre: nombre,
        Apellido: apellido,
        CantidadCursos: cantidadCursos,
        NoExiste: true
    });

    nuevoInstructor.save(callback);
}

let actualizarInstructor = (id,nombre,apellido,cantidadCursos,callback) => {
    Instructor.findOne({_id: new mongoose.Types.ObjectId(id)}, (err,instructorDb) => {
        // callback del findOne
        instructorDb.Nombre = nombre;
        instructorDb.Apellido = apellido;
        instructorDb.CantidadCursos = cantidadCursos;
        instructorDb.save(callback);
    })
}

let todosLosInstructores = (callback) => {
    Instructor.find().lean().exec(callback);
}

let unInstructor = (id,callback) => {
    Instructor.findOne({_id: new mongoose.Types.ObjectId(id)})
    .lean().exec(callback);
}

module.exports = {
    Crear: crearInstructor,
    Todos: todosLosInstructores,
    UnInstructor: unInstructor,
    ActualizarInstructor: actualizarInstructor
}