const express=require("express");
const app=express();
const port=3000;

app.listen(port, (error) => {
    if(error){
        console.log("hubo un error y no nos pudimos conectar");
    }else{
        console.log("conectados y escuchando en http://localhost:3000");
    }
});


app.get("/",(req,res) => {
    res.end("<h1>Soy el Home</h1><br><p>Primero intenta de buscarme a mi.</p>");
});

app.get("/imagenes",(req,res) => {
    res.end("<h1>Soy Imagenes</h1><br><p>Si la peticion no fue al home sigue buscandome a mi.</p>");
});

app.get("/contacto",(req,res) => {
    res.end("<h1>Soy el Contacto</h1><br><p>si la peticion no fue al home, buscó a imagenes pero tampoco fue para ella sigue por mi.</p>");
});

// para todo el resto no lo encuentra
app.get("*",(req,res) => {
    res.end("<h1>Error 404</h1><br><p>Paso por todos pero ninguno era por lo que no se encontró la pagina.</p>");
});