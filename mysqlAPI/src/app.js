const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const customerRoutes = require("./routes/customer");

const app = express(); // inicio express

//Configuraciones
app.set("port",  process.env.PORT || 3000); // Configuro el puerto. El 3000 por defecto, lo otro si me lo da el servidor en la nube
app.set("view engine", "ejs"); // que motor de plantilla vamos a estar usando
app.set("views", path.join(__dirname,"views")); // le decimos donde están las vistas

//middlewares
app.use(morgan("dev")); // para que nos muestre un log por consola de lo que sucede al acceder a la pagina
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single')); // conect database
app.use(express.urlencoded({extended: false})); // extended false porque no envía imagenes. Pero esto sirve para que entienda los datos que vienen de los forms. urlencoded antes venía de body-parser, ahora está incluido ya en express. agrega a req el field body (req.body)


// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname,'public')));

// empezar server
app.listen(app.get("port"), () => {
    console.log("app on port "+app.get("port"));
});