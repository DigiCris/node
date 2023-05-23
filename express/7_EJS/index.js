// en la carpeta view podremos ver como traté al ejs, los templates y como le incluí archivos de componentes
// para este ejemplo el navbar.

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
    res.render("index.ejs",{title:"home", value:33}); // tendra un menu para ir al view login o home. Acá dirá que es el home
});

app.get("/login",(req,res) => {
    res.render("login.ejs"); // tendra un menu para ir al view login o home. Acá habrá un form
});