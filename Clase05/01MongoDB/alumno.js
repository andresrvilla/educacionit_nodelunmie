const mongoDriver = require("mongodb");
const mongoClient = mongoDriver.MongoClient;
const ObjectId = mongoDriver.ObjectId;

let alumnosColeccion;

mongoClient.connect("mongodb://localhost:27017", (err, clienteConectado) => {
    if (err) {
        console.log("No se pudo conectar al servidor");
    } else {
        let db = clienteConectado.db("educacionit");
        alumnosColeccion = db.collection("alumnos");
    }
})

let guardar = (nombre, apellido, edad, callback) => {
    let documentoAlumno = {
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad
    }

    alumnosColeccion.insertOne(documentoAlumno, (err, datos) => {
        callback(err);
    })
}

let todos = (callback) => {
    alumnosColeccion.find().toArray(callback)
}

let buscarPorId = (id, callback) => {
    alumnosColeccion.findOne({ _id: new ObjectId(id) }, callback);
}

let actualizar = (id, nombre, apellido, callback) => {
    alumnosColeccion.update({ _id: new ObjectId(id) },
    {
        $set: {
            Nombre: nombre,
            Apellido:apellido
        }
    }
    , callback);
}

let borrar = (id,callback) => {
    alumnosColeccion.remove({ _id: new ObjectId(id) }, callback);
}

module.exports = {
    Guardar: guardar,
    Todos: todos,
    BuscarPorId: buscarPorId,
    Actualizar: actualizar
}