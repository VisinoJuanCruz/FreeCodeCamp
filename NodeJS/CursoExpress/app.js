const { application } = require('express');
const express = require('express');
const app = express();



//const { matematicas } = require('./datos/cursos.js').infoCursos;
//const { programacion } = require('./datos/cursos.js').infoCursos;
//Routers

const infoCursos = require('./datos/cursos')

//app.use('/api/cursos/programacion', routerProgramacion);
const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas);

//Routing
app.get('/',(req,res) => {
    res.send('Mi primer servidor. Cursos.')
});

app.get('/api/cursos',(req,res) => {

    res.send(JSON.stringify(infoCursos));
});


const PUERTO = 3000;
// const PORT = process.env.PORT || 3000; Es lo mismo que lo de arriba, solo que es para cuando el servidor lo asigna el host donde se tiene la pagina

app.listen(PUERTO,()=> {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`)
});