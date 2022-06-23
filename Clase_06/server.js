const http = require('http');

// Creamos nuestro server
const server = http.createServer((req, res) => {
    res.end('Hola Mundo');
})

const connectedServer = server.listen(8095, () => {
    console.log("Servidor escuchando en: " + connectedServer.address().port);
})