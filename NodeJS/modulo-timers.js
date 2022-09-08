//Contiene funciones que ejecutan un codigo luego de cierto periodo de tiempo.


function mostrarTema(tema){
    console.log("Muestro el tema: "+ tema);
    
}



setTimeout(mostrarTema,2000,"Node.js"); // Para ejecutar el codigo luego de un numero especifico de milisegundos.


setImmediate(mostrarTema,"Python"); // Se usa para ejecutar codigo asincrono en la proxima iteracion de los ciclos de eventos de node.
// se ejecuta lo más rapido posible de forma asincrona.

setInterval(mostrarTema,3000,"C#") // Ejecutar la funcion infinitamente con intervalos de tiempo entre cada vez que se ejecuta.