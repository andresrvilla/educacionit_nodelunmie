const http = require("http");

let servidor = http.createServer((request, response) => {
    console.log("Recibi una peticion a " + request.url);
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<b>Hola mundo</b>");
});

servidor.listen(8080);