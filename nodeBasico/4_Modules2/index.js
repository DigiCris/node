// esto me trae todo el contenido del archivo en la constante llamada math
const math = require("./math.js"); // sin ./ lo toma de donde está instalado el node

const funcionExportar= require("./math.js");

//console.log(math);

// la llamo con el nombre suma ya que con ese nombre la exporte
console.log(math.add(2,3));

console.log(funcionExportar("yo"));