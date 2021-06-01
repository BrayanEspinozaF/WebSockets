var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res){
    res.status(200).send('hola mundo');
});

io.on('connection', function(socket) {
    console.log('Alguien se ha conectado con socket')
    //aqui se controlan los eventos del cliente mediante sockets
    socket.emit('messages', {
        id: 1,
        texto: 'Hola soy un mensaje',
        autor: 'Brayan Espinoza Fernandez'
    });
});

server.listen(3002, function(){
    console.log(`el servidor esta corriendo en localhost:3002`)
});