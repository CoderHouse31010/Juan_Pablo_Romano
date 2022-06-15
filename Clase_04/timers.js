// Timeout
function miSaludo(){
    console.log("Buenas buenas comision 31010");
}

const miTiempo = setTimeout(miSaludo, 5000);

// Set Interval
setInterval(function () { console.log("Este es el clima!!!")}, 600000);
setInterval(miSaludo, 60000);