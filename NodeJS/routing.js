const http = require('http');
const {infoCursos} = require('./cursos');
const PUERTO = 3000;
const servidor = http.createServer((req,res) => {
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`)

    }

});

servidor.listen(PUERTO,()=>{
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`)
});

function manejarSolicitudGET(req,res){
    const path = req.url;
    if(path === '/'){
        return res.end(`Bienvenidos a mi primer servidor y API creados con Node.js`)
    }else if(path === '/cursos'){
        return res.end(JSON.stringify(infoCursos));
    }else if(path === '/cursos/programacion'){
        return res.end(JSON.stringify(infoCursos.programacion))
    }

    res.statusCode = 404;
    res.end(`El recurso solicitado no existe.`)
}

function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path==='/cursos/programacion'){
        
        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();

        req.on('end', () => {
            console.log(cuerpo);  // cuerpo es lo que le mando en POST del archivo http
            console.log(typeof cuerpo);
            cuerpo = JSON.parse(cuerpo); // trasnformo el string en object.
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);
            res.end(`El servidor recibio una solicitud post para /cursos/programacion`);
        });
        });
        
        //return res.end(`El servidor recibio una solicitud post para /cursos/programacion`);
    }
}