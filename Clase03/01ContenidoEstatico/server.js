const express = require("express");
const app = express();
const path = require("path");

// formato de la carpeta absoluto: D:\EducacionIT\ etc
// path.join("D:\\Educacionit","contenido")
// genera: "D:\\Educacionit\\contenido"
// /carpeta/
app.use(express.static(path.join(__dirname,"contenido")))

app.listen(3000,() => {
    console.log("El servidor se inicio correctamente");
})