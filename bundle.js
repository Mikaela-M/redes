(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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
},{"net":1}]},{},[2]);
