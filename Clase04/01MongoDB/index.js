const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var motor = exphbs.create({
    defaultLayout: "principal",
    extname: "hbs"
});
app.engine("hbs", motor.engine);
app.set("view engine", "hbs");


app.get("/",(req,res) => {
    res.render("index");
})

app.route("/creaalumno")
.get((req,res) => {
    res.render("formAlumno");
})
.post((req,res) => {
    var prueba = "Llego "+req.body.nombre + " " + req.body.apellido + " " +req.body.edad;
    res.send(prueba);
});

app.listen(3000,() => {
    console.log("Iniciado en el puerto 3000")
})