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

let personas = [];

app.get("/personas",(req,res) => {
    res.json(personas);
})

app.post("/guardarpersona",(req,res) => {
    personas.push({
        Nombre: req.body.nombre,
        Apellido: req.body.apellido
    });
    res.json({response:true})
})

let server = app.listen(3000,() => {
    console.log("Iniciado en el puerto 3000")
})