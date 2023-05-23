async function sendAddress(){
    const address = document.getElementById("address").value;
    location.replace('/getSBalance?address='+address);
}
async function setAddress(Address){
    document.getElementById("address").value=Address;
}

function getParametros(url) {
    let queryString = url.split('?')[1]; // separar la url para obtener los parametros
    let params = queryString.split('&'); // separar los parametros
    let parametros = {}; // crear un objeto para almacenar los parametros
    for (const param of params) { // iterar sobre los parametros
      const [clave, valor] = param.split('='); // separar clave y valor
      parametros[clave] = valor; // asociar clave y valor en la lista de parametros
    }
    return parametros; // devolver los parametros
  }


  window.onload = async function() { // ejecutar una funcion una vez que la pagina ya haya sido cargada
    let url = await window.location.href; // obtener la url actual
    let parametros = await getParametros(url); // obtener los parametros get
    setAddress(parametros.address);
  };