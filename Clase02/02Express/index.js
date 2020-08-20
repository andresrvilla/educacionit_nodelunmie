const express = require("express");
const app = express();
const fs = require("fs");

//Configuro bodyparser para las peticiones post
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
    fs.readFile("./contenido/index.html", "utf-8", (err, datos) => {
        if (err) {
            response.send("Ha ocurrido un error");
        } else {
            response.send(datos);
        }
    })
})

app.get("/image-1.jpg", (req, res) => {
    fs.readFile("./contenido/image-1.jpg", (err, datos) => {
        if (err) {
            res.send("Ha ocurrido un error");
        } else {
            res.send(datos);
        }
    });
})

app.get("/clima", (req, res) => {
    var clima = [
        {
            "Ciudad": "Buenos Aires",
            "Clima": "Bueno"
        },
        {
            "Ciudad": "Rosario",
            "Clima": "Malo"
        }
    ]
    res.json(clima)
})

//app.get("/formulario",(req,res) => {});
//app.post("/formulario",(req,res) => {});
app.route("/formulario")
    .get((req, res) => {
        let p = req.query.clave;
        console.log(p);
        fs.readFile("./contenido/formulario.html", "utf-8", (err, datos) => {
            if (err) {
                res.send("Ha ocurrido un error");
            } else {
                res.send(datos);
            }
        })
    })
    .post((req, res) => {
        let p = req.query.accion;
        let nombre = req.body.nombre;
        res.send("Recibido accion: " + p + " nombre: " + nombre);
    })

app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080");
});