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
En postman pongo el endpoint, dentro de los headers, el content-type= application/json y en el body
como row el dato que le quiero mandar. en formato json. ejemplo:
{
"name": "Post",
"lastname": "Man"
}
acá lo recibo en req.body y lo agrego al final de mi array de users, luego retorno como si fuera un get
el dato que fue insertado.
Esto está simulando ser una base de dato, el tema acá es que al resetear el servidor, la información 
se borra, pero puedo hacer el post y luego hacer el get sin resetear el server y ver como se agregó el dato.
*/
server.post('/user', (req,res,next)=>{
    //console.log(req.body);
    userCounter++;
    users[userCounter]=req.body;

    res.setHeader('Content-Type','application/json'); // tipo de datos que le mandamos
    res.writeHead(200); // Status que le mandamos
    res.end(JSON.stringify(users[userCounter])); // Los datos que le mandamos
});