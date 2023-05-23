const express=require("express");
const routes=require("./routes");

const Web3=require("web3");
var web3 = new Web3('HTTP://127.0.0.1:7545');

const app=express();
const port=3000;
const css= express.static(__dirname+"/styles"); // establezco la dirección donde está el css
const scripts= express.static(__dirname+"/scripts");

app.set("serverName","mi primer servidor");
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.listen(port, (error) => {
    console.log("conectados y escuchando "+app.get("serverName")+" en http://localhost:3000");
});

app.use(routes);
app.use(css);// ya encontramos el css pero no se le aplico a ninguna pagina. Tengo que agregar luego el link
            // de styles en los archivos html de las plantillas, como hice en el index.ejs
app.use(scripts);

app.get("*", (req, res)=>{
    res.end("error 404");
})
