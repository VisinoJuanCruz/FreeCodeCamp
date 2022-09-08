const fs = require('fs');  // Todos los eventos de este modulo son asíncronos, a no ser que le agregue Sync al final del nombre de la funcion.



//Leer el contenido de un archivo
fs.readFile('prueba-fs.html', 'utf-8', (err,contenido) => {
    if(err) {
        throw (err); // Throw corta la ejecuccion de la funcion.
    }
    console.log(contenido);
    });

//Cambia el nombre de un archivo.
fs.rename('prueba-fs.html', 'main.html', (err) => {
    if(err){
        throw(err);
    }
    console.log("Nombre cambiado exitosamente.")
});


//Agrega contenido nuevo al final del archivo.
fs.appendFile('main.html', '<p>Fin del archivo</p>', (err) => {
    if(err){
        throw err;
    }
    console.log("Contenido agregado al final del archivo.")
});


//Cambia el contenido de un archivo por un contenido nuevo.
fs.writeFile('prueba-fs.html','Nuevo contenido',(err) => {
    if(err){
        throw err;
    }
    console.log('Contenido del archivo reemplazado.')
})


//Elimina un archivo.
fs.unlink('prueba-fs.html');