const express = require('express');

const routerProgramacion = express.Router();
const { programacion } = require('../datos/cursos.js').infoCursos

//Middleware
//Las funciones Middleware se ejecutan:
//-Despues de recibir una solictud.
//-Antes de enviar una respuesta.
routerProgramacion.use(express.json());

routerProgramacion.get('/',(req,res) => {

    res.send(JSON.stringify(programacion));
});


routerProgramacion.get('/:lenguaje',(req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    if(req.query.ordenar === 'vistas'){
        res.send(JSON.stringify(resultados.sort((a,b)=> b.vistas - a.vistas )));
    }

    res.send(JSON.stringify(resultados));
})



routerProgramacion.get('/:lenguaje/:nivel', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.nivel === nivel && curso.lenguaje === lenguaje)

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos sobre ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));
});


routerProgramacion.post('/',(req,res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});

routerProgramacion.put('/:id',(req,res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);
    console.log(cursoActualizado);
    console.log(id);
    console.log(indice);
    if(indice >= 0) {
        programacion[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(programacion));
})

routerProgramacion.patch('/:id',(req,res) => {

    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada);

        res.send(JSON.stringify(programacion));
    }


})

routerProgramacion.delete('/:id', (req,res) => {
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){
        programacion.splice(indice, 1);
    }else{
        res.status(404).send("No se pudo eliminar");
    }

    res.send(JSON.stringify(programacion));
})

module.exports = routerProgramacion;