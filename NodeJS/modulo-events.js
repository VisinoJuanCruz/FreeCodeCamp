const EventEmitter = require('events');

console.log(EventEmitter);

const emisorProductos = new EventEmitter(); //EventHandler, funciones que esperan a que ocurra el evento para ejecutarse.
let i = 0;
emisorProductos.on('compra', (total) => {
    i++;
    console.log('compra realizada. '+ i + " $" + total);
});
emisorProductos.emit('compra', 500);
emisorProductos.emit('compra', 250);

const estatusPedido = () => {
    return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log(estatusPedido());
        if(estatusPedido()){
            resolve('Pedido exitoso. Gracias por su compra');
        } else {
            reject('Ocurrio un error. Intente nuevamente.');
        }
    },1000);
})
///DESDE LA LINEA 28 A LA 36, ES LO MISMO QUE LO DE LA 39 A LA 45.
const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}
const rechazarPedido = (mensajeDeError) =>{
    console.log(mensajeDeError);
}

miPedidoDePizza.then(manejarPedido,rechazarPedido);


miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion);
    })
//    .then(null,(mensajeDeError) => {
//        console.log(mensajeDeError);
    //En vez de hacer un ".then(null,[etc]) hago un catch y saco el null".
    .catch((mensajeDeError)=>{
        console.log(mensajeDeError);
    })