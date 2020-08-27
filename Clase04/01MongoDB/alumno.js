const mongoDriver = require("mongodb");
const mongoClient = mongoDriver.MongoClient;

let alumnosColeccion;

mongoClient.connect("mongodb://localhost:27017", (err,clienteConectado) =>{
    if(err){
        console.log("No se pudo conectar al servidor");
    }else{
        let db = clienteConectado.db("educacionit");
        alumnosColeccion = db.collection("alumnos");
    }
})

let guardar = (nombre,apellido,edad, callback) => {
    let documentoAlumno = {
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad
    }

    alumnosColeccion.insertOne(documentoAlumno, (err,datos) => {
        console.log(datos);
        callback(err);
    })
}

let todos = (callback) => {
    alumnosColeccion.find().toArray(callback)
}

module.exports = {
    Guardar: guardar,
    Todos: todos
}