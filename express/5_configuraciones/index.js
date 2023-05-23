const express=require("express");

const app=express();
const port=3000;

//Configuraciones. Es para usar variables, luego podrán cargarse plantillas en ellas.
// es un metodo seter. para llamarlo luego habra que usar el metodo getter: app.get("serverName")
app.set("serverName","mi primer servidor");


app.listen(port, (error) => {
    console.log("conectados y escuchando "+app.get("serverName")+" en http://localhost:3000");
});

app.get("/",(req,res) => {
    res.end("<h1>Soy el Home</h1>");
});

app.get("/imagenes",(req,res) => {
    res.end("<h1>Soy Imagenes</h1>");
});

app.get("*",(req,res) => {
    res.end("<h1>Error 404</h1><br> y acá tambien puedo llamar al geter= "+app.get("serverName"));
});