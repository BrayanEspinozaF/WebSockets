//variable que permite al frontend conectarse al backend
var socket = io.connect(`http://localhost:3002`, {'forceNew':true});

//manda al servidor un mensaje de connect y aparece en console.log