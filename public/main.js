//variable que permite al frontend conectarse al backend
var socket = io.connect(`http://localhost:3002`, {'forceNew':true});

//el cliente maneja datos mediante mensajes, esto se llama eventos y se mostraran por la consola del navegador
socket.on('messages', function(data){
    console.log(data);
});