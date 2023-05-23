// Busco funcionalidad que requiero en https://www.npmjs.com/
// en este caso usaremos color para el ejemplo que nos permitira
// cambiar el color de los console.log
//En la documentación dice como instalarlo. Ejecutar en consocla:
//npm install colors
// esto agregará package-lock que dice que instaló, package.json que dice
//que debo instalar y node_module que contiene las cosas instaladas.
// esas cosas intaladas se llaman paquetes.
const http = require('http');
const colors= require('colors'); // Luego requerir el modulo aqui

http.createServer(serverCreado).listen(3000);

function serverCreado(req, res){
    res.write("<h1>Hola Mundo</h1>");
    res.end;
    console.log("escuchando en http://localhost:3000/".green);
}


// Luego en la consola escribimos:
//npm init
//Completamos los datos que nos pide y creará el archivo package.json
// para crearlo con valores por defecto podemos usar (npm install -y)
// con todas las caracteristicas. Podemos agregar o modificar luego
// desde el mismo archivo.

// Al compartir el codigo se brinda el código que uno crea, el
//package.json y el package-lock.json pero no el node_modules ya que
// es muy pesado. La persona al recibir eso ejecutará un:
// npm install
// y con ello recreará el node_modules tal cual uno lo tenía y podrá
// ejecutar todo de la misma forma que uno. En caso de requerir
// información de donde se instalaron ls cosas siempre pueden indagar
// un poco más en el package-lock.json... pero este nunca debe tocarse
// a mano.


//Scripts en el package.json. Podemos modificarlo por el siguiente:
/*
  "scripts": {
    "start": "node index.js"
  },

De esta forma yo podría agregarlo los scripts que quiera. Para compilar,
para correr, para debuguear, para testear, etc. Una vez puesto lo
anterior especificado, corremos en consola:
npm run start
con esto debe ejecutarse al igual que si hacíamos node index.js


*/