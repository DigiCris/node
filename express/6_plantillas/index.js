// hago: npm install ejs    (Este de acá no necesita require, basta con configurar views y view engine)
const express=require("express");

const app=express();
const port=3000;

app.set("serverName","mi primer servidor");

//plantilla
app.set("views",__dirname+"/views"); // __dirname es el directorio local a lo que le concateno views. Me dice donde estarás las vistas que mostraré cuando llame al metodo render
app.set("view engine","ejs");


app.listen(port, (error) => {
    console.log("conectados y escuchando "+app.get("serverName")+" en http://localhost:3000");
});

app.get("/",(req,res) => {
    // ya no llamo a send sino a render porque tengo que renderizar a una vista
    res.render("index.ejs"); // no hace falta que le ponga views/index.ejs porque ya lo configure views con el setter
});