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
        console.log(datos);
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
                res.send("Hubo un error: "+err);
            }else{
                res.redirect("/");
            }
        })
});

app.listen(3000,() => {
    console.log("Iniciado en el puerto 3000")
})