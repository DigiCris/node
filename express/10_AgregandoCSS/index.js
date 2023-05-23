const express=require("express");
const routes=require("./routes");
const routesAPI=require("./routes-api");

const app=express();
const port=3000;
const css= express.static(__dirname+"/styles"); // establezco la dirección donde está el css

app.set("serverName","mi primer servidor");
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.listen(port, (error) => {
    console.log("conectados y escuchando "+app.get("serverName")+" en http://localhost:3000");
});

app.use(routes);
app.use(routesAPI);
app.use(css);// ya encontramos el css pero no se le aplico a ninguna pagina. Tengo que agregar luego el link
            // de styles en los archivos html de las plantillas, como hice en el index.ejs

app.get("*", (req, res)=>{
    res.end("error 404");
})