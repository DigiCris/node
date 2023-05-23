const express=require("express");
//Requiero el modulo que cree en routes.
const routes=require("./routes");

const app=express();
const port=3000;

app.set("serverName","mi primer servidor");

//plantilla
app.set("views",__dirname+"/views"); // __dirname es el directorio local a lo que le concateno views. Me dice donde estarás las vistas que mostraré cuando llame al metodo render
app.set("view engine","ejs");


app.listen(port, (error) => {
    console.log("conectados y escuchando "+app.get("serverName")+" en http://localhost:3000");
});

// Uso un middleware para las rutas
app.use(routes);