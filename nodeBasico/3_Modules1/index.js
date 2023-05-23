// En consola ejecutarlo como: node index.js
// esto me trae todo el contenido del archivo en la constante llamada math
const math = require("./math.js"); // sin ./ lo toma de donde está instalado el node


console.log(math);
/*
Veremos lo siguiente:
{
  suma: [Function: add],
  substract: [Function: substract],
  multiply: [Function: multiply],
  divide: [Function: divide]
}
Con lo cual vemos que math es un objeto con las propiedades de todo lo exportado
*/


// la llamo con el nombre suma ya que con ese nombre la exporte
console.log(math.suma(2,3));

console.log(math.divide(2,0)); // math. divide me devuelve undefined porque no me devolvio nada.