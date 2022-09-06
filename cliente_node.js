    var net = require('net');
    
function a(){
    var cliente = new net.Socket();
    cliente.connect(5000, 'moodle.inf.poa.ifrs.edu.br', function(){
        console.log("alo")
        cliente.write('a');
    });

    cliente.on('data', function (message){
        console.log(`Received message: ${message}`);
        document.getElementById('teste').value = 'teste';
        alert('aafasfasf');

        cliente.destroy();
    });

    cliente.on('close', function() {
        console.log('Connection closed');
    });
}

document.onload = a();