const net = require('net');
const express = require('express');
const app = express();
const port = 3000;
let dateMessage;

app.listen(port, () => {
    console.log(`Porta ${port}`)
})

function connectTCP() {
    const cliente = new net.Socket();
    cliente.connect(5000, 'moodle.inf.poa.ifrs.edu.br', function () {
        console.log("alo")
        cliente.write('a');
    });

    cliente.on('data', function (message) {
        console.log(`Received message: ${message}`);
        dateMessage = message;
        cliente.destroy();
    });

    cliente.on('close', function () {
        console.log('Connection closed');
    });
}

connectTCP();
app.get('/', (req, res) => {
    res.send(`${dateMessage}`)
})

