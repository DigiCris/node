const http = require('http');

// Esto crea un servidor y se pone a escucharlo en el puerto 3000.
// Lo hace con una función asincrónica que recien cuando se cree se
//ejecute el callback que establecimos (serverCreado()).
http.createServer(serverCreado).listen(3000);

//request and response son los parametros que recive el callback.
// Con request o req, veo que me están pidiendo.
// con res le envío lo que necesite.
// en este caso le mande un <h1>Hola Mundo</h1>
// y se hace escribiendo eso en res con res.write.
function serverCreado(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("<h1>Hola Mundo</h1>");
    res.end;
}