const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");

// formato de la carpeta absoluto: D:\EducacionIT\ etc
// path.join("D:\\Educacionit","contenido")
// genera: "D:\\Educacionit\\contenido"
// /carpeta/
app.use(express.static(path.join(__dirname,"contenido")))

const motor = exphbs.create({
    defaultLayout: "default",
    extname: ".hbs",
    helpers: {
        fin: () => {
            return "Llegaste al final de la página"
        }
    }
});

app.engine(".hbs",motor.engine);
app.set("view engine",".hbs");

app.get("/", (req,res) => {
    res.render("home",{
        tituloPagina: "Educacion IT",
        noExiste: "valor",
        usuarios: [
            "pepe",
            "carlos",
            "esteban"
        ],
        personas:[
            {
                nombre: "Andres",
                apellido: "Villa",
                notas:[
                    7,3,10,8
                ]
            },
            {
                nombre: "Laura",
                apellido: "Nuñez",
                notas:[
                    3
                ]
            }
        ],
        autor: {
            nombre: "Nombre autor",
            apellido: "Apellido Autor"
        }
    });
})

app.listen(3000,() => {
    console.log("El servidor se inicio correctamente");
})