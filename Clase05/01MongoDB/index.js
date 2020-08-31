const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const alumno = require("./alumno");

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

app.listen(3000,() => {
    console.log("Iniciado en el puerto 3000")
})