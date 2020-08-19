const http = require("http");
const saludo = require("./saludo");
const home = require("./home");

let servidor = http.createServer((request, response) => {
    console.log("Recibi una peticion a " + request.url);
    switch(request.url){
        case "/":
            response.writeHead(200, { "content-type": "text/html" });
            response.end(home);
            break;
        case "/saludo":
            response.writeHead(200, { "content-type": "text/html" });
            response.end(saludo.html);
            break;
        default:
            response.writeHead(404, { "content-type": "text/html" });
            response.end("Página no encontrada");
    }
});

servidor.listen(8080);