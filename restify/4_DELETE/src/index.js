const restify = require("restify"); // similar a express

const server= restify.createServer(); // creo el servidor

server.listen(3000, ()=>{
    console.log("escuchando en puerto 3000:");
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
let userCounter=2;

//routes
server.get('/user', (req,res,next) => {
    res.setHeader('Content-Type','application/json'); // tipo de datos que le mandamos
    res.writeHead(200); // Status que le mandamos
    res.end(JSON.stringify(users)); // Los datos que le mandamos
});

/*
Igual al post para envíar los datos y al get /user/:id para obtener uno en particular y luego se actualiza
*/
server.del('/user/:id', (req,res,next)=>{
    delete users[parseInt(req.params.id)];

    res.setHeader('Content-Type','application/json'); // tipo de datos que le mandamos
    res.writeHead(200); // Status que le mandamos
    res.end(JSON.stringify(true)); // Los datos que le mandamos
});