const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const alumno = require("./alumno");
const instructor = require("./instructor");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var motor = exphbs.create({
    defaultLayout: "principal",
    extname: "hbs"
});
app.engine("hbs", motor.engine);
app.set("view engine", "hbs");


app.get("/",(req,res) => {
    alumno.Todos((err,datos) => {
        res.render("index", {
            "Datos": datos
        })
    })    
})

app.route("/creaalumno")
.get((req,res) => {
    res.render("formAlumno");
})
.post((req,res) => {
    alumno.Guardar(req.body.nombre,
        req.body.apellido, 
        parseInt(req.body.edad), (err) => {
            if(err){
                // Conviene crear una vista de error
                // E incluso guardar el error por ejemplo
                // en un archivo
                res.send("Hubo un error: "+err);
            }else{
                res.redirect("/");
            }
        })
});

app.get("/listarAlumnos",(req,res) => {
    alumno.Todos((err,datos) => {
        if(err){
            // Conviene crear una vista de error
            // E incluso guardar el error por ejemplo
            // en un archivo
            res.send("Hubo un error: "+err);
        }else{
            res.render("listadoAlumnos", {
                Alumnos: datos
            });
        }
    });
})

app.route("/editarAlumno")
.get((req,res) => {
    var id = req.query.id;
    alumno.BuscarPorId(id,(err,datos) => {
        console.log(datos);
        res.render("formAlumno",{
            Alumno: datos
        });
    })
})
.post((req,res) => {
    var id = req.query.id;
    //req.body.nombre,
    //req.body.apellido, 
    //parseInt(req.body.edad)

    alumno.Actualizar(id, 
        req.body.nombre, 
        req.body.apellido,
        (err, datos ) => {
            res.redirect("/");
        })
})

app.route("/crearinstructor")
.get((req,res) => {
    res.render("formInstructor");
})
.post((req,res) => {
    //req.body.nombre,
    //req.body.apellido, 
    //parseInt(req.body.edad)
    instructor.Crear(req.body.nombre, 
        req.body.apellido, 
        req.body.cantidadCursos,
        (err,datos) => {
            if(err){
                res.send(err);
            }else{
                res.redirect("/");
            }
        })
})

app.get("/listarinstructores", (req,res) => {
    instructor.Todos((err,datos) => {
        console.log(datos);
        res.render("listadoInstructores", {
            Instructores: datos
        });
    })
})

app.route("/editarInstructor")
.get((req,res) => {
    var id = req.query.id;
    instructor.UnInstructor(id,(err,datos) => {
        res.render("formInstructor", {
            Instructor: datos
        })
    })
})
.post((req,res) => {
    //req.body.nombre, 
    //req.body.apellido, 
    //req.body.cantidadCursos,
    var id = req.query.id;
    instructor.ActualizarInstructor(id,
        req.body.nombre,
        req.body.apellido,
        req.body.cantidadCursos,
        (err,datos) => {
            res.redirect("/listarinstructores");
        })
});

app.get("/chat", (req,res) => {
    res.render("chat");
})

let server = app.listen(3000,() => {
    console.log("Iniciado en el puerto 3000")
})


let io = require("socket.io");
let ioServer = io(server);

ioServer.on("connection", (socket) => {
    console.log("Se conecto un cliente");
})

