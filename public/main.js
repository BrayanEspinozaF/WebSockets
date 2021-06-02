//variable que permite al frontend conectarse al backend
var socket = io.connect(`http://localhost:3002`, {'forceNew':true});

//el cliente maneja datos mediante mensajes, esto se llama eventos y se mostraran por la consola del navegador
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

//template para imprimir el contenido
function render(data){
        //se inicia el manejo de strings que viene en ES6 se usan las comillas ``
        //la variable se colocan con el signo $ y entre {}

        //se restructura  para manejar el array con map
var html = data.map(function(elem, index){
    return( `<div>
                <strong>${elem.autor}</strong>:
                <em>${elem.texto}</em>
            </div>`);
        }).join(" ");

            document.getElementById('messages').innerHTML = html;
}

// funcion para agregar mensajes 
function addMessages(e){
    var playload = {
        autor: document.getElementById('username').value,
        texto: document.getElementById('texto').value
    };
    socket.emit('new-message', playload);
    return false;
}