const express = require('express');

const app = express();
const port=3000;

app.listen(port, () => {
    console.log("escuchando en http://localhost:3000");
});

app.get("/", (req,res) => {
    res.end("<h1>Hola Mundo</h1>");
});