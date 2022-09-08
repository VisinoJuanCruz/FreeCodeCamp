const http = require('http');
const { clearScreenDown } = require('readline');
const servidor = http.createServer((req,res)=>{
    res.end('Hola mundo, que hay?.')
});

const PUERTO = 3000;

servidor.listen(3000,()=>{
    console.log(`Hola man`)
});