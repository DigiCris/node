// hay algunos nodos precargados por defecto al instalar node
// estos los podemos encontrar en la documentacion:
// https://nodejs.org/dist/latest-v20.x/docs/api/
// generamente a la constante se la llama igual que al modulo
const os=require('os'); // sin ./ porque esta en node y no en mi ruta

console.log(os.platform());
console.log(os.freemem());