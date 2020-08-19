const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (request,response) => {
    response.send("<b>Hola</b> mundo");
})

app.listen(8080,() => {
    console.log("Escuchando en el puerto 8080");
});