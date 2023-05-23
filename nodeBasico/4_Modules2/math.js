//Modulos
function add(x1,x2) {
    return x1+x2;
}
function substract(x1,x2) {
    return x1+x2;
}
function multiply(x1,x2) {
    return x1+x2;
}
function divide(x1,x2) {
    if(x2 == 0){
        console.log("no se puede dividir");// si no retorno nada, se devuelve undefined
    }
    else{
        return x1/x2;
    }
}

//exporto con el nombre suma, la funcion add de este archivo
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;








