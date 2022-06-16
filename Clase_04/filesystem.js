var fs = require('fs');

// Crear un archivo
fs.appendFileSync('primerTexto.txt', 'Hola Comision 31010!!!\n', function(err) {
    if (err) throw err;
    console.log("Guardado!");
});

// Escribir un archivo sin contenido
fs.open('./segundoTexto.txt', 'w', function(err, file){
    if (err) throw err;
    console.log("Guardado!")
})

// Crear un archivo usando write
fs.writeFileSync('tercerTexto.txt', 'Hola contenido =)', function(err){
    if (err) throw err;
    console.log("Guardado!!!");
})

// Vamos a modificar un archivo con append
fs.appendFileSync('./primerTexto.txt', 'Son las 20:48', function(err){
    if (err) throw err;
    console.log("Actualizado =)")
})

// Otra forma de modificar un archivo es con write
fs.writeFileSync('./segundoTexto.txt', 'Esta es la primer linea!', function(err){
    if (err) throw err;
    console.log("El archivo ha sido modificado con exito!");
});

// Esta es la forma de borrar un archivo
fs.unlink('./borrar.txt', function(err){
    if (err) throw err;
    console.log("Su archivo ha sido eliminado con exito!!!")
});