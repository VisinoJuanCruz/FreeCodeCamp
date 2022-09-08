const http = require('http');

const servidor = http.createServer((req,res) =>{
    //Acá va el proceso que realiza cuando recibe la solicitud.
    console.log('Nueva solicitud.')
    res.end('Hola, mundo!'); //Es lo que se envia como respuesta.
});
const PUERTO = 3000;
servidor.listen(PUERTO,() => {
    console.log(`El servidor está escuchando en ${PUERTO}`)
});