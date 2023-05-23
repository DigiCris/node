/*Framework de nodejs que me permitira crear servidores más facil.
La documentación está en:
https://expressjs.com/es/starter/installing.html

ejecutar: npm install express
Requerirlo.

*/

const express= require('express');

const server= express(); // crea un servidor

server.listen(3000,"localhost",escuchando); // Lo hago escuchar por el puerto 3000

function escuchando(){
    console.log("escuchando por el puerto 3000");
}


server.get("/",home);

function home(req, res){
    res.send("<h1>Hello Express</h1>");
}
server.get("/contacto",contacto);

function contacto(req, res){
    res.send("<h1>Contactese con nosotros</h1>");
}