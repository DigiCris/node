const restify = require("restify"); // similar a express

const server= restify.createServer(); // creo el servidor

server.listen(3000, ()=>{
    console.log("escuchando en puerto 3000");
});

/*
puedo configurarle handlers que se ejecuten siempre y en el orden declarado usando server.use. (Middlewares)
Hay algunos que ya vienen como plugins universarles de restify y que los podemos conectar aquí.
*/
server.use(restify.plugins.acceptParser(server.acceptable)); // to accept normal headers
server.use(restify.plugins.queryParser()); // to parse queries so we can get them
server.use(restify.plugins.bodyParser()); // to parse json and others


/**
 * Database simulation
 */
const users = {
    1: {
        name: 'Cristian',
        lastname: 'Marchese'
    },
    2: {
        name: 'admin',
        lastname: 'admin surname'
    }
}

//routes
server.get('/user', (req,res,next) => {
    res.setHeader('Content-Type','application/json'); // tipo de datos que le mandamos
    res.writeHead(200); // Status que le mandamos
    res.end(JSON.stringify(users)); // Los datos que le mandamos
});

server.get('/user/:id', (req,res,next) => {
    res.setHeader('Content-Type','application/json');
    res.writeHead(200);
    console.log(req.params.id); // req.params tendrá los parametros que yo le mande por el get
    res.end(JSON.stringify(users[parseInt(req.params.id)])); // Le mando solo el usuario solicitado
});