// Funcion asincrona
async function miFuncion(){
    return "Hola!"
}

// Es lo mismo que esto
function miFuncion2() {
    return Promise.resolve("Hola!");
}

// Como lo usariamos en una promesa
miFuncion2().then(
    function(value){return "Exito"},
    function(error){return "Error"}
);

// Como usarlo con async
//let respuesta = await miFuncion();

console.log(miFuncion2);