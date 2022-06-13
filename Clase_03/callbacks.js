// Estructura de un callback
function segunda(){
    console.log("Hola Gianina!!!!")
}

function primera(saludo) {
    return saludo;
}

console.log(primera(segunda()));