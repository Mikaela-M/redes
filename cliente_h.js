import { Socket } from 'net';   

function a(){

    var cliente = new Socket();
    cliente.connect(5000, 'moodle.inf.poa.ifrs.edu.br', function(){
        console.log("alo")
        cliente.write('a');
    });

    cliente.on('data', function (message){
        console.log('Received message: ${message}')
        document.getElementById('teste').value = message;
        cliente.destroy();
    });

    cliente.on('close', function() {
        console.log('Connection closed');
    });
}

a();