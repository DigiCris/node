const fs=require('fs'); // filesistem

// escribe hola mundo en la ruta ./holaMundo.txt indicada en formato utf8
// al terminar ejecuta la funcion callback llamada termine
// pero no se queda trabado ahí sino que sigue ejecutando lo que hay
// abajo. Por eso permite atender varias cosas al mismo tiempo.
// al terminar esa tarea se ejecutará el callback.
// esto se llama codigo asincrono.
fs.writeFile('./holaMundo.txt',"hola mundo","utf8",termine);

// acá escribí el callback que verifica que se haya escrito bien.
function termine(error){
    console.log("ya termine ");
    if(error){
        console.log("con errores");
    }
    else{
        console.log("sin errores");
    }
}

//Este texto es para mostrar que se ejecuta antes que el callback porque
// node le pidió al sistema operativo que escribiese el archivo y
// mientras tanto prosigue con la ejecución
console.log("yo voy primero");


fs-fs.readFile("./holaMundo.txt","utf8",termineLeer);



function termineLeer(error,data){
    if(error){
        console.log("no pude leer");
    }else{
        console.log("data leida es: "+data);
    }
}