/*ES Express
En vez de usar require lo requerimos como lo pone el estandar de ECMAScript y como lo ponemos en este
documento. Para que esto lo tome debemos agregar en pacage.json:      "type": "module",
*/
import express from 'express';
//const express= require('express'); // esta es la vieja forma pero es lo mismo que arriba

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