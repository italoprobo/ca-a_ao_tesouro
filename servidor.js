"use strict";
exports.__esModule = true;
var net = require("net");
var server = net.createServer(function (socket) {
    console.log("Cliente conectado: ".concat(socket.remoteAddress, ":").concat(socket.remotePort));
    socket.write('Olá, cliente!\n');
    socket.on('data', function (data) {
        console.log("Mensagem do cliente: ".concat(data.toString()));
    });
    socket.on('end', function () {
        console.log('Cliente desconectado');
    });
});
server.listen(3000, function () {
    console.log('Servidor inicializado na porta 3000');
});
